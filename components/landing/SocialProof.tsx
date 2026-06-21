"use client";

import { motion } from "framer-motion";
import { LANDING } from "@/lib/landing-constants";

const { proof } = LANDING;

const TAG_COLORS: Record<string, string> = {
  "F&B / Restaurant": "bg-orange-100 text-orange-700",
  "AI Visibility": "bg-purple-100 text-purple-700",
  "Reputation Management": "bg-blue-100 text-blue-700",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3">
          {proof.sectionLabel}
        </motion.p>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight mb-12 max-w-2xl">
          {proof.h2}
        </motion.h2>

        {/* Result cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {proof.results.map((r, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.08)}
              className="rounded-2xl bg-white border border-gray-200 p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className={`self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${TAG_COLORS[r.tag] ?? "bg-gray-100 text-gray-600"}`}>
                {r.tag}
              </span>
              <p className="text-2xl font-extrabold text-gray-950 leading-tight">{r.stat}</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{r.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div {...fadeUp(0.35)} className="rounded-2xl bg-white border border-gray-200 p-8 mb-10 shadow-sm">
          {/* <!-- REPLACE: Insert real testimonial + photo here --> */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0 flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <p className="text-xl font-medium text-gray-800 leading-relaxed italic mb-4">
                {proof.testimonial.quote}
              </p>
              <p className="text-sm text-gray-500 font-medium">{proof.testimonial.name}</p>
            </div>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div {...fadeUp(0.4)} className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            {proof.trustBar}
          </p>
          {/* Placeholder logo row */}
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-28 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-[10px] font-medium"
              >
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
