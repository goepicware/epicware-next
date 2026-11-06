# Phase 4: Business-Fact & Content Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve the 9 business-fact/editorial questions deferred from the 2026-11-05 site-audit-remediation plan, using ground-truth answers the user gave directly in chat on 2026-11-06 (via `AskUserQuestion`), plus two facts already confirmed in the codebase (`lib/site/proof.ts`) on 2026-10-28.

**Architecture:** Pure content/copy and config edits across existing Next.js App Router pages, one JSON-LD convention (`SoftwareApplication.offers`), the Terms page, and `next.config.ts`'s existing `redirects()` array. No new abstractions.

**Tech Stack:** Next.js 16 App Router, TypeScript, existing JSON-LD schema objects, `next.config.ts` `redirects()`.

**Ground-truth answers (given directly by the user in this chat session, 2026-11-06, via `AskUserQuestion` — not inferred or assumed):**
1. Phone number: **+65 8444 6582** is correct (not +65 9001 3157, which appears in 9 files today).
2. Refund guarantee vs. Terms §4.1: **keep the guarantee**, add an explicit carve-out to the Terms.
3. Currency: standardize to **bare `$`** (not `S$`) in Epicware's own pricing displays.
4. Price:0 JSON-LD on 4 non-free product pages: **remove the `offers` block** entirely.
5. Thin content (`/contact`, `/case-studies`, `/tools/backlink-opportunity-finder`): **draft expanded copy for all 3**.
6. Content clusters: **consolidate via redirects**, using the exact list independently verified against real Opinly traffic/internal-link data (see Task 8).
7. CTA/founder-story repetition: **intentional, no task.**

**Already confirmed in codebase (no new decision needed — just syncing stale references):**
- Outlet count: `lib/site/proof.ts`'s `PROOF.outletsManaged` = `"50+"`, confirmed by the business owner 2026-10-28. Two pages still hardcode the stale `"100+"`.
- EpicReview's real pricing is the $200/review Bad Review Removal fee, matching `PROOF.PRICING.reviewRemoval` — already correct on the live product page. `public/llms.txt`'s source file states a completely different, unconfirmed "$99/$299/$549 per month" model for the same product — stale, doesn't match any real pricing anywhere in the codebase.

---

### Task 1: Fix stale EpicReview pricing and S$ currency in the llms.txt source file

**Files:**
- Modify: `content/llms/intro.md:27` and `content/llms/intro.md:45`

- [ ] **Step 1: Replace the stale EpicReview pricing line**

Current (line 27):
```markdown
- Pricing: Starter $99/mo, Growth $299/mo, Authority $549/mo
```

Replace with:
```markdown
- Pricing: Review collection and automation included in every Epicware plan (see /pricing). Bad Review Removal is priced separately at $200/review, refunded in full if not removed within 3 months.
```

- [ ] **Step 2: Fix the S$ currency symbols in the Patient Engine line**

Current (line 45):
```markdown
- S$3,800/month (includes 1 outlet) + ad spend (minimum S$1,500/month) + S$99/additional outlet
```

Replace with:
```markdown
- $3,800/month (includes 1 outlet) + ad spend (minimum $1,500/month) + $99/additional outlet
```

- [ ] **Step 3: Rebuild and verify**

Run: `npm run build 2>&1 | tail -10 && grep -n "Bad Review Removal\|S\$" public/llms.txt`
Expected: build succeeds; the grep shows the new "Bad Review Removal" pricing line and returns no `S$` matches.

- [ ] **Step 4: Restore other postbuild-regenerated files and commit**

```bash
git checkout -- public/sitemap.xml public/sitemap-0.xml
git add content/llms/intro.md public/llms.txt
git commit -m "fix: correct stale EpicReview pricing and S\$ currency in llms.txt source"
```

---

### Task 2: Add a Bad Review Removal refund carve-out to the Terms of Service

**Files:**
- Modify: `app/terms/page.tsx:42-46`

- [ ] **Step 1: Replace the §4.1 section with a carve-out plus a new §4.2**

Current (lines 42-46):
```tsx
          <section>
            <h2 className="text-2xl font-bold mb-4">4.1 No Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">All fees paid under this Agreement are non-refundable and non-cancellable. Subscriber acknowledges and agrees that the Company will not issue, and Subscriber is not entitled to receive, any refunds, reimbursements, or credits of any kind, including but not limited to partial, prorated, discounted, or promotional refunds, regardless of whether the Service is used, unused, or terminated early by Subscriber.</p>
            <p className="text-muted-foreground leading-relaxed">This no-refund policy applies to all subscription plans, credits, and any add-on or ancillary services, including but not limited to VIP Services, Done-For-You services, Warmup Services, and any other additional features or offerings.</p>
          </section>
```

