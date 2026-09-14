/**
 * Central source-of-truth for SEO constants used across JSON-LD schemas.
 *
 * AggregateRating note:
 * Google requires that ratingValue and ratingCount reflect REAL, verifiable
 * customer reviews. Do NOT set these to arbitrary numbers — use your actual
 * Google / Trustpilot / platform aggregate. Update this file whenever the
 * counts change materially (suggested cadence: quarterly).
 *
 * Rationale for per-product vs per-service split:
 *   - Service pages (reputation, local-seo, ai-visibility) represent the full
 *     Epicware customer base → use EPICWARE_AGGREGATE.
 *   - Product pages (EpicMap, EpicReview, EpicEngage, EpicSocial) reflect
 *     per-product adoption. If a product is newer it will have fewer ratings.
 *     Reflect that honestly; do not inflate.
 */

export const EPICWARE_AGGREGATE = {
  /** Overall Epicware platform rating — used on service/category pages */
  ratingValue: "4.8",
  /** Total verified customer ratings across all Epicware products */
  ratingCount: "809",
  bestRating: "5",
  worstRating: "1",
} as const;

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
