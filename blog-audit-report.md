# Blog Audit Report — Epicware

**Audit Date:** 2026-06-12
**Total Posts:** 20
**Location:** `/app/resources/blog/[slug]/page.tsx`
**Average Score:** 64/100

---

## Health Overview

| Metric | Count |
|--------|-------|
| Posts Scoring 90+ (Excellent) | 0 |
| Posts Scoring 70–89 (Good) | 0 |
| Posts Scoring 50–69 (Needs Work) | 20 |
| Posts Scoring <50 (Poor) | 0 |
| Orphan Pages (0 inbound blog links) | 5 |
| Dead-End Pages (0 outbound links) | 0 |
| Cannibalization Clusters | 5 |
| Stale Content (90+ days) | 0 |
| Posts with TL;DR | 0/20 |
| Posts with External Links | 0/20 |
| Posts with FAQ Schema | 0/20 |
| Posts with `dateModified` in Schema | 0/20 |
| Posts with OG Image Declared | 0/20 |

---

## Per-Post Scores

| Post | Total/100 | Content/25 | SEO/20 | E-E-A-T/20 | Technical/15 | AI/20 | Top Issue |
|------|-----------|------------|--------|------------|--------------|-------|-----------|
| google-maps-ranking-factors | 66 | 20 | 13 | 11 | 11 | 11 | No TL;DR; cites "Google's local search documentation" without hyperlink |
| google-review-request-templates | 66 | 20 | 14 | 10 | 11 | 11 | Conversion stats (15–30% WhatsApp) unattributed; no TL;DR |
| how-many-google-reviews-do-you-need-to-compete-locally | 68 | 20 | 14 | 13 | 11 | 10 | Benchmark table sourced to "Epicware data" only; no TL;DR |
| how-to-remove-bad-google-reviews | 67 | 20 | 14 | 12 | 11 | 10 | Longest post with best depth; no TL;DR; no external link to Google support |
| google-reviews-strategy | 67 | 20 | 14 | 12 | 11 | 10 | Benchmark numbers (15 reviews Month 1) are Epicware assertions — no source |
| fake-or-unfair-google-reviews-what-to-do | 65 | 19 | 14 | 12 | 11 | 9 | $200 pricing mentioned without link; no TL;DR; no FAQ schema |
| google-review-policy-explained | 65 | 19 | 13 | 12 | 11 | 10 | Quotes Google policy without linking to source; Article schema only |
| do-keywords-in-reviews-help-local-seo | 64 | 19 | 13 | 10 | 11 | 11 | No citations supporting ranking claims; "modest effect" framing vague |
| how-to-get-more-google-reviews | 65 | 19 | 13 | 11 | 11 | 11 | Conversion rate stats appear in 4+ posts with no source |
| review-gating-explained | 64 | 19 | 13 | 11 | 11 | 10 | States gating banned "since 2018" — no citation; no TL;DR |
| review-velocity-vs-total-review-count | 65 | 19 | 13 | 11 | 11 | 11 | Restaurant A/B example hypothetical; no external data backing velocity claims |
| should-you-respond-to-every-google-review | 64 | 19 | 13 | 10 | 11 | 11 | "Google can detect templated responses" claim uncited; no TL;DR |
| reviews-vs-rating-what-matters-more | 64 | 19 | 13 | 10 | 11 | 11 | "Studies of consumer behaviour" referenced but never cited with links |
| can-you-incentivize-google-reviews | 63 | 18 | 13 | 11 | 11 | 10 | No link to actual Google policy URL; stat "3–5x more reviews" unsourced |
| how-fast-should-you-respond-to-google-reviews | 63 | 18 | 13 | 10 | 11 | 11 | "Industry standard" claim unattributed; Singapore section is opinion-only |
| how-to-create-google-review-link-qr-code | 63 | 18 | 13 | 9 | 11 | 12 | UI steps will break when Google updates; QR tool recommendation vague |
| review-management-singapore | 63 | 18 | 13 | 11 | 11 | 10 | Most generic post; "5–10 hours/week" claim unsourced |
| best-time-to-ask-for-a-google-review | 62 | 18 | 13 | 10 | 11 | 10 | "60% drop after 24h" stat unsourced; no TL;DR; OG image missing |
| customer-feedback-system-private-vs-public-reviews | 61 | 17 | 12 | 10 | 11 | 11 | Only 2 related posts; no external sources; no Singapore-specific data |
| do-photo-reviews-matter-for-local-seo | 60 | 17 | 12 | 9 | 11 | 11 | No CTR data; weakest Singapore context; no external source citations |

