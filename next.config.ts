import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
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
      // Short URL aliases
      { source: "/audit-lp", destination: "/audit", permanent: true },
      { source: "/resources/tools", destination: "/tools", permanent: true },
      { source: "/resources/blog", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
