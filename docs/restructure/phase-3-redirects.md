# Phase 3 — Redirect Map

All rules below are live in `next.config.ts` (`permanent: true`, Next.js emits HTTP 308 — treated equivalently to 301 by search engines for ranking purposes). Verified: zero redirect chains, zero self-loops (checked programmatically against the full rule set).

## Singapore flat URLs → new structure

| Old URL | New URL | Destination type |
|---|---|---|
| `/local-seo-singapore` | `/locations/singapore/local-seo` | Money page |
| `/local-seo-singapore/gbp-optimisation` | `/locations/singapore/google-business-profile` | Money page |
| `/local-seo-singapore/citation-building` | `/services/local-seo/citation-building` | Sub-feature |
| `/local-seo-singapore/competitor-analysis` | `/services/local-seo/competitor-analysis` | Sub-feature |
| `/local-seo-singapore/local-rank-tracking` | `/services/local-seo/rank-tracking` | Sub-feature |
| `/local-seo-singapore/gbp-post-scheduling` | `/services/google-business-profile/post-scheduling` | Sub-feature |
| `/local-seo-singapore/gbp-setup` | `/services/google-business-profile/setup` | Sub-feature |
| `/seo-agency-singapore` | `/locations/singapore/seo` | Money page |
| `/ai-search-visibility-singapore` | `/locations/singapore/ai-search-visibility` | Money page |
| `/ai-search-visibility-singapore/aeo` | `/services/ai-search-visibility/aeo` | Sub-feature |
| `/ai-search-visibility-singapore/ai-citation-building` | `/services/ai-search-visibility/ai-citation-building` | Sub-feature |
| `/ai-search-visibility-singapore/geo-optimisation` | `/services/ai-search-visibility/geo-optimisation` | Sub-feature |
| `/reputation-management-singapore` | `/locations/singapore/review-management` | Money page (merged) |
| `/reputation-management-singapore/ai-review-response` | `/services/review-management/ai-review-response` | Sub-feature |
| `/reputation-management-singapore/reputation-analytics` | `/services/review-management/reputation-analytics` | Sub-feature |
| `/reputation-management-singapore/review-generation` | `/services/review-management/review-generation` | Sub-feature |
| `/reputation-management-singapore/review-widgets` | `/services/review-management/review-widgets` | Sub-feature |
| `/review-management-singapore` | `/locations/singapore/review-management` | Money page (merged) |
| `/review-management-singapore/google-reviews` | `/locations/singapore/review-management` | Money page (merged) |
| `/bad-review-removal-singapore` | `/locations/singapore/review-removal` | Money page |
| `/bad-review-removal-singapore/fake-review-removal` | `/services/review-removal/fake-review-removal` | Sub-feature |
| `/bad-review-removal-singapore/unfair-review-removal` | `/services/review-removal/unfair-review-removal` | Sub-feature |

`/reputation-management-singapore` and `/review-management-singapore` (and `/review-management-singapore/google-reviews`) all converge on one merged page — per the brief's own Phase 3 table, both source pages owned the same destination.

## Already-dead URLs — rewired to avoid double-hop redirect chains

These had an existing `next.config.ts` rule (pre-dating this restructure) pointing at a Singapore flat URL that is now *itself* redirected. Updated to point straight at the final destination instead of chaining through two redirects.

| Old URL | New destination (was pointing at a now-redirected URL) |
|---|---|
| `/gbp-optimisation-singapore` (+ 4 sub-paths) | `/locations/singapore/google-business-profile` |
| `/reputation-management-singapore/review-management` | `/locations/singapore/review-management` |
| `/reputation-management-singapore/bad-review-removal` | `/locations/singapore/review-removal` |
| `/review-management-singapore/negative-review-response` | `/services/review-management/ai-review-response` |
| `/review-management-singapore/review-monitoring` | `/locations/singapore/review-management` |
| `/local-growth` | `/` (unchanged) |
| `/remove-review` | `/locations/singapore/review-removal` |
| `/blog/local-seo-agency-singapore-epicware` | `/locations/singapore/local-seo` |
| `/products/local-seo` | `/locations/singapore/local-seo` |

## NOT redirected, deliberately

**`/locations/usa`, `/locations/uk`, `/locations/dubai`** — no redirect needed. The URL path is unchanged: Phase 2's `app/locations/[country]/page.tsx` dynamic route serves the exact same `/locations/{slug}` URL the old static pages did. What changed is the *content* (replaced templated filler with a draft stub pending real market proof), not the URL. A redirect from a URL to itself does nothing. Draft-page invisibility (noindex, sitemap exclusion, unlinked from nav) — not a redirect — is what prevents the content-quality regression on these three.

## Verification

```
Total redirect rules: 51
Chains: none
Self-loops: none
```
Checked programmatically by resolving every rule's destination against the full set of sources.
