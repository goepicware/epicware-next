import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Review Management Singapore — Monitor & Respond | Epicware",
  description:
    "Real-time Google review monitoring, AI-powered responses, and automated review generation for Singapore SMBs. Manage all outlets from one dashboard.",
  alternates: { canonical: "https://www.epicware.ai/review-management-singapore" },
  openGraph: {
    title: "Review Management Singapore — Monitor, Respond & Generate Reviews | Epicware",
    description:
      "Real-time Google review monitoring, AI-powered responses, and automated review generation for Singapore SMBs.",
    url: "https://www.epicware.ai/review-management-singapore",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Management Singapore",
  serviceType: "Review Management",
  description:
    "Real-time Google review monitoring, AI-powered responses, and automated review generation for Singapore SMBs. Manage all outlets from one dashboard.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  url: "https://epicware.ai/review-management-singapore",
};

const CHILD_SERVICES = [
  {
    name: "Google Reviews",
    href: "/review-management-singapore/google-reviews",
    description:
      "Build your Google rating systematically — review generation, real-time monitoring, and AI responses across all your outlets.",
  },
  {
    name: "Negative Review Response",
    href: "/review-management-singapore/negative-review-response",
    description:
      "Turn bad reviews into trust signals with professional, AI-personalised responses that convert future readers.",
  },
  {
    name: "Review Monitoring",
    href: "/review-management-singapore/review-monitoring",
    description:
      "Never miss a review across any outlet. Real-time alerts via dashboard, email, or WhatsApp the moment a new review lands.",
  },
];

export default function ReviewManagementSingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="REVIEW MANAGEMENT · SINGAPORE"
        h1="Review Management Singapore — Monitor Every Review, Respond Instantly"
        subtitle="Singapore SMBs with multiple outlets are missing reviews, responding too slowly, and losing customers to competitors with better ratings. Epicware monitors every profile in real time and responds to every review automatically."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Real-Time Monitoring",
          "AI Review Responses",
          "Singapore-Built",
          "500+ Outlets Managed",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your Google reviews are live marketing material. Every response you give — or don&apos;t give — is visible
            to every future customer who reads your profile. Ignoring reviews, responding late, or copying the same generic
            &ldquo;sorry to hear that&rdquo; to every 1-star review signals to potential customers that your business
            doesn&apos;t care. Epicware solves all three problems at once. Real-time alerts so you never miss a review.
            AI-generated responses that sound personal and are ready to publish in seconds. Automated request campaigns
            that generate new reviews from your happiest customers.
          </p>
        </div>
      </section>

      {/* When You Need Review Management */}
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
              reviews within hours.
            </p>
          </div>
        </div>
      </section>

      {/* How Epicware Handles Review Management */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Handles Review Management</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware connects to all your Google Business Profiles via API and monitors every incoming review in real
              time. New reviews trigger an alert to your dashboard and optionally to your email or WhatsApp. The AI reads
              each review and drafts a personalised response based on the specific experience described, your business name,
              and your brand voice. You can approve with one click or let the platform auto-publish.
            </p>
            <p>
              Review generation campaigns run automatically via WhatsApp and email — triggered after a visit or purchase,
              at the moment a customer is most likely to respond. See also{" "}
              <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
                Reputation Management Singapore
              </Link>{" "}
              for the full reputation suite, and{" "}
              <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
                Bad Review Removal Singapore
              </Link>{" "}
              for reviews that need to come down.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Review Management is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
              No setup fees on Foundation plan. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Epicware */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Epicware — Not an Agency</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. Agencies sell their time. Epicware gives you a self-serve dashboard
              that runs automatically — no retainer, no waiting on someone else&apos;s team, no monthly report that is
              already out of date.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in GMV
              before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US. See the
              full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Child services */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground text-center mb-10">Review Management Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CHILD_SERVICES.map((service) => (
              <Link key={service.href} href={service.href} className="card-feature group block h-full">
                <div className="card-feature-inner p-7 flex flex-col gap-4 h-full">
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-3 border-t border-border/30">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
