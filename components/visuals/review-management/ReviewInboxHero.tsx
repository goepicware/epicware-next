"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { REVIEW_MANAGEMENT_FICTIONAL_BUSINESS, FICTIONAL_REVIEWERS } from "../fixtures";

const REVIEW_TEXT = "Booked a last-minute appointment and the team still made time for a full consultation. Loved the result!";
const REPLY_TEXT = `Thank you so much, ${FICTIONAL_REVIEWERS[0].split(" ")[0]}! So glad the team could fit you in and that you're happy with the result — see you again soon.`;

/**
 * R1 — hero visual. A review card arrives, an AI-drafted reply types
 * itself out, then "Approve & post" lights up. Reduced-motion visitors
 * see the finished state immediately (full reply text, button already
 * lit) with no typing animation.
 */
export default function ReviewInboxHero() {
  const shouldReduce = useReducedMotion();
  const [typed, setTyped] = useState(shouldReduce ? REPLY_TEXT.length : 0);
  const [posted, setPosted] = useState(shouldReduce ?? false);

  useEffect(() => {
    if (shouldReduce) return;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setTyped((prev) => {
          if (prev >= REPLY_TEXT.length) {
            clearInterval(interval);
            setTimeout(() => setPosted(true), 400);
            return prev;
          }
          return prev + 2;
        });
      }, 28);
    }, 900);
    return () => clearTimeout(start);
  }, [shouldReduce]);

  return (
    <div
      role="img"
      aria-label={`Review inbox showing a new 5-star review for ${REVIEW_MANAGEMENT_FICTIONAL_BUSINESS}, with an AI-drafted reply typed out and ready to approve and post`}
      className="relative mx-auto w-full max-w-sm select-none rounded-2xl border border-border/60 bg-card shadow-dramatic overflow-hidden"
    >
      <div className="flex items-center gap-2.5 px-4 py-3 bg-[#1B1520] text-white">
        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-xs font-bold">
          CV
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold truncate">{REVIEW_MANAGEMENT_FICTIONAL_BUSINESS}</p>
          <p className="text-[10px] text-white/60">Review inbox</p>
        </div>
      </div>

      <div className="p-4 space-y-3" aria-hidden="true">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border/60 bg-background p-3"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-foreground">{FICTIONAL_REVIEWERS[0]}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug">{REVIEW_TEXT}</p>
        </motion.div>

        <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3">
          <p className="text-[9px] font-bold uppercase tracking-wide text-primary mb-1.5">AI-drafted reply</p>
          <p className="text-[11px] text-foreground leading-snug min-h-[48px]">
            {REPLY_TEXT.slice(0, typed)}
            {!shouldReduce && typed < REPLY_TEXT.length && (
              <span className="inline-block w-1 h-3 bg-primary ml-0.5 align-middle animate-pulse" />
            )}
          </p>
        </div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0.4 }}
          animate={{ opacity: posted || shouldReduce ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold ${
            posted || shouldReduce ? "bg-primary text-white" : "bg-border text-muted-foreground"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Approve &amp; post
        </motion.div>
      </div>
    </div>
  );
}
