# EPICWARE — PHASE 0: SITE ARCHITECTURE
> **For Claude Code:** This is the complete site architecture spec for the Epicware website rebuild. Read this file in full before touching any code. Every URL, redirect, and content decision is documented here.

---

## BUSINESS INFORMATION

| Field | Value |
|---|---|
| **Business Name** | Epicware Pte. Ltd. |
| **Product Type** | B2B SaaS Platform (NOT an agency) |
| **Industry** | Local SEO & Reputation Management Software |
| **Headquarters** | Singapore |
| **Website** | epicware.ai |
| **Phone** | +65 9001 3157 |
| **Email** | hello@epicware.ai |
| **Current Stack** | Vite + React SPA (Cloudflare Pages) |
| **Target Stack (Rebuild)** | Next.js 14 (App Router, SSG/SSR) + Cloudflare Pages |
| **Primary GBP Category** | Internet Marketing Service |
| **Secondary GBP Categories** | Marketing Agency · Reputation Management Service · Search Engine Optimization Agency · Business Management Consultant |
| **Primary Target Keyword** | Local SEO Platform Singapore |
| **Markets Served** | Singapore · Malaysia · UAE · United Kingdom · United States |

---

## POSITIONING — READ BEFORE WRITING ANY COPY

> **One sentence:** Epicware is the only AI-native Local SEO and Reputation Management **platform** built for SMBs — not an agency, not a US tool re-skinned for Asia.

**The word that separates Epicware from every competitor on its GBP listing:**
`platform` / `software` — not `agency`, not `service`.

**Three competitors on the same GBP listing (all agencies, not SaaS):**
- Best Marketing Agency — ROI-focused full-service agency, $33M revenue claimed
- Impossible Marketing — Awards-heavy, 700+ reviews, GEO/AEO positioning
- Tomo Digital — SEO-only specialist, 10+ years, transparent reporting

**Epicware's moat vs all three:** Self-serve platform. Scales without headcount. AI-native (not layered on). International from day one.

**Unique differentiator no competitor offers:** Bad Google Review Removal ($200/review). No agency in Singapore offers this as a productised, priced service. Own this keyword.

**Trust signals (NO government grants — we serve international markets):**
1. Active clients across Singapore, Malaysia, UAE, UK, USA
2. AI-native platform — built on Supabase + modern stack, not legacy agency tools
3. Founder exit: NinjaOS (F&B SaaS, $120M+ GMV) — exited 2021
4. Only platform in Singapore offering productised Bad Review Removal

**Local issues to reference in copy (Singapore context):**
1. Singapore's density means GBP rank is decided by review volume + completeness, not just proximity
2. One bad Google review is visible to everyone within a 1km radius — the entire estate
3. AI search (ChatGPT, Perplexity, Google AI Overviews) now answers "best clinic in Tampines" — GBP alone is no longer enough
4. Multi-outlet pain — F&B chains and salon groups manually manage 3–10 separate GBP profiles
5. Most "local SEO agencies" sell time, not software — no dashboard, no self-serve, no scale

---

## CRITICAL TECHNICAL NOTE

> **The current site (Vite/React SPA) renders all content client-side.** Every page — blog posts, guides, tools, use cases — serves identical HTML to Google. Title tags, meta descriptions, and body content are NOT being indexed per-page. The rebuild to Next.js 14 with SSG/SSR fixes this entirely. This is the #1 SEO priority of the rebuild.

---

## URL STRUCTURE

### Homepage
```
HOMEPAGE: /
Title tag: Local SEO & Reputation Management Platform for SMBs | Epicware
```

### Main Pages
```
/services          — Services hub (category wrappers: Reputation Mgmt, Local SEO, AI & GEO, Growth Tools)
/products          — Products hub (named SaaS modules: EpicMap, EpicReview, EpicEngage, EpicSocial)
/pricing           — KEEP existing URL, update tier content
/about             — New page
/contact           — KEEP existing URL
/book-demo         — KEEP existing URL (high-intent CTA)
/audit             — KEEP (GBP Category Audit lead magnet, active)
/reseller          — New page (White-label / Partner programme)
/blog              — New standalone route (mirrors /resources/blog)
/privacy           — KEEP
/terms             — KEEP
```

