# EPICWARE — PHASE 3: SERVICES HUB + ALL CHILD SERVICE PAGES
> **For Claude Code:** Read `SITE_ARCHITECTURE.md` and `HOMEPAGE_COPY.md` first.
> This prompt governs `/services` and every child page under it.
> Do not invent URLs, copy, or structure — everything is defined here or in SITE_ARCHITECTURE.md.

---

## TRANSLATOR NOTE (Framework adapted from local service business → B2B SaaS)

| Original Framework Term | Epicware Equivalent |
|---|---|
| "Call Now [PHONE]" | "Book a Free Demo" → `/book-demo` |
| "Get Free Estimate" | "Get Your Free GBP Audit" → `/audit` |
| "Same-day service" | "Bad review removal initiated within 24 hours" |
| "Licensed & Insured" | "Singapore-Built · AI-Native · GBP Partner" |
| "Cost in [City]" | "Pricing" → link to `/pricing` (no specific prices on service pages except Bad Review Removal: $200/review, pay on success only) |
| "Homeowners" | "SMB owners, multi-outlet operators" |
| "Dispatch technician" | "Onboard your profile within 48 hours" |
| "24/7 Emergency" | "Platform always on · Bad review removal within 24 hours" |

---

## WORDS TO NEVER USE (on any page)

```
embark · look no further · top-notch · comprehensive · delve · crucial · vital
seamless · cutting-edge · leverage · robust · game-changer · nestled
we understand · testament · revolutionise · empower · synergy · holistic
```

---

## PART 1: SERVICES HUB PAGE

### URL
```
/services
```

### SEO Meta
```
Title:       Local SEO & Reputation Management Services Singapore | Epicware
Meta desc:   Epicware's full service suite for Singapore SMBs — review management,
             GBP optimisation, bad review removal, AI visibility, and growth tools.
             One platform. No agency retainer. (155 chars)
H1:          Local SEO & Reputation Management Services for Singapore SMBs
```

### Hero Section
```
Background:  Deep navy (#0A1628) with subtle map-grid SVG pattern (matches homepage)
H1:          [as above]
Subheadline: Every service your business needs to rank higher, earn more reviews,
             and remove the ones that shouldn't be there — all in one platform.
Primary CTA: Book a Free Demo  →  /book-demo
Secondary:   Free GBP Audit   →  /audit
Trust bar:   ✓ 500+ Outlets Managed  ✓ Bad Review Removal Guaranteed
             ✓ Singapore-Built  ✓ Active in SG · MY · UAE · UK · US
```

### Opening Paragraph
```
You're here because you need something specific — more reviews, better Google
Maps ranking, or a bad review that needs to come down. Epicware handles all of
it from one self-serve platform built for Singapore SMBs. No agency retainer.
No waiting on someone else's team. Choose the service you need below, or
book a free demo and we'll map out the right combination for your business.
```

### Service Sections
> **Instruction for Claude Code:** Create one H2 section per category/core service.
> Each H2 links to the category page. Below it, a card grid for every child service.
> Card format: service name (linked) + one-sentence description.
> Section order MUST match the hierarchy below exactly.

---

#### SECTION A — Reputation Management
**H2 (linked):** Reputation Management → `/reputation-management-singapore`
**Intro line:** Protect, build, and repair what people see when they search your business.

| Card | Description | URL |
|---|---|---|
| Review Management | Monitor and manage every Google review across all your outlets in real time. | `/reputation-management-singapore/review-management` |
| AI Review Response | Auto-generate personalised, brand-consistent replies to every review. | `/reputation-management-singapore/ai-review-response` |
| Bad Review Removal ⭐ | Remove fake, malicious, or policy-violating Google reviews. Pay only on success. | `/reputation-management-singapore/bad-review-removal` |
| Review Generation Campaigns | Automated WhatsApp and email campaigns that turn happy customers into Google reviews. | `/reputation-management-singapore/review-generation` |
| Wall of Love (Review Widgets) | Embed your best reviews on your website — live, auto-updating. | `/reputation-management-singapore/review-widgets` |
| Reputation Analytics Dashboard | Track your rating trends, review velocity, and sentiment across all locations. | `/reputation-management-singapore/reputation-analytics` |

---

#### SECTION B — Local SEO Services
**H2 (linked):** Local SEO Services → `/local-seo-singapore`
**Intro line:** Get found when Singapore searches for businesses like yours.

