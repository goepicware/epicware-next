"use client";

import { motion } from "framer-motion";
import GeoGrid from "./GeoGrid";
import { LANDING } from "@/lib/landing-constants";

const { signals } = LANDING;

const ICONS = ["🏢", "⭐", "📋", "📡"];

const ANNOTATED_DATA = [
  ["hot", "hot", "hot", "warm", "cold", "dead", "dead"],
  ["hot", "hot", "warm", "cold", "dead", "dead", "dead"],
  ["hot", "warm", "cold", "dead", "dead", "dead", "dead"],
  ["warm", "cold", "dead", "dead", "dead", "dead", "dead"],
  ["cold", "dead", "dead", "dead", "dead", "dead", "dead"],
  ["dead", "dead", "dead", "dead", "dead", "dead", "dead"],
  ["dead", "dead", "dead", "dead", "dead", "dead", "dead"],
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function MapPackSignals() {
  return (
    <section className="bg-[#0A0F1E] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-widest uppercase text-green-400 mb-3">
          {signals.sectionLabel}
        </motion.p>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-14 max-w-3xl">
          {signals.h2}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Signal cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {signals.items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.07)}
                className="rounded-2xl bg-[#111827] border border-white/10 p-6 flex flex-col gap-3 hover:border-green-500/40 transition-colors"
              >
                <span className="text-2xl">{ICONS[i]}</span>
                <h3 className="text-white font-bold text-base leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                <p className="text-xs text-amber-400 font-medium italic border-t border-white/5 pt-3">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Annotated geogrid */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-4">
            {/* <!-- REPLACE: Insert annotated EpicMap screenshot here --> */}
            <div className="relative p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl w-full max-w-sm mx-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-white/50 text-xs font-mono">EpicMap · Rank Visibility</span>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <GeoGrid
                    data={ANNOTATED_DATA as unknown as Parameters<typeof GeoGrid>[0]["data"]}
                    size="md"
                    showLegend={false}
                  />

                  {/* Annotation: winning zone */}
                  <div className="absolute top-1 left-1 bg-green-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    📍 You rank #1 here
                  </div>

                  {/* Annotation: dead zone */}
                  <div className="absolute bottom-3 right-1 bg-red-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    ⚠️ Invisible — competitor winning
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-3 mt-4 flex-wrap justify-center">
                {[["bg-green-500", "#1–3"], ["bg-yellow-400", "#4–7"], ["bg-orange-400", "#8–15"], ["bg-red-500", "16+"]].map(([cls, label]) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-sm ${cls}`} />
                    <span className="text-[10px] text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center max-w-xs italic">
              Your ranking changes block by block — this is what your grid actually looks like.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
