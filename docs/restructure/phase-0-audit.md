# Phase 0 — Audit & Plan: Global Services/Locations Restructure

Status: **awaiting approval**. No code has been changed. This document is the complete Phase 0 output for the `restructure/global-architecture` initiative. Per the brief, work stops here until these blockers are resolved.

---

## 1. Stack reality check (conflicts with the brief)

The brief assumes **Cloudflare Pages**. The repo does not support that claim:

| Signal | Finding |
|---|---|
| `wrangler.toml` / `wrangler.jsonc` | Absent |
| `public/_redirects` | Absent |
| `@cloudflare/next-on-pages` in `package.json` | Absent |
| `@vercel/speed-insights` in `package.json` | **Present**, wired into `app/layout.tsx` |
| `.vercel/` directory | **Present** (project.json, output/, env files — a Vercel CLI project link) |
| `next.config.ts` | Standard Node/Vercel `redirects()` array already in active use (20+ rules) |
| `output: "export"` in `next.config.ts` | Not set — this is a standard SSR/ISR Next.js app, not a static export |

**Conclusion: this is deployed on Vercel, not Cloudflare Pages.** This changes the Phase 0.3 answer (below) and should be corrected in the brief before Phase 4's `robots.txt`/bot-access and edge-runtime assumptions are acted on.

## 2. Current routing map

- **Router:** Next.js App Router (`app/`), confirmed via `next.config.ts` + `app/layout.tsx`. Next 16.2.6, React 19.2.4.
- **Content storage:** All page content is hand-written TSX/JSX directly in each `page.tsx`. There is no MDX, no CMS, no headless content source anywhere in the repo. The brief's Phase 2 instruction to put country×service content in `/content/locations/{country}/{service}.mdx` is a **new pattern for this codebase** — nothing today uses MDX or a `/content/` directory. Flagged as a blocker in §6.
- **Sitemap:** generated post-build by `next-sitemap` (`next-sitemap.config.js`, `postbuild` script in `package.json`), **not** `app/sitemap.ts`'s own generation logic exclusively — `app/sitemap.ts` exists too. Need to confirm which one actually produces `public/sitemap-0.xml` before Phase 4 touches it; right now there appear to be two sitemap code paths.
- **Robots:** static `public/robots.txt`, not `app/robots.ts`.
- **Redirects:** native Next.js `redirects()` in `next.config.ts`. Already has **29 active rules** covering prior consolidations (GBP pages, review-management pages, old product URLs, etc.).
- **Dynamic segments today:** exactly one — `app/locations/singapore/[district]/page.tsx`. No other `[param]` folder exists anywhere in `app/`.

## 3. Redirect mechanism (corrected from the brief)

Since this is Vercel, not Cloudflare Pages: **use `next.config.ts`'s native `redirects()` array**, which is already the established pattern in this codebase (29 rules already live). It returns real HTTP redirects (Next.js emits `308` for `permanent: true`, which search engines treat equivalently to `301` for ranking-signal purposes — worth knowing, not worth re-engineering around).

Do **not** introduce a Cloudflare `_redirects` file or `@cloudflare/next-on-pages` — neither applies to this deployment and adding them would do nothing (or require a full platform migration, which is out of scope here).

## 4. The Singapore district/service route collision — proposed fix

Today: `app/locations/singapore/[district]/page.tsx` is the only dynamic route under `/locations/singapore/`. Next.js's App Router requires every page.tsx can only declare one dynamic param name at a given path depth, which is where the brief's concern comes from — if Phase 2 adds `app/locations/[country]/[service]/page.tsx` as the generic country×service route, Singapore needs its money pages (`/locations/singapore/local-seo`, `/locations/singapore/google-business-profile`, etc.) to resolve too, and they'd want to live at the exact same path depth as `[district]`.

**This is resolvable without a framework conflict**, because Next.js gives static (literal) folders routing priority over sibling dynamic folders at the same level. `app/locations/singapore/` is already a literal folder (not `[country]`), so it will always intercept every `/locations/singapore/*` request before the generic `app/locations/[country]/*` route is ever considered. The only real collision is *inside* that folder, between `[district]` and the new service money pages.

**Recommended fix:** rename `app/locations/singapore/[district]/page.tsx` → `app/locations/singapore/[slug]/page.tsx`. Inside it:
1. Look up `slug` against `services.ts`. If it matches a service slug, render the Singapore×service money page (same template every other country uses).
2. Else look up `slug` against the existing districts list. If it matches, render the existing district page (unchanged).
3. Else, `notFound()`.

This preserves every existing `/locations/singapore/{district}` URL exactly, adds the new money pages at the same depth, and doesn't touch the other four countries' routing at all — they use a clean two-segment `app/locations/[country]/[service]/page.tsx` with no third page-type to disambiguate.

## 5. Full URL inventory (147 live routes)

