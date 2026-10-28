import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/site/countries";
import { PAGED_SERVICES } from "@/lib/site/services";
import { isCountryServiceLive, isHubLive, isSubFeatureLive } from "@/lib/site/content";

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

    // Locations — Singapore money pages (live country × service pages)
    { url: `${BASE}/locations/singapore/seo`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/locations/singapore/review-removal`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/locations/singapore/review-management`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/locations/singapore/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/locations/singapore/google-business-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/locations/singapore/ai-search-visibility`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Products
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/epicmap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicreview`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicengage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicsocial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Services hub + global category pages
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/google-business-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/ai-search-visibility`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/review-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/review-removal`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/growth-tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Services sub-feature pages — /services/{service}/{subFeature} — these
    // are generated dynamically below (subFeaturePages), gated on
    // isSubFeatureLive, because all 14 are currently draft:true (noindex)
    // pending the services rewrite and must not appear here until then.

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

    // Locations — country. Singapore and Malaysia are bespoke .tsx pages
    // (always live, hand-tuned priorities below). Every other country's
    // hub and country×service pages are generated dynamically below
    // (countryHubPages, countryServicePages), gated on isHubLive /
    // isCountryServiceLive, so a page only appears here once its MDX
    // content leaves draft — see lib/site/content.ts.
    { url: `${BASE}/locations/singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/malaysia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

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
    { url: `${BASE}/blog/why-review-recency-matters-for-local-rankings`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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
    { url: `${BASE}/blog/handle-negative-google-reviews-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/top-10-ai-local-seo-agencies-singapore-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-hire-local-seo-agency-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/10-gbp-optimisation-tips-every-local-business-needs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/what-is-seo-local-business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/seo-vs-local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/seo-tips-small-business-owners`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/secondary-categories-google-business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/restaurant-menu-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/clinic-google-categories`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/google-maps-spam-reporting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

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
    { url: `${BASE}/case-studies/aesthetic-clinic-seo-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/restaurant-multi-outlet-growth-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/clinic-review-growth-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/salon-whatsapp-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/multi-outlet-restaurant-seo-case-study-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/hair-salon-seo-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Authority pages
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reseller`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },

    // Offer landing pages
    { url: `${BASE}/90-day-patient-engine`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },

    // Conversion pages
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/book-demo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Free audit funnel
    { url: `${BASE}/free-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-visibility`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

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

  // Locations — non-Singapore country hubs, only once draft:false.
  const countryHubPages: MetadataRoute.Sitemap = COUNTRIES.filter(
    (c) => c.slug !== "singapore" && isHubLive(c.slug)
  ).map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Locations — non-Singapore country × service pages, only once
  // draft:false. Singapore's bespoke service pages are listed explicitly
  // above with hand-tuned priorities.
  const countryServicePages: MetadataRoute.Sitemap = COUNTRIES.filter((c) => c.slug !== "singapore").flatMap((c) =>
    PAGED_SERVICES.filter((s) => isCountryServiceLive(c.slug, s.slug)).map((s) => ({
      url: `${BASE}/locations/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  // Services sub-feature pages — /services/{service}/{subFeature} — only
  // once draft:false. All 14 are currently draft:true pending the
  // services rewrite, so none appear here yet.
  const subFeaturePages: MetadataRoute.Sitemap = PAGED_SERVICES.flatMap((s) =>
    s.subFeatures.filter((f) => isSubFeatureLive(s.slug, f.slug)).map((f) => ({
      url: `${BASE}/services/${s.slug}/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...districtPages, ...countryHubPages, ...countryServicePages, ...subFeaturePages];
}
