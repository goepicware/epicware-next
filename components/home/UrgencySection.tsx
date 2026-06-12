"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "94%", label: "of buyers check reviews before visiting" },
  { value: "1 star", label: "drop = up to 22% revenue swing" },
  { value: "4.0★", label: "the minimum rating customers consider" },
];

export default function UrgencySection() {
  return (
    <section className="py-16 lg:py-20 bg-foreground overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-background text-3xl lg:text-4xl mb-4">
            Right now, someone is Googling you.
          </h2>
          <p className="text-background/65 text-lg max-w-2xl mx-auto leading-relaxed">
            In the next twelve seconds, they decide whether to call, book, or walk away.
            One fake review. One slid star. That&apos;s the margin.
          </p>
        </motion.div>

        {/* Google search mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 text-gray-900">
            {/* Search bar */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 mb-4">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gray-400">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-sm text-gray-500">[your business type] near me</span>
            </div>
            {/* Result card — shows a competitor above you */}
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <p className="text-xs text-gray-400 mb-1">Your competitor</p>
                <p className="text-blue-700 font-medium text-sm">Competitor Business — Singapore</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs font-bold text-gray-800">4.8</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FBBC04">
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">(312 reviews)</span>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
                <p className="text-xs text-gray-400 mb-1">Your business</p>
                <p className="text-blue-700 font-medium text-sm opacity-70">Your Business Name — Singapore</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs font-bold text-gray-800">3.8</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i <= 4 ? "#FBBC04" : "#E5E7EB"}>
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">(18 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center p-6 rounded-2xl bg-background/5 border border-background/10">
              <div className="text-3xl font-display font-bold text-background mb-2">{stat.value}</div>
              <div className="text-sm text-background/55 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