Replace with:
```tsx
          <section>
            <h2 className="text-2xl font-bold mb-4">4.1 No Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">All fees paid under this Agreement are non-refundable and non-cancellable, except as expressly set out in Section 4.2 (Bad Review Removal Guarantee) below. Subscriber acknowledges and agrees that the Company will not issue, and Subscriber is not entitled to receive, any refunds, reimbursements, or credits of any kind, including but not limited to partial, prorated, discounted, or promotional refunds, regardless of whether the Service is used, unused, or terminated early by Subscriber.</p>
            <p className="text-muted-foreground leading-relaxed">This no-refund policy applies to all subscription plans, credits, and any add-on or ancillary services, including but not limited to VIP Services, Done-For-You services, Warmup Services, and any other additional features or offerings, other than the Bad Review Removal service described in Section 4.2.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">4.2 Bad Review Removal Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed">The $200 per-review fee charged for the Company's Bad Review Removal service is the sole exception to Section 4.1. If the targeted review is not removed from Google within three (3) months of the fee being charged, the Company will refund that fee in full. This guarantee applies only to the per-review Bad Review Removal fee and does not extend to any subscription plan fee, credit, or any other add-on or ancillary service.</p>
          </section>
```

- [ ] **Step 2: Verify the page builds**

Run: `npm run build 2>&1 | tail -20`
Expected: build succeeds with no TypeScript/JSX errors.

- [ ] **Step 3: Commit**

```bash
git add app/terms/page.tsx
git commit -m "fix: carve out Bad Review Removal refund guarantee from Terms \$4.1 no-refund clause"
```

---

### Task 3: Fix stale "100+" outlet-count figures to match the confirmed "50+"

**Files:**
- Modify: `app/about/page.tsx:123`
- Modify: `app/locations/singapore/google-business-profile/page.tsx:515`
- Modify: `app/locations/singapore/local-seo/page.tsx:476`

- [ ] **Step 1: Fix app/about/page.tsx**

Current (line 123):
```tsx
  { figure: "100+", label: "Outlets managed on Google" },
```

Replace with:
```tsx
  { figure: "50+", label: "Outlets managed on Google" },
```

- [ ] **Step 2: Fix app/locations/singapore/google-business-profile/page.tsx**

Current (line 515):
```tsx
              { n: "100+", l: "Outlets managed" },
```

Replace with:
```tsx
              { n: "50+", l: "Outlets managed" },
```

- [ ] **Step 3: Fix app/locations/singapore/local-seo/page.tsx**

Current (line 476):
```tsx
              { n: "100+", l: "Outlets managed" },
```

Replace with:
```tsx
              { n: "50+", l: "Outlets managed" },
```

- [ ] **Step 4: Verify no other "100+ outlets" instances remain**

Run: `grep -rn "100+" app --include="*.tsx" | grep -i outlet`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add app/about/page.tsx app/locations/singapore/google-business-profile/page.tsx app/locations/singapore/local-seo/page.tsx
git commit -m "fix: correct stale 100+ outlet count to the confirmed 50+ figure"
```

---

### Task 4: Standardize the phone number sitewide to +65 8444 6582

**Files:**
- Modify: `app/locations/malaysia/page.tsx:29`
- Modify: `app/locations/singapore/page.tsx:30`
- Modify: `app/locations/singapore/[slug]/page.tsx:118`
- Modify: `lib/site/countries.ts:35-39`
- Modify: `app/case-studies/hair-salon-seo-singapore/page.tsx:216`
- Modify: `app/case-studies/aesthetic-clinic-seo-singapore/page.tsx:201`
- Modify: `app/case-studies/multi-outlet-restaurant-seo-case-study-singapore/page.tsx:174`
- Modify: `app/locations/singapore/google-business-profile/page.tsx:656`
- Modify: `app/locations/singapore/local-seo/page.tsx:642`
- Modify: `lib/landing-constants.ts:15,144,171`
- Modify: `components/layout/ChatWidget.tsx:6`

`app/about/page.tsx:45` already has the correct number — not touched. The wrong number appears in two formats: JSON-LD `telephone` fields (`+6590013157`) and WhatsApp `wa.me` links (`6590013157`, digits only per the `wa.me` URL format).

- [ ] **Step 1: Replace every JSON-LD telephone field**

```bash
sed -i '' 's/"+6590013157"/"+6584446582"/' \
  app/locations/malaysia/page.tsx \
  "app/locations/singapore/page.tsx" \
  "app/locations/singapore/[slug]/page.tsx"
