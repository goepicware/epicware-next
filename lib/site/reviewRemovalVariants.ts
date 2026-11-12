/**
 * City and platform landing-page variants for /locations/usa/review-removal/.
 *
 * Scoped deliberately to USA × review-removal only — the only
 * country/service combination with real demand for this today (the
 * parent page converted its first real lead in November 2026). Not a
 * generic cross-country/cross-service system; add one when a second
 * combination actually needs it (YAGNI).
 *
 * `kind` distinguishes the two axes requested:
 *   - "city": covers both Yelp and Google removal for one metro, with
 *     state-specific legal context and local texture — see
 *     content/locations/usa/review-removal/{slug}.mdx.
 *   - "platform": a single-platform deep dive, national in scope, no
 *     city framing — differentiates from the parent page (which covers
 *     both platforms at a high level) by depth, not geography.
 *
 * Deliberately NOT a full city × platform cross-matrix (6 pages) — see
 * the commit message on this file's introduction for why: this
 * repo's own doorway-page similarity gate (scripts/check-page-similarity.ts)
 * exists because of a real near-miss with exactly that duplication
 * pattern, and a full matrix would force far more shared legal/policy
 * prose across sibling pages than 5 differentiated ones do.
 */

export type ReviewRemovalVariantKind = "city" | "platform";

export interface ReviewRemovalVariant {
  slug: string;
  name: string;
  kind: ReviewRemovalVariantKind;
  /** Two-letter US state code, only present for city variants. */
  state?: string;
}

export const REVIEW_REMOVAL_VARIANTS: ReviewRemovalVariant[] = [
  { slug: "miami", name: "Miami", kind: "city", state: "FL" },
  { slug: "los-angeles", name: "Los Angeles", kind: "city", state: "CA" },
  { slug: "new-york", name: "New York", kind: "city", state: "NY" },
  { slug: "yelp", name: "Yelp", kind: "platform" },
  { slug: "google", name: "Google", kind: "platform" },
];

export function getReviewRemovalVariant(slug: string): ReviewRemovalVariant | undefined {
  return REVIEW_REMOVAL_VARIANTS.find((v) => v.slug === slug);
}
