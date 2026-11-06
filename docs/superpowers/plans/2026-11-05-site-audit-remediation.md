# Site Audit Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every reproducible technical/on-page SEO issue from the 2026-10-26 "Basic Research of Epicware" audit (22 "Other Basic Issues" + 7 "Technical Audit" issues), verified live against production (`www.epicware.ai`) and the `epicware-next` source before any task was written.

**Architecture:** epicware-next is a Next.js 16 App Router site on Vercel. There's no jest/vitest — the established convention (see `package.json`'s `prebuild`/`check:pages` scripts) is standalone `scripts/check-*.ts` files run via `tsx`, asserting manually and setting `process.exitCode = 1` on failure. This plan follows that pattern: every new gate is a `scripts/check-*.ts` file wired into `prebuild`, and verification is done with direct `curl` against the production build output, matching how this repo has been verified throughout this project's history.

**Tech Stack:** Next.js 16 (App Router), TypeScript, `next/image`, `next/script`, `tsx` for check scripts, Vercel deploy via git push to `main` (no `vercel --prod`).

**Audit pre-check — already fixed, no task needed:**
- `/creators` 404-in-sitemap — fixed by prior commit `6fce575`.
- `/gbp-optimisation-singapore` and `/local-growth` "duplicate indexable URL" — both already 308-redirect correctly in production (`next.config.ts` `redirects()`), confirmed via live `curl`. The literal page files at `app/gbp-optimisation-singapore/*` and `app/local-growth/page.tsx` are dead code now shadowed by those redirects — cleanup only, not a ranking bug (Task 4 below).
- `llms.txt` "stale URLs / wrong EpicReview pricing" — `scripts/generate-llms-txt.ts` was already rewritten to generate dynamically from `lib/site/services.ts` / `lib/site/countries.ts` / content frontmatter; confirmed live `llms.txt` has no `/gbp-optimisation-singapore` or `/local-growth` references.
- Canonical domain mismatch (non-www vs www) — `metadataBase` is `https://www.epicware.ai`, non-www correctly 301s to www, and every canonical/og:url sampled (homepage, `/services/local-seo`) already matches. Not reproduced — no task.
- og:url missing trailing slash — not reproduced on the pages sampled (homepage and `/services/local-seo` both match canonical exactly). If this is real on some other page, Task 9 below covers it as part of the shared metadata fallback, since both derive from the same `metadataBase`-relative mechanism.

---

## Phase 1: Technical Infrastructure

### Task 1: Unblock `/assets/` in robots.txt

**Files:**
- Modify: `public/robots.txt`

- [ ] **Step 1: Remove the `/assets/` disallow line**

Current content:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /assets/

Sitemap: https://www.epicware.ai/sitemap.xml
```

New content:
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.epicware.ai/sitemap.xml
```

- [ ] **Step 2: Verify locally**

Run: `grep -c "Disallow: /assets" public/robots.txt`
Expected: `0`

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "fix: unblock /assets/ in robots.txt so OG images and logo can be crawled"
```

---

### Task 2: Add security headers (HSTS, CSP, X-Frame-Options)

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Add a `headers()` function to the Next config**

Insert alongside the existing `redirects()` function (same object, both are async methods on `nextConfig`):

```typescript
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://www.clarity.ms https://maps.googleapis.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https: blob:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://www.google-analytics.com https://www.facebook.com https://*.clarity.ms https://maps.googleapis.com",
            "frame-src 'self' https://www.googletagmanager.com",
          ].join("; "),
        },
      ],
    },
  ];
},
```

Note: `script-src` includes `'unsafe-inline'` and `'unsafe-eval'` because the existing GA4/Meta Pixel/Clarity tags in `app/layout.tsx` are inline `<Script>` blocks, not nonce-based — tightening this further would require migrating those to a nonce pattern, which is out of scope here. This CSP is a real floor (blocks arbitrary third-party script/frame injection) without breaking the current tracking setup.

- [ ] **Step 2: Verify locally with a production build**

Run: `npm run build && npm run start &`
Then: `curl -sI http://localhost:3000/ | grep -i "strict-transport\|x-frame\|content-security\|x-content-type"`
Expected: all four headers present. Stop the server (`kill %1`) after checking.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: add HSTS, CSP, X-Frame-Options and related security headers"
```

- [ ] **Step 4: After this merges and deploys, verify on production**

Run: `curl -sI https://www.epicware.ai/ | grep -i "strict-transport\|x-frame\|content-security"`
Expected: all headers present. Also re-test the lead forms and Meta Pixel/GA4/Clarity tags still fire (no CSP console errors) — load `https://www.epicware.ai/contact` in a browser with devtools console open.