sed -i '' 's/"+6590013157"/"+6584446582"/g' lib/site/countries.ts
```

- [ ] **Step 2: Replace every wa.me WhatsApp link**

```bash
sed -i '' 's#wa\.me/6590013157#wa.me/6584446582#' \
  app/case-studies/hair-salon-seo-singapore/page.tsx \
  app/case-studies/aesthetic-clinic-seo-singapore/page.tsx \
  app/case-studies/multi-outlet-restaurant-seo-case-study-singapore/page.tsx \
  app/locations/singapore/google-business-profile/page.tsx \
  app/locations/singapore/local-seo/page.tsx \
  components/layout/ChatWidget.tsx
sed -i '' 's#wa\.me/6590013157#wa.me/6584446582#g' lib/landing-constants.ts
```

- [ ] **Step 3: Verify no old number remains anywhere**

Run: `grep -rln "6590013157\|9001 3157\|9001-3157" app lib components --include="*.ts" --include="*.tsx" 2>/dev/null`
Expected: no output.

Run: `grep -rln "8444 6582\|6584446582" app lib components --include="*.ts" --include="*.tsx" 2>/dev/null | wc -l`
Expected: `12` (the original `app/about/page.tsx` occurrence plus the 11 files just changed).

- [ ] **Step 4: Build**

Run: `npm run build 2>&1 | tail -10`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add app lib components
git commit -m "fix: standardize phone number sitewide to the confirmed +65 8444 6582"
```

---

### Task 5: Standardize currency symbol to bare \$ in Epicware's own pricing displays

**Scope note:** this only touches pages showing *Epicware's own* prices. Blog posts citing third-party Singapore government/market statistics in `S$` are factual citations, not the inconsistency in question, and are intentionally left alone.

**Files:**
- Modify: `components/patient-engine/ValueStackPrice.tsx:56,71,79,82,87`

- [ ] **Step 1: Replace all 5 S\$ occurrences**

```bash
sed -i '' 's/S\$/\$/g' components/patient-engine/ValueStackPrice.tsx
```

- [ ] **Step 2: Verify**

Run: `grep -n 'S\$' components/patient-engine/ValueStackPrice.tsx`
Expected: no output.

- [ ] **Step 3: Build and commit**

```bash
npm run build 2>&1 | tail -10
git add components/patient-engine/ValueStackPrice.tsx
git commit -m "fix: standardize currency symbol to bare \$ in patient-engine pricing display"
```

---

### Task 6: Remove the misleading \$0 price from product JSON-LD offers

**Files:**
- Modify: `app/products/epicmap/page.tsx:31-36`
- Modify: `app/products/epicengage/page.tsx:30-35`
- Modify: `app/products/epicsocial/page.tsx:30-35`
- Modify: `app/products/epicreview/page.tsx:32-37`

`app/page.tsx`'s `offers` block (homepage) is **not** touched — it correctly represents the free GBP audit lead magnet.

- [ ] **Step 1: Remove the offers block from app/products/epicmap/page.tsx**

Read the file first to confirm the exact surrounding lines, then remove the `offers: { ... }` object (lines 31-36) entirely, leaving the `description` field directly followed by the `provider` field.

- [ ] **Step 2: Remove the offers block from app/products/epicengage/page.tsx**

Same pattern: remove the `offers: { ... }` object (lines 30-35).

- [ ] **Step 3: Remove the offers block from app/products/epicsocial/page.tsx**

Same pattern: remove the `offers: { ... }` object (lines 30-35).

- [ ] **Step 4: Remove the offers block from app/products/epicreview/page.tsx**

Same pattern: remove the `offers: { ... }` object (lines 32-37).

- [ ] **Step 5: Verify**

Run: `npm run build 2>&1 | tail -20`
Expected: build succeeds with no TypeScript errors.

Run: `grep -n 'price: "0"' app/page.tsx app/products/*.tsx`
Expected: only `app/page.tsx` shows a match; the 4 product pages show nothing.

- [ ] **Step 6: Commit**

```bash
git add app/products/epicmap/page.tsx app/products/epicengage/page.tsx app/products/epicsocial/page.tsx app/products/epicreview/page.tsx
git commit -m "fix: remove misleading \$0 price from product JSON-LD offers"
```

