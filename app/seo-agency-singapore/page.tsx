import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  MapPinOff,
  EyeOff,
  Star,
  Search,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Award,
  Users,
} from "lucide-react";
import CitationWall from "@/components/shared/CitationWall";
import WorkflowAccordion from "@/components/home/WorkflowAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { PLANS, formatPrice } from "@/lib/pricing-data";
import { isPriceIncreaseLive, PRICE_INCREASES } from "@/lib/price-increase";

const CANONICAL = "https://www.epicware.ai/seo-agency-singapore";

export const metadata: Metadata = {
  title: "SEO Agency Singapore | Google, Maps & AI Search",
  description:
    "Singapore SEO agency with its own software. Rank on Google, own the Map Pack, get cited by ChatGPT & Gemini, and protect your reviews — tracked live.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "SEO Agency Singapore | Google, Maps & AI Search | Epicware",
    description:
      "Singapore SEO agency with its own software. Rank on Google, own the Map Pack, get cited by ChatGPT & Gemini, and protect your reviews — tracked live.",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Agency Singapore | Google, Maps & AI Search | Epicware",
    description:
      "Singapore SEO agency with its own software. Rank on Google, own the Map Pack, get cited by ChatGPT & Gemini, and protect your reviews — tracked live.",
  },
};

// Live plan data — never hardcode prices.
const live = isPriceIncreaseLive();
const effectivePlans = PLANS.map((plan) => {
  const increase = PRICE_INCREASES[plan.name];
  if (live && increase) {
    return { ...plan, monthlyPrice: increase.newMonthly, annualPrice: increase.newAnnual };
  }
  return plan;
});
const CORE_TIER_NAMES = ["Foundation", "Authority", "Domination"];
const corePlans = effectivePlans.filter((p) => CORE_TIER_NAMES.includes(p.name));
const foundationPlan = effectivePlans.find((p) => p.name === "Foundation")!;

// A plan's `features` list only shows what it ADDS over the plan named in its
// own subtitle ("Everything in X, plus …"), so "has website SEO" has to walk
// that inheritance chain rather than just string-matching each plan's own list.
function planHasFeature(planName: string, needle: string): boolean {
  const plan = effectivePlans.find((p) => p.name === planName);
  if (!plan) return false;
  if (plan.features.some((f) => (typeof f === "string" ? f : f.label).toLowerCase().includes(needle))) {
    return true;
  }
  const inherited = effectivePlans.find((p) => plan.subtitle.includes(`Everything in ${p.name}`));
  return inherited ? planHasFeature(inherited.name, needle) : false;
}
const plansWithWebsiteSEO = effectivePlans.filter((p) => planHasFeature(p.name, "website seo"));

const PAIN_CARDS = [
  {
    icon: FileText,
    title: "The monthly PDF.",
    body: "You pay a retainer and get a report that's out of date the day it lands.",
  },
  {
    icon: MapPinOff,
    title: "Maps? Not our department.",
    body: "They chase website rankings while your customers decide on Google Maps.",
  },
  {
    icon: EyeOff,
    title: "AI search is invisible to them.",
    body: "ChatGPT is recommending your competitor right now, and nobody's tracking it.",
  },
  {
    icon: Star,
    title: "One fake 1-star undoes six months of SEO.",
    body: "Most agencies can't touch reviews. That's where trust is won or lost.",
  },
];

const PILLARS = [
  {
    icon: Search,
    name: "Google Search",
    body: "Technical, on-page, and content SEO that earns rankings.",
    href: "/ai-search-visibility-singapore",
  },
  {
    icon: MapPin,
    name: "Google Maps",
    body: "19-point GBP optimisation and district-level rank grids.",
    href: "/local-seo-singapore",
  },
  {
    icon: Sparkles,
    name: "AI Search (GEO)",
    body: "Get cited in AI Overviews, ChatGPT, Gemini, and Perplexity.",
    href: "/ai-search-visibility-singapore",
  },
  {
    icon: ShieldCheck,
    name: "Reputation",
    body: "More 5-star reviews, faster responses, policy-violating reviews removed.",
    href: "/reputation-management-singapore",
  },
];

const COMPARISON_ROWS = [
  { label: "Reporting", agency: "Monthly PDF", epicware: "Live dashboard, 24/7" },
  { label: "Google Maps", agency: "Add-on or ignored", epicware: "Grid rank tracking by district" },
  {
    label: "AI search (GEO)",
    agency: "Rarely offered",
    epicware: "Audit, implementation, monthly citation monitoring",
  },
  {
    label: "Reputation",
    agency: "Not offered",
    epicware: "Review generation, AI responses, bad review removal",
  },
  { label: "Time to first results", agency: "Months of onboarding", epicware: "Core setup delivered in 30 days" },
  { label: "Commitment", agency: "Long lock-in contracts", epicware: "Cancel with 30 days' notice" },
];