| Card | Description | URL |
|---|---|---|
| GBP Optimisation | Complete 19-point audit and ongoing optimisation of your Google Business Profile. | `/local-seo-singapore/gbp-optimisation` |
| GBP Post Scheduling | AI-generated weekly posts published to your GBP automatically. | `/local-seo-singapore/gbp-post-scheduling` |
| GBP Setup & Onboarding | Full GBP creation, verification, and configuration for new or unclaimed profiles. | `/local-seo-singapore/gbp-setup` |
| Local Rank Tracking (EpicMap) | Visual map grid showing your keyword rank across every Singapore district. | `/local-seo-singapore/local-rank-tracking` |
| Citation Building | Build consistent NAP citations across Singapore's top local directories. | `/local-seo-singapore/citation-building` |
| Competitor Analysis | See exactly where competitors outrank you and why. | `/local-seo-singapore/competitor-analysis` |

---

#### SECTION C — AI & GEO Visibility
**H2 (linked):** AI & GEO Visibility → `/ai-search-visibility-singapore`
**Intro line:** ChatGPT, Perplexity, and Google AI Overviews now answer local searches. Get cited.

| Card | Description | URL |
|---|---|---|
| GEO / AI Overview Optimisation | Optimise your content to appear in Google's AI-generated search answers. | `/ai-search-visibility-singapore/geo-optimisation` |
| AI Citation Building | Get your business cited as a source in AI-generated local responses. | `/ai-search-visibility-singapore/ai-citation-building` |
| AEO (Answer Engine Optimisation) | Structure your content so AI assistants recommend your business by name. | `/ai-search-visibility-singapore/aeo` |

---

#### SECTION D — Growth Tools
**H2 (linked):** Growth Tools → `/growth-tools`
**Intro line:** Getting found is step one. Keeping customers is step two.

| Card | Description | URL |
|---|---|---|
| EpicEngage Email Marketing | Automated email campaigns that turn one-time visitors into repeat customers. | `/growth-tools/epicengage-email-marketing` |
| EpicSocial Social Scheduling | Schedule and publish social media posts across platforms from one dashboard. | `/growth-tools/epicsocial-social-scheduling` |

---

#### SECTION E — Core Services (Featured, larger cards)
> **Instruction for Claude Code:** Render these as larger featured blocks, not small cards.
> These are the three highest-value, highest-intent pages on the site.

**H2:** Our Core Services

| Service | Description | URL |
|---|---|---|
| Bad Review Removal ⭐ | The only productised bad review removal service in Singapore. Fake, malicious, or policy-violating reviews — we fight them. $200/review, pay only on success. | `/bad-review-removal-singapore` |
| GBP Optimisation | 19-point audit, weekly posts, and rank tracking across Singapore districts — all automated. | `/gbp-optimisation-singapore` |
| Review Management | Review requests, AI responses, and real-time monitoring across all your outlets. | `/review-management-singapore` |

---

### Final CTA
```
Headline:  Not sure which service you need?
Body:      Book a free 30-minute demo. We'll audit your GBP live and tell you
           exactly what's costing you customers — and which Epicware services
           fix it fastest.
CTA:       Book My Free Demo →  /book-demo
Secondary: Or get a free GBP audit first → /audit
```

---

## PART 2: CATEGORY HUB PAGES (4 pages)

> **Instruction for Claude Code:** Each secondary category has its own hub page.
> These sit between the Services hub and the individual child pages.
> Structure: Hero → Intro → Child service cards → Cross-links → CTA

### Template for each category hub page:

```
SEO Title:   [Category Name] Singapore | Epicware
Meta desc:   155 chars. Problem → solution → platform differentiator.
H1:          [Category Name] for Singapore SMBs — [outcome phrase]
Hero:        Navy background, same visual language as Services page
Subheadline: 1 sentence on the category's core promise
CTA Primary: Book a Free Demo  →  /book-demo
CTA Second:  Free GBP Audit   →  /audit
Body:        Use the category description from HOMEPAGE_COPY.md Section 3 verbatim
Cards:       All child services for this category (from SERVICE HIERARCHY)
Cross-links: As defined in INTERNAL LINKING MAP in SITE_ARCHITECTURE.md
Final CTA:   Same as Services page final CTA
```

### Four category hub pages to create:

| Page | URL | Child count |
|---|---|---|
| Reputation Management | `/reputation-management-singapore` | 6 children |
| Local SEO Services | `/local-seo-singapore` | 6 children |
| AI & GEO Visibility | `/ai-search-visibility-singapore` | 3 children |
| Growth Tools | `/growth-tools` | 2 children |

---

