import type { MetadataRoute } from "next";

const BASE = "https://www.epicware.ai";

const DISTRICTS = [
  "jurong", "tampines", "woodlands", "ang-mo-kio", "toa-payoh",
  "clementi", "buona-vista", "orchard", "bedok", "yishun",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Core money pages
    { url: `${BASE}/bad-review-removal-singapore`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/gbp-optimisation-singapore`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/review-management-singapore`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Core service children
    { url: `${BASE}/bad-review-removal-singapore/fake-review-removal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/bad-review-removal-singapore/unfair-review-removal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/bad-review-removal-singapore/google-review-removal-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/gbp-optimisation-singapore/gbp-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gbp-optimisation-singapore/gbp-category-optimisation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gbp-optimisation-singapore/gbp-photo-management`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gbp-optimisation-singapore/gbp-qa-management`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/review-management-singapore/google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/review-management-singapore/negative-review-response`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/review-management-singapore/review-monitoring`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Products
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/epicmap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicreview`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicengage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicsocial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Services hub + category pages
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/reputation-management-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/local-seo-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-search-visibility-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/growth-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Reputation management children
    { url: `${BASE}/reputation-management-singapore/review-management`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reputation-management-singapore/ai-review-response`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reputation-management-singapore/bad-review-removal`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reputation-management-singapore/review-generation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reputation-management-singapore/review-widgets`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reputation-management-singapore/reputation-analytics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Local SEO children
    { url: `${BASE}/local-seo-singapore/gbp-optimisation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/local-seo-singapore/gbp-post-scheduling`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/local-seo-singapore/gbp-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/local-seo-singapore/local-rank-tracking`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/local-seo-singapore/citation-building`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/local-seo-singapore/competitor-analysis`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // AI & GEO children
    { url: `${BASE}/ai-search-visibility-singapore/geo-optimisation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ai-search-visibility-singapore/ai-citation-building`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ai-search-visibility-singapore/aeo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Growth tools children
    { url: `${BASE}/growth-tools/epicengage-email-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/growth-tools/epicsocial-social-scheduling`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Industries
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/restaurants`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/healthcare-clinics`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/nail-hair-salons`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/tuition-centres`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/wellness-centres`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/dental-clinics`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/car-workshops`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/physiotherapy`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/retail-stores`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Locations — country
    { url: `${BASE}/locations/singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/malaysia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations/dubai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations/uk`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations/usa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Use cases
    { url: `${BASE}/use-cases/remove-bad-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/use-cases/get-more-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/rank-higher-on-google-maps`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/improve-google-rating`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/manage-multiple-gbp-locations`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Blog hub + posts
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog/fake-or-unfair-google-reviews-what-to-do`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-review-policy-explained`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-reviews-strategy`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/how-to-remove-bad-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-maps-ranking-factors`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-get-more-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/best-time-to-ask-for-a-google-review`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/google-review-request-templates`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-create-google-review-link-qr-code`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/should-you-respond-to-every-google-review`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-velocity-vs-total-review-count`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/do-keywords-in-reviews-help-local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-many-google-reviews-do-you-need-to-compete-locally`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/can-you-incentivize-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-gating-explained`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/do-photo-reviews-matter-for-local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-fast-should-you-respond-to-google-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/reviews-vs-rating-what-matters-more`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/customer-feedback-system-private-vs-public-reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-management-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Guides
    { url: `${BASE}/resources/guides/restaurant-digital-growth-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/guides/local-business-playbook-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/guides/bad-review-removal-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Comparison pages
    { url: `${BASE}/comparison/epicreview-vs-qr-code-review`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-birdeye`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-brightlocal`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-yext`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-gradeus`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Case studies
    { url: `${BASE}/case-studies/restaurant-multi-outlet-growth-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/clinic-review-growth-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/salon-whatsapp-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Authority pages
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reseller`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },

    // Conversion pages
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/book-demo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Free tools
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/google-review-reply-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/google-review-request-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/backlink-opportunity-finder`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Singapore district pages
  const districtPages: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${BASE}/locations/singapore/${d}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...districtPages];
}