### Product Pages (new — each gets a dedicated page)
```
/products/epicmap        — Local Rank Tracking + GBP Optimisation + Competitor Analysis
/products/epicreview     — Review Management + AI Response + Review Generation + Wall of Love
/products/epicengage     — Email Marketing (EpicEngage)
/products/epicsocial     — Social Scheduling + GBP Post Scheduling (EpicSocial)
```

---

## SERVICE HIERARCHY

### SECONDARY CATEGORY 1: Reputation Management
**Category Page:** `/reputation-management-singapore`

| Child Service | URL |
|---|---|
| Review Management | `/reputation-management-singapore/review-management` |
| AI Review Response | `/reputation-management-singapore/ai-review-response` |
| Bad Review Removal ⭐ | `/reputation-management-singapore/bad-review-removal` |
| Review Generation Campaigns | `/reputation-management-singapore/review-generation` |
| Wall of Love (Review Widgets) | `/reputation-management-singapore/review-widgets` |
| Reputation Analytics Dashboard | `/reputation-management-singapore/reputation-analytics` |

---

### SECONDARY CATEGORY 2: Local SEO Services
**Category Page:** `/local-seo-singapore`

| Child Service | URL |
|---|---|
| GBP Optimisation | `/local-seo-singapore/gbp-optimisation` |
| GBP Post Scheduling | `/local-seo-singapore/gbp-post-scheduling` |
| GBP Setup & Onboarding | `/local-seo-singapore/gbp-setup` |
| Local Rank Tracking (EpicMap) | `/local-seo-singapore/local-rank-tracking` |
| Citation Building | `/local-seo-singapore/citation-building` |
| Competitor Analysis | `/local-seo-singapore/competitor-analysis` |

---

### SECONDARY CATEGORY 3: AI & GEO Visibility
**Category Page:** `/ai-search-visibility-singapore`

| Child Service | URL |
|---|---|
| GEO / AI Overview Optimisation | `/ai-search-visibility-singapore/geo-optimisation` |
| AI Citation Building | `/ai-search-visibility-singapore/ai-citation-building` |
| AEO (Answer Engine Optimisation) | `/ai-search-visibility-singapore/aeo` |

---

### SECONDARY CATEGORY 4: Growth Tools
**Category Page:** `/growth-tools`

| Child Service | URL |
|---|---|
| Website SEO Builder | `/growth-tools/website-seo-builder` |
| EpicEngage Email Marketing | `/growth-tools/epicengage-email-marketing` |
| EpicSocial Social Scheduling | `/growth-tools/epicsocial-social-scheduling` |

---

### CORE SERVICE 1: Bad Review Removal ⭐ (Unique differentiator)
**Core Page:** `/bad-review-removal-singapore`
> Standalone core service page. Highest commercial intent. No competitor owns this URL.
> Pricing: $200/review. Flag Google Policy violations. Submit removal requests. 
> Cross-link from: every blog post about fake/negative reviews.

| Child Page | URL |
|---|---|
| How to Remove a Fake Google Review | `/bad-review-removal-singapore/fake-review-removal` |
| How to Remove an Unfair Google Review | `/bad-review-removal-singapore/unfair-review-removal` |
| Google Review Removal Policy Explained | `/bad-review-removal-singapore/google-review-removal-policy` |

---

### CORE SERVICE 2: GBP Optimisation
**Core Page:** `/gbp-optimisation-singapore`

| Child Page | URL |
|---|---|
| GBP Audit | `/gbp-optimisation-singapore/gbp-audit` |
| GBP Category Optimisation | `/gbp-optimisation-singapore/gbp-category-optimisation` |
| GBP Photo & Video Management | `/gbp-optimisation-singapore/gbp-photo-management` |
| GBP Q&A Management | `/gbp-optimisation-singapore/gbp-qa-management` |

---

