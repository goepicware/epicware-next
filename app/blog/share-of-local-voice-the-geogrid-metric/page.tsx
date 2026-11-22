import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/share-of-local-voice-the-geogrid-metric/hero-map-grid.jpg";

export const metadata: Metadata = {
  title: "Share of Local Voice: The Geogrid Metric",
  description:
    "Share of local voice shows how much of your service area you truly own in the Map Pack, by district. How to track and report it monthly.",
  alternates: { canonical: "https://www.epicware.ai/blog/share-of-local-voice-the-geogrid-metric" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1260, height: 750, alt: "A map view with a grid of location pins across a city area" }],
    title: "Share of Local Voice: The Geogrid Metric | Epicware",
    description:
      "Share of local voice shows how much of your service area you truly own in the Map Pack, by district. How to track and report it monthly.",
    url: "https://www.epicware.ai/blog/share-of-local-voice-the-geogrid-metric",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Share of Local Voice: The Geogrid Metric",
  "description":
    "Share of local voice shows how much of your service area you truly own in the Map Pack, by district. How to track and report it monthly.",
  "datePublished": "2026-11-26",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://www.epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "url": "https://www.epicware.ai/blog/share-of-local-voice-the-geogrid-metric"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      ogImageWidth={1260}
      ogImageHeight={750}
      badge="LOCAL SEO · RANK TRACKING"
      h1="Share of Local Voice: The Geogrid Metric"
      author="Vignesh"
      authorRole="Founder, Epicware"
      publishDate="November 2026"
      readTime="11 min read"
      intro={
        <>
          <p>Your business can rank first at its own doorstep and still be invisible two MRT stops away. That&apos;s the gap a city-level rank number hides, and it&apos;s why one position tells you almost nothing about how much of your service area you actually own.</p>
          <p>Share of local voice is the fix: the percentage of geogrid points across your service area where you hold a top-three Map Pack position for a target query. One metric, reported by neighbourhood instead of as a single city average.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/share-of-local-voice-the-geogrid-metric/hero-map-grid.jpg"
              alt="A map view with a grid of location pins across a city area"
              width={1260}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by Jason Hu via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Share of local voice is the percentage of fixed geogrid points where you hold a top-3 Map Pack position, reported per query and per district.</li>
              <li>• A single city-wide rank hides exactly the gap this metric reveals: strong at the doorstep, absent two MRT stops away.</li>
              <li>• Lock grid size, point spacing, device/location simulation and scan cadence before your first scan, or months stop being comparable.</li>
              <li>• Pair share with Google Business Profile call volume and direction requests, but state plainly that the link to walk-ins is a hypothesis, not a proven one.</li>
              <li>• A weak district score is a task, not a verdict: diagnose the grid itself before spending on any fix.</li>
            </ul>
          </div>

          <h2>What Share of Local Voice Actually Measures</h2>
          <p>Share of local voice is the percentage of geogrid points across your defined service area where your business holds a top-3 Map Pack position for a target query. The grid is fixed, same points, same spacing, same scan settings every month. Each point simulates a search from that location and returns a snapshot of which businesses Google shows there.</p>
          <p>Top three is the cutoff because the Map Pack displays three results by default. Position four isn&apos;t a slightly worse outcome, it&apos;s a different outcome. A business ranked fourth sits outside the block most customers see first. Google doesn&apos;t itself confirm that display threshold, so treat the cutoff as a working convention rather than a published rule.</p>
          <p>The formula: points with a top-3 result divided by total scanned points, times 100, reported per query and per district. This is a diagnostic for improving local SEO, not a score to chase. If local visibility concepts are still fuzzy, this{" "}
            <Link href="/blog/what-is-seo-local-business">
              plain-English SEO definition
            </Link>{" "}
            covers the basics, and if you&apos;re buying reporting from an agency, check{" "}
            <Link href="/blog/seo-services-for-small-business">
              what to demand from an SEO service
            </Link>.</p>
          <p>It differs from the two metrics owners already see. A city rank gives one position for one query from one location. A heatmap is visual, often undated, and hard to compare month to month. Share of local voice is a dated number on a fixed field.</p>

          <h2>Why One City Ranking Hides the Real Problem</h2>
          <p>A rank tracker reporting position one is answering from a single spot on the map. It isn&apos;t telling you how much of your market you actually hold.</p>
          <p>Many owners recognise this pattern once they look for it. From the shop&apos;s own doorstep, the business sits first in the Map Pack. Two MRT stops away, in a neighbouring mall or estate, it&apos;s absent from the top three. The tracker still reports position one, because a rank tool answers from a single reference location while a grid tool answers from many.</p>
          <p>The arithmetic is unforgiving. Take a 5-by-5 grid of 25 points. The store holds a top-3 position on the 9 points nearest it and nowhere else. The headline rank reads #1. The share of local voice reads 36%, 9 of 25 points. Same business, same query, same day.</p>
          <p>District reporting is the fix. Neighbourhoods differ in demand density, competitor clustering and how far Google trusts a listing to travel, so a city average flattens exactly the variation you need to act on. Review strength widens those gaps further:{" "}
            <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer">
              BrightLocal&apos;s 2026 consumer survey
            </a>{" "}
            found 97% of consumers read local reviews, 68% will only use businesses rated four stars or higher, and 74% look for reviews from the last three months. Where competitors hold fresher, deeper review profiles in a given district, they hold more grid points there. That is why{" "}
            <Link href="/blog/how-many-google-reviews-do-you-need-to-compete-locally">
              review volume planning
            </Link>{" "}
            belongs beside grid tracking, and why improving local SEO starts with{" "}
            <Link href="/blog/seo-tips-small-business-owners">
              district-level basics
            </Link>{" "}
            rather than a city-wide target.</p>

          <h2>Lock the Scan Before You Track Anything</h2>
          <p>District reporting only works when every scan uses the same field. Fix and record four settings before your first scan: grid size, point spacing, the device and location simulation at each point, and scan cadence. A single phone check from one location is not a scan.</p>
          <p>Spacing matters more than point count. A 7-by-7 grid holds 49 points either way, but at 1km spacing it spans roughly 6km across, while at 500m spacing it spans roughly 3km. Those grids cover different service areas, so their share percentages aren&apos;t comparable to each other. Use a tool that lets you{" "}
            <Link href="/use-cases/rank-higher-on-google-maps">
              see your Map Pack position
            </Link>{" "}
            on that fixed field, and record spacing beside the result.</p>
          <p>Scan monthly at minimum for a recurring report. Weekly scans mostly add noise unless something changed in the district, a landing page, photos, hours, or review activity. Pick one cadence and hold it; a share figure without stated settings can&apos;t be compared across months or against a competitor&apos;s number.</p>

          <h2>The One-Page Monthly Pack</h2>
          <p>With grid size, spacing and cadence fixed, the monthly job is packaging: one page, four lines per district.</p>
          <div className="not-prose overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="py-2 pr-4 font-semibold">Column</th>
                  <th className="py-2 font-semibold">What it records</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">District</td>
                  <td className="py-2">The named neighbourhood or estate, not a city-wide label</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">Share of local voice</td>
                  <td className="py-2">Top-3 points divided by total scanned points, for the priority query</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">Call volume</td>
                  <td className="py-2">Clicks on the call button from the Google Business Profile, same date range</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Direction requests</td>
                  <td className="py-2">Deduplicated requests for directions, same date range</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Pull call volume and direction requests from{" "}
            <a href="https://support.google.com/business/answer/9918094?hl=en" target="_blank" rel="noopener noreferrer">
              Google Business Profile performance data
            </a>, which covers both organic results and ads and can lag by up to five days, so set your cut-off date to allow for that. Use the same period for share and GBP actions so the comparison holds.</p>
          <p>Pair share with calls and directions because they&apos;re the closest GBP actions to footfall, but state plainly that no published source links grid share to walk-ins. Treat that relationship as a hypothesis and test it against your own three to six months of data. Use traffic lights only for movement, not invented targets: flag red a district that fell month on month or lost points to a named competitor, flag green one that gained. No source offers a target share or typical range by district, so don&apos;t print one.{" "}
            <Link href="/products/epicmap">
              EpicMap&apos;s geogrid scans
            </Link>{" "}
            produce the share line; print the query list and scan settings beside it. For multi-outlet brands, add a roll-up row: the average share across outlets is useful context, but the outlier outlet is the actionable line.</p>

          <h2>What to Do With a Weak District Score</h2>
          <figure>
            <Image
              src="/assets/blog/share-of-local-voice-the-geogrid-metric/monthly-report.jpg"
              alt="A person reviewing a monthly report with charts and tables"
              width={1125}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by Vitaly Gariev via Pexels</figcaption>
          </figure>
          <p>A weak district score is a task, not a verdict, and the order of work matters.</p>
          <p><strong>1. Diagnose before you optimise.</strong> Check whether the district is a genuine service area with delivery, parking or transit access, or a grid artefact covering roads no customer travels. Trim the grid to the real catchment, the area you can actually serve, first.</p>
          <p><strong>2. Work the inputs Google names.</strong> Google states it doesn&apos;t disclose its local ranking method and that there&apos;s no way to request or pay for a better ranking. It does say complete and accurate business information makes a profile more likely to appear, so fix that before anything clever.</p>
          <p><strong>3. Pull district-level levers.</strong> A district-specific landing page, geo-tagged recent photos, accurate service areas and opening hours, and reviews that mention the area are the practical route to improving local SEO at neighbourhood scale.{" "}
            <Link href="/use-cases/rank-higher-on-google-maps">
              See how the geogrid scan supports it
            </Link>.</p>
          <p><strong>4. Read the top three.</strong> Identify which profiles hold those slots and compare review recency and profile completeness against your own. A{" "}
            <a href="https://localo.com/blog/leaders-strategies-analysis-of-2-million-google-business-profiles" target="_blank" rel="noopener noreferrer">
              Localo analysis of 2 million Google Business Profiles
            </a>{" "}
            found top-3 businesses averaged more than 200 reviews and over 250 photos, with 75% carrying a completed business description, against under 40% for profiles ranked 11th to 20th. Treat it as a pattern across a large external dataset, not a target for your own district.</p>
          <p><strong>5. Keep review volume compliant.</strong> Fake-review enforcement is tightening in multiple markets. The{" "}
            <a href="https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" target="_blank" rel="noopener noreferrer">
              FTC&apos;s rule
            </a>{" "}
            has been in force in the US since October 2024, with civil penalties now up to US$53,088 per violation, and the{" "}
            <a href="https://cms.law/en/gbr/legal-updates/no-more-faux-five-stars-the-dmcc-act-bans-fake-reviews" target="_blank" rel="noopener noreferrer">
              UK banned fake reviews
            </a>{" "}
            from April 2025 under the DMCC Act. Neither applies directly in Singapore, but both show where enforcement is heading, and Google only removes reviews that breach its own policies, so flagging unhappy customers isn&apos;t a lever either. See our{" "}
            <Link href="/blog/google-business-reviews-guide">
              review compliance guide
            </Link>.</p>

          <h2>Limits to State in the Report Itself</h2>
          <p>Once you act on a weak district, keep the report honest about what the number can and can&apos;t prove. State these limits on the report page itself.</p>
          <p><strong>Measurement.</strong> A share figure is only as good as its grid. Print the grid size, point spacing, query list and scan date on every report.</p>
          <p><strong>Geography.</strong> Review-behaviour and search-share benchmarks cited for context are typically US or UK data, never Singapore local benchmarks. Cite them as market context, not local targets.</p>
          <p><strong>Channel.</strong> Map Pack tracking is only part of the picture now that AI engines answer &quot;best near me&quot; queries directly. A{" "}
            <a href="https://www.brightlocal.com/research/local-ai-visibility-study/" target="_blank" rel="noopener noreferrer">
              BrightLocal study
            </a>{" "}
            of over 200,000 searches found a tracked business was named in 66% of Google Maps results, against 38% for AI Overviews, 33% for ChatGPT and 32% for AI Mode, a different question than market share, but still a reminder to track AI visibility separately rather than fold it into this metric.</p>
          <p><strong>Data hygiene.</strong> Several widely quoted local SEO statistics circulating online are years old with the date quietly removed. Google publishes neither local-intent search share nor Local Pack click rates. Leave unsourced figures out of any pack people use to make decisions.</p>

          <h2>Put One Honest Number in the Pack</h2>
          <p>With those limits printed on the page, the pack is ready to do its job. Keep the metric to one number per district, and hold the same field every month, changing the query, boundary or grid midstream breaks comparability.</p>
          <p>Report share of local voice by neighbourhood beside call volume and direction requests. Say openly that the link to walk-ins is a relationship you&apos;re testing against your own data, not a proven one. A weak district is a task rather than a verdict, so revisit the diagnosis before spending against it. Review the trend quarterly, not weekly, and change one variable at a time. That discipline turns a geogrid scan into an honest monthly number you can act on, district by district.</p>
        </>
      }
      ctaHref="/products/epicmap"
      ctaLabel="See EpicMap's Geogrid Scans"
      ctaContext="Epicware's EpicMap runs the fixed geogrid scan, reports share of local voice by district, and pairs it with call and direction data, so the monthly pack builds itself instead of a spreadsheet."
      relatedPosts={[
        { title: "How Multi-Outlet Singapore Brands Should Run GBP Profiles", href: "/blog/how-multi-outlet-singapore-brands-should-run-gbp-profiles" },
        { title: "How Many Google Reviews Do You Need?", href: "/blog/how-many-google-reviews-do-you-need-to-compete-locally" },
        { title: "Google Business Reviews: Rankings and Reputation Guide", href: "/blog/google-business-reviews-guide" },
      ]}
    />
  );
}
