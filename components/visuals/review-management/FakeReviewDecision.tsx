"use client";

import { motion } from "framer-motion";
import { ShieldAlert, MessageCircleHeart, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

/**
 * R8 — fake-review decision visual, sitting near the "What if a review
 * is fake?" FAQ answer. Two outcomes based on whether the review breaks
 * platform policy — not a happy/unhappy customer fork, a policy-violation
 * fork, so this doesn't trigger the review-gating compliance rule.
 */
export default function FakeReviewDecision() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="A review that breaks platform rules goes to the review removal service; honest criticism gets a thoughtful reply, never reported"
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-hidden="true">
        <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 flex items-start gap-2.5">
          <ShieldAlert className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">Breaks platform rules</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              Review removal service <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 flex items-start gap-2.5">
          <MessageCircleHeart className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-foreground mb-1">Honest criticism</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              Thoughtful reply, never reported <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