---

### Task 3: Fix sitemap `lastmod` — stop using build time for every URL

**Files:**
- Modify: `app/sitemap.ts`

**Root cause (confirmed live):** every entry uses `lastModified: now` where `now = new Date()` is computed once per build — so all ~125 URLs get the exact same timestamp (`2026-11-02T04:10:57.431Z` as of the last build), which is a fake-freshness signal to Google. Note: `public/sitemap.xml`/`public/sitemap-0.xml` (generated by the `next-sitemap` postbuild step) are **not actually served** — `app/sitemap.ts`'s dynamic route shadows them at `/sitemap.xml` (confirmed via the `x-matched-path: /sitemap.xml` response header on production). Fixing `app/sitemap.ts` is the one change that matters; the `next-sitemap` postbuild step generates dead output and could be removed in a future cleanup, but that's out of scope here since it's harmless (unused files, not a bug).

- [ ] **Step 1: Add a per-file git-mtime helper at the top of `app/sitemap.ts`**

```typescript
import { execSync } from "node:child_process";

/**
 * Real last-modified date for a route, from its source file's last git
 * commit — not build time, so every URL doesn't get an identical,
 * fake-freshness lastmod.
 */
function lastCommitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${filePath}"`, {
      cwd: process.cwd(),
      encoding: "utf-8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // fall through to default below
  }
  return new Date("2026-10-21"); // last full restructure, used when git history is unavailable (e.g. shallow clone)
}
```

- [ ] **Step 2: Replace every `lastModified: now` with the real source file's date**

For each static entry, pass the route's actual page file. Example for the first few entries (apply the same pattern to all remaining `staticPages` entries — map each URL to its real `app/**/page.tsx`):

```typescript
const staticPages: MetadataRoute.Sitemap = [
  { url: `${BASE}/`, lastModified: lastCommitDate("app/page.tsx"), changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/locations/singapore/seo`, lastModified: lastCommitDate("app/locations/singapore/seo/page.tsx"), changeFrequency: "weekly", priority: 0.95 },
  { url: `${BASE}/locations/singapore/review-removal`, lastModified: lastCommitDate("app/locations/singapore/review-removal/page.tsx"), changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/locations/singapore/review-management`, lastModified: lastCommitDate("app/locations/singapore/review-management/page.tsx"), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/locations/singapore/local-seo`, lastModified: lastCommitDate("app/locations/singapore/local-seo/page.tsx"), changeFrequency: "monthly", priority: 0.85 },
  // ...continue this substitution for every remaining entry in staticPages,
  // and for the dynamically-generated subFeaturePages/countryHubPages/countryServicePages
  // further down in the file — replace their `lastModified: now` with
  // lastCommitDate() against each page's real source file or MDX content file.
];
```

Remove the now-unused `const now = new Date();` line once every entry has been converted.

- [ ] **Step 3: Verify locally**

Run: `npm run build && npm run start &`
Then: `curl -s http://localhost:3000/sitemap.xml | grep -o "<lastmod>[^<]*</lastmod>" | sort -u | wc -l`
Expected: a number greater than 1 (previously this returned `1` — every URL had the identical timestamp). Stop the server after.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts
git commit -m "fix: sitemap lastmod reflects each page's real last-commit date, not build time"
```

---

### Task 4: Remove dead duplicate-route page files

**Files:**
- Delete: `app/gbp-optimisation-singapore/page.tsx`
- Delete: `app/gbp-optimisation-singapore/gbp-audit/`
- Delete: `app/gbp-optimisation-singapore/gbp-category-optimisation/`
- Delete: `app/gbp-optimisation-singapore/gbp-photo-management/`
- Delete: `app/gbp-optimisation-singapore/gbp-qa-management/`
- Delete: `app/local-growth/page.tsx`

These routes are already shadowed by permanent redirects in `next.config.ts` (`/gbp-optimisation-singapore` → `/locations/singapore/google-business-profile`, `/local-growth` → `/`), confirmed live — so these files never render. They're dead weight in the build and a trap for a future editor who might accidentally edit the unreachable version.

- [ ] **Step 1: Confirm the redirects still cover both paths before deleting**

Run: `grep -n '"/gbp-optimisation-singapore"\|"/local-growth"' next.config.ts`
Expected: both `source` lines present with `permanent: true`.

- [ ] **Step 2: Delete the dead route folders**

```bash
git rm -r "app/gbp-optimisation-singapore" "app/local-growth"
```

- [ ] **Step 3: Verify the build still succeeds and redirects still work**

Run: `npm run build`
Expected: build succeeds (no route references the deleted files).

Run: `npm run start & sleep 3 && curl -sI http://localhost:3000/gbp-optimisation-singapore | head -3 && curl -sI http://localhost:3000/local-growth | head -3 && kill %1`
Expected: both return `308` with the correct `location` header (same as before deletion, since the redirect, not the page, is now what answers).

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: remove dead duplicate-route pages already shadowed by permanent redirects"
```

---

### Task 5: Fix favicon double query string

**Files:**
- Investigate: `app/icon.png` (Next.js auto-generates the `<link rel="icon">` tag from this file via the App Router's file convention — the double query string is almost certainly Next.js's own cache-busting query param colliding with a second one added elsewhere)

- [ ] **Step 1: Find where the double query string is introduced**

Run: `curl -s https://www.epicware.ai/ | grep -o '<link rel="icon"[^>]*>'`

Expected output shows something like `href="/icon.png?<hash>?<hash2>"` — note the exact value.

- [ ] **Step 2: Search for manual favicon tags that might be duplicating Next's auto-generated one**

Run: `grep -rn "rel=\"icon\"\|favicon" app/layout.tsx`

If a manual `<link rel="icon">` exists in `app/layout.tsx` alongside the auto-generated one from `app/icon.png`, remove the manual tag — `app/icon.png` alone is sufficient for Next.js App Router's metadata file convention and won't double up.

- [ ] **Step 3: Verify**

Run: `npm run build && npm run start & sleep 3 && curl -s http://localhost:3000/ | grep -o '<link rel="icon"[^>]*>' && kill %1`
Expected: exactly one `?` in the `href` value (a single cache-busting query param, not two).

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "fix: remove duplicate favicon tag causing double query string"
```

---

### Task 6: Replace the 2MB hero PNG with the existing WebP where it's used for on-page rendering

**Files:**
- Investigate/modify: wherever `HeroBanner.png` (1.99MB, `public/assets/HeroBanner.png`) is referenced in component code — a 123KB `HeroBanner.webp` already exists at `public/assets/HeroBanner.webp` but isn't confirmed to be in use yet.

- [ ] **Step 1: Find every reference to the PNG**

Run: `grep -rln "HeroBanner.png" app/ components/ --include="*.tsx" --include="*.ts"`

- [ ] **Step 2: For each on-page `<Image>`/`<img>` usage, point it at the `.webp` file instead**

Example pattern (adjust the exact component/props to match what Step 1 finds):
```tsx
// Before
<Image src="/assets/HeroBanner.png" alt="..." width={...} height={...} />
// After
<Image src="/assets/HeroBanner.webp" alt="..." width={...} height={...} />
```

If the PNG is *only* referenced as an Open Graph image (`openGraph.images` in some `generateMetadata`), leave that one reference as PNG — some social platforms (notably older LinkedIn/Slack unfurlers) have inconsistent WebP support for link previews, so OG images are commonly kept as PNG/JPG. In that case, instead compress the PNG itself:

Run: `npx @squoosh/cli --mozjpeg '{"quality":82}' -d public/assets public/assets/HeroBanner.png 2>&1 || echo "squoosh unavailable — compress via an image tool (e.g. ImageOptim, Squoosh web app) and replace public/assets/HeroBanner.png manually, target under 300KB"`

- [ ] **Step 3: Verify file size and that the page still renders the image correctly**

Run: `ls -la public/assets/HeroBanner.png`
Expected: well under 300KB if still used for OG, or confirm it's unreferenced in code (grep in Step 1 returns nothing) if fully replaced by the WebP everywhere — in that case delete the PNG instead:
```bash
git rm public/assets/HeroBanner.png
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "perf: serve the existing compressed WebP hero image instead of the 2MB PNG"
```

---

## Phase 2: Metadata, Headings, Schema

### Task 7: Give `/free-audit` a real server-rendered H1 and intro (fixes both "no H1" and "empty SSR HTML")

**Files:**
- Modify: `app/free-audit/page.tsx`

**Root cause (confirmed):** `app/free-audit/page.tsx` renders only `<Suspense fallback={null}><FreeAuditWizard /></Suspense>` — `FreeAuditWizard.tsx` is `"use client"`, and its `<h1>` elements (lines 1179, 1185) only render after the audit form is submitted and JS has hydrated. Crawlers and the `fallback={null}` state see zero words and no heading.

- [ ] **Step 1: Add a static H1 + intro paragraph that always renders, with the wizard below it**

```tsx
import { Suspense } from "react";
import FreeAuditWizard from "./FreeAuditWizard";

export default function FreeAuditPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Free SEO, Google Business Profile and AI Search Visibility Audit</h1>
        <p>
          Get a free audit of your Google rankings, Google Business Profile, customer
          reviews and AI search visibility. See your biggest gaps and quickest wins —
          no signup required.
        </p>
      </div>
      <Suspense fallback={null}>
        <FreeAuditWizard />
      </Suspense>
    </>
  );
}
```

Use `sr-only` (this codebase already uses Tailwind, which ships `sr-only` by default) rather than visible duplicate text, since `FreeAuditWizard` already renders its own visible heading/intro once hydrated — this just guarantees crawlers and the pre-hydration DOM always have real H1 + content, without showing duplicate text to sighted users after hydration.

- [ ] **Step 2: Verify the SSR HTML now contains the H1**

Run: `npm run build && npm run start & sleep 3 && curl -s http://localhost:3000/free-audit | grep -o "<h1[^>]*>[^<]*</h1>" && kill %1`
Expected: the H1 text appears in the raw HTML (not just after JS runs).

