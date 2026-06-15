import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "EpicEngage — Email Marketing for Singapore SMBs | Epicware",
  description:
    "Automated email campaigns that turn one-time customers into regulars. EpicEngage is built for Singapore local businesses — no agency, no retainer.",
  alternates: { canonical: "https://www.epicware.ai/products/epicengage" },
  openGraph: {
    title: "EpicEngage — Turn One-Time Customers Into Regulars | Epicware",
    description:
      "Getting a new customer costs 5x more than keeping an existing one. EpicEngage keeps your best customers coming back automatically.",
    url: "https://www.epicware.ai/products/epicengage",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EpicEngage by Epicware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Email marketing automation software for Singapore SMBs. Runs automated post-visit follow-up emails, win-back campaigns, review requests, and re-engagement sequences based on customer behaviour.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SGD",
    description: "See pricing at epicware.ai/pricing",
  },
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  url: "https://www.epicware.ai/products/epicengage",
};

const FEATURES = [
  {
    name: "Drag-and-Drop Builder",
    description:
      "Design email campaigns visually without any technical knowledge — templates included for every use case.",
  },
  {
    name: "Behavioural Triggers",
    description:
      "Emails fire automatically based on customer behaviour — visit frequency, purchase recency, or inactivity windows.",
  },
  {
    name: "Audience Segmentation",
    description:
      "Separate campaigns for single-outlet customers vs multi-visit regulars, by location, by spend level.",
  },
  {
    name: "Win-Back Sequences",
    description:
      "Automated re-engagement campaigns for customers who have not returned in 30, 60, or 90 days — with personalised offers.",
  },
  {
    name: "Campaign Analytics",
    description:
      "Open rates, click rates, and revenue attribution per campaign — see what is driving return visits.",
  },
  {
    name: "Review Request Integration",
    description:
      "Post-visit emails connect directly to EpicReview&apos;s review request flow — one action serves two purposes.",
  },
];

export default function EpicEngagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICENGAGE · EMAIL MARKETING"
        h1="EpicEngage — Email Marketing for Singapore SMBs"
        subtitle={
          <>
            Getting a new customer costs five times more than keeping an existing one. EpicEngage
            runs automated email campaigns that bring your best customers back — triggered by
            behaviour, personalised by data, running without you having to touch anything.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Singapore-Built",
          "AI-Native",
          "No Agency Retainer",
          "Behaviour-Triggered",
        ]}
        imageSrc="/assets/how-it-works-campaigns.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most Singapore SMBs invest everything in getting customers through the door and almost
            nothing in keeping them. A customer who visited once and had a great experience is the
            easiest person to bring back — but without a system, they drift. Life moves on, they
            try someone else, and they never return. EpicEngage plugs that gap. It connects to your
            customer data and runs email sequences that feel personal, arrive at the right time,
            and bring customers back without anyone on your team having to remember to send anything.
          </p>
        </div>
      </section>

      {/* What EpicEngage Does */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What EpicEngage Does</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicEngage connects to your customer data and triggers email sequences based on
              behaviour. A post-visit thank-you that arrives 30 minutes after a customer leaves —
              and asks for a Google review at the moment they are most likely to leave one. A
              win-back campaign that fires after 60 days of no activity, with a personalised offer
              that gives them a reason to return. A birthday email that lands on the right day.
              A re-engagement sequence for customers who have not opened your emails in 90 days.
            </p>
            <p>
              The drag-and-drop campaign builder lets you design these flows once. EpicEngage
              handles the sending, timing, personalisation, and tracking automatically. Singapore
              customers have high email open rates on warm lists — businesses running EpicEngage
              regularly see 30–40% open rates and measurable increases in return visit frequency
              within the first 90 days.
            </p>
            <p>
              EpicEngage works alongside{" "}
              <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                EpicReview
              </Link>{" "}
              — post-visit emails can simultaneously request a review and include a retention offer,
              so one email serves two purposes and compounds your results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How It Connects to the Rest of Epicware</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicEngage is the customer retention layer of the Epicware platform. It works best
              when combined with{" "}
              <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                EpicReview
              </Link>{" "}
              for review generation and{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                EpicMap
              </Link>{" "}
              for rank tracking — because more return visits generate more reviews, which improve
              rank, which drives more new customers. The loop compounds.
            </p>
            <p>
              EpicEngage sits inside Epicware&apos;s{" "}
              <Link href="/growth-tools" className="text-primary font-medium hover:underline">
                Growth Tools
              </Link>{" "}
              service category alongside the Website SEO Builder and EpicSocial. See the full{" "}
              <Link
                href="/growth-tools/epicengage-email-marketing"
                className="text-primary font-medium hover:underline"
              >
                EpicEngage Email Marketing
              </Link>{" "}
              service page for the full capability breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EpicEngage is available on the Foundation plan and above. See the full breakdown at{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              epicware.ai/pricing
            </Link>
            . No setup fees. Cancel anytime. Contact limits and audience segmentation depth
            vary by plan.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Ready to see EpicEngage on your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll show you EpicEngage running on real customer data.
            No slides. Just your retention opportunity, made visible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book My Free Demo →
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Start with a free audit
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