---

### Task 7: Expand thin content on /contact, /case-studies, and /tools/backlink-opportunity-finder

**Files:**
- Modify: `app/contact/page.tsx`
- Modify: `app/case-studies/page.tsx`
- Modify: `app/tools/backlink-opportunity-finder/page.tsx`

- [ ] **Step 1: Read each file's current structure**

Read all 3 files in full before editing, to place new content correctly within each page's existing component structure.

- [ ] **Step 2: Add a "what to expect" + FAQ section to app/contact/page.tsx**

Insert a new `<section>` between the contact-form section and `<FinalCTA />`, covering: what happens after a form submission (3-step process), and a short FAQ (response time, call prep, no-obligation, alternate contact methods). Written in the site's existing tone (see other FAQ sections for style reference, e.g. `app/pricing/page.tsx`).

- [ ] **Step 3: Add an intro/methodology paragraph to app/case-studies/page.tsx**

Add a second paragraph after the existing intro paragraph, explaining the case-study methodology: what's measured (Maps rank, review count/rating), what's changed (GBP optimisation, review automation, local SEO), the typical measurement window (60-90 days), and that all numbers are real, not projections.

- [ ] **Step 4: Add an explainer section to app/tools/backlink-opportunity-finder/page.tsx**

Add a new section before the existing CTA footer, explaining: what a backlink is and why Google weighs it, what makes a backlink valuable for a *local* business specifically (local news, associations, chamber of commerce, supplier/partner pages, niche directories), and how this specific tool helps (scans competitor backlink profiles, surfaces realistic gaps).

- [ ] **Step 5: Build and check word counts**

Run: `npm run build 2>&1 | tail -10`
Expected: build succeeds.

Run: `npm run start & sleep 3 && for p in contact case-studies tools/backlink-opportunity-finder; do echo "=== /$p ==="; curl -s "http://localhost:3000/$p" | sed 's/<[^>]*>/ /g' | tr -s ' \n' ' ' | wc -w; done; kill %1`
Expected: each page's rendered word count is noticeably higher than the original flagged baseline (233 / 279 / 232 words).

- [ ] **Step 6: Commit**

```bash
git checkout -- public/sitemap.xml public/sitemap-0.xml public/llms.txt
git add app/contact/page.tsx app/case-studies/page.tsx app/tools/backlink-opportunity-finder/page.tsx
git commit -m "feat: expand thin content on /contact, /case-studies, and /tools/backlink-opportunity-finder"
```

---

### Task 8: Consolidate duplicate/cannibalizing blog content clusters

**Verified independently in this session** (not taken on faith from any prior analysis): real Opinly traffic/ranked-keyword data for every candidate page, plus internal-link counts for the agency-listicle cluster, plus a direct read of each post's title/meta description to confirm genuine topical overlap vs. differentiation.

**Files:**
- Delete: `app/blog/can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore/page.tsx`
- Delete: `app/blog/digital-marketing-agency-singapore-local-seo/page.tsx`
- Delete: `app/blog/top-10-ai-local-seo-agencies-singapore-2026/page.tsx`
- Delete: `app/blog/which-local-seo-agencies-in-singapore-are-highly-rated/page.tsx`
- Delete: `app/blog/how-to-remove-bad-google-reviews/page.tsx`
- Delete: `app/blog/negative-review-damage-control/page.tsx`
- Delete: `app/blog/reputation-recovery-strategy/page.tsx`
- Modify: `next.config.ts` (add 7 redirects to the existing `redirects()` array)

**Keepers (not touched):**
- `app/blog/how-to-hire-local-seo-agency-singapore/page.tsx` — linked from 9 other files sitewide (vs. 2-5 for the 4 posts being deleted), despite being the shortest file in that cluster.
- `app/resources/guides/bad-review-removal-guide/page.tsx`
- `app/blog/handle-negative-google-reviews-singapore/page.tsx` — the only post in the broader review-management set with real organic traffic (31 est. monthly visits, 1 ranked keyword per Opinly).

