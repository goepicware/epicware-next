"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Code2,
  FileSearch,
  Link2,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function BenefitRow({
  icon: Icon, iconBg, iconColor, title, body, divider,
}: {
  icon: LucideIcon; iconBg: string; iconColor: string;
  title: string; body: string; divider?: boolean;
}) {
  return (
    <>
      <div className="flex items-start gap-4 py-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
          <Icon className={`w-[22px] h-[22px] ${iconColor}`} />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="text-[0.975rem] font-semibold text-gray-900 mb-1 leading-snug">{title}</p>
          <p className="text-[0.845rem] text-gray-500 leading-[1.5]">{body}</p>
        </div>
      </div>
      {divider && <div className="h-px bg-gray-100" />}
    </>
  );
}

const BENEFITS: { icon: LucideIcon; iconBg: string; iconColor: string; title: string; body: string }[] = [
  {
    icon: Code2,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Technical SEO",
    body: "Crawlability, indexing, Core Web Vitals, schema, and site speed — the foundation that lets Google and AI tools read your site at all.",
  },
  {
    icon: FileSearch,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    title: "On-page & content",
    body: "Every page built around one clear keyword, with titles, headings, and content written for the searches your customers actually make.",
  },
  {
    icon: Link2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Off-page, AEO & GEO",
    body: "High-authority backlinks and citations, plus the structured data and entity signals that get you cited by AI Overviews, ChatGPT, and Gemini.",
  },
];

const AUDIT_ITEMS = [
  { label: "Technical SEO audit", status: "Complete", ok: true },
  { label: "On-page optimisation", status: "32 pages", ok: true },
  { label: "AEO / GEO readiness", status: "Scored", ok: true },
  { label: "Backlink profile", status: "Reviewed", ok: true },
  { label: "Keyword rankings", status: "Tracked live", ok: true },
];

export default function SEOServicesSection() {
  return (
    <div className="bg-[#fafdfc] pt-10 pb-14 lg:pt-[52px] lg:pb-[68px]">
      <div className="mx-auto max-w-[1320px] w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(390px,_0.82fr)_minmax(460px,_1fr)] gap-8 lg:gap-[52px] items-start">

          {/* LEFT — label + headline + benefit card */}
          <motion.div {...fadeIn(0)} className="order-1 flex flex-col">
            <div className="flex items-center gap-3 mb-[22px]">
              <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(13,148,136,0.4)]">
                6
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-teal-700">
                AI Powered SEO Services
              </span>
            </div>

            <motion.h3
              {...fadeIn(0.05)}
              className="font-bold text-gray-950 mb-5 max-w-[570px]"
              style={{ fontSize: "clamp(2.625rem, 3.4vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}
            >
              Rank Your Website, Not Just Your Google Profile
            </motion.h3>

            <motion.div
              {...fadeIn(0.1)}
              className="flex-1 rounded-[24px] lg:rounded-[26px] border border-gray-100 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col"
            >
              <div className="px-5 lg:px-6 flex-1">
                {BENEFITS.map((b, i) => (
                  <BenefitRow key={b.title} {...b} divider={i < BENEFITS.length - 1} />
                ))}
              </div>

              <div className="px-5 lg:px-6 pb-5 pt-2">
                <Link
                  href="/locations/singapore/seo"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-[14px] bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_22px_rgba(13,148,136,0.48)] hover:-translate-y-0.5"
                  style={{ height: "56px", fontSize: "1rem" }}
                >
                  Rank my website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — visual panel */}
          <motion.div {...fadeIn(0.08)} className="order-2">
            <div className="relative rounded-[28px] lg:rounded-[30px] bg-[#eefbf7] border border-teal-100/60 shadow-sm overflow-hidden p-6 lg:p-7">
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative bg-white rounded-[20px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Search className="w-4 h-4 text-teal-600" />
                  <p className="text-[0.95rem] font-bold text-gray-900 leading-tight">SEO & AI Visibility Audit</p>
                </div>
                <p className="text-[0.75rem] text-gray-500 mb-3">epicware.ai/locations/singapore/seo</p>

                <div className="space-y-1.5 mb-4">
                  {AUDIT_ITEMS.map(({ label, status }) => (
                    <div key={label} className="flex items-center justify-between gap-1.5 h-8">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="text-[0.8rem] text-gray-700 truncate">{label}</span>
                      </div>
                      <span className="text-[0.7rem] font-bold text-teal-600 shrink-0">{status}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-[0.8rem] font-semibold text-gray-700">Rankings tracked live</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-500" />
                    <span className="text-[0.8rem] font-semibold text-gray-700">AEO + GEO included</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
