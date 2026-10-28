/**
 * Single source of truth for proof numbers used in trust badges and copy.
 *
 * Do NOT invent or round up numbers here. If a real, sourced figure isn't
 * available, use a TODO_PROOF placeholder and keep it out of rendered
 * copy until someone supplies the real number.
 *
 * ---------------------------------------------------------------------
 * RATING — EPICWARE_AGGREGATE deleted 2026-10-28
 * ---------------------------------------------------------------------
 * lib/seo-config.ts used to export EPICWARE_AGGREGATE (4.8★ / 809,
 * "blended across multiple products") — unsourced, never cited anywhere.
 * Deleted entirely so it can't be reused by accident; don't recreate it.
 *
 * EPICWARE_GOOGLE_RATING below is Epicware's own real Google Business
 * Profile rating, tied to an actual place_id (app/reviews/page.tsx
 * fetches it live from Google Places, with this as the static fallback).
 * Confirmed by the business owner (2026-10-28): 5.0★ / 9 reviews. This
 * is the only rating number to use anywhere on the site. Always render
 * both the value AND the count together ("5.0★ from 9 Google reviews")
 * — never a bare "5.0★" on its own; 9 reviews reads very differently
 * from an unstated large sample, and hiding the count would misrepresent it.
 *
 * ---------------------------------------------------------------------
 * OUTLETS / REVIEWS REMOVED / BRANDS SERVED
 * (Phase 0/1 audit, 2026-10-27; confirmed 2026-10-28)
 * ---------------------------------------------------------------------
 * Conflicting, unsourced numbers were in circulation site-wide for all
 * three of these — "500+"/"100+"/"50+ outlets", "500+"/"100+"/"50+
 * reviews removed", "50+ brands served" among others. Confirmed with the
 * business owner (2026-10-28): all three are actually 50+. Every
 * occurrence of any old number for any of the three should read from the
 * matching PROOF.* value below instead of a hardcoded string, so none of
 * them can drift into a conflicting number again.
 *
 * "Years in business" — appears as "10+ years" in several places
 * (app/about/page.tsx, app/local-seo-singapore/*). Internally consistent
 * but still has no cited source — not yet confirmed, left as a TODO.
 */

export { EPICWARE_PROVIDER } from "@/lib/seo-config";

/** Epicware's own Google Business Profile rating — see the file header comment. Always render value + count together. */
export const GOOGLE_PLACE_ID = "ChIJIewhBnQZ2jEREYj-Xh1_JMk";
export const EPICWARE_GOOGLE_RATING = {
  value: 5.0,
  count: 9,
  verified: true as const,
} as const;

/** "5.0★ from 9 Google reviews" — the one and only rating badge wording. Never render value without count. */
export function formatGoogleRatingBadge(): string {
  return `${EPICWARE_GOOGLE_RATING.value.toFixed(1)}★ from ${EPICWARE_GOOGLE_RATING.count} Google reviews`;
}

/** Explicit placeholder type so TODO(proof) values fail loudly if rendered unguarded. */
export type ProofValue = { value: string; verified: true } | { value: null; verified: false; todo: string };

export const PROOF = {
  /** Confirmed by the business owner 2026-10-28 — see file header comment. */
  outletsManaged: {
    value: "50+",
    verified: true,
  } satisfies ProofValue,

  /** Confirmed by the business owner 2026-10-28 — see file header comment. */
  reviewsRemoved: {
    value: "50+",
    verified: true,
  } satisfies ProofValue,

  /** Confirmed by the business owner 2026-10-28 — see file header comment. */
  brandsServed: {
    value: "50+",
    verified: true,
  } satisfies ProofValue,

  /**
   * "10+ years" is consistent everywhere it appears but has no cited
   * source. Not confirmed false — just unverified. Flag for the business
   * owner to confirm before Phase 3/5 pages reuse it.
   */
  yearsInBusiness: {
    value: null,
    verified: false,
    todo: "TODO(proof): confirm '10+ years' is accurate and sourceable before reusing on new country/service pages.",
  } satisfies ProofValue,
} as const;

/**
 * Per-service add-on pricing, by currency — distinct from the PLANS
 * subscription tiers in lib/pricing-data.ts. Review removal is SGD 200 in
 * Singapore (confirmed throughout the site); USD 200 for the US market
 * confirmed by the business owner 2026-10-28 for the Phase 5 USA pages —
 * same number, not a currency conversion.
 */
export const PRICING = {
  reviewRemoval: {
    SGD: 200,
    USD: 200,
  },
} as const;
