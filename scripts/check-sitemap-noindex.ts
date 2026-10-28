import { COUNTRIES } from "../lib/site/countries";
import { PAGED_SERVICES } from "../lib/site/services";
import { isCountryServiceLive, isHubLive, isSubFeatureLive } from "../lib/site/content";
import sitemap from "../app/sitemap";

const BASE = "https://www.epicware.ai";

/**
 * Build gate: app/sitemap.ts is what Next.js actually serves at
 * /sitemap.xml in production, so a noindex page listed there is a real
 * crawl/index signal bug, not a cosmetic one. This independently
 * enumerates every URL that lib/site/content.ts's draft flags currently
 * mark noindex (country hubs, country×service pages, services
 * sub-feature pages — the same flags that drive each page's own
 * generateMetadata robots gate) and fails the build if any of them shows
 * up in the sitemap's actual output. Catches both a bug in sitemap.ts's
 * dynamic filters and a hardcoded regression (e.g. someone re-adding a
 * draft URL by hand).
 */
function noindexUrls(): string[] {
  const urls: string[] = [];

  for (const country of COUNTRIES) {
    if (country.slug === "singapore") continue;
    if (!isHubLive(country.slug)) urls.push(`${BASE}/locations/${country.slug}`);
    for (const service of PAGED_SERVICES) {
      if (!isCountryServiceLive(country.slug, service.slug)) {
        urls.push(`${BASE}/locations/${country.slug}/${service.slug}`);
      }
    }
  }

  for (const service of PAGED_SERVICES) {
    for (const feature of service.subFeatures) {
      if (!isSubFeatureLive(service.slug, feature.slug)) {
        urls.push(`${BASE}/services/${service.slug}/${feature.slug}`);
      }
    }
  }

  return urls;
}

function main() {
  const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
  const noindex = noindexUrls();
  const violations = noindex.filter((url) => sitemapUrls.has(url));

  console.log("=== Sitemap noindex gate ===\n");
  console.log(`Checked ${sitemapUrls.size} sitemap URLs against ${noindex.length} known noindex (draft) page(s).`);

  if (violations.length === 0) {
    console.log("No noindex pages found in the sitemap.");
    return;
  }

  for (const url of violations) console.log(`  [FAIL] noindex page listed in sitemap: ${url}`);
  console.log(`\n${violations.length} noindex page(s) listed in the sitemap. Build blocked.`);
  process.exitCode = 1;
}

main();
