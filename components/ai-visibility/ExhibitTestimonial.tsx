"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, PhotoPlaceholder } from "./shared";
import { EXHIBIT } from "@/lib/ai-visibility-constants";

export default function ExhibitTestimonial() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()} className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            In their words
          </span>
          <h2 className="font-display text-foreground">
            The screenshots prove visibility. This proves what it&rsquo;s worth.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mt-4">
            One client&rsquo;s own words on what showing up in AI search actually did for their business.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 bg-card border border-border/60 rounded-2xl overflow-hidden shadow-elegant"
        >
          {/* Left: quote */}
          <div className="p-8 lg:p-10 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-border/60">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {EXHIBIT.fileTag}
              </span>
              <VerifiedWhatsApp />
            </div>

            <blockquote className="font-display text-xl lg:text-2xl leading-snug text-foreground">
              &ldquo;{EXHIBIT.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3.5 pt-5 border-t border-border/60 mt-auto">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                {EXHIBIT.avatarInitials}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground text-sm">{EXHIBIT.attributionName}</div>
                <div className="text-xs text-muted-foreground">{EXHIBIT.attributionLocation}</div>
              </div>
              <div className="ml-auto shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground border border-border rounded-full px-2.5 py-1">
                {EXHIBIT.startedLabel}
              </div>
            </div>
          </div>

          {/* Right: proof */}
          <div className="p-8 lg:p-10 flex flex-col gap-5 bg-muted/20">
            <div className="rounded-xl overflow-hidden border border-border/60">
              {EXHIBIT.proofImage ? (
                <Image
                  src={EXHIBIT.proofImage}
                  alt={EXHIBIT.proofImageAlt}
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              ) : (
                <PhotoPlaceholder label={EXHIBIT.fileTag} className="w-full h-56" />
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">↑ {EXHIBIT.proofCaption}</p>

            <div className="grid grid-cols-2 gap-3">
              {EXHIBIT.stats.map((s) => (
                <div key={s.label} className="bg-card border border-border/60 rounded-xl px-4 py-3">
                  <div className="font-display font-bold text-2xl text-primary">{s.num}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border/60 rounded-xl px-4 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary text-sm tracking-wider" aria-label={`${EXHIBIT.review.stars} out of 5 stars`}>
                  {"★".repeat(EXHIBIT.review.stars)}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {EXHIBIT.review.when}
                </span>
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-2.5">&ldquo;{EXHIBIT.review.text}&rdquo;</p>
              <div className="text-[11px] text-muted-foreground border-t border-dashed border-border pt-2.5">
                {EXHIBIT.review.who}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VerifiedWhatsApp() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-accent/60 bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
      Verified · WhatsApp
    </span>
  );
}
