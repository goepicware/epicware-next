"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const CARDS = [
  {
    num: "01",
    title: "Google Maps Growth",
    body: "Improve visibility where high-intent nearby customers search, compare, call, and visit.",
    hex: "#7c3aed",
    lightBg: "bg-violet-50",
    numColor: "text-violet-500",
    topLine: "from-violet-400 via-violet-300 to-violet-100",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(124,58,237,0.10)]",
    hoverBorder: "hover:border-violet-200",
  },
  {
    num: "02",
    title: "AI Search Visibility",
    body: "Help your business appear in AI-powered discovery across Google AI Overview, ChatGPT, Gemini, and emerging search experiences.",
    hex: "#0891b2",
    lightBg: "bg-cyan-50",
    numColor: "text-cyan-600",
    topLine: "from-cyan-400 via-cyan-300 to-cyan-100",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(8,145,178,0.09)]",
    hoverBorder: "hover:border-cyan-200",
  },
  {
    num: "03",
    title: "Reputation Defence",
    body: "Generate more positive reviews, detect reputation risks, and manage fake or policy-violating reviews.",
    hex: "#059669",
    lightBg: "bg-emerald-50",
    numColor: "text-emerald-600",
    topLine: "from-emerald-400 via-emerald-300 to-emerald-100",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(5,150,105,0.09)]",
    hoverBorder: "hover:border-emerald-200",
  },
  {
    num: "04",
    title: "Built for Singapore SMBs",
    body: "Designed for dense, competitive local markets like F&B, clinics, salons, tuition centres, and service businesses.",
    hex: "#1d4ed8",
    lightBg: "bg-blue-50",
    numColor: "text-blue-600",
    topLine: "from-blue-400 via-blue-300 to-blue-100",
    hoverShadow: "hover:shadow-[0_8px_40px_rgba(29,78,216,0.08)]",
    hoverBorder: "hover:border-blue-200",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#fafaff] py-24 lg:py-32">

      {/* Soft ambient glow — barely visible, adds depth */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-violet-200/25 blur-[140px]" />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full bg-teal-200/20 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="mb-14 lg:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-violet-500">Platform</span>
          </div>

          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
          >
            Built for the way Singapore
            <br className="hidden sm:block" />
            {" "}businesses get discovered today.
          </h2>

          <p className="text-gray-500 text-[1.02rem] leading-relaxed max-w-2xl">
            Not another agency. Not another generic SEO tool. Epicware connects Google Maps, AI
            search visibility, reviews, and reputation into one local growth platform.
          </p>
        </motion.div>

        {/* ── Card grid — slightly asymmetric 2-row layout ── */}
        <div className="flex flex-col gap-4">

          {/* Row 1: wider left card */}
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4">
            {CARDS.slice(0, 2).map((card, i) => (
              <motion.div
                key={card.num}
                {...fadeUp(0.07 + i * 0.08)}
              >
                <div
                  className={`group relative flex flex-col h-full rounded-3xl border border-gray-100 bg-white transition-all duration-300 ${card.hoverBorder} ${card.hoverShadow} shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden`}
                >
                  {/* Coloured top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${card.topLine}`} />

                  <div className="p-8 flex flex-col gap-5 flex-1">
                    {/* Number + accent dot */}
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${card.numColor}`}>
                        {card.num}
                      </span>
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ background: card.hex, opacity: 0.5 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="text-[1.05rem] font-bold text-gray-900 leading-snug tracking-[-0.015em]">
                        {card.title}
                      </h3>
                      <p className="text-[0.875rem] text-gray-500 leading-relaxed flex-1">
                        {card.body}
                      </p>
                    </div>

                    {/* Accent bar (decorative, reveals on hover) */}
                    <div
                      className="h-px w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                      style={{ background: card.hex }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: wider right card (inverted columns) */}
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-4">
            {CARDS.slice(2, 4).map((card, i) => (
              <motion.div
                key={card.num}
                {...fadeUp(0.18 + i * 0.08)}
              >
                <div
                  className={`group relative flex flex-col h-full rounded-3xl border border-gray-100 bg-white transition-all duration-300 ${card.hoverBorder} ${card.hoverShadow} shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden`}
                >
                  {/* Coloured top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${card.topLine}`} />

                  <div className="p-8 flex flex-col gap-5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${card.numColor}`}>
                        {card.num}
                      </span>
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ background: card.hex, opacity: 0.5 }}
                      />
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="text-[1.05rem] font-bold text-gray-900 leading-snug tracking-[-0.015em]">
                        {card.title}
                      </h3>
                      <p className="text-[0.875rem] text-gray-500 leading-relaxed flex-1">
                        {card.body}
                      </p>
                    </div>

                    <div
                      className="h-px w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                      style={{ background: card.hex }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
