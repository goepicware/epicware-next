/**
 * Single source of truth for proof numbers used in trust badges and copy.
 *
 * Do NOT invent or round up numbers here. If a real, sourced figure isn't
 * available, use a TODO_PROOF placeholder and keep it out of rendered
 * copy until someone supplies the real number.
 *
 * ---------------------------------------------------------------------
 * RATINGS — two genuinely different numbers, do not conflate them
 * ---------------------------------------------------------------------
 * EPICWARE_AGGREGATE (lib/seo-config.ts, re-exported below) is an
 * unsourced figure "blended across multiple products" (its own comment)
 * — 4.8★ / 809 ratings, no cited source anywhere. Confirmed with the
 * business owner (2026-10-28) NOT to use this, or any "X★ on Google"
 * wording built from it, pending a real source.
 *
 * EPICWARE_GOOGLE_RATING below is different: it's Epicware's own real
 * Google Business Profile rating, tied to an actual place_id
 * (app/reviews/page.tsx fetches it live from Google Places, with this
 * as the static fallback). Confirmed by the business owner
 * (2026-10-28): 5.0★ / 9 reviews. This is the number to use for any new
 * "our rating" badge — not EPICWARE_AGGREGATE.
 *
 * ---------------------------------------------------------------------
 * OUTLETS MANAGED (Phase 0/1 audit, 2026-10-27; confirmed 2026-10-28)
 * ---------------------------------------------------------------------
 * Three conflicting, unsourced numbers were in circulation site-wide:
 * "500+", "100+", and "50+ outlets managed/managed/protected". Confirmed
 * with the business owner (2026-10-28): the real number is 50+. Every
 * occurrence of any of the three old numbers should read from
 * PROOF.outletsManaged below instead of a hardcoded string, so this
 * can never drift into a fourth conflicting number again.
 *
 * "Years in business" — appears as "10+ years" in several places
 * (app/about/page.tsx, app/local-seo-singapore/*). Internally consistent
 * but still has no cited source — not yet confirmed, left as a TODO.
 */

export { EPICWARE_AGGREGATE, PRODUCT_RATINGS, EPICWARE_PROVIDER } from "@/lib/seo-config";

/** Epicware's own Google Business Profile rating — see the file header comment for why this isn't EPICWARE_AGGREGATE. */
export const GOOGLE_PLACE_ID = "ChIJIewhBnQZ2jEREYj-Xh1_JMk";
export const EPICWARE_GOOGLE_RATING = {
  value: 5.0,
  count: 9,
  verified: true as const,
} as const;

/** Explicit placeholder type so TODO(proof) values fail loudly if rendered unguarded. */
export type ProofValue = { value: string; verified: true } | { value: null; verified: false; todo: string };

export const PROOF = {
  /** Confirmed by the business owner 2026-10-28 — see file header comment. */
  outletsManaged: {
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