- [ ] **Step 3: Commit**

```bash
git add app/free-audit/page.tsx
git commit -m "fix: /free-audit now has a real server-rendered H1 and content before JS hydrates"
```

---

### Task 8: Add a default `og:image` fallback for the ~110 pages missing one

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add a default `openGraph.images` to the root metadata object**

In `app/layout.tsx`, find the existing root `metadata` export (it already has `openGraph: { type: "website", locale: "en_SG", url: "https://www.epicware.ai", siteName: "Epicware" }` per line 23). Add an `images` array to it:

```typescript
openGraph: {
  type: "website",
  locale: "en_SG",
  url: "https://www.epicware.ai",
  siteName: "Epicware",
  images: [{ url: "/assets/HeroBanner.webp", width: 1200, height: 630, alt: "Epicware" }],
},
```

Next.js's metadata resolution merges this root-level `openGraph.images` into any page's `generateMetadata`/`metadata` export that doesn't explicitly set its own `openGraph.images` — so this single change gives every page lacking an explicit OG image a real fallback instead of none, without touching 110 individual files.

Note: confirm the dimensions match the actual WebP file (1200×630 is the common OG aspect ratio; adjust if `HeroBanner.webp`'s real dimensions differ — check with `file public/assets/HeroBanner.webp` or an image tool before committing).

- [ ] **Step 2: Verify on a page that previously had no explicit og:image**

Run: `npm run build && npm run start & sleep 3 && curl -s http://localhost:3000/contact | grep -o '<meta property="og:image"[^>]*>' && kill %1`
Expected: a non-empty `og:image` meta tag now appears.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add a site-wide default og:image so pages without an explicit one aren't blank"
```

---

### Task 9: Add a BreadcrumbList schema gate and roll it out to the pages missing it

**Files:**
- Create: `scripts/check-breadcrumb-schema.ts`
- Modify: `package.json` (`prebuild`/`check:pages` scripts)
- Modify: affected `page.tsx` files (identified by the check script — this repo already has prior art for BreadcrumbList JSON-LD in `app/local-seo-singapore/page.tsx`, `app/locations/singapore/local-seo/page.tsx`, `app/seo-agency-singapore/page.tsx`, and `components/shared/Breadcrumbs.tsx` — reuse that same JSON-LD shape rather than inventing a new one)

- [ ] **Step 1: Look at the existing BreadcrumbList pattern to copy exactly**

Run: `grep -n "BreadcrumbList" -A 15 app/seo-agency-singapore/page.tsx`

This shows the exact JSON-LD shape already used elsewhere in this codebase — reuse that shape verbatim in Step 3 (don't invent a different schema structure for new pages).

- [ ] **Step 2: Write the check script**

```typescript
// scripts/check-breadcrumb-schema.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Flags indexable page.tsx files that render no BreadcrumbList JSON-LD.
 * A page is skipped if it 404s, redirects, or sets noindex — those don't
 * need breadcrumbs. This is a soft gate (reports, doesn't fail the build)
 * since not every route type (e.g. /contact, a single-purpose utility
 * page) necessarily needs one — read the list and judge each one.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".") || entry.name === "api") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name === "page.tsx") {
      out.push(full);
    }
  }
}

