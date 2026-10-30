/**
 * Behavioral checks for lib/tracking/google-ads.ts — this repo has no
 * jest/vitest, so this follows the existing scripts/check-*.ts convention
 * (plain tsx script, manual assertions, process.exitCode = 1 on failure)
 * instead of installing a test framework for one file.
 *
 * Caveat worth knowing: this script reads/writes `process.env.*` at
 * runtime to flip each case, which works here because tsx runs the
 * module directly under Node with no build step. In the actual Next.js
 * app, `process.env.NEXT_PUBLIC_*` is replaced at BUILD time, not read at
 * runtime — so NEXT_PUBLIC_VERCEL_ENV and NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS
 * must be set before `next build` runs, not just in the Vercel runtime.
 *
 * Minimal DOM shim: only the window surface trackGoogleAdsLead() actually
 * touches (location, gtag, setTimeout/clearTimeout).
 */

interface MockWindow {
  location: { search: string; hostname: string };
  gtag?: (...args: unknown[]) => void;
  setTimeout: typeof setTimeout;
  clearTimeout: typeof clearTimeout;
}

let failures = 0;

function check(label: string, condition: boolean) {
  if (condition) {
    console.log(`  [PASS] ${label}`);
  } else {
    console.log(`  [FAIL] ${label}`);
    failures++;
  }
}

function setWindow(overrides: Partial<MockWindow["location"]> = {}, gtag?: MockWindow["gtag"]) {
  (globalThis as unknown as { window: MockWindow }).window = {
    location: { search: "", hostname: "localhost", ...overrides },
    gtag,
    setTimeout,
    clearTimeout,
  };
}

function clearWindow() {
  delete (globalThis as unknown as { window?: MockWindow }).window;
}

async function run() {
  // Import after setting up the environment for the first case, since the
  // module itself has no top-level side effects that depend on env/window.
  const { trackGoogleAdsLead, createLeadTransactionId, GOOGLE_ADS_ID, GOOGLE_ADS_LEAD_LABEL } = await import(
    "../lib/tracking/google-ads"
  );

  // ---- 1. Fires once, with correct send_to and transaction_id, on production ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "www.epicware.ai" }, (...args: unknown[]) => calls.push(args));
    delete process.env.NEXT_PUBLIC_VERCEL_ENV;
    const transactionId = createLeadTransactionId();
    let completed: boolean = false;
    trackGoogleAdsLead({ transactionId, leadType: "test", onComplete: () => (completed = true) });

    check("fires exactly once", calls.length === 1);
    const [eventName, action, params] = calls[0] as [string, string, Record<string, unknown>];
    check("event name is 'event'", eventName === "event");
    check("action is 'conversion'", action === "conversion");
    check("send_to matches ID + default label", params.send_to === `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`);
    check("transaction_id passed through", params.transaction_id === transactionId);
    check("default value is 1.0", params.value === 1.0);
    check("default currency is SGD", params.currency === "SGD");

    // Manually invoke event_callback like the real gtag would, then confirm onComplete ran.
    (params.event_callback as () => void)();
    check("onComplete runs after event_callback", completed);
    clearWindow();
  }

  // ---- 2. Skips silently when gtag is missing ----
  {
    setWindow({ hostname: "www.epicware.ai" }, undefined);
    let completed: boolean = false;
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", onComplete: () => (completed = true) });
    check("onComplete still runs when gtag is missing (never blocks the form)", completed);
    clearWindow();
  }

  // ---- 3. Skips off production (neither NEXT_PUBLIC_VERCEL_ENV nor hostname say prod) ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "epicware-next-abc123.vercel.app" }, (...args: unknown[]) => calls.push(args));
    delete process.env.NEXT_PUBLIC_VERCEL_ENV;
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test" });
    check("gtag not called on a preview hostname", calls.length === 0);
    clearWindow();
  }

  // ---- 4. NEXT_PUBLIC_VERCEL_ENV=production fires even on a non-epicware hostname ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "localhost" }, (...args: unknown[]) => calls.push(args));
    process.env.NEXT_PUBLIC_VERCEL_ENV = "production";
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test" });
    check("NEXT_PUBLIC_VERCEL_ENV=production is honored even off the prod hostname", calls.length === 1);
    delete process.env.NEXT_PUBLIC_VERCEL_ENV;
    clearWindow();
  }

  // ---- 5. ?gads_debug=1 never calls gtag, regardless of environment ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "localhost", search: "?gads_debug=1" }, (...args: unknown[]) => calls.push(args));
    let completed: boolean = false;
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", onComplete: () => (completed = true) });
    check("gtag never called under ?gads_debug=1", calls.length === 0);
    check("onComplete still runs under ?gads_debug=1", completed);
    clearWindow();
  }

  // ---- 6. Custom conversionLabel (Contact Us) overrides the default ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "www.epicware.ai" }, (...args: unknown[]) => calls.push(args));
    trackGoogleAdsLead({
      transactionId: createLeadTransactionId(),
      leadType: "contact",
      conversionLabel: "CUSTOM_LABEL",
    });
    const params = calls[0]?.[2] as Record<string, unknown> | undefined;
    check("custom conversionLabel is used instead of the default", params?.send_to === `${GOOGLE_ADS_ID}/CUSTOM_LABEL`);
    clearWindow();
  }

  // ---- 7. Timeout fallback: onComplete still runs even if gtag never calls event_callback ----
  {
    setWindow({ hostname: "www.epicware.ai" }, () => {
      /* deliberately never invokes event_callback, simulating a dropped beacon */
    });
    let completed: boolean = false;
    const start = Date.now();
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", onComplete: () => (completed = true) });
    await new Promise((resolve) => setTimeout(resolve, 1100));
    check("onComplete fires via the 1s timeout fallback when event_callback never fires", completed);
    check("timeout fallback waits roughly 1s, not instant", Date.now() - start >= 950);
    clearWindow();
  }

  // ---- 8. Enhanced conversions: user_data only sent when the flag is "true" ----
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "www.epicware.ai" }, (...args: unknown[]) => calls.push(args));
    delete process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS;
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", email: "a@b.com", phone: "+6591234567" });
    check("user_data NOT set when the enhanced-conversions flag is off", !calls.some((c) => c[0] === "set" && c[1] === "user_data"));
    clearWindow();
  }
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "www.epicware.ai" }, (...args: unknown[]) => calls.push(args));
    process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS = "true";
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", email: "a@b.com", phone: "+65 9123 4567" });
    const userDataCall = calls.find((c) => c[0] === "set" && c[1] === "user_data");
    check("user_data IS set when the enhanced-conversions flag is on", !!userDataCall);
    const userData = userDataCall?.[2] as Record<string, unknown> | undefined;
    check("email passed through to user_data", userData?.email === "a@b.com");
    check("phone normalized to E.164 (spaces stripped) in user_data", userData?.phone_number === "+6591234567");
    delete process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS;
    clearWindow();
  }
  {
    const calls: unknown[][] = [];
    setWindow({ hostname: "www.epicware.ai" }, (...args: unknown[]) => calls.push(args));
    process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS = "true";
    trackGoogleAdsLead({ transactionId: createLeadTransactionId(), leadType: "test", phone: "91234567" }); // not E.164 — no leading +
    const userDataCall = calls.find((c) => c[0] === "set" && c[1] === "user_data");
    check("a non-E.164 phone is never sent, not guessed at", !userDataCall);
    delete process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS;
    clearWindow();
  }

  console.log(`\n${failures === 0 ? "All checks passed." : `${failures} check(s) FAILED.`}`);
  if (failures > 0) process.exitCode = 1;
}

run();
