"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, PhotoPlaceholder, VerifiedStamp } from "@/components/ai-visibility/shared";
import { CITATIONS, type Citation } from "@/lib/ai-visibility-constants";

function scrollToForm(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type CitationWallProps = {
  // Default preserves the original /ai-visibility behavior: scroll to the
  // in-page "#audit-form" section. Pass a real route (e.g. "/free-audit")
  // for pages — like the homepage — that don't have that form on-page.
  ctaHref?: string;
};

export default function CitationWall({ ctaHref = "#audit-form" }: CitationWallProps) {
  const [active, setActive] = useState<Citation | null>(null);
  const ctaScrollsInPage = ctaHref.startsWith("#");

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()} className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Verified AI search results
          </span>
          <h2 className="font-display text-foreground">
            AI is already recommending our clients. Here&rsquo;s the proof — with dates.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mt-4">
            Every card below is a live screenshot, captured within 30–60 days of a client starting with us. No stock
            photos, no mockups — click any result to see it full-size.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {CITATIONS.map((c, i) => (
            <motion.button
              key={c.client}
              type="button"
              {...fadeUp(0.06 * i)}
              onClick={() => setActive(c)}
              className="text-left bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow cursor-zoom-in"
            >
              <div className="relative">
                {c.image ? (
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    width={900}
                    height={543}
                    className="w-full h-44 object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <PhotoPlaceholder label={c.client} className="w-full h-44" />
                )}
                <VerifiedStamp className="absolute top-2.5 left-2.5 bg-background/90 backdrop-blur-sm" />
                <span className="absolute top-2.5 right-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border px-2 py-0.5 text-[10px] font-display font-semibold uppercase tracking-wider text-foreground">
                  {c.platform}
                </span>
              </div>

              <div className="p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.vertical}
                </div>
                <div className="font-semibold text-foreground mt-0.5">{c.client}</div>
                <div className="text-sm text-muted-foreground mt-1 italic">&ldquo;{c.query}&rdquo;</div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-dashed border-border text-[11px] font-semibold uppercase tracking-wide">
                  <span className="text-primary">{c.result}</span>
                  <span className="text-muted-foreground">{c.date}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div {...fadeUp(0.1)} className="text-center mt-12">
          <p className="text-muted-foreground text-[15px] mb-4">
            Six clients. Six industries. One system — and it keeps a receipt every time it works.
          </p>
          {ctaScrollsInPage ? (
            <a
              href={ctaHref}
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 hover:opacity-90 transition-opacity"
            >
              See how this looks for your business →
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 hover:opacity-90 transition-opacity"
            >
              See how this looks for your business →
            </Link>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {active.image ? (
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  width={1600}
                  height={966}
                  className="w-full h-auto"
                />
              ) : (
                <PhotoPlaceholder label={active.client} className="w-full h-64" />
              )}
              <div className="p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {active.vertical} · {active.platform}
                </div>
                <div className="font-semibold text-foreground mt-0.5">{active.client}</div>
                <div className="text-sm text-muted-foreground mt-1 italic">&ldquo;{active.query}&rdquo;</div>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/90 border border-border flex items-center justify-center text-foreground"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