### CORE SERVICE 3: Review Management
**Core Page:** `/review-management-singapore`

| Child Page | URL |
|---|---|
| Google Review Management | `/review-management-singapore/google-reviews` |
| Negative Review Response | `/review-management-singapore/negative-review-response` |
| Review Monitoring & Alerts | `/review-management-singapore/review-monitoring` |

---

## VERTICAL / ICP LANDING PAGES

> Keep existing `/industries/` URL prefix. Rebuild content only.

| Page | URL | Status |
|---|---|---|
| Local SEO for F&B Restaurants | `/industries/restaurants` | REBUILD (exists) |
| Local SEO for Medical Clinics | `/industries/healthcare-clinics` | REBUILD (exists) |
| Local SEO for Hair & Beauty Salons | `/industries/nail-hair-salons` | REBUILD (exists) |
| Local SEO for Tuition Centres | `/industries/tuition-centres` | REBUILD (exists) |
| Local SEO for Spas & Wellness | `/industries/wellness-centres` | REBUILD (exists) |
| Local SEO for Dental Clinics | `/industries/dental-clinics` | NEW |
| Local SEO for Car Workshops | `/industries/car-workshops` | NEW |
| Local SEO for Physiotherapy Clinics | `/industries/physiotherapy` | NEW |
| Local SEO for Retail Stores | `/industries/retail-stores` | NEW |

---

## LOCATION PAGES

> Keep existing `/locations/` prefix for country pages. Add district pages under Singapore.

### Country Pages (existing — rebuild content)
```
/locations/singapore    → Full hub page, links to all district pages
/locations/malaysia     → KL + Penang focus
/locations/dubai        → UAE SMB market
/locations/uk           → London focus
/locations/usa          → Multi-city (future: individual city pages)
```

### Singapore District Pages (new)
```
/locations/singapore/jurong
/locations/singapore/tampines
/locations/singapore/woodlands
/locations/singapore/ang-mo-kio
/locations/singapore/toa-payoh
/locations/singapore/clementi
/locations/singapore/buona-vista
/locations/singapore/orchard
/locations/singapore/bedok
/locations/singapore/yishun
```

---

## USE CASE PAGES

> Keep `/use-cases/` prefix. Cut Kairo/EpicCommerce pages, add new ones.

| Page | URL | Action |
|---|---|---|
| Get More Google Reviews | `/use-cases/get-more-google-reviews` | REBUILD (exists) |
| Rank Higher on Google Maps | `/use-cases/rank-higher-on-google-maps` | REBUILD (exists) |
| Improve Google Rating | `/use-cases/improve-google-rating` | REBUILD (exists) |
| Remove Bad Google Reviews ⭐ | `/use-cases/remove-bad-google-reviews` | NEW — highest priority |
| Manage Multiple GBP Locations | `/use-cases/manage-multiple-gbp-locations` | NEW |
| Automate WhatsApp Bookings | `/use-cases/automate-whatsapp-bookings` | 301 → `/contact` |
| Reduce No-Shows | `/use-cases/reduce-no-shows` | 301 → `/contact` |
| Increase Direct Online Orders | `/use-cases/increase-direct-online-orders` | 301 → `/contact` |

---

## BLOG & RESOURCES

> All 19 existing blog posts: KEEP URLs, rebuild as SSG pages with proper per-page meta.
> Currently broken — all render as SPA shell with no unique content to Google.

### Keep all existing blog URLs under `/resources/blog/`:
```
/resources/blog/google-maps-ranking-factors              ← Priority 1
/resources/blog/google-reviews-strategy                  ← Priority 1
/resources/blog/fake-or-unfair-google-reviews-what-to-do ← Priority 1 (feeds Bad Review Removal)
/resources/blog/how-to-get-more-google-reviews
/resources/blog/best-time-to-ask-for-a-google-review
/resources/blog/google-review-request-templates
/resources/blog/how-to-create-google-review-link-qr-code
/resources/blog/should-you-respond-to-every-google-review
/resources/blog/review-velocity-vs-total-review-count
/resources/blog/do-keywords-in-reviews-help-local-seo
/resources/blog/how-many-google-reviews-do-you-need-to-compete-locally
/resources/blog/can-you-incentivize-google-reviews
/resources/blog/review-gating-explained
/resources/blog/do-photo-reviews-matter-for-local-seo
/resources/blog/how-fast-should-you-respond-to-google-reviews
/resources/blog/google-review-policy-explained
/resources/blog/reviews-vs-rating-what-matters-more
/resources/blog/customer-feedback-system-private-vs-public-reviews
/resources/blog/review-velocity-vs-total-review-count
```

