"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Geogrid } from "../Geogrid";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";

/**
 * L7 — #rank-tracking. Two small rank grids side by side, week 1 vs week
 * 12, with the green (top-3) area visibly larger by week 12 — the same
 * Geogrid primitive as the problem-section heatmap, different coverage.
 */
export default function RankTrackingProgress() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="Two rank grids side by side: week 1 shows a small green top-3 area, week 12 shows the green area has grown noticeably larger"
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div className="flex items-center justify-center gap-4" aria-hidden="true">
        <div className="text-center">
          <Geogrid size={5} coverage={0.18} cellClassName="w-6 h-6" />
          <p className="text-[10px] font-semibold text-muted-foreground mt-2">Week 1</p>
        </div>
        <ArrowRight className="w-4 h-4 text-primary/50 shrink-0" />
        <div className="text-center">
          <Geogrid size={5} coverage={0.45} cellClassName="w-6 h-6" />
          <p className="text-[10px] font-semibold text-foreground mt-2">Week 12</p>
        </div>
      </div>
      <IllustrativeCaption />
    </motion.div>
  );
}
