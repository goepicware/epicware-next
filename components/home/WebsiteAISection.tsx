"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Search, FileEdit, Megaphone, ArrowRight,
  CheckCircle2, Bold, Italic, ImageIcon,
  AlignLeft, List,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Data ──────────────────────────────────────────────────────── */

const BENEFITS: { num: string; icon: LucideIcon; title: string; body: string }[] = [
  { num: "01", icon: Search,   title: "Audit",   body: "Diagnose website, SEO, and AI visibility gaps."                       },
  { num: "02", icon: FileEdit, title: "Publish",  body: "Create citation-ready blog posts and AI-friendly articles."          },
  { num: "03", icon: Megaphone,title: "Amplify",  body: "Find brand mention opportunities across relevant conversations."     },
];

const CHIPS = [
  "AI crawlability", "Structured data", "Site architecture", "AI citation articles",
  "Internal links", "Brand mentions", "Reddit visibility",
];

/* ── Step card mock-UIs ────────────────────────────────────────── */

function AuditMock() {
  return (
    <div className="w-full max-w-[152px] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-violet-600 px-3 py-2">
        <p className="text-white text-[8.5px] font-bold tracking-wide">GEO + SEO Audit Report</p>
      </div>
      <div className="px-3 py-2.5">
        <div className="flex items-baseline gap-1 mb-0.5">
          <span className="text-red-500 font-bold" style={{ fontSize: "22px", lineHeight: 1 }}>19</span>
          <span className="text-gray-400 text-[11px]">/100</span>
        </div>
        <p className="text-red-400 font-bold mb-2.5" style={{ fontSize: "7px", letterSpacing: "0.05em" }}>
          FULL GEO + SEO SCORE — CRITICAL
        </p>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5 mb-1.5">
            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
            <div className="h-1.5 flex-1 bg-gray-100 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StructureMock() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Root page */}
      <div className="w-[58px] h-7 rounded-lg bg-blue-500 flex items-center justify-center shadow-sm">
        <div className="w-8 h-1.5 bg-white/70 rounded-full" />
      </div>
      {/* Connector line + children */}
      <div className="relative flex flex-col items-center gap-1.5 w-full">
        {/* Vertical trunk */}
        <div className="w-px h-4 bg-blue-200" />
        {/* Horizontal bar */}
        <div className="relative w-[148px] flex items-start justify-between">
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-blue-200" />
          {/* Vertical drops + child boxes */}
          {[
            { bg: "bg-blue-100", border: "border-blue-200" },
            { bg: "bg-green-100", border: "border-green-200" },
            { bg: "bg-violet-100", border: "border-violet-200" },
          ].map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-1 pt-0">
              <div className="w-px h-3 bg-blue-200" />
              <div className={`w-[38px] h-6 rounded-md border ${c.bg} ${c.border}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PublishMock() {
  return (
    <div className="w-full max-w-[148px] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-gray-100 bg-gray-50/60">
        <span className="font-bold text-gray-500" style={{ fontSize: "10px" }}>B</span>
        <span className="italic text-gray-400 ml-0.5" style={{ fontSize: "10px" }}>I</span>
        <span className="text-gray-500 ml-0.5" style={{ fontSize: "9px", fontWeight: 600 }}>H2</span>
        <List className="w-2.5 h-2.5 text-gray-400 ml-0.5" />
        <AlignLeft className="w-2.5 h-2.5 text-gray-400" />
        <Bold className="w-2.5 h-2.5 text-gray-400" />
        <Italic className="w-2.5 h-2.5 text-gray-300" />
      </div>
      {/* Image placeholder */}
      <div className="mx-2.5 mt-2 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
        <ImageIcon className="w-4 h-4 text-gray-300" />
      </div>
      {/* Text lines */}
      <div className="px-2.5 pt-2 pb-2.5 space-y-1.5">
        {[100, 85, 92, 70].map((w, i) => (
          <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function AmplifyMock() {
  const platforms = [
    { letter: "G", bg: "bg-blue-500",    text: "Google" },
    { letter: "C", bg: "bg-[#10a37f]",   text: "ChatGPT" },
    { letter: "P", bg: "bg-gray-800",    text: "Perplexity" },
  ];
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100">
        <Megaphone className="w-6 h-6 text-blue-500" />
      </div>
      <div className="w-full space-y-1.5" style={{ maxWidth: "140px" }}>
        {platforms.map((p) => (
          <div key={p.text} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full ${p.bg} flex items-center justify-center text-white shrink-0`}
              style={{ fontSize: "8px", fontWeight: 800 }}>
              {p.letter}
            </div>
            <div className="flex-1 space-y-0.5">
              <div className="h-1.5 bg-gray-100 rounded-full" />
              <div className="h-1 bg-gray-50 rounded-full w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step definitions ──────────────────────────────────────────── */
const STEPS = [
  { num: "01", title: "Audit",     caption: "GEO + SEO audit",                                              Mock: AuditMock    },
  { num: "02", title: "Structure", caption: "Build service, location, and supporting page architecture.",    Mock: StructureMock },
  { num: "03", title: "Publish",   caption: "Create citation-ready blog posts and AI-friendly articles.",   Mock: PublishMock  },
  { num: "04", title: "Amplify",   caption: "Find brand mention opportunities across relevant conversations.", Mock: AmplifyMock },
];

/* ── Connector SVG overlay ─────────────────────────────────────── */
function ConnectorArrows() {
  /*
    viewBox "0 0 100 100" with circle centers at (25,25), (75,25), (25,75), (75,75).
    Circle radius ≈ 22 in viewBox units.
    Arrows connect right/left edges of adjacent circles.
  */
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <defs>
        <marker id="aHead" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 Z" fill="#93c5fd" />
        </marker>
        <marker id="aHeadDown" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,0 L2.5,5 Z" fill="#93c5fd" />
        </marker>
      </defs>

      {/* Arrow 1: TL → TR (horizontal, midway between circles) */}
      <path
        d="M 47,23 L 53,23"
        stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2.2,1.6"
        fill="none" markerEnd="url(#aHead)"
      />

      {/* Arrow 2: TR ↓ then ← to BL (L-shaped through the center gap) */}
      <path
        d="M 75,47 L 75,54 Q 75,56 73,56 L 27,56 Q 25,56 25,54 L 25,53"
        stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2.2,1.6"
        fill="none" markerEnd="url(#aHeadDown)"
      />

      {/* Arrow 3: BL → BR (horizontal) */}
      <path
        d="M 47,77 L 53,77"
        stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2.2,1.6"
        fill="none" markerEnd="url(#aHead)"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function WebsiteAISection() {
  return (
    <div className="bg-[#fafaff] pt-[80px] pb-[96px]">
      <div className="mx-auto" style={{ maxWidth: "1400px", width: "calc(100% - 64px)" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-[52px] items-start"
        >

          {/* ══════════════════ LEFT ══════════════════ */}
          <motion.div {...fadeIn(0)} className="flex flex-col">

            {/* Step marker + label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(37,99,235,0.4)]">
                4
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-blue-600">
                Website + AI Visibility Engine
              </span>
            </div>

            {/* Headline */}
            <h3
              className="font-bold text-gray-950 mb-6"
              style={{
                fontSize: "clamp(2.75rem, 3.6vw, 3.75rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.035em",
                maxWidth: "590px",
              }}
            >
              Make Your Website Easier For Google And AI To Trust
            </h3>

            {/* Intro paragraph */}
            <p
              className="text-gray-500 leading-[1.6] mb-8"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.075rem)", maxWidth: "570px" }}
            >
              Search is changing. Customers are no longer only typing into Google — they are asking
              ChatGPT, Gemini, Perplexity, and AI Overviews who to trust, where to go, and which
              business to choose.
            </p>

            {/* Benefit card */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="px-7">
                {BENEFITS.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title}>
                      <div className="grid gap-5 py-6" style={{ gridTemplateColumns: "72px 1fr" }}>
                        <div className="w-[68px] h-[68px] rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="font-bold text-gray-900 mb-1 leading-snug" style={{ fontSize: "1.05rem" }}>
                            <span className="text-blue-600 mr-2 font-bold" style={{ fontSize: "0.9rem" }}>{b.num}</span>
                            {b.title}
                          </p>
                          <p className="text-gray-500 text-[0.875rem] leading-[1.55]">{b.body}</p>
                        </div>
                      </div>
                      {i < BENEFITS.length - 1 && <div className="h-px bg-gray-100" />}
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7 pt-3">
                <Link
                  href="/ai-search-visibility-singapore"
                  className="flex items-center justify-center gap-2.5 w-full rounded-[16px] bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.48)] hover:-translate-y-0.5"
                  style={{ height: "58px", fontSize: "1.05rem" }}
                >
                  Run visibility engine
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════ RIGHT ══════════════════ */}
          <motion.div {...fadeIn(0.08)} className="flex flex-col">

            {/* Supporting paragraph + quote */}
            <div style={{ borderLeft: "2.5px solid #bfdbfe", paddingLeft: "22px" }}>
              <p
                className="text-gray-500 leading-[1.6]"
                style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}
              >
                Epicware runs a full GEO (AI Search Optimisation) and SEO audit to identify gaps in your
                website structure, content quality, technical setup, schema, AI crawlability, and brand
                authority. From there, we build a clearer site architecture, publish useful articles, and
                create brand mention opportunities.
              </p>
              <p
                className="font-bold text-gray-900 mt-4 leading-[1.45]"
                style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
              >
                &ldquo;Google Maps gets you discovered locally. Your website and brand authority help Google
                and AI engines decide whether you are credible enough to recommend.&rdquo;
              </p>
            </div>

            {/* Visual flow panel */}
            <div
              className="relative mt-6 rounded-[32px] bg-[#eef2ff] border border-blue-100/70 overflow-hidden"
              style={{ padding: "28px" }}
            >
              {/* Faint dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* 2×2 step grid */}
              <div className="relative grid grid-cols-2 gap-7 lg:gap-8">
                {/* Connector arrows overlay */}
                <ConnectorArrows />

                {STEPS.map(({ num, title, caption, Mock }) => (
                  <div key={num} className="relative flex justify-center">
                    {/*
                      Outer wrapper: provides shadow without being clipped.
                      Inner div: rounded-full clips content, centers everything.
                      aspect-square ensures it stays circular.
                    */}
                    <div
                      className="w-full rounded-full shadow-[0_4px_24px_rgba(37,99,235,0.09),0_1px_6px_rgba(0,0,0,0.05)] border border-blue-100 bg-white"
                      style={{ maxWidth: "290px", aspectRatio: "1/1" }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden flex flex-col items-center justify-center text-center"
                        style={{ padding: "20px" }}>
                        <p className="font-bold text-blue-600 mb-3" style={{ fontSize: "0.82rem" }}>
                          {num}&nbsp;&nbsp;{title}
                        </p>
                        <div className="flex items-center justify-center w-full">
                          <Mock />
                        </div>
                        <p className="text-gray-500 mt-3 leading-[1.4]"
                          style={{ fontSize: "0.7rem", maxWidth: "150px" }}>
                          {caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Capability chips */}
              <div className="mt-7 flex flex-wrap gap-2 justify-center">
                {CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-blue-300 text-blue-600 font-medium bg-white/70"
                    style={{ height: "40px", paddingInline: "18px", fontSize: "0.875rem" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
