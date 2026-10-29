"use client";

import { motion } from "framer-motion";
import AppWindowFrame from "../AppWindowFrame";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";

const RATING_POINTS = [4.1, 4.2, 4.2, 4.4, 4.5, 4.6];
const THEMES = [
  { label: "Friendly staff", direction: "up" as const },
  { label: "Wait time", direction: "down" as const },
  { label: "Cleanliness", direction: "up" as const },
];

function ratingToY(rating: number) {
  // Maps a 3.8–4.8 rating range onto a 0–40 SVG y range, inverted (higher rating = lower y).
  const min = 3.8;
  const max = 4.8;
  const clamped = Math.max(min, Math.min(max, rating));
  return 40 - ((clamped - min) / (max - min)) * 40;
}

/**
 * R6 — #reputation-analytics. A rating-trend line, a response-rate ring,
 * and theme chips, inside the EpicReview app-window mock. Figures are
 * illustrative, not a real client's data.
 */
export default function ReputationAnalyticsMock() {
  const reveal = useScrollReveal();
  const points = RATING_POINTS.map((r, i) => `${(i / (RATING_POINTS.length - 1)) * 100},${ratingToY(r)}`).join(" ");

  return (
    <motion.div {...reveal} className="mx-auto w-full max-w-lg">
      <AppWindowFrame title="EpicReview — reputation analytics">
        <div
          role="img"
          aria-label="Reputation analytics showing a rating trend rising from 4.1 to 4.6 stars, a 91% response rate, and themes customers mention: friendly staff rising, wait time falling, cleanliness rising"
          aria-hidden="false"
        >
          <div className="grid grid-cols-2 gap-4 mb-4" aria-hidden="true">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground mb-1.5">
                Rating trend
              </p>
              <svg viewBox="0 0 100 40" className="w-full h-12" preserveAspectRatio="none">
                <polyline points={points} fill="none" stroke="var(--primary)" strokeWidth="2.5" />
              </svg>
              <p className="text-[10px] font-semibold text-foreground mt-1">4.1 → 4.6 stars</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border)" strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${0.91 * 2 * Math.PI * 15.5} ${2 * Math.PI * 15.5}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                  91%
                </div>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground mt-1.5">
                Response rate
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5" aria-hidden="true">
            {THEMES.map((theme) => (
              <span
                key={theme.label}
                className={`text-[9px] font-semibold rounded-full px-2.5 py-1 border ${
                  theme.direction === "up"
                    ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                    : "text-primary bg-primary/5 border-primary/20"
                }`}
              >
                {theme.label} {theme.direction === "up" ? "↑" : "↓"}
              </span>
            ))}
          </div>
        </div>
      </AppWindowFrame>
      <IllustrativeCaption />
    </motion.div>
  );
}
