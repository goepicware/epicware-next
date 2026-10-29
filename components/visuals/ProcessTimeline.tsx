"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "./useScrollReveal";

export interface ProcessTimelineStep {
  title: string;
  description: string;
}

/**
 * Connected step timeline for a service's "Our Process" section —
 * replaces the plain unconnected card grid with a line running through
 * numbered steps, so the process reads as one continuous path instead of
 * four separate cards. Content-agnostic (title/description only, no
 * hardcoded copy) so it's reusable across every /services/{service} page,
 * not just local-seo and review-management. Reveals step by step on
 * scroll into view; renders in its final state immediately when the
 * visitor has prefers-reduced-motion set.
 */
export default function ProcessTimeline({ steps }: { steps: ProcessTimelineStep[] }) {
  return (
    <div role="img" aria-label={`Process timeline: ${steps.map((s) => s.title).join(" → ")}`}>
      {/* Desktop: horizontal line through numbered steps */}
      <div className="hidden lg:flex items-start">
        {steps.map((step, i) => (
          <StepDesktop key={step.title} step={step} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>

      {/* Mobile/tablet: vertical line down the left side */}
      <div className="lg:hidden flex flex-col">
        {steps.map((step, i) => (
          <StepMobile key={step.title} step={step} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>
    </div>
  );
}

function StepDesktop({ step, index, isLast }: { step: ProcessTimelineStep; index: number; isLast: boolean }) {
  const reveal = useScrollReveal(index * 0.1);
  return (
    <>
      <motion.div {...reveal} className="flex-1 min-w-0 flex flex-col items-center text-center px-2">
        <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mb-4 shrink-0">
          {index + 1}
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-1.5">{step.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
      </motion.div>
      {!isLast && (
        <div className="flex-[0_0_32px] h-px bg-border mt-5 self-start" aria-hidden="true" />
      )}
    </>
  );
}

function StepMobile({ step, index, isLast }: { step: ProcessTimelineStep; index: number; isLast: boolean }) {
  const reveal = useScrollReveal(index * 0.08);
  return (
    <motion.div {...reveal} className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
          {index + 1}
        </div>
        {!isLast && <div className="w-px flex-1 bg-border my-1" aria-hidden="true" />}
      </div>
      <div className={isLast ? "pb-0" : "pb-6"}>
        <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-1.5">{step.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}
