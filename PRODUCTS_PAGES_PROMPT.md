# EPICWARE — PRODUCTS PAGES PROMPT
> **For Claude Code:** Read `SITE_ARCHITECTURE.md`, `HOMEPAGE_COPY.md`, and `SERVICES_PAGES_PROMPT.md` first.
> This prompt governs `/products` hub and all 4 product pages.
> Products = named SaaS modules. Services = category wrappers. These are different things.

---

## THE DISTINCTION — READ BEFORE BUILDING

| Products | Services |
|---|---|
| Named software modules (EpicMap, EpicReview, EpicEngage, EpicSocial) | Category wrappers (Reputation Management, Local SEO, AI & GEO, Growth Tools) |
| "Here's the tool you get access to" | "Here's the problem we solve" |
| Feature-led — what the software does | Outcome-led — what the SMB gets |
| Lives under `/products/` | Lives under service category URLs |
| Links to relevant service pages | Links to relevant product pages |

**Why both exist:** A prospect searching "local SEO software Singapore" lands on a service page.
A prospect comparing tools ("EpicMap vs BrightLocal") lands on a product page.
They are different intent, different copy, different conversion path — same platform.

---

## PART 1: PRODUCTS HUB PAGE

### URL
```
/products
```

### SEO Meta
```
Title:       Epicware Products — EpicMap, EpicReview, EpicEngage, EpicSocial | Singapore
Meta desc:   Four AI-native tools for Singapore SMBs. Rank higher, earn more reviews,
             remove bad ones, and grow — all from one platform. No agency. No retainer. (155 chars)
H1:          Four Products. One Platform. Built for Singapore SMBs.
```

### Hero Section
```
Background:  Deep navy (#0A1628) with subtle map-grid SVG pattern (matches homepage)
H1:          [as above]
Subheadline: EpicMap tracks your rank. EpicReview manages your reputation.
             EpicEngage keeps customers coming back. EpicSocial keeps you visible.
             All in one dashboard.
Primary CTA: Book a Free Demo  →  /book-demo
Secondary:   Free GBP Audit   →  /audit
Trust bar:   ✓ 500+ Outlets Managed  ✓ Singapore-Built  ✓ AI-Native  ✓ No Agency Retainer
```

### Opening Paragraph
```
Most local SEO tools give you a dashboard full of numbers and leave you to
figure out what to do next. Epicware's four products don't just show you the
problem — they fix it. Each module is built for a specific job, and they all
work together inside one platform. No switching tabs. No agency middleman.
No waiting on a monthly report.
```

### Product Cards (4 cards — one per product)
> **Instruction for Claude Code:** Render as large feature cards, not small tiles.
> Each card: product name (large) + module descriptor (small) + 2-sentence description
> + list of 3-4 features + "Learn More" CTA → product page URL.

---

**Card 1: EpicMap**
```
Name:        EpicMap
Descriptor:  Local Rank Tracking & GBP Optimisation
Description: See exactly where your business ranks on Google Maps across every
             Singapore district — and let EpicMap fix the gaps automatically.
Features:
  • Visual map grid: rank positions across all districts
  • 19-point GBP audit with auto-fix recommendations
  • Competitor rank comparison per keyword
  • Weekly auto-generated GBP posts
URL:         /products/epicmap
```

**Card 2: EpicReview**
```
Name:        EpicReview
Descriptor:  Review Management & Reputation Control
Description: Generate more reviews, respond to every one automatically, and
             remove the fake or unfair ones that are costing you customers.
Features:
  • Automated review request campaigns (WhatsApp + email)
  • AI-generated personalised review responses
  • Real-time review monitoring across all outlets
  • Bad Review Removal ($200/review, pay on success) ⭐
URL:         /products/epicreview
```

**Card 3: EpicEngage**
```
Name:        EpicEngage
Descriptor:  Email Marketing for Local Businesses
Description: Turn one-time customers into regulars with automated email campaigns
             that feel personal — built directly into the same platform you use
             for reviews and rankings.
Features:
  • Drag-and-drop email campaign builder
  • Automated follow-up sequences
  • Audience segmentation by outlet
  • Campaign analytics and open rate tracking
URL:         /products/epicengage
```

