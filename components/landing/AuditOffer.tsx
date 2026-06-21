"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LANDING } from "@/lib/landing-constants";

const { offer } = LANDING;

const ICONS = ["🗺️", "🏥", "🔍", "📞"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function AuditOffer() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">

        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3">
          {offer.sectionLabel}
        </motion.p>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight mb-12 max-w-3xl">
          {offer.h2}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Offer box */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl border-2 border-green-500 bg-green-50 p-8 relative">
            {/* Free badge */}
            <div className="absolute -top-4 left-8">
              <span className="px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-extrabold tracking-widest uppercase shadow-md">
                {offer.badge} — No Credit Card
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6 pt-2">{offer.title}</h3>

            <div className="flex flex-col gap-5">
              {offer.deliverables.map((d, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-green-200 flex items-center justify-center text-xl shrink-0 shadow-sm">
                    {ICONS[i]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{d.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#audit-form"
              className="mt-8 flex items-center justify-center h-13 px-6 rounded-full bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Claim My Free Audit →
            </Link>
          </motion.div>

          {/* Audit report mockup + urgency */}
          <div className="flex flex-col gap-6">
            {/* <!-- REPLACE: Insert sample audit screenshot here --> */}
            <motion.div {...fadeUp(0.2)} className="w-full h-72 bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col gap-3 p-6 blur-sm select-none pointer-events-none">
                <div className="h-6 bg-gray-300 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`h-8 rounded ${i % 3 === 0 ? "bg-green-200" : i % 3 === 1 ? "bg-yellow-200" : "bg-red-200"}`} />
                  ))}
                </div>
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
              <div className="relative z-10 text-center">
                <p className="text-gray-500 text-sm font-medium">📊 Your audit will look like this.</p>
              </div>
            </motion.div>

            {/* Urgency */}
            <motion.div {...fadeUp(0.25)} className="rounded-xl bg-amber-50 border border-amber-200 px-6 py-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg mt-0.5">⏳</span>
                <p className="text-amber-800 text-sm font-medium leading-relaxed">{offer.urgency}</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
