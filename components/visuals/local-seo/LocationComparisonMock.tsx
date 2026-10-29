"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Star } from "lucide-react";
import AppWindowFrame from "../AppWindowFrame";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";
import { LOCAL_SEO_OUTLETS, LOCAL_SEO_FICTIONAL_BUSINESS } from "../fixtures";

const OUTLET_DATA = [
  { area: LOCAL_SEO_OUTLETS[0], score: 82, rating: 4.7, trend: "up" as const },
  { area: LOCAL_SEO_OUTLETS[1], score: 58, rating: 4.3, trend: "down" as const },
  { area: LOCAL_SEO_OUTLETS[2], score: 71, rating: 4.5, trend: "up" as const },
];

/**
 * L8 — multi-location dashboard mock: one login, every outlet compared
 * side by side. Fictional multi-outlet business (see fixtures.ts), not a
 * real client.
 */
export default function LocationComparisonMock() {
  const reveal = useScrollReveal();
  return (
    <motion.div {...reveal} className="mx-auto w-full max-w-lg">
      <AppWindowFrame title={`${LOCAL_SEO_FICTIONAL_BUSINESS} — all outlets`}>
        <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground mb-2 text-center">
          Coverage score · rating · vs last month
        </p>
        <div
          role="img"
          aria-label="Dashboard comparing three outlets side by side, each with a coverage score, rating and trend arrow"
          className="grid grid-cols-3 gap-2.5"
        >
          {OUTLET_DATA.map((outlet) => (
            <div
              key={outlet.area}
              aria-hidden="true"
              className="rounded-xl border border-border/60 bg-background p-2.5 text-center"
            >
              <p className="text-[10px] font-semibold text-foreground mb-1.5 truncate">{outlet.area}</p>
              <p className="font-display font-bold text-foreground text-lg">{outlet.score}</p>
              <div className="flex items-center justify-center gap-1 text-[10px] font-semibold text-foreground mt-1">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                {outlet.rating}
              </div>
              <div
                className={`inline-flex items-center mt-1 ${
                  outlet.trend === "up" ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {outlet.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
              </div>
            </div>
          ))}
        </div>
      </AppWindowFrame>
      <IllustrativeCaption />
    </motion.div>
  );
}
