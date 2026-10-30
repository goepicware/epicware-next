"use client";

/**
 * Google Ads conversion tracking — the single place every lead form calls
 * into. Wraps the gtag() base tag already loaded once, site-wide, in
 * app/layout.tsx (`gtag('config', 'AW-18302464942')`) — this file never
 * injects its own <Script> tag or a second `config` call for that ID.
 *
 * Fires a conversion ONLY when all of these hold:
 *  - a `gtag` function actually exists on `window` (ad blockers, a failed
 *    script load, or SSR all mean it silently does nothing instead)
 *  - `isProductionEnvironment()` says this is production (see below)
 *  - the caller invokes it from a confirmed 2xx lead-API response — this
 *    file has no opinion on *when* to call it, that's every form's own
 *    success handler, right next to its existing Meta `trackEvent("Lead")`
 *    call
 *
 * Every call must carry the SAME `transactionId` across automatic retries
 * of one submission (see createLeadTransactionId) so Google's own
 * `transaction_id`-based deduplication collapses them into one conversion.
 *
 * `?gads_debug=1` bypasses the production gate but never calls `gtag` —
 * it only console.logs what would have been sent, for testing a preview
 * deployment without touching real conversion data.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Ads account ID — the conversion ID half of every `send_to` value. */
export const GOOGLE_ADS_ID = "AW-18302464942";

/**
 * "EW | Lead Form Submit" — the shared label every lead form uses except
 * Contact Us. One shared label across pages (not one per landing page) so
 * Google's bidding has a single, large enough data set to learn from.
 */
export const GOOGLE_ADS_LEAD_LABEL = "q1pgCKvf_OocEK7npZdE";

/**
 * Contact Us deliberately stays on its own conversion label — mostly
 * organic, lower-intent traffic that shouldn't be mixed into the
 * ad-driven GOOGLE_ADS_LEAD_LABEL action. See components/contact/ContactForm.tsx.
 */
export const GOOGLE_ADS_CONTACT_LABEL = "WMlDCNbP7tMcEK7npZdE";

function generateUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback for older environments without crypto.randomUUID — same
  // pattern as lib/meta-tracking.ts's generateEventId.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/**
 * Call once per form submission attempt (not once per retry) and reuse
 * the returned id across every automatic retry AND any manual "Retry"
 * action for that same submission, so a retried or double-clicked
 * submission still reports exactly one conversion.
 */
export function createLeadTransactionId(): string {
  return generateUuid();
}

function isDebugMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get("gads_debug") === "1";
  } catch {
    return false;
  }
}

/**
 * Production-only gate. Primary signal is NEXT_PUBLIC_VERCEL_ENV, per the
 * brief's own instruction — but that variable only populates if "Automatically
 * expose System Environment Variables" is turned on for this Vercel
 * project (unverifiable from code; confirm in the dashboard). The
 * production hostname is a second, independent signal specifically so a
 * disabled toggle doesn't silently stop every conversion forever — if
 * either says production, it's production.
 */
function isProductionEnvironment(): boolean {
  if (typeof window === "undefined") return false;
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") return true;
  return window.location.hostname === "www.epicware.ai";
}

/** Returns the phone normalized to E.164 only if it already looks like E.164 after stripping spaces/dashes/parens — never a best-effort guess, since a malformed value is worse than omitting it. */
function toE164(phone?: string): string | undefined {
  if (!phone) return undefined;
  const stripped = phone.replace(/[\s()-]/g, "");
  return /^\+[1-9]\d{6,14}$/.test(stripped) ? stripped : undefined;
}

export interface TrackGoogleAdsLeadOptions {
  /** Same value across every retry of one submission — see createLeadTransactionId(). */
  transactionId: string;
  /** Not sent to Google — only used to label the console output under ?gads_debug=1 so each form's test fire is identifiable. */
  leadType: string;
  country?: string;
  value?: number;
  currency?: string;
  /** Defaults to GOOGLE_ADS_LEAD_LABEL. Pass GOOGLE_ADS_CONTACT_LABEL for Contact Us. */
  conversionLabel?: string;
  /** Only sent as enhanced-conversions user_data when NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS=true. */
  email?: string;
  /** Must already be E.164 (+65…, +1…) — anything else is silently omitted, never guessed at. Only used under the enhanced-conversions flag. */
  phone?: string;
  /**
   * Called once Google's own event_callback fires, or after a 1s timeout,
   * whichever happens first. If this submission navigates away on
   * success (e.g. to a thank-you page or an external redirect), do that
   * navigation from inside onComplete — never before calling this function.
   */
  onComplete?: () => void;
}

export function trackGoogleAdsLead(options: TrackGoogleAdsLeadOptions): void {
  const {
    transactionId,
    leadType,
    country,
    value = 1.0,
    currency = "SGD",
    conversionLabel = GOOGLE_ADS_LEAD_LABEL,
    email,
    phone,
    onComplete,
  } = options;

  let completed = false;
  const complete = () => {
    if (completed) return;
    completed = true;
    onComplete?.();
  };

  if (isDebugMode()) {
    // eslint-disable-next-line no-console
    console.log("[gads_debug] would send conversion (not actually sent):", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value,
      currency,
      transaction_id: transactionId,
      leadType,
      country,
    });
    complete();
    return;
  }

  if (!isProductionEnvironment()) {
    complete();
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    complete();
    return;
  }

  if (process.env.NEXT_PUBLIC_GADS_ENHANCED_CONVERSIONS === "true" && (email || phone)) {
    const e164Phone = toE164(phone);
    if (email || e164Phone) {
      window.gtag("set", "user_data", {
        ...(email ? { email } : {}),
        ...(e164Phone ? { phone_number: e164Phone } : {}),
      });
    }
  }

  const timeoutId = window.setTimeout(complete, 1000);

  try {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value,
      currency,
      transaction_id: transactionId,
      event_callback: () => {
        window.clearTimeout(timeoutId);
        complete();
      },
    });
  } catch {
    window.clearTimeout(timeoutId);
    complete();
  }
}