---

## Prioritized Action Queue

| Priority | Post | Score | Top Issue | Recommended Action |
|----------|------|-------|-----------|-------------------|
| 1 | do-photo-reviews-matter-for-local-seo | 60 | No quantitative CTR data; weakest SG context; E-E-A-T 9/20 | Add CTR statistic, SG industry example, external link to GBP help centre, TL;DR box |
| 2 | customer-feedback-system-private-vs-public-reviews | 61 | 0 inbound blog links; no external citations; meta description too short (107 chars) | Add 2+ more related post links; add comparison table; add SG-specific example; expand meta desc |
| 3 | best-time-to-ask-for-a-google-review | 62 | "60% drop" stat unsourced; title 80 chars (too long); no TL;DR | Add TL;DR box; shorten title to ~48 chars; attribute or reframe stat; add FAQ schema |
| 4 | how-fast-should-you-respond-to-google-reviews | 63 | "Industry standard" unattributed; Singapore section opinion-only; only 2 related posts | Link to Google GBP help page for 24-hour claim; add local data point; expand related posts |
| 5 | how-to-create-google-review-link-qr-code | 63 | UI steps will break; vague tool recommendations; E-E-A-T 9/20 | Add UI-change disclaimer; name 2–3 specific tools with links; add TL;DR; label stats as Epicware data |
| 6 | review-management-singapore | 63 | Most generic post; "5–10 hrs/week" unsourced; canonical as orphan from other service pages | Add Singapore-specific data; source the time claim; link from `/review-management-singapore` service page |
| 7 | can-you-incentivize-google-reviews | 63 | No link to Google policy URL; "3–5x" stat unsourced | Link to google.com/business policy page; attribute stat or find source |
| 8 | google-review-policy-explained | 65 | Quotes policy without linking to it; no FAQ schema despite clear Q&A structure | Add hyperlink to Google's content policy; add FAQPage schema for the "does X qualify?" questions |
| 9 | fake-or-unfair-google-reviews-what-to-do | 65 | Near-duplicate of how-to-remove (cannibalization); no FAQ schema | Either redirect to pillar OR differentiate by making this the Singapore-specific case study post |
| 10 | google-reviews-strategy | 67 | 0 inbound blog links (orphan); benchmark numbers unattributed | Add inbound links from how-to-get-more-google-reviews, review-velocity, best-time posts |

---

## Topic Cannibalization

| Cluster | Posts Involved | Risk | Recommendation |
|---------|---------------|------|----------------|
| Getting More Reviews | how-to-get-more-google-reviews, google-reviews-strategy, best-time-to-ask, google-review-request-templates | High | Declare pillar hierarchy; strip duplicated content from supporting posts; `how-to-get-more` is the pillar |
| Removing Bad Reviews | how-to-remove-bad-google-reviews, fake-or-unfair-google-reviews-what-to-do, google-review-policy-explained | High | **Redirect** `fake-or-unfair` → `how-to-remove` (add SG-specific intro paragraph to pillar first); differentiate `policy-explained` as pure-education, strip removal steps |
| Review Response Speed vs Quality | should-you-respond-to-every-google-review, how-fast-should-you-respond-to-google-reviews | Medium | Split: `should-you-respond` owns yes/no + star-tier response quality; `how-fast` owns timing + system-building. Cross-link instead of repeating |
| Policy, Incentives, Gating | google-review-policy-explained, can-you-incentivize-google-reviews, review-gating-explained, customer-feedback-system | Medium | Strip repeated rationale from policy overview; link out to specialist posts; `customer-feedback-system` already well-differentiated |
| Count vs Velocity vs Rating | review-velocity-vs-total-review-count, reviews-vs-rating-what-matters-more, how-many-google-reviews-to-compete | Low-Medium | Add bidirectional internal cross-links; remove "the other metric also matters" paragraphs that duplicate adjacent posts |

---

## Orphan Pages (No Inbound Links from Other Blog Posts)