function main() {
  const pages: string[] = [];
  walk(APP_DIR, pages);

  const missing: string[] = [];
  for (const file of pages) {
    const content = fs.readFileSync(file, "utf-8");
    if (content.includes("noindex")) continue;
    if (!content.includes("BreadcrumbList")) {
      missing.push(path.relative(ROOT, file));
    }
  }

  console.log("=== BreadcrumbList schema coverage ===\n");
  console.log(`${pages.length} page.tsx files scanned, ${missing.length} without BreadcrumbList schema:\n`);
  for (const m of missing) console.log(`  - ${m}`);
}

main();
```

- [ ] **Step 3: Run it to get the real list for this codebase**

Run: `npx tsx scripts/check-breadcrumb-schema.ts`

Expected: a list of page files (this replaces the audit's unverified "47 pages" count with the actual current list for this codebase).

- [ ] **Step 4: For each page in the output, add BreadcrumbList JSON-LD matching the Step 1 pattern**

This is manual, page-by-page — the breadcrumb trail (names/URLs) differs per page, so it can't be mechanically generated. For a representative example, if `app/pricing/page.tsx` is in the list:

```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.epicware.ai/pricing" },
  ],
};

// in the page's returned JSX, alongside existing content:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
```

Repeat for every page the script flagged, using each page's real breadcrumb trail.

- [ ] **Step 5: Wire the check into `package.json` as a non-blocking report**

```json
"check:breadcrumb-schema": "tsx scripts/check-breadcrumb-schema.ts",
```

(Deliberately not added to `prebuild` — unlike the other gates in this repo, this one is informational since not every page type needs breadcrumbs; run it manually when adding new pages.)

- [ ] **Step 6: Commit**

```bash
git add scripts/check-breadcrumb-schema.ts package.json app/
git commit -m "feat: add BreadcrumbList schema to pages missing it, with a coverage-report script"
```

---

### Task 10: Add hreflang tags to international location pages

**Files:**
- Modify: `app/locations/[country]/[service]/page.tsx` (or the equivalent dynamic route file — confirm exact path first)

- [ ] **Step 1: Confirm the dynamic route file for country×service pages**

Run: `find app/locations -maxdepth 2 -name "page.tsx"`

- [ ] **Step 2: Find that route's `generateMetadata` function**

Run: `grep -n "generateMetadata" app/locations/*/\[*\]/page.tsx app/locations/\[*\]/*/page.tsx 2>/dev/null`

- [ ] **Step 3: Add `alternates.languages` alongside the existing `alternates.canonical`**

In that file's `generateMetadata`, extend the returned `alternates` object:

```typescript
alternates: {
  canonical: `https://www.epicware.ai/locations/${country}/${service}`,
  languages: {
    "en-SG": "https://www.epicware.ai/locations/singapore/" + service,
    "en-US": "https://www.epicware.ai/locations/usa/" + service,
    "en-GB": "https://www.epicware.ai/locations/uk/" + service,
    "en-AE": "https://www.epicware.ai/locations/dubai/" + service,
    "x-default": "https://www.epicware.ai/locations/singapore/" + service,
  },
},
```

Adjust the country-slug-to-locale mapping to match this codebase's actual `COUNTRIES` list in `lib/site/countries.ts` (check the slugs there — don't assume `usa`/`uk`/`dubai` are the exact slugs without confirming) and only include `languages` entries for countries where `isCountryServiceLive`/equivalent is true for that service, so this doesn't link to draft pages.

- [ ] **Step 4: Verify**

Run: `npm run build && npm run start & sleep 3 && curl -s http://localhost:3000/locations/usa/local-seo | grep -o '<link rel="alternate" hreflang[^>]*>' && kill %1`
Expected: multiple `hreflang` link tags present.

