import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogArticle from "@/components/blog/BlogArticle";

const OG_IMAGE =
  "https://www.epicware.ai/assets/blog/who-asks-for-the-review-and-when-a-six-moment-audit/hero-handover.jpg";

export const metadata: Metadata = {
  title: "When to Ask for a Review: A Six-Moment Audit",
  description:
    "Most local businesses ask for a review at one moment. Map all six, assign one owner each, and keep only the asks that convert.",
  alternates: { canonical: "https://www.epicware.ai/blog/who-asks-for-the-review-and-when-a-six-moment-audit" },
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1260, height: 750, alt: "A service advisor handing a customer their keys after a completed job" }],
    title: "Who Asks for the Review, and When? A Six-Moment Audit | Epicware",
    description:
      "Most local businesses ask for a review at one moment. Map all six, assign one owner each, and keep only the asks that convert.",
    url: "https://www.epicware.ai/blog/who-asks-for-the-review-and-when-a-six-moment-audit",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Who Asks for the Review, and When? A Six-Moment Audit",
  "description":
    "Most local businesses ask for a review at one moment. Map all six, assign one owner each, and keep only the asks that convert.",
  "datePublished": "2026-12-01",
  "author": { "@type": "Person", "name": "Vignesh", "url": "https://www.epicware.ai" },
  "publisher": { "@type": "Organization", "name": "Epicware Pte. Ltd.", "url": "https://www.epicware.ai" },
  "url": "https://www.epicware.ai/blog/who-asks-for-the-review-and-when-a-six-moment-audit"
};

