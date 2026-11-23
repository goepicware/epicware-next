import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Furniture Store SEO Case Study Singapore",
  description:
    "How Epicware took a Singapore furniture and mattress showroom from 1 to 22 page-one keywords in 3 months, with Google AI Overview citations.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/furniture-store-seo-singapore" },
  openGraph: {
      images: [{ url: "/assets/HeroBanner-og.jpg", width: 1448, height: 1086, alt: "Epicware" }],
    title: "Furniture Store SEO Case Study Singapore | Epicware",
    description:
      "How Epicware took a Singapore furniture and mattress showroom from 1 to 22 page-one keywords in 3 months, with Google AI Overview citations.",
    url: "https://www.epicware.ai/case-studies/furniture-store-seo-singapore",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Furniture Store SEO Case Study: 1 to 22 Page-One Keywords in 3 Months",
  description:
    "How Epicware took a Singapore furniture and mattress showroom from 1 to 22 page-one keywords in 3 months, with Google AI Overview citations.",
  datePublished: "2026-11-12",
  author: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://www.epicware.ai" },
  publisher: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://www.epicware.ai" },
  url: "https://www.epicware.ai/case-studies/furniture-store-seo-singapore",
};

const FAQS = [
  {
    q: "How long does SEO take for a furniture store?",
    a: "Specific local searches move first. This showroom had three #1 rankings within two months, including its core “mattress showroom ubi singapore” search. Broad, competitive terms take longer: “furniture showroom singapore” entered Google's top 100 in month three, at #82, and is a focus for the months ahead.",
  },
  {
    q: "Can one showroom rank across all of Singapore?",
    a: "Yes, though it usually starts close to home. This showroom won its neighbourhood searches first, then used category pages and guides to reach shoppers anywhere in Singapore searching for a product rather than a place, such as “orthopedic mattress singapore” (#5) and “best mattress for side sleepers singapore” (#4).",
  },
  {
    q: "Does SEO help a furniture store appear in AI search?",
    a: "Yes. Google's AI Overviews and assistants such as ChatGPT draw on pages that answer a question clearly, and on brands mentioned across the web. This showroom was featured in Google's AI Overviews for three searches, and AI assistants sent visitors to the site within the campaign's first three months.",
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
  { value: "1 → 22", label: "keywords on Google's first page" },
  { value: "7", label: "#1 rankings on Google" },
  { value: "+153.5%", label: "search impressions, 28-day comparison" },
  { value: "3", label: "Google AI Overview citations" },
];

const AT_A_GLANCE: { label: string; value: string }[] = [
  { label: "Client", value: "A furniture and mattress showroom, Ubi, Singapore" },
  { label: "Industry", value: "Retail — Home Furnishing" },
  { label: "Locations", value: "1 showroom" },
  { label: "Engagement", value: "1 August 2026 – ongoing" },
  { label: "Timeframe covered", value: "First 3 months (1 Aug – 31 Oct 2026)" },
  {
    label: "Services",
    value:
      "Local SEO · GBP Optimisation · Technical SEO · Content & Guides · AI Search Visibility (GEO) · Brand Amplification",
  },
  { label: "Headline result", value: "1 → 22 page-one keywords, 7 #1 rankings, 3 AI Overview citations" },
];

const NUMBER_ONES: { keyword: string; result: string }[] = [
  { keyword: "mattress showroom ubi singapore", result: "#1 organic + #2 Map Pack" },
  { keyword: "mattress showroom ubi", result: "#1 organic" },
  { keyword: "sofa showroom ubi", result: "#1 organic" },
  { keyword: "sofa shop ubi", result: "#1 organic" },
  { keyword: "best mattress for bad backs", result: "#1 organic" },
  { keyword: "condo furniture group buy deals", result: "#1 organic + named in Google's AI Overview" },
  { keyword: "bto mattress group buy", result: "#1 organic" },
];

const OTHER_WINS: { keyword: string; result: string }[] = [
  { keyword: "mattress store in ubi", result: "reached #1 organic" },
  { keyword: "furniture showroom ubi", result: "#3 organic, up from #5" },
  { keyword: "furnishing solution provider", result: "#5 organic" },
  { keyword: "chiropractor mattress", result: "#3 organic" },
  { keyword: "lady americana bed", result: "#4 organic" },
  { keyword: "pet friendly bed frame singapore", result: "#2 Map Pack, 5.0★ rating and a review quote shown in the listing" },
];

const CLIMBING_KEYWORDS: { keyword: string; sep: string; oct: string }[] = [
  { keyword: "firm orthopedic mattress singapore", sep: "Not ranking", oct: "#4" },
  { keyword: "best mattress for side sleepers singapore", sep: "Not ranking", oct: "#4" },
  { keyword: "orthopedic mattress singapore", sep: "Not ranking", oct: "#5" },
  { keyword: "combi blinds hdb singapore", sep: "#9", oct: "#5" },
  { keyword: "lady americana mattress", sep: "#10", oct: "#6" },
  { keyword: "fourstar pocketed spring mattress", sep: "#18", oct: "#10" },
  { keyword: "korean wallpaper singapore", sep: "#21", oct: "#12" },
  { keyword: "soft foam mattress singapore", sep: "#52", oct: "#20" },
  { keyword: "korean blinds singapore", sep: "#60", oct: "#21" },
];

const BUSINESS_IMPACT = [
  { value: "345", label: "Google search clicks, 28-day comparison (from 245, +40.8%)" },
  { value: "185", label: "Google Business Profile interactions in October, +25.9% on September" },
  { value: "5.0★", label: "Google rating held across 230 reviews" },
  { value: "54", label: "tracked keywords ranking on Google by month 3, 29 new since month 2" },
];

const CHALLENGES = [
  {
    title: "Only one tracked keyword ranked on Google's first page.",
    body: "The website otherwise had no organic search presence worth measuring.",
  },
  {
    title: "The site was working against itself.",
    body: "Junk and duplicate pages, indexed cart and checkout pages, mixed www and non-www internal links, no H1 on the homepage, and slow load times.",
  },
  {
    title: "Large national brands dominated the category.",
    body: "Some competitors carried more than eight times as many Google reviews for the core mattress searches.",
  },
  {
    title: "One showroom, one neighbourhood to start from.",
    body: "With a single location, the business had to win the searches where it had a real advantage first, then build out from there.",
  },
];

const WHY_IT_WORKED = [
  {
    title: "One page for every search.",
    body: "Every keyword was mapped to a single page built to rank for it, so Google never had to choose between competing pages. When the new category pages and guides went live, the searches mapped to them moved fast: in one month, “orthopedic mattress singapore” went from not ranking to #5, and “korean blinds singapore” climbed from #60 to #21.",
  },
  {
    title: "Local signals that all pointed to the same place.",
    body: "The strongest wins are searches naming the showroom's own neighbourhood. The website, the weekly Google Business Profile posts and photos, and the review replies all described the same showroom, the same products and the same location — the consistency that helps Google match a listing to nearby searchers.",
  },
  {
    title: "Guides that answer real questions.",
    body: "The blog guides answer what shoppers ask before they buy, with specifics such as HDB lift sizes and mattress firmness. Clear, specific answers are what AI Overviews look for, which is what earned the citations for “foam and latex mattress” and “orthopedic mattress”.",
  },
];

const IS_THIS_YOU = [
  "You run a furniture, mattress or home-decor showroom with a strong in-store reputation but weak search visibility",
  "Your website has technical debt — duplicate pages, slow load times, no clear page per product line",
  "Large national or chain competitors out-rank you despite your own reviews being just as strong",
  "You want to rank for product searches, not just your showroom's name",
  "You're invisible in ChatGPT, Gemini and AI Overviews and don't know how to check",
  "You have a single location and assumed that meant you could only compete locally",
];

const RELATED_READING: { href: string; label: string }[] = [
  { href: "/locations/singapore/local-seo", label: "Local SEO Services" },
  { href: "/locations/singapore/google-business-profile", label: "GBP Optimisation" },
  { href: "/locations/singapore/ai-search-visibility", label: "AI & GEO Visibility" },
  { href: "/industries/retail-stores", label: "SEO for Retail Stores" },
];

const WHATSAPP_HREF = "https://wa.me/6584446582";
const ASSET_BASE = "/assets/case-studies/furniture-store-seo-singapore";

function StatRow({ stats, cols = 4 }: { stats: { value: string; label: string }[]; cols?: number }) {
  return (
    <div className={`grid grid-cols-2 ${cols >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-2"} gap-5`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border/60 rounded-2xl px-5 py-5 shadow-card">
          <div className="font-display font-bold text-2xl lg:text-3xl text-primary">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function RankingTable({ rows }: { rows: { keyword: string; result: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="border-b border-border/60">
            <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Keyword</th>
            <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Result</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {rows.map((row) => (
            <tr key={row.keyword}>
              <td className="px-5 py-3 text-foreground">{row.keyword}</td>
              <td className="px-5 py-3 font-bold text-primary">{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default function FurnitureStoreSEOCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Furniture Store SEO" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block mt-6">
            Case Study · Furniture &amp; Mattress Retail · Singapore · 1 Showroom · 3 Months
          </span>
          <h1
            className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
          >
            From 1 Keyword to 22: How a Singapore Furniture Showroom Won Google, Maps and AI Search in 3 Months
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            This furniture and mattress showroom in Ubi had a strong reputation and almost no search visibility.
            Epicware ran its Domination Plan across Google Search, Google Maps and AI search for three months.
            The showroom went from one keyword on Google&rsquo;s first page to 22, reached #1 for seven searches,
            and was cited in Google&rsquo;s AI Overviews for three more &mdash; while daily search impressions grew
            from about 80 to over 1,000.
          </p>

          <div className="mb-10">
            <StatRow stats={HERO_STATS} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background h-13 px-7 rounded-full font-semibold">
              <Link href="/free-audit" className="flex items-center gap-2">
                Get Your Free Visibility Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted h-13 px-7 font-semibold">
              <Link href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Discuss Your Store on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── At a Glance ── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <dl className="bg-card border border-border/60 rounded-2xl divide-y divide-border/60 shadow-card">
            {AT_A_GLANCE.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 px-6 py-4">
                <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground sm:pt-0.5">{row.label}</dt>
                <dd className="text-[15px] text-foreground leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-muted-foreground mt-4">
            The showroom&rsquo;s name is withheld at its request. Neighbourhood, timeline and results are reported as-is.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">About the Showroom</h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The business is a home furnishing showroom in Singapore&rsquo;s Ubi industrial-retail belt. It sells
              mattresses, bed frames, sofas, blinds and curtains, Korean wallpaper, dining sets, wardrobes and
              digital locks, and many of its customers are furnishing new BTO and condo homes. The website works as
              a catalogue: its job is to bring buyers into the showroom, where they can try a mattress before they buy.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              When the campaign started on 1 August 2026, the showroom already had a strong reputation, with a
              5.0★ Google rating from 225 reviews. Search visibility was the gap.
            </p>
          </div>

          <CtaBanner
            heading="Strong reviews, weak search visibility?"
            body="We'll audit your site, Google Business Profile and AI search presence against your real competitors — free."
            primary={{ label: "Get My Free Audit →", href: "/free-audit" }}
            secondary={{ label: "Ask a Question on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">The Challenge</h2>
          <p className="text-muted-foreground text-[15px] mb-8">
            The showroom came to Epicware on 1 August 2026 with a specific set of problems:
          </p>

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
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-10">What We Did</h2>

          <div className="space-y-9 mb-12">
            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">01</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Gave Every Product Line Its Own Search</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  We researched more than 80 keywords across mattresses, bed frames, sofas, blinds, wallpaper,
                  digital locks and BTO group buys, then mapped each one to a single page on the site. Pages stopped
                  competing with each other, and Google had one clear page to rank for each search.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">02</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Fixed the Technical Foundations</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Removed 13 junk pages and the duplicate product pages, noindexed cart, checkout, account, filter
                  and sort URLs, fixed www and non-www internal links and added an H1 to the homepage.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Set up robots.txt, the XML sitemap and schema, then submitted the sitemap to Google Search Console.
                  Resolved page speed and PHP errors, and redirected a duplicate /home/ page to the homepage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">03</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Rebuilt the Pages That Sell</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  In month three, a new homepage and five redesigned category pages went live: mattresses, bed
                  frames, sofas, blinds and curtains, and dining sets. Each has new copy, FAQs and internal links to
                  related products and guides. The About Us and FAQ pages were rewritten the month before.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">04</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Published Guides That Buyers Search For</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  23 blog guides in three months, each answering a question Singapore homeowners ask before they
                  buy: whether they need an orthopedic mattress, how to test a mattress in a showroom, which HDB
                  lift and doorway sizes fit furniture deliveries, wallpaper or paint for an HDB flat, and what HDB
                  rules allow for digital locks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">05</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Kept the{" "}
                  <Link href="/locations/singapore/google-business-profile" className="text-primary font-medium hover:underline">
                    Google Business Profile
                  </Link>{" "}
                  Active
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  60 keyword-targeted posts (five a week), new product photos uploaded every week, and a reply to
                  every single review.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">06</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Built Authority and{" "}
                  <Link href="/locations/singapore/ai-search-visibility" className="text-primary font-medium hover:underline">
                    AI Search Visibility
                  </Link>
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  50 brand profiles and backlinks, plus 45 articles and answers published on third-party platforms.
                  Together with the guides, they formed the base that helped AI assistants find and describe the
                  showroom.
                </p>
              </div>
            </div>
          </div>

          <CtaBanner
            heading="Want this running on your store?"
            body="Book a 30-minute demo. We'll audit your profiles live and show you exactly where your competitors are outranking you."
            primary={{ label: "Book a Free Demo →", href: "/book-demo#form" }}
            secondary={{ label: "Discuss on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Results ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-2">The Results — First 3 Months</h2>
          <p className="text-muted-foreground text-sm italic mb-12">
            Campaign period 1 August to 31 October 2026. Search Console and Analytics totals run to 11 November.
          </p>

          {/* From 1 to 22 */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">From 1 to 22 Keywords on Google&rsquo;s First Page</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              At the month-3 check, 54 tracked keywords ranked on Google, 29 of them new since the previous month.
              Of those, 22 were in the top 10, up from just one at the baseline. The showroom held #1 for seven
              searches:
            </p>
            <div className="mb-8">
              <RankingTable rows={NUMBER_ONES} />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              Several more searches reached strong positions in the same window:
            </p>
            <RankingTable rows={OTHER_WINS} />
          </div>

          {/* Product searches climbing */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Product Searches Climbing Fast</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-6">
              Product searches moved quickly between the month-2 and month-3 checks. &ldquo;Not ranking&rdquo; means
              outside Google&rsquo;s top 100.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Keyword</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Month 2</th>
                    <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Month 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {CLIMBING_KEYWORDS.map((row) => (
                    <tr key={row.keyword}>
                      <td className="px-5 py-3 text-foreground">{row.keyword}</td>
                      <td className="px-5 py-3 text-right text-muted-foreground">{row.sep}</td>
                      <td className="px-5 py-3 text-right font-bold text-primary">{row.oct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI Overviews */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Featured in Google&rsquo;s AI Overviews</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90 mb-4">
              When shoppers asked Google about mattresses, its AI Overviews cited the showroom&rsquo;s guides:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 bg-card border border-border/60 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[15px] text-foreground/90"><strong>&ldquo;foam and latex mattress&rdquo;</strong> — cited as the first source.</span>
              </li>
              <li className="flex items-start gap-3 bg-card border border-border/60 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[15px] text-foreground/90"><strong>&ldquo;orthopedic mattress&rdquo;</strong> — the showroom&rsquo;s guide cited as a source.</span>
              </li>
              <li className="flex items-start gap-3 bg-card border border-border/60 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[15px] text-foreground/90"><strong>&ldquo;condo furniture group buy deals&rdquo;</strong> — named in Google&rsquo;s AI Overview alongside the #1 organic ranking.</span>
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              That makes three searches where Google&rsquo;s AI Overview featured the showroom. AI assistants had
              started sending visitors to the site as well within the campaign&rsquo;s first three months, and they
              stayed engaged for more than a minute on average.
            </p>
          </div>

          {/* Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">More Shoppers Reaching the Website</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-6">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Total search impressions (3 months)", "63.8K"],
                      ["Total organic clicks (3 months)", "673"],
                      ["Average position", "17"],
                      ["28-day clicks", "245 → 345 (+40.8%)"],
                      ["28-day impressions", "15.7K → 39.8K (+153.5%)"],
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
                src="gsc-performance-3-months.png"
                w={1486}
                h={693}
                priority
                alt="Google Search Console 3-month performance chart showing 673 clicks and 63.8K impressions"
                caption="Google Search Console — 3-month clicks and impressions"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Daily impressions grew from about 80 in the campaign&rsquo;s first month to more than 1,000 on most
              days by month three, peaking at around 1,750. The impression base is the leading indicator here: it
              means the site is now being surfaced across a very wide keyword footprint, the top-of-funnel
              visibility that has to exist before position and click-through can be optimised.
            </p>
          </div>

          {/* Traffic Composition */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-2">Traffic Composition</h3>
            <p className="text-muted-foreground text-sm mb-5">Last 90 days of the campaign:</p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-6">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Channel</th>
                      <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">New users</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Direct", "5,562 (85.1%)"],
                      ["Organic Search", "684 (10.5%)"],
                      ["Organic Social", "258 (4.0%)"],
                      ["AI Assistant", "16 (0.2%)"],
                      ["Referral", "15 (0.2%)"],
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
                src="ga4-channel-acquisition.png"
                w={1522}
                h={760}
                alt="Google Analytics 4 user acquisition report showing Direct, Organic Search, Organic Social, AI Assistant and Referral channels"
                caption="GA4 — first-user channel acquisition, last 90 days"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              684 people found the site through organic search in the last 90 days, 135 of them came back for
              another visit, and organic visitors spent an average of 1 minute 27 seconds engaged on the site —
              qualified intent, not accidental clicks. There is also now a measurable AI Assistant channel: small
              in absolute terms, but most furniture retailers in Singapore have a zero in that row.
            </p>
          </div>

          {/* Business Impact */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Business Impact</h3>
            <div className="mb-6">
              <StatRow stats={BUSINESS_IMPACT} cols={2} />
            </div>
          </div>

          <CtaBanner
            heading="3 months. 1 showroom. 22 page-one keywords."
            body="Find out what the same 3 months would look like for your store."
            primary={{ label: "Get a Free Visibility Audit →", href: "/free-audit" }}
            secondary={{ label: "Talk to Us on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── Why It Worked ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-10">Why It Worked</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">Is This You?</h2>
          <p className="text-[15px] text-muted-foreground mb-6">This will look familiar if you run a furniture or home-decor store and:</p>
          <ul className="space-y-3 mb-8">
            {IS_THIS_YOU.map((line) => (
              <li key={line} className="flex items-start gap-3 bg-card border border-border/60 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[15px] text-foreground/90">{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Epicware works with{" "}
            <Link href="/industries/retail-stores" className="text-primary font-medium hover:underline">
              retail stores
            </Link>{" "}
            across furniture, home decor and other categories in Singapore, Malaysia, UAE, the UK and the US.
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
            Get more shoppers into your showroom.
          </h2>
          <p className="text-white/60 text-lg mb-3 leading-relaxed">
            Book a free 30-minute demo and we&rsquo;ll run a live audit on your store&rsquo;s Google Business
            Profile, local rankings, reviews and AI visibility &mdash; then show you exactly what&rsquo;s costing
            you walk-ins right now.
          </p>
          <p className="text-sm text-white/40 mb-10">No obligation. No hard pitch. Just the data.</p>
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
