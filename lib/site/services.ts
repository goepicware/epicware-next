/**
 * Single source of truth for the services taxonomy.
 *
 * Six top-level services, each with zero or more sub-features. A
 * sub-feature is a standalone page at /services/{service}/{subFeature}/ —
 * it is NOT a section on the parent page. This matches the brief's own
 * Phase 3 table (competitor-analysis and rank-tracking both nest under
 * local-seo) and decision #6 (2026-10-27): all 11 previously-orphaned
 * sub-service pages get the same treatment, so Phase 2 builds 14
 * sub-feature pages total (3 already specified by the brief + 11 more
 * found in the Phase 0 audit), on top of the 41 pages the brief counts
 * for services + locations + country×service.
 *
 * citation-building is nested under local-seo per decision #7
 * (2026-10-27) — overrides a pre-existing, unrelated redirect that sent
 * it to ai-search-visibility instead.
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
    subFeatures: [
      { slug: "citation-building", name: "Citation Building", currentUrl: "/local-seo-singapore/citation-building" },
      { slug: "competitor-analysis", name: "Competitor Analysis", currentUrl: "/local-seo-singapore/competitor-analysis" },
      { slug: "rank-tracking", name: "Local Rank Tracking", currentUrl: "/local-seo-singapore/local-rank-tracking" },
    ],
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
    subFeatures: [
      { slug: "ai-review-response", name: "AI Review Response", currentUrl: "/reputation-management-singapore/ai-review-response" },
      { slug: "reputation-analytics", name: "Reputation Analytics", currentUrl: "/reputation-management-singapore/reputation-analytics" },
      { slug: "review-generation", name: "Review Generation", currentUrl: "/reputation-management-singapore/review-generation" },
      { slug: "review-widgets", name: "Review Widgets", currentUrl: "/reputation-management-singapore/review-widgets" },
    ],
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
