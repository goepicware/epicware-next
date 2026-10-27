const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");

/**
 * Returns true if the URL maps to a draft MDX content file under
 * /content/locations or /content/services — these pages must not appear
 * in the sitemap (restructure brief, Phase 3 correction: drafts must be
 * invisible — noindex, excluded from sitemap, unlinked).
 */
function isDraftUrl(url) {
  // next-sitemap's transform() passes a relative path (e.g. "/locations/usa"),
  // not an absolute URL — don't assume it needs new URL() parsing.
  const u = url.startsWith("http") ? new URL(url).pathname : url;

  // /locations/{country}/{service}
  let m = u.match(/^\/locations\/([a-z]+)\/([a-z-]+)\/?$/);
  if (m) {
    const [, country, service] = m;
    const filePath = path.join(process.cwd(), "content", "locations", country, `${service}.mdx`);
    if (fs.existsSync(filePath)) {
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return data.draft === true;
    }
  }

  // /locations/{country} (hub) — only usa/uk/australia/dubai use hub.mdx; singapore has its own static page
  m = u.match(/^\/locations\/([a-z]+)\/?$/);
  if (m) {
    const [, country] = m;
    const filePath = path.join(process.cwd(), "content", "locations", country, "hub.mdx");
    if (fs.existsSync(filePath)) {
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return data.draft === true;
    }
  }

  // /services/{service}/{subFeature}
  m = u.match(/^\/services\/([a-z-]+)\/([a-z-]+)\/?$/);
  if (m) {
    const [, service, subFeature] = m;
    const filePath = path.join(process.cwd(), "content", "services", service, `${subFeature}.mdx`);
    if (fs.existsSync(filePath)) {
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return data.draft === true;
    }
  }

  return false;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.epicware.ai",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/audit/success",
    "/report/*",
    "/audit-lp",
    // Non-page assets that next.js exposes as routes
    "/icon.png",
    "/sitemap.xml",
    "/sitemap-*.xml",
  ],
  transform: async (config, url) => {
    if (isDraftUrl(url)) return null; // excluded from sitemap
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