| Page | Inbound Blog Links | Inbound Service Page Links | Recommended Link Sources |
|------|-------------------|--------------------------|--------------------------|
| google-reviews-strategy | 0 | 0 | `how-to-get-more-google-reviews`, `review-velocity-vs-total-review-count`, `best-time-to-ask-for-a-google-review` |
| reviews-vs-rating-what-matters-more | 0 | 0 | `google-maps-ranking-factors`, `how-many-google-reviews-do-you-need-to-compete-locally` |
| do-photo-reviews-matter-for-local-seo | 0 | 0 | `google-maps-ranking-factors` (photo section), `do-keywords-in-reviews-help-local-seo` |
| customer-feedback-system-private-vs-public-reviews | 0 | 0 | `can-you-incentivize-google-reviews`, `review-gating-explained` |
| how-to-create-google-review-link-qr-code | 0 | 0 | `how-to-get-more-google-reviews`, `google-review-request-templates` |

**Note:** No service pages link to any blog post. The blog index (`/blog`) is the only entry point for all 20 posts. This is a significant crawl authority gap — high-intent service pages pass zero authority into the blog cluster.

---

## Schema Status

**All 20 posts: Partial Schema.** Zero posts qualify for Good or Missing.

**Universal missing fields across all 20 posts:**

| Field | Status | Impact |
|-------|--------|--------|
| `@type: "BlogPosting"` | All use `"Article"` — should be `"BlogPosting"` | Medium |
| `dateModified` | Missing on all 20 | High — required for Article rich results |
| `image` | Missing on all 20 | High — required for Article rich results in SERPs |
| `publisher.logo` | Missing on all 20 | High — required for Article rich results |
| `FAQPage` schema | Missing on all 20 | Medium — 3+ posts have qualifying Q&A structures |
| `mainEntityOfPage` | Missing on all 20 | Low |
| Per-post `og:image` | Missing on all 20 | Medium — social shares use site default |

**URL inconsistency:** Schema `url` field uses `https://epicware.ai/` (no www) while canonical uses `https://www.epicware.ai/`. These must match — update schema url to include www.

**Posts that qualify for FAQPage schema today** (clear Q&A structures in body):
- `review-gating-explained`
- `can-you-incentivize-google-reviews`
- `should-you-respond-to-every-google-review`
- `google-review-policy-explained`
- `do-keywords-in-reviews-help-local-seo` ("The Short Answer" H2)

---

## Internal Link Health

**Most-linked blog posts (inbound from other posts):**

| Post | Inbound Blog Links |
|------|--------------------|
| how-to-get-more-google-reviews | 5 |
| google-review-policy-explained | 5 |
| review-velocity-vs-total-review-count | 5 |
| google-maps-ranking-factors | 4 |
| fake-or-unfair-google-reviews-what-to-do | 4 |

**Most-linked service pages from blog posts:**

| Service Page | Inbound Links from Blog |
|---|---|
| /reputation-management-singapore/review-generation | 7 |
| /bad-review-removal-singapore | 3 |
| /reputation-management-singapore/ai-review-response | 2 |
| /use-cases/improve-google-rating | 2 |

**Service pages with zero links to blog posts (should be fixed):**

| Service Page | Blog Posts It Should Link To |
|---|---|
| `/bad-review-removal-singapore` | `how-to-remove-bad-google-reviews`, `fake-or-unfair-google-reviews-what-to-do`, `google-review-policy-explained` |
| `/reputation-management-singapore/review-generation` | `how-to-get-more-google-reviews`, `google-review-request-templates`, `best-time-to-ask-for-a-google-review` |
| `/local-seo-singapore` | `google-maps-ranking-factors`, `review-velocity-vs-total-review-count`, `do-keywords-in-reviews-help-local-seo` |
| `/gbp-optimisation-singapore` | `google-maps-ranking-factors`, `do-photo-reviews-matter-for-local-seo` |

---

## Freshness Check

All 20 posts published 2026-06-01. Days stale: **11**. No freshness action needed today.

**Set calendar reminder for December 2026** to refresh `how-many-google-reviews-do-you-need-to-compete-locally` — it cites "as of mid-2026" competitive benchmarks that will age.

**Structural fix needed for future freshness:** Add `"dateModified"` to the schema object in `BlogArticle.tsx` as a prop so each post can be updated without touching the component. Currently no mechanism exists to signal freshness to Google.

---

## AI Citation Readiness