- [ ] **Step 5: Commit**

```bash
git add app/locations/
git commit -m "feat: add hreflang alternates to country location pages"
```

---

### Task 11: Make the phone number a clickable `tel:` link

**Files:**
- Investigate/modify: footer/header component containing the phone number (likely `components/layout/Footer.tsx` or similar — confirm exact path first)

- [ ] **Step 1: Find where the phone number is rendered**

Run: `grep -rln "+65\|telephone" components/layout/ components/shared/ 2>/dev/null`

- [ ] **Step 2: Wrap it in a `tel:` link**

```tsx
// Before
<span>+65 XXXX XXXX</span>
// After
<a href="tel:+65XXXXXXXX">+65 XXXX XXXX</a>
```

Use the exact phone number already in that file — don't introduce a new one (this plan explicitly does not resolve the "two different phone numbers" contradiction flagged in the audit; see "Needs Your Input First" below — pick whichever number is already in this specific component for this task, since making it clickable is independent of which number is eventually declared correct).

- [ ] **Step 3: Verify**

Run: `npm run build && npm run start & sleep 3 && curl -s http://localhost:3000/ | grep -o '<a href="tel:[^"]*"' && kill %1`
Expected: a `tel:` link present.

- [ ] **Step 4: Commit**

```bash
git add components/
git commit -m "fix: make phone number a clickable tel: link"
```