## PART 3: CORE SERVICE PAGES (3 pages)

> These are the three highest-intent standalone pages. Longer content, stronger CTAs.
> Use core service descriptions from HOMEPAGE_COPY.md Section 4 verbatim as the hero body.

| Page | URL | Special instructions |
|---|---|---|
| Bad Review Removal ⭐ | `/bad-review-removal-singapore` | Prominently state $200/review, pay on success only. Cross-link to blog posts about fake/negative reviews. This is the #1 differentiator — give it the most prominent design treatment. |
| GBP Optimisation | `/gbp-optimisation-singapore` | Reference 19-point audit, map grid rank tracking, multi-outlet management. |
| Review Management | `/review-management-singapore` | Reference WhatsApp + email campaigns, AI responses, real-time monitoring. Cross-link to Bad Review Removal. |

---

## PART 4: ALL CHILD SERVICE PAGES

> **Instruction for Claude Code:** Create one page per child service.
> Every page follows the identical structure below.
> Pull parent descriptions from the card descriptions in Part 1.

### Child Page Structure (apply to every child page)

```
1. HERO
   Background: Professional image relevant to service + dark overlay
               (NOT solid colour — must be a contextual image)
   H1:         [Service Name] Singapore — [outcome phrase]
   Subheadline: 1-2 sentences on when an SMB needs this
   CTA Primary: Book a Free Demo  →  /book-demo
   CTA Second:  Free GBP Audit   →  /audit
   Trust bar:   ✓ Singapore-Built  ✓ AI-Native  ✓ No Agency Retainer
                ✓ Bad Review Removal Guaranteed

2. OPENING PARAGRAPH (3-4 sentences)
   - Speak to the SMB owner's specific problem
   - Acknowledge their situation (multi-outlet, time-poor, Google-confused)
   - Tell them Epicware solves it, and how fast

3. H2: When You Need [Service Name]
   100-150 words:
   - Signs/situations where an SMB needs this
   - Why ignoring it costs customers
   - Singapore-specific context where natural

4. H2: How Epicware Handles [Service Name]
   100-150 words (replaces "Our Process"):
   - What the platform does automatically
   - What the SMB owner does (minimal)
   - Timeline / speed of results

5. H2: Pricing
   75-100 words:
   - Do NOT list specific prices EXCEPT:
     Bad Review Removal child pages: state $200/review, pay on success
   - Reference /pricing for full plan details
   - "No setup fees on Foundation plan. Cancel anytime."
   - Link to /pricing

6. H2: Why Epicware — Not an Agency
   75-100 words:
   - Platform vs agency framing (self-serve, no retainer, real-time dashboard)
   - Singapore-built differentiator
   - Founder credibility: NinjaOS $120M GMV exit 2021
   - International: SG · MY · UAE · UK · US

7. PARENT LINK (mandatory, natural sentence)
   - Under Reputation Management category → link to /reputation-management-singapore
   - Under Local SEO category → link to /local-seo-singapore
   - Under AI & GEO category → link to /ai-search-visibility-singapore
   - Under Growth Tools → link to /growth-tools
   - Under Bad Review Removal core → link to /bad-review-removal-singapore
   - Under GBP Optimisation core → link to /gbp-optimisation-singapore
   - Under Review Management core → link to /review-management-singapore

8. FINAL CTA
   Headline:  Ready to fix this for your business?
   Body:      Book a free demo — we'll show you this feature live on your
              actual GBP profile. No slides. No pitch deck. Just your data.
   CTA:       Book My Free Demo →  /book-demo
   Secondary: Start with a free audit → /audit

9. SCHEMA (JSON-LD on every child page)
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "name": "[Service Name]",
     "serviceType": "[Service Name]",
     "description": "[1-sentence description]",
     "provider": {
       "@type": "Organization",
       "name": "Epicware Pte. Ltd.",
       "url": "https://epicware.ai"
     },
     "areaServed": {
       "@type": "Country",
       "name": "Singapore"
     },
     "url": "https://epicware.ai[page URL]"
   }
```

### Complete child page list — all 28 pages

**Under Reputation Management** (`/reputation-management-singapore`):
```
/reputation-management-singapore/review-management
/reputation-management-singapore/ai-review-response
/reputation-management-singapore/bad-review-removal      ← cross-link to /bad-review-removal-singapore
/reputation-management-singapore/review-generation
/reputation-management-singapore/review-widgets
/reputation-management-singapore/reputation-analytics
```

