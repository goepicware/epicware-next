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
      { source: "/products/local-seo", destination: "/local-seo-singapore", permanent: true },
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
      // GBP optimisation consolidated onto one page under /local-seo-singapore
      { source: "/gbp-optimisation-singapore", destination: "/local-seo-singapore/gbp-optimisation", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-audit", destination: "/local-seo-singapore/gbp-optimisation", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-category-optimisation", destination: "/local-seo-singapore/gbp-optimisation", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-photo-management", destination: "/local-seo-singapore/gbp-optimisation", permanent: true },
      { source: "/gbp-optimisation-singapore/gbp-qa-management", destination: "/local-seo-singapore/gbp-optimisation", permanent: true },
      // Review management consolidated onto /review-management-singapore
      { source: "/reputation-management-singapore/review-management", destination: "/review-management-singapore", permanent: true },
      { source: "/review-management-singapore/negative-review-response", destination: "/reputation-management-singapore/ai-review-response", permanent: true },
      { source: "/review-management-singapore/review-monitoring", destination: "/review-management-singapore", permanent: true },
      { source: "/reputation-management-singapore/bad-review-removal", destination: "/bad-review-removal-singapore", permanent: true },
      { source: "/bad-review-removal-singapore/google-review-removal-policy", destination: "/blog/google-review-policy-explained", permanent: true },
      { source: "/local-seo-singapore/citation-building", destination: "/ai-search-visibility-singapore/ai-citation-building", permanent: true },
      // Legacy marketing/ads pages
      { source: "/local-growth", destination: "/", permanent: true },
      { source: "/remove-review", destination: "/bad-review-removal-singapore", permanent: true },
      // Old URL variant found in Search Console
      { source: "/blog/do-keywords-in-google-reviews-help-local-SEO", destination: "/blog/do-keywords-in-reviews-help-local-seo", permanent: true },
    ];
  },
};

export default nextConfig;