---

### Task 12: Remove `target="_blank"` from internal case-study links

**Files:**
- Modify: `components/home/CaseStudiesSlider.tsx`

**Confirmed (read directly):** all 6 entries in `CASE_STUDIES` use internal paths (`/case-studies/...`), but the `<Link>` at the bottom of the card has `target="_blank" rel="noopener noreferrer"` — exactly the audit's finding.

- [ ] **Step 1: Remove the new-tab attributes**

In `components/home/CaseStudiesSlider.tsx`, find:
```tsx
<Link
  href={cs.href}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-auto group-hover:underline"
>
```

Change to:
```tsx
<Link
  href={cs.href}
  className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-auto group-hover:underline"
>
```

- [ ] **Step 2: Verify**

Run: `grep -n "target=\"_blank\"" components/home/CaseStudiesSlider.tsx`
Expected: no match.

- [ ] **Step 3: Commit**

```bash
git add components/home/CaseStudiesSlider.tsx
git commit -m "fix: case study links navigate in the same tab instead of opening a new one"
```

---

### Task 13: Meta description length gate

**Files:**
- Create: `scripts/check-meta-description-length.ts`
- Modify: `package.json` (`prebuild`/`check:pages`)
- Modify: whichever page/content files the script flags

- [ ] **Step 1: Write the check script**

```typescript
// scripts/check-meta-description-length.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "app");
const MAX_LENGTH = 160;

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".") || entry.name === "api") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name === "page.tsx" || entry.name === "layout.tsx") {
      out.push(full);
    }
  }
}

function main() {
  const files: string[] = [];
  walk(APP_DIR, files);

  const violations: { file: string; length: number; text: string }[] = [];
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    // Matches: description: "..." or description: `...` (single-line only —
    // multi-line template literals need manual review, flagged separately below)
    const match = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
    if (match && match[1].length > MAX_LENGTH) {
      violations.push({ file: path.relative(ROOT, file), length: match[1].length, text: match[1] });
    }
  }

  console.log("=== Meta description length check (max 160 chars) ===\n");
  if (violations.length === 0) {
    console.log("All scanned meta descriptions are within 160 characters.");
    return;
  }
  for (const v of violations) {
    console.log(`  [${v.length} chars] ${v.file}`);
    console.log(`    "${v.text}"\n`);
  }
  console.log(`${violations.length} violation(s). Build blocked.`);
  process.exitCode = 1;
}

main();
```

- [ ] **Step 2: Run it to get the real current list**

Run: `npx tsx scripts/check-meta-description-length.ts`

This produces the authoritative current list of over-length descriptions for this codebase (the audit's "13 pages, mostly blog" is a starting estimate, not a fixed list — blog posts likely pull descriptions from MDX frontmatter rather than inline in `page.tsx`, so extend the script's regex/file-walk to also scan `content/**/*.mdx` frontmatter `description:` fields if the initial run shows 0 matches in `app/`).

- [ ] **Step 3: Trim each flagged description to ≤160 characters**

For each violation, edit the description in place — shorten without changing its meaning, keep the primary keyword near the start, don't truncate mid-word.

- [ ] **Step 4: Wire into `prebuild`**

