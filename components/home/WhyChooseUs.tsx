"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#fafaff] py-24 lg:py-32">

      {/* Soft ambient glow — barely visible, adds depth */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-violet-200/25 blur-[140px]" />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full bg-teal-200/20 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-violet-500">Platform</span>
          </div>

          <h2
            className="font-bold text-gray-950 leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)" }}
          >
            Built for the way local
            <br className="hidden sm:block" />
            {" "}businesses get discovered today.
          </h2>

          <p className="text-gray-500 text-[1.02rem] leading-relaxed max-w-2xl">
            Not another agency. Not another generic SEO tool. Epicware connects Google Maps, AI
            search visibility, reviews, and reputation into one local growth platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
