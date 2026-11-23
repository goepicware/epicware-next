import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings/hero-reviewing-report-charts.jpg";

export const metadata: Metadata = {
  title: "The Monthly Reputation Report: Six Numbers That Matter",
  description: "Most Google reviews reports measure the wrong things. Here are the six numbers that show whether review work is moving bookings, and what to leave off.",
  alternates: { canonical: "https://www.epicware.ai/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1260, height: 750, alt: "Hands reviewing a printed business report with colourful charts" }],
    title: "The Monthly Reputation Report: Six Numbers That Matter | Epicware",
    description: "Most Google reviews reports measure the wrong things. Here are the six numbers that show whether review work is moving bookings, and what to leave off.",
    url: "https://www.epicware.ai/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Monthly Reputation Report: Six Numbers That Matter",
  "description": "Most Google reviews reports measure the wrong things. Here are the six numbers that show whether review work is moving bookings, and what to leave off.",
  "datePublished": "2026-11-19",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://www.epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "url": "https://www.epicware.ai/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      ogImageWidth={1125}
      ogImageHeight={750}
      badge="REPUTATION MANAGEMENT · REPORTING"
      h1="The Monthly Reputation Report: Six Numbers That Matter"
      author="Vignesh"
      authorRole="Founder, Epicware"
      publishDate="November 2026"
      readTime="11 min read"
      intro={
        <>
          <p>Your star average is a lagging indicator. It can hide a review programme that collects plenty of praise but never actually changes a booking decision. A two-year-old five-star from a customer who never returned sits beside last Tuesday&apos;s one-star, blended into one number that tells you nothing about this month.</p>
          <p>A better starting point is six operational numbers, not one decorative score: new reviews collected per 30 days, review velocity against the local category median, response rate and median response time, service and neighbourhood terms appearing in review text, 90-day rating drift, and the share of enquiries traceable to reviews. This guide works through each one, what belongs in the report and what to cut, how to read the six together, and the compliance line that keeps all of it honest.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings/hero-reviewing-report-charts.jpg"
              alt="Hands reviewing a printed business report with colourful charts"
              width={1260}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by RDNE Stock project via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Your star average is a lagging, blended number. Six operational lines tell you more.</li>
              <li>• Track: new reviews per 30 days, velocity vs. local median, response rate/time, service and neighbourhood terms in review text, 90-day rating drift, and enquiry share.</li>
              <li>• Enquiry share, not the star average, is the number that actually links reviews to bookings.</li>
              <li>• One test for every line: if it can&apos;t change a decision for the next 30 days, cut it.</li>
              <li>• Review manipulation carries real legal risk (the UK&apos;s DMCC Act fines up to £300,000 or 10% of global turnover) — this is a diagnostic system, not a volume play.</li>
            </ul>
          </div>

          <h2>Why Your Google Reviews Report Is Measuring the Wrong Thing</h2>
          <p>A Google reviews report should be a monthly read of review activity and its effect on enquiries, not a screenshot of your star average. That average is lagging and aggregated, so it can&apos;t tell you what happened this month. It also hides system health: whether the ask is running, whether anyone is replying, or whether reviews even mention the services people book.</p>
          <p>The fix starts with subtraction. Replace the snapshot with an operating rhythm: six lines, same date, every month, so comparison becomes the metric. For the underlying mechanics,{" "}
            <Link href="/blog/google-business-reviews-guide">
              our guide to Google business reviews
            </Link>{" "}
            covers how ratings and review content actually factor into ranking.</p>

          <h2>Number 1: New Reviews Collected Per 30 Days</h2>
          <p>Start here. New reviews collected per 30 days is the only honest output measure of a review programme: count what landed on the profile in the last 30 days, taken from the profile itself, never from memory.</p>
          <p>Flat collection diagnoses a broken ask: no trigger, no timing, no channel. Falling collection while service holds steady usually means staff stopped asking, not that customers got unhappier. Read it against your{" "}
            <Link href="/blog/google-reviews-strategy">
              90-day review strategy
            </Link>{" "}
            so every ask has a named owner.</p>
          <p>Fix the counting rule so the line stays stable: date received, not date of visit; exclude reviews removed for policy violations; count every rating, with or without text. Calculation: reviews received in the rolling 30-day window, compared with the prior three.</p>
          <p>Volume from incentives or review swaps is exactly what regulators scrutinise. The UK&apos;s DMCC Act 2024 bans fake and undisclosed incentivised reviews, with penalties reported at up to £300,000 or 10% of global turnover, per{" "}
            <a href="https://www.dorsey.com/the-tmca/new-guidance-on-fake-reviews-in-the-uk-what-consumer-businesses-need-to-know-under-the-dmcc-act-2024" target="_blank" rel="noopener noreferrer">
              Dorsey&apos;s summary
            </a>. This line should count genuine activity only.</p>

          <h2>Number 2: Review Velocity Against Your Local Category Median</h2>
          <p>Twenty reviews this month and twenty spread across a year are different businesses, and a lifetime total hides which one you actually are. Velocity is what separates them: it's the signal for whether you're gaining ground against competitors, where the 30-day count only confirms the ask is working at all. Read{" "}
            <Link href="/blog/review-velocity-vs-total-review-count">
              review velocity against lifetime totals
            </Link>{" "}
            before you compare raw counts with anyone.</p>
          <p>Set the comparison set tightly: same category, same catchment. A Jurong tuition centre benchmarks against nearby tuition centres, not a restaurant in another district or a national chain&apos;s flagship. No reliable published median exists for local review velocity, so any universal benchmark you&apos;re handed is invented. Build your own instead: name five direct competitors, record each one&apos;s new review count on the same date each month for three months, then take the median.</p>
          <p>Use the result as a ratio, not a score. At or above median means visibility is holding. Two consecutive months below is the earliest warning that competitors are collecting while you are not.</p>

          <h2>Number 3: Response Rate and Median Response Time</h2>
          <p>A rising velocity number says nothing about whether anyone actually replies to those reviews. Split that question into two separate numbers instead of guessing at it.</p>
          <p>Response rate is the share of reviews in the last 90 days that received an owner reply, written as a percentage with the denominator shown: 38 of 52, not 73%. Median response time is the middle elapsed days between publish and reply. Use the median, not the mean, so one neglected review from months ago can&apos;t distort the read.</p>
          <p>The pair diagnoses differently. A low rate points at a process gap: no assigned owner, no notification. A high rate with a slow median points at batching, where replies get held back for a weekly catch-up. Track 1-star and 2-star items separately and route the fastest replies there;{" "}
            <Link href="/blog/how-fast-should-you-respond-to-google-reviews">
              how fast you should actually respond
            </Link>{" "}
            depends on which bucket a review falls into.</p>

          <h2>Number 4: Service and Neighbourhood Terms Appearing in Review Text</h2>
          <p>Response discipline tells you whether you reply. Term counts tell you what customers actually describe. Turn this qualitative line into a number: count reviews that name a specific service and a specific place, not generic praise.</p>
          <p>Fix the vocabulary first: your top five services plus key neighbourhood names. Count mentions per 30-day window and record which terms move.{" "}
            <Link href="/blog/do-keywords-in-reviews-help-local-seo">
              Our review keyword guide
            </Link>{" "}
            covers the evidence gap here — AI answers may reward specificity, but treat terms as a hypothesis worth watching, not proof of anything yet.</p>
          <table>
            <thead>
              <tr>
                <th>Review date</th>
                <th>Service</th>
                <th>Neighbourhood</th>
                <th>Fragment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4 Jun 2026</td>
                <td>aircon servicing</td>
                <td>Tampines</td>
                <td>&quot;Aircon servicing in Tampines, same day&quot;</td>
              </tr>
              <tr>
                <td>11 Jun 2026</td>
                <td>none</td>
                <td>none</td>
                <td>&quot;Friendly team&quot;</td>
              </tr>
              <tr>
                <td>19 Jun 2026</td>
                <td>drain clearing</td>
                <td>Jurong</td>
                <td>&quot;Drain clearing in Jurong, fixed fast&quot;</td>
              </tr>
            </tbody>
          </table>
          <p>Count reviews with at least one service term and one neighbourhood term, then report the share. Generic praise scores zero.</p>

          <h2>Number 5: 90-Day Rating Drift</h2>
          <figure>
            <Image
              src="/assets/blog/the-monthly-reputation-report-six-numbers-that-show-if-review-work-moves-bookings/five-star-rating-tablet.jpg"
              alt="Five yellow stars above a blank tablet screen"
              width={1260}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by Towfiqu barbhuiya via Pexels</figcaption>
          </figure>
          <p>Knowing what customers describe still doesn&apos;t tell you whether satisfaction is moving. Report drift as the change in average rating across a rolling 90-day window against the 90 days before it, not the average itself: the movement. The rolling window stops one 1-star event from redefining the line, and keeps it comparable when review volume shifts month to month.</p>
          <p>Pair it with its cause. If the average moved, name the review, service, or staff event behind it, since unexplained drift is the number owners learn to skip. Watch for one masking pattern in particular: rising volume with falling drift, which can mean new reviews are arriving at a lower quality threshold. That&apos;s potentially a service problem dressed up as a marketing win.</p>
          <p>The raw average belongs in a quarterly brand review, not here.{" "}
            <Link href="/blog/reputation-management-for-local-businesses">
              Treat your Google rating as a revenue line
            </Link>{" "}
            rather than a scoreboard, and read drift next to volume to see which of the two is actually moving.</p>

          <h2>Number 6: Share of Enquiries Traceable to Reviews</h2>
          <p>If drift tells you direction, this final line tells you whether review work books anything at all. It&apos;s the decisive number in our view, because it&apos;s the only one linking reviews to enquiries rather than to more reviews.</p>
          <p>There&apos;s no standard way to tag enquiries, so write your method down and hold it unchanged for 12 months; a changing method breaks the series. Require a &quot;How did you hear about us?&quot; field at booking, add a call-tracking source tag, use the booking-form referrer, or have the front desk log answers daily. Compute enquiries naming reviews or Google divided by total enquiries, shown as a percentage with raw counts beside it.</p>
          <p>Self-reported attribution has known limits, so read the trend across three months, not one small sample of 20 to 40 enquiries. Strong review reporting, like{" "}
            <Link href="/blog/seo-tips-small-business-owners">
              strong local SEO basics
            </Link>, depends on fixed definitions that don&apos;t shift under you.</p>

          <h2>What Belongs in the Report (and What to Leave Off)</h2>
          <p>With the enquiry line fixed, the rest of the report should be pruned. Our position, not an industry rule: any line that can&apos;t change a decision next month is decoration, and decoration crowds out the lines that can.</p>
          <p>The aggregate star average is lagging, blendable, and easily inflated, and it says nothing about this month&apos;s collection or response behaviour. Lifetime total review count only ever rises, so it can&apos;t signal a stalled programme and rewards age over activity. Follower and like counts, plus unweighted keyword clouds, aren&apos;t connected to bookings and invite interpretation without a denominator.</p>
          <p>None of these is worthless; they&apos;re simply unactionable at monthly cadence. For the deeper case, see{" "}
            <Link href="/blog/reviews-vs-rating-what-matters-more">
              why review substance beats a score
            </Link>. Move the star average, lifetime totals, follower counts, and undated keyword clouds to a quarterly brand review, not the operating report.</p>

          <h2>How to Read the Six Numbers Together</h2>
          <p>With the clutter gone, interpretation becomes a fixed sequence, not a monthly debate. Read paired signals first:</p>
          <ul>
            <li>Volume up while drift falls: the collection machine is running ahead of service quality. Fix service, or narrow who you ask within policy, not the asking process itself.</li>
            <li>Fast responses with flat velocity: the ask is broken, not the service. You&apos;re replying efficiently to too few reviews.</li>
            <li>Velocity at the local median with low enquiry share: review work is competing, not converting. Check whether reviews actually name the services customers book.</li>
            <li>Stable drift with narrowing terms: the programme is attracting generic praise and losing service specificity, the quiet route to invisibility in local search.</li>
          </ul>
          <p>Then set a one-page monthly read order: volume, velocity ratio, response pair, terms, drift, enquiry share, then name two actions. Keep it identical every month.</p>

          <h2>The Compliance Line That Keeps the Report Honest</h2>
          <p>The read order above only works if every line feeding it is genuine. A{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8294234" target="_blank" rel="noopener noreferrer">
              peer-reviewed analysis indexed on PubMed Central
            </a>{" "}
            frames fabricated reviews as a form of illegal advertising, precisely because online reviews function as essential consumer information, and argues that stopping the practice depends on well-resourced administrative bodies, not just platform policy.</p>
          <p>Keep the principle general rather than jurisdictional: verify your own market&apos;s position instead of importing rules from elsewhere. For the report, the implications are straightforward: no review gating that filters by rating, no incentives conditioned on a positive review, no staff-written reviews, and a documented ask script so the process stays auditable rather than improvised.</p>

          <h2>Google Reviews Singapore: What to Verify Before You Scale the Ask</h2>
          <p>Singapore adds a short list of local checks before you scale the ask:</p>
          <ol>
            <li>Its compact catchment compresses the comparison set, which makes a local median from five named rivals both easier and more useful to build.</li>
            <li>Multi-language text is a counting problem; decide before the first report how you&apos;ll log Chinese, Malay, and Tamil review terms.</li>
            <li>Verify Google&apos;s current review policy on the platform&apos;s own policy page, and confirm the local consumer protection position separately rather than importing another market&apos;s rules.</li>
            <li>Audit your own profile for district naming: customers may write a mall name where you&apos;d write a planning area, so count the version they actually use.</li>
          </ol>
          <p>Treat AI-answer visibility as a quarterly watch item only, and keep the monthly report to six lines.</p>

          <h2>The Test: If a Number Can&apos;t Change a Decision, Cut It</h2>
          <p>Apply this one-line test every month: if a figure can&apos;t produce a decision for the next 30 days, cut it. Fix the cadence now: same date, same six lines, rolling 30- and 90-day windows, and rebuild the local competitor median quarterly from five named businesses.</p>
          <p>Assign one owner per number. Volume and velocity sit with whoever controls the ask, the response pair with the front desk, terms and drift with the manager, and enquiry share with whoever books the work. Expect enquiry share to be the noisiest and most valuable line, so read it as a three-month trend rather than reacting to a single month.</p>
          <p>Epicware&apos;s{" "}
            <Link href="/products/epicreview">
              EpicReview
            </Link>{" "}
            can produce this report automatically. Until it&apos;s switched on, keep the six numbers in a manual spreadsheet, start with the two lines furthest from target, and ignore the rest for one quarter.</p>

          <h2>Putting the Six Numbers on One Page</h2>
          <p>None of this requires new software to start. Pull last month&apos;s reviews, count them against the six definitions above, and you&apos;ll have a working first draft of the report within an afternoon. The number that usually surprises owners most is enquiry share: most have never measured it, and it&apos;s often the one that reveals whether review work has been paying for itself at all.</p>
          <p>Build that habit once, and the report stops being a dashboard you glance at and becomes a tool you actually use to decide what to do next month.</p>
        </>
      }
      ctaHref="/locations/singapore/review-management"
      ctaLabel="See Review Management Singapore"
      ctaContext="Epicware's team builds and runs the six-number report every month, so you can see whether review work is actually moving bookings, not just your star average."
      relatedPosts={[
        { title: "Do Keywords in Google Reviews Help Local SEO?", href: "/blog/do-keywords-in-reviews-help-local-seo" },
        { title: "Review Velocity vs Total Review Count — Which Matters More for Google Maps?", href: "/blog/review-velocity-vs-total-review-count" },
        { title: "Reputation Management for Local Businesses: Why Your Google Rating Is a Revenue Line Item", href: "/blog/reputation-management-for-local-businesses" },
      ]}
    />
  );
}