export default function Post() {
  return (
    <BlogArticle
      schema={schema}
      ogImage={OG_IMAGE}
      ogImageWidth={1260}
      ogImageHeight={750}
      badge="REVIEW GENERATION · OPERATIONS"
      h1="Who Asks for the Review, and When? A Six-Moment Audit"
      author="Vignesh"
      authorRole="Founder, Epicware"
      publishDate="December 2026"
      readTime="10 min read"
      intro={
        <>
          <p>Most local service businesses ask for a review at exactly one moment: the counter at payment, or the invoice email that follows it. When the count stays thin, the usual read is a traffic problem. It&apos;s almost always a timing problem.</p>
          <p>A typical service journey has five or six moments where a genuinely happy customer already exists: handover, invoice, follow-up call, end of treatment, end of term, counter. Wire only one of them to an ask, and the gap isn&apos;t an attitude problem on your team. It&apos;s a map with five blank spots. This audit gives you the full map, one owner per moment, a compliant test method, and a keep-or-cut decision for each.</p>
        </>
      }
      body={
        <>
          <figure>
            <Image
              src="/assets/blog/who-asks-for-the-review-and-when-a-six-moment-audit/hero-handover.jpg"
              alt="A service advisor handing a customer their keys after a completed job"
              width={1260}
              height={750}
              className="rounded-lg w-full"
              priority
            />
            <figcaption>Photo by Gustavo Fring via Pexels</figcaption>
          </figure>

          <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">TL;DR</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Six real ask moments exist in most service journeys: handover, invoice email, follow-up call, end of treatment, end of term, and the counter. Most businesses use one.</li>
              <li>• Google&apos;s policy sets a floor: no incentives, no on-premises pressure, no filtering by mood, no staff quotas, no suggested wording.</li>
              <li>• Every eligible customer gets the same ask. Screening by predicted sentiment is selective solicitation, and it breaches policy regardless of intent.</li>
              <li>• Assign one named owner and one trigger event per moment, then test timing by vertical with a fixed completion-rate metric before scaling anything.</li>
              <li>• Cap each vertical at two live asks: one primary, one fallback. Cut anything that can&apos;t beat your current best performer.</li>
            </ul>
          </div>

          <h2>Why Most Reviews Never Get Asked For</h2>
          <p>The gap costs more than a missing star. Map pack ranking and AI-generated recommendations are widely assumed to reward fresh, steady review volume, so a review that never gets asked for is a five-star rating a competitor banks instead. For a Singapore operator that rating behaves like a revenue line, not a vanity metric; see{" "}
            <Link href="/blog/reputation-management-for-local-businesses">
              reputation management for local businesses
            </Link>{" "}
            for why the two are connected.</p>
          <p>This audit is deliberately not a benchmark. No credible completion-rate data exists for ask timing across industries, so every number below is a hypothesis to test against your own transactions, not a statistic borrowed from another market.</p>

          <h2>The Compliance Floor Before You Map Anything</h2>
          <p>Fix the floor before drawing the journey map, because the map has to sit on top of it. Google&apos;s{" "}
            <a href="https://support.google.com/business/answer/7400114?hl=en" target="_blank" rel="noopener noreferrer">
              contributed content policy
            </a>{" "}
            allows you to ask for a review, but not to steer it: no incentive, no suggested rating, no requested wording.</p>
          <p>Incentives are broader than cash. A discount, free goods, or a reward tied to leaving a review (or to removing a negative one) puts the whole programme outside the rules. If you&apos;re unsure where that line sits, see{" "}
            <Link href="/blog/can-you-incentivize-google-reviews">
              whether review incentives are allowed
            </Link>.</p>
          <p>On-premises pressure is restricted too: Google&apos;s policy reads as a restriction on requiring or pressuring customers to leave ratings while they&apos;re still on site. That rules out a tablet held at the counter while staff wait, and it reshapes the handover ask specifically, which we cover below. The same policy treats staff quotas and scripted customer wording as grounds for removal, not just a style note. One owner per moment is an internal control, never a target of two reviews per technician per shift.</p>
          <p>US readers should note the FTC&apos;s{" "}
            <a href="https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" target="_blank" rel="noopener noreferrer">
              final rule banning fake reviews and testimonials
            </a>, in effect since August 2024 and now under active enforcement, including warning letters sent to multiple companies. A Singapore operation doesn&apos;t fall under FTC jurisdiction, so check local obligations separately rather than import US language wholesale.</p>

          <h2>You Can&apos;t Choose Who Gets Asked</h2>
          <p>The floor has one more edge: it rules out filtering who gets asked at all. Google&apos;s policy is explicit that businesses may not discourage negative reviews or selectively solicit positive ones. A review audit usually surfaces the same violation first, the happy-customer triage step: the counter team hands the link to customers who smiled and a polite thank-you to the ones who didn&apos;t. It reads as efficiency. It&apos;s selective solicitation, and it&apos;s the exact pattern covered in{" "}
            <Link href="/blog/review-gating-explained">
              how review gating breaches policy
            </Link>.</p>
          <p>The operational rule: every eligible customer at a given touchpoint gets the same ask, in the same wording, on the same channel. Eligibility is a completed transaction, job closed, treatment finished, term ended, never sentiment. Write the trigger into the SOP so the ask fires from a CRM event rather than a staff member&apos;s judgment call. A uniform ask is also the easier policy to defend: there&apos;s no triage step to explain if a customer who wasn&apos;t asked complains they were deliberately skipped.</p>

          <h2>The Six Moments Where a Delighted Customer Already Exists</h2>
          <p>With eligibility settled, the map is simple. Here&apos;s the full set, in the order a typical service journey runs through them:</p>
          <ul>
            <li><strong>Technician or therapist handover.</strong> Job card signed, keys back in hand, treatment finished. Satisfaction peaks here, but the customer is still on premises, so the actual ask has to land after they leave.</li>
            <li><strong>Invoice or receipt email.</strong> Sends automatically at completion with a direct review link. The lowest-friction moment on the map, because nobody has to remember to trigger it.</li>
            <li><strong>Follow-up call.</strong> You&apos;re already placing this call after the job. One scripted, pressure-free line costs nothing extra to test.</li>
            <li><strong>End of treatment</strong> in clinics and aesthetics practices, logged as a clinical milestone, which makes the trigger unambiguous.</li>
            <li><strong>End of term</strong> in tuition centres, at the report-card handover, where the parent is emotionally invested in a visible result.</li>
            <li><strong>The incumbent counter ask.</strong> Put it on the map explicitly: the audit exists to show one moment doing all the work while five sit idle.</li>
          </ul>
          <p>Draw the whole journey as a single diagram from booking to completed transaction, and label every gap between touchpoints. That&apos;s where reviews disappear, no trigger fires, no owner acts, and the happy customer simply leaves. Timing shifts by industry, so{" "}
            <Link href="/blog/best-time-to-ask-for-a-google-review">
              how timing changes across service businesses
            </Link>{" "}
            should inform where you start, not replace your own test data.</p>

          <h2>Why the Ask Itself Has to Survive Sign-In and Search</h2>
          <figure>
            <Image
              src="/assets/blog/who-asks-for-the-review-and-when-a-six-moment-audit/after-the-visit.jpg"
              alt="A customer checking their phone shortly after leaving a service appointment"
              width={1125}
              height={750}
              className="rounded-lg w-full"
            />
            <figcaption>Photo by Andrea Piacquadio via Pexels</figcaption>
          </figure>
          <p>Mapping the moments changes nothing if the ask itself doesn&apos;t survive the path a customer has to take. Writing a Google review means finding your profile on Maps or Search, signing in, choosing a rating, typing text, and posting. Every step is a drop-off point.</p>
          <p>Sign-in is the structural failure point, and it&apos;s where a verbal counter ask quietly dies: a first-time reviewer hits an account step mid-flow with no link in hand. An SMS or email carrying the direct review link skips the search and profile-finding entirely. Include one line of instruction plus the link, and don&apos;t tell customers to search for your business by name; that line also pre-empts the generic query customers type when they don&apos;t have a link. See{" "}
            <Link href="/blog/how-to-get-more-google-reviews">
              ethical ways to earn reviews
            </Link>{" "}
            before you finalise wording.</p>

          <h2>One Owner Per Ask, No Exceptions</h2>
          <p>The internal side of the ask is accountability, and it maps cleanly onto the moments above: the service advisor owns the handover card, the CRM sequence owns the invoice email, the front desk owns the follow-up call, and the lead therapist or centre head owns the end-of-treatment or end-of-term trigger. One owner per moment creates one handoff, one failure point, and one person to ask when completion rate drops.</p>
          <p>Google&apos;s rules constrain incentives, pressure, selective solicitation, quotas, and scripted content. They don&apos;t touch the name on your SOP, so ownership is entirely your call. Write that name on the journey map beside each moment, add the trigger event that fires it (job closed, treatment logged, term ended), and remove any duplicate asks you find. Two owners asking at the same moment doubles the pressure on the customer and adds nothing.</p>

          <h3>Design the Handover Ask Without Breaking the On-Premises Rule</h3>
          <p>The handover moment needs the most careful design, because it&apos;s the one most likely to slide back into an on-premises request. Split it into two separate events. The card, QR code, or printed slip handed over at handover is a delivery mechanism, not the ask itself. The ask goes out after the customer leaves, by SMS or email, carrying the direct review link. No staff member stands over the customer waiting for a rating.</p>
          <p>Script the handover line in neutral language, something like &quot;you&apos;ll get a text with a link if you&apos;d like to leave feedback,&quot; with no rating target and no staff name to praise. Log both timestamps on the job card: handover time and send time. That lets your test measure delay effect (same hour, same day, next day) instead of lumping everything into one same-day label. An{" "}
            <Link href="/products/epicreview">
              automated review follow-up tool
            </Link>{" "}
            can record both events and send the link after departure if manual tracking is unreliable.</p>

          <h2>Running the Test: One Variable, One Vertical, One Metric</h2>
          <p>Pick one simple number before you test anything: how many reviews came in, out of how many customers you asked at that moment. Use the same 14-day window and the same definition of &quot;asked&quot; for every moment you compare. If a handover arm counts every job but an invoice arm only counts emails that were opened, the comparison is meaningless.</p>
          <p>Test one moment at a time, in one vertical, with every other ask switched off for that group. Two live asks at once means you can&apos;t tell which one a review came from. Give it enough customers to see a real pattern, a busy salon gets there in weeks, a smaller workshop needs longer, and run each test for at least a full month so paydays and slow weekdays even out. Keep promotions out of the window so a campaign doesn&apos;t skew the result.</p>

          <h2>What Each Industry Should Test First</h2>
          <p>The best starting moment changes by vertical. Treat each row below as a hypothesis to test, not a result to copy.</p>
          <div className="not-prose overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="py-2 pr-4 font-semibold">Vertical</th>
                  <th className="py-2 pr-4 font-semibold">Test first</th>
                  <th className="py-2 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">Clinics &amp; salons</td>
                  <td className="py-2 pr-4">Same-day send vs. 72-hour send</td>
                  <td className="py-2">Result is still visible in the mirror right after</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">Car workshops</td>
                  <td className="py-2 pr-4">Collection-day send vs. handover card + next-day send</td>
                  <td className="py-2">Payment and the first drive home happen together</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-2 pr-4 font-medium">Tuition centres</td>
                  <td className="py-2 pr-4">End-of-term ask vs. mid-term ask</td>
                  <td className="py-2">Parent has just seen a concrete result</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">F&amp;B</td>
                  <td className="py-2 pr-4">Bill or receipt email</td>
                  <td className="py-2">Customer is already in a digital flow, away from the counter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Test your busiest vertical first, it returns a clean answer sooner, then apply the same method to the next one. A winning moment also needs somewhere to land, so pair the result with{" "}
            <Link href="/blog/10-gbp-optimisation-tips-every-local-business-needs">
              GBP optimisation basics for Singapore
            </Link>.</p>

          <h2>Keep the Asks That Convert, Cut the Rest</h2>
          <p>Convert each test result into a documented decision and enforce it on the journey map. Any moment that can&apos;t beat your best-performing ask over a defined window gets cut, and the cut gets recorded next to the moment so nobody quietly reinstates it. Hold at most two moments per vertical: one primary ask, plus one fallback sent only to non-responders. A third ask adds pressure and makes attribution harder.</p>
          <p>Re-check the SOP against the compliance floor before scaling a winner, and re-run the test after any change of staff, CRM, or booking flow; completion rates move when the owner changes. Put the journey map on a quarterly review, since a new hire can inherit a touchpoint without inheriting the ask, and gaps reopen quietly. If your review count is still thin everywhere, start with{" "}
            <Link href="/use-cases/get-more-google-reviews">
              a compliant system for earning reviews
            </Link>{" "}
            before layering a six-moment test on top of it.</p>

          <h2>This Week: Map, Assign, Test, Cut</h2>
          <p><strong>Map.</strong> Draw the six moments for one outlet and highlight the single one you actually use today. Label every gap; that gap list is your work order.</p>
          <p><strong>Write the floor first.</strong> Before any new ask goes live, put the compliance floor into the SOP: no incentives, no filtering by mood, no on-premises pressure, no staff quotas. Every eligible customer gets the same ask, wording, and channel.</p>
          <p><strong>Assign and test.</strong> Give each moment one named owner and one trigger event, then test the vertical hypotheses above in order of transaction volume.</p>
          <p><strong>Keep or cut.</strong> Drop any ask that can&apos;t beat your current best performer, cap each vertical at two live asks, and review the map every quarter. That&apos;s how five idle moments stop being five lost ratings.</p>
        </>
      }
      ctaHref="/products/epicreview"
      ctaLabel="See How EpicReview Automates the Ask"
      ctaContext="Epicware's EpicReview maps your six ask moments, fires the right one automatically, and reports which one actually converts, so the test runs without anyone needing to remember a follow-up."
      relatedPosts={[
        { title: "Can You Incentivise Google Reviews? What the Policy Says", href: "/blog/can-you-incentivize-google-reviews" },
        { title: "Review Gating Explained: Google Policy", href: "/blog/review-gating-explained" },
        { title: "Best Time to Ask for a Google Review", href: "/blog/best-time-to-ask-for-a-google-review" },
      ]}
    />
  );
}
