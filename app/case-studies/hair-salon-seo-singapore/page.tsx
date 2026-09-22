import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Hair Salon SEO Case Study Singapore: 283% Growth",
  description:
    "How Epicware grew a two-outlet Singapore hair salon's organic traffic 263% and first-page rankings 272% in four months — and turned it into booked chairs.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/hair-salon-seo-singapore" },
  openGraph: {
    title: "Hair Salon SEO Case Study Singapore: 283% Growth | Epicware",
    description:
      "How Epicware grew a two-outlet Singapore hair salon's organic traffic 263% and first-page rankings 272% in four months — and turned it into booked chairs.",
    url: "https://www.epicware.ai/case-studies/hair-salon-seo-singapore",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rankings Don't Fill Chairs. Bookings Do.",
  description:
    "How Epicware grew a two-outlet Singapore hair salon's organic traffic 263% and first-page rankings 272% in four months — and turned it into booked chairs.",
  datePublished: "2026-09-19",
  author: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  publisher: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  url: "https://epicware.ai/case-studies/hair-salon-seo-singapore",
};

const FAQS = [
  {
    q: "How long does SEO take for a hair salon in Singapore?",
    a: "This salon's engagement began in May 2026, and the results above were measured across July and August — roughly three to four months in. In general, expect early Google Business Profile and long-tail movement within 6–10 weeks, and competitive service keywords to build over three to six months. Salons tend to see returns faster than most categories because local search intent converts quickly.",
  },
  {
    q: "Do I need SEO if my salon already gets bookings from Instagram?",
    a: "They solve different problems. Social builds awareness among people who weren't looking for you. Search captures people who are actively looking right now and choosing between you and three competitors. For this salon, organic search drove 71.75% of all website users — a volume of active, high-intent demand that social was not reaching.",
  },
  {
    q: "Can you manage more than one salon outlet?",
    a: "Yes. This client runs both outlets through a single Epicware dashboard, each with its own keyword strategy, Google Business Profile workflow, posting schedule and review pipeline. We currently manage 50+ outlet profiles across five markets.",
  },
  {
    q: "Can you get my salon recommended by ChatGPT and AI Overviews?",
    a: "It's a dedicated workstream, not an add-on. It requires AI-crawlable site architecture, correct structured data, content written the way language models extract answers, and consistent entity signals and brand mentions across the sources those models draw from. This client's AI assistant traffic grew 320%, with engagement events from that channel up 633%.",
  },
  {
    q: "Can negative Google reviews actually be removed?",
    a: "Reviews that violate Google's policies can be — fake reviews, competitor attacks, spam and off-topic content. We identify the violation, file the formal request and escalate through Google's channels. You pay $200 per review, and only if it's successfully removed. Our removal success rate is 94%.",
  },
  {
    q: "What does Epicware actually do, month to month?",
    a: "Google Business Profile optimisation and posting across every outlet, local ranking and competitor mapping, technical SEO, page revamps and blog content, AI citations and high-authority link building, automated review generation via WhatsApp and email, AI-assisted review responses, bad review removal, and social content distribution — all reported from a single dashboard.",
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
  { value: "+283%", label: "total website users" },
  { value: "+272%", label: "first-page keyword rankings" },
  { value: "+209%", label: "organic clicks" },
  { value: "+500%", label: "on-site engagement events" },
];

const AT_A_GLANCE: { label: string; value: string }[] = [
  { label: "Client", value: "Name withheld at client's request" },
  { label: "Industry", value: "Hair & Beauty — organic / Aveda salon" },
  { label: "Locations", value: "2 outlets — VivoCity and Jem" },
  { label: "Engagement", value: "May 2026 – ongoing" },
  { label: "Measured window", value: "1 Jul – 31 Aug 2026 vs 30 Apr – 30 Jun 2026" },
  {
    label: "Services",
    value:
      "Technical SEO · Local SEO · Google Business Profile Optimisation · Content · AI Citations · Link Building · Review Management",
  },
  { label: "Headline result", value: "4,184 monthly users (from 1,091), 272% growth in top-10 rankings, 5x engagement events" },
];

const CHALLENGES = [
  {
    title: "Two mall outlets, two separate catchments.",
    body: "VivoCity and Jem draw from completely different parts of Singapore, with different competitors and different search behaviour. Treated as one brand with one strategy, two outlets compete with each other instead of dominating their own catchments.",
  },
  {
    title: "A crowded, undifferentiated category.",
    body: "“Hair salon Singapore” is a bloodbath — aggregators, directories, listicles and hundreds of salons all chasing the same term. Competing head-on for generic keywords is the fastest way to spend a budget and get nothing back.",
  },
  {
    title: "Technical debt holding the site back.",
    body: "A robots.txt misconfiguration blocking legitimate AI crawlers, duplicate directive groups, a broken sitemap entry that had been erroring since 2025, outlet opening hours that contradicted each other across Google Business Profile and two separate schema blocks on the website, and a merged outlet page still redirecting to the wrong destination.",
  },
  {
    title: "No presence in AI search.",
    body: "Customers asking ChatGPT or Google's AI Overviews for organic salon recommendations in Singapore were being shown competitors.",
  },
];

const KEYWORD_RANKINGS: { keyword: string; result: string; image: string; alt: string; w: number; h: number }[] = [
  {
    keyword: "aveda salon singapore",
    result: "#1 organic",
    image: "ranking-aveda-salon-singapore.png",
    alt: "Google search results for 'aveda salon singapore' showing the client's listing ranking #1 organically, business name blurred",
    w: 754,
    h: 493,
  },
  {
    keyword: "aveda salon harbourfront mrt",
    result: "#1 organic + #1 Local Map Pack",
    image: "ranking-aveda-salon-harbourfront-mrt.png",
    alt: "Google local map pack and search results for 'aveda salon harbourfront mrt' showing the client's VivoCity outlet ranking #1, business name blurred",
    w: 806,
    h: 612,
  },
  {
    keyword: "vivocity hair salon",
    result: "#1 organic + #2 Local Map Pack",
    image: "ranking-vivocity-hair-salon.png",
    alt: "Google local map pack and search results for 'vivocity hair salon' showing the client's listing in the map pack and ranking #1 organically, business name blurred",
    w: 1082,
    h: 646,
  },
  {
    keyword: "hair salon jurong east mrt",
    result: "#1 organic",
    image: "ranking-hair-salon-jurong-east-mrt.png",
    alt: "Google search results for 'hair salon jurong east mrt' showing the client's listing ranking #1 organically, business name blurred",
    w: 762,
    h: 537,
  },
  {
    keyword: "hair salon jem singapore",
    result: "#2 and #3 organic",
    image: "ranking-hair-salon-jem-singapore.png",
    alt: "Google search results for 'hair salon jem singapore' showing the client's Jem outlet ranking in the top organic positions, business name blurred",
    w: 840,
    h: 634,
  },
  {
    keyword: "hair salon price list",
    result: "#4 organic",
    image: "ranking-hair-salon-price-list.png",
    alt: "Google search results for 'hair salon price list' showing the client's listing ranking #4 organically, business name blurred",
    w: 732,
    h: 522,
  },
];

const FUNNEL_STAGES = [
  "SEO optimisation",
  "Higher search visibility",
  "More organic traffic",
  "More customer engagement",
  "More calls and WhatsApp enquiries",
  "More appointment opportunities",
];

const WHY_IT_WORKED = [
  {
    title: "We fixed the plumbing before turning on the tap.",
    body: "Technical debt, contradictory business data and blocked crawlers were quietly capping everything above them. No amount of content fixes a site Google doesn't fully trust.",
  },
  {
    title: "We competed where we could win.",
    body: "Organic colour, Aveda treatments and mall-catchment intent instead of “hair salon Singapore.” Lower search volume, far higher intent, and a searcher who has already chosen the category this salon leads in.",
  },
  {
    title: "We separated the two outlets from day one.",
    body: "VivoCity and Jem are different markets with different competitors and different customers. A single strategy across both would have left each outlet fighting the other for the same rankings.",
  },
  {
    title: "We built for AI search before the category did.",
    body: "A 633% increase in AI assistant engagement in four months, in a market where almost no competing salon is even measuring it.",
  },
];

const IS_THIS_YOU = [
  "You have two or more outlets and can't tell which one is visible where",
  "Your marketing produces reach and followers but you can't trace a single booking to it",
  "You're competing in a saturated category against aggregators and directory sites",
  "Your website has technical issues nobody has looked at in years",
  "You're invisible in ChatGPT and AI Overviews and don't know how to check",
  "You have negative or fake reviews you've been told can't be removed",
];

const RELATED_READING: { href: string; label: string }[] = [
  { href: "/industries/nail-hair-salons", label: "Hair & Beauty Salons" },
  { href: "/local-seo-singapore", label: "Local SEO Services" },
  { href: "/gbp-optimisation-singapore", label: "GBP Optimisation" },
  { href: "/review-management-singapore", label: "Review Management" },
  { href: "/bad-review-removal-singapore", label: "Bad Review Removal" },
  { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
  { href: "/growth-tools/epicsocial-social-scheduling", label: "EpicSocial" },
];

const WHATSAPP_HREF = "https://wa.me/6590013157";
const ASSET_BASE = "/assets/case-studies/hair-salon-seo-singapore";

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

export default function HairSalonCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Case Study · Hair &amp; Beauty · Singapore · 2 Mall Outlets
          </span>
          <h1
            className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
          >
            Rankings Don&rsquo;t Fill Chairs. Bookings Do.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            How Epicware grew a two-outlet Singapore hair salon from 1,091 to 4,184 monthly users — and built a
            search funnel that ends in appointments, not impressions.
          </p>

          <div className="mb-10">
            <StatRow stats={HERO_STATS} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background h-13 px-7 rounded-full font-semibold">
              <Link href="/free-audit" className="flex items-center gap-2">
                Get Your Free Salon Visibility Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted h-13 px-7 font-semibold">
              <Link href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Discuss Your Salon on WhatsApp
              </Link>
            </Button>
          </div>
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
          <p className="text-xs text-muted-foreground italic mt-4">
            The salon&rsquo;s name is withheld at its request. Outlets, timeline and results are reported as-is.
          </p>
        </div>
      </section>

      {/* ── The Problem With Salon Marketing ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">The Problem With Salon Marketing</h2>
          <div className="space-y-4 border-l-2 border-primary/40 pl-6 mb-10">
            <p className="text-foreground/90 text-[17px] leading-relaxed">
              Salons are one of the most-marketed and worst-marketed business categories in Singapore.
            </p>
            <p className="text-muted-foreground text-[17px] leading-relaxed">
              The reason is a mismatch. A salon&rsquo;s revenue depends on <strong className="text-foreground">booked
              chairs</strong>{" "}
              — a finite number of appointment slots per stylist, per day, per outlet. But almost
              all salon marketing is measured in things that have no relationship to a booked chair: follower
              counts, reach, impressions, &ldquo;brand awareness.&rdquo;
            </p>
            <p className="text-muted-foreground text-[17px] leading-relaxed">
              Search is different, and that&rsquo;s exactly why it&rsquo;s undervalued. Someone typing &ldquo;organic
              hair colour Singapore&rdquo; or &ldquo;Aveda salon near me&rdquo; at 9pm on a Tuesday has already
              decided to spend money. They&rsquo;re only choosing where. The question is whether your salon appears
              at that moment — and whether what they see makes them tap &ldquo;call&rdquo; instead of scrolling to
              the next result.
            </p>
            <p className="text-muted-foreground text-[17px] leading-relaxed">
              This salon had the harder half of that equation solved already. Two outlets in prime mall locations,
              an Aveda partnership, a genuine organic positioning, and a base of loyal clients. What it didn&rsquo;t
              have was visibility at the point of decision.
            </p>
          </div>

          <CtaBanner
            heading="Want to know how visible your salon is right now?"
            body="We'll audit your Google profiles, local rankings, reviews and AI visibility across every outlet — free, no obligation."
            primary={{ label: "Get My Free Audit →", href: "/free-audit" }}
            secondary={{ label: "Ask Us on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-8">The Challenge</h2>
          <ol className="space-y-6">
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
        </div>
      </section>

      {/* ── What We Did ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">What We Did</h2>
          <p className="text-muted-foreground text-[15px] mb-10">
            The same local growth workflow we run for every multi-outlet client, tuned to a mall-catchment,
            appointment-based business.
          </p>

          <div className="space-y-9 mb-12">
            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">01</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Fixed the foundation first</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Before a single new keyword was targeted, we ran a full technical audit and cleared the blockers.
                  We rebuilt robots.txt with correct directives and unblocked the legitimate AI crawlers that had
                  been shut out, removed the erroring sitemap entry, reconciled outlet hours so Google Business
                  Profile and both website schema blocks finally agreed, and corrected the outlet page redirect.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  This work generates no headline. It&rsquo;s also the reason everything after it worked. Google&rsquo;s
                  local algorithm weights data consistency heavily — a business whose own opening hours contradict
                  themselves across three sources is a business Google ranks cautiously.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">02</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Built a differentiated keyword strategy</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Rather than fighting for generic head terms, we built the strategy around what actually makes this
                  salon different: organic and ammonia-free colour, Aveda treatments, specific hair concerns, and
                  hyper-local mall-catchment intent. Lower competition, dramatically higher purchase intent, and a
                  searcher who has already self-selected for a premium organic salon. Each outlet was then given its
                  own keyword identity and local landing structure, so VivoCity and Jem stopped cannibalising each
                  other.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">03</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Google Business Profile optimisation across both outlets</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Both profiles went through our{" "}
                  <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
                    19-point GBP audit
                  </Link>{" "}
                  — categories, services, attributes, hours, descriptions, photos and booking actions — then moved
                  onto a consistent posting schedule, with every post built around a target keyword and supported by
                  real salon photography.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">04</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Content built to convert, not just rank</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Page revamps across the key conversion pages, plus an ongoing programme of new blog content
                  targeting long-tail service and concern-based queries — the searches people make while deciding,
                  not while browsing. Every piece internally linked back to the outlet pages and booking paths.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">05</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">AI citations and authority building</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  More than 20 AI citations and 30+ high-authority backlinks built each month, establishing the{" "}
                  <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
                    entity signals and brand mentions
                  </Link>{" "}
                  that both Google&rsquo;s local algorithm and large language models rely on when deciding which
                  businesses to surface and recommend.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">06</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Review and reputation management</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Ongoing{" "}
                  <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
                    review management
                  </Link>{" "}
                  across both outlets — structured review generation, prompt responses to every review, and formal
                  takedown requests for reviews that breach Google&rsquo;s policies through our{" "}
                  <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
                    Bad Review Removal
                  </Link>{" "}
                  service.
                </p>
              </div>
            </div>
          </div>

          <CtaBanner
            heading="This is the same system we run for every multi-outlet client."
            body="Book a 30-minute demo and we'll audit your salon live — you'll see exactly where you're losing bookings to competitors."
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
            Measured window: 1 July – 31 August 2026, compared against 30 April – 30 June 2026.
          </p>

          {/* Keyword Rankings */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Keyword Rankings</h3>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Keyword</th>
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {KEYWORD_RANKINGS.map((row) => (
                    <tr key={row.keyword}>
                      <td className="px-5 py-3 text-foreground">{row.keyword}</td>
                      <td className="px-5 py-3 font-bold text-primary">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/90 mb-8">
              Look at what these rankings have in common: they&rsquo;re the searches a customer makes when
              they&rsquo;re already close to booking. Someone searching &ldquo;aveda salon harbourfront mrt&rdquo;
              isn&rsquo;t browsing — they&rsquo;re standing at an MRT station deciding where to walk. This salon now
              owns both the organic result and the Map Pack for that search. Both outlets hold first-position
              organic rankings in their own catchment, and &ldquo;aveda salon singapore&rdquo; at #1 isn&rsquo;t a
              local search — that&rsquo;s the whole island.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {KEYWORD_RANKINGS.map((row) => (
                <Figure
                  key={row.image}
                  src={row.image}
                  w={row.w}
                  h={row.h}
                  alt={row.alt}
                  caption={`${row.result} — “${row.keyword}”`}
                />
              ))}
            </div>
          </div>

          {/* Website Traffic */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Website Traffic</h3>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Metric</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Before</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">After</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["Total users", "1,091", "4,184", "+283.5%"],
                    ["New users", "1,084", "4,109", "+279.1%"],
                    ["Returning users", "123", "500", "+306.5%"],
                    ["Engagement events", "6,550", "39,307", "+500.1%"],
                    ["Avg. engagement time", "43s", "51s", "+18.4%"],
                    ["Engaged sessions per user", "0.75", "0.83", "+10.7%"],
                  ].map(([label, before, after, change]) => (
                    <tr key={label}>
                      <td className="px-5 py-3 text-muted-foreground">{label}</td>
                      <td className="px-5 py-3 text-right text-foreground">{before}</td>
                      <td className="px-5 py-3 text-right font-bold text-foreground">{after}</td>
                      <td className="px-5 py-3 text-right font-bold text-primary whitespace-nowrap">{change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The number that matters most here isn&rsquo;t the traffic — it&rsquo;s the{" "}
              <strong className="text-foreground">500% growth in engagement events alongside an 18% increase in
              average time on site</strong>. Traffic alone can be inflated. Traffic that grows nearly four-fold
              while each individual visitor simultaneously does <em>more</em> on the site is qualified demand, not
              noise.
            </p>
          </div>

          {/* Organic Search Performance */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Organic Search Performance</h3>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Metric</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Before</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">After</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["Organic search users", "827", "3,002", "+263%"],
                    ["Organic engagement events", "4,832", "28,338", "+486%"],
                    ["Returning organic users", "94", "362", "+285%"],
                  ].map(([label, before, after, change]) => (
                    <tr key={label}>
                      <td className="px-5 py-3 text-muted-foreground">{label}</td>
                      <td className="px-5 py-3 text-right text-foreground">{before}</td>
                      <td className="px-5 py-3 text-right font-bold text-foreground">{after}</td>
                      <td className="px-5 py-3 text-right font-bold text-primary whitespace-nowrap">{change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Organic search now accounts for <strong className="text-foreground">71.75% of all website users</strong>{" "}
              — this salon&rsquo;s single largest acquisition channel by a wide margin, and the one with the lowest
              cost per visitor of anything in the mix.
            </p>
          </div>

          {/* Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Search Visibility</h3>
            <div className="mb-6">
              <StatRow
                cols={3}
                stats={[
                  { value: "+181%", label: "increase in search impressions" },
                  { value: "+209%", label: "increase in organic clicks" },
                  { value: "+272%", label: "growth in top-10 keyword rankings" },
                ]}
              />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The 272% growth in first-page rankings is the leading indicator behind everything else on this page.
              First-page presence is where clicks actually live — for a local service business, page two might as
              well not exist.
            </p>
          </div>

          {/* AI Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">AI Search Visibility</h3>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Metric</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Before</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">After</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["AI Assistant users", "10", "42", "+320%"],
                    ["AI Assistant engagement events", "57", "418", "+633%"],
                    ["Avg. engagement time", "21s", "1m 04s", "+199%"],
                  ].map(([label, before, after, change]) => (
                    <tr key={label}>
                      <td className="px-5 py-3 text-muted-foreground">{label}</td>
                      <td className="px-5 py-3 text-right text-foreground">{before}</td>
                      <td className="px-5 py-3 text-right font-bold text-foreground">{after}</td>
                      <td className="px-5 py-3 text-right font-bold text-primary whitespace-nowrap">{change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">
              Visitors arriving from AI assistants now spend <strong className="text-foreground">over a minute on
              site</strong> — more than double the site-wide average, and the highest engagement quality of any
              channel.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              The absolute numbers are still small. That&rsquo;s the point. This is a channel that barely existed a
              year ago and is now growing faster than any other on the account, in a category where almost no
              competitor is tracking it at all. Most salons in Singapore have a zero in this row. See how we approach
              this for every client in{" "}
              <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
                AI &amp; GEO Visibility
              </Link>
              .
            </p>
          </div>

          {/* Brand and Referral Growth */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Brand and Referral Growth</h3>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card mb-6 max-w-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Channel</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["Direct traffic", "+406%"],
                    ["Referral traffic", "+156%"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="px-5 py-3 text-muted-foreground">{label}</td>
                      <td className="px-5 py-3 text-right font-bold text-primary">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The direct traffic jump deserves a proper reading. Direct visits are people typing the brand name
              straight into Google or the address bar — they don&rsquo;t happen by accident. When more people
              encounter a business repeatedly in search results, more of them come back later by name. A 406%
              increase in direct traffic is search visibility showing up a second time, as brand recall.
            </p>
          </div>

          <CtaBanner
            heading="These are real numbers from a real Singapore salon."
            body="Find out what the same four months would look like for your outlets."
            primary={{ label: "Get a Free Visibility Audit →", href: "/free-audit" }}
            secondary={{ label: "Talk to Us on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── From Visibility to Booked Chairs (funnel) ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">From Visibility to Booked Chairs</h2>
          <p className="text-muted-foreground text-[15px] mb-10">
            This campaign was never about rankings in isolation. Every stage was built to feed the next:
          </p>

          <div className="flex flex-col items-center gap-1 mb-10">
            {FUNNEL_STAGES.map((stage, i) => (
              <div key={stage} className="w-full flex flex-col items-center">
                <div className="w-full max-w-sm bg-card border border-border/60 rounded-2xl px-6 py-4 text-center shadow-card">
                  <span className="text-[15px] font-semibold text-foreground">{stage}</span>
                </div>
                {i < FUNNEL_STAGES.length - 1 && (
                  <ArrowDown className="w-5 h-5 text-primary my-1.5 shrink-0" />
                )}
              </div>
            ))}
          </div>

          <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">
            That chain is visible in the data. Impressions up 181% put this salon in front of a far wider set of
            searchers. Clicks up 209% turned that exposure into visits. Engagement events up 500% show those
            visitors moving through the site rather than bouncing. And returning users up 306% alongside direct
            traffic up 406% show the same people coming back — the behaviour that precedes a booking in a considered
            purchase category like hair.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            For an appointment-based business, that&rsquo;s the whole game. You don&rsquo;t need millions of
            visitors. You need the right few thousand, arriving at the moment they&rsquo;re ready to choose a salon,
            and finding you first.
          </p>
        </div>
      </section>

      {/* ── Why It Worked ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
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

      {/* ── Is This You ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-8">Is This You?</h2>
          <p className="text-muted-foreground text-[15px] mb-6">
            This will look familiar if you run a salon, spa or clinic and:
          </p>
          <ul className="space-y-3 mb-8">
            {IS_THIS_YOU.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[15px] leading-relaxed text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Epicware works with{" "}
            <Link href="/industries/nail-hair-salons" className="text-primary font-medium hover:underline">
              salons, spas and wellness brands
            </Link>
            , clinics, dental practices, restaurants and multi-outlet SMBs across Singapore, Malaysia, the UAE, the
            UK and the US.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-10 text-center">Frequently Asked Questions</h2>
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
            Your next client is searching right now. Are you in the results?
          </h2>
          <p className="text-white/60 text-lg mb-3 leading-relaxed">
            Book a free 30-minute demo and we&rsquo;ll run a live audit on your Google Business Profiles, local
            rankings, reviews and AI visibility — then show you exactly what&rsquo;s costing you bookings.
          </p>
          <p className="text-sm text-white/40 mb-10">No obligation. No agency pitch. Just the data.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button asChild className="bg-white text-foreground hover:bg-white/90 h-13 px-7 rounded-full font-semibold">
              <Link href="/book-demo#form">Book My Free Demo →</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 h-13 px-7 font-semibold">
              <Link href="/free-audit">Get a Free Visibility Audit</Link>
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
