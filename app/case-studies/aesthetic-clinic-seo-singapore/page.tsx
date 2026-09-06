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
  title: "Aesthetic Clinic SEO Case Study Singapore: 60 Days | Epicware",
  description:
    "How a Singapore medical aesthetic clinic hit #1 on Google and ChatGPT for Orchard and Hougang treatment keywords in 60 days — inside MOH advertising rules.",
  alternates: { canonical: "https://www.epicware.ai/case-studies/aesthetic-clinic-seo-singapore" },
  openGraph: {
    title: "Aesthetic Clinic SEO Case Study Singapore: 60 Days | Epicware",
    description:
      "How a Singapore medical aesthetic clinic hit #1 on Google and ChatGPT for Orchard and Hougang treatment keywords in 60 days — inside MOH advertising rules.",
    url: "https://www.epicware.ai/case-studies/aesthetic-clinic-seo-singapore",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Top 3 in 60 Days: How a Singapore Medical Aesthetic Clinic Won Orchard and Hougang — Without Breaking a Single MOH Advertising Rule",
  description:
    "How a Singapore medical aesthetic clinic hit #1 on Google and ChatGPT for Orchard and Hougang treatment keywords in 60 days — inside MOH advertising rules.",
  datePublished: "2026-09-05",
  author: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  publisher: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  url: "https://epicware.ai/case-studies/aesthetic-clinic-seo-singapore",
};

