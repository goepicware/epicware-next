"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GeoGrid from "./GeoGrid";
import { LANDING } from "@/lib/landing-constants";

const { hero } = LANDING;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {hero.eyebrow}
                </span>
              </motion.div>
            )}

            {/* H1 */}
            {mounted && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                {hero.h1.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? (
                      <span className="text-green-400">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </motion.h1>
            )}

            {/* Subheadline */}
            {mounted && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
              >
                {hero.subheadline}
              </motion.p>
            )}

            {/* Micro-proof */}
            {mounted && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-green-400/80 font-medium"
              >
                ✦ {hero.microProof}
              </motion.p>
            )}

            {/* CTA */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col gap-3 pt-2"
              >
                <Link
                  href="#audit-form"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-green-500 hover:bg-green-400 text-gray-950 font-bold text-base transition-all duration-200 shadow-[0_4px_24px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 w-fit"
                >
                  {hero.cta}
                </Link>
                <p className="text-sm text-gray-500">{hero.trustLine}</p>
              </motion.div>
            )}
          </div>

          {/* Right — GeoGrid visual */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              {/* <!-- REPLACE: Insert real EpicMap screenshot here --> */}
              <div className="relative p-6 rounded-2xl bg-[#111827] border border-white/10 shadow-2xl">
                {/* Map pin overlay */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">📍</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-white/60 text-xs font-mono">EpicMap · Live Rank Grid</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                </div>

                <GeoGrid size="md" showLegend={true} />
              </div>

              <p className="text-center text-gray-500 text-sm max-w-xs leading-relaxed italic">
                {hero.gridCaption}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* WhatsApp shortcut */}
      <Link
        href={hero.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow-lg hover:bg-[#20BD5A] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {hero.whatsapp.label}
      </Link>
    </section>
  );
}