**Card 4: EpicSocial**
```
Name:        EpicSocial
Descriptor:  Social Scheduling & GBP Post Management
Description: Schedule social media posts and Google Business Profile updates
             from one dashboard — so your business stays visible without
             you logging into five different apps every week.
Features:
  • Multi-platform social scheduling
  • GBP post scheduling with AI-generated content
  • Content calendar view across all outlets
  • PostForMe: auto-generate posts from your business details
URL:         /products/epicsocial
```

### Final CTA
```
Headline:    Not sure which product you need?
Body:        Book a free demo — we'll show you all four live on your actual
             business profile and tell you which combination fits your goals.
CTA:         Book My Free Demo →  /book-demo
Secondary:   Or start with a free audit → /audit
```

---

## PART 2: INDIVIDUAL PRODUCT PAGES (4 pages)

### Page Structure (apply to all 4 product pages)

```
1. HERO
   Background: Product-specific gradient or contextual image + dark overlay
               EpicMap     → map/location visual
               EpicReview  → reviews/star rating visual
               EpicEngage  → email/inbox visual
               EpicSocial  → social media/content visual
   H1:         [Product Name] — [outcome phrase for Singapore SMBs]
   Subheadline: 1-2 sentences on the core problem this product solves
   CTA Primary: Book a Free Demo  →  /book-demo
   CTA Second:  Free GBP Audit   →  /audit
   Trust bar:   ✓ Singapore-Built  ✓ AI-Native  ✓ No Agency Retainer
                ✓ 500+ Outlets Managed

2. OPENING PARAGRAPH (3-4 sentences)
   - Name the specific problem this product solves
   - Who has this problem (SMB owner, multi-outlet operator, clinic, salon)
   - How the product fixes it and how fast

3. H2: What [Product Name] Does
   150-200 words:
   - Feature walkthrough in plain language
   - What the SMB sees in their dashboard
   - What runs automatically vs what they control
   - Singapore-specific context where natural

4. H2: Key Features
   Render as a clean feature grid (not a bullet list):
   - 4-6 features, each with a short name + 1-sentence description
   - Pull from the feature list in Part 1 cards above

5. H2: How It Connects to the Rest of Epicware
   75-100 words:
   - Explain how this product works with the others
   - EpicMap → links to Local SEO service pages
   - EpicReview → links to Reputation Management + Bad Review Removal
   - EpicEngage → links to Growth Tools category
   - EpicSocial → links to Growth Tools + GBP Post Scheduling

6. H2: Pricing
   50-75 words:
   - Do NOT list specific prices — link to /pricing
   - "Available on Foundation plan and above"
   - EpicReview exception: "Bad Review Removal is $200/review, pay on success only"
   - "No setup fees. Cancel anytime."

7. RELATED SERVICES (cross-link block)
   - Link to the relevant service category page(s)
   - Link to the most relevant core service page
   - Natural sentence format, not a list

8. FINAL CTA
   Headline:  Ready to see [Product Name] on your business?
   Body:      Book a free demo — we'll run [Product Name] live on your
              actual GBP profile. No slides. Just your data.
   CTA:       Book My Free Demo →  /book-demo
   Secondary: Start with a free audit → /audit

9. SCHEMA (JSON-LD on every product page)
   {
     "@context": "https://schema.org",
     "@type": "SoftwareApplication",
     "name": "[Product Name] by Epicware",
     "applicationCategory": "BusinessApplication",
     "operatingSystem": "Web",
     "description": "[1-sentence description]",
     "offers": {
       "@type": "Offer",
       "price": "0",
       "priceCurrency": "SGD",
       "description": "See pricing at epicware.ai/pricing"
     },
     "provider": {
       "@type": "Organization",
       "name": "Epicware Pte. Ltd.",
       "url": "https://epicware.ai"
     },
     "url": "https://epicware.ai/products/[product-slug]"
   }
```

---

## THE 4 PRODUCT PAGES — FULL SPEC