const FAQS = [
  {
    q: "How long does SEO take for a medical clinic in Singapore?",
    a: "This clinic saw top-3 rankings within 60 days, which is fast for YMYL. Realistically, expect early Map Pack and long-tail movement in the first 8–12 weeks, and competitive treatment keywords to build over three to six months. Healthcare is slower than most categories because Google applies stricter quality thresholds — but the rankings you earn are also more durable.",
  },
  {
    q: "What is YMYL, and why does it matter for clinics?",
    a: "YMYL stands for \"Your Money or Your Life\" — Google's classification for content that can affect a person's health, safety, finances or wellbeing. Medical content sits at the top of that list. Google demands demonstrable expertise, clear authorship, accuracy and institutional trust signals from YMYL pages, and suppresses pages that don't meet the bar. It's why generic SEO tactics fail on clinic websites.",
  },
  {
    q: "Can you do clinic SEO without breaking MOH advertising regulations?",
    a: "Yes — and it's a core part of how we work. Under the Healthcare Services (Advertisement) Regulations 2021, licensed clinics face restrictions on before-and-after patient imagery, outcome claims, promotional pricing and testimonial use. We build visibility from what's permitted: clinical authority content, accurate service and practitioner data, compliant review generation, correct structured data and technical trust signals. We'd always recommend your clinic's own compliance sign-off on published material.",
  },
  {
    q: "Can you get my clinic recommended by ChatGPT and AI Overviews?",
    a: "That's what we do as a dedicated workstream. It requires structured data, AI-crawlable site architecture, content written the way language models extract answers, and consistent entity signals and brand mentions across the sources those models draw from. This clinic reached the #1 ChatGPT recommendation for its primary Orchard query within two months.",
  },
  {
    q: "Can negative reviews on a clinic profile actually be removed?",
    a: "Reviews that violate Google's policies can be — fake reviews, competitor attacks, spam, off-topic content, and reviews containing prohibited material. We identify the violation, file the formal request and escalate through Google's channels. You pay $200 per review, and only if it's successfully removed. Our removal success rate is 94%.",
  },
  {
    q: "Do you handle multiple clinic locations?",
    a: "Yes. This client runs two outlets through a single Epicware dashboard, each with its own keyword strategy, Google Business Profile workflow and review pipeline. We currently manage 50+ outlet profiles across five markets.",
  },
  {
    q: "What exactly does Epicware do for a clinic?",
    a: "Google Business Profile optimisation across every location, local ranking and competitor mapping, YMYL-compliant content and site architecture, AI search visibility, automated review generation via WhatsApp and email, AI-assisted review responses, bad review removal, brand listings across third-party platforms, and social content distribution — all from one dashboard.",
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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody:
    "We engaged Epicware for our medical aesthetic clinic and it ranked within top 3 within 1–2 months, exceeded our expectations. They are knowledgeable for SEO and Google ranking. Thank u.",
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  author: { "@type": "Person", name: "Clinic Director" },
  itemReviewed: { "@type": "Organization", name: "Epicware" },
};

const HERO_STATS = [
  { value: "#1", label: "Google Map Pack, Hougang" },
  { value: "#1", label: "ChatGPT recommendation, Orchard" },
  { value: "+25%", label: "growth in calls and enquiries" },
  { value: "1.17M", label: "search impressions" },
];

const AT_A_GLANCE: { label: string; value: string }[] = [
  { label: "Client", value: "A medical aesthetic clinic, Singapore" },
  { label: "Industry", value: "Healthcare — Medical Aesthetics (YMYL category)" },
  { label: "Locations", value: "2 outlets — Orchard and Hougang" },
  { label: "Engagement", value: "1 July 2026 – ongoing" },
  { label: "Timeframe covered", value: "First 60 days" },
  {
    label: "Services",
    value:
      "Local SEO · GBP Optimisation · YMYL Content & E-E-A-T · AI Search Visibility (GEO) · Review & Reputation Management · Bad Review Removal · Brand Amplification",
  },
  { label: "Headline result", value: "#1 Map Pack and #1 organic in Hougang, top 3 Map Pack in Orchard, #1 in ChatGPT, +25% leads" },
];

const CHALLENGES = [
  {
    title: "Two outlets, two completely different battles.",
    body: "Orchard is one of the most saturated aesthetic clinic markets in Asia — dozens of clinics inside a few hundred metres, all competing for the same searches. Hougang is a different fight entirely: lower volume, more local intent, and a customer who searches \"aesthetic clinic near me\" and picks from the Map Pack. One strategy could not serve both.",
  },
  {
    title: "High-difficulty treatment keywords.",
    body: "The clinic needed to rank not just for location terms but for treatment and device queries — the searches that indicate someone is ready to book, not just browsing.",
  },
  {
    title: "Invisible in AI search.",
    body: "Patients increasingly ask ChatGPT, Gemini and Google's AI Overviews which clinic to go to. Those answers were naming competitors.",
  },
  {
    title: "A reputation layer under pressure.",
    body: "Two Google Business Profiles, negative reviews sitting unchallenged — including reviews that breached Google's own policies — and inconsistent ratings across third-party healthcare directories.",
  },
  {
    title: "A regulatory ceiling.",
    body: "Everything above had to be solved without a single piece of non-compliant advertising.",
  },
];

const RANKING_WINS: { keyword: string; result: string }[] = [
  { keyword: "hougang aesthetic clinic", result: "#1 Local Map Pack + #1 organic" },
  { keyword: "aesthetic clinic in hougang", result: "#1 organic, #2 Local Map Pack" },
  { keyword: "helios 785 pico laser", result: "#1 organic + Business Profile ranking" },
  { keyword: "aesthetic medical clinic in Orchard", result: "#3 Local Map Pack" },
  { keyword: "aesthetic medical clinic in orchard", result: "#4 organic" },
  { keyword: "aesthetic clinic orchard", result: "#5 organic" },
  { keyword: "“which is the best aesthetic medical clinic in orchard”", result: "#1 recommendation in ChatGPT" },
];

const BUSINESS_IMPACT = [
  { value: "+25%", label: "growth in calls and clinic enquiries" },
  { value: "+30%", label: "increase in brand visibility across AI Overviews" },
  { value: "+0.5★", label: "average rating increase across both outlets" },
  { value: "4+", label: "policy-violating negative reviews removed per outlet" },
  { value: "50+", label: "third-party platforms carrying verified brand placements" },
];

const WHY_IT_WORKED = [
  {
    title: "We built authority, not just keywords.",
    body: "In YMYL, Google is evaluating whether the source deserves to be trusted with a health query. Credentials, accuracy, medical review signals and content depth aren't nice-to-haves — they're the ranking factor.",
  },
  {
    title: "We treated compliance as a strategy, not a restriction.",
    body: "Working inside HCSA advertising rules forced the content toward genuine clinical usefulness. That's the same direction Google's quality guidelines push. The constraint and the algorithm want the same thing.",
  },
  {
    title: "We split the two outlets from day one.",
    body: "Orchard and Hougang are different markets with different search behaviour and different competitors. Treating them as one brand with one strategy is why most multi-outlet clinics plateau.",
  },
  {
    title: "We competed in AI search before the category did.",
    body: "Aesthetic clinics in Singapore are almost entirely absent from AI recommendation surfaces. Getting there first is a window that will not stay open.",
  },
];

const IS_THIS_YOU = [
  "You have two or more locations and can't tell which one is actually visible where",
  "You're in a saturated medical district like Orchard, Novena or Tanjong Pagar",
  "You want to rank for treatment and device keywords, not just your clinic name",
  "You've been told \"healthcare SEO takes a year\"",
  "You're invisible in ChatGPT, Gemini and AI Overviews and don't know how to check",
  "You have negative or fake reviews you've been told can't be removed",
  "You need marketing that stays inside MOH and HCSA advertising rules",
];

const RELATED_READING: { href: string; label: string }[] = [
  { href: "/local-seo-singapore", label: "Local SEO Services" },
  { href: "/gbp-optimisation-singapore", label: "GBP Optimisation" },
  { href: "/review-management-singapore", label: "Review Management" },
  { href: "/bad-review-removal-singapore", label: "Bad Review Removal" },
  { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
  { href: "/industries/healthcare-clinics", label: "Healthcare Clinics" },
];

const WHATSAPP_HREF = "https://wa.me/6590013157";
const ASSET_BASE = "/assets/case-studies/aesthetic-clinic-seo-singapore";

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

export default function AestheticClinicSEOCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Case Study · Medical Aesthetics · Singapore · 2 Outlets · 60 Days
          </span>
          <h1
            className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
          >
            Top 3 in 60 Days: How a Singapore Medical Aesthetic Clinic Won Orchard and Hougang — Without Breaking a
            Single MOH Advertising Rule
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            Healthcare is the hardest category in search. Google holds medical content to a higher standard,
            Singapore&rsquo;s advertising regulations rule out most of what marketers normally do, and every
            competitor is bidding on the same treatment keywords. This clinic engaged Epicware on 1 July 2026.
            Within two months it was ranking #1 on Google — and #1 in ChatGPT — for its core Orchard and Hougang
            queries.
          </p>

          <div className="mb-10">
            <StatRow stats={HERO_STATS} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background h-13 px-7 rounded-full font-semibold">
              <Link href="/free-audit" className="flex items-center gap-2">
                Get Your Free Clinic Visibility Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted h-13 px-7 font-semibold">
              <Link href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                Discuss Your Clinic on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-5 text-balance">
            &ldquo;We engaged Epicware for our medical aesthetic clinic and it ranked within top 3 within 1–2
            months, exceeded our expectations. They are knowledgeable for SEO and Google ranking. Thank u.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground">
            — Verified Google review, Clinic Director, medical aesthetic clinic (Singapore)
          </p>
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
            The clinic&rsquo;s name is withheld at its request. Districts, timeline and results are reported as-is.
          </p>
        </div>
      </section>

      {/* ── Why Healthcare SEO Is Different ── */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">
            Why Healthcare SEO Is a Different Sport
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Most agencies run the same playbook for a clinic that they run for a café. That&rsquo;s why most
              clinic SEO fails.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Medical aesthetics sits squarely in what Google classifies as YMYL — Your Money or Your Life. Content
              that could affect a person&rsquo;s health, safety or finances is held to a materially higher bar.
              Google&rsquo;s quality raters are explicitly instructed to demand demonstrable expertise, author
              credentials, institutional trust signals and accuracy on pages like these. Thin content, unsupported
              claims and anonymous authorship don&rsquo;t just underperform in YMYL — they get actively suppressed.
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Then there&rsquo;s Singapore&rsquo;s regulatory layer. Under the Healthcare Services (Advertisement)
              Regulations 2021 and MOH guidance, licensed clinics cannot publish before-and-after patient imagery,
              cannot promise or imply guaranteed outcomes, and face tight restrictions on promotional pricing and
              testimonial use. Google Business Profile adds its own rules on top — no graphic medical close-ups, no
              stock photography, no heavy text overlays.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-8">
              So the two levers most marketers pull for aesthetic clinics — dramatic transformation photos and
              aggressive discount messaging — are off the table entirely. That constraint is exactly where Epicware
              works. We build clinic visibility out of the things regulation permits: genuine clinical authority,
              correctly structured medical content, accurate service and practitioner data, real patient reviews
              collected compliantly, and technical signals that tell Google and AI engines this is a credible
              healthcare provider.
            </p>
          </div>

          <CtaBanner
            heading="Running a clinic and unsure if your marketing is compliant?"
            body="We'll audit your site, Google profiles and content against both Google's YMYL standards and Singapore's healthcare advertising rules — free."
            primary={{ label: "Get My Free Clinic Audit →", href: "/free-audit" }}
            secondary={{ label: "Ask a Question on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-3">The Challenge</h2>
          <p className="text-muted-foreground text-[15px] mb-8">
            The clinic came to Epicware on 1 July 2026 with a specific set of problems:
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
                <h3 className="font-display font-bold text-foreground text-lg mb-2">YMYL Content Architecture and E-E-A-T Build</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  We rebuilt how the site presents authority. Treatment pages were restructured around what a
                  patient actually needs to decide — what the procedure is, who it&rsquo;s suitable for, what&rsquo;s
                  realistic, what the recovery looks like — rather than around keyword density. Practitioner
                  credentials, clinic licensing and medical review signals were surfaced properly rather than buried
                  in an About page.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Every piece of content was written to a medical standard and checked against MOH advertising
                  restrictions before publication. No outcome guarantees. No before-and-after imagery. No
                  superlative claims we couldn&rsquo;t substantiate.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">02</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Location-Specific Local SEO for Two Outlets</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  Each outlet was given its own keyword identity, its own landing structure and its own catchment
                  strategy — so Orchard and Hougang stopped competing with each other for the same terms.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  Using EpicMap grid tracking, we mapped exactly where each clinic was visible on Google Maps by
                  keyword and by scan zone, identified which competitors owned which streets, and separated the
                  quick wins from the long fights.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">03</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Google Business Profile{" "}
                  <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
                    Optimisation
                  </Link>
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Both profiles went through our 19-point GBP audit — categories, services, treatment listings,
                  attributes, hours, practitioner information and conversion actions. Both were then kept active
                  with a compliant posting schedule built from the approved image categories only: clinic
                  environment, equipment, team headshots, exterior signage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">04</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  AI Search Visibility (
                  <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
                    GEO
                  </Link>
                  )
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  We ran a full GEO and SEO audit to identify why AI engines weren&rsquo;t citing the clinic — site
                  architecture, schema, crawlability for AI agents, and the absence of the entity and brand-mention
                  signals that large language models rely on when recommending a provider.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We then published citation-ready content structured the way AI engines extract answers, and built
                  brand presence across the sources those models actually pull from.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">05</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  Review and{" "}
                  <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
                    Reputation Management
                  </Link>
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/90 mb-3">
                  A compliant review generation system across both outlets — patients guided to leave genuine Google
                  reviews, dissatisfied patients routed to private feedback first so the clinic could resolve issues
                  before they became public.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  In parallel we audited every negative review for policy violations and ran formal removal requests
                  through Google&rsquo;s channels via our{" "}
                  <Link href="/bad-review-removal-singapore" className="text-primary font-medium hover:underline">
                    Bad Review Removal
                  </Link>{" "}
                  service, and addressed negative SEO activity targeting the clinic&rsquo;s brand.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">06</span>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Brand Amplification Across 50+ Platforms</h3>
                <p className="text-[15px] leading-relaxed text-foreground/90">
                  Consistent NAP data, clinic listings and brand mentions across 50+ third-party platforms,
                  healthcare directories and review sites — the citation and entity layer that both Google&rsquo;s
                  local algorithm and AI models use to verify that a healthcare provider is real, licensed and
                  credible.
                </p>
              </div>
            </div>
          </div>

          <CtaBanner
            heading="Want this running on your clinic?"
            body="Book a 30-minute demo. We'll audit your profiles live and show you exactly where your competitors are outranking you."
            primary={{ label: "Book a Free Demo →", href: "/book-demo#form" }}
            secondary={{ label: "Discuss on WhatsApp", href: WHATSAPP_HREF }}
          />
        </div>
      </section>

      {/* ── The Results ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-2">The Results — First 60 Days</h2>
          <p className="text-muted-foreground text-sm italic mb-12">
            This is an early-stage engagement. These are 60-day results, not a mature-campaign report — which is
            precisely what makes them notable in a YMYL category where most clinics wait six months to see
            movement.
          </p>

          {/* Ranking Wins */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Ranking Wins</h3>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card mb-6">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Keyword</th>
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {RANKING_WINS.map((row) => (
                    <tr key={row.keyword}>
                      <td className="px-5 py-3 text-foreground">{row.keyword}</td>
                      <td className="px-5 py-3 font-bold text-primary">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-2">The device keyword</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ranking #1 organically for a specific treatment device query — alongside the Business Profile —
                  captures patients at the exact moment they&rsquo;re researching a procedure they&rsquo;ve already
                  decided they want. This is the highest-intent traffic in aesthetics.
                </p>
              </div>
              <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-2">The ChatGPT result</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When a patient asks ChatGPT which is the best aesthetic medical clinic in Orchard, this clinic is
                  the answer. In one of Singapore&rsquo;s most competitive medical districts, in under two months.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic mt-8 mb-5">
              Live screenshots below — the clinic&rsquo;s name and Business Profile details are blurred throughout,
              consistent with the disclosure above.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Figure
                src="ranking-hougang-map-pack-serp.png"
                w={1200}
                h={828}
                alt="Google local map pack and organic search results for 'hougang aesthetic clinic', with the clinic's listing blurred, showing a number 1 organic ranking badge"
                caption="#1 Local Map Pack + #1 organic — “hougang aesthetic clinic”"
              />
              <Figure
                src="ranking-hougang-organic-serp.png"
                w={1693}
                h={798}
                alt="Google organic search results for 'aesthetic clinic in hougang' with the top-ranking clinic listing blurred"
                caption="#1 organic — “aesthetic clinic in hougang”"
              />
              <Figure
                src="ranking-hougang-map-pack-secondary.png"
                w={1642}
                h={861}
                alt="Google local map pack for 'aesthetic clinic in hougang' showing the clinic in the number 2 position, listing blurred"
                caption="#2 Local Map Pack — “aesthetic clinic in hougang”"
              />
              <Figure
                src="ranking-device-keyword-serp-profile.png"
                w={1735}
                h={852}
                alt="Google search results and Business Profile panel for the 'helios 785 pico laser' device keyword, with the clinic's profile details blurred"
                caption="#1 organic + Business Profile — “helios 785 pico laser”"
              />
              <Figure
                src="ranking-orchard-map-pack.png"
                w={1498}
                h={844}
                alt="Google local map pack for 'aesthetic medical clinic in Orchard' showing the clinic in the number 3 position, listing blurred"
                caption="#3 Local Map Pack — “aesthetic medical clinic in Orchard”"
              />
              <Figure
                src="ranking-orchard-organic-serp-4.png"
                w={1288}
                h={897}
                alt="Google organic search results for 'aesthetic medical clinic in orchard' with the clinic's number 4 listing blurred"
                caption="#4 organic — “aesthetic medical clinic in orchard”"
              />
              <Figure
                src="ranking-orchard-organic-serp-5.png"
                w={1317}
                h={807}
                alt="Google organic search results for 'aesthetic clinic orchard' with the clinic's number 5 listing blurred"
                caption="#5 organic — “aesthetic clinic orchard”"
              />
              <Figure
                src="ranking-chatgpt-recommendation.png"
                w={973}
                h={775}
                alt="ChatGPT response recommending a best aesthetic medical clinic in Orchard, Singapore, with the clinic's name blurred"
                caption="#1 recommendation in ChatGPT — “which is the best aesthetic medical clinic in orchard”"
              />
            </div>
          </div>

          {/* Search Visibility */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Search Visibility</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-6">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Total search impressions", "1.17M"],
                      ["Total organic clicks", "6.35K"],
                      ["Average position", "21.4"],
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
                src="aesthetic-clinic-gsc-impressions.png"
                w={1456}
                h={652}
                priority
                alt="Google Search Console 3-month chart showing 1.17M impressions and 6.35K clicks for the clinic's site"
                caption="Google Search Console — 3-month clicks and impressions"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              The impression base is the leading indicator here. Over a million impressions means the site is now
              being surfaced across a very wide keyword footprint — the top-of-funnel visibility that has to exist
              before position and click-through can be optimised. The #1 and top-3 placements above are the first
              cohort of those keywords converting into rankings. The rest follow.
            </p>
          </div>

          {/* Traffic Composition */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-foreground text-xl mb-2">Traffic Composition</h3>
            <p className="text-muted-foreground text-sm mb-5">Last 30 days (6 Aug – 4 Sep 2026):</p>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-6">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Channel</th>
                      <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-muted-foreground">Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      ["Organic Search", "56.3%"],
                      ["Direct", "41.1%"],
                      ["AI Assistant", "1.0%"],
                      ["Referral", "0.9%"],
                      ["Organic Social", "0.8%"],
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
                src="aesthetic-clinic-ga4-channels.png"
                w={1507}
                h={714}
                alt="Google Analytics 4 user acquisition report showing Organic Search, Direct, AI Assistant, Referral, and Organic Social channels"
                caption="GA4 — user acquisition by channel, last 30 days"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Two things stand out. Organic search now drives the majority of all traffic — 56% of users and 60% of
              total site engagement events — and those visitors spend more than four times as long on site as
              direct visitors. That&rsquo;s qualified intent, not accidental clicks. And there is now a measurable
              AI Assistant channel. Small in absolute terms, but it exists — patients are arriving from AI tools,
              with engagement quality well above the site average. Most clinics in Singapore have a zero in that
              row.
            </p>
          </div>

          {/* Business Impact */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-foreground text-xl mb-5">Business Impact</h3>
            <div className="mb-6">
              <StatRow stats={BUSINESS_IMPACT} cols={3} />
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-10">
              Plus: negative SEO activity identified and neutralised, and rating improvements secured across
              third-party healthcare and review platforms.
            </p>
          </div>

          <CtaBanner
            heading="60 days. Two outlets. #1 on Google and ChatGPT."
            body="Find out what the same 60 days would look like for your clinic."
            primary={{ label: "Get a Free Visibility Audit →", href: "/free-audit" }}
            secondary={{ label: "Talk to Us on WhatsApp", href: WHATSAPP_HREF }}
          />
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
          <h2 className="font-display font-bold text-foreground text-2xl lg:text-3xl mb-6">Is This You?</h2>
          <p className="text-[15px] text-muted-foreground mb-6">This will look familiar if you run a clinic and:</p>
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
            <Link href="/industries/healthcare-clinics" className="text-primary font-medium hover:underline">
              medical and healthcare clinics
            </Link>
            , dental practices, aesthetic clinics, physiotherapy and wellness providers across Singapore, Malaysia,
            UAE, the UK and the US.
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
            Your patients are already searching. And asking ChatGPT.
          </h2>
          <p className="text-white/60 text-lg mb-3 leading-relaxed">
            Book a free 30-minute demo and we&rsquo;ll run a live audit on your clinic&rsquo;s Google Business
            Profiles, local rankings, reviews and AI visibility — then show you exactly what&rsquo;s costing you
            enquiries right now.
          </p>
          <p className="text-sm text-white/40 mb-10">No obligation. No agency pitch. Just the data.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button asChild className="bg-white text-foreground hover:bg-white/90 h-13 px-7 rounded-full font-semibold">
              <Link href="/book-demo#form">Book My Free Demo →</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 h-13 px-7 font-semibold">
              <Link href="/free-audit">Get a Free Clinic Visibility Audit</Link>
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
