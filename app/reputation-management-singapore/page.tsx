import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Reputation Management Singapore — Grow Your Reviews | Epicware",
  description:
    "Singapore's only platform combining review generation, AI responses, bad review removal & analytics in one dashboard. Protect your Google rating. Start free.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore" },
  openGraph: {
    title: "Reputation Management Singapore | Epicware",
    description:
      "Generate more reviews, respond with AI, and remove bad ones — all from one self-serve platform built for Singapore SMBs.",
    url: "https://www.epicware.ai/reputation-management-singapore",
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
  url: "https://epicware.ai/reputation-management-singapore",
};

const CHILD_SERVICES = [
  {
    name: "Review Management",
    href: "/reputation-management-singapore/review-management",
    description:
      "Monitor every new review across all your outlets in real time. Get alerts the moment a review lands so you can respond before the damage spreads.",
  },
  {
    name: "AI Review Response",
    href: "/reputation-management-singapore/ai-review-response",
    description:
      "Generate personalised, on-brand replies to every review automatically. Stop copying and pasting the same generic response and start sounding human at scale.",
  },
  {
    name: "Bad Review Removal",
    href: "/reputation-management-singapore/bad-review-removal",
    description:
      "The only productised bad review removal service in Singapore. We identify policy violations, submit removal requests, and escalate. You pay $200 only if it comes down.",
  },
  {
    name: "Review Generation Campaigns",
    href: "/reputation-management-singapore/review-generation",
    description:
      "Automated WhatsApp and email campaigns that ask happy customers for reviews at exactly the right moment — after a visit, after an order, after a positive interaction.",
  },
  {
    name: "Wall of Love (Review Widgets)",
    href: "/reputation-management-singapore/review-widgets",
    description:
      "Display your best Google reviews on your website automatically. Turn social proof into conversion on every page a potential customer visits.",
  },
  {
    name: "Reputation Analytics Dashboard",
    href: "/reputation-management-singapore/reputation-analytics",
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
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Get Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "500+ Outlets Managed",
          "Bad Review Removal Guaranteed",
          "Singapore-Built",
          "Active in SG · MY · UAE · UK · US",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

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

      {/* H2: What problems */}
      <section className="py-10 lg:py-14 section-gradient-1">
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
          </div>
        </div>
      </section>

      {/* H2: Our Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Our Reputation Management Services
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware&apos;s reputation suite covers the full picture.{" "}
              <Link href="/reputation-management-singapore/review-management" className="text-primary font-medium hover:underline">
                Review Management
              </Link>{" "}
              is the foundation — real-time monitoring across all your Google Business Profiles so you never miss a review,
              with instant alerts and a centralised inbox for every outlet you manage.
            </p>
            <p>
              Once a review comes in,{" "}
              <Link href="/reputation-management-singapore/ai-review-response" className="text-primary font-medium hover:underline">
                AI Review Response
              </Link>{" "}
              generates a personalised reply that sounds like you wrote it — not a copy-paste template. The AI reads
              the reviewer&apos;s words, references the specific experience they described, and creates a response that
              is on-brand, human, and ready to publish in seconds.
            </p>
            <p>
              For reviews that cross the line into fake, malicious, or policy-violating territory, Epicware offers the only
              productised{" "}
              <Link href="/reputation-management-singapore/bad-review-removal" className="text-primary font-medium hover:underline">
                Bad Review Removal
              </Link>{" "}
              service in Singapore. We identify the specific Google content policy violation, submit a formal removal request
              through the correct channels, and escalate if the first request is rejected. You pay $200 per review — but only
              if the review is successfully removed. Zero risk. Zero retainer.
            </p>
            <p>
              On the proactive side,{" "}
              <Link href="/reputation-management-singapore/review-generation" className="text-primary font-medium hover:underline">
                Review Generation Campaigns
              </Link>{" "}
              automate the ask. The platform sends personalised WhatsApp and email messages to your customers after a visit or
              purchase — at exactly the right time, when the experience is still fresh.
            </p>
            <p>
              Once you have strong reviews, put them to work. The{" "}
              <Link href="/reputation-management-singapore/review-widgets" className="text-primary font-medium hover:underline">
                Wall of Love (Review Widgets)
              </Link>{" "}
              feature automatically pulls your best Google reviews onto your website — no manual updates, always live.
              Finally,{" "}
              <Link href="/reputation-management-singapore/reputation-analytics" className="text-primary font-medium hover:underline">
                Reputation Analytics Dashboard
              </Link>{" "}
              gives you a live view of review velocity, rating trends, response rates, and how you compare against
              competitors in your district — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* H2: For Singapore */}
      <section className="py-10 lg:py-14 section-gradient-1">
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
              that run across all of them at once. Businesses we serve span Singapore, Malaysia, UAE, UK, and the US.
            </p>
            <p>
              The{" "}
              <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                EpicReview product
              </Link>{" "}
              is the technology layer behind these services — a self-serve platform you can access directly without any agency involvement.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Why Choose Us */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Choose Epicware for Reputation Management
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. That matters because agencies sell time — their time. They log in,
              make manual changes, and send you a monthly report. Epicware gives you a self-serve dashboard that runs
              your reputation management automatically, 24 hours a day, whether you are at your outlet or not.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in
              GMV before its 2021 exit. We are operators who have managed reputations for restaurants, clinics, salons,
              and tuition centres across Singapore. No retainers. No waiting for someone else&apos;s team. Just a platform
              that works. And if you are worried about a specific bad review right now — our removal service guarantees
              you pay nothing unless it is gone.{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                See the full Epicware platform
              </Link>
              .
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
            <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
              Bad Review Removal Singapore
            </Link>{" "}
            — $200/review, pay on success.
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