| Score | Posts |
|-------|-------|
| High | do-keywords-in-reviews-help-local-seo, google-maps-ranking-factors, how-many-google-reviews-to-compete, how-to-remove-bad-google-reviews, review-management-singapore, review-velocity-vs-total-review-count, reviews-vs-rating-what-matters-more |
| Medium-High | can-you-incentivize-google-reviews, do-photo-reviews-matter-for-local-seo, how-fast-should-you-respond-to-google-reviews, how-to-get-more-google-reviews, review-gating-explained, google-reviews-strategy |
| Medium | best-time-to-ask-for-a-google-review, customer-feedback-system, fake-or-unfair-google-reviews, google-review-policy-explained, google-review-request-templates, how-to-create-google-review-link-qr-code, should-you-respond-to-every-google-review |

---

## Cross-Cutting Issues Affecting All 20 Posts

These fixes apply to every post and deliver the highest ROI at scale:

### 1. Add TL;DR Boxes (Highest Impact — AI Readiness + User Experience)
Zero posts have a TL;DR / summary block. A 3–4 sentence TL;DR immediately after the intro creates the ideal passage for Google AI Overviews and Perplexity extraction. This is the single highest-ROI content addition for the entire blog. Format:
```
**TL;DR:** [3 bullet points or 3 sentences answering the core question directly]
```

### 2. Add External Links (Highest Impact — E-E-A-T)
Zero posts link to a single external source. Every post references Google's policies, ranking algorithm, or consumer behaviour research — none link out. At minimum, add:
- The relevant Google Business Profile help page (support.google.com/business)
- One Tier 2–3 industry source per post (BrightLocal, Podium, Statista, etc.)

### 3. Fix Schema (BlogPosting + dateModified + image + publisher.logo)
Most efficiently applied in `components/blog/BlogArticle.tsx` by:
- Adding `dateModified` as a prop (default: same as datePublished, updated on each revision)
- Adding `image` as a prop (1200×630 OG image URL)
- Adding `publisher.logo` statically to the schema object (one-line addition)
- Changing `@type: "Article"` → `"BlogPosting"` globally
- Fixing the www inconsistency in the `url` field

### 4. Label Statistics as Epicware Data
Conversion stats (WhatsApp 15–30%, email 3–5%, QR 2–3%) appear across multiple posts without source attribution. These appear to be Epicware's own platform data. Label them as **"Epicware platform data, 2026"** to make them citable and defensible. They read as universal industry statistics without attribution, which damages credibility.

### 5. Add a Named Author / Author Bio
All 20 posts use `@type: "Organization"` for author. Google's E-E-A-T guidance emphasises human authorship. Add a named author (e.g., "Epicware Editorial Team") with a linked `/about` author section.

### 6. Add Per-Post OG Images
No post declares `openGraph.images` in metadata. All social shares use the site-level default. Add per-post OG images via `metadata.openGraph.images` in each `page.tsx`.

### 7. Link Service Pages to Blog Posts
No service page links to any blog post. Service pages receive the highest-intent organic traffic; a contextual link to the relevant how-to post reduces bounce rate and passes authority to the blog cluster. Start with:
- `/bad-review-removal-singapore` → removal posts
- `/reputation-management-singapore/review-generation` → review generation posts

---

## Quick Wins (Can Be Done This Week)

| Fix | Effort | Impact | Files |
|-----|--------|--------|-------|
| Add `dateModified`, `image`, `publisher.logo` to BlogArticle.tsx schema | 30 min | High | `components/blog/BlogArticle.tsx` |
| Fix www inconsistency in schema `url` field | 30 min | Medium | `components/blog/BlogArticle.tsx` or all 20 page.tsx |
| Add inbound links to 5 orphan posts | 1–2 hrs | High | 5 source files (see orphan table) |
| Add FAQ schema to 3 posts | 1–2 hrs | Medium | review-gating-explained, can-you-incentivize, should-you-respond |
| Add `resources/blog` links from bad-review-removal + review-generation service pages | 30 min | High | 2 service page files |
| Change `@type: "Article"` to `"BlogPosting"` globally | 5 min | Medium | `components/blog/BlogArticle.tsx` |

---

*Report generated by /blog-audit on 2026-06-12. Run `/blog analyze <file>` on the lowest-scoring post first. Run `/blog geo <file>` for AI citation optimization on key posts.*