### EpicMap `/products/epicmap`
```
SEO Title:   EpicMap — Local Rank Tracking & GBP Optimisation Singapore | Epicware
Meta desc:   See where you rank on Google Maps across every Singapore district.
             EpicMap tracks your position, audits your GBP, and fixes the gaps.
H1:          EpicMap — See Where You Rank and Fix It Automatically
Subheadline: Most Singapore SMBs don't know they're invisible to customers
             2km away. EpicMap shows you exactly where — and closes the gap.
Cross-links: /local-seo-singapore · /gbp-optimisation-singapore · /local-seo-singapore/local-rank-tracking
```

### EpicReview `/products/epicreview`
```
SEO Title:   EpicReview — Review Management & Bad Review Removal Singapore | Epicware
Meta desc:   Generate more Google reviews, respond automatically, and remove
             fake or unfair ones. EpicReview manages your reputation 24/7.
H1:          EpicReview — More Reviews, Better Responses, Bad Ones Removed
Subheadline: Your Google rating is your most visible trust signal. EpicReview
             automates the good and fights the bad — so you don't have to.
Cross-links: /reputation-management-singapore · /bad-review-removal-singapore · /review-management-singapore
Note:        ⭐ Bad Review Removal ($200/review, pay on success) must be featured
             prominently on this page — it is EpicReview's unique differentiator.
```

### EpicEngage `/products/epicengage`
```
SEO Title:   EpicEngage — Email Marketing for Singapore SMBs | Epicware
Meta desc:   Automated email campaigns that turn one-time customers into regulars.
             EpicEngage is built for Singapore local businesses.
H1:          EpicEngage — Turn One-Time Customers Into Regulars
Subheadline: Getting a new customer costs 5x more than keeping an existing one.
             EpicEngage keeps your best customers coming back automatically.
Cross-links: /growth-tools · /growth-tools/epicengage-email-marketing
```

### EpicSocial `/products/epicsocial`
```
SEO Title:   EpicSocial — Social Scheduling & GBP Post Management Singapore | Epicware
Meta desc:   Schedule social posts and Google Business Profile updates from one
             dashboard. EpicSocial keeps Singapore SMBs visible without the grind.
H1:          EpicSocial — Stay Visible Without Living on Social Media
Subheadline: Posting consistently is what keeps your business visible on Google
             and social media. EpicSocial schedules everything — you just approve it.
Cross-links: /growth-tools · /growth-tools/epicsocial-social-scheduling · /local-seo-singapore/gbp-post-scheduling
```

---

## TECHNICAL REQUIREMENTS

```
Framework:     Next.js 14 App Router — all product pages SSG
Schema:        SoftwareApplication schema on every product page
               (NOT Service schema — these are software products)
Images:        next/image, priority={true} for hero
Canonical:     Self-referencing on every page
OG tags:       og:title · og:description · og:image (1200×630) · og:url
Mobile:        Sticky bottom CTA bar: "Book Free Demo" | "Free Audit"
Cross-links:   Every product page must link to at least 2 service pages
               Every service page must link back to its related product page
```

---

## VERIFICATION CHECKLIST

```
□ /products hub exists and displays all 4 product cards
□ /products/epicmap exists with SoftwareApplication schema
□ /products/epicreview exists — Bad Review Removal featured prominently
□ /products/epicengage exists
□ /products/epicsocial exists
□ Every product page has:
  □ Hero with product-relevant visual (NOT solid colour)
  □ H1 containing product name + outcome phrase
  □ Key Features section (grid format)
  □ Cross-links to relevant service pages
  □ SoftwareApplication schema JSON-LD
  □ Book Demo + Free Audit CTAs
  □ Sticky mobile CTA bar
□ Nav "Products" dropdown shows all 4 modules — separate from "Services" dropdown
□ No product page lists specific prices — all link to /pricing
□ EpicReview exception: states $200/review for Bad Review Removal
□ /products/epicreview cross-links to /bad-review-removal-singapore
□ /products/epicmap cross-links to /local-seo-singapore and /gbp-optimisation-singapore
```

---

## PAGE COUNT THIS PROMPT COVERS

| Type | Count |
|---|---|
| Products hub | 1 |
| Individual product pages | 4 |
| **Total this prompt** | **5** |

---

*Last updated: June 2026 | Epicware Website Rebuild*
*Prerequisite files: `SITE_ARCHITECTURE.md` · `HOMEPAGE_COPY.md` · `SERVICES_PAGES_PROMPT.md`*
