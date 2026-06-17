"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Mini UI: Google Maps Pack ─────────────────────────────── */
function MapsUI() {
  const results = [
    { rank: 1, name: "Your Business", rating: "4.9", reviews: "214", highlight: true },
    { rank: 2, name: "Competitor A", rating: "4.4", reviews: "87", highlight: false },
    { rank: 3, name: "Competitor B", rating: "4.1", reviews: "52", highlight: false },
  ];
  return (
    <div className="select-none pointer-events-none space-y-2.5">
      {/* Fake search bar */}
      <div className="flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.1] px-3 py-2 mb-3">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-violet-400 shrink-0">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        <span className="text-[11px] text-white/40 tracking-wide">best clinic near me</span>
      </div>

      {results.map((r) => (
        <div
          key={r.rank}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-all ${
            r.highlight
              ? "bg-violet-500/15 border-violet-500/30"
              : "bg-white/[0.04] border-white/[0.07]"
          }`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
            r.highlight ? "bg-violet-500 text-white" : "bg-white/10 text-white/40"
          }`}>
            {r.rank}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[11px] font-semibold truncate ${r.highlight ? "text-white" : "text-white/50"}`}>{r.name}</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className={`text-[10px] font-bold ${r.highlight ? "text-violet-300" : "text-white/30"}`}>{r.rating}</span>
              <div className="flex gap-px">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="8" height="8" viewBox="0 0 24 24" fill={r.highlight ? "#a78bfa" : "#ffffff30"}>
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className={`text-[9px] ${r.highlight ? "text-white/50" : "text-white/20"}`}>({r.reviews})</span>
            </div>
          </div>
          {r.highlight && (
            <div className="shrink-0 rounded-full bg-violet-500/20 px-2 py-0.5">
              <span className="text-[9px] text-violet-300 font-semibold">#1</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Mini UI: AI Recommendation ────────────────────────────── */
function AIUI() {
  return (
    <div className="select-none pointer-events-none space-y-2.5">
      {/* AI prompt bar */}
      <div className="flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.1] px-3 py-2 mb-3">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-teal-400 shrink-0">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[11px] text-white/40 tracking-wide">best restaurant Singapore AI</span>
      </div>

      {/* AI answer card */}
      <div className="rounded-xl bg-white/[0.05] border border-teal-400/20 p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300" />
          <span className="text-[10px] text-teal-300 font-semibold tracking-wide uppercase">AI Answer</span>
        </div>
        <p className="text-[11px] text-white/60 leading-relaxed mb-2">
          Based on reviews and local signals, <span className="text-white font-semibold">Your Business</span> is highly recommended near Orchard Road with consistent 5★ service.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Top Rated", "Near You", "Highly Reviewed"].map(tag => (
            <span key={tag} className="text-[9px] text-teal-300/80 bg-teal-400/10 border border-teal-400/20 rounded-full px-2 py-0.5">{tag}</span>
          ))}
        </div>
      </div>

      {/* Source chips */}
      <div className="flex items-center gap-2">
        {["ChatGPT", "Gemini", "Perplexity"].map(src => (
          <div key={src} className="flex items-center gap-1 rounded-full bg-white/[0.06] border border-white/[0.08] px-2 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-[9px] text-white/40">{src}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mini UI: Reputation Dashboard ─────────────────────────── */
function ReputationUI() {
  const reviews = [
    { name: "Sarah L.", text: "Amazing experience, highly recommend!", stars: 5 },
    { name: "David T.", text: "Great service and very professional.", stars: 5 },
  ];
  return (
    <div className="select-none pointer-events-none space-y-2.5">
      {/* Overall score */}
      <div className="flex items-center gap-3 rounded-xl bg-white/[0.05] border border-amber-400/20 p-3 mb-3">
        <div className="text-center shrink-0">
          <p className="text-3xl font-bold text-white leading-none">4.9</p>
          <div className="flex gap-px mt-1 justify-center">
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-1">
            {[["5★", "82%"], ["4★", "12%"], ["3★", "6%"]].map(([label, pct]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[9px] text-white/40 w-4 shrink-0">{label}</span>
                <div className="flex-1 h-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-amber-400/70" style={{ width: pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] text-amber-300 font-semibold">+47</p>
          <p className="text-[9px] text-white/30">this month</p>
        </div>
      </div>

      {/* Recent reviews */}
      {reviews.map((r) => (
        <div key={r.name} className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-3 py-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-white/70">{r.name}</span>
            <div className="flex gap-px">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="7" height="7" viewBox="0 0 24 24" fill="#fbbf24">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-white/40 leading-snug">{r.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Card data ──────────────────────────────────────────────── */
const PILLARS = [
  {
    num: "01",
    title: "Rank Higher on Google Maps",
    description:
      "Show up where customers are already searching. Increase calls, direction requests, and walk-ins by improving your local visibility in the Map Pack.",
    tag: "Capture high-intent nearby customers",
    accentFrom: "from-violet-500",
    accentTo: "to-purple-600",
    glowColor: "rgba(139,92,246,0.18)",
    borderAccent: "border-violet-500/20",
    tagColor: "text-violet-300",
    tagBg: "bg-violet-500/10 border-violet-500/20",
    UI: MapsUI,
  },
  {
    num: "02",
    title: "Get Recommended by AI",
    description:
      "Appear in AI Overviews, ChatGPT, Gemini, and Perplexity when customers ask for the best businesses near them. The next generation of search — won now.",
    tag: "Win the next generation of search",
    accentFrom: "from-teal-400",
    accentTo: "to-cyan-500",
    glowColor: "rgba(45,212,191,0.15)",
    borderAccent: "border-teal-400/20",
    tagColor: "text-teal-300",
    tagBg: "bg-teal-400/10 border-teal-400/20",
    UI: AIUI,
  },
  {
    num: "03",
    title: "Protect & Grow Your Reputation",
    description:
      "Generate more 5-star reviews, manage negative sentiment, and build the trust customers need before they call, book, or visit your business.",
    tag: "Turn reviews into revenue",
    accentFrom: "from-amber-400",
    accentTo: "to-orange-400",
    glowColor: "rgba(251,191,36,0.12)",
    borderAccent: "border-amber-400/20",
    tagColor: "text-amber-300",
    tagBg: "bg-amber-400/10 border-amber-400/20",
    UI: ReputationUI,
  },
];

const PROOF = [
  { label: "More calls from local search", color: "text-violet-300", dot: "bg-violet-400" },
  { label: "More visibility in AI answers", color: "text-teal-300", dot: "bg-teal-400" },
  { label: "More trust from better reviews", color: "text-amber-300", dot: "bg-amber-400" },
];

/* ─── Main section ───────────────────────────────────────────── */
export default function UrgencySection() {
  return (
    <section className="relative overflow-hidden bg-[#070710] py-24 lg:py-32">

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/50">3 Growth Levers</span>
          </div>

          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Get found.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(95deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)" }}
            >
              Get chosen.
            </span>
            {" "}Get more revenue.
          </h2>

          <p className="text-white/50 text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
            Epicware helps Singapore businesses rank on Google Maps, appear in AI-generated
            recommendations, and build a stronger review reputation — so more customers choose
            you first.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              {...fadeUp(0.08 + i * 0.1)}
              className="group relative"
            >
              {/* Per-card ambient glow */}
              <div
                className="absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: pillar.glowColor }}
              />

              {/* Card */}
              <div
                className={`relative h-full flex flex-col rounded-[24px] border ${pillar.borderAccent} bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-sm overflow-hidden transition-transform duration-300 group-hover:-translate-y-1`}
              >
                {/* Accent top-edge glow line */}
                <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${pillar.accentFrom} ${pillar.accentTo} opacity-60`} />

                <div className="p-7 flex flex-col gap-6 flex-1">
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r ${pillar.accentFrom} ${pillar.accentTo}`}>
                      {pillar.num}
                    </span>
                    <div className={`h-px flex-1 mx-4 bg-gradient-to-r ${pillar.accentFrom} ${pillar.accentTo} opacity-20`} />
                  </div>

                  {/* Mini UI visual */}
                  <div className="rounded-xl bg-black/30 border border-white/[0.06] p-4">
                    <pillar.UI />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-[1.1rem] font-bold text-white leading-snug tracking-[-0.02em]">
                      {pillar.title}
                    </h3>
                    <p className="text-[0.875rem] text-white/50 leading-relaxed flex-1">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Benefit tag */}
                  <div className={`self-start inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 ${pillar.tagBg}`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${pillar.accentFrom} ${pillar.accentTo}`} />
                    <span className={`text-[11px] font-semibold ${pillar.tagColor}`}>{pillar.tag}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom proof row */}
        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {PROOF.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
              <span className={`text-[12px] font-medium ${p.color}`}>{p.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA nudge */}
        <motion.div {...fadeUp(0.42)} className="text-center mt-10">
          <Link
            href="/book-demo#form"
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-white/60 hover:text-white transition-colors duration-200 group"
          >
            See how Epicware delivers all three
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
