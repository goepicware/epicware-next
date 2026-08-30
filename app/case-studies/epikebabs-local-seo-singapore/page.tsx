import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "F&B Local SEO Case Study Singapore: EPIKebabs | Epicware",
  description:
    "How Epicware grew EPIKebabs' organic traffic 24%, won #1 Google rankings and AI Overview citations across 5 Singapore outlets. Real local SEO results.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/epikebabs-local-seo-singapore" },
  openGraph: {
    title: "F&B Local SEO Case Study Singapore: EPIKebabs | Epicware",
    description:
      "How Epicware grew EPIKebabs' organic traffic 24%, won #1 Google rankings and AI Overview citations across 5 Singapore outlets. Real local SEO results.",
    url: "https://www.epicware.ai/case-studies/epikebabs-local-seo-singapore",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "From Kebab Shop to Category Leader: How EPIKebabs Won Google Maps, Google Search and AI Search Across 5 Singapore Outlets",
  description:
    "How Epicware grew EPIKebabs' organic traffic 24%, won #1 Google rankings and AI Overview citations across 5 Singapore outlets. Real local SEO results.",
  datePublished: "2026-08-30",
  author: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  publisher: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  url: "https://epicware.ai/case-studies/epikebabs-local-seo-singapore",
};

const FAQS = [
  {
    q: "How long did it take to see results for EPIKebabs?",
    a: "The engagement started in March 2026. Google Business Profile interactions and call volume began improving within the first two to three months, while ranking gains and AI Overview citations built through months four to six. Local SEO compounds — the six-month curve is steeper than the three-month curve.",
  },
  {
    q: "Can Epicware manage multiple outlets on one account?",
    a: "Yes. EPIKebabs runs five outlets through a single Epicware dashboard, with individual keyword strategies, posting schedules and review workflows per location. Our platform is built for multi-outlet SMBs.",
  },
  {
    q: "How do you rank a business inside AI Overviews and ChatGPT?",
    a: "Through a combination of structured data, citation-ready content, site architecture that AI crawlers can parse, consistent entity signals across platforms, and brand mentions in the places AI models actually pull from. It's a different discipline to traditional SEO, and we run it as a dedicated AI search visibility workstream.",
  },
  {
    q: "Can you really remove negative Google reviews?",
    a: "We can remove reviews that violate Google's own policies — fake reviews, competitor attacks, spam, off-topic and policy-breaching content. We identify the violation, file the formal request and escalate through Google's channels. You pay $200 per review only if it's successfully removed. Our removal success rate is 94%.",
  },
  {
    q: "Does this work outside F&B?",
    a: "Yes. The same five-stage workflow runs for dental and medical clinics, salons, tuition centres, car workshops, physiotherapy practices and retail. The keywords change; the system doesn't.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const HERO_STATS = [
  { value: "280K", label: "search impressions in 6 months" },
  { value: "13.6K", label: "clicks from organic search" },
  { value: "+24.1%", label: "organic traffic growth" },
  { value: "17.3K", label: "AI Overview impressions" },
];

const AT_A_GLANCE: { label: string; value: string }[] = [
  { label: "Client", value: "EPIKebabs — epikebabs.com" },
  { label: "Industry", value: "F&B / Quick Service Restaurant (Halal, MUIS-certified)" },
  { label: "Locations", value: "5 outlets: Sunshine Plaza, Aperia Mall, CIMB Plaza, East Village, Galaxis" },
  { label: "Engagement", value: "March 2026 – ongoing" },
  {
    label: "Services",
    value:
      "Local SEO · GBP Optimisation · Review & Reputation Management · Bad Review Removal · AI Search Visibility (GEO) · Content · CRO · Social Distribution",
  },
  { label: "Headline result", value: "#1 rankings on core commercial keywords, AI Overview citations, +30% direct online orders" },
];

const CHALLENGES = [
  {
    title: "Rank for high-difficulty kebab keywords.",
    body: 'Terms like "best kebab in Singapore", "halal kebab Singapore" and "kebab delivery Singapore" are among the most competitive F&B queries in the market — dominated by listicles, Tripadvisor, Reddit threads and food blogs, not restaurant websites.',
  },
  {
    title: "Grow calls, orders and footfall — not just impressions.",
    body: "Rankings that don't convert into phone calls, direction requests and online orders are a vanity metric.",
  },
  {
    title: "Get found in AI search.",
    body: "Customers no longer just type into Google. They ask ChatGPT, Gemini, Perplexity and Google AI Overviews where to eat. EPIKebabs needed to be the answer, not a competitor.",
  },
  {
    title: "Fix the reputation layer.",
    body: "Five outlets meant five Google Business Profiles, five review streams, and a growing pile of negative reviews — including reviews that violated Google's own policies but were still costing the business customers every day they stayed up.",
  },
];

const KEYWORD_RANKINGS: { keyword: string; position: string; where: string }[] = [
  { keyword: "order kebab", position: "#1", where: "Organic" },
  { keyword: "halal snack pack singapore", position: "#1", where: "Organic (blog) + Business Profile panel" },
  { keyword: "big loaded kebabs", position: "#1 & #2", where: "Local Map Pack (CIMB Plaza + Aperia Mall)" },
  { keyword: "best kebab in singapore", position: "Cited", where: "AI Overview + Top Kebab Spots" },
  { keyword: "healthy kebab in singapore", position: "Cited", where: "AI Overview (first listed)" },
  { keyword: "kebab near me", position: "#4", where: "Organic" },
  { keyword: "shawarma in singapore", position: "#6", where: "Organic (blog)" },
];

const SUPPLEMENTARY_PROOF = [
  { src: "epikebabs-serp-order-kebab.jpg", w: 1500, h: 712, caption: '"order kebab" — #1', alt: "Google search result showing EPIKebabs ranked #1 for \"order kebab\"" },
  { src: "epikebabs-serp-halal-snack-pack.jpg", w: 1500, h: 760, caption: '"halal snack pack singapore" — #1', alt: "Google search result showing EPIKebabs ranked #1 for \"halal snack pack singapore\"" },
  { src: "epikebabs-serp-kebab-near-me.jpg", w: 1500, h: 903, caption: '"kebab near me" — #4', alt: "Google search result showing EPIKebabs ranked #4 for \"kebab near me\"" },
  { src: "epikebabs-serp-shawarma.jpg", w: 1500, h: 929, caption: '"shawarma in singapore" — #6', alt: "Google search result showing EPIKebabs ranked #6 for \"shawarma in singapore\"" },
];

const BUSINESS_IMPACT = [
  { value: "100+", label: "direct online orders per day" },
  { value: "+30%", label: "growth in direct online orders" },
  { value: "+35%", label: "increase in user engagement after CRO optimisation" },
  { value: "+0.5★", label: "average rating increase across outlets" },
  { value: "5+", label: "policy-violating negative reviews removed per outlet" },
  { value: "100+", label: "third-party platforms carrying brand placements" },
];

const WHY_IT_WORKED = [
  {
    title: "We treated five outlets as five businesses, not one.",
    body: "Each profile got its own keyword identity, its own catchment strategy and its own posting cadence. That's why two EPIKebabs outlets can hold #1 and #2 in the same Map Pack instead of cannibalising each other.",
  },
  {
    title: "We optimised for AI engines from day one.",
    body: "While most agencies were still reporting on blue links, we were building the entity signals, structured content and brand mentions that get a business quoted inside an AI Overview. That's now delivering 17.3K impressions on a curve that's still climbing.",
  },
  {
    title: "We fixed reputation before we scaled visibility.",
    body: "Ranking #1 with a 4.1 rating just sends more people to a bad first impression. Removing policy-violating reviews and systematically growing genuine 5-star reviews came first.",
  },
  {
    title: "We closed the loop on conversion.",
    body: "Traffic and rankings were only half the job. CRO work on the ordering journey turned that visibility into a 30% lift in direct orders.",
  },
];

const RELATED_READING: { href: string; label: string }[] = [
  { href: "/local-seo-singapore", label: "Local SEO Services" },
  { href: "/gbp-optimisation-singapore", label: "GBP Optimisation" },
  { href: "/review-management-singapore", label: "Review Management" },
  { href: "/bad-review-removal-singapore", label: "Bad Review Removal" },
  { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
  { href: "/growth-tools/epicsocial-social-scheduling", label: "EpicSocial" },
  { href: "/industries/restaurants", label: "F&B Restaurants" },
];

const WHATSAPP_HREF = "https://wa.me/6590013157";
const ASSET_BASE = "/assets/case-studies/epikebabs";

function StatRow({ stats, cols = 4 }: { stats: { value: string; label: string }[]; cols?: number }) {
  return (
    <div className={`grid grid-cols-2 ${cols >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"} gap-5`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border/60 rounded-2xl px-5 py-5 shadow-card">
          <div className="font-display font-bold text-2xl lg:text-3xl text-primary">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function Figure({
  src,
  alt,
  caption,
  w,
  h,
  priority,
}: {
  src: string;
  alt: string;
  caption?: string;
  w: number;
  h: number;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="rounded-2xl overflow-hidden border border-border/60 bg-muted/30 shadow-card">
        <Image
          src={`${ASSET_BASE}/${src}`}
          alt={alt}
          width={w}
          height={h}
          className="w-full h-auto"
          loading={priority ? undefined : "lazy"}
          priority={priority}
        />
      </div>
      {caption && <figcaption className="text-xs text-muted-foreground mt-2.5 text-center">{caption}</figcaption>}
    </figure>
  );
}

function CtaBanner({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] px-8 py-10 lg:px-12 lg:py-12 text-center">
      <h3 className="font-display font-bold text-white text-xl lg:text-2xl mb-3 text-balance">{heading}</h3>
      <p className="text-white/60 text-[15px] leading-relaxed max-w-xl mx-auto mb-7">{body}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild className="bg-white text-foreground hover:bg-white/90 h-12 px-7 rounded-full font-semibold text-sm">
          <Link href={primary.href}>{primary.label}</Link>
        </Button>
        <Button
          asChild
          className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 h-12 px-7 font-semibold text-sm"
        >
          <Link href={secondary.href}>{secondary.label}</Link>
        </Button>
      </div>
    </div>
  );
}

export default function EpiKebabsCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Case Study · F&amp;B · Singapore · 5 Outlets
          </span>
          <h1
            className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
          >
            From Kebab Shop to Category Leader: How EPIKebabs Won Google Maps, Google Search and AI Search Across 5
            Singapore Outlets
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            EPIKebabs came to Epicware wanting more orders, more calls, and rankings on kebab keywords that bigger
            brands had locked up for years. Six months in, they own the #1 spot for their highest-intent search
            terms, get cited by name in Google&rsquo;s AI Overviews, and take 100+ direct online orders a day.
          </p>

          <div className="mb-10">
            <StatRow stats={HERO_STATS} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background h-13 px-7 rounded-full font-semibold">
              <Link href="/free-audit" className="flex items-center gap-2">
                Get Your Free Local SEO Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted h-13 px-7 font-semibold">
              <Link href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Chat With Us on WhatsApp
              </Link>
            </Button>
          </div>

          <Figure
            src="epikebabs-gsc-6month-overview.jpg"
            w={1500}
            h={610}
            priority
            alt="Google Search Console showing EPIKebabs 13.6K clicks and 280K impressions over six months"
            caption="Google Search Console — 6-month performance: 13.6K clicks / 280K impressions / 4.8% CTR / 8.4 avg. position"
          />
        </div>
      </section>

      {/* ── At a Glance ── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <dl className="bg-card border border-border/60 rounded-2xl divide-y divide-border/60 shadow-card">
            {AT_A_GLANCE.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 px-6 py-4">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground sm:pt-0.5">{row.label}</dt>
                <dd className="text-[15px] text-foreground leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── The Client ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">The Client</h2>
          <div className="space-y-4 border-l-2 border-primary/40 pl-6">
            <p className="text-foreground/90 text-[17px] leading-relaxed">
              EPIKebabs has been serving Singapore since 2012 — halal-certified doner kebabs, big portions, and a
              menu of inventions you won&rsquo;t find anywhere else, from the Indomeeat™ to the Kilo Kebab™. Five
              outlets across the island, a loyal following of over 1,000 recommendations across Google, Facebook,
              Instagram, Grab and Tripadvisor, and a delivery operation that runs islandwide.
            </p>
            <p className="text-muted-foreground text-[17px] leading-relaxed">
              Strong brand. Strong product. But strong product doesn&rsquo;t automatically mean strong search
              visibility — and in Singapore&rsquo;s F&amp;B market, if you&rsquo;re not in the Map Pack when someone
              searches &ldquo;kebab near me&rdquo; at 8pm, you don&rsquo;t exist.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">The Challenge</h2>
          <p className="text-muted-foreground text-[15px] mb-8">EPIKebabs came to Epicware in March 2026 with four clear goals:</p>

          <ol className="space-y-6 mb-8">
            {CHALLENGES.map((c, i) => (
              <li key={c.title} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  <strong className="text-foreground">{c.title}</strong> {c.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="text-muted-foreground text-[15px] leading-relaxed mb-10">
            Add to that a multi-outlet structure where each location competes in a different catchment, and the same
            keyword can rank #1 in Kallang and be invisible in Raffles Place.
          </p>

          <CtaBanner
            heading="Not sure where your outlets are losing visibility?"
            body="We'll run a free audit across your Google profiles, rankings, reviews and AI visibility — no obligation, no sales pitch."
            primary={{ label: "Get My Free Audit →", href: "/free-audit" }}
            secondary={{ label: "Ask Us on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Strategy ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">The Strategy</h2>
          <p className="text-muted-foreground text-[15px] mb-10">
            Epicware ran EPIKebabs through the full local growth workflow — the same five-stage system we use for
            every multi-outlet SMB.
          </p>

          <div className="space-y-9 mb-12">
            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">01</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Google Business Profile Foundation</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Every one of the five outlets went through our{" "}
                  <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
                    19-point GBP audit
                  </Link>
                  : categories, services, attributes, hours, descriptions, photos and conversion actions. Each
                  profile was then given its own keyword identity so the outlets stopped competing with each other —
                  Sunshine Plaza positioned on &ldquo;Best Kebab in Singapore&rdquo;, Aperia Mall on &ldquo;Healthy
                  Kebab Near Singapore&rdquo;, and so on.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Then we kept feeding them. Fresh GBP posts scheduled twice weekly per outlet, each built around a
                  target keyword, with real product photography and a natural call to action.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">02</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Review Growth &amp; Reputation Management</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  We put a structured{" "}
                  <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
                    review management system
                  </Link>{" "}
                  in place across all five outlets — automated review requests via WhatsApp and email, happy
                  customers guided to Google, unhappy customers routed to private feedback first so the team could
                  recover the relationship before it became a public one-star.
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Alongside that, we audited every existing negative review for policy violations and ran formal
                  removal requests through Google&rsquo;s channels using our{" "}
                  <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
                    Bad Review Removal
                  </Link>{" "}
                  service. We also identified and handled negative SEO activity targeting the brand.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Result:</strong> 5+ negative reviews removed per outlet, and an
                  average rating lift of +0.5 stars across the portfolio — with ratings now sitting at 4.8★ (CIMB
                  Plaza), 4.7★ (Aperia Mall) and 4.6★ (Sunshine Plaza, across 760 reviews).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">03</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Local SEO Visibility Mapping</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Using EpicMap grid tracking, we mapped where each outlet was actually visible on Google Maps — by
                  keyword, by competitor, by scan zone. That told us which keywords were quick wins, which were long
                  fights, and which competitors were eating specific catchments.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  The keyword strategy split into three tiers: high-intent transactional terms (&ldquo;order
                  kebab&rdquo;, &ldquo;kebab delivery Singapore&rdquo;), local discovery terms (&ldquo;kebab near
                  me&rdquo;, &ldquo;halal food near me Singapore&rdquo;), and category-defining terms (&ldquo;best
                  kebab in Singapore&rdquo;, &ldquo;halal shawarma Singapore&rdquo;).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">04</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Website + AI Visibility Engine</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  A full{" "}
                  <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
                    GEO and SEO audit
                  </Link>{" "}
                  identified gaps in site architecture, schema, internal linking and AI crawlability. From there we
                  rebuilt the page structure, wrote citation-ready content designed to be quoted by AI engines, and
                  published blog articles targeting long-tail commercial queries — including a Halal Snack Pack
                  article and a Chicken Shawarma guide that now rank on page one on their own merit.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We also ran conversion rate optimisation across the ordering journey, tightening the path from
                  search result to completed order.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">05</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Social Content Distribution &amp; Brand Amplification</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  The same keyword insights were turned into social content across Facebook, Instagram, TikTok and
                  YouTube using{" "}
                  <Link href="/growth-tools/epicsocial-social-scheduling" className="text-primary font-medium hover:underline">
                    EpicSocial
                  </Link>{" "}
                  — plus brand mention and listing placements across 100+ third-party platforms and directories to
                  build the entity signals that both Google and AI models use to decide who&rsquo;s credible.
                </p>
              </div>
            </div>
          </div>

          <CtaBanner
            heading="Want the same system running on your outlets?"
            body="Book a 30-minute demo and we'll run a live audit on your business — you'll see exactly what's costing you customers right now."
            primary={{ label: "Book a Free Demo →", href: "/book-demo#form" }}
            secondary={{ label: "Discuss on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Results ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-2">The Results</h2>
          <p className="text-muted-foreground text-sm mb-12">
            Measurement window: March 2026 – August 2026, compared against the preceding six months.
          </p>

          {/* Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Search Visibility</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Total organic clicks (6 months)", "13.6K"],
                      ["Total search impressions (6 months)", "280K"],
                      ["Average CTR", "4.8%"],
                      ["Average position", "8.4"],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-5 py-3.5 text-muted-foreground">{label}</td>
                        <td className="px-5 py-3.5 text-right font-bold text-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Figure
                src="epikebabs-gsc-6month-overview.jpg"
                w={1500}
                h={610}
                alt="Google Search Console showing EPIKebabs 13.6K clicks and 280K impressions over six months"
                caption="Google Search Console 6-month clicks and impressions graph"
              />
            </div>
          </div>

          {/* Traffic Growth */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Traffic Growth</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Channel</th>
                      <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        Growth vs. prev. 6 mo.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Organic search users", "+24.1%"],
                      ["Organic social users", "+69.31%"],
                      ["Total users", "+20.91%"],
                      ["New users", "+17.35%"],
                      ["Returning users", "+17.45%"],
                      ["Total engagement events", "+15.36%"],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <td className="px-5 py-3 text-muted-foreground">{label}</td>
                        <td className="px-5 py-3 text-right font-bold text-primary">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Figure
                src="epikebabs-ga4-traffic-comparison.jpg"
                w={1500}
                h={792}
                alt="GA4 showing EPIKebabs organic search traffic up 24.1% and organic social up 69.3%"
              />
            </div>
          </div>

          {/* AI Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">AI Search Visibility</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              17.3K impressions from Google&rsquo;s generative AI features in six months — with daily impressions
              climbing from roughly 100 a day in May to over 400 a day by late August.
            </p>
            <div className="mb-8">
              <Figure
                src="epikebabs-ai-overview-impressions-chart.jpg"
                w={1500}
                h={655}
                alt="Google Search Console Generative AI features chart showing 17.3K impressions over six months"
                caption="Google Search Console — Generative AI features, 17.3K impressions over 6 months"
              />
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              EPIKebabs is now cited by name in Google AI Overviews for its core category queries:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-[15px] leading-relaxed text-foreground/90">
                <strong className="text-foreground">&ldquo;best kebab in singapore&rdquo;</strong> — EPIKebabs is
                named in the AI Overview as one of the best kebab spots in Singapore, and listed first under
                &ldquo;Top Kebab Spots in Singapore&rdquo; with all four outlets referenced.
              </li>
              <li className="text-[15px] leading-relaxed text-foreground/90">
                <strong className="text-foreground">&ldquo;healthy kebab in singapore&rdquo;</strong> — EPIKebabs is
                the first brand cited in the AI Overview, listed first under &ldquo;Top Healthy Kebab Spots&rdquo;.
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Figure
                src="epikebabs-ai-overview-best-kebab.jpg"
                w={1500}
                h={746}
                alt="Google AI Overview for 'best kebab in singapore' citing EPIKebabs"
              />
              <Figure
                src="epikebabs-ai-overview-healthy-kebab.jpg"
                w={1500}
                h={890}
                alt="Google AI Overview for 'healthy kebab in singapore' citing EPIKebabs first"
              />
            </div>

            <p className="text-[15px] leading-relaxed text-muted-foreground">
              This is the visibility layer most F&amp;B brands haven&rsquo;t even started competing in yet.
            </p>
          </div>

          {/* Keyword Rankings */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Keyword Rankings</h3>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card mb-6">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Keyword</th>
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Position</th>
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Where</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {KEYWORD_RANKINGS.map((row) => (
                    <tr key={row.keyword}>
                      <td className="px-5 py-3 text-foreground italic">&ldquo;{row.keyword}&rdquo;</td>
                      <td className="px-5 py-3 font-bold text-primary whitespace-nowrap">{row.position}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              Two of the five outlets now hold the top two positions in the local Map Pack for &ldquo;big loaded
              kebabs&rdquo; — pushing established competitors below the fold.
            </p>

            <div className="mb-8">
              <Figure
                src="epikebabs-map-pack-big-loaded-kebabs.jpg"
                w={1500}
                h={845}
                alt="Google Maps Map Pack for 'big loaded kebabs' showing EPIKebabs at #1 and #2"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {SUPPLEMENTARY_PROOF.map((p) => (
                <Figure key={p.src} src={p.src} w={p.w} h={p.h} alt={p.alt} caption={p.caption} />
              ))}
            </div>
          </div>

          {/* GBP Performance */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Google Business Profile Performance</h3>
            <p className="text-[15px] text-muted-foreground mb-6">Sample outlet data over the same period:</p>
            <ul className="space-y-2.5 mb-8">
              <li className="text-[15px] leading-relaxed text-foreground/90">
                <strong className="text-foreground">Aperia Mall:</strong> 1,515 Business Profile interactions
                (Mar–Jul 2026), with monthly interactions rising steadily month over month
              </li>
              <li className="text-[15px] leading-relaxed text-foreground/90">
                <strong className="text-foreground">Aperia Mall:</strong> 277 website clicks direct from the
                Business Profile
              </li>
              <li className="text-[15px] leading-relaxed text-foreground/90">
                <strong className="text-foreground">Sunshine Plaza:</strong> 93 calls generated directly from the
                Business Profile (Mar–Aug 2026), trending upward
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Figure
                src="epikebabs-gbp-interactions-aperia.jpg"
                w={1500}
                h={817}
                alt="Google Business Profile interactions chart for EPIKebabs Aperia Mall showing 1,515 interactions"
              />
              <Figure
                src="epikebabs-gbp-website-clicks-aperia.jpg"
                w={1500}
                h={814}
                alt="Google Business Profile website clicks chart for EPIKebabs Aperia Mall showing 277 clicks"
              />
              <Figure
                src="epikebabs-gbp-calls-sunshine.jpg"
                w={1500}
                h={817}
                alt="Google Business Profile calls chart for EPIKebabs Sunshine Plaza showing 93 calls"
              />
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Business Impact</h3>
            <div className="mb-6">
              <StatRow stats={BUSINESS_IMPACT} cols={3} />
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-10">
              Direct online orders matter more than they look. Every order that comes through EPIKebabs&rsquo; own
              channel instead of a third-party aggregator is an order that keeps its margin, its customer data, and
              its repeat-purchase relationship.
            </p>
          </div>

          <CtaBanner
            heading="These are real numbers from a real Singapore SMB."
            body="Want to know exactly what we did — and whether it applies to your business?"
            primary={{ label: "Discuss Your Business on WhatsApp →", href: WHATSAPP_HREF }}
            secondary={{ label: "Get a Free Local SEO Audit", href: "/free-audit" }}
          />
        </div>
      </section>

      {/* ── Why It Worked ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-10">Why It Worked</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_IT_WORKED.map((card) => (
              <div key={card.title} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2 leading-snug">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-10 text-center">Common Questions</h2>
          <div className="bg-card border border-border/50 rounded-3xl px-6 lg:px-10 py-4 shadow-card">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50 last:border-b-0">
                  <AccordionTrigger className="text-left font-semibold text-foreground py-5 text-base hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Related Reading ── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Related Reading</span>
          <div className="flex flex-wrap gap-2.5">
            {RELATED_READING.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-secondary/15 blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-bold text-white mb-6 text-2xl lg:text-4xl text-balance">
            Ready to own your category the way EPIKebabs owns kebabs?
          </h2>
          <p className="text-white/60 text-lg mb-3 leading-relaxed">
            Book a free 30-minute demo and we&rsquo;ll run a live audit on your Google Business Profile, local
            rankings, reviews and AI visibility — then show you the biggest opportunities you&rsquo;re currently
            missing.
          </p>
          <p className="text-sm text-white/40 mb-10">No obligation. No agency pitch. Just the data.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button asChild className="bg-white text-foreground hover:bg-white/90 h-13 px-7 rounded-full font-semibold">
              <Link href="/book-demo#form">Book My Free Demo →</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 h-13 px-7 font-semibold">
              <Link href="/free-audit">Get a Free Local SEO Audit</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 h-13 px-7 font-semibold">
              <Link href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Chat With Us on WhatsApp
              </Link>
            </Button>
          </div>
          <p className="text-xs text-white/30">Trusted by 50+ outlet profiles across SG · MY · UAE · UK · US</p>
        </div>
      </section>
    </>
  );
}