Legend: **keep** = untouched by this restructure · **301** = redirect to new home, old file deleted · **delete** = file is already dead (shadowed by an existing redirect) · **decide** = needs your input before Phase 1

### 5a. Untouched (99 routes — core pages, blog, case studies, comparisons, products, tools, industries, use-cases, guides)
Out of scope for this restructure per the brief. Full list: `/`, `/about`, `/contact`, `/pricing`, `/privacy`, `/terms`, `/book-demo`, `/free-audit`, `/audit-landing`, `/reviews`, `/reseller`, `/creators`, all 6 `/case-studies*`, all 5 `/comparison/*`, all 3 `/growth-tools*`, all 9 `/industries*`, all 5 `/products*`, all 4 `/resources/guides*`, all 4 `/tools*`, all 5 `/use-cases/*`, and all **48 `/blog/*`** posts (the brief never mentions blog restructuring — flagged as an assumption in §6).

### 5b. Already-dead files — cleanup, independent of this restructure (14 routes)
These `page.tsx` files still exist on disk but are **already unreachable** — an existing `next.config.ts` redirect rule shadows every one of them. They should simply be deleted; nothing currently links to them that isn't already being redirected.

| Current URL | Already redirects to (existing rule) |
|---|---|
| `/gbp-optimisation-singapore` | `/local-seo-singapore/gbp-optimisation` |
| `/gbp-optimisation-singapore/gbp-audit` | `/local-seo-singapore/gbp-optimisation` |
| `/gbp-optimisation-singapore/gbp-category-optimisation` | `/local-seo-singapore/gbp-optimisation` |
| `/gbp-optimisation-singapore/gbp-photo-management` | `/local-seo-singapore/gbp-optimisation` |
| `/gbp-optimisation-singapore/gbp-qa-management` | `/local-seo-singapore/gbp-optimisation` |
| `/reputation-management-singapore/review-management` | `/review-management-singapore` |
| `/reputation-management-singapore/bad-review-removal` | `/bad-review-removal-singapore` |
| `/review-management-singapore/negative-review-response` | `/reputation-management-singapore/ai-review-response` |
| `/review-management-singapore/review-monitoring` | `/review-management-singapore` |
| `/local-seo-singapore/citation-building` | `/ai-search-visibility-singapore/ai-citation-building` **— see blocker in §6, this conflicts with the brief's Phase 3 table** |
| `/bad-review-removal-singapore/google-review-removal-policy` | `/blog/google-review-policy-explained` |
| `/blog/local-seo-agency-singapore-epicware` | `/local-seo-singapore` |
| `/local-growth` | `/` |
| `/remove-review` | `/bad-review-removal-singapore` |

### 5c. Already specified in the brief's Phase 3 table (10 routes) — confirmed, ready to execute once approved
`/local-seo-singapore`, `/local-seo-singapore/gbp-optimisation`, `/local-seo-singapore/competitor-analysis`, `/local-seo-singapore/local-rank-tracking`, `/seo-agency-singapore`, `/ai-search-visibility-singapore`, `/reputation-management-singapore`, `/review-management-singapore`, `/review-management-singapore/google-reviews`, `/bad-review-removal-singapore` → map exactly as the brief's table specifies.

**One direct conflict inside this set:** the brief's table sends `/local-seo-singapore/citation-building` → `/services/local-seo/citation-building/`. But that URL is currently in the "already dead" list above — it's *already* redirecting to `/ai-search-visibility-singapore/ai-citation-building` (a different destination, set up by someone before this project). Overwriting that existing redirect is fine mechanically, but the two live destinations (`/services/local-seo/citation-building/` vs `/ai-search-visibility-singapore/ai-citation-building`) imply citation-building is either a Local SEO sub-service or an AI-search sub-service — those are different taxonomy decisions. Flagged in §6.

### 5d. Sub-service pages NOT in the brief's table — need a target pattern decided (11 routes)
The brief's `services.ts` list only names 6 top-level services. These 11 existing pages are granular sub-features of those services, and the brief's own table already treats two sibling cases this way (`competitor-analysis` → `/services/local-seo/competitor-analysis/`, `local-rank-tracking` → `/services/local-seo/rank-tracking/`), so the obvious pattern is `/services/{parent-service}/{sub-feature}/` for all of them — but I'm not assuming it without confirmation, since it adds 11 more pages beyond the "41 total pages" count the brief specifies for `generateStaticParams`.

