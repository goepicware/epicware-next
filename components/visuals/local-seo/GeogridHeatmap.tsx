"use client";

import { motion } from "framer-motion";
import { Store } from "lucide-react";
import { Geogrid } from "../Geogrid";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";

/**
 * L2 — problem visual. A 7×7 rank grid around a shop icon, green at the
 * centre fading to red at the edges, showing that rank is hyperlocal:
 * checking from the shop's own door looks nothing like checking two
 * streets away.
 */
export default function GeogridHeatmap() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="A 7 by 7 grid of search ranks around a shop: rank 1 at the shop's own door, worsening to rank 15+ just two streets away"
      className="mx-auto w-full max-w-sm rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div className="relative" aria-hidden="true">
        <Geogrid size={7} coverage={0.22} cellClassName="w-8 h-8" />
        <Store className="absolute w-4 h-4 text-foreground/70 pointer-events-none" style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }} />
      </div>
      <div className="flex items-center justify-between mt-3 text-[10px] font-semibold text-muted-foreground">
        <span>Your door — rank 1</span>
        <span>Two streets away — rank 15+</span>
      </div>
      <IllustrativeCaption />
    </motion.div>
  );
}
