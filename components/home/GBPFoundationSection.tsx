"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  AlertCircle,
  Globe,
  Navigation,
  Phone,
  MapPin,
  Clock,
  Star,
  LayoutGrid,
  Image as ImageIcon,
  Tag,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Zap,
  BadgeCheck,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/* ── Floating chip ─────────────────────────────────────────────────
   Slightly reduced from the previous pass so they fit inside the
   630 px panel without overflow.
   ─────────────────────────────────────────────────────────────── */
function FloatingChip({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-1.5 bg-white rounded-full border border-violet-100/80 shadow-[0_3px_12px_rgba(109,40,217,0.09)] whitespace-nowrap select-none"
      style={{ paddingInline: "14px", paddingBlock: "8px" }}>
      <Icon className="w-[17px] h-[17px] text-violet-500 shrink-0" />
      <span className="text-[13px] font-semibold text-violet-600">{label}</span>
    </div>
  );
}

/* ── Benefit row ───────────────────────────────────────────────────
   Tightened vertical padding and icon size to keep card compact.
   ─────────────────────────────────────────────────────────────── */
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

/* ── Profile card (GBP simulation) ────────────────────────────────
   Reduced header avatar, photo height, and tab/detail typography
   so the card fits inside the 630 px panel.
   ─────────────────────────────────────────────────────────────── */
function ProfileCard() {
  const tabs = ["Overview", "Reviews", "Photos"] as const;
  const actions = [
    { icon: Globe,      label: "Website"    },
    { icon: Navigation, label: "Directions" },
    { icon: Phone,      label: "Call"       },
  ] as const;

  return (
    <div className="w-full bg-white rounded-[22px] border border-gray-100 shadow-[0_10px_48px_rgba(0,0,0,0.12),0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">

      {/* ── Header ── */}
      <div className="px-4 pt-4 pb-0">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-start gap-2.5">
            {/* Avatar */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 ring-2 ring-white shadow-sm">
              <span className="text-white text-[10px] font-extrabold tracking-tight">GD</span>
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="font-bold text-gray-900 text-[0.875rem] leading-tight mb-0.5">
                The Garden Dental Clinic
              </p>
              <p className="text-[0.78rem] text-gray-500">Dental clinic · Singapore</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[0.8rem] font-bold text-gray-800">4.6</span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-[0.75rem] text-gray-400">· 286 reviews</span>
              </div>
            </div>
          </div>
          {/* Open badge */}
          <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 shrink-0 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[0.68rem] font-bold text-emerald-600">Open</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 gap-0.5">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-3 py-2 text-[0.8rem] font-semibold transition-colors ${
                i === 0
                  ? "text-violet-600 border-b-2 border-violet-500 -mb-px"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Clinic photo ── */}
      <div className="px-3.5 pt-3">
        <div className="relative w-full h-[188px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4269265/pexels-photo-4269265.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Modern dental clinic interior"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 460px"
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/20 to-transparent" />
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="grid grid-cols-3 gap-1.5 px-3.5 mt-3">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-0.5 py-2 rounded-lg bg-violet-50/80 hover:bg-violet-100/80 border border-violet-100/40 transition-colors"
          >
            <Icon className="w-4 h-4 text-violet-600" />
            <span className="text-[0.68rem] text-violet-600 font-semibold">{label}</span>
          </button>
        ))}
      </div>

      {/* ── Details ── */}
      <div className="px-4 py-3 space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
          <span className="text-[0.78rem] text-gray-600 leading-snug">21 Cavenagh Road, Singapore 229617</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[0.78rem]">
            <span className="text-emerald-600 font-semibold">Open</span>
            <span className="text-gray-400"> · Closes 8:00 PM</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Audit overlay card ────────────────────────────────────────────
   Reduced to ~290px tall / 300px wide so it fits fully inside
   the 630 px panel and overlaps only the card's lower-right area.
   ─────────────────────────────────────────────────────────────── */
