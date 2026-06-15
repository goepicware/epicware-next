import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Growth Tools Singapore — Email, Social & SEO | Epicware",
  description:
    "Epicware's Growth Tools automate customer retention for Singapore SMBs — email campaigns, social scheduling, and website SEO. Keep customers coming back.",
  alternates: { canonical: "https://www.epicware.ai/growth-tools" },
  openGraph: {
    title: "Growth Tools Singapore — Email Marketing & Social Scheduling | Epicware",
    description:
      "Epicware's Growth Tools automate customer retention for Singapore SMBs — email campaigns, social scheduling, and website SEO.",
    url: "https://www.epicware.ai/growth-tools",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth Tools Singapore",
  serviceType: "Digital Growth Tools",
  description:
    "Email marketing automation, social media scheduling, and retention tools for Singapore SMBs. EpicEngage and EpicSocial products.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/growth-tools",
};

const CHILD_SERVICES = [
  {
    name: "EpicEngage Email Marketing",
    href: "/growth-tools/epicengage-email-marketing",
    description:
      "Automated email campaigns triggered by customer behaviour — post-visit review requests, win-back offers, birthday greetings. Set it up once, runs forever.",
  },
  {
    name: "EpicSocial Social Scheduling",
    href: "/growth-tools/epicsocial-social-scheduling",
    description:
      "AI-generated social posts scheduled across Facebook, Instagram, and GBP from one dashboard. A full week of content in one click.",
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
        h1="Growth Tools Singapore — Email Marketing, Social Scheduling & SEO"
        subtitle="Getting found is step one. Keeping customers is step two. Epicware's Growth Tools automate the retention layer — email campaigns, social scheduling, and website SEO — so your business keeps growing after customers find you."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Email Automation",
          "Social Scheduling",
          "Singapore-Built",
          "No Agency Retainer",
        ]}
        imageSrc="/assets/how-it-works-campaigns.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most Singapore SMBs focus entirely on acquisition — getting new customers through the door. But acquiring a new
            customer costs five times more than retaining an existing one. Epicware&apos;s Growth Tools close the retention
            gap: automated email campaigns that bring customers back, social scheduling that keeps your brand visible, and
            website SEO that converts the traffic you&apos;re already getting.
          </p>
        </div>
      </section>

      {/* Why Retention Matters */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Retention Beats Acquisition</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              A customer who visits your Singapore restaurant once and never returns is a failed acquisition.
              A customer who visits 10 times a year generates 10x the revenue from the same acquisition cost.
              In F&amp;B, wellness, beauty, and professional services — the sectors where Epicware operates —
              repeat customers are the foundation of a profitable business. The problem is that most SMBs have
              no systematic way to stay in contact with customers after their first visit.
            </p>
            <p>
              Email is the highest-ROI retention channel when done right. A well-timed, personalised email to a customer
              30 minutes after they leave your restaurant converts at 3–5x the rate of a cold campaign.
              Social presence keeps your business top of mind between visits. Both are manageable — if automated.
            </p>
          </div>
        </div>
      </section>

      {/* How the Growth Tools Work */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware&apos;s Growth Tools Work</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              <Link href="/growth-tools/epicengage-email-marketing" className="text-primary font-medium hover:underline">
                EpicEngage
              </Link>{" "}
              connects to your customer database and triggers email campaigns based on behaviour. Post-visit review
              requests. 60-day win-back offers. Birthday greetings. Re-engagement sequences for inactive subscribers.
              Configure the sequences once — the platform runs them automatically. Singapore businesses using EpicEngage
              typically see 30–40% open rates on warm lists. See also the{" "}
              <Link href="/products/epicengage" className="text-primary font-medium hover:underline">EpicEngage product page</Link>.
            </p>
            <p>
              <Link href="/growth-tools/epicsocial-social-scheduling" className="text-primary font-medium hover:underline">
                EpicSocial
              </Link>{" "}
              generates a full week of social content from your business data in one click. Posts are scheduled across
              Facebook, Instagram, and Google Business Profile simultaneously. Multi-outlet operators run different
              content schedules per location from one account. See also the{" "}
              <Link href="/products/epicsocial" className="text-primary font-medium hover:underline">EpicSocial product page</Link>.
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
              Growth Tools are available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
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
              already out of date. You log in, you see your data, you take action.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in
              GMV before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US. See the
              full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="All Growth Tools"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
