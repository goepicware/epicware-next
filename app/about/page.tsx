import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "About Epicware — Singapore-Built Local SEO & Reputation Management Platform | Epicware",
  description: "Epicware was founded by the team behind NinjaOS ($120M GMV, 2021 exit). A Singapore-built platform for Local SEO and Reputation Management. Active globally.",
  alternates: { canonical: "https://www.epicware.ai/about" },
  openGraph: {
    title: "About Epicware — Singapore-Built Local SEO & Reputation Management Platform",
    description: "Epicware was founded by the team behind NinjaOS ($120M GMV, 2021 exit). A Singapore-built platform for Local SEO and Reputation Management. Active globally.",
    url: "https://www.epicware.ai/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Epicware Pte. Ltd.",
  "url": "https://epicware.ai",
  "description": "Singapore-built Local SEO and Reputation Management platform for SMBs. Covering Google Maps rank, review generation, bad review removal, and GBP optimisation.",
  "foundingLocation": {
    "@type": "Place",
    "addressCountry": "SG",
    "name": "Singapore"
  },
  "areaServed": ["SG", "MY", "AE", "GB", "US"],
  "sameAs": [
    "https://www.linkedin.com/company/epicware"
  ]
};

const products = [
  {
    name: "EpicReview",
    description: "Automated review generation via WhatsApp and email. Connects to your booking system or POS and sends personalised review requests at the optimal post-service moment.",
  },
  {
    name: "EpicResponse",
    description: "AI review response that drafts professional replies to every new Google review in your brand voice. Covers all locations from a single dashboard.",
  },
  {
    name: "EpicMap",
    description: "Hyperlocal rank tracking at a grid level across your district. Shows exactly where you rank in the top 3 and where competitors are ahead.",
  },
  {
    name: "Bad Review Removal",
    description: "$200 per review, pay on success. Assessment, formal submission, and systematic escalation through all available Google support channels.",
  },
];

const principles = [
  {
    title: "Build for the market, not against it",
    description: "Singapore businesses run on WhatsApp. The majority of their customers find them on Google Maps. We build tools that work with these realities — not tools designed for a different market that have been modified for Singapore.",
  },
  {
    title: "Outcomes over outputs",
    description: "Reports don't rank businesses. Reviews don't respond themselves. GBP profiles don't optimise automatically. We automate the execution so that the outcomes — improved rank, more reviews, better rating — are the result of using the platform.",
  },
  {
    title: "Aligned incentives",
    description: "Bad review removal is pay-on-success. There is no charge if the review stays up. This means we only pursue removals we believe have a genuine case — and we have a direct financial incentive to succeed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            ABOUT EPICWARE · SINGAPORE-BUILT
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            About Epicware — Built in Singapore for the Way SMBs Actually Work
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Epicware is a Singapore-built platform for Local SEO and Reputation Management. We help SMBs rank higher on Google Maps, generate more reviews, and remove bad ones — from one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book-demo"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
              Book a Free Demo →
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-border/60 text-foreground font-medium text-sm hover:border-primary/30 transition-all duration-300">
              See All Services
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-8 text-sm text-muted-foreground">
            <span>Singapore</span>
            <span>·</span>
            <span>Malaysia</span>
            <span>·</span>
            <span>UAE</span>
            <span>·</span>
            <span>United Kingdom</span>
            <span>·</span>
            <span>United States</span>
          </div>
        </div>
      </section>

      {/* Why We Built Epicware */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            OUR STORY
          </div>
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">Why We Built Epicware</h2>
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>The founding team previously built NinjaOS — a restaurant management platform that reached $120M in GMV before its 2021 exit. In that process, we worked closely with hundreds of Singapore F&B operators on every aspect of their business: POS, ordering, table management, loyalty, and digital presence.</p>
            <p>One pattern was consistent: operators who ranked well on Google Maps outgrew those who didn&apos;t, regardless of food quality or location. A restaurant in position 1–3 for &quot;restaurant near me&quot; had a structurally better business than one in position 7, everything else being equal. Yet most operators had no systematic approach to the signals that drove rank.</p>
            <p>The tools that existed were either built for the US or UK market (using SMS rather than WhatsApp, optimised for US directories rather than Singapore&apos;s GBP-dominant landscape) or were agency services with high retainers and slow feedback loops. Neither was right for a Singapore hawker stall owner or a 3-outlet clinic network.</p>
            <p>Epicware was built to fill that gap: a Singapore-native platform that automates the work of local SEO and reputation management — at a price point that makes sense for SMBs, through the channels that actually work in Singapore.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-4">
              THE PLATFORM
            </div>
            <h2 className="font-display font-bold text-foreground leading-tight">What Epicware Is Today</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.name} className="rounded-2xl border border-border/60 bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{product.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            MARKETS
          </div>
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">Who We Serve</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>Epicware&apos;s primary market is Singapore — where the platform was built and where the majority of managed profiles operate. The Singapore market&apos;s compact geography, high smartphone penetration, and Google Maps dominance make it an ideal fit for the platform&apos;s approach.</p>
            <p>We are also active in Malaysia, where WhatsApp adoption mirrors Singapore and Google Maps is the primary local search platform. UAE operations serve the growing SMB market in Dubai and Abu Dhabi. UK and US markets are served primarily through the reseller programme, where local agencies and consultants use Epicware&apos;s platform to serve their own SMB clients.</p>
            <p>The industries we serve most actively: F&amp;B (restaurants, cafes, hawker businesses), healthcare (GP clinics, dental, physiotherapy), beauty (hair salons, nail studios, aesthetics), automotive (workshops, detailing), and professional services.</p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-4">
              OUR APPROACH
            </div>
            <h2 className="font-display font-bold text-foreground leading-tight">How We Work</h2>
          </div>
          <div className="space-y-6">
            {principles.map((principle, i) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-6">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{principle.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-semibold text-foreground mb-6">Explore Epicware</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Bad Review Removal Singapore", href: "/bad-review-removal-singapore" },
              { label: "GBP Optimisation Singapore", href: "/gbp-optimisation-singapore" },
              { label: "Review Management Singapore", href: "/review-management-singapore" },
              { label: "Local SEO Singapore", href: "/local-seo-singapore" },
              { label: "Reputation Management Singapore", href: "/reputation-management-singapore" },
              { label: "Reseller Programme", href: "/reseller" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="block rounded-xl border border-border/60 bg-card px-5 py-3.5 text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-all duration-200">
                {link.label} →
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