function AuditOverlay() {
  const items = [
    { label: "Business information", status: "Complete",   ok: true  },
    { label: "Primary category",     status: "Optimised",  ok: true  },
    { label: "Services",             status: "12 added",   ok: true  },
    { label: "Photos",               status: "Updated",    ok: true  },
    { label: "Attributes",           status: "8 selected", ok: true  },
    { label: "Business description", status: "Improve",    ok: false },
  ];

  return (
    <div className="bg-white rounded-[20px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-[18px]">
      <p className="text-[0.95rem] font-bold text-gray-900 mb-0.5 leading-tight">
        19-Point Profile Audit
      </p>
      <p className="text-[0.75rem] text-gray-500 mb-2.5">17 of 19 optimised</p>

      {/* Progress bar */}
      <div className="h-2 bg-gray-100 rounded-full mb-3 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: "89%" }} />
      </div>

      {/* Checklist */}
      <div className="space-y-1.5">
        {items.map(({ label, status, ok }) => (
          <div key={label} className="flex items-center justify-between gap-1.5 h-8">
            <div className="flex items-center gap-1.5 min-w-0">
              {ok ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <AlertCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              )}
              <span className="text-[0.75rem] text-gray-700 truncate">{label}</span>
            </div>
            <span className={`text-[0.65rem] font-bold shrink-0 ${ok ? "text-emerald-500" : "text-orange-500"}`}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Data ──────────────────────────────────────────────────────── */
const BENEFITS: { icon: LucideIcon; iconBg: string; iconColor: string; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Strengthen profile accuracy",
    body: "Ensure your business details, categories, hours, and contact information are fully optimised.",
  },
  {
    icon: Zap,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Improve conversion signals",
    body: "Enhance services, photos, descriptions, and actions that help customers choose you faster.",
  },
  {
    icon: BadgeCheck,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Build trust instantly",
    body: "Show stronger reviews, attributes, and profile completeness that reduce doubt.",
  },
];

const LEFT_CHIPS: { label: string; icon: LucideIcon }[] = [
  { label: "Categories", icon: LayoutGrid },
  { label: "Services",   icon: Briefcase  },
  { label: "Photos",     icon: ImageIcon  },
];

const RIGHT_CHIPS: { label: string; icon: LucideIcon }[] = [
  { label: "Hours",      icon: Clock  },
  { label: "Attributes", icon: Tag    },
  { label: "Reviews",    icon: Star   },
];

/* ══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   Target total section height at 1440 × 900: ≤ 760 px
   Right panel fixed at 630 px with overflow-hidden.
══════════════════════════════════════════════════════════════════ */
export default function GBPFoundationSection() {
  return (
    <div className="bg-[#fafaff] pt-10 pb-14 lg:pt-[52px] lg:pb-[68px]">
      <div className="mx-auto max-w-[1320px] w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(390px,_0.82fr)_minmax(650px,_1.18fr)] gap-8 lg:gap-[52px] items-start">

          {/* ── LEFT: label + headline + benefit card ── */}
          <motion.div {...fadeIn(0)} className="order-1 flex flex-col">

            {/* Step marker + label */}
            <div className="flex items-center gap-3 mb-[22px]">
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white text-[0.875rem] font-bold shrink-0 shadow-[0_2px_8px_rgba(109,40,217,0.4)]">
                1
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-violet-700">
                Google Business Profile Foundation
              </span>
            </div>

            {/* Headline — targets 2 lines at 1320 px container */}
            <motion.h3
              {...fadeIn(0.05)}
              className="font-bold text-gray-950 mb-5 max-w-[570px]"
              style={{ fontSize: "clamp(2.625rem, 3.4vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}
            >
              Optimise the Google Profile Customers Already Trust
            </motion.h3>

            {/* Benefit card */}
            <motion.div
              {...fadeIn(0.1)}
              className="flex-1 rounded-[24px] lg:rounded-[26px] border border-gray-100 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col"
            >
              <div className="px-5 lg:px-6 flex-1">
                {BENEFITS.map((b, i) => (
                  <BenefitRow key={b.title} {...b} divider={i < BENEFITS.length - 1} />
                ))}
              </div>

              {/* CTA */}
              <div className="px-5 lg:px-6 pb-5 pt-2">
                <Link
                  href="/gbp-optimisation-singapore"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-[14px] bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-200 shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_22px_rgba(249,115,22,0.48)] hover:-translate-y-0.5"
                  style={{ height: "56px", fontSize: "1rem" }}
                >
                  Optimise my profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: visual panel ── */}
          <motion.div {...fadeIn(0.08)} className="order-2">
            {/*
              Fixed 630 px height with overflow-hidden.
              All children are absolutely positioned within the panel.
              Profile card is z-10; chips are z-0 (behind card edges);
              audit overlay is z-30 (always on top).
            */}
            <div
              className="relative rounded-[28px] lg:rounded-[30px] bg-[#f3f2fb] border border-violet-100/50 shadow-sm overflow-hidden"
              style={{ height: "630px" }}
            >
              {/* Subtle dot-grid background */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#5b21b6 1px, transparent 1px), linear-gradient(90deg, #5b21b6 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-200/18 rounded-full blur-3xl pointer-events-none" />

              {/* ── TOP PILL ── */}
              <div className="absolute top-6 inset-x-0 flex justify-center z-10">
                <div
                  className="flex items-center gap-1.5 bg-white/90 border border-violet-200/90 rounded-full shadow-[0_3px_14px_rgba(109,40,217,0.11)]"
                  style={{ height: "46px", paddingInline: "20px" }}
                >
                  <Sparkles className="w-4 h-4 text-violet-500" />
                  <span className="text-[0.875rem] font-bold text-violet-700">19-point GBP optimisation</span>
                </div>
              </div>

              {/* ── PROFILE CARD ──
                  Centered horizontally. Chips (z-0) tuck behind the card edges.
                  width: min(460px, 100% − 100px) reserves margin for chips.     */}
              <div
                className="absolute z-10"
                style={{ top: "80px", left: "50%", transform: "translateX(-50%)", width: "min(460px, calc(100% - 100px))" }}
              >
                <ProfileCard />
              </div>

              {/* ── LEFT CHIPS (z-0 — behind card) ── */}
              <div
                className="absolute left-4 lg:left-5 z-0 hidden sm:flex flex-col gap-3"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                {LEFT_CHIPS.map(({ label, icon }) => (
                  <FloatingChip key={label} label={label} icon={icon} />
                ))}
              </div>

              {/* ── RIGHT CHIPS (z-0 — behind card) ── */}
              <div
                className="absolute right-4 lg:right-5 z-0 hidden sm:flex flex-col gap-3"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                {RIGHT_CHIPS.map(({ label, icon }) => (
                  <FloatingChip key={label} label={label} icon={icon} />
                ))}
              </div>

              {/* ── AUDIT OVERLAY (z-30 — above everything) ──
                  Width capped at 300 px; positioned bottom-right so it
                  overlaps the lower-right portion of the profile card.    */}
              <div className="absolute z-30" style={{ bottom: "32px", right: "30px" }}>
                <div style={{ width: "clamp(256px, 42%, 302px)" }}>
                  <AuditOverlay />
                </div>
              </div>

              {/* ── MOBILE: chip row below card ── */}
              <div className="absolute bottom-4 inset-x-0 flex sm:hidden flex-wrap gap-1.5 justify-center px-4">
                {[...LEFT_CHIPS, ...RIGHT_CHIPS].map(({ label, icon }) => (
                  <FloatingChip key={label} label={label} icon={icon} />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
