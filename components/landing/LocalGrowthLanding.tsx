"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── CTA helpers ────────────────────────────────────────────── */
function PrimaryCTA({ label = "Get My Free Audit →", className = "" }: { label?: string; className?: string }) {
  return (
    <Link
      href="/book-demo#form"
      className={`inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-white text-gray-950 text-[0.9rem] font-bold hover:bg-gray-100 transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.22)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.32)] hover:-translate-y-px ${className}`}
    >
      {label}
    </Link>
  );
}
function SecondaryCTA({ label = "Book a Strategy Call", className = "" }: { label?: string; className?: string }) {
  return (
    <Link
      href="/book-demo#form"
      className={`inline-flex items-center justify-center h-[52px] px-8 rounded-full border border-white/30 text-white text-[0.9rem] font-semibold hover:bg-white/10 transition-all duration-200 ${className}`}
    >
      {label}
    </Link>
  );
}

/* ── Sticky bottom bar ──────────────────────────────────────── */
function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="bg-gray-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-sm leading-tight">Ready to get found by more customers?</p>
            <p className="text-white/45 text-xs mt-0.5">Free audit · No obligation · Results in 30 days</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center h-10 px-6 rounded-full bg-white text-gray-950 text-sm font-bold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Audit →
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center h-10 px-6 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero section ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06060e] pt-20 pb-20 lg:pt-28 lg:pb-28">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[160px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-teal-600/12 blur-[140px]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.13em] uppercase text-white/50">Singapore's Complete Local Growth Platform</span>
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.06)}
          className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6 mx-auto"
          style={{ fontSize: "clamp(2.1rem, 5vw, 3.6rem)", maxWidth: "860px" }}
        >
          Your Competitors Are Getting Found.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(100deg, #a78bfa 0%, #38bdf8 55%, #34d399 100%)" }}
          >
            Your Customers Are Choosing Them.
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.12)} className="text-white/50 text-[1.05rem] leading-relaxed mb-10 mx-auto max-w-2xl">
          Epicware is the only platform in Singapore that handles your Google Maps ranking, AI
          search visibility, review reputation, bad review removal, and social presence — all in
          one connected system. No agencies. No retainers. Just results.
        </motion.p>

        <motion.div {...fadeUp(0.17)} className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <PrimaryCTA label="Get My Free Audit →" />
          <SecondaryCTA label="Book a Strategy Call" />
        </motion.div>

        {/* Proof bar */}
        <motion.div {...fadeUp(0.22)}>
          <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-white/[0.09] bg-white/[0.04] backdrop-blur-sm px-8 py-5">
            {[
              { before: "Avg rank 9.0", after: "rank 1.4", label: "Google Maps" },
              { before: "3.8★", after: "4.8★", label: "Rating in 60 days" },
              { before: "+330%", after: "", label: "Review growth" },
              { before: "50+", after: "", label: "Outlets managed" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-bold text-[1.1rem] leading-none">
                  {s.before}
                  {s.after && (
                    <>
                      <span className="text-white/25 mx-1.5">→</span>
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #34d399)" }}
                      >
                        {s.after}
                      </span>
                    </>
                  )}
                </p>
                <p className="text-white/35 text-[10px] mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Problem section ────────────────────────────────────────── */
function Problem() {
  const pains = [
    {
      title: "Invisible on Google Maps",
      body: "Your GBP is incomplete, unoptimised, and sitting at position 8+ while competitors in the same street are getting all the calls, direction requests, and walk-ins.",
      stat: "0 in Top 3 → 25 in Top 3 after Epicware",
      hex: "#8b5cf6",
    },
    {
      title: "Not in AI Recommendations",
      body: "When a customer asks ChatGPT or Gemini for the best clinic, restaurant, or salon near them — your competitor gets cited. You don't exist in AI search yet.",
      stat: "AI search is the next Google Maps moment",
      hex: "#06b6d4",
    },
    {
      title: "Reviews Killing Your Revenue",
      body: "A handful of fake or unfair reviews drops your rating and your revenue. Most businesses respond professionally. We get them removed — or you pay nothing.",
      stat: "1★ review can cost 22% in revenue",
      hex: "#f59e0b",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">The problem</p>
          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mx-auto"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", maxWidth: "640px" }}
          >
            Right now, someone is Googling what you sell. Here's why they won't find you.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <motion.div key={p.title} {...fadeUp(0.07 + i * 0.08)}>
              <div className="h-full rounded-3xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] p-7 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: p.hex + "18" }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: p.hex }} />
                </div>
                <div>
                  <h3 className="text-[1rem] font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-[0.875rem] text-gray-500 leading-relaxed">{p.body}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-[11px] font-semibold" style={{ color: p.hex }}>{p.stat}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Growth stack diagram ───────────────────────────────────── */
function GrowthStack() {
  const layers = [
    {
      label: "Foundation",
      color: "#8b5cf6",
      items: ["GBP Setup & Verification", "GBP Profile Optimisation", "Keyword Research"],
    },
    {
      label: "Trust & Reputation",
      color: "#06b6d4",
      items: ["Review Generation (QR / WhatsApp)", "Bad Review Removal", "Review Monitoring & Alerts"],
    },
    {
      label: "AI & Search Visibility",
      color: "#10b981",
      items: ["AI Citation Articles", "Website SEO Structure", "Google AI Overview Targeting"],
    },
    {
      label: "Maps Domination",
      color: "#f59e0b",
      items: ["HeatMap Rank Tracking", "Competitor Intelligence", "GBP Post Scheduling"],
    },
    {
      label: "Brand Presence",
      color: "#ec4899",
      items: ["EpicSocial Auto-Posting", "Facebook & Instagram Scheduling", "Content Calendar Management"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050510] py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-[140px]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-white/35 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4">The system</p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5 mx-auto"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", maxWidth: "700px" }}
          >
            One connected growth stack. Every lever, working together.
          </h2>
          <p className="text-white/40 text-[1rem] leading-relaxed max-w-xl mx-auto">
            No single tactic gets you to the top. Epicware runs every growth lever in parallel —
            so each pillar reinforces the next.
          </p>
        </motion.div>

        {/* Stack layers */}
        <div className="flex flex-col gap-3 mb-10">
          {layers.map((layer, i) => (
            <motion.div key={layer.label} {...fadeUp(0.06 + i * 0.07)}>
              <div
                className="rounded-2xl border bg-gradient-to-r from-white/[0.055] to-white/[0.02] backdrop-blur-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ borderColor: layer.color + "25" }}
              >
                {/* Layer label */}
                <div className="flex items-center gap-3 shrink-0 w-44">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: layer.color, boxShadow: `0 0 8px ${layer.color}` }} />
                  <span className="text-[12px] font-bold text-white/70">{layer.label}</span>
                </div>
                {/* Divider */}
                <div className="hidden sm:block w-px h-6 bg-white/10 shrink-0" />
                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-medium rounded-full border px-3 py-1"
                      style={{ color: layer.color, borderColor: layer.color + "30", background: layer.color + "10" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {/* Arrow */}
                {i < layers.length - 1 && (
                  <div className="hidden sm:flex ml-auto shrink-0 items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Output row */}
        <motion.div {...fadeUp(0.42)}>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-teal-500/8 to-emerald-500/10 p-6">
            <p className="text-center text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-4">Result</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Map Pack #1–3", sub: "Avg rank 9.0 → 1.4", hex: "#8b5cf6" },
                { label: "AI Search Cited", sub: "ChatGPT · Gemini · Google AI", hex: "#06b6d4" },
                { label: "5★ Reputation", sub: "3.8★ → 4.8★ in 60 days", hex: "#10b981" },
                { label: "Review Growth", sub: "+330% vs previous 90 days", hex: "#f59e0b" },
                { label: "Brand Active", sub: "Social + GBP posts, always on", hex: "#ec4899" },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <p className="font-bold text-white text-[0.9rem] leading-none">{r.label}</p>
                  <p className="text-[10px] mt-1 font-medium" style={{ color: r.hex }}>{r.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.48)} className="flex justify-center mt-10">
          <PrimaryCTA label="See How It Works — Book a Free Audit" />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Six pillar cards ───────────────────────────────────────── */
function Pillars() {
  const pillars = [
    {
      num: "01",
      title: "Google Maps Ranking",
      sub: "GBP Optimisation + HeatMap Tracking",
      body: "We scan your Google Business Profile, identify every gap, and fix it. Then we track your ranking across a geogrid map — block by block — so you know exactly where you're winning and where you're losing to competitors.",
      proof: "Avg rank 9.0 → 1.4 · 0 in Top 3 → 25 in Top 3",
      hex: "#8b5cf6",
      checks: ["GBP audit & setup", "Profile optimisation", "Category & attribute fixing", "Geogrid rank tracking", "Competitor intelligence"],
    },
    {
      num: "02",
      title: "Review Generation",
      sub: "QR Codes + WhatsApp Automation",
      body: "A branded QR standee captures happy customers at peak satisfaction — right after a great experience. Smart routing sends happy customers to Google. Unhappy ones go to private feedback. Your rating grows. Your reputation stays protected.",
      proof: "+143 new reviews this month · 3.8★ → 4.8★ in 60 days",
      hex: "#06b6d4",
      checks: ["Branded QR standee", "WhatsApp review requests", "Smart sentiment routing", "5★ review automation", "Review velocity tracking"],
    },
    {
      num: "03",
      title: "Bad Review Removal",
      sub: "Policy-Violating & Fake Review Defence",
      body: "Most agencies tell you to 'respond professionally.' We actually get fake, malicious, and policy-violating reviews removed. You only pay if the review comes down. Zero risk.",
      proof: "100+ reviews removed · Pay $0 if we fail",
      hex: "#10b981",
      checks: ["Review policy analysis", "Flagging & dispute filing", "Case tracking & follow-up", "Reputation risk monitoring", "No removal = no charge"],
    },
    {
      num: "04",
      title: "AI Search & Citation",
      sub: "Google AI Overview · ChatGPT · Gemini",
      body: "AI assistants now answer 'best clinic in Tampines' with specific business recommendations. We structure your content, build citation articles, and optimise your web presence so your business gets cited — not just ranked.",
      proof: "Cited in Google AI Overview, ChatGPT & Gemini",
      hex: "#38bdf8",
      checks: ["AI citation article writing", "Website schema structuring", "Google AI Overview targeting", "E-E-A-T content signals", "Backlink authority building"],
    },
    {
      num: "05",
      title: "Website SEO & Articles",
      sub: "Google Rankings + Authority Building",
      body: "We audit your website, fix technical SEO, structure it for AI crawlers, and publish regular articles that build your topical authority and earn backlinks — so Google and AI trust your business.",
      proof: "Structured for Google + AI ranking",
      hex: "#a78bfa",
      checks: ["Technical SEO audit", "On-page optimisation", "Schema markup", "Regular article publishing", "Backlink strategy"],
    },
    {
      num: "06",
      title: "EpicSocial — Always Active",
      sub: "Facebook · Instagram · GBP Posts",
      body: "AI search engines now look at social signals to judge business credibility. EpicSocial generates and schedules posts from your business data — keeping your Facebook, Instagram, and GBP always active and discoverable.",
      proof: "Consistent posting = stronger AI discovery signals",
      hex: "#f59e0b",
      checks: ["AI-generated post content", "Facebook & Instagram scheduling", "GBP post scheduling", "Content calendar management", "Multi-outlet support"],
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-gray-400 text-[11px] font-semibold tracking-[0.14em] uppercase mb-4">What we handle</p>
          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mx-auto mb-4"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", maxWidth: "620px" }}
          >
            Six growth levers. All running at once. All connected.
          </h2>
          <p className="text-gray-500 text-[1rem] leading-relaxed max-w-xl mx-auto">
            Most agencies pick one or two. Epicware runs the full stack — so every lever reinforces the others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div key={p.num} {...fadeUp(0.05 + i * 0.06)}>
              <div
                className="group h-full rounded-3xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
              >
                {/* Top accent */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${p.hex}, ${p.hex}60, transparent)` }} />

                <div className="p-7 flex flex-col gap-5">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: p.hex }}>{p.num}</span>
                    <span className="text-[10px] font-medium text-gray-400 border border-gray-100 rounded-full px-2.5 py-1">{p.sub}</span>
                  </div>

                  {/* Title + body */}
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-gray-900 mb-2 leading-snug">{p.title}</h3>
                    <p className="text-[0.855rem] text-gray-500 leading-relaxed">{p.body}</p>
                  </div>

                  {/* Proof line */}
                  <div className="rounded-xl px-4 py-2.5" style={{ background: p.hex + "0d", border: `1px solid ${p.hex}20` }}>
                    <p className="text-[11px] font-semibold" style={{ color: p.hex }}>{p.proof}</p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-1.5">
                    {p.checks.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[0.825rem] text-gray-600">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: p.hex }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.35)} className="flex justify-center mt-12">
          <Link
            href="/book-demo#form"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gray-950 text-white text-[0.95rem] font-bold hover:bg-gray-800 transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.20)]"
          >
            Get the Full Stack — Free Audit →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Real proof / before & after ───────────────────────────── */
function Proof() {
  return (
    <section className="relative overflow-hidden bg-[#050510] py-20 lg:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-white/35 text-[11px] font-semibold tracking-widest uppercase mb-4">Real results</p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mx-auto"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", maxWidth: "600px" }}
          >
            Numbers from actual Epicware clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Maps before/after */}
          <motion.div {...fadeUp(0.08)}>
            <div className="rounded-3xl border border-white/[0.09] bg-white/[0.04] p-7 select-none">
              <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-5">Google Maps Ranking</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-5 text-center">
                  <p className="text-[10px] font-semibold text-red-400 mb-2 tracking-wider uppercase">Before</p>
                  <p className="text-4xl font-bold text-white">9.0</p>
                  <p className="text-white/30 text-[11px] mt-1">avg rank</p>
                  <div className="mt-3 space-y-1 text-left">
                    <p className="text-[10px] text-white/30">0 in Top 3</p>
                    <p className="text-[10px] text-white/30">1 in Top 7</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5 text-center">
                  <p className="text-[10px] font-semibold text-emerald-400 mb-2 tracking-wider uppercase">After</p>
                  <p className="text-4xl font-bold text-emerald-300">1.4</p>
                  <p className="text-white/30 text-[11px] mt-1">avg rank</p>
                  <div className="mt-3 space-y-1 text-left">
                    <p className="text-[10px] text-emerald-400">25 in Top 3</p>
                    <p className="text-[10px] text-emerald-400">25 in Top 7</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/15 px-4 py-2.5 text-center">
                <p className="text-[11px] font-semibold text-emerald-400">From invisible to dominating the Map Pack</p>
              </div>
            </div>
          </motion.div>

          {/* Reviews before/after */}
          <motion.div {...fadeUp(0.12)}>
            <div className="rounded-3xl border border-white/[0.09] bg-white/[0.04] p-7 select-none">
              <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase mb-5">Review Reputation</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-5 text-center">
                  <p className="text-[10px] font-semibold text-red-400 mb-2 tracking-wider uppercase">Before</p>
                  <p className="text-4xl font-bold text-white">1</p>
                  <p className="text-white/30 text-[11px] mt-1">total reviews</p>
                  <div className="flex justify-center mt-3 gap-px">
                    {[1].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                    {[2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                  </div>
                  <p className="text-white/30 text-[11px] mt-1">1.0★</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5 text-center">
                  <p className="text-[10px] font-semibold text-emerald-400 mb-2 tracking-wider uppercase">After</p>
                  <p className="text-4xl font-bold text-emerald-300">32</p>
                  <p className="text-white/30 text-[11px] mt-1">total reviews</p>
                  <div className="flex justify-center mt-3 gap-px">
                    {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                  </div>
                  <p className="text-emerald-400 text-[11px] mt-1">4.9★</p>
                </div>
              </div>
              <div className="rounded-xl bg-violet-500/8 border border-violet-500/15 px-4 py-2.5 text-center">
                <p className="text-[11px] font-semibold text-violet-300">+330% review growth vs previous 90 days</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metric strip */}
        <motion.div {...fadeUp(0.18)}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "+122", label: "New reviews gained", sub: "in 90 days", hex: "#8b5cf6" },
              { value: "+0.1★", label: "Rating improvement", sub: "in 90 days", hex: "#06b6d4" },
              { value: "86/100", label: "Customer Trust Score", sub: "Rating Quality 94%", hex: "#10b981" },
              { value: "~3%", label: "Revenue lift estimate", sub: "from rating improvement", hex: "#f59e0b" },
            ].map((m) => (
              <div key={m.value} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-center">
                <p className="text-2xl font-bold text-white leading-none mb-1" style={{ textShadow: `0 0 20px ${m.hex}60` }}>{m.value}</p>
                <p className="text-[11px] font-semibold text-white/60 leading-tight">{m.label}</p>
                <p className="text-[10px] text-white/30 mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.24)} className="flex justify-center mt-10">
          <PrimaryCTA label="Get Results Like These — Free Audit" />
        </motion.div>
      </div>
    </section>
  );
}

/* ── What's included ────────────────────────────────────────── */
function Included() {
  const cols = [
    {
      title: "Google Maps & GBP",
      hex: "#8b5cf6",
      items: [
        "Full GBP audit & setup",
        "Profile copy optimisation",
        "Category & attribute optimisation",
        "GBP photo management",
        "Q&A management",
        "Monthly GBP posts",
        "Geogrid rank tracking",
        "Competitor rank monitoring",
        "Keyword gap analysis",
      ],
    },
    {
      title: "Reviews & Reputation",
      hex: "#06b6d4",
      items: [
        "Branded QR standee",
        "WhatsApp review automation",
        "Smart sentiment routing",
        "Review monitoring & alerts",
        "AI-written review responses",
        "Bad review flagging & filing",
        "Reputation dashboard",
        "Urgent review escalation",
        "Monthly reputation report",
      ],
    },
    {
      title: "AI, SEO & Social",
      hex: "#10b981",
      items: [
        "AI citation article writing",
        "Website technical SEO",
        "Schema markup implementation",
        "Google AI Overview targeting",
        "E-E-A-T content signals",
        "Backlink strategy & outreach",
        "EpicSocial content generation",
        "Facebook & Instagram scheduling",
        "Content calendar management",
      ],
    },
  ];

  return (
    <section className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <p className="text-gray-400 text-[11px] font-semibold tracking-widest uppercase mb-4">Everything included</p>
          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mx-auto"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", maxWidth: "600px" }}
          >
            The complete local growth stack. Nothing left out.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cols.map((col, i) => (
            <motion.div key={col.title} {...fadeUp(0.07 + i * 0.07)}>
              <div className="h-full rounded-3xl border border-gray-100 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] p-7">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full" style={{ background: col.hex }} />
                  <h3 className="text-[0.9rem] font-bold text-gray-900">{col.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.855rem] text-gray-600">
                      <Check className="w-4 h-4 shrink-0 mt-px" style={{ color: col.hex }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.28)} className="flex justify-center mt-10">
          <Link
            href="/book-demo#form"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gray-950 text-white text-[0.95rem] font-bold hover:bg-gray-800 transition-all duration-200"
          >
            Start with a Free Audit — See Exactly What You're Missing →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "How long before I see results on Google Maps?",
      a: "Most clients see measurable rank improvements within 30–60 days of GBP optimisation and review generation starting. Full Map Pack dominance typically takes 60–90 days depending on competition and starting position.",
    },
    {
      q: "Do I need to do anything once I sign up?",
      a: "Very little. The QR standee goes on your counter. You approve or skip the content we generate each week. We handle everything else — posting, tracking, flagging, filing, writing. You run your business; we run your growth.",
    },
    {
      q: "What if you can't remove a bad review?",
      a: "You pay $0 for bad review removal if the review doesn't come down. Our model is simple: we only charge when we get results. This removes all risk from you.",
    },
    {
      q: "Is this just for Singapore businesses?",
      a: "We're built for Singapore SMBs but serve businesses in Malaysia, UAE, the UK, and the US. Our platform is optimised for dense, competitive local markets where review velocity and Map Pack rankings drive the most revenue.",
    },
    {
      q: "How is Epicware different from an agency or other SEO tools?",
      a: "Agencies charge retainers and make you wait on their team. Generic SEO tools give you data but not execution. Epicware is a self-serve platform that actually does the work — optimises your GBP, generates your reviews, removes bad ones, posts your content, and tracks your rankings — all in one dashboard.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <p className="text-gray-400 text-[11px] font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)" }}
          >
            Questions we get from Singapore business owners
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div key={i} {...fadeUp(0.05 + i * 0.05)}>
              <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[0.93rem] font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[0.875rem] text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ──────────────────────────────────────────────── */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#06060e] py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-700/20 blur-[140px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <p className="text-white/35 text-[11px] font-semibold tracking-widest uppercase mb-5">Get started</p>
          <h2
            className="font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Find out exactly what's stopping more customers from finding you.
          </h2>
          <p className="text-white/45 text-[1rem] leading-relaxed mb-3 max-w-xl mx-auto">
            Book a free 30-minute audit. We'll run a live scan on your Google Business Profile
            and show you exactly what's costing you customers right now.
          </p>
          <p className="text-white/30 text-sm mb-10">No obligation. No agency pitch. Just the data.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryCTA label="Get My Free Audit →" />
            <SecondaryCTA label="Book a Strategy Call" />
          </div>
          <p className="text-white/20 text-xs mt-6">Trusted by 50+ Singapore outlets · Results in 30 days</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export default function LocalGrowthLanding() {
  return (
    <>
      <Hero />
      <Problem />
      <GrowthStack />
      <Pillars />
      <Proof />
      <Included />
      <FAQ />
      <ClosingCTA />
      <StickyBar />
      {/* Bottom padding so sticky bar doesn't cover last section */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
