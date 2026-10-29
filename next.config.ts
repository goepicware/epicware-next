import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      // Platform rename
      { source: "/platform", destination: "/services", permanent: true },
      // Old Phase 1 product URLs (new /products/* pages now exist — only redirect legacy slugs)
      { source: "/products/local-seo", destination: "/locations/singapore/local-seo", permanent: true },
      { source: "/products/kairo", destination: "/contact", permanent: true },
      { source: "/products/epiccommerce", destination: "/contact", permanent: true },
      // Old use-case URLs that no longer exist
      { source: "/use-cases/automate-whatsapp-bookings", destination: "/contact", permanent: true },
      { source: "/use-cases/reduce-no-shows", destination: "/contact", permanent: true },
      { source: "/use-cases/increase-direct-online-orders", destination: "/contact", permanent: true },
      // Old comparison URLs
      { source: "/comparison/epiccommerce-vs-delivery-platforms", destination: "/contact", permanent: true },
      { source: "/comparison/kairo-vs-manual-whatsapp", destination: "/contact", permanent: true },
      // /audit redirect (page doesn't exist — send to the free audit page)
      { source: "/audit", destination: "/free-audit", permanent: true },
      // Short URL aliases
      { source: "/audit-lp", destination: "/free-audit", permanent: true },
      { source: "/resources/tools", destination: "/tools", permanent: true },
      { source: "/resources/blog", destination: "/blog", permanent: true },
      // Blog posts moved from /resources/blog/[slug] → /blog/[slug]
      { source: "/resources/blog/:slug*", destination: "/blog/:slug*", permanent: true },
      // Old backlink tool URL → new canonical URL
      { source: "/tools/backlink-dashboard", destination: "/tools/backlink-opportunity-finder", permanent: true },
      // Case study anonymised at client's request — URL no longer names the client
      {
        source: "/case-studies/epikebabs-local-seo-singapore",
        destination: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
        permanent: true,
      },
      // GBP optimisation consolidated — updated to point directly at the new
      // money page (was /local-seo-singapore/gbp-optimisation, now itself
      // redirected below; rewired here so these don't double-hop).
      { source: "/gbp-optimisation-singapore", destination: "/locations/singapore/google-business-profile", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-audit", destination: "/locations/singapore/google-business-profile", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-category-optimisation", destination: "/locations/singapore/google-business-profile", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-photo-management", destination: "/locations/singapore/google-business-profile", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-qa-management", destination: "/locations/singapore/google-business-profile", permanent: true },
      // Review management consolidated — rewired to the new money page.
      { source: "/reputation-management-singapore/review-management", destination: "/locations/singapore/review-management", permanent: true },
      { source: "/review-management-singapore/negative-review-response", destination: "/locations/singapore/review-management#negative-review-response", permanent: true },
      { source: "/review-management-singapore/review-monitoring", destination: "/locations/singapore/review-management", permanent: true },
      { source: "/reputation-management-singapore/bad-review-removal", destination: "/locations/singapore/review-removal", permanent: true },
      { source: "/bad-review-removal-singapore/google-review-removal-policy", destination: "/blog/google-review-policy-explained", permanent: true },
      // Legacy marketing/ads pages
      { source: "/local-growth", destination: "/", permanent: true },
      { source: "/remove-review", destination: "/locations/singapore/review-removal", permanent: true },
      // Old URL variant found in Search Console
      { source: "/blog/do-keywords-in-google-reviews-help-local-SEO", destination: "/blog/do-keywords-in-reviews-help-local-seo", permanent: true },
      // /local-seo-singapore now owns "local SEO agency Singapore" — rewired
      // to the new money page.
      { source: "/blog/local-seo-agency-singapore-epicware", destination: "/locations/singapore/local-seo", permanent: true },

      // --- Phase 3: global services/locations restructure ---
      // Flat Singapore service URLs → new /locations/singapore/{service} and
      // /services/{service}/{subFeature} routes. See docs/restructure/
      // phase-3-redirects.md for the full table and rationale.
      { source: "/local-seo-singapore", destination: "/locations/singapore/local-seo", permanent: true },
      { source: "/local-seo-singapore/gbp-optimisation", destination: "/locations/singapore/google-business-profile", permanent: true },
      // citation-building, competitor-analysis and rank-tracking are
      // folded into anchored sections on /services/local-seo (Services
      // Rewrite Batch 1, 2026-10-29) — these now point straight at the
      // parent anchor instead of the removed intermediate sub-page, so
      // there's one hop, not two.
      { source: "/local-seo-singapore/citation-building", destination: "/services/local-seo#citation-building", permanent: true },
      { source: "/local-seo-singapore/competitor-analysis", destination: "/services/local-seo#competitor-analysis", permanent: true },
      { source: "/local-seo-singapore/local-rank-tracking", destination: "/services/local-seo#rank-tracking", permanent: true },
      { source: "/local-seo-singapore/gbp-post-scheduling", destination: "/services/google-business-profile/post-scheduling", permanent: true },
      { source: "/local-seo-singapore/gbp-setup", destination: "/services/google-business-profile/setup", permanent: true },
      { source: "/seo-agency-singapore", destination: "/locations/singapore/seo", permanent: true },
      { source: "/ai-search-visibility-singapore", destination: "/locations/singapore/ai-search-visibility", permanent: true },
      { source: "/ai-search-visibility-singapore/aeo", destination: "/services/ai-search-visibility/aeo", permanent: true },
      { source: "/ai-search-visibility-singapore/ai-citation-building", destination: "/services/ai-search-visibility/ai-citation-building", permanent: true },
      { source: "/ai-search-visibility-singapore/geo-optimisation", destination: "/services/ai-search-visibility/geo-optimisation", permanent: true },
      { source: "/reputation-management-singapore", destination: "/locations/singapore/review-management", permanent: true },
      // Same one-hop fix as citation-building above — ai-review-response,
      // reputation-analytics, review-generation and review-widgets are
      // now anchored sections on /services/review-management.
      { source: "/reputation-management-singapore/ai-review-response", destination: "/services/review-management#ai-review-response", permanent: true },
      { source: "/reputation-management-singapore/reputation-analytics", destination: "/services/review-management#reputation-analytics", permanent: true },
      { source: "/reputation-management-singapore/review-generation", destination: "/services/review-management#review-generation", permanent: true },
      { source: "/reputation-management-singapore/review-widgets", destination: "/services/review-management#review-widgets", permanent: true },
      { source: "/review-management-singapore", destination: "/locations/singapore/review-management", permanent: true },
      { source: "/review-management-singapore/google-reviews", destination: "/locations/singapore/review-management", permanent: true },
      { source: "/bad-review-removal-singapore", destination: "/locations/singapore/review-removal", permanent: true },
      { source: "/bad-review-removal-singapore/fake-review-removal", destination: "/services/review-removal/fake-review-removal", permanent: true },
      { source: "/bad-review-removal-singapore/unfair-review-removal", destination: "/services/review-removal/unfair-review-removal", permanent: true },

      // --- Services Rewrite Batch 1 (2026-10-29): fold 7 sub-pages into
      // parent anchors ---
      // The 7 standalone /services/{service}/{subFeature} pages below no
      // longer exist (content/services/{service}/*.mdx removed,
      // lib/site/services.ts's subFeatures emptied for these two
      // services) — folded into anchored sections on their parent page.
      { source: "/services/local-seo/citation-building", destination: "/services/local-seo#citation-building", permanent: true },
      { source: "/services/local-seo/competitor-analysis", destination: "/services/local-seo#competitor-analysis", permanent: true },
      { source: "/services/local-seo/rank-tracking", destination: "/services/local-seo#rank-tracking", permanent: true },
      { source: "/services/review-management/ai-review-response", destination: "/services/review-management#ai-review-response", permanent: true },
      { source: "/services/review-management/reputation-analytics", destination: "/services/review-management#reputation-analytics", permanent: true },
      { source: "/services/review-management/review-generation", destination: "/services/review-management#review-generation", permanent: true },
      { source: "/services/review-management/review-widgets", destination: "/services/review-management#review-widgets", permanent: true },
    ];
  },
};

export default nextConfig;
