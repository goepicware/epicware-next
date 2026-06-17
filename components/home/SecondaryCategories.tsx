"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Customer journey steps inside the large card ── */
const STEPS = [
  { num: "01", label: "Google Maps", sub: "Rank in Map Pack",          hex: "#8b5cf6" },
  { num: "02", label: "AI Discovery", sub: "ChatGPT · Gemini cited",   hex: "#06b6d4" },
  { num: "03", label: "Review Trust", sub: "5★ social proof",          hex: "#10b981" },
  { num: "04", label: "Revenue",      sub: "Calls · Books · Walk-ins", hex: "#f59e0b" },
];

/* ── Platform stats strip ── */
const METRICS = [
  { value: "50+", label: "outlets managed" },
  { value: "4.8★", label: "avg rating lift" },
  { value: "100+", label: "reviews removed" },
];

/* ── Right-side stacked cards ── */
const SIDE_CARDS = [
  {
    title: "Built for Singapore SMBs",
    body: "Not a US tool re-skinned for Asia. Built for F&B, clinics, salons, tuition centres, and service businesses in dense, competitive local markets.",
    chip: "SG-native",
    chipText: "text-violet-300",
    chipBg: "bg-violet-500/10 border-violet-500/25",
    arrowColor: "text-violet-400",
    lineHex: "#8b5cf6",
    glowHex: "rgba(139,92,246,0.10)",
    hoverBorder: "hover:border-violet-500/30",
    href: "/local-seo-singapore",
  },
  {
    title: "AI Search Visibility",
    body: "Get cited in AI-powered answers across Google AI Overview, ChatGPT, Gemini, and emerging discovery platforms — before competitors know they exist.",
    chip: "GEO · AEO",
    chipText: "text-cyan-300",
    chipBg: "bg-cyan-500/10 border-cyan-400/25",
    arrowColor: "text-cyan-400",
    lineHex: "#06b6d4",
    glowHex: "rgba(6,182,212,0.08)",
    hoverBorder: "hover:border-cyan-400/30",
    href: "/ai-search-visibility-singapore",
  },
  {
    title: "Reputation Defence",
    body: "Generate positive reviews, detect risks early, and remove fake or policy-violating reviews — with a no-removal, no-fee guarantee.",
    chip: "Pay $0 if we fail",
    chipText: "text-emerald-300",
    chipBg: "bg-emerald-500/10 border-emerald-400/25",
    arrowColor: "text-emerald-400",
    lineHex: "#10b981",
    glowHex: "rgba(16,185,129,0.08)",
    hoverBorder: "hover:border-emerald-400/30",
    href: "/reputation-management-singapore",
  },
];

