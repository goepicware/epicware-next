/**
 * Shared fictional business names for the /services/local-seo and
 * /services/review-management illustrative visuals (components/visuals/).
 * Neither name belongs to a real business — checked by web search against
 * the Singapore market (Epicware's primary, proven market) on 2026-10-29,
 * same verification step that replaced "Lumina Aesthetics Clinic" with
 * "Kova Skin Clinic" in components/patient-engine/fixtures.ts after it
 * turned out to be a real Bali clinic.
 *
 * - "Hearth & Table" — searched as a Singapore restaurant/cafe. No match;
 *   closest unrelated results were "Old Hen Kitchen", "butter tgt" and
 *   "Mnemonic Brew & Craft".
 * - "Cedar & Vine Salon" — searched as a Singapore hair/beauty salon. No
 *   match; closest unrelated results were generic salon-guide listicles
 *   (Time Out, The Honeycombers, Seth Lui) naming unrelated salons.
 *
 * Reused across every local-seo / review-management visual that needs a
 * concrete business identity (multi-outlet mocks, review cards) instead
 * of each component inventing its own.
 */
export const LOCAL_SEO_FICTIONAL_BUSINESS = "Hearth & Table";
export const REVIEW_MANAGEMENT_FICTIONAL_BUSINESS = "Cedar & Vine Salon";

/** Fictional multi-outlet locations for Hearth & Table — generic Singapore area names, not real outlet addresses. */
export const LOCAL_SEO_OUTLETS = ["Tampines", "Jurong", "Orchard"] as const;

/** Fictional reviewer names for Cedar & Vine Salon's review cards — first name + last initial, not real individuals. */
export const FICTIONAL_REVIEWERS = ["Mei L.", "Daniel K.", "Priya R.", "Farah A."] as const;
