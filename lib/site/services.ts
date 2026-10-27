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

export interface SubFeature {
  slug: string;
  name: string;
  /** Where this sub-feature's content currently lives, for Phase 2 migration. */
  currentUrl: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  subFeatures: SubFeature[];
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
  },
  {
    slug: "seo",
    name: "SEO",
    shortDescription: "Website and content SEO for organic search visibility beyond the Map Pack.",
    subFeatures: [],
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
  },
  {
    slug: "review-removal",
    name: "Review Removal",
    shortDescription: "Remove fake and policy-violating reviews, refunded if we can't get them taken down.",
    subFeatures: [
      { slug: "fake-review-removal", name: "Fake Review Removal", currentUrl: "/bad-review-removal-singapore/fake-review-removal" },
      { slug: "unfair-review-removal", name: "Unfair Review Removal", currentUrl: "/bad-review-removal-singapore/unfair-review-removal" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getSubFeature(serviceSlug: string, subFeatureSlug: string): SubFeature | undefined {
  return getService(serviceSlug)?.subFeatures.find((f) => f.slug === subFeatureSlug);
}
