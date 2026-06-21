"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANDING } from "@/lib/landing-constants";

const { faq } = LANDING;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function FAQ() {
  // Open all by default
  const [open, setOpen] = useState<number[]>([0, 1, 2]);

  function toggle(i: number) {
    setOpen((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  }

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">

        <motion.h2 {...fadeUp(0)} className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight mb-10 text-center">
          {faq.h2}
        </motion.h2>

        <div className="flex flex-col gap-3">
          {faq.items.map((item, i) => (
            <motion.div key={i} {...fadeUp(0.1 + i * 0.06)}>
              <div
                className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                  aria-expanded={open.includes(i)}
                >
                  <span className="font-bold text-gray-900 text-base">{item.q}</span>
                  <span className={`text-gray-400 shrink-0 text-xl transition-transform duration-200 ${open.includes(i) ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open.includes(i) && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