### Add one critical missing post:
```
/resources/blog/how-to-remove-bad-google-reviews   ← NEW — captures removal intent, CTAs to /bad-review-removal-singapore
```

### Guides (keep + expand):
```
/resources/guides/restaurant-digital-growth-guide         KEEP + REBUILD
/resources/guides/local-business-playbook-2026            KEEP (refresh annually)
/resources/guides/bad-review-removal-guide                NEW — owned topic
```

---

## FREE TOOLS (Lead Magnets)

> Keep both. These drive top-of-funnel traffic + brand authority.

```
/tools/google-review-reply-generator      KEEP + IMPROVE
/tools/google-review-request-generator    KEEP + IMPROVE
/tools                                     KEEP (tools index)
/resources/tools                           301 → /tools
```

---

## COMPARISON PAGES

> Cut product comparisons (Kairo/EpicCommerce). Add competitor comparisons.

| Page | URL | Action |
|---|---|---|
| Epicware vs QR Code Review | `/comparison/epicreview-vs-qr-code-review` | REBUILD (exists) |
| Epicware vs Birdeye | `/comparison/epicware-vs-birdeye` | NEW |
| Epicware vs BrightLocal | `/comparison/epicware-vs-brightlocal` | NEW |
| Epicware vs Yext | `/comparison/epicware-vs-yext` | NEW |
| Epicware vs GradeUs | `/comparison/epicware-vs-gradeus` | NEW |
| EpicCommerce vs Delivery Platforms | `/comparison/epiccommerce-vs-delivery-platforms` | 301 → `/contact` |
| Kairo vs Manual WhatsApp | `/comparison/kairo-vs-manual-whatsapp` | 301 → `/contact` |

---

## CASE STUDIES

```
/case-studies/restaurant-multi-outlet-growth-singapore   KEEP + STRENGTHEN
/case-studies/clinic-review-growth-singapore             KEEP + ADD Bad Review Removal angle
/case-studies/salon-whatsapp-automation                  REBUILD → pivot to review + local SEO results
```

---

## 301 REDIRECT MAP

> Implement all of these on day one of the rebuild. No redirect = lost link equity.

```
/platform                                    → /services
/products/epicreview                         → /review-management-singapore
/products/local-seo                          → /local-seo-singapore
/products/kairo                              → /contact
/products/epiccommerce                       → /contact
/use-cases/automate-whatsapp-bookings        → /contact
/use-cases/reduce-no-shows                   → /contact
/use-cases/increase-direct-online-orders     → /contact
/comparison/epiccommerce-vs-delivery-platforms → /contact
/comparison/kairo-vs-manual-whatsapp         → /contact
/audit-lp                                    → /audit
/resources/tools                             → /tools
/resources/blog                              → /blog
```

---

## NAVIGATION STRUCTURE

