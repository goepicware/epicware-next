"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SourceCaption } from "./SourceCaption";

/**
 * A percentage shown as a ring chart with a big number in the centre,
 * for a sourced statistic already in the page's copy (never an invented
 * figure). The ring sweeps in on scroll into view; with
 * prefers-reduced-motion it renders already-complete, no animation.
 */
export default function StatCallout({
  percent,
  label,
  sourceHref,
  sourceLabel,
}: {
  percent: number;
  label: string;
  sourceHref: string;
  sourceLabel: string;
}) {
  const shouldReduce = useReducedMotion();
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const target = circumference * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center text-center max-w-[220px]">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="w-28 h-28 -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--border)" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={shouldReduce ? false : { strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: target }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={shouldReduce ? { strokeDashoffset: target } : undefined}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-foreground text-2xl">{percent}%</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-snug mt-3">{label}</p>
      <SourceCaption href={sourceHref} label={sourceLabel} />
    </div>
  );
}
