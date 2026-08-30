"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  MapPin, Crosshair, BarChart2, ArrowRight,
  Search, Users, CalendarDays,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Data ──────────────────────────────────────────────────────── */

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MapPin,
    title: "See local visibility clearly",
    body: "Track how your Google Maps rankings change by location, keyword, and scan area.",
  },
  {
    icon: Crosshair,
    title: "Spot gaps and competitors",
    body: "Identify who outranks you, where the gaps are, and which search zones offer easier wins.",
  },
  {
    icon: BarChart2,
    title: "Keep profiles active",
    body: "Support rankings with fresh posting activity and clear visibility signals across your service area.",
  },
];

const METRIC_CHIPS = [
  "Average rank",
  "Top 3 coverage",
  "Market share",
  "Grid-based scan",
  "Location visibility",
];

const CARDS: {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  body: string;
  src: string;
  alt: string;
}[] = [
  {
    icon: Search,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    title: "Keyword Opportunities",
    body: "Find high-intent searches customers actually use.",
    src: "/assets/workflow/keyword-identification.png",
    alt: "Keyword ranking opportunities table",
  },
  {
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "Competitor Gaps",
    body: "See who is ranking and where the gaps are.",
    src: "/assets/workflow/competitor-analysis.png",
    alt: "Competitor ranking gap analysis",
  },
  {
    icon: CalendarDays,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "Weekly GBP Posting",
    body: "Fresh posts, events, and offers — up to 5 per week.",
    src: "/assets/workflow/gbp-posting.png",
    alt: "Weekly Google Business Profile posting schedule",
  },
];

/* ── Benefit row ───────────────────────────────────────────────── */
function BenefitRow({ icon: Icon, title, body, divider }: {
  icon: LucideIcon; title: string; body: string; divider?: boolean;
}) {
  return (
    <>
      <div className="grid gap-5 py-[22px]" style={{ gridTemplateColumns: "56px 1fr" }}>
        <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-gray-900 text-[1.05rem] mb-1 leading-snug">{title}</p>
          <p className="text-gray-500 text-[0.875rem] leading-[1.55]">{body}</p>
        </div>
      </div>
      {divider && <div className="h-px bg-gray-100" />}
    </>
  );
}

/* ── Insight card ──────────────────────────────────────────────── */
function InsightCard({ icon: Icon, iconColor, iconBg, title, body, src, alt }: typeof CARDS[0]) {
  return (
    <div className="rounded-[20px] bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col">
      <div className="relative overflow-hidden bg-gray-50" style={{ height: "108px" }}>
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="340px" />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          </div>
          <span className="text-[0.82rem] font-bold text-gray-900 leading-tight">{title}</span>
        </div>
        <p className="text-[0.72rem] text-gray-500 leading-[1.5]">{body}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   Replaces the previous dark LocalSEOBlock.
   Light theme — consistent with the GBP and Review Growth sections.
══════════════════════════════════════════════════════════════════ */
export default function LocalSEOMappingSection() {
  return (
    <div className="bg-white pt-[80px] pb-[96px]">
      <div className="mx-auto" style={{ maxWidth: "1400px", width: "calc(100% - 64px)" }}>
        <div
          className="grid grid-cols-1 items-start gap-[52px]"
          style={{ gridTemplateColumns: "minmax(0, 0.7fr) minmax(0, 1.3fr)" } as React.CSSProperties}
        >

          {/* ── LEFT column ── */}
          <motion.div {...fadeIn(0)} className="flex flex-col lg:min-w-[380px]">

            {/* Step marker + label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.4)]">
                3
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-orange-500">
                Local SEO Visibility Mapping
              </span>
            </div>

            {/* Headline */}
            <h3
              className="font-bold text-gray-950 mb-6"
              style={{
                fontSize: "clamp(2.75rem, 3.6vw, 3.75rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                maxWidth: "560px",
              }}
            >
              Map Where Customers Can Actually Find You
            </h3>

            {/* Intro paragraph */}
            <p
              className="text-gray-500 leading-[1.6] mb-5"
              style={{ fontSize: "clamp(1rem, 1.15vw, 1.1rem)", maxWidth: "560px" }}
            >
              Local SEO is not just about ranking somewhere in Singapore. Your business can rank well
              in one area and be invisible just a few streets away.
            </p>

            {/* Supporting paragraph — orange left border */}
            <p
              className="text-gray-500 leading-[1.65] mb-8"
              style={{
                borderLeft: "2.5px solid #f97316",
                paddingLeft: "20px",
                fontSize: "clamp(0.875rem, 0.95vw, 0.975rem)",
                maxWidth: "560px",
              }}
            >
              Epicware maps your local search visibility by keyword, competitor, and location. We
              identify high-intent keywords, separate easy wins from competitive battles, analyse who
              is outranking you, and track your Google Maps position across nearby areas.
            </p>

            {/* Benefit card */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="px-7">
                {BENEFITS.map((b, i) => (
                  <BenefitRow key={b.title} {...b} divider={i < BENEFITS.length - 1} />
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7 pt-3">
                <Link
                  href="/local-seo-singapore"
                  className="flex items-center justify-center gap-2.5 w-full rounded-[16px] bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_22px_rgba(249,115,22,0.48)] hover:-translate-y-0.5"
                  style={{ height: "58px", fontSize: "1.05rem" }}
                >
                  Map local visibility
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </motion.div>

          {/* ── RIGHT: visual panel ── */}
          <motion.div {...fadeIn(0.08)}>
            <div
              className="relative rounded-[32px] bg-[#f5f4f9] border border-gray-100/80 overflow-hidden"
              style={{ padding: "28px" }}
            >
              {/* Faint dot-grid background */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #6d28d9 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* ── Main heatmap dashboard ── */}
              <div
                className="relative rounded-[20px] overflow-hidden border border-gray-200 bg-white shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
                style={{ height: "480px" }}
              >
                <Image
                  src="/assets/workflow/heatmap-ranking.png"
                  alt="Google Maps rank heatmap showing local SEO visibility by keyword, location, and scan area across Singapore"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 960px"
                  priority
                />

                {/* Metric chips — anchored to bottom edge of map */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                  {METRIC_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full text-white font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.30)] backdrop-blur-sm"
                      style={{
                        height: "36px",
                        paddingInline: "16px",
                        fontSize: "13px",
                        background: "rgba(38,38,42,0.88)",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Three insight cards ── */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {CARDS.map((card) => (
                  <InsightCard key={card.title} {...card} />
                ))}
              </div>

              {/* ── Bottom message bar ── */}
              <div className="mt-4 flex items-center gap-4 rounded-[18px] bg-white border border-emerald-200 px-6 py-5 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                <p className="text-[0.9rem] leading-[1.5] text-gray-700">
                  <span className="font-bold text-emerald-600">
                    We don&apos;t just optimise the profile once.
                  </span>{" "}
                  We keep feeding it with fresh signals every week — up to 5 Google Business Profile
                  posts per week.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
