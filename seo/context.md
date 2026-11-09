# Epicware: SEO context

Built 2026-11-09 from the repo and the live site. Re-check facts against their source before quoting them; the product wins over this file.

## Setup lines

```
Site:          https://www.epicware.ai
Product:       Singapore local SEO and reputation agency that runs every account on its own software (EpicMap, EpicReview, EpicEngage, EpicSocial), sold to SMB owners and multi-outlet operators: clinics, F&B, salons, retail.
Conversion:    Strategy call booked (/book-demo form). Secondary: free GBP audit started (/free-audit).
Competitors:   impossible.sg, firstpagedigital.sg, oom.com.sg, heroesofdigital.com (Opinly tracked list). Software comparisons already live: Birdeye, BrightLocal, Yext, Grade.us.
Ship mode:     PR for review
```

## What it is

- Positioning on the live homepage: "AI-Powered Digital Marketing Agency in Singapore" (H1, https://www.epicware.ai/). Older internal docs (SITE_ARCHITECTURE.md) say "platform, not agency"; the live site has moved to agency + own software. Write to the live positioning.
- Team works inside its own software, so clients see live rankings, reviews and AI mentions instead of a monthly PDF (homepage FAQ schema).
- Covers Google Maps / GBP, website SEO, AI search (GEO/AEO), reviews and bad-review removal (homepage FAQ).
- Markets: Singapore (most clients), also Malaysia, UAE, UK, US (homepage FAQ). Live country service pages: USA only (`liveCountryServices` in layout; UK/Australia/Dubai are draft).
- Proof claim on homepage: "50+ outlets managed" (homepage hero stats).
- Founder background: NinjaOS exit (SITE_ARCHITECTURE.md). Verify wording on /about before reusing.

## Prices (https://www.epicware.ai/pricing, read 2026-11-09, SGD)

| Plan | Price | Key items | Guarantee |
|---|---|---|---|
| Foundation | S$299/mo | Review collection, AI review replies, GBP optimisation, 2 posts/week, CRM 1,000 | none |
| Authority (most popular) | S$899/mo | + full local SEO, 19-point GBP audit, 5 posts/week, Maps grid scan, rank tracking, 1 review removal/mo, GEO citation 1 keyword | Top 3 on Maps for 1 keyword in 90 days or extended free |
| Domination | S$1,800/mo | + 20 tracked keywords, 10 blog posts/mo, website SEO 20 keywords, GEO audit + implementation, DA20+ backlinks, 5 removals/mo | Top 3 for 3 keywords + cited by ChatGPT/Gemini in 120 days or free |
| Full Stack | S$3,800/mo + ad spend | + Meta and Google ad management | — |

- Extra outlet +S$99/mo. Monthly, cancel with 30 days' notice; annual saves 15%. (pricing page)
- Bad review removal: S$200 per review, refunded in full if not removed within 3 months (pricing page, homepage FAQ). Only reviews that break Google policy; filed through Google's channels (homepage FAQ).

## Conversion paths

- `/book-demo#form` — "Book a Free Strategy Call" (homepage hero, final CTA).
- `/free-audit` — "Get Your Free SEO Audit", no signup (homepage).
- WhatsApp +65 9001 3157 used on ads landing pages (.claude-ads Google Ads plan).
- Tracking: GA4 G-7F3MHETL6F, Google Ads AW-18302464942, Meta pixel, Microsoft Clarity (layout.tsx). Repo guards ads tracking with `scripts/check-google-ads-tracking.ts`.

## How the site is built

- Next.js App Router, deployed by Vercel from `main` only (AGENTS.md: never `vercel --prod`).
- Pages are bespoke `app/**/page.tsx`; country/service and service sub-feature pages are MDX in `content/` with `draft: true|false`. Drafts are noindex and must be unlinked (next-sitemap.config.js comment).
- Sitemap: `app/sitemap.ts` (served live). Blog posts are auto-discovered from `app/blog/*/page.tsx` since 2026-11-09. `next-sitemap` also writes `public/sitemap*.xml` in postbuild (see backlog).
- `llms.txt` generated in postbuild (`scripts/generate-llms-txt.ts`).
- Prebuild guards: page similarity, substance, honesty, sitemap/noindex, gtag conversions, meta description length. Run `npm run build` before any PR. `npm run lint` is broken (Next removed `next lint`).
- Blog post template: `components/blog/BlogArticle`, metadata + Article schema in each page.

## Competitors

| Who | Type | Source |
|---|---|---|
| Impossible Marketing (impossible.sg) | SG agency, awards-heavy, GEO/AEO positioning | Opinly tracked list; SITE_ARCHITECTURE.md |
| First Page Digital (firstpagedigital.sg) | SG agency | Opinly tracked list |
| OOm (oom.com.sg) | SG agency | Opinly tracked list |
| Heroes of Digital (heroesofdigital.com) | SG agency | Opinly tracked list |
| Birdeye, BrightLocal, Yext, Grade.us | Review/listing software | existing /comparison pages |

Sitemap snapshots: `seo/competitors/*.txt` (2026-11-09).

## Data sources

| Source | Status 2026-11-09 |
|---|---|
| Opinly (ranked keywords, traffic, competitors) | Working. SG market. |
| Ahrefs API | Connected but "Insufficient plan" on every endpoint |
| Google Search Console | Not connected |
| GA4 (analytics MCP) | Not connected: no Google credentials on this machine |
| Google Keyword Planner volumes | Taken from `Marketing/Skills/.claude-ads/runs/epicware-google-setup-20261028/Epicware-Google-Ads-Plan.md` |
| AI answer tracking | None; Opinly LLM visibility is a paid add-on |
