# Change log

One line per shipped change. Format: `YYYY-MM-DD — change — URL — PR`.

- 2026-11-09 — Setup: created `seo/` state (context, keyword map, backlog, AI prompts, competitor sitemap snapshots, directories).
- 2026-11-09 — Fixed canonical that pointed at a 404 (`/blog/locations/singapore/review-management`) — https://www.epicware.ai/blog/review-management-singapore — PR #5
- 2026-11-09 — Sitemap now auto-discovers blog posts; adds 10 unlisted indexable posts and `/locations` (118 → 129 URLs) — https://www.epicware.ai/sitemap.xml — PR #5
- 2026-11-09 — Pointed 97 internal links (52 files) and 4 schema URLs at final `/services/{service}#{feature}` URLs instead of 308 redirects — sitewide — PR #5
- 2026-11-09 — PR #5 merged into main (124fb1f); all three changes above are live. 2026-11-10 crawl: 129/129 sitemap URLs return 200, no canonical/noindex errors.
- 2026-11-10 — /pricing targets "seo pricing singapore": title "SEO Pricing in Singapore: Plans from S$299/mo", new H1, answer-first intro with the S$299–S$3,800 range, new first FAQ (FAQPage schema) — https://www.epicware.ai/pricing — PR #6
- 2026-11-10 — /pricing FAQ + Product schema no longer say Foundation includes rank tracking (it doesn't, per `lib/pricing-data.ts`); Authority no longer described as "adding" AI social (Foundation already has it) — https://www.epicware.ai/pricing — PR #6
- 2026-11-10 — Repointed 30 internal links in 18 files from 6 noindex draft sub-feature pages to their live parents (`/services/review-removal`, `/services/google-business-profile`, `/services/ai-search-visibility`), incl. 2 schema Offer URLs — sitewide — PR #6
- 2026-11-11 — /services/review-removal now targets "google review removal service": H1 + title "Google Review Removal Service | Epicware" (was "Review Removal"); SG intent stays with /locations/singapore/review-removal via existing en-SG hreflang — https://www.epicware.ai/services/review-removal — PR (this run)
- 2026-11-11 — Guide retargeted to "how to remove a google review": title, H1, meta, Article headline, and a two-sentence answer-first intro — https://www.epicware.ai/resources/guides/bad-review-removal-guide — PR (this run)
- 2026-11-11 — De-orphaned /use-cases/rank-higher-on-google-maps: 3 contextual links from /locations/singapore/local-seo, /blog/google-maps-ranking-factors, /products/epicmap — https://www.epicware.ai/use-cases/rank-higher-on-google-maps — PR (this run)
- 2026-11-11 — Crawl of live site (main, PR #6 still unmerged): 129/129 sitemap URLs 200, no canonical/noindex errors; 24 long titles, 2 thin pages, 2 orphans, 8 linked draft URLs unchanged from yesterday (draft links fixed in PR #6).
