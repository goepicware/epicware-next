/**
 * Single source of truth for the services taxonomy.
 *
 * Six top-level services, each with zero or more sub-features. A
 * sub-feature is a standalone page at /services/{service}/{subFeature}/ —
 * it is NOT a section on the parent page.
 *
 * local-seo and review-management originally had 7 sub-features between
 * them (citation-building, competitor-analysis, rank-tracking;
 * ai-review-response, reputation-analytics, review-generation,
 * review-widgets) built as standalone pages per decision #6 (2026-10-27).
 * The Services Rewrite Batch 1 (2026-10-29) folded all 7 into anchored
 * sections on their parent page instead (see lib/site/serviceContent.ts's
 * `subSections`) and removed them here — their old URLs now 301 straight
 * to the parent's anchor (next.config.ts). The remaining 7 sub-features
 * across google-business-profile, ai-search-visibility and
 * review-removal are unaffected and still standalone pages.
 */

import { PRICING } from "@/lib/site/proof";

export interface SubFeature {
  slug: string;
  name: string;
  /** Where this sub-feature's content currently lives, for Phase 2 migration. */
  currentUrl: string;
}

/** Which PRICING entry (lib/site/proof.ts) this service's "From" price reads from. */
export type PlanKey = "foundation" | "authority" | "domination" | "fullStack" | "reviewRemoval";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  subFeatures: SubFeature[];
  /** Omitted for offerings with no standalone plan price (e.g. paid-ads, bundled into Full Stack). */
  planKey?: PlanKey;
  /**
   * False for an offering that exists in the taxonomy (so forms like
   * /book-demo can list it) but has no /services/{slug} page, nav menu
   * entry, or country-hub grid tile yet. Every consumer that renders an
   * actual page/menu/grid must filter to PAGED_SERVICES below instead of
   * iterating SERVICES directly.
   */
  hasPage: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "local-seo",
    name: "Local SEO",
    shortDescription:
      "Google Maps rank tracking, citation building, and competitor analysis for local search visibility.",
    // Citation building, competitor analysis and rank tracking folded
    // into anchored sections on /services/local-seo — see the header
    // comment above.
    subFeatures: [],
    planKey: "authority",
    hasPage: true,
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    shortDescription:
      "GBP setup, optimisation, and ongoing post scheduling to keep your profile ranking-ready.",
    subFeatures: [
      { slug: "setup", name: "GBP Setup", currentUrl: "/local-seo-singapore/gbp-setup" },
      { slug: "post-scheduling", name: "GBP Post Scheduling", currentUrl: "/local-seo-singapore/gbp-post-scheduling" },
    ],
    planKey: "foundation",
    hasPage: true,
  },
  {
    slug: "seo",
    name: "SEO",
    shortDescription: "Website and content SEO for organic search visibility beyond the Map Pack.",
    subFeatures: [],
    planKey: "domination",
    hasPage: true,
  },
  {
    slug: "ai-search-visibility",
    name: "AI Search Visibility",
    shortDescription:
      "AEO, GEO, and AI citation building so your business appears in ChatGPT, Gemini, and Google AI Overviews.",
    subFeatures: [
      { slug: "aeo", name: "Answer Engine Optimisation", currentUrl: "/ai-search-visibility-singapore/aeo" },
      { slug: "ai-citation-building", name: "AI Citation Building", currentUrl: "/ai-search-visibility-singapore/ai-citation-building" },
      { slug: "geo-optimisation", name: "GEO Optimisation", currentUrl: "/ai-search-visibility-singapore/geo-optimisation" },
    ],
    planKey: "domination",
    hasPage: true,
  },
  {
    slug: "review-management",
    name: "Review Management",
    shortDescription:
      "Review generation, AI-drafted responses, widgets, and analytics across every Google listing.",
    // AI review response, review generation, reputation analytics and
    // review widgets folded into anchored sections on
    // /services/review-management — see the header comment above.
    subFeatures: [],
    planKey: "foundation",
    hasPage: true,
  },
  {
    slug: "review-removal",
    name: "Review Removal",
    shortDescription: "Remove fake and policy-violating reviews, refunded if we can't get them taken down.",
    subFeatures: [
      { slug: "fake-review-removal", name: "Fake Review Removal", currentUrl: "/bad-review-removal-singapore/fake-review-removal" },
      { slug: "unfair-review-removal", name: "Unfair Review Removal", currentUrl: "/bad-review-removal-singapore/unfair-review-removal" },
    ],
    planKey: "reviewRemoval",
    hasPage: true,
  },
  {
    slug: "paid-ads",
    name: "Paid Ads (Google & Meta)",
    shortDescription: "Paid ad management across Meta and Google, bundled with Full Stack.",
    subFeatures: [],
    hasPage: false,
  },
];

/** Services with an actual /services/{slug} page — use this for any menu, grid, or static-params list. Raw SERVICES is only for consumers (like the /book-demo form) that intentionally list offerings with no page yet. */
export const PAGED_SERVICES = SERVICES.filter((s) => s.hasPage);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/**
 * "From USD 899/mo" (or SGD in Singapore, same number — see
 * PRICING.plans' own header comment). review-removal reads from
 * PRICING.reviewRemoval instead and is priced per review, not monthly.
 */
export function getServiceFromPrice(service: Service, countrySlug: string): string {
  const currency = countrySlug === "singapore" ? "SGD" : "USD";
  if (!service.planKey) return "";
  if (service.planKey === "reviewRemoval") {
    return `From ${currency} ${PRICING.reviewRemoval[currency]}/review`;
  }
  return `From ${currency} ${PRICING.plans[service.planKey].monthly}/mo`;
}

export function getSubFeature(serviceSlug: string, subFeatureSlug: string): SubFeature | undefined {
  return getService(serviceSlug)?.subFeatures.find((f) => f.slug === subFeatureSlug);
}