| Current URL | Proposed (pattern match to brief's own examples) |
|---|---|
| `/local-seo-singapore/gbp-post-scheduling` | `/services/google-business-profile/post-scheduling/` |
| `/local-seo-singapore/gbp-setup` | `/services/google-business-profile/setup/` |
| `/ai-search-visibility-singapore/aeo` | `/services/ai-search-visibility/aeo/` |
| `/ai-search-visibility-singapore/ai-citation-building` | `/services/ai-search-visibility/ai-citation-building/` **(conflicts with 5c above — pick one taxonomy)** |
| `/ai-search-visibility-singapore/geo-optimisation` | `/services/ai-search-visibility/geo-optimisation/` |
| `/bad-review-removal-singapore/fake-review-removal` | `/services/review-removal/fake-review-removal/` |
| `/bad-review-removal-singapore/unfair-review-removal` | `/services/review-removal/unfair-review-removal/` |
| `/reputation-management-singapore/ai-review-response` | `/services/review-management/ai-review-response/` |
| `/reputation-management-singapore/reputation-analytics` | `/services/review-management/reputation-analytics/` |
| `/reputation-management-singapore/review-generation` | `/services/review-management/review-generation/` |
| `/reputation-management-singapore/review-widgets` | `/services/review-management/review-widgets/` |

### 5e. `/services` already exists — not greenfield (1 route)
`/services` is a live, 399-line page today (not a stub), with its own JSON-LD `Service` schema and an unverified **"500+ Outlets Managed"** trust-signal badge. The brief says "there is no /services/ hub" — that's incorrect. Phase 1/2 needs to decide: rebuild this page as the new global hub, or treat its existing copy as a starting point.

### 5f. `/locations/*` already exists for 4 of the 5 target countries — not greenfield (6 routes)
The brief says "nothing exists for the US, UK, Australia or UAE." Reality:

| Current URL | Lines | Status |
|---|---|---|
| `/locations/singapore` | 250 | Exists, matches the brief's intended hub pattern already |
| `/locations/singapore/[district]` | 315 | Exists exactly as the brief expects — keep |
| `/locations/usa` | 236 | **Exists** — full page, not a stub, links out to Singapore-branded service URLs (`/local-seo-singapore/gbp-optimisation` etc.) |
| `/locations/uk` | 234 | **Exists** — same pattern |
| `/locations/dubai` | 239 | **Exists** — same pattern, **slugged `dubai`, not `uae`** as the brief's `countries.ts` spec wants |
| `/locations/malaysia` | 237 | **Exists** — Malaysia is **not** one of the brief's 5 target markets at all |
| *(Australia)* | — | Genuinely does not exist — this one claim in the brief is correct |

Every one of `/locations/usa`, `/locations/uk`, `/locations/dubai` repeats the same unverified **"500+ outlets... across Singapore, Malaysia, and the UAE"** trust-signal line — this is the cross-page proof-number conflict Phase 1 is supposed to catch (§6 lists it as a `proof.ts` input, not invented by me).

---

## 6. Open decisions / blockers (numbered, needs your input before Phase 1)

1. **Platform:** brief says Cloudflare Pages; repo is Vercel. Confirm which is actually true for the live `www.epicware.ai` deployment — if it really is Vercel, the brief's Phase 4 Cloudflare-specific assumptions (and possibly bot-access config) should be corrected, not just the redirect mechanism.
2. **Content storage:** brief wants `/content/locations/{country}/{service}.mdx`. Nothing in this codebase uses MDX today — every page is hand-written TSX. Introducing MDX is a new dependency + new render pipeline. Confirm you want this, versus keeping the existing pattern (one `page.tsx` per route, data layer in `/lib/site/`) which fits this codebase's conventions without adding a new content format.
3. **`/services` and 4 of 5 `/locations/*` pages already exist** with real, specific copy (not stubs). Confirm whether Phase 1/2 should treat these as content to preserve/migrate into the new templates, or fully replace them. (The brief's own constraint — "country pages must not share body copy" — argues for preserving what's already country-specific rather than discarding it.)
4. **`/locations/dubai` vs `/locations/uae`:** rename with a 301, or keep the existing `dubai` slug? The brief's `countries.ts` spec uses `uae`.
5. **`/locations/malaysia`:** not in the brief's 5-country scope. Leave it alone and unlinked from the new Locations mega-menu, fold it in as a 6th market, or something else?
6. **Sub-service taxonomy (11 pages, §5d):** confirm the `/services/{service}/{sub-feature}/` pattern before I build it — this adds pages beyond the 41 the brief counts for `generateStaticParams`.
7. **Direct conflict on citation-building (§5c/5d):** is citation-building a Local SEO sub-service or an AI-search-visibility sub-service? The brief's table and the existing (pre-this-project) redirect disagree.
8. **14 already-dead files (§5b):** confirm these should just be deleted as part of this work (they're unreachable regardless of the restructure — this is pre-existing cleanup debt, not something the restructure creates).
9. **Blog restructuring:** the brief never mentions the 48 `/blog/*` posts. Confirmed out of scope — correct?
10. **Proof numbers:** found "500+ Outlets Managed" repeated verbatim across `/services`, `/locations/usa`, `/locations/uk`, `/locations/dubai`. Per the brief's Phase 1 instruction, this is exactly the kind of number that needs either a source or a `TODO(proof)` marker — surfacing it now so Phase 1 doesn't miss it.

---

**Per the brief: stopping here. Awaiting decisions on the above before starting Phase 1.**
