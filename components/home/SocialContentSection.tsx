"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles, MessageSquare, Users, ArrowRight,
  ChevronLeft, ChevronRight, Check,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Data ──────────────────────────────────────────────────────── */
const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Sparkles,      title: "AI-generated post creative",   body: "Generate post ideas and visual directions from local SEO insights."   },
  { icon: MessageSquare, title: "Captions, hashtags, and CTA",  body: "Turn each idea into ready-to-publish copy for social channels."       },
  { icon: Users,         title: "Review and approval workflow", body: "Review, edit, approve, and schedule posts across your team."          },
];

const PLATFORM_CHIPS = ["Facebook", "Instagram", "YouTube", "TikTok"];

const INBOX_ROWS = [
  { bg: "bg-blue-600", letter: "F", platform: "FACEBOOK",  hook: "Every day you ignore your local...",       status: "Pending" },
  { bg: "bg-pink-600", letter: "I", platform: "INSTAGRAM", hook: "Your business isn't truly 'local' if...",  status: "Pending" },
  { bg: "bg-red-600",  letter: "Y", platform: "YOUTUBE",   hook: "Think all SEO is just a one-size-fits...", status: "Pending" },
  { bg: "bg-gray-900", letter: "T", platform: "TIKTOK",    hook: "Why are businesses still ignoring...",     status: "Pending" },
  { bg: "bg-blue-600", letter: "F", platform: "FACEBOOK",  hook: "Still wondering if backlinks are...",      status: "Review"  },
];

