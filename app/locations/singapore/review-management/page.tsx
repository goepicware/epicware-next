import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";
import MoneyPageLinkRings from "@/components/site/MoneyPageLinkRings";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

/**
 * Merged from app/reputation-management-singapore/page.tsx (used as the
 * base — it is the richer, more complete of the two) and
 * app/review-management-singapore/page.tsx, per the restructure brief's
 * own Phase 3 table, which sends both old URLs to this one destination.
 *
 * The two pages covered substantially the same ground (real-time
 * monitoring, AI responses, review generation) with reputation-management
 * being the fuller treatment. Rather than duplicate overlapping prose,
 * this merge keeps reputation-management-singapore's content in full and
 * adds the one genuinely distinct section from review-management-singapore
 * that isn't covered elsewhere: the "When You Need Review Management"
 * trigger checklist with its specific response-rate stats.
 */

export const metadata: Metadata = {
  title: { absolute: "Reputation Management Services in Singapore | Epicware" },
  description:
    "Online reputation management services in Singapore: our agency team grows your Google reviews, replies to every review and removes policy-breaking ones.",
  alternates: { canonical: "https://www.epicware.ai/locations/singapore/review-management" },
  openGraph: {
    title: "Reputation Management Services in Singapore | Epicware",
    description:
      "Online reputation management services in Singapore: our agency team grows your Google reviews, replies to every review and removes policy-breaking ones.",
    url: "https://www.epicware.ai/locations/singapore/review-management",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Management Singapore",
  serviceType: "Reputation Management",
  description:
    "AI-powered reputation management platform for Singapore SMBs. Includes review generation, AI review responses, bad review removal, review widgets, and analytics.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/locations/singapore/review-management",
};

const CHILD_SERVICES = [
  {
    name: "Review Management",
    href: "/locations/singapore/review-management",
    description:
      "Monitor every new review across all your outlets in real time. Get alerts the moment a review lands so you can respond before the damage spreads.",
  },
  {
    name: "AI Review Response",
    href: "/services/review-management/ai-review-response",
    description:
      "Generate personalised, on-brand replies to every review automatically. Stop copying and pasting the same generic response and start sounding human at scale.",
  },
  {
    name: "Bad Review Removal",
    href: "/locations/singapore/review-removal",
    description:
      "The only productised bad review removal service in Singapore. We identify policy violations, submit removal requests, and escalate. You pay $200 only if it comes down.",
  },
  {
    name: "Review Generation Campaigns",
    href: "/services/review-management/review-generation",
    description:
      "Automated WhatsApp and email campaigns that ask happy customers for reviews at exactly the right moment — after a visit, after an order, after a positive interaction.",
  },
  {
    name: "Wall of Love (Review Widgets)",
    href: "/services/review-management/review-widgets",
    description:
      "Display your best Google reviews on your website automatically. Turn social proof into conversion on every page a potential customer visits.",
  },
  {
    name: "Reputation Analytics Dashboard",
    href: "/services/review-management/reputation-analytics",
    description:
      "See your review velocity, average rating trend, response rate, and competitor comparison in one live dashboard — not a monthly PDF that's already out of date.",
  },
];

export default function ReputationManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="REPUTATION MANAGEMENT · SINGAPORE"
        h1="Reputation Management in Singapore — Protect Your Rating, Own Your Reviews"
        subtitle={
          <>
            Your Google rating decides whether customers choose you or the business across the street.
            In Singapore&apos;s dense market, one bad review is visible to everyone within a 1km radius.
            Epicware&apos;s platform generates reviews, responds with AI, and removes the ones that shouldn&apos;t be there — all from one dashboard.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Get Free GBP Audit", href: "/free-audit" }}
        trustSignals={[
          "Multi-Outlet Ready",
          "Bad Review Removal Guaranteed",
          "Singapore-Built",
          "Real-Time Monitoring",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* Overview Video */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/Q7-2KGxsqOo?autoplay=1&mute=1&rel=0&modestbranding=1"
              title="Epicware Reputation Management Overview"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground text-center">
            Playing without sound — click the video to watch with audio.
          </p>
        </div>
      </section>

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A potential customer searches your business on Google. Your competitor has 180 reviews and a 4.7 rating.
            You have 23 reviews and a 3.9. You don&apos;t get a second chance at that first impression.
            In Singapore&apos;s hyper-local market, your Google rating is the most visible signal a stranger sees before
            they decide whether to walk through your door or keep scrolling. Most SMB owners check reviews sporadically,
            respond too slowly, and have no real system for generating new ones. That is a gap your competitors are already
            exploiting. The good news: it is entirely fixable, and faster than you think.
          </p>
        </div>
      </section>

      {/* H2: When You Need Review Management (from review-management-singapore) */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">When You Need Review Management</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>You need a system for review management when:</p>
            <ul className="space-y-2">
              <li>You are managing more than one Google Business Profile</li>
              <li>You are responding to reviews reactively rather than proactively</li>
              <li>Your review count has been flat for 3+ months</li>
              <li>You&apos;ve received a bad review and don&apos;t know how to handle it</li>
              <li>Your competitors have more reviews than you at a similar or lower rating</li>
            </ul>
            <p>
              Singapore SMBs without a review management system typically respond to fewer than 40% of reviews and generate
              reviews only by chance. Those with a system see 2–3x more reviews within 90 days and respond to 100% of
              reviews within hours. If you&apos;re not sure where to start, our guide on{" "}
              <Link href="/blog/handle-negative-google-reviews-singapore" className="text-primary font-medium hover:underline">
                how to handle negative Google reviews
              </Link>{" "}
              covers the first steps.
            </p>
          </div>
        </div>
      </section>

      {/* H2: What problems */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            What Reputation Problems Are You Facing?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The most common problem is a low review count. Singapore customers look at the number before they look at the
              rating. A 4.8-star average with 11 reviews does not feel credible next to a 4.5-star competitor with 200.
              Volume signals safety. Most businesses collect reviews by accident — a happy customer who remembered to leave one —
              rather than by system.
            </p>
            <p>
              The second problem is negative reviews. A single 1-star review can drop your average below the psychological
              threshold of 4.2 and push you out of the Google Maps 3-Pack. A competitor can leave a fake review on a Friday
              night, and by Monday morning it is visible to every potential customer who searches for your category in your district.
              Without a real-time monitoring system, you might not even see it for days.
            </p>
            <p>
              The third problem is slow or generic responses. Google rewards businesses that respond to every review, quickly.
              Responding to a 1-star review with &ldquo;Sorry to hear that, please contact us&rdquo; does more harm than good.
              Multi-outlet businesses face all of these problems multiplied across every location — and most are trying to manage
              it manually, one Google account at a time.
            </p>
            <p>
              If you&apos;re already dealing with a rating that&apos;s dropped, our{" "}
              <Link href="/blog/reputation-recovery-strategy" className="text-primary font-medium hover:underline">
                reputation recovery strategy
              </Link>{" "}
              lays out the fix step by step.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Negative Review Response — anchor target for the
          /review-management-singapore/negative-review-response redirect.
          No dedicated page for this narrower topic existed on the original
          site, so this section is new content built specifically to give
          that redirect a real destination, per the redirect-fix request. */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="negative-review-response" className="font-display text-foreground mb-6">
            Negative Review Response
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              How you respond to a negative review matters more than the review itself. Google and potential
              customers both read the response, not just the complaint. A defensive or generic reply (&ldquo;Sorry
              to hear that, please contact us&rdquo;) confirms the bad impression. A specific, calm, solution-focused
              reply often does more to win back trust than the original review did to lose it.
            </p>
            <p>
              Epicware&apos;s AI Review Response reads the specific complaint in each negative review and drafts a
              reply that addresses what the reviewer actually said — not a templated apology. You can publish it
              as-is or edit it before it goes live. For reviews that aren&apos;t a genuine complaint but a policy
              violation (fake reviews, spam, reviews from someone who was never a customer), that&apos;s a removal
              case rather than a response case — see{" "}
              <Link href="/locations/singapore/review-removal" className="text-primary font-medium hover:underline">
                Bad Review Removal
              </Link>{" "}
              for how Epicware handles those.
            </p>
            <p>
              Multi-outlet businesses face this at scale — a negative review can land on any of several Google
              Business Profiles at any time. Epicware&apos;s real-time monitoring means a negative review triggers
              an alert the moment it&apos;s posted, so a response goes out within hours rather than being discovered
              days later during a manual check.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Our Services */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Our Reputation Management Services
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              See{" "}
              <Link href="/blog/reputation-management-services-singapore" className="text-primary font-medium hover:underline">
                what&apos;s included in reputation management
              </Link>{" "}
              for a full breakdown. Epicware&apos;s reputation suite covers the full picture. Review Management
              is the foundation — real-time monitoring across all your Google Business Profiles so you never miss a review,
              with instant alerts and a centralised inbox for every outlet you manage. Our{" "}
              <Link href="/services/review-management/review-generation" className="text-primary font-medium hover:underline">
                Google reviews service
              </Link>{" "}
              runs generation, monitoring, and AI responses from one dashboard.
            </p>
            <p>
              Once a review comes in,{" "}
              <Link href="/services/review-management/ai-review-response" className="text-primary font-medium hover:underline">
                AI Review Response
              </Link>{" "}
              generates a personalised reply that sounds like you wrote it — not a copy-paste template. The AI reads
              the reviewer&apos;s words, references the specific experience they described, and creates a response that
              is on-brand, human, and ready to publish in seconds. Epicware connects to all your Google Business Profiles
              via API and monitors every incoming review in real time. New reviews trigger an alert to your dashboard and
              optionally to your email or WhatsApp. You can approve with one click or let the platform auto-publish.
            </p>
            <p>
              For reviews that cross the line into fake, malicious, or policy-violating territory, Epicware offers the only
              productised{" "}
              <Link href="/locations/singapore/review-removal" className="text-primary font-medium hover:underline">
                Bad Review Removal
              </Link>{" "}
              service in Singapore. We identify the specific Google content policy violation, submit a formal removal request
              through the correct channels, and escalate if the first request is rejected. You pay $200 per review, charged
              upfront — refunded in full if it isn&apos;t removed within 3 months. Zero retainer.
            </p>
            <p>
              On the proactive side,{" "}
              <Link href="/services/review-management/review-generation" className="text-primary font-medium hover:underline">
                Review Generation Campaigns
              </Link>{" "}
              automate the ask. The platform sends personalised WhatsApp and email messages to your customers after a visit or
              purchase — at exactly the right time, when the experience is still fresh, triggered after a visit or purchase.
            </p>
            <p>
              Once you have strong reviews, put them to work. The{" "}
              <Link href="/services/review-management/review-widgets" className="text-primary font-medium hover:underline">
                Wall of Love (Review Widgets)
              </Link>{" "}
              feature automatically pulls your best Google reviews onto your website — no manual updates, always live.
              Finally,{" "}
              <Link href="/services/review-management/reputation-analytics" className="text-primary font-medium hover:underline">
                Reputation Analytics Dashboard
              </Link>{" "}
              gives you a live view of review velocity, rating trends, response rates, and how you compare against
              competitors in your district — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* H2: For Singapore */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Reputation Management for Singapore Businesses
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Singapore&apos;s geography creates a reputation dynamic unlike any other market. The city is dense. A single
              1-star review is visible to every potential customer within a 1km radius — an entire HDB estate, a whole
              commercial block. One unfair review can reach thousands of people who search for your category
              in Tampines, Jurong, Ang Mo Kio, or Clementi without you ever knowing it happened.
            </p>
            <p>
              Multi-outlet businesses face the biggest challenge. F&amp;B groups running three to ten restaurants, salon chains
              across multiple districts, and clinic networks managing several branches — each with its own Google Business
              Profile, its own reviews, and its own reputation risks. Epicware was built specifically for this. A single
              dashboard manages every outlet simultaneously, with individual analytics per location and unified campaigns
              that run across all of them at once.
            </p>
            <p>
              The{" "}
              <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                EpicReview product
              </Link>{" "}
              is the technology layer behind these services — the same software our team uses to run your reputation management every day.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Why Choose Us */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Choose Epicware for Reputation Management
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is an SEO agency with its own software. That matters because most agencies sell time — their
              time. They log in, make manual changes, and send you a monthly report. Epicware&apos;s team runs your
              reputation management on the live dashboard we built ourselves, automatically, 24 hours a day, whether
              you are at your outlet or not. Reputation is one part of{" "}
              <Link href="/locations/singapore/seo" className="text-primary font-medium hover:underline">
                SEO agency Singapore
              </Link>{" "}
              services covering Search, Maps, and AI visibility too.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in
              GMV before its 2021 exit. We are operators who have managed reputations for restaurants, clinics, salons,
              and tuition centres across Singapore. No waiting for someone else&apos;s team — our own team runs it.
              And if you are worried about a specific bad review right now — our removal service guarantees
              a full refund if it isn&apos;t removed within 3 months.{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                Epicware, a digital marketing agency in Singapore
              </Link>
              , covers all of it.
            </p>
            <p>
              Also an SEO agency with its own software: no hourly billing, no waiting on someone else&apos;s team, no
              monthly report that is already out of date. You log in, you see your data, you take action.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <ServicesGrid
        heading="All Reputation Management Services"
        services={CHILD_SERVICES}
      />

      {/* Cross-link to core Bad Review Removal service */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-base text-muted-foreground">
            Looking for Bad Review Removal specifically? See{" "}
            <Link href="/locations/singapore/review-removal" className="text-primary font-medium hover:underline">
              Bad Review Removal Singapore
            </Link>{" "}
            — $200/review, refunded if not removed within 3 months.
          </p>
          <p className="text-base text-muted-foreground mt-3">
            Reputation and reviews work hand in hand with{" "}
            <Link href="/locations/singapore/google-business-profile" className="text-primary font-medium hover:underline">
              Google Business Profile optimisation
            </Link>{" "}
            — a well-ranked profile gets more of the review traffic worth protecting.
          </p>
        </div>
      </section>

      <MoneyPageLinkRings countrySlug="singapore" serviceSlug="review-management" h1="Reputation Management in Singapore — Protect Your Rating, Own Your Reviews" isSingapore />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
