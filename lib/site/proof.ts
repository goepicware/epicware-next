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
 *
 * ---------------------------------------------------------------------
 * REMOVAL SUCCESS RATE — reverted to unconfirmed 2026-10-28
 * ---------------------------------------------------------------------
 * "94% removal success rate" was in circulation site-wide (case studies,
 * the Singapore SEO FAQ, components/home/NoRemovalNoFee.tsx's own TODO
 * placeholder) as an unconfirmed number. Briefly changed to 98% the same
 * day, but that number's only source was "98% removed" in a business-
 * owner message about a different, unrelated set of stats — Claude
 * invented the "removal success rate" framing in a clarifying question
 * and the owner approved that framing's label, not an independently
 * confirmed calculation. No numerator/denominator exists anywhere.
 * Reverted to TODO pending an actual calculation and explicit
 * re-confirmation — see yearsInBusiness below for the same pattern. The
 * separate "500 bad reviews" → PROOF.reviewsRemoved fix in
 * app/blog/why-negative-reviews-hurt-clinic-reputation/page.tsx made at
 * the same time stands; that one was a genuine stale-number correction,
 * unrelated to the removalSuccessRate mixup.
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
   * Distinct metric from reviewsRemoved (a count, not a rate). Not
   * confirmed — see file header comment for why "98%" doesn't count.
   */
  removalSuccessRate: {
    value: null,
    verified: false,
    todo: "TODO(proof): need an actual calculation (numerator/denominator) and explicit confirmation of this specific metric — not a number pulled from an unrelated message.",
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

  /**
   * Single source of truth for the 4 subscription tiers — confirmed by
   * the business owner 2026-10-28. Currency-neutral numbers: SGD in
   * Singapore, USD elsewhere, same number either way (no conversion),
   * same pattern as reviewRemoval above. lib/pricing-data.ts's PLANS
   * array, app/pricing/page.tsx's JSON-LD, and every USA money page's
   * `pricing` frontmatter all read from this — nothing should hardcode
   * a plan price independently.
   *
   * Authority and Domination absorbed the previously-scheduled Sept 15,
   * 2026 price increase (lib/price-increase.ts's PRICE_INCREASES —
   * newMonthly/newAnnual 899/764 and 1800/1530 respectively). That
   * cutoff is in the past as of this change (today: 2026-10-28), so
   * those are now the current, permanent prices, not a future one —
   * the temporal swap mechanism in price-increase.ts and
   * components/pricing/PricingCards.tsx was retired rather than kept
   * running alongside this as a second source of truth. That's what
   * caused the original bug: the live UI already showed 899/1800 via
   * the swap, while the raw PLANS data and the JSON-LD (which never
   * applied the swap) stayed stale underneath it.
   */
  plans: {
    foundation: { monthly: 299, annual: 254, perOutlet: 99 },
    authority: { monthly: 899, annual: 764, perOutlet: 99 },
    domination: { monthly: 1800, annual: 1530, perOutlet: 99 },
    fullStack: { monthly: 3800, annual: 3230, perOutlet: 99 },
  },

  /**
   * /90-day-patient-engine (aesthetic-clinic Full Stack offer page) —
   * the two numbers the page's copy needs that don't live anywhere else:
   * the one-time setup fee and the ad-spend floor the ROI calculator
   * enforces. Not shared with any other plan or page.
   */
  patientEngineOffer: {
    setupFee: 1500,
    minAdSpend: 1500,
    /** 5x Bad Review Removal/month, same figure lib/pricing-data.ts's Full Stack tier already lists — value = this * reviewRemoval.SGD. */
    reviewsIncludedPerMonth: 5,
  },
} as const;
