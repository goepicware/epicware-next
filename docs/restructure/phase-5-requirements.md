# Phase 5 — Requirements to Go Live

Phase 5 writes real, market-specific copy for the 4 non-Singapore
countries (USA, UK, Australia, UAE) × 6 services, plus each country's
hub page. This doc is the checklist a page must clear before its
frontmatter can flip from `draft: true` to `draft: false`.

Background: a competitor site lost 37% of traffic to Google's spam
update over doorway pages — 49 state pages, 40 of them 90%+ identical,
differing only by a swapped state name, with meta descriptions falsely
claiming "[State]-based." Three automated gates exist specifically to
stop that pattern from happening here. **No page can go live without
passing all three.**

```
pnpm check:pages          # runs all three gates
pnpm check:similarity     # scripts/check-page-similarity.ts
pnpm check:substance      # scripts/check-page-substance.ts
pnpm check:honesty        # scripts/check-page-honesty.ts
```

All three also run automatically as `prebuild`, so a failing live page
fails `pnpm run build` outright — it can't reach Vercel.

## Gate 1 — Similarity (scripts/check-page-similarity.ts)

Compares every pair of sibling pages (same service across countries,
same country across services) on normalized body text (5-word shingle
Jaccard) and meta description (2-word shingle Jaccard), after stripping
country/city/district names, currency codes, platform names, and
numbers.

- Body similarity > 40% = **FAIL** (30–40% = WARN, printed but not blocking)
- Meta description similarity > 60% = **FAIL**
- `title`/`h1` are reported but don't independently fail the gate —
  calibration against the 16 SG district pages showed short titles
  following a legitimate "[Service] in [District] | Epicware" local-SEO
  convention collapse to a binary 0%/100% and aren't a reliable
  duplication signal on their own. `description` carries the "title or
  meta" check instead.
- A FAIL blocks the build if **either** page in the pair is
  `draft: false` — flipping one page live while its still-drafted
  sibling is template-identical doesn't escape the gate.

**What this means for writing a page:** don't write the same paragraph
shape for every country and swap the country name. Each country's
"Pain" / "Promise" / "What's Included" sections need to engage with
something actually different about that market — see marketFacts below
for where that difference has to come from.

## Gate 2 — Substance (scripts/check-page-substance.ts)

Before a page's frontmatter can say `draft: false`, it must have:

```yaml
marketFacts: # at least 4, each with a real source
  - fact: "..."
    sourceUrl: "https://..."
proof: # exactly one of these two, never neither
  caseStudy:
    title: "..."
    summary: "..."
    sourceUrl: "..."
  # OR
  presenceStatement: "Serving UK businesses remotely from our Singapore team."
pricing:
  currency: "GBP"
  from: 299 # or: display: "From £299/mo"
faqs: # at least 5
  - question: "...?"
    answer: "..."
```

`marketFacts` must be real, sourced, country-specific facts — regulation
(e.g. the US FTC review rules, UK's DMCC Act), the platform landscape
that matters in that market (Yelp/BBB vs Trustpilot/Checkatrade vs
Google-only), search behaviour, currency. Not restated boilerplate.

`proof` must be honest. If there's no case study from that market yet,
say so plainly via `presenceStatement` rather than implying one exists.

No FAQ question may be reused verbatim from another country's page for
the same service (checked across all 4 countries, per service).

**FAQ format in the MDX body:** write FAQs under `## FAQ` as either
`### Question?` sub-headings or `**Question?**` bold bullets — the
similarity gate's FAQ extraction (and any future tooling) depends on
one of these two conventions being used consistently.

## Gate 3 — Honesty lint (scripts/check-page-honesty.ts)

No title, meta description, H1, or body copy on a non-Singapore country
page may say:

- "US-based" / "UK-based" / "Australian-based" / "UAE-based" / "Dubai-based" (or "... based" with a space)
- "headquartered in [that country]"
- "our office in [that country]" / "local office in [that country]"

Singapore is exempt — it's the one country Epicware genuinely is based
in. If a non-Singapore page needs to say *something* about where the
team is, say it honestly: "run remotely by our Singapore-based team"
is fine; "UK-based" is not, unless that becomes true.

If a country page ever adds JSON-LD schema, it must not include a
`PostalAddress`/`streetAddress` for that country — use `areaServed`
to declare the target market instead.

## What stays draft

Any page that doesn't clear all three gates stays `draft: true`:
noindex, excluded from the sitemap and `llms.txt`, and not linked from
the mega-menu or any link ring (`components/site/MoneyPageLinkRings.tsx`
already filters these out automatically). It's reachable by direct URL
only. There's no partial-credit state — a page is either fully gated-in
or fully invisible.
