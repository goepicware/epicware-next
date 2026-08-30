"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { VerifiedStamp, PhotoPlaceholder } from "@/components/ai-visibility/shared";

// Scroll-triggered fade-up — same easing used across the site (matches the
// local copy in RemoveReviewPage.tsx; not imported cross-file since none of
// this page's sections are exported).
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// Client names are never used here — every case is anonymized to industry +
// market only. `image: null` renders a "screenshot pending" placeholder
// until the redacted screenshot files are dropped into
// public/assets/remove-review/.
type RemovedCase = {
  tag: string;
  image: string | null;
  imageW: number;
  imageH: number;
  imageAlt: string;
  title: string;
  body: string;
  stats: { num: string; label: string }[];
};

const REMOVED_CASES: RemovedCase[] = [
  {
    tag: "Veterinary Clinic · Singapore",
    image: "/assets/remove-review/removal-case-vet-confirmation.jpg",
    imageW: 1000,
    imageH: 441,
    imageAlt: "Redacted Google confirmation email stating reviews that violated policy have been removed, business name blacked out",
    title: "15 negative reviews, gone in one cycle",
    body: "A multi-outlet veterinary hospital had a cluster of policy-violating reviews dragging its rating down. We identified the right violation for each one and escalated through Google's official channel — not the generic flag button.",
    stats: [
      { num: "15", label: "Reviews removed" },
      { num: "3.8→3.9", label: "Rating recovered" },
    ],
  },
  {
    tag: "Multi-Outlet F&B · Singapore",
    image: "/assets/remove-review/removal-case-fnb-confirmation.jpg",
    imageW: 1000,
    imageH: 453,
    imageAlt: "Google Business Profile Support confirmation that a review removal request was received and processed",
    title: "A 4-outlet chain's rating, protected",
    body: "A fast-casual restaurant group with four Singapore outlets had a review that clearly broke Google's policy but had already been rejected once by their in-house team's DIY attempt — wrong violation cited. We refiled correctly.",
    stats: [
      { num: "4", label: "Outlets protected" },
      { num: "1st", label: "Correct filing, no retries" },
    ],
  },
];

const DECLINED_CASE = {
  image: "/assets/remove-review/removal-case-declined-example.jpg",
  imageW: 1000,
  imageH: 477,
  imageAlt: "Redacted Google response stating a reported review did not violate policy and remained live, business name blacked out",
  title: "Sometimes Google says no — and we tell you.",
  body: "This is a real response too: a different set of reviews, reported by the same clinic, that Google's team investigated and kept up because they didn't violate policy. We showed this to the client the same day — and it's why the assessment is free and the refund is real. We're not guessing whether your review qualifies before you pay.",
};

export default function RemovalLog() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp()} className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Real removals, real receipts
          </span>
          <h2 className="font-display text-foreground">
            We don&rsquo;t just promise removals. Here&rsquo;s the paper trail.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mt-4">
            Every screenshot below is an unedited response from Google. We&rsquo;ve redacted the business name on
            each one — the outcome speaks for itself, and client confidentiality matters more than a logo.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.05)}
          className="flex items-start gap-3 bg-card border border-border/60 rounded-2xl px-5 py-4 mt-6 max-w-2xl"
        >
          <Lock className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Client names withheld by design.</strong> Every business below gave
            us permission to show the result, not the name. If you&rsquo;d rather see verified references privately
            before starting, ask during your free assessment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {REMOVED_CASES.map((c, i) => (
            <motion.div
              key={c.tag}
              {...fadeUp(0.1 + i * 0.08)}
              className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60 bg-muted/40">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.tag}
                </span>
                <VerifiedStamp label="Removed" />
              </div>

              {c.image ? (
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  width={c.imageW}
                  height={c.imageH}
                  className="w-full h-auto"
                  loading="lazy"
                />
              ) : (
                <PhotoPlaceholder label={c.tag} className="w-full h-48" />
              )}

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-semibold text-foreground text-lg leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.body}</p>
                <div className="grid grid-cols-2 gap-3 pt-3 mt-auto border-t border-dashed border-border">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display font-bold text-xl text-primary">{s.num}</div>
                      <div className="text-[10.5px] font-semibold uppercase tracking-wide text-muted-foreground mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Declined case — deliberately set apart from the wins above, not hidden */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-6 rounded-2xl border border-dashed border-amber-400 bg-card overflow-hidden grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]"
        >
          {DECLINED_CASE.image ? (
            <Image
              src={DECLINED_CASE.image}
              alt={DECLINED_CASE.imageAlt}
              width={DECLINED_CASE.imageW}
              height={DECLINED_CASE.imageH}
              className="w-full h-auto border-b md:border-b-0 md:border-r border-border/60"
              loading="lazy"
            />
          ) : (
            <PhotoPlaceholder
              label="Declined case"
              className="w-full h-48 border-b md:border-b-0 md:border-r border-border/60"
            />
          )}
          <div className="p-6 lg:p-7 flex flex-col gap-3 justify-center">
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 w-fit">
              Not every case wins
            </span>
            <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
              {DECLINED_CASE.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              This is a real response too: a different set of reviews, reported by the same clinic, that
              Google&rsquo;s team investigated and kept up because they didn&rsquo;t violate policy.{" "}
              <strong className="text-foreground">We showed this to the client the same day</strong> — and it&rsquo;s
              why the assessment is free and the refund is real. We&rsquo;re not guessing whether your review
              qualifies before you pay.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10 pt-8 border-t border-border/60"
        >
          <p className="text-sm text-muted-foreground max-w-md text-center sm:text-left">
            Real outcomes, names withheld, decisions shown either way — that&rsquo;s the whole point of a refund
            guarantee that isn&rsquo;t just a marketing line.
          </p>
          <a
            href="#review-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 hover:opacity-90 transition-opacity shrink-0"
          >
            Get my free assessment →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
