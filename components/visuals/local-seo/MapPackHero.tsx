"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { IllustrativeCaption } from "../SourceCaption";
import { LOCAL_SEO_FICTIONAL_BUSINESS } from "../fixtures";

/**
 * L1 — hero visual. Epicware's own ranked-list design (not a copy of
 * Google's Map Pack card layout or colours): 7 ranked slots with a line
 * marking where the Map Pack cuts off after #3. The fictional business
 * sits in slot #2 in its natural position (in-flow, like every other
 * row) and is translated downward to slot #7 on first paint, then
 * animates back up to y:0 on scroll into view — avoiding a second,
 * separately-positioned overlay row that has to be kept in sync with the
 * static list's own coordinate system.
 */
export default function MapPackHero() {
  const shouldReduce = useReducedMotion();
  const rowHeight = 34; // px, must match each row's h-[34px]
  const businessSlot = 2;
  const startSlot = 7;
  const dropOffset = (startSlot - businessSlot) * rowHeight;

  return (
    <div
      role="img"
      aria-label={`Local ranked results list showing ${LOCAL_SEO_FICTIONAL_BUSINESS} climbing from position 7 to position 2, inside the top-3 Map Pack`}
      className="relative mx-auto w-full max-w-xs rounded-2xl border border-border/60 bg-card shadow-card-hover p-4 select-none"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          Local ranked results
        </span>
      </div>

      <div className="relative" aria-hidden="true">
        {/* Map Pack zone background (top 3) */}
        <div
          className="absolute left-0 right-0 top-0 rounded-lg bg-primary/8 border border-primary/15"
          style={{ height: rowHeight * 3 }}
        />
        <span className="absolute -top-2 left-2 text-[8px] font-bold uppercase tracking-wide text-primary bg-card px-1.5">
          Shows in Maps
        </span>

        <div className="relative space-y-1 pt-0.5">
          {Array.from({ length: 7 }, (_, i) => i + 1).map((slot) =>
            slot === businessSlot ? (
              <motion.div
                key="business"
                className="h-[34px] flex items-center gap-2 px-2 rounded-lg bg-primary text-white shadow-card"
                initial={shouldReduce ? false : { y: dropOffset }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {businessSlot}
                </span>
                <span className="text-[11px] font-semibold truncate">{LOCAL_SEO_FICTIONAL_BUSINESS}</span>
              </motion.div>
            ) : (
              <div key={slot} className="h-[34px] flex items-center gap-2 px-2">
                <span className="w-5 h-5 rounded-full bg-border/70 text-[10px] font-bold text-muted-foreground flex items-center justify-center shrink-0">
                  {slot}
                </span>
                <span className="h-2 rounded-full bg-border/50 flex-1" />
              </div>
            )
          )}
        </div>
      </div>

      <IllustrativeCaption />
    </div>
  );
}
