"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Send, UserCheck, ArrowRight, ArrowDown } from "lucide-react";
import { useScrollReveal } from "../useScrollReveal";

const STEPS = [
  { icon: MessageSquare, label: "Review comes in" },
  { icon: Sparkles, label: "AI drafts a reply in your brand voice" },
  { icon: Send, label: "You approve and post" },
];

/**
 * R4 — #ai-review-response. A 3-step flow with a side branch off step 2:
 * a sensitive review routes to a human instead of auto-drafting.
 */
export default function AiReplyFlow() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="Flow: a review comes in, the AI drafts a reply in your brand voice, you approve and post. A sensitive review branches off to a human instead."
      className="mx-auto w-full max-w-xl rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div aria-hidden="true">
        <div className="flex items-center">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center text-center flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 shrink-0">
                  <step.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <p className="text-[11px] font-medium text-foreground leading-snug px-1">{step.label}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="w-4 h-4 text-primary/40 shrink-0 mb-6" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-3">
          <div className="flex flex-col items-center">
            <ArrowDown className="w-4 h-4 text-amber-500" />
            <div className="mt-1.5 flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5">
              <UserCheck className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[10px] font-semibold text-amber-800">
                Sensitive review → sent to a human first
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
