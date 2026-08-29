"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./shared";

// Real Epicware audit report screenshot (user-confirmed test run, not a real
// client — safe to use unredacted) shown inside a scrollable browser-frame
// preview, matching the approved mockup's .report-frame / .report-chrome /
// .report-scroll / .scroll-fade / .scroll-hint pattern. Native image
// dimensions (930x3225) preserved and scrolled in place, not cropped.
export default function SampleReport() {
  return (
    <motion.div {...fadeUp(0.2)}>
      <div className="bg-card border border-border/60 rounded-2xl shadow-elegant overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/40">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-background border border-border/50 rounded-md px-3 py-1 text-[11px] text-muted-foreground text-center truncate">
            epicware.ai/ai-search-visibility-singapore
          </div>
        </div>

        <div className="relative">
          <div className="h-[600px] overflow-y-auto">
            <Image
              src="/assets/ai-visibility/sample-report-real.jpg"
              alt="A real Epicware AI search visibility audit report — score, ranking heatmaps, and AI visibility results"
              width={930}
              height={3225}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">↓ Scroll to explore the full report</p>
    </motion.div>
  );
}