export default function SecondaryCategories() {
  return (
    <section className="relative overflow-hidden bg-[#050510] py-24 lg:py-32">

      {/* ── Ambient glow orbs ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-48 right-0 w-[800px] h-[800px] rounded-full bg-violet-700/15 blur-[180px]" />
        <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] rounded-full bg-teal-600/10 blur-[160px]" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-700/8 blur-[120px]" />
      </div>

      {/* ── Dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Section header ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-[11px] font-semibold tracking-[0.13em] uppercase text-white/40">Platform</span>
          </div>

          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5 mx-auto"
            style={{ fontSize: "clamp(1.85rem, 3.6vw, 3rem)", maxWidth: "800px" }}
          >
            The discovery layer for local businesses
            <br className="hidden sm:block" />
            {" "}in the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)" }}
            >
              AI era.
            </span>
          </h2>

          <p className="text-white/40 text-[1rem] leading-relaxed max-w-2xl mx-auto">
            Customers no longer choose from websites alone. They choose from Google Maps, AI answers,
            and review signals. Epicware helps Singapore SMBs win across all three.
          </p>
        </motion.div>

        {/* ── Asymmetric grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4">

          {/* ════════════════════════════
               LEFT — Large platform card
          ════════════════════════════ */}
          <motion.div {...fadeUp(0.08)} className="flex">
            <div className="group relative flex flex-col w-full rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-white/[0.065] to-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/[0.16]">

              {/* Top-edge shimmer line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

              {/* Hover inner glow */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative flex flex-col flex-1 gap-8 p-8 lg:p-10">

                {/* ── OS / platform chrome bar ── */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[11px] text-white/25 font-medium tracking-wide pl-1 select-none">
                      epicware / platform
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-300 font-semibold">Live</span>
                  </div>
                </div>

                {/* ── Card headline ── */}
                <div>
                  <h3
                    className="font-bold text-white leading-[1.15] tracking-[-0.025em] mb-3"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)" }}
                  >
                    From search to sale,
                    <br />one connected system.
                  </h3>
                  <p className="text-[0.875rem] text-white/40 leading-relaxed max-w-lg">
                    Google Maps ranking, AI visibility, review generation, reputation
                    protection, and customer re-engagement — built into one growth platform for SMBs.
                  </p>
                </div>

                {/* ── Journey flow ── */}
                <div className="relative">
                  {/* Horizontal gradient connector at circle midpoint (h-11 = 44px → top 22px) */}
                  <div
                    className="absolute top-[22px] hidden sm:block pointer-events-none"
                    style={{ left: "12.5%", right: "12.5%" }}
                  >
                    {/* Gradient colour track */}
                    <div
                      className="w-full h-px"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(139,92,246,0.5), rgba(6,182,212,0.5), rgba(16,185,129,0.5), rgba(245,158,11,0.5))",
                      }}
                    />
                    {/* Dashed texture overlay */}
                    <div
                      className="absolute inset-0 h-px"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to right, transparent 0px, transparent 6px, rgba(255,255,255,0.12) 6px, rgba(255,255,255,0.12) 12px)",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                    {STEPS.map((step) => (
                      <div key={step.num} className="flex flex-col items-center gap-3 text-center">

                        {/* Glowing node */}
                        <div className="relative">
                          <div
                            className="absolute -inset-2.5 rounded-full blur-xl"
                            style={{ background: step.hex, opacity: 0.22 }}
                          />
                          <div
                            className="relative w-11 h-11 rounded-full flex items-center justify-center text-[11px] font-bold text-white border"
                            style={{
                              background: `linear-gradient(135deg, ${step.hex}35, ${step.hex}10)`,
                              borderColor: `${step.hex}55`,
                              boxShadow: `0 0 0 1px ${step.hex}20 inset`,
                            }}
                          >
                            {step.num}
                          </div>
                        </div>

                        {/* Labels */}
                        <div>
                          <p
                            className="text-[12px] font-semibold text-white/90 leading-tight"
                            style={{ textShadow: `0 0 14px ${step.hex}55` }}
                          >
                            {step.label}
                          </p>
                          <p className="text-[10px] text-white/30 mt-1 leading-tight">{step.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Metric strip ── */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-auto pt-7 border-t border-white/[0.07]">
                  {METRICS.map((m, i) => (
                    <div key={m.label} className="flex items-center gap-4">
                      {i > 0 && <div className="w-px h-6 bg-white/10 shrink-0" />}
                      <div>
                        <p className="text-[1.05rem] font-bold text-white leading-none">{m.value}</p>
                        <p className="text-[10px] text-white/30 mt-0.5 leading-none">{m.label}</p>
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/book-demo#form"
                    className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/40 hover:text-white/90 transition-colors duration-200 group/link shrink-0"
                  >
                    See the platform
                    <svg
                      className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ════════════════════════════
               RIGHT — 3 stacked cards
          ════════════════════════════ */}
          <div className="flex flex-col gap-4">
            {SIDE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.16 + i * 0.09)}
                className="flex flex-1"
              >
                <Link
                  href={card.href}
                  className={`group/card relative flex flex-col flex-1 rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-400 ${card.hoverBorder} hover:-translate-y-0.5 p-6 gap-4`}
                >
                  {/* Top-edge accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-px opacity-45 group-hover/card:opacity-80 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, transparent, ${card.lineHex}, transparent)`,
                    }}
                  />

                  {/* Hover radial glow */}
                  <div
                    className="absolute inset-0 rounded-[22px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${card.glowHex} 0%, transparent 65%)`,
                    }}
                  />

                  {/* Header row */}
                  <div className="relative flex items-start justify-between gap-3">
                    <h4 className="text-[0.93rem] font-bold text-white leading-snug tracking-[-0.01em] flex-1">
                      {card.title}
                    </h4>
                    <span
                      className={`shrink-0 text-[10px] font-semibold rounded-full border px-2.5 py-1 ${card.chipBg} ${card.chipText}`}
                    >
                      {card.chip}
                    </span>
                  </div>

                  {/* Body */}
                  <p className="relative text-[0.815rem] text-white/38 leading-relaxed flex-1">
                    {card.body}
                  </p>

                  {/* Learn more link */}
                  <div className="relative flex items-center gap-1.5 mt-auto">
                    <span className={`text-[11px] font-semibold ${card.chipText}`}>
                      Learn more
                    </span>
                    <svg
                      className={`w-3 h-3 ${card.arrowColor} opacity-70 group-hover/card:translate-x-0.5 transition-transform duration-200`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