const SELECTED_PLATFORMS = [
  { letter: "f", bg: "bg-blue-600" },
  { letter: "i", bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" },
  { letter: "y", bg: "bg-red-600"  },
  { letter: "t", bg: "bg-gray-900" },
];

/* June 2025 starts Sunday June 1 */
const JUNE_DAYS = Array.from({ length: 35 }, (_, i) => (i < 30 ? i + 1 : null));
const JUNE_EVENTS: Record<number, { label: string; bg: string }> = {
  2:  { label: "Facebook · 10:00 AM", bg: "bg-blue-500" },
  7:  { label: "TikTok · 11:00 AM",   bg: "bg-gray-800" },
  11: { label: "Instagram · 3:00 PM", bg: "bg-pink-500" },
  15: { label: "YouTube · 2:00 PM",   bg: "bg-red-500"  },
};

/* ── Local SEO map — SVG illustration ─────────────────────────── */
function MapIllustration() {
  return (
    <div className="w-full h-full overflow-hidden" style={{ borderRadius: "inherit" }}>
      <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#eef6ee" />
        {/* Roads */}
        <rect x="0"   y="63"  width="200" height="12" fill="#d5c9a8" opacity="0.85" />
        <rect x="0"   y="130" width="200" height="12" fill="#d5c9a8" opacity="0.85" />
        <rect x="63"  y="0"   width="12"  height="200" fill="#d5c9a8" opacity="0.85" />
        <rect x="130" y="0"   width="12"  height="200" fill="#d5c9a8" opacity="0.85" />
        {/* Top row blocks */}
        <rect x="5"   y="5"  width="52" height="52" rx="4" fill="#b5d9bb" />
        <rect x="81"  y="5"  width="43" height="52" rx="4" fill="#ecd9b6" />
        <rect x="148" y="5"  width="47" height="52" rx="4" fill="#c3c8d9" />
        {/* Mid-left park */}
        <rect x="5"   y="81" width="52" height="43" rx="5" fill="#9ed49a" />
        <circle cx="19" cy="95"  r="7" fill="#6dbf69" opacity="0.65" />
        <circle cx="43" cy="113" r="5" fill="#6dbf69" opacity="0.65" />
        {/* Featured storefront */}
        <rect x="81"  y="81" width="43" height="43" rx="3" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.8" />
        <rect x="86"  y="88" width="33" height="14" rx="2" fill="#bfdbfe" opacity="0.85" />
        <rect x="81"  y="104" width="43" height="12" fill="#f87171" opacity="0.70" />
        <rect x="81"  y="116" width="43" height="8"  fill="#fca5a5" opacity="0.40" />
        {/* Mid-right block */}
        <rect x="148" y="81" width="47" height="43" rx="4" fill="#d0d4e4" />
        {/* Bottom row */}
        <rect x="5"   y="148" width="52" height="47" rx="4" fill="#ecd9b6" />
        <rect x="81"  y="148" width="43" height="47" rx="4" fill="#c3c8d9" />
        <rect x="148" y="148" width="47" height="47" rx="4" fill="#b5d9bb" />
        {/* Magnifying glass circle */}
        <circle cx="100" cy="100" r="52" fill="white" fillOpacity="0.20" />
        <circle cx="100" cy="100" r="52" fill="none" stroke="#9ca3af" strokeWidth="3.5" strokeOpacity="0.32" />
        {/* Handle */}
        <line x1="141" y1="141" x2="162" y2="162" stroke="#9ca3af" strokeWidth="5.5" strokeLinecap="round" strokeOpacity="0.38" />
        {/* Location pin */}
        <circle cx="100" cy="95" r="10" fill="#f43f5e" />
        <circle cx="100" cy="95" r="4"  fill="white" />
        <path d="M100 105 L100 115" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ── Inbox panel ───────────────────────────────────────────────── */
function InboxPanel() {
  const TABS = [{ label: "Pending", n: 10 }, { label: "Scheduled", n: 0 }, { label: "Approved", n: 12 }];
  return (
    <div className="w-full h-full bg-white rounded-[22px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
      <div className="px-4 pt-3.5 pb-0 shrink-0">
        <p className="font-bold text-gray-900 text-[0.86rem] mb-2">Inbox</p>
        <div className="flex gap-0 border-b border-gray-100">
          {TABS.map((t, i) => (
            <button key={t.label} className={`text-[9.5px] font-semibold pb-1.5 mr-2.5 whitespace-nowrap border-b-2 -mb-px ${i === 0 ? "text-rose-500 border-rose-400" : "text-gray-400 border-transparent"}`}>
              {t.label} ({t.n})
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-hidden divide-y divide-gray-50/80">
        {INBOX_ROWS.map((row, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3.5 py-2">
            {/* Mini thumbnail — small illustrated square, feels like a post creative */}
            <div className="w-9 h-9 rounded-lg shrink-0 overflow-hidden relative flex-none" style={{ background: "#eef6ee" }}>
              <div className="absolute w-full h-[10%] top-[45%]" style={{ background: "#d5c9a8", opacity: 0.7 }} />
              <div className="absolute h-full w-[10%] left-[45%]" style={{ background: "#d5c9a8", opacity: 0.7 }} />
              <div className={`absolute bottom-0 left-0 right-0 h-[32%] ${row.bg} opacity-50`} />
              <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "4px" }}>
                <div className="w-2 h-2 rounded-full bg-rose-500 shadow-sm" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className={`text-[7.5px] font-bold uppercase tracking-wide px-1.5 py-[2px] rounded text-white ${row.bg} inline-block mb-[2px]`}>
                {row.platform}
              </span>
              <p className="text-[10px] text-gray-600 truncate leading-tight">{row.hook}</p>
            </div>
            <span className={`text-[9px] font-semibold shrink-0 ${row.status === "Pending" ? "text-rose-500" : "text-gray-400"}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Social post editor card ───────────────────────────────────── */
function EditorCard() {
  return (
    <div className="w-full h-full bg-white rounded-[24px] border border-gray-100 shadow-[0_14px_50px_rgba(0,0,0,0.14),0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2.5 border-b border-gray-50 shrink-0">
        <p className="font-bold text-gray-900 text-[0.9rem]">Social Post</p>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-[3px]">Draft 1</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-[3px]">
            <Check className="w-2.5 h-2.5" /> Approve
          </span>
        </div>
      </div>

      {/* Body: two-column — image left, caption right */}
      <div className="flex gap-[18px] px-4 pt-3.5 pb-0 flex-1 min-h-0">
        {/* Left: preview — 47% */}
        <div className="shrink-0 flex flex-col" style={{ width: "47%" }}>
          <div className="rounded-[14px] overflow-hidden flex-1 min-h-0">
            <MapIllustration />
          </div>
          {/* Platform icons below image */}
          <div className="pt-2.5 shrink-0">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Platforms</p>
            <div className="flex gap-1.5 items-center">
              {SELECTED_PLATFORMS.map((p, i) => (
                <div key={i} className="relative">
                  <div className={`w-6 h-6 rounded-full ${p.bg} flex items-center justify-center shadow-sm ring-[1.5px] ring-white`}>
                    <span className="text-white text-[8px] font-bold uppercase">{p.letter}</span>
                  </div>
                  {/* green checkmark */}
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white flex items-center justify-center">
                    <Check className="w-1.5 h-1.5 text-white" strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: caption + fields — 53% */}
        <div className="flex-1 flex flex-col gap-2 min-w-0 overflow-hidden">
          {/* Caption */}
          <div className="flex-1 flex flex-col min-h-0">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1 shrink-0">Caption</p>
            <div
              className="rounded-[10px] border border-gray-100 bg-gray-50/70 p-2.5 text-[11px] text-gray-700 leading-[1.55] overflow-y-auto flex-1 min-h-0"
              style={{ minHeight: "96px" }}
            >
              Local SEO isn&rsquo;t just a buzzword; it&rsquo;s the lifeline for businesses right here in town.
              <br /><br />
              From showing up in local searches to building trust in your community—strong visibility drives real foot traffic and loyal customers.
              <br /><br />
              Optimise locally. Grow locally. Win locally.
              <br />
              <span className="text-violet-500">#LocalSEO #SmallBusiness #GrowLocal #SupportLocal</span>
            </div>
          </div>
          {/* CTA */}
          <div className="shrink-0">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">CTA</p>
            <div className="rounded-[10px] border border-gray-100 bg-gray-50/70 px-2.5 py-1.5 text-[10.5px] text-gray-600">
              Learn more about local SEO →
            </div>
          </div>
          {/* Hashtags */}
          <div className="shrink-0">
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hashtags</p>
            <div className="rounded-[10px] border border-gray-100 bg-gray-50/70 px-2.5 py-1.5 text-[10.5px] text-violet-600 truncate">
              #localseo, #smallbusiness, #supportlocal, #growlocal, #localsearch
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-3.5 shrink-0" />
    </div>
  );
}

/* ── Calendar card ─────────────────────────────────────────────── */
function CalendarCard() {
  const DOW = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className="w-full h-full bg-white rounded-[22px] border border-gray-100 shadow-[0_8px_28px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-1.5 shrink-0">
        <p className="font-bold text-gray-900 text-[0.82rem]">Calendar</p>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-gray-500 font-medium">June 2025</span>
          <button className="w-4 h-4 flex items-center justify-center"><ChevronLeft className="w-2.5 h-2.5 text-gray-400" /></button>
          <button className="w-4 h-4 flex items-center justify-center"><ChevronRight className="w-2.5 h-2.5 text-gray-400" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 px-2.5 pb-1 shrink-0">
        {DOW.map((d) => (
          <div key={d} className="text-center text-[7.5px] font-bold text-gray-400 py-0.5">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 px-2.5 pb-2.5 flex-1 gap-y-0.5">
        {JUNE_DAYS.map((day, i) => {
          const ev = day ? JUNE_EVENTS[day] : null;
          return (
            <div key={i} className="flex flex-col items-start min-h-0">
              {day && (
                <>
                  <span className={`text-[8.5px] font-medium ${day === 15 ? "text-rose-500 font-bold" : "text-gray-600"}`}>{day}</span>
                  {ev && (
                    <div className={`${ev.bg} rounded text-white px-0.5 w-full truncate`} style={{ fontSize: "7px", lineHeight: "1.35", paddingBlock: "1px" }}>
                      {ev.label}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Floating label — card (2-line, centred) ───────────────────── */
function FloatingCard({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <div
      className="bg-white border border-rose-200 rounded-[16px] shadow-[0_4px_18px_rgba(0,0,0,0.13)] text-center"
      style={{ padding: "12px 18px", width: "160px" }}
    >
      <p className="text-[12px] font-bold text-rose-500 leading-[1.35]">{line1}</p>
      <p className="text-[12px] font-bold text-rose-500 leading-[1.35]">{line2}</p>
    </div>
  );
}

/* ── Floating label — pill (single line) ───────────────────────── */
function FloatingPill({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center bg-white border border-rose-200 rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.12)] whitespace-nowrap"
      style={{ paddingInline: "18px", paddingBlock: "9px" }}
    >
      <span className="text-[12.5px] font-semibold text-rose-600">{text}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   Refined proportions, tighter left column, wider right panel.
   Target viewport: 1440 × 900 — entire section visible.
══════════════════════════════════════════════════════════════════ */
export default function SocialContentSection() {
  return (
    <div className="bg-white pt-[64px] pb-[80px]">
      <div className="mx-auto" style={{ maxWidth: "1400px", width: "calc(100% - 64px)" }}>
        <div className="grid grid-cols-1 items-start gap-12 lg:gap-[50px] lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">

          {/* ══════════════════ LEFT ══════════════════ */}
          <motion.div {...fadeIn(0)} className="flex flex-col">

            {/* Step marker + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(244,63,94,0.4)]">
                5
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-rose-500">
                Social Content Distribution Engine
              </span>
            </div>

            {/* Headline — targets 2 lines at this column width */}
            <h3
              className="font-bold text-gray-950 mb-4"
              style={{
                fontSize: "clamp(2.625rem, 3.25vw, 3.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                maxWidth: "520px",
              }}
            >
              Turn Local SEO Insights Into Social Content
            </h3>

            {/* Intro */}
            <p
              className="text-gray-500 leading-[1.6] mb-6"
              style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)", maxWidth: "550px" }}
            >
              Your local SEO strategy should not live only inside Google. The same keywords, offers,
              services, FAQs, and customer pain points can be turned into consistent social content.
            </p>

            {/* Benefit card */}
            <div className="bg-white rounded-[24px] border border-rose-100 shadow-[0_2px_18px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="px-5 lg:px-6">
                {BENEFITS.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title}>
                      <div className="grid gap-4 py-[19px]" style={{ gridTemplateColumns: "54px 1fr" }}>
                        <div className="w-[50px] h-[50px] rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-rose-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="font-bold text-gray-900 mb-1 leading-snug" style={{ fontSize: "0.95rem" }}>
                            {b.title}
                          </p>
                          <p className="text-gray-500 leading-[1.5]" style={{ fontSize: "0.83rem" }}>{b.body}</p>
                        </div>
                      </div>
                      {i < BENEFITS.length - 1 && <div className="h-px bg-rose-50" />}
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="px-5 lg:px-6 pb-5 pt-2">
                <Link
                  href="/growth-tools/epicsocial-social-scheduling"
                  className="flex items-center justify-center gap-2 w-full rounded-[14px] bg-rose-500 hover:bg-rose-600 text-white font-semibold transition-all duration-200 shadow-[0_4px_14px_rgba(244,63,94,0.33)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.46)] hover:-translate-y-0.5"
                  style={{ height: "54px", fontSize: "1rem" }}
                >
                  Create social content
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Platform chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {PLATFORM_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-rose-200 text-rose-600 font-medium bg-rose-50"
                  style={{ height: "36px", paddingInline: "14px", fontSize: "0.82rem" }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Bottom message */}
            <div className="mt-4 rounded-[16px] bg-rose-50 border border-rose-100 px-4 py-3.5">
              <p className="leading-[1.5] text-gray-800" style={{ fontSize: "0.875rem" }}>
                Google helps customers find you.{" "}
                <span className="font-bold text-rose-500">Social helps them remember you.</span>
              </p>
            </div>
          </motion.div>

          {/* ══════════════════ RIGHT ══════════════════ */}
          <motion.div {...fadeIn(0.08)}>

            {/* ── Desktop composed panel (lg+) ── */}
            {/*
              Geometry at 1440px (right col ≈ 849px, panel 670px tall):
              ┌─ Inbox:     left 34, top 158, w 308, h 348  →  right edge 342px, bottom 506px
              ├─ Editor:    right 78, top 140, w 535, h 366 →  left 236px (overlap=106px), bottom 506px
              ├─ Calendar:  right 24, bottom 36, w 418, h 248 → top 386px (vertical overlap editor: 120px)
              ├─ AI label:  left 202, bottom 152, z-50 (card style, above editor)
              └─ Cal label: right 16, bottom 40,  z-60 (pill, above calendar)
            */}
            <div
              className="relative hidden lg:block rounded-[32px] bg-[#fff8f8] border border-rose-100/60 overflow-hidden"
              style={{ height: "670px" }}
            >
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: 0.04, backgroundImage: "radial-gradient(circle, #f43f5e 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />

              {/* Top transformation pill — z-70, always on top */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-[70] flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-[15px] shadow-[0_2px_12px_rgba(244,63,94,0.12)]"
                style={{ top: "30px", height: "50px", paddingInline: "24px" }}
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="text-[13px] font-semibold text-rose-600 whitespace-nowrap">
                  Turn SEO insights into social content
                </span>
              </div>

              {/* ── z-10 Inbox — shorter, fixed height, background left ── */}
              <div className="absolute z-10" style={{ left: "34px", top: "158px", width: "308px", height: "348px" }}>
                <InboxPanel />
              </div>

              {/* ── z-20 Editor — wide, dominant foreground ── */}
              {/* right:78 → at 849px panel: left=849-78-535=236. Overlap with inbox=342-236=106px */}
              <div className="absolute z-20" style={{ right: "78px", top: "140px", width: "535px", height: "366px" }}>
                <EditorCard />
              </div>

              {/* ── z-50 AI label — card style, between editor and calendar z-layers ── */}
              {/* left:202 sits ~34px inside the editor left edge; bottom:152 → ~518px from panel top (inside editor 140–506) */}
              <div className="absolute z-50" style={{ left: "202px", bottom: "152px" }}>
                <FloatingCard line1="AI-generated" line2="post creative" />
              </div>

              {/* ── z-40 Calendar — wide, lower-right, overlaps editor bottom ── */}
              {/* right:24 → at 849px panel: left=849-24-418=407. Editor right=849-78=771. Horizontal overlap=364px */}
              {/* bottom:36 → top=670-36-248=386. Editor bottom=506. Vertical overlap=120px */}
              <div className="absolute z-40" style={{ right: "24px", bottom: "36px", width: "418px", height: "248px" }}>
                <CalendarCard />
              </div>

              {/* ── z-60 Multi-platform label — pill, above calendar ── */}
              <div className="absolute z-[60]" style={{ right: "16px", bottom: "40px" }}>
                <FloatingPill text="Multi-platform calendar" />
              </div>
            </div>

            {/* ── Mobile: stacked (< lg) ── */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="flex items-center justify-center gap-2 bg-rose-50 border border-rose-200 rounded-2xl py-3 px-5">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-[12px] font-semibold text-rose-600">Turn SEO insights into social content</span>
              </div>
              <div style={{ height: "280px" }}><InboxPanel /></div>
              <div style={{ height: "420px" }}><EditorCard /></div>
              <p className="text-[11px] font-semibold text-rose-500 text-center">AI-generated post creative</p>
              <div style={{ height: "260px" }}><CalendarCard /></div>
              <p className="text-[11px] font-semibold text-rose-500 text-center">Multi-platform calendar</p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
