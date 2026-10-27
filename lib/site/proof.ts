/**
 * Single source of truth for proof numbers used in trust badges and copy.
 *
 * Do NOT invent or round up numbers here. If a real, sourced figure isn't
 * available, use a TODO_PROOF placeholder and keep it out of rendered
 * copy until someone supplies the real number.
 *
 * Verified ratings already exist in lib/seo-config.ts (EPICWARE_AGGREGATE,
 * PRODUCT_RATINGS) — that file is the source of truth for star ratings and
 * review counts, documented as real and updated quarterly. Re-export them
 * here so proof.ts stays the single import for all trust-badge copy.
 *
 * ---------------------------------------------------------------------
 * CONFLICTING NUMBERS FOUND ACROSS THE SITE (Phase 0/1 audit, 2026-10-27)
 * ---------------------------------------------------------------------
 * "Outlets managed" trust badge — THREE different numbers in circulation,
 * none with a cited source. Confirmed false/unverifiable, do not reuse any
 * of them until a real figure is supplied:
 *   - "500+ outlets"  → app/locations/usa/page.tsx, app/products/page.tsx
 *   - "100+ outlets"  → app/local-seo-singapore/page.tsx (×3 occurrences)
 *   - "50+ outlets"   → app/locations/singapore/[district]/page.tsx,
 *                        app/seo-agency-singapore/page.tsx
 *
 * "Years in business" — appears as "10+ years" in:
 *   - app/about/page.tsx (×3), app/local-seo-singapore/page.tsx,
 *     app/local-seo-singapore/gbp-optimisation/page.tsx
 *   This one is internally consistent (always "10+"), but still has no
 *   cited source anywhere it appears — flagged, not yet confirmed false.
 *
 * These pages are NOT rewritten in Phase 1 — that happens when each page
 * is touched in Phase 3 (Singapore migration) or Phase 5 (new countries).
 * This file exists so every new page built from Phase 2 onward pulls from
 * one place instead of adding a fourth number to the pile.
 */

export { EPICWARE_AGGREGATE, PRODUCT_RATINGS, EPICWARE_PROVIDER } from "@/lib/seo-config";

/** Explicit placeholder type so TODO(proof) values fail loudly if rendered unguarded. */
export type ProofValue = { value: string; verified: true } | { value: null; verified: false; todo: string };

export const PROOF = {
  /**
   * "500+ outlets" was checked against the brief owner (2026-10-27) and
   * confirmed NOT TRUE. Removed, not replaced with a guess. Every page
   * listed above needs this badge either deleted or replaced with this
   * placeholder until a real number exists.
   */
  outletsManaged: {
    value: null,
    verified: false,
    todo: "TODO(proof): real outlets-managed count — the 500+/100+/50+ figures previously on the site were unverified; 500+ was confirmed false and removed 2026-10-27.",
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