### Main Nav
```
Home           /
Products       /products  [dropdown — 4 named modules]
  ├── EpicMap               /products/epicmap
  │   Rank Tracking · GBP Optimisation · Competitor Analysis
  ├── EpicReview            /products/epicreview
  │   Review Management · AI Response · Review Generation · Wall of Love
  ├── EpicEngage            /products/epicengage
  │   Email Marketing
  └── EpicSocial            /products/epicsocial
      Social Scheduling · GBP Post Scheduling
Services       /services  [dropdown — 4 category wrappers]
  ├── Reputation Management    /reputation-management-singapore
  ├── Local SEO                /local-seo-singapore
  ├── AI & GEO Visibility      /ai-search-visibility-singapore
  └── Growth Tools             /growth-tools
Solutions      [dropdown — by industry]
  ├── F&B Restaurants          /industries/restaurants
  ├── Medical Clinics          /industries/healthcare-clinics
  ├── Hair & Beauty Salons     /industries/nail-hair-salons
  ├── Tuition Centres          /industries/tuition-centres
  └── View All Industries →    /industries
Pricing        /pricing
Resources      [dropdown]
  ├── Blog                     /blog
  ├── Guides                   /resources/guides
  └── Free Tools               /tools
Book Demo      /book-demo   [PRIMARY CTA BUTTON — distinct style]
```

> **Products dropdown design note for Claude Code:**
> Each item shows module name (EpicMap) as primary label + short descriptor (Rank Tracking) as subtitle.
> Use a 2-column layout: left = name + descriptor, right = one-line "what it does" summary.
> Mirror how Intercom/Linear/HubSpot structure their product dropdowns.

### Footer
```
PRODUCTS
  EpicMap (Rank Tracking)      EpicReview (Reviews)
  EpicEngage (Email)           EpicSocial (Social)

SERVICES
  Reputation Management        Local SEO Services
  AI & GEO Visibility          Growth Tools
  Bad Review Removal ⭐        Pricing

SOLUTIONS
  Restaurants                  Medical Clinics
  Hair & Beauty Salons         Tuition Centres
  Dental Clinics               Car Workshops
  All Industries →

LOCATIONS
  Singapore                    Malaysia
  Dubai                        United Kingdom
  United States

COMPANY
  About                        Case Studies
  Reseller Programme           Contact
  Blog                         Free Tools

LEGAL
  Privacy Policy               Terms of Service
```

---

## INTERNAL LINKING MAP

| Page | Links To |
|---|---|
| **Homepage** | All 4 product pages · All 4 service category pages · Core service pages · 5 featured vertical pages · Pricing · Book Demo · Top 3 use cases · Featured blog post |
| **Products Hub (/products)** | All 4 product pages · Pricing · Book Demo |
| **EpicMap** | Local SEO category · GBP Optimisation core · Local Rank Tracking child · Competitor Analysis child · Pricing · Book Demo |
| **EpicReview** | Reputation Management category · Review Management core · Bad Review Removal core · Pricing · Book Demo |
| **EpicEngage** | Growth Tools category · Pricing · Book Demo |
| **EpicSocial** | Growth Tools category · GBP Post Scheduling child · Pricing · Book Demo |
| **Reputation Management** | All 6 child pages · Bad Review Removal (core) · EpicReview (product) · Back: Homepage |
| **Local SEO Singapore** | All 6 child pages · GBP Optimisation (core) · EpicMap (product) · Back: Homepage |
| **AI & GEO Visibility** | All 3 child pages · Local SEO category · Back: Homepage |
| **Growth Tools** | All 3 child pages · EpicEngage (product) · EpicSocial (product) · Back: Homepage |
| **Bad Review Removal** ⭐ | 3 child pages · Blog: fake-or-unfair-google-reviews · Blog: how-to-remove-bad-google-reviews · Pricing · Book Demo |
| **GBP Optimisation (core)** | 4 child pages · Local SEO category · EpicMap (product) · Pricing · Book Demo |
| **Review Management (core)** | 3 child pages · Reputation Management category · Bad Review Removal · EpicReview (product) · Pricing |
| **Vertical Pages** | Relevant product pages · Relevant service pages · Nearest location pages · Case studies for that vertical · Pricing |
| **Location Pages** | Relevant vertical pages · GBP Optimisation · Review Management · Bad Review Removal · Pricing |
| **Blog Posts** | Relevant service page · Relevant product page · Related blog posts · Free tools · Book Demo CTA |
| **Child Pages (all)** | Parent category · 1–2 sibling pages · Relevant product page · Pricing · Contact / Book Demo · Homepage |

---

## PAGE COUNT SUMMARY