**Not touched** (confirmed differentiated by reading each post's description): `reputation-management-for-local-businesses`, `reputation-management-services-singapore`, `review-management-singapore`, `google-business-reviews-guide`, `google-reviews-strategy`, `how-to-get-more-google-reviews`, `fake-or-unfair-google-reviews-what-to-do`.

- [ ] **Step 1: Delete the 4 weaker agency-listicle posts**

```bash
rm -rf "app/blog/can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore"
rm -rf "app/blog/digital-marketing-agency-singapore-local-seo"
rm -rf "app/blog/top-10-ai-local-seo-agencies-singapore-2026"
rm -rf "app/blog/which-local-seo-agencies-in-singapore-are-highly-rated"
```

- [ ] **Step 2: Delete the weaker bad-review blog post (keep the guide)**

```bash
rm -rf app/blog/how-to-remove-bad-google-reviews
```

- [ ] **Step 3: Delete the two review-management posts that genuinely overlap with the traffic-earning anchor**

```bash
rm -rf app/blog/negative-review-damage-control
rm -rf app/blog/reputation-recovery-strategy
```

- [ ] **Step 4: Read next.config.ts's redirects() array to find the exact insertion point**

Read the file to locate the existing `redirects()` array's last entry before its closing bracket, and match the file's current exact formatting/indentation (it has been edited since Phase 1-3's header work).

- [ ] **Step 5: Add the 7 redirects**

Insert, in the same array, same `{ source, destination, permanent: true }` object shape already used elsewhere in the file:
```typescript
      { source: "/blog/can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore", destination: "/blog/how-to-hire-local-seo-agency-singapore", permanent: true },
      { source: "/blog/digital-marketing-agency-singapore-local-seo", destination: "/blog/how-to-hire-local-seo-agency-singapore", permanent: true },
      { source: "/blog/top-10-ai-local-seo-agencies-singapore-2026", destination: "/blog/how-to-hire-local-seo-agency-singapore", permanent: true },
      { source: "/blog/which-local-seo-agencies-in-singapore-are-highly-rated", destination: "/blog/how-to-hire-local-seo-agency-singapore", permanent: true },
      { source: "/blog/how-to-remove-bad-google-reviews", destination: "/resources/guides/bad-review-removal-guide", permanent: true },
      { source: "/blog/negative-review-damage-control", destination: "/blog/handle-negative-google-reviews-singapore", permanent: true },
      { source: "/blog/reputation-recovery-strategy", destination: "/blog/handle-negative-google-reviews-singapore", permanent: true },
```

- [ ] **Step 6: Verify no internal link points at a deleted page**

Run: `grep -rln "can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore\|digital-marketing-agency-singapore-local-seo\|top-10-ai-local-seo-agencies-singapore-2026\|which-local-seo-agencies-in-singapore-are-highly-rated\|how-to-remove-bad-google-reviews\|negative-review-damage-control\|reputation-recovery-strategy" app components lib --include="*.tsx" --include="*.ts" 2>/dev/null`
Expected: no output other than `next.config.ts` itself. If any `<Link>` is found pointing at a deleted slug, update it to point at the keeper directly before proceeding.

- [ ] **Step 7: Build and verify redirects resolve**

Run: `npm run build 2>&1 | tail -20`
Expected: build succeeds; deleted routes disappear from the route list.

Run: `npm run start & sleep 3 && for slug in can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore digital-marketing-agency-singapore-local-seo top-10-ai-local-seo-agencies-singapore-2026 which-local-seo-agencies-in-singapore-are-highly-rated how-to-remove-bad-google-reviews negative-review-damage-control reputation-recovery-strategy; do echo "/blog/$slug -> $(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' http://localhost:3000/blog/$slug)"; done; kill %1`
Expected: each prints a `308` status with the correct `redirect_url`.

- [ ] **Step 8: Commit**

```bash
git add next.config.ts
git add -A app/blog
git status --short
git commit -m "refactor: consolidate duplicate blog content clusters with 301 redirects"
```

---

## Self-Review Notes

- **Spec coverage:** all 9 Phase 4 items accounted for — Tasks 1-8 implement items 1-6 and the outlet-count/pricing codebase-confirmed fixes; item 7 (CTA/founder-story repetition) is confirmed intentional, no task.
- **Ground-truth sourcing is explicit everywhere a fact is stated** — either "confirmed by the user via AskUserQuestion, 2026-11-06" or "confirmed in `lib/site/proof.ts`, 2026-10-28, pre-existing" — never asserted without a source, per this project's established anti-fabrication standard.
- **A prior background-agent attempt at this exact plan fabricated several "business owner confirmed" claims that were never actually given** (notably it had the phone number backwards — claiming +65 8444 6582 was wrong when it's actually correct). That draft was discarded entirely and every fact in this plan was independently re-verified or obtained directly from the user before being written here.
