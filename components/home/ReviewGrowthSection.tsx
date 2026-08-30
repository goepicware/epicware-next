"use client";

import { motion } from "framer-motion";
import {
  Star, Home, Gift, Users, RefreshCw, ChevronDown,
  Filter, MessageSquare, BarChart2, ShieldAlert,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── SVG Pie / Donut chart ─────────────────────────────────────── */
function SentimentPie() {
  // Positive 52%, Neutral 18%, Negative 30%  (sum=100, remaining slice shown as gap)
  const slices = [
    { pct: 52, color: "#22c55e", label: "Positive 52%" },
    { pct: 18, color: "#f59e0b", label: "Neutral 18%"  },
    { pct: 30, color: "#ef4444", label: "Negative 30%" },
  ];
  const r = 52, cx = 64, cy = 64, stroke = 22;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 128 128" className="w-[108px] h-[108px]" style={{ transform: "rotate(-90deg)" }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth={stroke} />
        {slices.map((s) => {
          const dash = (s.pct / 100) * circ;
          const gap  = circ - dash;
          const el = (
            <circle
              key={s.label}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset * circ / 100}
            />
          );
          offset += s.pct;
          return el;
        })}
      </svg>
      <div className="flex flex-col gap-1 w-full">
        {slices.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-[11px]">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
            <span className="text-gray-600">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SVG Bar chart ─────────────────────────────────────────────── */
function PlatformBars() {
  const bars = [
    { label: "Google",      h: 62, color: "#7c3aed" },
    { label: "Facebook",    h: 48, color: "#7c3aed" },
    { label: "TripAdvisor", h: 78, color: "#7c3aed" },
  ];
  const maxH = 80;
  return (
    <div className="flex flex-col gap-2 h-full">
      <svg viewBox="0 0 120 90" className="w-full" style={{ height: "90px" }}>
        {[0, 25, 50, 75].map((v) => (
          <line key={v} x1={0} y1={90 - (v / 100) * maxH} x2={120} y2={90 - (v / 100) * maxH}
            stroke="#f3f4f6" strokeWidth={0.8} />
        ))}
        {bars.map((b, i) => {
          const x = 10 + i * 36, w = 24;
          return (
            <rect key={b.label} x={x} y={90 - b.h} width={w} height={b.h}
              fill={b.color} rx={3} fillOpacity={0.9} />
          );
        })}
      </svg>
      <div className="flex justify-around text-[10px] text-gray-500">
        {bars.map((b) => <span key={b.label}>{b.label}</span>)}
      </div>
    </div>
  );
}

/* ── SVG Line chart ────────────────────────────────────────────── */
function VolumeLine() {
  const pts = [2,8,5,14,6,10,3,16,7,12,4,9,6,11,8,14,5,3,7,12,4,8,6];
  const W = 160, H = 68, maxV = 16;
  const xStep = W / (pts.length - 1);
  const coords = pts.map((v, i) => [i * xStep, H - (v / maxV) * H] as [number, number]);
  const d = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const fill = `${d} L${W},${H} L0,${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "68px" }}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.18} />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.01} />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#lineGrad)" />
      <path d={d} fill="none" stroke="#7c3aed" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      {coords.filter((_, i) => [4, 10, 16, 22].includes(i)).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="#7c3aed" />
      ))}
    </svg>
  );
}

/* ── KPI card ──────────────────────────────────────────────────── */
function KpiCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 px-3 py-2.5 flex flex-col gap-0.5">
      <p className="text-[10px] text-gray-400 font-medium truncate">{label}</p>
      <p className={`text-[1.1rem] font-bold leading-tight ${color}`}>{value}</p>
      <p className="text-[10px] text-gray-400">{sub}</p>
    </div>
  );
}

/* ── Performance Dashboard ─────────────────────────────────────── */
function Dashboard() {
  return (
    <div className="bg-white rounded-[20px] border border-gray-100 shadow-[0_6px_40px_rgba(0,0,0,0.10),0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-full">

      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-50 flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-gray-900 text-[0.95rem] leading-tight">Performance Dashboard</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Multi-Platform Review Summary &amp; Trends</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
          {["All Time", "All Platforms"].map((f) => (
            <div key={f} className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-md px-2 py-1">
              <span className="text-[10px] text-gray-500 font-medium">{f}</span>
              <ChevronDown className="w-2.5 h-2.5 text-gray-400" />
            </div>
          ))}
          <button className="w-6 h-6 flex items-center justify-center rounded-md border border-gray-200 bg-gray-50">
            <RefreshCw className="w-3 h-3 text-gray-400" />
          </button>
        </div>
      </div>

      {/* KPI row */}
      <div className="flex gap-1.5 px-3 py-2.5 border-b border-gray-50">
        <KpiCard label="Total Reviews"       value="248"   sub="in selected period"   color="text-gray-900" />
        <KpiCard label="Average Rating"      value="3.6 ★" sub="Out of 5 stars"       color="text-gray-900" />
        <KpiCard label="Positive Sentiment"  value="52%"   sub="of all reviews"       color="text-emerald-500" />
        <KpiCard label="Neutral Sentiment"   value="18%"   sub="of all reviews"       color="text-amber-500" />
        <KpiCard label="Negative Sentiment"  value="30%"   sub="of all reviews"       color="text-red-500" />
        <KpiCard label="Urgent Reviews"      value="104"   sub="Click to manage →"    color="text-orange-500" />
      </div>

      {/* Charts row */}
      <div className="flex gap-2 px-3 pt-3 pb-3 flex-1 min-h-0">

        {/* Sentiment Breakdown */}
        <div className="flex-1 bg-gray-50/60 rounded-xl border border-gray-100 p-3 flex flex-col gap-2 min-w-0">
          <p className="text-[11px] font-semibold text-gray-700">Sentiment Breakdown</p>
          <SentimentPie />
        </div>

        {/* Platform Performance */}
        <div className="flex-1 bg-gray-50/60 rounded-xl border border-gray-100 p-3 flex flex-col gap-2 min-w-0">
          <p className="text-[11px] font-semibold text-gray-700">Platform Performance</p>
          <PlatformBars />
        </div>

        {/* Volume Over Time */}
        <div className="flex-[1.4] bg-gray-50/60 rounded-xl border border-gray-100 p-3 flex flex-col gap-2 min-w-0">
          <p className="text-[11px] font-semibold text-gray-700">Review Volume Over Time</p>
          <VolumeLine />
          <div className="flex justify-between text-[9px] text-gray-400 mt-auto">
            {["Apr 8","Apr 23","May 9","May 25","Jun 10","Jun 30"].map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="flex justify-end px-4 pb-3">
        <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
          <ShieldAlert className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-[11px] font-semibold text-gray-700">Reputation Command Centre</span>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile review card ────────────────────────────────────────── */
function MobileCard() {
  const stars = [1, 2, 3, 4, 5];
  const navItems = [
    { icon: Home,   label: "Home",     active: false },
    { icon: Star,   label: "Reviews",  active: true  },
    { icon: Gift,   label: "Vouchers", active: false },
    { icon: Users,  label: "Refer",    active: false },
  ];

  return (
    <div className="bg-[#faf8f4] rounded-[30px] border border-orange-100/60 shadow-[0_16px_56px_rgba(0,0,0,0.16),0_4px_18px_rgba(245,158,11,0.12)] overflow-hidden flex flex-col">

      {/* Top — logo + heading */}
      <div className="flex flex-col items-center pt-5 pb-4 px-5 gap-1.5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-md mb-0.5">
          <span className="text-white text-[10px] font-black tracking-tight">EW</span>
        </div>
        <p className="font-bold text-gray-900 text-[0.875rem]">Epicware Headquarters</p>
        <p className="text-[11px] text-gray-400">Share your experience</p>
      </div>

      {/* Dark rate panel */}
      <div className="mx-4 rounded-[18px] bg-[#1a1412] px-4 pt-4 pb-5 flex flex-col gap-3">
        <div className="self-start flex items-center gap-1 bg-white/10 rounded-full px-2.5 py-1">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Rate Your Visit</span>
        </div>
        <p className="font-bold text-white text-[1.05rem] leading-tight">How was your experience?</p>
        <p className="text-[11px] text-white/50 -mt-1.5">Your feedback helps us serve you better</p>

        {/* Stars */}
        <div className="flex gap-1.5 mt-1">
          {stars.map((s) => (
            <Star
              key={s}
              className={`w-6 h-6 ${s <= 4 ? "text-amber-400 fill-amber-400" : "text-white/20"}`}
            />
          ))}
        </div>
        <p className="text-[10px] text-white/40">Great experience! 😊</p>

        {/* Continue button */}
        <button className="mt-1 w-full h-10 rounded-xl bg-white text-gray-900 text-[0.8rem] font-bold tracking-wide">
          Continue
        </button>
      </div>

      {/* Bottom nav */}
      <div className="flex justify-around items-center px-2 pt-3 pb-4 mt-auto">
        {navItems.map(({ icon: Icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div className={`w-8 h-8 flex items-center justify-center rounded-xl ${active ? "bg-violet-100" : ""}`}>
              <Icon className={`w-4 h-4 ${active ? "text-violet-600" : "text-gray-400"}`} />
            </div>
            <span className={`text-[10px] font-semibold ${active ? "text-violet-600" : "text-gray-400"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Capability card ───────────────────────────────────────────── */
const CAPS = [
  { icon: Filter,        label: "Smart review filtering"  },
  { icon: MessageSquare, label: "Private feedback capture" },
  { icon: BarChart2,     label: "Reputation insights"      },
] as const;

/* ══════════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════════ */
export default function ReviewGrowthSection() {
  return (
    <div className="bg-white pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div
        className="mx-auto"
        style={{ maxWidth: "1360px", width: "calc(100% - 64px)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[36fr_64fr] gap-12 lg:gap-[52px] items-start">

          {/* ── LEFT ── */}
          <motion.div {...fadeIn(0)} className="flex flex-col">

            {/* Step marker + label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.4)]">
                2
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-orange-500">
                Review Growth &amp; Reputation Management
              </span>
            </div>

            {/* Headline */}
            <h3
              className="font-bold text-gray-950 mb-5"
              style={{ fontSize: "clamp(2.625rem, 3.5vw, 3.625rem)", lineHeight: 1.05, letterSpacing: "-0.035em", maxWidth: "560px" }}
            >
              Turn Every Customer Visit Into Reputation Growth
            </h3>

            {/* Supporting paragraph */}
            <p className="text-gray-500 leading-[1.6] mb-5" style={{ fontSize: "clamp(1.0rem, 1.2vw, 1.1rem)", maxWidth: "560px" }}>
              We help you collect more positive reviews, identify unhappy customers earlier, and manage
              your online reputation before it affects calls, bookings, or walk-ins.
            </p>

            {/* Insight paragraph — orange left border */}
            <p
              className="text-gray-500 leading-[1.65] mb-8"
              style={{ borderLeft: "2.5px solid #f97316", paddingLeft: "20px", fontSize: "clamp(0.9rem, 1vw, 1rem)", maxWidth: "560px" }}
            >
              Happy customers are guided toward leaving a public Google review, while unhappy customers
              are encouraged to share private feedback first — giving your team a chance to respond,
              recover, and improve. We also help identify fake, spam, harmful, or policy-violating
              reviews that may qualify for removal.
            </p>

            {/* Capability cards */}
            <div className="flex gap-3 flex-wrap">
              {CAPS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-2.5 bg-[#fffdf8] border border-orange-100 rounded-[20px] shadow-[0_2px_10px_rgba(249,115,22,0.07)] p-4"
                  style={{ minWidth: "110px", flex: "1 1 110px", maxWidth: "140px" }}
                >
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-orange-500" style={{ width: "18px", height: "18px" }} />
                  </div>
                  <span className="text-[11.5px] font-semibold text-gray-700 text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: visual panel ── */}
          <motion.div {...fadeIn(0.08)} className="relative">
            {/*
              Outer panel: fixed height, overflow-hidden, warm neutral bg.
              Dashboard occupies right ~82% starting from left 220px.
              Mobile card: absolute left-0, z-10, overlaps dashboard by ~100px.
            */}
            <div
              className="relative rounded-[30px] bg-[#faf8f5] border border-orange-50 shadow-sm overflow-hidden"
              style={{ height: "600px" }}
            >
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #92400e 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />

              {/* Ambient warm glow — left side */}
              <div className="absolute left-0 top-0 w-72 h-full bg-amber-100/30 blur-3xl pointer-events-none rounded-full" />

              {/* ── Dashboard card: right 82%, starts from left ~200px ── */}
              <div
                className="absolute top-8 bottom-8"
                style={{ left: "200px", right: "20px" }}
              >
                <Dashboard />
              </div>

              {/* ── Mobile card: left-overlapping ── */}
              <div
                className="absolute z-20"
                style={{ left: "16px", top: "28px", bottom: "28px", width: "248px" }}
              >
                <MobileCard />
              </div>
            </div>

            {/* Mobile fallback: stacked cards below lg */}
            <div className="lg:hidden mt-4 flex flex-col gap-4">
              <div className="max-w-[280px] mx-auto"><MobileCard /></div>
              <Dashboard />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
