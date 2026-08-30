"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WorkflowAccordion from "./WorkflowAccordion";

/* ─── Animation helpers ──────────────────────────────────────────── */
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Screenshot frame ───────────────────────────────────────────── */
function Shot({
  src,
  alt,
  w = 1440,
  h = 900,
  className = "",
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-[0_6px_40px_rgba(0,0,0,0.08)] ${className}`}>
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto" />
    </div>
  );
}

/* ─── Small pill chip ────────────────────────────────────────────── */
function Chip({ label, variant = "violet" }: { label: string; variant?: string }) {
  const s: Record<string, string> = {
    violet: "bg-violet-50 text-violet-700 border-violet-200",
    amber:  "bg-amber-50 text-amber-700 border-amber-200",
    emerald:"bg-emerald-50 text-emerald-700 border-emerald-200",
    blue:   "bg-blue-50 text-blue-700 border-blue-200",
    teal:   "bg-teal-50 text-teal-700 border-teal-200",
    rose:   "bg-rose-50 text-rose-700 border-rose-200",
    gray:   "bg-gray-50 text-gray-600 border-gray-200",
    white:  "bg-white/10 text-white/80 border-white/20",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${s[variant] ?? s.gray}`}>
      {label}
    </span>
  );
}

/* ─── Step number badge ──────────────────────────────────────────── */
function StepBadge({ n, color }: { n: number; color: string }) {
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${color}`}>
      {n}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SECTION INTRO — eyebrow + headline + stepper
═══════════════════════════════════════════════════════════════════ */
const STEPS = [
  { label: "Google Profile",     color: "bg-violet-500" },
  { label: "Reviews",            color: "bg-amber-500"  },
  { label: "Local Rankings",     color: "bg-emerald-500"},
  { label: "Website + AI",       color: "bg-blue-500"   },
  { label: "Social Distribution",color: "bg-rose-500"   },
];

function WorkflowIntro() {
  return (
    <div className="bg-white pt-24 pb-14 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeIn(0)} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-6">
            The Epicware Approach
          </div>
          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}
          >
            The Complete Local Growth Workflow
          </h2>
          <p className="text-gray-500 text-[1.02rem] leading-relaxed">
            From Google Maps optimisation to AI visibility, reviews, content, and social media,
            we build the full discovery system that helps customers find you, trust you, and choose you.
          </p>
        </motion.div>

        {/* Stepper */}
        <motion.div {...fadeIn(0.1)} className="flex flex-wrap gap-2.5 justify-center">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 shadow-sm"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold ${step.color}`}>
                {i + 1}
              </div>
              <span className="text-[0.8rem] font-semibold text-gray-700">{step.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BLOCK 2 — Review Growth & Reputation Management
═══════════════════════════════════════════════════════════════════ */
function ReviewsBlock() {
  const chips = [
    "Smart review filtering",
    "Private feedback capture",
    "Google review routing",
    "Sentiment tracking",
    "Urgent review alerts",
    "Review keyword insights",
  ];

  const flows = [
    { from: "Customer feedback", to: "Positive reviews", end: "Google visibility", endColor: "text-emerald-600" },
    { from: "Customer feedback", to: "Private feedback",  end: "Private recovery",  endColor: "text-blue-600"    },
  ];

  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div {...fadeIn(0)} className="mb-8 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <StepBadge n={2} color="bg-amber-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-amber-600">
              Review Growth & Reputation Management
            </span>
          </div>
          <h3
            className="font-bold text-gray-950 leading-snug tracking-[-0.025em] mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
          >
            Turn Every Customer Visit Into Reputation Growth
          </h3>
          <p className="text-gray-500 leading-relaxed mb-3 text-[0.95rem]">
            We help you collect more positive reviews, identify unhappy customers earlier, and manage
            your online reputation before it affects calls, bookings, or walk-ins.
          </p>
          <p className="text-gray-500 leading-relaxed text-[0.9rem] border-l-2 border-amber-200 pl-4">
            Happy customers are guided toward leaving a public Google review, while unhappy customers
            are encouraged to share private feedback first — giving your team a chance to respond,
            recover, and improve. We also help identify fake, spam, harmful, or policy-violating
            reviews that may qualify for removal.
          </p>
        </motion.div>

        {/* Mini flow chips */}
        <motion.div {...fadeIn(0.08)} className="flex flex-col sm:flex-row gap-3 mb-10">
          {flows.map((flow, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span className="text-[11px] text-gray-500 font-medium">{flow.from}</span>
              <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />
              <span className="text-[11px] text-gray-600 font-semibold">{flow.to}</span>
              <ArrowRight className="w-3 h-3 text-gray-300 shrink-0" />
              <span className={`text-[11px] font-bold ${flow.endColor}`}>{flow.end}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Mobile (< lg): stacked layout ── */}
        <div className="flex flex-col gap-5 lg:hidden mb-6">
          <motion.div {...fadeIn(0.1)}>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-w-[300px] mx-auto max-h-[480px]">
              <Image
                src="/assets/workflow/smart-review-flow.png"
                alt="Smart review journey mobile flow"
                width={390}
                height={720}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-[11px] font-semibold text-gray-400 mt-2">Smart Review Journey</p>
          </motion.div>
          <motion.div {...fadeIn(0.15)}>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-h-[300px]">
              <Image
                src="/assets/workflow/reputation-dashboard.png"
                alt="Reputation Command Centre dashboard"
                width={1200}
                height={750}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-[11px] font-semibold text-gray-400 mt-2">Reputation Command Centre</p>
          </motion.div>
        </div>

        {/* ── Desktop (lg+): overlap composition ── */}
        {/*
          Dashboard spans right ~78% of the container (left: 260px → right edge).
          Mobile card sits at left: 0, z-10, overlapping the dashboard's left ~60px.
          Outer container min-height = mobile card height = 540px.
        */}
        <motion.div
          {...fadeIn(0.1)}
          className="relative hidden lg:block mb-8"
          style={{ minHeight: "540px" }}
        >
          {/* Warm amber glow behind mobile card */}
          <div
            className="absolute left-0 top-0 pointer-events-none -z-10 rounded-3xl bg-amber-200/30 blur-3xl"
            style={{ width: "420px", height: "620px" }}
          />

          {/* Dashboard — dominant background element */}
          <div
            className="absolute right-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-[0_8px_48px_rgba(0,0,0,0.08)]"
            style={{ left: "260px", top: "40px", bottom: 0 }}
          >
            <Image
              src="/assets/workflow/reputation-dashboard.png"
              alt="Reputation Command Centre dashboard"
              width={1200}
              height={750}
              className="w-full h-full"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-gray-100">
              <span className="text-[10px] font-bold text-gray-700">Reputation Command Centre</span>
            </div>
          </div>

          {/* Mobile card — customer-journey preview, floats over dashboard left */}
          <div
            className="absolute left-0 top-0 z-10 overflow-hidden rounded-2xl border border-orange-50 bg-white shadow-[0_8px_36px_rgba(245,158,11,0.22),0_4px_16px_rgba(0,0,0,0.12)]"
            style={{ width: "310px", height: "540px" }}
          >
            <Image
              src="/assets/workflow/smart-review-flow.png"
              alt="Smart review journey mobile flow"
              width={390}
              height={720}
              className="w-full h-full"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-amber-100">
              <span className="text-[10px] font-bold text-amber-700">Smart Review Journey</span>
            </div>
          </div>
        </motion.div>

        {/* Feature chips — connected to the screenshot system */}
        <motion.div {...fadeIn(0.2)} className="flex flex-wrap gap-2">
          {chips.map((c) => <Chip key={c} label={c} variant="amber" />)}
        </motion.div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BLOCK 3 — Local SEO Visibility Mapping (DARK)
═══════════════════════════════════════════════════════════════════ */
function LocalSEOBlock() {
  const cards = [
    {
      title: "Keyword Opportunities",
      body: "Find high-intent searches customers actually use.",
      src: "/assets/workflow/keyword-identification.png",
      alt: "Keyword identification and opportunity mapping",
    },
    {
      title: "Competitor Gaps",
      body: "See who is ranking and where the gaps are.",
      src: "/assets/workflow/competitor-analysis.png",
      alt: "Competitor ranking analysis",
    },
    {
      title: "Weekly GBP Posting",
      body: "Fresh posts, events, and offers — up to 5 per week.",
      src: "/assets/workflow/gbp-posting.png",
      alt: "Google Business Profile posting calendar",
    },
  ];

  const heatmapChips = ["Average rank","Top 3 coverage","Market share","Grid-based scan","Location visibility"];

  return (
    <div className="relative bg-[#070710] py-20 lg:py-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-600/15 blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[140px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div {...fadeIn(0)} className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <StepBadge n={3} color="bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-400">
              Local SEO Visibility Mapping
            </span>
          </div>
          <h3
            className="font-bold text-white leading-snug tracking-[-0.025em] mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
          >
            Map Where Customers Can Actually Find You
          </h3>
          <p className="text-white/60 leading-relaxed mb-3 text-[0.95rem]">
            Local SEO is not just about ranking somewhere in Singapore. Your business can rank well
            in one area and be invisible just a few streets away.
          </p>
          <p className="text-white/50 leading-relaxed text-[0.9rem] border-l-2 border-emerald-500/40 pl-4">
            Epicware maps your local search visibility by keyword, competitor, and location. We
            identify high-intent keywords, separate easy wins from competitive battles, analyse who
            is outranking you, and track your Google Maps position across nearby areas.
          </p>
        </motion.div>

        {/* Main heatmap screenshot */}
        <motion.div {...fadeIn(0.08)} className="mb-6 relative">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_8px_60px_rgba(0,0,0,0.4)] bg-white/[0.03]">
            <Image
              src="/assets/workflow/heatmap-ranking.png"
              alt="Google Maps rank heatmap — local visibility by location"
              width={1440}
              height={700}
              className="w-full h-auto"
            />
          </div>
          {/* Chips over heatmap */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {heatmapChips.map((c) => (
              <span key={c} className="bg-black/60 backdrop-blur-sm text-white/80 border border-white/10 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 3 supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {cards.map((card, i) => (
            <motion.div key={card.title} {...fadeIn(0.1 + i * 0.07)}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden hover:border-emerald-500/20 transition-colors duration-300">
                <div className="aspect-video overflow-hidden bg-white/[0.03]">
                  <Image src={card.src} alt={card.alt} width={600} height={337} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-4">
                  <p className="text-[0.875rem] font-bold text-white mb-1">{card.title}</p>
                  <p className="text-[0.8rem] text-white/50">{card.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Posting callout */}
        <motion.div {...fadeIn(0.28)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <p className="text-[0.875rem] text-emerald-300 font-medium">
            We don&apos;t just optimise the profile once.{" "}
            <span className="text-white font-semibold">
              We keep feeding it with fresh signals every week — up to 5 Google Business Profile posts per week.
            </span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BLOCK 4 — Website + AI Visibility Engine
═══════════════════════════════════════════════════════════════════ */
function WebsiteAIBlock() {
  const supporting = [
    {
      n: "02",
      title: "Structure",
      caption: "Build service, location, and supporting page architecture.",
      src: "/assets/workflow/site-architecture.png",
      alt: "Website and page architecture diagram",
      numColor: "text-violet-500",
      border: "border-violet-100",
    },
    {
      n: "03",
      title: "Publish",
      caption: "Create citation-ready blog posts and AI-friendly articles.",
      src: "/assets/workflow/blog-content-engine.png",
      alt: "Blog and content engine interface",
      numColor: "text-teal-600",
      border: "border-teal-100",
    },
    {
      n: "04",
      title: "Amplify",
      caption: "Find brand mention opportunities across relevant conversations.",
      src: "/assets/workflow/brand-mention-reddit.png",
      alt: "Brand mention and Reddit opportunity finder",
      numColor: "text-rose-500",
      border: "border-rose-100",
    },
  ];

  const chips = ["AI crawlability","Structured data","Site architecture","AI citation articles","Internal links","Brand mentions","Reddit visibility"];

  return (
    <div className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header — 2-col text */}
        <motion.div {...fadeIn(0)} className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <StepBadge n={4} color="bg-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Website + AI Visibility Engine
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <div>
              <h3
                className="font-bold text-gray-950 leading-snug tracking-[-0.025em] mb-4"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
              >
                Make Your Website Easier For Google And AI To Trust
              </h3>
              <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                Search is changing. Customers are no longer only typing into Google — they are asking
                ChatGPT, Gemini, Perplexity, and AI Overviews who to trust, where to go, and which
                business to choose.
              </p>
            </div>
            <div>
              <p className="text-gray-500 leading-relaxed text-[0.9rem] mb-4 border-l-2 border-blue-200 pl-4">
                Epicware runs a full GEO (AI Search Optimisation) and SEO audit to identify gaps in
                your website structure, content quality, technical setup, schema, AI crawlability, and
                brand authority. From there, we build a clearer site architecture, publish useful
                articles, and create brand mention opportunities.
              </p>
              <p className="text-[0.875rem] font-semibold text-gray-700">
                &ldquo;Google Maps gets you discovered locally. Your website and brand authority help Google
                and AI engines decide whether you are credible enough to recommend.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual layout — 58% featured Audit | 42% supporting stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-5 items-start mb-8">

          {/* ── Featured: GEO Audit card ── */}
          <motion.div {...fadeIn(0.08)}>
            <div className="rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-[0_8px_48px_rgba(59,130,246,0.12),0_2px_16px_rgba(0,0,0,0.06)]">
              {/* Subtle top gradient accent */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400" />

              {/* Dominant screenshot */}
              <div className="overflow-hidden" style={{ height: "460px" }}>
                <Image
                  src="/assets/workflow/geo-audit-report-v2.png"
                  alt="Full GEO and SEO audit report"
                  width={900}
                  height={700}
                  className="w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Card label */}
              <div className="px-5 py-4 border-t border-blue-50 bg-blue-50/40">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold tracking-widest text-blue-600">01</span>
                  <span className="text-[0.9rem] font-bold text-gray-900">Audit</span>
                </div>
                <p className="text-[0.8rem] text-gray-500 leading-relaxed">
                  Diagnose website, SEO, and AI visibility gaps.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Supporting: Structure · Publish · Amplify (stacked) ── */}
          <div className="flex flex-col gap-4">
            {supporting.map((card, i) => (
              <motion.div key={card.n} {...fadeIn(0.14 + i * 0.08)}>
                <div className={`flex overflow-hidden rounded-2xl border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] transition-shadow duration-300 ${card.border}`}>
                  {/* Thumbnail */}
                  <div className="shrink-0 w-[42%] overflow-hidden bg-gray-50" style={{ height: "152px" }}>
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={400}
                      height={280}
                      className="w-full h-full"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col justify-center px-4 py-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[11px] font-bold tracking-widest ${card.numColor}`}>{card.n}</span>
                      <span className="text-[0.875rem] font-bold text-gray-900">{card.title}</span>
                    </div>
                    <p className="text-[0.78rem] text-gray-500 leading-relaxed">{card.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Feature chips */}
        <motion.div {...fadeIn(0.38)} className="flex flex-wrap gap-2">
          {chips.map((c) => <Chip key={c} label={c} variant="blue" />)}
        </motion.div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   BLOCK 5 — Social Content Distribution Engine
═══════════════════════════════════════════════════════════════════ */
function SocialBlock() {
  const labels = [
    "AI-generated post creative",
    "Captions, hashtags, and CTA",
    "Review and approval workflow",
    "Multi-platform calendar",
  ];

  return (
    <div className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* 42 / 58 split — text left, layered visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-14 items-center">

          {/* ── LEFT: text ── */}
          <div className="order-1">
            <motion.div {...fadeIn(0)} className="flex items-center gap-3 mb-5">
              <StepBadge n={5} color="bg-rose-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-rose-600">
                Social Content Distribution Engine
              </span>
            </motion.div>

            <motion.h3
              {...fadeIn(0.06)}
              className="font-bold text-gray-950 leading-snug tracking-[-0.025em] mb-4"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
            >
              Turn Local SEO Insights Into Social Content
            </motion.h3>

            <motion.p {...fadeIn(0.1)} className="text-gray-500 leading-relaxed mb-4 text-[0.95rem]">
              Your local SEO strategy should not live only inside Google. The same keywords, offers,
              services, FAQs, and customer pain points can be turned into consistent social content.
            </motion.p>

            <motion.p {...fadeIn(0.13)} className="text-gray-500 leading-relaxed mb-6 text-[0.9rem] border-l-2 border-rose-200 pl-4">
              Epicware generates posts, captions, hashtags, CTAs, and visual ideas based on your
              business and local search strategy. Your team can review, edit, approve, and schedule
              content across Facebook, Instagram, YouTube, and TikTok from one place.
            </motion.p>

            <motion.div {...fadeIn(0.17)} className="space-y-2.5 mb-5">
              {labels.map((l) => (
                <div key={l} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span className="text-[0.875rem] font-medium text-gray-700">{l}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeIn(0.2)} className="flex flex-wrap gap-1.5 mb-5">
              {["Facebook","Instagram","YouTube","TikTok"].map((p) => (
                <Chip key={p} label={p} variant="rose" />
              ))}
            </motion.div>

            {/* Sales line — highlighted quote block */}
            <motion.div
              {...fadeIn(0.23)}
              className="rounded-xl bg-rose-50 border border-rose-100 px-4 py-3"
            >
              <p className="text-[0.875rem] font-semibold text-gray-800 leading-snug">
                Google helps customers find you.{" "}
                <span className="text-rose-600">Social helps them remember you.</span>
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: layered product visual ── */}
          <motion.div {...fadeIn(0.08)} className="order-2">
            {/*
              pb reserves space for the calendar card that hangs below the main screenshot.
              On mobile: main=320px + pb=90px = 410px container, calendar=160px tall
              On desktop: main=480px + pb=140px = 620px container, calendar=240px tall
            */}
            <div className="relative pb-[90px] lg:pb-[140px]">

              {/* Soft rose glow behind main card */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-rose-100/50 blur-2xl pointer-events-none" />

              {/* ── Main hero: post editor ── */}
              <div className="relative z-10 overflow-hidden rounded-2xl border border-rose-100/60 bg-gray-50 shadow-[0_8px_48px_rgba(244,63,94,0.10),0_2px_12px_rgba(0,0,0,0.07)]">
                <div className="h-[320px] lg:h-[480px] overflow-hidden">
                  <Image
                    src="/assets/workflow/social-post-editor.png"
                    alt="AI-generated social media post editor"
                    width={1200}
                    height={750}
                    className="w-full h-full"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                {/* Floating label inside frame */}
                <div className="absolute bottom-3 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-rose-100">
                  <span className="text-[10px] font-bold text-rose-600">AI-generated post creative</span>
                </div>
              </div>

              {/* ── Supporting: calendar — bottom-right overlap ── */}
              <div className="absolute bottom-0 right-0 z-20 w-[54%] h-[160px] lg:h-[240px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.11)]">
                <Image
                  src="/assets/workflow/social-calendar.png"
                  alt="Multi-platform social content calendar"
                  width={1200}
                  height={600}
                  className="w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div className="absolute bottom-2 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-600">Multi-platform calendar</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FINAL CTA BAND
═══════════════════════════════════════════════════════════════════ */
function WorkflowCTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div {...fadeIn(0)}>
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/50 mb-7">
            Free Visibility Audit
          </div>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
          >
            Want To See Where Your Business Is Losing Visibility?
          </h2>
          <p className="text-white/60 leading-relaxed mb-10 text-[1rem]">
            We&apos;ll audit your Google profile, reviews, local rankings, website, AI visibility,
            and social presence — then show you the biggest opportunities to win more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full bg-white text-gray-950 text-[0.9rem] font-semibold hover:bg-white/90 transition-all duration-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] group"
            >
              Get Your Free Local Visibility Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full border border-white/30 text-white text-[0.9rem] font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════════════ */
export default function LocalGrowthWorkflowSection() {
  return (
    <section aria-label="Complete Local Growth Workflow">
      <WorkflowIntro />
      <WorkflowAccordion />
      <WorkflowCTA />
    </section>
  );
}