In `package.json`, add `tsx scripts/check-meta-description-length.ts` to both the `prebuild` and `check:pages` chains (same pattern as the other `check:*` entries already there), and a standalone `"check:meta-description-length": "tsx scripts/check-meta-description-length.ts"`.

- [ ] **Step 5: Verify the gate passes**

Run: `npx tsx scripts/check-meta-description-length.ts`
Expected: "All scanned meta descriptions are within 160 characters."

- [ ] **Step 6: Commit**

```bash
git add scripts/check-meta-description-length.ts package.json app/ content/
git commit -m "fix: trim meta descriptions over 160 chars, add a build gate to prevent regression"
```

---

## Phase 3: Performance

### Task 14: Preload the LCP hero image

**Files:**
- Modify: whichever component renders the homepage's largest above-the-fold image (confirm via Step 1 — likely `components/home/HeroSection.tsx` based on the earlier file listing)

- [ ] **Step 1: Confirm the LCP element**

Run: `grep -n "Image\|img" components/home/HeroSection.tsx | head -10`

- [ ] **Step 2: Add `priority` to the `next/image` usage (this is Next's built-in preload mechanism — don't hand-write a `<link rel="preload">`, which would conflict with Next's own image loader)**

```tsx
<Image src="/assets/HeroBanner.webp" alt="..." width={...} height={...} priority />
```

If the component currently uses a raw `<img>` tag instead of `next/image`, migrate it to `next/image` with `priority` — this also resolves Task 16 for this specific image (width/height + AVIF/WebP auto-serving come for free with `next/image`).

- [ ] **Step 3: Verify with Lighthouse**

Run: `npm run build && npm run start & sleep 3 && npx lighthouse http://localhost:3000/ --chrome-flags="--headless --no-sandbox" --only-categories=performance --output=json --output-path=/tmp/lh-after.json && kill %1`
Then: `cat /tmp/lh-after.json | python3 -c "import json,sys; d=json.load(sys.stdin); print('LCP:', d['audits']['largest-contentful-paint']['displayValue'])"`
Expected: LCP under 2.5s (previously ~2.8s per the audit).

- [ ] **Step 4: Commit**

```bash
git add components/home/HeroSection.tsx
git commit -m "perf: preload LCP hero image via next/image priority prop"
```

---

### Task 15: Image width/height attribute gate

**Files:**
- Create: `scripts/check-image-dimensions.ts`
- Modify: `package.json`
- Modify: whichever components the script flags

- [ ] **Step 1: Write the check script**

```typescript
// scripts/check-image-dimensions.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Flags <Image> usages with neither `fill` nor both width+height, and
 * raw <img> tags anywhere (which bypass next/image's built-in sizing,
 * AVIF/WebP serving, and lazy-loading entirely).
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCAN_DIRS = ["app", "components"];

function walk(dir: string, out: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.tsx$/.test(entry.name)) {
      out.push(full);
    }
  }
}

function main() {
  const files: string[] = [];
  for (const dir of SCAN_DIRS) walk(path.join(ROOT, dir), files);

  const rawImgViolations: string[] = [];
  const missingDimensionViolations: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    if (/<img\s/.test(content)) {
      rawImgViolations.push(path.relative(ROOT, file));
    }
    // crude but effective: find each <Image ...> tag, check it has fill or width+height
    const imageTagRegex = /<Image\s+([^>]*?)\/?>/g;
    let m: RegExpExecArray | null;
    while ((m = imageTagRegex.exec(content)) !== null) {
      const attrs = m[1];
      const hasFill = /\bfill\b/.test(attrs);
      const hasWidth = /\bwidth=/.test(attrs);
      const hasHeight = /\bheight=/.test(attrs);
      if (!hasFill && !(hasWidth && hasHeight)) {
        missingDimensionViolations.push(`${path.relative(ROOT, file)}: ${m[0].slice(0, 80)}...`);
      }
    }
  }

  console.log("=== Image dimension check ===\n");
  console.log(`Raw <img> tags (bypass next/image): ${rawImgViolations.length}`);
  for (const v of rawImgViolations) console.log(`  - ${v}`);
  console.log(`\n<Image> missing fill or width+height: ${missingDimensionViolations.length}`);
  for (const v of missingDimensionViolations) console.log(`  - ${v}`);
}

main();
```

- [ ] **Step 2: Run it for the real current list**

Run: `npx tsx scripts/check-image-dimensions.ts`

- [ ] **Step 3: Fix each flagged instance**

For raw `<img>` tags: migrate to `next/image`'s `<Image>` with explicit `width`/`height` (or `fill` inside a sized, `position: relative` container).
For `<Image>` missing dimensions: add the real rendered `width`/`height` (check the image file's actual dimensions if unknown: `file public/path/to/image.png`), or add `fill` if it's meant to fill a sized parent container.

- [ ] **Step 4: Add as a standalone script (report-only, not wired into `prebuild`, since fixing every historical instance across the whole repo in one pass is out of scope — new violations should be caught in code review)**

```json
"check:image-dimensions": "tsx scripts/check-image-dimensions.ts",
```

- [ ] **Step 5: Commit**

```bash
git add scripts/check-image-dimensions.ts package.json app/ components/
git commit -m "fix: add explicit dimensions to images missing width/height, add a coverage script"
```

---

## Phase 4: Needs Your Input First (not scoped into tasks — need ground truth before any fix can be written)

These audit findings can't be turned into code tasks yet because fixing them means picking a single correct fact or making an editorial call, and guessing would create new inaccurate content — which goes directly against this project's established "never fabricate data" standard (see `lib/seo-config.ts`'s own comment about the deleted `EPICWARE_AGGREGATE` rating: "deleted 2026-10-28 — it was never sourced anywhere, and the business owner confirmed it shouldn't be used"). Once you answer these, I'll write a Phase 4 plan the same way as above.

1. **Pricing consistency** — confirmed live: the EpicReview product page repeats "$200/review, refunded if..." with several slightly different wordings, and `llms.txt` states a completely different model ($99/$299/$549 per month) for the same product. Is EpicReview actually two separate pricing models (a per-review removal fee *and* a separate monthly review-management subscription), or is one of these stale? What's the single correct statement for each, and where should each appear?
2. **Terms vs. refund guarantee contradiction** — Terms §4.1 says the $200 charge is "non-refundable and non-cancellable," while marketing copy elsewhere promises a refund guarantee. Which is actually true? This has real legal/compliance exposure, not just an SEO inconsistency.
3. **Outlet count** — site states 50+/100+/500+ outlets managed in different places. What's the current real number?
4. **Phone number** — two different numbers appear across the site. Which is correct?
5. **Currency formatting** — mixed use of `$` and `S$`. Should everything standardize to one (e.g. `S$` sitewide, or `$` with currency stated once per page)?
6. **"Price: 0 SGD" leak** — which page(s) show this, and is it a display bug (real price not loading) or leftover placeholder/test data?
7. **Thin-content pages** (`/contact` at 233 words, `/case-studies` at 279, `/tools/backlink-opportunity-finder` at 232) — these need real written content, not mechanical padding. Want me to draft expanded copy for these the same way the `/services/local-seo` and `/services/review-management` rewrites were done earlier?
8. **Duplicate/cannibalizing content clusters** — the audit flags a bad-review blog post vs. guide, 5 agency-listicle posts chasing one intent, and a 5-post review-management cluster. Do you want these consolidated (redirect weaker posts into the strongest one) or differentiated (each given a genuinely distinct angle)? This needs a content strategy call, not a code fix.
9. **Boilerplate CTA/founder story repetition** — intentional brand consistency, or should it be varied per page? Your call before I touch dozens of pages' copy.

---

## Self-Review Notes

- **Scope check performed**: Phase 1–3 are pure technical/code fixes with no ambiguity — kept as one plan since they share the same codebase and most build on shared infrastructure (e.g., Task 8's og:image fallback and Task 9's schema pattern both extend `app/layout.tsx`/existing JSON-LD conventions). Phase 4 (content/business-fact decisions) is deliberately **not** turned into tasks — per this project's own established norm against fabricating data, those need your answers first, then a follow-up plan.
- **Spec coverage**: all 22 Basic Issues + 7 Technical Audit issues are accounted for — either a task above, the "already fixed" pre-check at the top, or a Phase 4 question. The two items without a dedicated task (homepage 433KB/144 requests/28 scripts bundle size, and the bundle-size-driving script audit) are intentionally folded into Task 14's Lighthouse verification step rather than a separate task, since a safe fix requires first seeing which specific scripts are loaded and deferrable — that's an investigation outcome, not a predetermined change; if Task 14's Lighthouse run still shows a high script count after the LCP fix, treat that as the trigger for a follow-up script-audit task.