| Page Type | Count | Status |
|---|---|---|
| Homepage | 1 | Rebuild |
| Main Pages (services, products, pricing, about, contact, book-demo, audit, reseller) | 8 | Mix of keep/rebuild |
| Product Pages (EpicMap, EpicReview, EpicEngage, EpicSocial) | 4 | New |
| Secondary Category Pages | 4 | New |
| Category Child Service Pages | 18 | New |
| Core Service Pages (Bad Review Removal, GBP, Review Mgmt) | 3 | New |
| Core Service Child Pages | 10 | New |
| Vertical / ICP Pages | 9 | 5 rebuild + 4 new |
| Country Location Pages | 5 | Rebuild (exist) |
| Singapore District Pages | 10 | New |
| Use Case Pages | 5 | 3 rebuild + 2 new |
| Blog Posts | 20 | 19 rebuild as SSG + 1 new |
| Guides | 3 | 2 rebuild + 1 new |
| Free Tools | 3 | Keep + improve |
| Comparison Pages | 5 | 1 rebuild + 4 new |
| Case Studies | 3 | Rebuild |
| Legal (privacy, terms) | 2 | Keep |
| **TOTAL** | **113** | |

---

## BUILD PRIORITY ORDER

> Claude Code: build in this sequence. Do not jump to location pages before core service pages exist.

```
PHASE 1 — Foundation (Week 1)
  [ ] Next.js 14 project setup (App Router, SSG default)
  [ ] Global layout: nav (Products + Services + Solutions), footer, fonts, colour tokens
  [ ] Implement all 301 redirects (next.config.js)
  [ ] Homepage
  [ ] /pricing (content update)
  [ ] /book-demo (keep, verify)
  [ ] /contact (keep, verify)

PHASE 2 — Products + Core Money Pages (Week 1–2)
  [ ] /products (hub page)
  [ ] /products/epicmap
  [ ] /products/epicreview
  [ ] /products/epicengage
  [ ] /products/epicsocial
  [ ] /bad-review-removal-singapore  ← HIGHEST PRIORITY SERVICE PAGE
  [ ] /use-cases/remove-bad-google-reviews
  [ ] /review-management-singapore
  [ ] /local-seo-singapore
  [ ] /gbp-optimisation-singapore
  [ ] /reputation-management-singapore

PHASE 3 — Services + Child Pages (Week 2–3)
  [ ] /services (hub page)
  [ ] All 4 secondary category pages
  [ ] All 18 category child service pages
  [ ] Remaining core service child pages

PHASE 4 — Verticals + Use Cases (Week 3)
  [ ] All 9 vertical/industry pages
  [ ] All 5 use case pages

PHASE 5 — Content & Tools (Week 3–4)
  [ ] All 20 blog posts (SSG, per-page meta)
  [ ] All 3 guides
  [ ] All 3 free tools
  [ ] Comparison pages

PHASE 6 — Geo Pages (Week 4)
  [ ] 5 country location pages
  [ ] 10 Singapore district pages

PHASE 7 — Authority (Ongoing)
  [ ] Case studies
  [ ] Reseller / partner page
  [ ] About page
```

---

## SEO DEFAULTS (Apply to Every Page)

```
Title tag format:     [Primary Keyword] | Epicware
Meta description:     Max 155 chars. Lead with the problem, end with the outcome.
H1:                   One per page. Must contain the primary keyword.
Canonical:            Self-referencing canonical on every page.
OG tags:              og:title, og:description, og:image (1200x630), og:url — every page.
Schema:               Organization (homepage) · Service (service pages) · Article (blog) · FAQPage (where applicable)
robots.txt:           Allow all. Block /assets/, /api/
sitemap.xml:          Auto-generated by Next.js. Submit to GSC on launch.
Image alt text:       Descriptive, keyword-aware. No empty alts on content images.
Internal links:       Minimum 2 internal links per page. Use descriptive anchor text, not "click here".
```

---

*Last updated: June 2026 | Owner: Vignesh Wadarajan, Epicware Pte. Ltd.*
