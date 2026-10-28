/**
 * Central source-of-truth for SEO constants used across JSON-LD schemas.
 *
 * AggregateRating note:
 * Google requires that ratingValue and ratingCount reflect REAL, verifiable
 * customer reviews. Do NOT set these to arbitrary numbers — use your actual
 * Google / Trustpilot / platform aggregate. Update this file whenever the
 * counts change materially (suggested cadence: quarterly).
 *
 * EPICWARE_AGGREGATE (4.8★ / 809, "blended across multiple products") was
 * deleted 2026-10-28 — it was never sourced anywhere, and the business
 * owner confirmed it shouldn't be used. For a site-wide "our rating" badge,
 * use EPICWARE_GOOGLE_RATING in lib/site/proof.ts instead — that one is
 * tied to a real Google place_id. PRODUCT_RATINGS below is a separate,
 * narrower set of per-product numbers; it hasn't been through the same
 * confirmation pass and currently has no consumer in the codebase.
 */

export const PRODUCT_RATINGS = {
  epicmap: {
    ratingValue: "4.8",
    ratingCount: "109",
    bestRating: "5",
    worstRating: "1",
  },
  epicreview: {
    ratingValue: "4.9",
    ratingCount: "56",
    bestRating: "5",
    worstRating: "1",
  },
  epicengage: {
    ratingValue: "4.7",
    ratingCount: "80",
    bestRating: "5",
    worstRating: "1",
  },
  epicsocial: {
    ratingValue: "4.8",
    ratingCount: "89",
    bestRating: "5",
    worstRating: "1",
  },
} as const;

/** Shared provider block — reused across all product/service schemas */
export const EPICWARE_PROVIDER = {
  "@type": "Organization" as const,
  name: "Epicware Pte. Ltd.",
  url: "https://www.epicware.ai",
};
