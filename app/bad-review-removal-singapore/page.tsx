import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Bad Review Removal Singapore — $200/Review, Pay on Success | Epicware",
  description:
    "Remove fake, malicious, or policy-violating Google reviews. Singapore's only fixed-price bad review removal service. $200/review. Pay only when it's gone.",
  alternates: { canonical: "https://www.epicware.ai/bad-review-removal-singapore" },
  openGraph: {
    title: "Bad Review Removal Singapore — $200/Review, Pay on Success | Epicware",
    description:
      "Remove fake, malicious, or policy-violating Google reviews. $200/review. Pay only when it's gone.",
    url: "https://www.epicware.ai/bad-review-removal-singapore",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bad Review Removal Singapore",
  serviceType: "Bad Review Removal",
  description:
    "Remove fake, malicious, or policy-violating Google reviews from your Singapore business profile. $200 per review, pay on success only.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  url: "https://epicware.ai/bad-review-removal-singapore",
};

const CHILD_SERVICES = [
  {
    name: "Fake Review Removal",
    href: "/bad-review-removal-singapore/fake-review-removal",
    description:
      "Remove reviews posted by competitors, bots, or non-customers. Coordinated fake review attacks handled with batch removal requests.",
  },
  {
    name: "Unfair Review Removal",
    href: "/bad-review-removal-singapore/unfair-review-removal",
    description:
      "Challenge ex-employee attacks, dispute-motivated 1-star reviews, and reviews containing false factual claims.",
  },
  {
    name: "Google Review Removal Policy",
    href: "/bad-review-removal-singapore/google-review-removal-policy",
    description:
      "Understand exactly which reviews qualify for removal under Google's content policies — and get a free assessment before any payment.",
  },
];

export default function BadReviewRemovalSingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="BAD REVIEW REMOVAL · SINGAPORE"
        h1="Bad Review Removal Singapore — $200 Per Review, Pay on Success"
        subtitle="One fake review from a competitor or a disgruntled non-customer can drop your Google rating below 4.0 and cost you thousands in lost business. Epicware removes it. If the review stays up, you pay nothing."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "$200/Review · Pay on Success",
          "Singapore-Built",
          "Removal Initiated Within 24 Hours",
          "500+ Outlets Protected",
        ]}
        imageSrc="/assets/review-management-illustration.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Singapore businesses face a unique problem: their entire local customer base is concentrated in a few square
            kilometres. One bad review is visible to every potential customer in your district. A competitor with a grudge,
            a non-customer who got the wrong business, or a review that violates Google&apos;s content policies can sit on
            your profile for months unless you know exactly how to challenge it. Most SMB owners try the flag button, get a
            generic rejection, and give up. Epicware doesn&apos;t give up. We submit the policy violation with the correct
            legal and procedural framing, escalate through the right channels, and keep following up until the review is
            removed or Google gives a final ruling.
          </p>
        </div>
      </section>

      {/* Which Reviews Qualify */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Which Reviews Qualify for Removal</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>Not every negative review can be removed. The process works for:</p>
            <ul className="space-y-2">
              <li><strong>Fake reviews</strong> posted by competitors, strangers, or bots with no real customer relationship</li>
              <li><strong>Malicious reviews</strong> from ex-employees, disputed business relationships, or targeted harassment campaigns</li>
              <li><strong>Policy-violating reviews</strong> containing personal attacks, offensive language, spam, or false factual claims</li>
              <li><strong>Misattributed reviews</strong> left on the wrong business profile by a customer who confused two locations</li>
            </ul>
            <p>
              If a review is simply negative but genuine — a real customer who had a bad experience and is entitled to their
              opinion — it will not qualify for removal. Epicware&apos;s first step is a free assessment to identify which
              reviews are removable before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* How Epicware Removes Bad Reviews */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Removes Bad Reviews</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <ol className="space-y-4 list-decimal list-inside">
              <li><strong>Assessment</strong> — we review the flagged review, identify the specific Google policy violation, and confirm eligibility</li>
              <li><strong>Submission</strong> — we submit a formal removal request through Google&apos;s business channels with the correct violation framing</li>
              <li><strong>Escalation</strong> — if the first request is rejected, we escalate through additional channels and re-submit with supplementary evidence</li>
              <li><strong>Follow-through</strong> — we track the case until Google issues a final resolution. If the review is removed, you are invoiced $200. If it stays up, you pay nothing.</li>
            </ol>
            <p>
              Timeline: removal is typically initiated within 24 hours of submission. Resolution time varies depending on
              Google&apos;s review cycle, but most cases are resolved within 7–21 days.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              <strong>$200 per review, pay on success only.</strong> There are no upfront fees, no retainers, no monthly
              subscriptions. You only pay when a review is successfully removed. If Google rejects the removal request and
              we exhaust all escalation paths, you pay nothing. For businesses with multiple reviews to challenge, we assess
              each one individually. See full platform pricing at{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
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
              already out of date. You log in, you see your data, you take action.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in GMV
              before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US.
            </p>
            <p>
              Bad Review Removal is the only service of its kind in Singapore with a success-only payment model. No other
              platform or agency offers this guarantee. See the full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Bad Review Removal */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground text-center mb-10">Types of Bad Review Removal</h2>
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

      {/* Related guide */}
      <section className="py-10 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Read our complete guide:{" "}
            <Link href="/resources/guides/bad-review-removal-guide" className="text-primary font-medium hover:underline">
              How to Remove Bad Google Reviews in Singapore →
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
