/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.epicware.ai",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/audit/success", "/report/*", "/audit-lp"],
};
