import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Epicware Reseller Programme — Partner Revenue Share | Epicware",
  description: "Become an Epicware reseller. Offer Local SEO, reputation management, and bad review removal under your brand or Epicware's. Tiered revenue share. SG partners welcome.",
  alternates: { canonical: "https://www.epicware.ai/reseller" },
  openGraph: {
    title: "Epicware Reseller Programme — Partner Revenue Share",
    description: "Become an Epicware reseller. Offer Local SEO, reputation management, and bad review removal under your brand or Epicware's. Tiered revenue share. SG partners welcome.",
    url: "https://www.epicware.ai/reseller",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Epicware Reseller Programme",
  "description": "Reseller and white-label partner programme for agencies, consultants, and business networks. Tiered revenue share on all Epicware products.",
  "provider": {
    "@type": "Organization",
    "name": "Epicware Pte. Ltd.",
    "url": "https://epicware.ai"
  },
  "areaServed": ["SG", "MY", "AE", "GB", "US"],
  "url": "https://epicware.ai/reseller"
};

const tiers = [
  {
    name: "Partner",
    requirement: "1–5 active clients",
    revShare: "20%",
    includes: ["Access to full platform", "Co-branded materials", "Partner dashboard", "Email support"],
  },
  {
    name: "Silver",
    requirement: "6–15 active clients",
    revShare: "25%",
    includes: ["Everything in Partner", "Dedicated account manager", "Priority support", "Co-sell opportunities"],
  },
  {
    name: "Gold",
    requirement: "16+ active clients",
    revShare: "30%",
    includes: ["Everything in Silver", "White-label option", "Custom onboarding materials", "Joint marketing"],
  },
];

const eligiblePartners = [
  "Digital marketing agencies serving Singapore or Asian SMBs",
  "Local SEO consultants and freelancers",
  "Business associations and chamber of commerce networks",
  "Accounting and financial advisory firms with SMB clients",
  "Restaurant management software companies and hospitality consultants",
];

const resellableProducts = [
  { name: "EpicReview", description: "Automated WhatsApp and email review generation campaigns" },
  { name: "EpicResponse", description: "AI review response across all client locations" },
  { name: "EpicMap", description: "Hyperlocal Google Maps rank tracking" },
  { name: "Bad Review Removal", description: "$200/review, pay on success — share the margin with your client or pass through at cost" },
  { name: "GBP Optimisation", description: "19-point Google Business Profile audit and implementation" },
  { name: "EpicSocial", description: "Social media content management for local businesses" },
];

export default function ResellerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <CategoryHero
        badge="RESELLER PROGRAMME · EPICWARE"
        h1="Become an Epicware Reseller — Revenue Share for Partners"
        subtitle="Agencies, consultants, and business networks that serve Singapore or Asian SMBs can resell Epicware under their own brand or ours. Tiered revenue share. No inventory. No fulfilment."
        ctaPrimary={{ label: "Apply to Become a Reseller", href: "/contact" }}
        ctaSecondary={{ label: "Book a Partner Demo", href: "/book-demo" }}
        trustSignals={["Tiered Revenue Share", "White-Label Available", "Singapore-Built", "Active in SG · MY · UAE · UK · US"]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Who the programme is for */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            WHO QUALIFIES
          </div>
          <h2 className="font-display font-bold text-foreground mb-4 leading-tight">Who the Reseller Programme Is For</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">The programme is open to any organisation that regularly works with SMB clients who could benefit from Local SEO or Reputation Management services.</p>
          <ul className="space-y-3">
            {eligiblePartners.map((partner, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold text-sm mt-0.5">→</span>
                <span className="text-foreground text-sm">{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you can resell */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            PRODUCTS
          </div>
          <h2 className="font-display font-bold text-foreground mb-8 leading-tight">What You Can Resell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resellableProducts.map((product) => (
              <div key={product.name} className="rounded-xl border border-border/60 bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Share Model */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            PRICING
          </div>
          <h2 className="font-display font-bold text-foreground mb-8 leading-tight">Revenue Share Model</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Tier</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Active Clients</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Revenue Share</th>
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-6 py-4 font-semibold text-foreground">{tier.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{tier.requirement}</td>
                    <td className="px-6 py-4 font-bold text-primary">{tier.revShare}</td>
                    <td className="px-6 py-4">
                      <ul className="space-y-1">
                        {tier.includes.map((item, j) => (
                          <li key={j} className="text-xs text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Revenue share applies to monthly subscription revenue. Bad review removal revenue share is negotiated separately at Gold tier.</p>
        </div>
      </section>

      {/* White Label */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            WHITE-LABEL
          </div>
          <h2 className="font-display font-bold text-foreground mb-4 leading-tight">White-Label Option</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>Gold tier resellers have the option to present Epicware&apos;s platform under their own brand. Client-facing dashboards, reports, and communications can be configured with your agency&apos;s name and logo. Epicware operates invisibly in the background.</p>
            <p>White-label is available for all products except the bad review removal service, which is operated by Epicware&apos;s specialist team and carries the Epicware guarantee.</p>
            <p>White-label pricing and technical setup details are discussed during the Gold tier onboarding process.</p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            APPLY
          </div>
          <h2 className="font-display font-bold text-foreground mb-4 leading-tight">How to Apply</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
            <p>Applications are reviewed within 3 business days. Approval criteria include: active work with SMB clients in Singapore or Asia, a clear service context where Epicware products are a natural fit, and the capacity to onboard at least 2 clients within the first 60 days.</p>
            <p>Start by booking a partner demo — a 30-minute call where we walk through the platform, discuss your client base, and determine if the programme is the right fit. There is no obligation to proceed after the demo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
              Apply to Become a Reseller →
            </Link>
            <Link href="/book-demo"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-border/60 text-foreground font-medium text-sm hover:border-primary/30 transition-all duration-300">
              Book a Partner Demo
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
