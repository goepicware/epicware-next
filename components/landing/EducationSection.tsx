"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LANDING } from "@/lib/landing-constants";

const { education } = LANDING;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function EducationSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Label */}
        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3">
          {education.sectionLabel}
        </motion.p>

        {/* H2 */}
        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight mb-12 max-w-3xl">
          {education.h2}
        </motion.h2>

        {/* Two-column split */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {/* SEO card */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-xl">🔗</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{education.seo.title}</h3>
            <p className="text-gray-500 leading-relaxed">{education.seo.sub}</p>
          </motion.div>

          {/* Local SEO card — highlighted */}
          <motion.div {...fadeUp(0.15)} className="rounded-2xl border-2 border-green-500 bg-green-50 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold tracking-wide">
              MAP PACK
            </div>
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <span className="text-xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">{education.localSeo.title}</h3>
            <p className="text-green-700/80 leading-relaxed">{education.localSeo.sub}</p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div {...fadeUp(0.2)} className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-5 py-4 font-semibold text-gray-500 w-1/3"></th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">SEO</th>
                <th className="text-left px-5 py-4 font-semibold text-green-700 bg-green-50/60">Local SEO</th>
              </tr>
            </thead>
            <tbody>
              {education.table.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/40"}`}>
                  <td className="px-5 py-4 font-semibold text-gray-700">{row.aspect}</td>
                  <td className="px-5 py-4 text-gray-500">{row.seo}</td>
                  <td className="px-5 py-4 text-green-800 font-medium bg-green-50/40">{row.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Callout box */}
        <motion.div {...fadeUp(0.25)} className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-7 py-6 mb-10">
          <p className="text-amber-900 font-medium text-base leading-relaxed italic">
            {education.callout}
          </p>
        </motion.div>

        {/* Soft CTA */}
        <motion.div {...fadeUp(0.3)} className="text-center">
          <Link
            href="#audit-form"
            className="inline-flex items-center text-green-700 font-semibold hover:text-green-600 transition-colors text-sm gap-1 group"
          >
            {education.softCta}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
