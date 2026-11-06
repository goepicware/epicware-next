import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { COUNTRIES } from "@/lib/site/countries";
import { PAGED_SERVICES } from "@/lib/site/services";
import { isCountryServiceLive, isHubLive, isSubFeatureLive } from "@/lib/site/content";

const BASE = "https://www.epicware.ai";

const DISTRICTS = [
  "jurong", "tampines", "woodlands", "ang-mo-kio", "toa-payoh",
  "clementi", "buona-vista", "orchard", "bedok", "yishun",
];

// Last full restructure — used as the lastmod fallback when git history is
// unavailable (e.g. a shallow clone on the build machine).
const FALLBACK_DATE = new Date("2026-10-21");

/**
 * Real last-modified date for a route, from its source file's last git
 * commit — not build time, so every URL doesn't get an identical,
 * fake-freshness lastmod.
 */
function lastCommitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      cwd: process.cwd(),
      encoding: "utf-8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // fall through to default below
  }
  return FALLBACK_DATE;
}

/** For bespoke pages whose literal app/ folder path matches the URL path 1:1. */
function pageDate(urlPath: string): Date {
  const relPath = urlPath === "/" ? "app/page.tsx" : `app${urlPath}/page.tsx`;
  return lastCommitDate(relPath);
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Shared dynamic route templates (not bespoke per-URL folders) — every
  // page rendered through one of these gets that file's commit date.
  const servicesHubDate = lastCommitDate("app/services/[service]/page.tsx");
  const districtPageDate = lastCommitDate("app/locations/singapore/[slug]/page.tsx");

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: `${BASE}/`, lastModified: pageDate("/"), changeFrequency: "weekly", priority: 1.0 },

    // Locations — Singapore money pages (live country × service pages)
    { url: `${BASE}/locations/singapore/seo`, lastModified: pageDate("/locations/singapore/seo"), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/locations/singapore/review-removal`, lastModified: pageDate("/locations/singapore/review-removal"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/locations/singapore/review-management`, lastModified: pageDate("/locations/singapore/review-management"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/locations/singapore/local-seo`, lastModified: pageDate("/locations/singapore/local-seo"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/locations/singapore/google-business-profile`, lastModified: pageDate("/locations/singapore/google-business-profile"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/locations/singapore/ai-search-visibility`, lastModified: pageDate("/locations/singapore/ai-search-visibility"), changeFrequency: "monthly", priority: 0.8 },

    // Products
    { url: `${BASE}/products`, lastModified: pageDate("/products"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/epicmap`, lastModified: pageDate("/products/epicmap"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicreview`, lastModified: pageDate("/products/epicreview"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicengage`, lastModified: pageDate("/products/epicengage"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/epicsocial`, lastModified: pageDate("/products/epicsocial"), changeFrequency: "monthly", priority: 0.8 },

    // Services hub + global category pages — the 6 category pages below
    // all render through the shared app/services/[service]/page.tsx
    // dynamic route template, so they share that file's commit date.
    { url: `${BASE}/services`, lastModified: pageDate("/services"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/local-seo`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/google-business-profile`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/seo`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/ai-search-visibility`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/review-management`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/review-removal`, lastModified: servicesHubDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/growth-tools`, lastModified: pageDate("/growth-tools"), changeFrequency: "monthly", priority: 0.8 },

    // Services sub-feature pages — /services/{service}/{subFeature} — these
    // are generated dynamically below (subFeaturePages), gated on
    // isSubFeatureLive, because all 14 are currently draft:true (noindex)
    // pending the services rewrite and must not appear here until then.

    // Growth tools children
    { url: `${BASE}/growth-tools/epicengage-email-marketing`, lastModified: pageDate("/growth-tools/epicengage-email-marketing"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/growth-tools/epicsocial-social-scheduling`, lastModified: pageDate("/growth-tools/epicsocial-social-scheduling"), changeFrequency: "monthly", priority: 0.7 },

    // Industries
    { url: `${BASE}/industries`, lastModified: pageDate("/industries"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/restaurants`, lastModified: pageDate("/industries/restaurants"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/healthcare-clinics`, lastModified: pageDate("/industries/healthcare-clinics"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/nail-hair-salons`, lastModified: pageDate("/industries/nail-hair-salons"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/tuition-centres`, lastModified: pageDate("/industries/tuition-centres"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/wellness-centres`, lastModified: pageDate("/industries/wellness-centres"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/dental-clinics`, lastModified: pageDate("/industries/dental-clinics"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/car-workshops`, lastModified: pageDate("/industries/car-workshops"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/physiotherapy`, lastModified: pageDate("/industries/physiotherapy"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/industries/retail-stores`, lastModified: pageDate("/industries/retail-stores"), changeFrequency: "monthly", priority: 0.75 },

    // Locations — country. Singapore and Malaysia are bespoke .tsx pages
    // (always live, hand-tuned priorities below). Every other country's
    // hub and country×service pages are generated dynamically below
    // (countryHubPages, countryServicePages), gated on isHubLive /
    // isCountryServiceLive, so a page only appears here once its MDX
    // content leaves draft — see lib/site/content.ts.
    { url: `${BASE}/locations/singapore`, lastModified: pageDate("/locations/singapore"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations/malaysia`, lastModified: pageDate("/locations/malaysia"), changeFrequency: "monthly", priority: 0.7 },

    // Use cases
    { url: `${BASE}/use-cases/remove-bad-google-reviews`, lastModified: pageDate("/use-cases/remove-bad-google-reviews"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/use-cases/get-more-google-reviews`, lastModified: pageDate("/use-cases/get-more-google-reviews"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/rank-higher-on-google-maps`, lastModified: pageDate("/use-cases/rank-higher-on-google-maps"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/improve-google-rating`, lastModified: pageDate("/use-cases/improve-google-rating"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/use-cases/manage-multiple-gbp-locations`, lastModified: pageDate("/use-cases/manage-multiple-gbp-locations"), changeFrequency: "monthly", priority: 0.75 },

    // Blog hub + posts
    { url: `${BASE}/blog`, lastModified: pageDate("/blog"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog/fake-or-unfair-google-reviews-what-to-do`, lastModified: pageDate("/blog/fake-or-unfair-google-reviews-what-to-do"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-review-policy-explained`, lastModified: pageDate("/blog/google-review-policy-explained"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-reviews-strategy`, lastModified: pageDate("/blog/google-reviews-strategy"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/blog/google-maps-ranking-factors`, lastModified: pageDate("/blog/google-maps-ranking-factors"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-get-more-google-reviews`, lastModified: pageDate("/blog/how-to-get-more-google-reviews"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/best-time-to-ask-for-a-google-review`, lastModified: pageDate("/blog/best-time-to-ask-for-a-google-review"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/google-review-request-templates`, lastModified: pageDate("/blog/google-review-request-templates"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-create-google-review-link-qr-code`, lastModified: pageDate("/blog/how-to-create-google-review-link-qr-code"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/should-you-respond-to-every-google-review`, lastModified: pageDate("/blog/should-you-respond-to-every-google-review"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/why-review-recency-matters-for-local-rankings`, lastModified: pageDate("/blog/why-review-recency-matters-for-local-rankings"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-velocity-vs-total-review-count`, lastModified: pageDate("/blog/review-velocity-vs-total-review-count"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/do-keywords-in-reviews-help-local-seo`, lastModified: pageDate("/blog/do-keywords-in-reviews-help-local-seo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-many-google-reviews-do-you-need-to-compete-locally`, lastModified: pageDate("/blog/how-many-google-reviews-do-you-need-to-compete-locally"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/can-you-incentivize-google-reviews`, lastModified: pageDate("/blog/can-you-incentivize-google-reviews"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-gating-explained`, lastModified: pageDate("/blog/review-gating-explained"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/do-photo-reviews-matter-for-local-seo`, lastModified: pageDate("/blog/do-photo-reviews-matter-for-local-seo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-fast-should-you-respond-to-google-reviews`, lastModified: pageDate("/blog/how-fast-should-you-respond-to-google-reviews"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/reviews-vs-rating-what-matters-more`, lastModified: pageDate("/blog/reviews-vs-rating-what-matters-more"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/customer-feedback-system-private-vs-public-reviews`, lastModified: pageDate("/blog/customer-feedback-system-private-vs-public-reviews"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/review-management-singapore`, lastModified: pageDate("/blog/review-management-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/handle-negative-google-reviews-singapore`, lastModified: pageDate("/blog/handle-negative-google-reviews-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/how-to-hire-local-seo-agency-singapore`, lastModified: pageDate("/blog/how-to-hire-local-seo-agency-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/10-gbp-optimisation-tips-every-local-business-needs`, lastModified: pageDate("/blog/10-gbp-optimisation-tips-every-local-business-needs"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/what-is-seo-local-business`, lastModified: pageDate("/blog/what-is-seo-local-business"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/seo-vs-local-seo`, lastModified: pageDate("/blog/seo-vs-local-seo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/seo-tips-small-business-owners`, lastModified: pageDate("/blog/seo-tips-small-business-owners"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/secondary-categories-google-business`, lastModified: pageDate("/blog/secondary-categories-google-business"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/restaurant-menu-seo`, lastModified: pageDate("/blog/restaurant-menu-seo"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/clinic-google-categories`, lastModified: pageDate("/blog/clinic-google-categories"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/google-maps-spam-reporting`, lastModified: pageDate("/blog/google-maps-spam-reporting"), changeFrequency: "monthly", priority: 0.7 },

    // Guides
    { url: `${BASE}/resources/guides/restaurant-digital-growth-guide`, lastModified: pageDate("/resources/guides/restaurant-digital-growth-guide"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/guides/local-business-playbook-2026`, lastModified: pageDate("/resources/guides/local-business-playbook-2026"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/guides/bad-review-removal-guide`, lastModified: pageDate("/resources/guides/bad-review-removal-guide"), changeFrequency: "monthly", priority: 0.75 },

    // Comparison pages
    { url: `${BASE}/comparison/epicreview-vs-qr-code-review`, lastModified: pageDate("/comparison/epicreview-vs-qr-code-review"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-birdeye`, lastModified: pageDate("/comparison/epicware-vs-birdeye"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-brightlocal`, lastModified: pageDate("/comparison/epicware-vs-brightlocal"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-yext`, lastModified: pageDate("/comparison/epicware-vs-yext"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/comparison/epicware-vs-gradeus`, lastModified: pageDate("/comparison/epicware-vs-gradeus"), changeFrequency: "monthly", priority: 0.7 },

    // Case studies
    { url: `${BASE}/case-studies/aesthetic-clinic-seo-singapore`, lastModified: pageDate("/case-studies/aesthetic-clinic-seo-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/restaurant-multi-outlet-growth-singapore`, lastModified: pageDate("/case-studies/restaurant-multi-outlet-growth-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/clinic-review-growth-singapore`, lastModified: pageDate("/case-studies/clinic-review-growth-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/salon-whatsapp-automation`, lastModified: pageDate("/case-studies/salon-whatsapp-automation"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/multi-outlet-restaurant-seo-case-study-singapore`, lastModified: pageDate("/case-studies/multi-outlet-restaurant-seo-case-study-singapore"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/hair-salon-seo-singapore`, lastModified: pageDate("/case-studies/hair-salon-seo-singapore"), changeFrequency: "monthly", priority: 0.7 },

    // Authority pages
    { url: `${BASE}/about`, lastModified: pageDate("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reseller`, lastModified: pageDate("/reseller"), changeFrequency: "monthly", priority: 0.65 },

    // Offer landing pages
    { url: `${BASE}/90-day-patient-engine`, lastModified: pageDate("/90-day-patient-engine"), changeFrequency: "weekly", priority: 0.85 },

    // Conversion pages
    { url: `${BASE}/pricing`, lastModified: pageDate("/pricing"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: pageDate("/contact"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/book-demo`, lastModified: pageDate("/book-demo"), changeFrequency: "monthly", priority: 0.85 },

    // Free audit funnel
    { url: `${BASE}/free-audit`, lastModified: pageDate("/free-audit"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-visibility`, lastModified: pageDate("/ai-visibility"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/reviews`, lastModified: pageDate("/reviews"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: pageDate("/case-studies"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/guides`, lastModified: pageDate("/resources/guides"), changeFrequency: "monthly", priority: 0.75 },

    // Free tools
    { url: `${BASE}/tools`, lastModified: pageDate("/tools"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/google-review-reply-generator`, lastModified: pageDate("/tools/google-review-reply-generator"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/google-review-request-generator`, lastModified: pageDate("/tools/google-review-request-generator"), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/backlink-opportunity-finder`, lastModified: pageDate("/tools/backlink-opportunity-finder"), changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${BASE}/privacy`, lastModified: pageDate("/privacy"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: pageDate("/terms"), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Singapore district pages — all rendered through the shared
  // app/locations/singapore/[slug]/page.tsx dynamic route template.
  const districtPages: MetadataRoute.Sitemap = DISTRICTS.map((d) => ({
    url: `${BASE}/locations/singapore/${d}`,
    lastModified: districtPageDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Locations — non-Singapore country hubs, only once draft:false.
  const countryHubPages: MetadataRoute.Sitemap = COUNTRIES.filter(
    (c) => c.slug !== "singapore" && isHubLive(c.slug)
  ).map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: lastCommitDate(`content/locations/${c.slug}/hub.mdx`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Locations — non-Singapore country × service pages, only once
  // draft:false. Singapore's bespoke service pages are listed explicitly
  // above with hand-tuned priorities.
  const countryServicePages: MetadataRoute.Sitemap = COUNTRIES.filter((c) => c.slug !== "singapore").flatMap((c) =>
    PAGED_SERVICES.filter((s) => isCountryServiceLive(c.slug, s.slug)).map((s) => ({
      url: `${BASE}/locations/${c.slug}/${s.slug}`,
      lastModified: lastCommitDate(`content/locations/${c.slug}/${s.slug}.mdx`),
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
      lastModified: lastCommitDate(`content/services/${s.slug}/${f.slug}.mdx`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...districtPages, ...countryHubPages, ...countryServicePages, ...subFeaturePages];
}
