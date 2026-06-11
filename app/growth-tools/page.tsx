import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Business Growth Tools Singapore — Email, Social & SEO in One Platform | Epicware",
  description:
    "EpicEngage email marketing, EpicSocial scheduling & Website SEO Builder — all inside Epicware. Convert local visibility into loyal customers. Start free.",
  alternates: { canonical: "https://www.epicware.ai/growth-tools" },
  openGraph: {
    title: "Growth Tools for Singapore Businesses | Epicware",
    description:
      "Getting found is step one. Epicware's Growth Tools — email marketing, social scheduling & website SEO — convert local visibility into repeat customers.",
    url: "https://www.epicware.ai/growth-tools",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Growth Tools Singapore",
  serviceType: "Marketing & Growth Software",
  description:
    "Business growth software for Singapore SMBs. Includes Website SEO Builder, EpicEngage email marketing automation, and EpicSocial social media post scheduling.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  areaServed: { "@type": "City", name: "Singapore" },
  url: "https://www.epicware.ai/growth-tools",
};

const CHILD_SERVICES = [
  {
    name: "Website SEO Builder",
    href: "/growth-tools/website-seo-builder",
    description:
      "Build a search-optimised website or fix the one you have. The SEO Builder handles meta tags, page structure, schema markup, and local keyword placement automatically.",
  },
  {
    name: "EpicEngage Email Marketing",
    href: "/growth-tools/epicengage-email-marketing",
    description:
      "Automated email sequences that bring customers back. Post-visit follow-ups, review requests, promotions, and re-engagement campaigns — all triggered by customer behaviour.",
  },
  {
    name: "EpicSocial Social Scheduling",
    href: "/growth-tools/epicsocial-social-scheduling",
    description:
      "AI-generated social media posts built from your Google Business Profile data. Scheduled and posted to Facebook and Instagram automatically — zero manual effort required.",
  },
];

export default function GrowthToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="GROWTH TOOLS · SINGAPORE"
        h1="Growth Tools for Singapore Businesses — From Discovery to Loyal Customers"
        subtitle={
          <>
            Getting found on Google Maps is only half the job. The other half is converting new visitors
            into returning customers. Epicware&apos;s Growth Tools — email marketing, social scheduling,
            and website SEO — run inside the same platform as your reviews and rankings, so nothing slips through the gaps.
            Call <a href="tel:+6590013157" className="underline font-semibold">+65 9001 3157</a> or book a demo to see it live.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Get Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Email · Social · SEO in One Platform",
          "No Extra Subscriptions",
          "Singapore-Built",
          "No Agency Retainers",
        ]}
        overlayClass="bg-gradient-to-r from-black/80 via-black/60 to-black/35"
        imageSrc="/assets/revenue-source-hero.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most SMBs invest everything in getting discovered and nothing in what happens after.
            No email follow-up when a customer visits. No social posts between the times a staff member
            remembers. No SEO on the website that is supposed to convert the traffic their Google profile
            attracts. The result is a leaky bucket — you are constantly spending effort to fill it with
            new customers while existing ones leave without a reason to return. Epicware&apos;s Growth Tools
            plug those gaps. They work inside the same platform as your Local SEO and reputation management
            — because those three things together, running in parallel, are what actually compounds growth.
          </p>
        </div>
      </section>

      {/* H2: What problems */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            What Growth Problems Are You Facing?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The most common growth problem for Singapore SMBs is customer retention. Acquisition is
              expensive — whether through ads, promotions, or time spent on local SEO. Once you get a
              customer through the door, keeping them should cost almost nothing. But without a system,
              most customers just drift. They had a great experience, and then life moved on and they
              went somewhere else next time simply because they forgot about you.
            </p>
            <p>
              The second problem is an outdated or SEO-empty website. Many SMBs have a website that was
              built once and never touched. No local keywords. No schema markup. No meta descriptions.
              The site exists, but it does not rank and it does not convert. A Google Business Profile
              sends traffic to a website — and if that website does not make a strong impression quickly,
              the customer bounces and the GBP traffic is wasted.
            </p>
            <p>
              The third problem is inconsistent social media. Every business knows they should post
              regularly, and most do not because it takes time and creative energy that busy operators
              simply do not have. Months go by without a post, customers assume the business is quiet
              or has closed, and the algorithm stops showing the page to followers entirely.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Our Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Our Growth Tools
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The{" "}
              <Link href="/growth-tools/website-seo-builder" className="text-primary font-medium hover:underline">
                Website SEO Builder
              </Link>{" "}
              handles the technical and on-page SEO that most SMB websites are missing. It generates
              meta titles and descriptions, adds local schema markup, structures headings around the
              keywords your customers are searching, and flags any technical issues slowing the site
              down. You do not need to be a web developer to use it — the platform walks you through
              every step and applies the changes directly. A well-optimised website works alongside
              your Google Business Profile to capture searchers at every stage of the decision process.
            </p>
            <p>
              For customer retention,{" "}
              <Link href="/growth-tools/epicengage-email-marketing" className="text-primary font-medium hover:underline">
                EpicEngage Email Marketing
              </Link>{" "}
              runs automated email sequences that trigger on customer behaviour. A post-visit email
              that thanks a customer and asks for a review. A win-back campaign for customers who
              have not returned in 60 days. A birthday promotion that lands on the right day without
              anyone having to remember to send it. EpicEngage connects with your customer data
              and runs these campaigns without manual input — so your retention system works
              even when your team is focused on running the business.
            </p>
            <p>
              For social media,{" "}
              <Link href="/growth-tools/epicsocial-social-scheduling" className="text-primary font-medium hover:underline">
                EpicSocial Social Scheduling
              </Link>{" "}
              generates posts automatically using your Google Business Profile data — your business
              category, your latest reviews, your promotions — and schedules them to Facebook and
              Instagram at the right frequency. You review and approve before anything goes out.
              No copywriting. No design time. No missed weeks. EpicSocial keeps your social
              presence alive without adding to your workload.
            </p>
          </div>
        </div>
      </section>

      {/* H2: For Singapore */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Growth Tools for Singapore SMBs
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Singapore customers are digitally active. WhatsApp open rates are among the highest
              in the world. Facebook and Instagram are used across age groups. Email marketing
              that would see 20% open rates elsewhere regularly achieves 30–40% with a warm
              customer list in Singapore. The engagement opportunity is there — it just needs a system.
            </p>
            <p>
              The businesses we see growing fastest in Singapore are not spending more on ads.
              They are working their existing customer base — email follow-ups, review requests,
              social engagement — in a systematic way. Epicware&apos;s Growth Tools make that
              systematic for SMBs serving customers in Singapore, Malaysia, UAE, UK, and the US.
              Everything runs from the same dashboard as your reviews and rankings — one platform,
              one login, full picture.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Why Choose Us */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Choose Epicware for Growth Tools
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The reason Epicware bundles growth tools with local SEO and reputation management
              is that they only fully work when they are connected. A strong Google rating drives
              more website visits — the Website SEO Builder converts those visits. A review request
              campaign generates reviews — EpicEngage follows up with those customers to bring them
              back. EpicSocial posts remind followers of the same quality you are showing on Google.
              Running these separately, across different tools and subscriptions, breaks the loop.
              Inside Epicware, they compound.
            </p>
            <p>
              No retainers. No agency. No waiting for someone else&apos;s team to make a change
              before a promotion launches. Self-serve means the platform moves at the speed of
              your business, not at the speed of someone else&apos;s schedule.{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                See the full Epicware platform
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="All Growth Tools"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
    </>
  );
}