const CREDENTIALS = [
  { icon: Users, label: "50+ outlets managed" },
  { icon: Award, label: "Founded by the NinjaOS team ($120M GMV, exited 2021)" },
  { icon: ShieldCheck, label: "Google Business Profile Partner" },
  { icon: Globe, label: "Active in SG · MY · UAE · UK · US" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does SEO cost in Singapore?",
    a: `Cost depends on how many locations you run, how competitive your keywords are, and whether you need Maps, website, and AI search covered together. Epicware plans start at $${formatPrice(foundationPlan.monthlyPrice)}/month. Full breakdown on /pricing.`,
  },
  {
    q: "How long does SEO take to work?",
    a: "Google Maps profile fixes typically move rankings within 4–8 weeks. Review growth compounds over 3–6 months. Our AI-citation receipts above were captured 30–60 days after clients started.",
  },
  {
    q: "What makes the best SEO agency in Singapore?",
    a: "Transparent live data instead of PDFs. Dated proof instead of vague claims. Coverage of Google Search, Maps, and AI search. Reputation management. No long lock-ins. Judge every agency — including us — on those.",
  },
  {
    q: "Is Epicware an agency or a software platform?",
    a: "Both. Our team does the work, and you get the platform we do it on, so every ranking, review, and AI citation is visible to you live.",
  },
  {
    q: "Do you offer AI SEO / GEO?",
    a: "Yes. We audit your AI visibility, implement fixes, and monitor citations across ChatGPT, Gemini, Perplexity, and Google AI Overviews monthly.",
  },
  {
    q: "Can you remove bad Google reviews?",
    a: "We remove reviews that violate Google's policies (fake, spam, conflict-of-interest, off-topic). Charged upfront at $200 per review, refunded in full if the review isn't removed within 3 months.",
  },
  {
    q: "Do you manage multi-outlet businesses?",
    a: "Yes. Every outlet is managed and tracked from one dashboard.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Optimization",
  name: "SEO Agency Services Singapore",
  description:
    "Managed SEO agency services for Singapore SMBs covering Google Search, Google Maps (GBP), AI search visibility (GEO/AEO), and review/reputation management — delivered on Epicware's own live-tracking software.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  url: CANONICAL,
};

const schemaProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Epicware",
  url: "https://www.epicware.ai",
  logo: "https://www.epicware.ai/icon.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "78 Shenton Way, #07-15",
    addressLocality: "Singapore",
    postalCode: "079120",
    addressCountry: "SG",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  sameAs: [
    "https://www.youtube.com/@EpicwareAI/shorts",
    "https://www.instagram.com/epicwareai/",
    "https://www.linkedin.com/company/epicware",
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.epicware.ai/services" },
    { "@type": "ListItem", position: 3, name: "SEO Agency Singapore", item: CANONICAL },
  ],
};

export default function SeoAgencySingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfessionalService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* §1 Hero */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            SEO AGENCY · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            The SEO Agency in Singapore That Runs on Its Own Software
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Rank on Google. Own the Map Pack. Get named by ChatGPT and Gemini. Protect every review. Built and run by
            the team that wrote the platform — so you see every ranking live, not in a month-old PDF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get My Free SEO &amp; AI Visibility Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-4 py-3 shadow-card"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/80">{cred.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* §2 Pain */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12 max-w-2xl mx-auto">
            What most SEO agencies won&apos;t tell you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PAIN_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-card border border-border/60 rounded-2xl p-6">
                  <Icon className="w-6 h-6 text-loss mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* §3 Promise */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12 max-w-2xl mx-auto">
            One team. One dashboard. Every place customers find you.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.name}
                  href={pillar.href}
                  className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-card transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.body}</p>
                </Link>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Website SEO is included on {plansWithWebsiteSEO.map((p) => p.name).join(" and ")} plans. Foundation and
            Authority cover Google Search through GBP content and keyword research — see{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              full plan details
            </Link>
            .
          </p>
        </div>
      </section>

      {/* §4 Proof */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Verified results
            </span>
            <h2 className="font-display font-bold text-foreground">Receipts, not promises.</h2>
          </div>
        </div>

        <CitationWall ctaHref="/free-audit" hideIntro />

        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-premium bg-muted aspect-[4/3]">
              <Image
                src="/assets/workflow/heatmap-ranking.png"
                alt="EpicMap live rank grid showing keyword rankings by district"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                This is what clients see — live rank by keyword, by district, every week.
              </p>
              <Link href="/case-studies" className="text-sm font-semibold text-primary hover:underline">
                See the full case studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* §5 Comparison table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">
            Epicware vs a typical SEO agency
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-foreground">
                    &nbsp;
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-muted-foreground">
                    Typical SEO agency
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-primary bg-primary/5">
                    Epicware
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? "bg-muted/10" : ""}>
                    <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.agency}</td>
                    <td className="px-5 py-4 text-foreground font-medium bg-primary/5">{row.epicware}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* §6 How it works */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl mb-10">
          <h2 className="font-display font-bold text-foreground text-center">How we get you found</h2>
        </div>
        <WorkflowAccordion />
      </section>

      {/* §7 Offer */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">Plans built for local growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {corePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border bg-card p-6 flex flex-col ${
                  plan.highlight ? "border-primary/40" : "border-border/60"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`self-start mb-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      plan.highlight ? "bg-primary text-white" : "bg-foreground text-background"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display font-bold text-foreground text-xl mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-snug">{plan.subtitle}</p>
                <div className="mb-6">
                  <span className="font-display font-bold text-3xl text-foreground">
                    ${formatPrice(plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">/mo</span>
                </div>
                <Link
                  href="/book-demo#form"
                  className={`inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 mt-auto ${
                    plan.highlight ? "bg-primary text-white hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Book Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              See Full Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* §8 Fit */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">Who we&apos;re built for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Built for
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multi-outlet and local service businesses — F&amp;B, medical and dental clinics, salons, wellness,
                car workshops, tuition centres, retail — plus B2B service firms that win locally.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">Not the right fit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Large e-commerce catalogues needing product-level SEO at scale, and enterprise international SEO
                programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §9 FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">
            SEO agency questions, answered
          </h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-2">{q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §10 Final CTA */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">See exactly where you&apos;re losing customers</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Free audit of your Google ranking, Maps visibility, AI search presence, and reviews. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get My Free SEO &amp; AI Visibility Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              Book a Strategy Call
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
