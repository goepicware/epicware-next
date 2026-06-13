import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "EpicReview — Review Management & Bad Review Removal Singapore | Epicware",
  description:
    "Generate more Google reviews, respond automatically, and remove fake or unfair ones. EpicReview manages your reputation 24/7 for Singapore SMBs.",
  alternates: { canonical: "https://www.epicware.ai/products/epicreview" },
  openGraph: {
    title: "EpicReview — More Reviews, Better Responses, Bad Ones Removed | Epicware",
    description:
      "Your Google rating is your most visible trust signal. EpicReview automates the good and fights the bad — so you don't have to.",
    url: "https://www.epicware.ai/products/epicreview",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EpicReview by Epicware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Review management software for Singapore SMBs. Automates review requests over WhatsApp and email, generates AI review responses, monitors all outlets in real time, and removes fake or unfair Google reviews.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SGD",
    description: "See pricing at epicware.ai/pricing. Bad Review Removal: $200/review, pay on success.",
  },
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  url: "https://www.epicware.ai/products/epicreview",
};

const FEATURES = [
  {
    name: "Review Request Campaigns",
    description:
      "Automated WhatsApp and email sequences timed for peak response — triggered after a visit, order, or appointment.",
  },
  {
    name: "AI Review Responses",
    description:
      "Personalised, brand-consistent replies generated for every review — post automatically or with a single approval click.",
  },
  {
    name: "Multi-Outlet Monitoring",
    description:
      "Real-time alerts across all your GBP profiles in one dashboard — no logging into five different accounts.",
  },
  {
    name: "Bad Review Removal ⭐",
    description:
      "$200/review, pay on success only. Policy-based removal of fake, competitor-posted, or guideline-violating reviews.",
  },
  {
    name: "Review Analytics",
    description:
      "Track review velocity, rating trends, and sentiment over time — see what is working and where to focus.",
  },
  {
    name: "Wall of Love Widget",
    description:
      "Embed your Google reviews on your website automatically — updated in real time as new reviews come in.",
  },
];

export default function EpicReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICREVIEW · REPUTATION MANAGEMENT"
        h1="EpicReview — More Reviews, Better Responses, Bad Ones Removed"
        subtitle={
          <>
            Your Google rating is the most visible trust signal a potential customer sees before
            they click. EpicReview automates review generation, responds to every review with AI,
            and removes the fake or unfair ones dragging your rating down.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Singapore-Built",
          "AI-Native",
          "Pay $0 If Review Stays Up",
          "500+ Outlets Managed",
        ]}
        imageSrc="/assets/epicreview-screen.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In Singapore&apos;s dense market, your Google rating is the first thing a stranger judges
            you by before they have ever visited. A competitor across the street with 180 reviews
            and a 4.8 star rating will win the click over a business with 23 reviews and a 3.9
            — every time. EpicReview manages the full review lifecycle. It generates new reviews
            through automated WhatsApp and email campaigns, responds to every review with
            AI-personalised replies, monitors all your outlets in real time, and removes the
            reviews that should not be there.
          </p>
        </div>
      </section>

      {/* Bad Review Removal highlight */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-primary fill-primary" />
              <h2 className="font-display text-foreground text-xl font-bold">
                Bad Review Removal — $200/review, Pay on Success Only
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is EpicReview&apos;s unique differentiator. No other platform in Singapore offers
              productised bad review removal at a fixed price with success-only payment. We submit
              policy-violation flags to Google, escalate unresponsive cases, and follow through
              until the review is removed. If the review stays up, you pay nothing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Eligible reviews include: fake reviews from competitors, reviews that violate
              Google&apos;s content policies, reviews posted by people who never visited, and reviews
              containing false factual claims. See the full service at{" "}
              <Link
                href="/bad-review-removal-singapore"
                className="text-primary font-medium hover:underline"
              >
                Bad Review Removal Singapore
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What EpicReview Does */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What EpicReview Does</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicReview runs automated review request campaigns over WhatsApp and email. Each
              request is personalised with the customer&apos;s name and triggered at the moment they
              are most likely to respond — after a visit, after an appointment, after a completed
              order. Timing is everything. A review request sent 30 minutes after a great experience
              converts far better than one sent three days later.
            </p>
            <p>
              When reviews come in, EpicReview&apos;s AI reads the content and generates a personalised
              response that acknowledges the specific points the customer mentioned, matches your
              brand voice, and encourages repeat visits. You can auto-post or approve with one click.
              Across multiple outlets, this means no review goes unanswered — which is a positive
              signal to Google and a visible trust indicator to anyone reading your profile.
            </p>
            <p>
              For fake, unfair, or policy-violating reviews, EpicReview&apos;s{" "}
              <Link
                href="/reputation-management-singapore/bad-review-removal"
                className="text-primary font-medium hover:underline"
              >
                Bad Review Removal
              </Link>{" "}
              service handles the submission, escalation, and follow-up. $200 per review removed.
              You pay only on success.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Customer scans your QR",
                description:
                  "A branded standee at the table or counter captures them at peak happiness — right after a great experience. No staff involvement needed.",
                image: "/assets/how-it-works-scan-qr.png",
                alt: "Branded QR standee at restaurant table for review collection",
              },
              {
                step: 2,
                title: "Smart filter routes the review",
                description:
                  "Happy customers go straight to Google. Unhappy ones are caught privately — protecting your public rating automatically.",
                image: "/assets/epicreview-screen.png",
                alt: "EpicReview smart filter routing happy and unhappy customers",
              },
              {
                step: 3,
                title: "Reward brings them back",
                description:
                  "A gamified spin-the-wheel reward makes reviewing fun — and drives repeat visits through earned vouchers.",
                image: "/assets/how-it-works-spin.png",
                alt: "Spin the wheel gamification reward screen",
              },
            ].map(({ step, title, description, image, alt }) => (
              <div key={step} className="rounded-2xl border border-border/60 bg-card overflow-hidden flex flex-col">
                <div className="bg-muted/40 flex items-center justify-center p-6 min-h-[240px]">
                  <Image
                    src={image}
                    alt={alt}
                    width={280}
                    height={220}
                    className="max-h-[220px] w-auto object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shrink-0">
                    {step}
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 lg:py-14 section-gradient-1">
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
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How It Connects to the Rest of Epicware</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicReview sits at the heart of Epicware&apos;s{" "}
              <Link
                href="/reputation-management-singapore"
                className="text-primary font-medium hover:underline"
              >
                Reputation Management
              </Link>{" "}
              service category. Reviews generated by EpicReview feed directly into{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                EpicMap
              </Link>
              &apos;s rank tracking — more reviews improve your Google Maps rank, and EpicMap
              shows you the rank movement week by week.
            </p>
            <p>
              After EpicReview brings a customer back through a review interaction,{" "}
              <Link href="/products/epicengage" className="text-primary font-medium hover:underline">
                EpicEngage
              </Link>{" "}
              handles the email follow-up that keeps them returning. The full{" "}
              <Link
                href="/review-management-singapore"
                className="text-primary font-medium hover:underline"
              >
                Review Management Singapore
              </Link>{" "}
              service page covers the hands-on service component for businesses that need help
              beyond the self-serve platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EpicReview is available on the Foundation plan and above. See the full breakdown at{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              epicware.ai/pricing
            </Link>
            . No setup fees. Cancel anytime.{" "}
            <strong className="text-foreground">
              Bad Review Removal is $200/review — you pay only when the review is successfully removed.
            </strong>{" "}
            No monthly retainer. No hidden fees.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Ready to see EpicReview on your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll run EpicReview live on your actual GBP profile.
            No slides. Just your data, your reviews, your rating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
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