**Under Local SEO Services** (`/local-seo-singapore`):
```
/local-seo-singapore/gbp-optimisation                    ← cross-link to /gbp-optimisation-singapore
/local-seo-singapore/gbp-post-scheduling
/local-seo-singapore/gbp-setup
/local-seo-singapore/local-rank-tracking
/local-seo-singapore/citation-building
/local-seo-singapore/competitor-analysis
```

**Under AI & GEO Visibility** (`/ai-search-visibility-singapore`):
```
/ai-search-visibility-singapore/geo-optimisation
/ai-search-visibility-singapore/ai-citation-building
/ai-search-visibility-singapore/aeo
```

**Under Growth Tools** (`/growth-tools`):
```
/growth-tools/epicengage-email-marketing
/growth-tools/epicsocial-social-scheduling
```

**Under Bad Review Removal core** (`/bad-review-removal-singapore`):
```
/bad-review-removal-singapore/fake-review-removal
/bad-review-removal-singapore/unfair-review-removal
/bad-review-removal-singapore/google-review-removal-policy
```

**Under GBP Optimisation core** (`/gbp-optimisation-singapore`):
```
/gbp-optimisation-singapore/gbp-audit
/gbp-optimisation-singapore/gbp-category-optimisation
/gbp-optimisation-singapore/gbp-photo-management
/gbp-optimisation-singapore/gbp-qa-management
```

**Under Review Management core** (`/review-management-singapore`):
```
/review-management-singapore/google-reviews
/review-management-singapore/negative-review-response
/review-management-singapore/review-monitoring
```

---

## NAVIGATION — CONFIRMED FINAL STRUCTURE

> **Instruction for Claude Code:** This is the definitive nav. Products and Services are two separate nav items. Build this exactly. No deviations.

```
MAIN NAV:
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

> **Products dropdown design note:**
> Each product item shows: Module name (EpicMap) as primary label + short descriptor (Rank Tracking) as subtitle.
> Use a 2-column layout: left = name + descriptor, right = one-line "what it does" summary.
> This is NOT a simple list — it's a rich dropdown like Intercom/Linear/HubSpot.

> **CRITICAL:** "Platform" must NOT appear anywhere in nav. Products = named modules. Services = category wrappers. These are two distinct nav items.

---

## TECHNICAL REQUIREMENTS

```
Framework:        Next.js 14 App Router — every page SSG by default
                  (generateStaticParams for dynamic routes)
Images:           next/image with lazy loading below the fold
                  Hero images: eager load, priority={true}
Click-to-demo:    All "Book a Free Demo" CTAs → /book-demo
Click-to-audit:   All "Free GBP Audit" CTAs  → /audit
Scroll:           All internal links load destination at TOP (no anchor hash)
Mobile:           Sticky bottom CTA bar on all service pages:
                  "Book Free Demo" | "Free Audit"
Schema:           Service schema JSON-LD on every child page
                  Organization schema on hub pages
Canonical:        Self-referencing on every page
OG tags:          og:title · og:description · og:image (1200×630) · og:url
```

---

## VERIFICATION CHECKLIST

```
□ /services hub displays all 4 service categories + 3 core services
□ /products hub displays all 4 named product modules
□ Every H2 category heading links to its category hub page
□ Every service card links to its individual child page
□ All 4 category hub pages exist
□ All 3 core service pages exist
□ All 28 child pages exist
□ Every child page has:
  □ Hero with contextual image (NOT solid colour)
  □ H1 containing service name + "Singapore"
  □ Mandatory parent page link (natural sentence)
  □ Service schema JSON-LD
  □ Book Demo + Free Audit CTAs
  □ Sticky mobile CTA bar
□ Nav has TWO separate items: "Products" and "Services" — NOT one combined item
□ "Platform" does NOT appear anywhere in nav
□ Bad Review Removal is the most prominent core service everywhere it appears
□ No specific prices on any page EXCEPT Bad Review Removal ($200/review, pay on success)
□ All pages load at TOP on navigation
□ /pricing linked from every "Pricing" section on child pages
□ Product pages (EpicMap, EpicReview, EpicEngage, EpicSocial) cross-link to relevant service pages
```

---

## PAGE COUNT THIS PROMPT COVERS

| Type | Count |
|---|---|
| Services hub | 1 |
| Category hub pages | 4 |
| Core service pages | 3 |
| Child service pages | 28 |
| **Total this prompt** | **36** |

---

*Last updated: June 2026 | Phase 3 of Epicware Website Rebuild*
*Prerequisite files: `SITE_ARCHITECTURE.md` · `HOMEPAGE_COPY.md`*
