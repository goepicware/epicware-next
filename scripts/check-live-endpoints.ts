/**
 * Post-deploy smoke test: POSTs a realistic test payload to every API
 * route the live frontend actually calls, and fails (non-zero exit) on
 * any non-2xx response. Built after discovering that 5 routes the
 * /free-audit wizard depends on had never been deployed — the frontend
 * was committed, the backend wasn't, and nothing caught it because
 * nothing ever checked the live site after a deploy.
 *
 * Run after every production deploy:
 *   BASE_URL=https://www.epicware.ai pnpm check:live-endpoints
 *
 * All test payloads are clearly marked so a human (or the receiving
 * inbox) can tell they're synthetic, not a real lead/customer.
 */

const BASE_URL = process.env.BASE_URL ?? "https://www.epicware.ai";
const MARKER = "SMOKE-TEST — automated check-live-endpoints.ts — ignore";

interface EndpointCheck {
  path: string;
  body: Record<string, unknown>;
  /** Called by the live frontend from this file — kept here so a future reader can verify the list is still accurate. */
  calledFrom: string;
}

const CHECKS: EndpointCheck[] = [
  {
    path: "/api/audit-lead",
    calledFrom: "app/free-audit/FreeAuditWizard.tsx",
    body: {
      name: MARKER,
      email: "smoke-test@epicware.ai",
      phone: "+65 0000 0000",
      leadType: "business",
      businessName: MARKER,
      businessAddress: "N/A",
      websiteUrl: "https://example.com",
      placeId: "smoke-test",
      keywords: ["smoke test"],
      radiusKm: 1,
    },
  },
  {
    path: "/api/audit/resolve-gbp",
    calledFrom: "app/free-audit/StepGBP.tsx",
    // Needs a real, stable Google Business Profile URL to hit the happy
    // path — without one this will legitimately 400 ("not found"), which
    // still proves the route exists and handles bad input, just not that
    // Google Places resolution actually works end to end. Set
    // SMOKE_TEST_GBP_URL to a real listing to test the full happy path.
    body: { url: process.env.SMOKE_TEST_GBP_URL ?? "https://maps.app.goo.gl/invalid-smoke-test" },
  },
  {
    path: "/api/audit/keyword-intel",
    calledFrom: "app/free-audit/FreeAuditWizard.tsx",
    body: {
      businessName: MARKER,
      shortName: "Smoke Test",
      address: "1 Raffles Place, Singapore",
      neighbourhood: "Raffles Place",
      placeTypes: ["restaurant"],
      lat: 1.2838,
      lng: 103.8513,
      reviewCount: 10,
    },
  },
  {
    path: "/api/audit/ai-visibility",
    calledFrom: "app/free-audit/FreeAuditWizard.tsx",
    body: {
      businessName: MARKER,
      shortName: "Smoke Test",
      categoryLabel: "Restaurant",
      neighbourhood: "Raffles Place",
      keywords: ["smoke test restaurant singapore"],
    },
  },
  {
    path: "/api/audit/send-report-email",
    calledFrom: "app/free-audit/FreeAuditWizard.tsx",
    body: {
      name: MARKER,
      email: "smoke-test@epicware.ai",
      report: {
        gbpName: MARKER,
        gbpCategory: "Restaurant",
        gbpAddress: "1 Raffles Place, Singapore",
        gbpRating: 4.5,
        gbpReviewCount: 10,
        scorecard: { profile: 50, reviews: 50, keywords: 50, visibility: 50, overall: 50 },
        aiSummary: "Smoke test — ignore.",
        checkItems: [],
        recommendations: [],
        invisibleGridPoints: 0,
        totalGridPoints: 25,
        estimatedMonthlyRevenue: 0,
        neighbourhood: "Raffles Place",
        shortBusinessName: "Smoke Test",
      },
    },
  },
  {
    path: "/api/meta-capi",
    calledFrom: "lib/meta-tracking.ts (called from multiple components)",
    body: { event_name: "SmokeTest", event_id: "smoke-test", user_data: {} },
  },
];

interface CheckResult {
  path: string;
  status: number | null;
  ok: boolean;
  error?: string;
}

async function checkEndpoint(check: EndpointCheck): Promise<CheckResult> {
  try {
    const res = await fetch(`${BASE_URL}${check.path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(check.body),
    });
    return { path: check.path, status: res.status, ok: res.status >= 200 && res.status < 300 };
  } catch (err) {
    return { path: check.path, status: null, ok: false, error: String(err) };
  }
}

async function main() {
  console.log(`=== Live endpoint check: ${BASE_URL} ===\n`);
  const results = await Promise.all(CHECKS.map(checkEndpoint));

  let failing = 0;
  for (const r of results) {
    if (r.ok) {
      console.log(`  [PASS] ${r.path} -> ${r.status}`);
    } else {
      failing++;
      console.log(`  [FAIL] ${r.path} -> ${r.status ?? "no response"}${r.error ? ` (${r.error})` : ""}`);
    }
  }

  if (!process.env.SMOKE_TEST_GBP_URL) {
    console.log(
      "\nNote: SMOKE_TEST_GBP_URL not set — /api/audit/resolve-gbp was only checked for route existence/graceful error handling, not the full happy path."
    );
  }

  if (failing > 0) {
    console.log(`\n${failing}/${results.length} endpoint(s) FAILED.`);
    process.exitCode = 1;
    return;
  }
  console.log(`\nAll ${results.length} endpoints returned 2xx.`);
}

main();
