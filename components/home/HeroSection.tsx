"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9FF] pt-20 pb-20">

      {/* ── Atmosphere gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Top-right lavender bloom */}
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-violet-200/40 blur-[140px]" />
        {/* Bottom-left teal glow */}
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-teal-200/30 blur-[120px]" />
        {/* Centre ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-100/25 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">

          {/* ═══════════════════════════════
              LEFT — Headline + CTAs
          ═══════════════════════════════ */}
          <div className="order-2 lg:order-1">

            {/* Pill label */}
            <motion.div {...fadeUp(0)} className="mb-7">
              <span className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-violet-600 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
                Local SEO &amp; Reputation Platform · Singapore
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.07)}
              className="font-bold text-gray-950 leading-[1.08] tracking-[-0.035em] mb-6"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)" }}
            >
              Singapore&apos;s&nbsp;#1
              <br />
              Local SEO&nbsp;&amp;
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #7C3AED 0%, #A855F7 40%, #14B8A6 100%)",
                }}
              >
                Reputation Platform
              </span>
              <br />
              for&nbsp;SMBs
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.13)}
              className="text-[1.075rem] leading-[1.75] text-gray-500 mb-9 max-w-[460px]"
            >
              Rank higher on Google Maps, generate more reviews, and remove bad
              ones — all from one dashboard built for Singapore businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.19)} className="flex flex-wrap gap-3 mb-10">
              {/* Primary */}
              <Link
                href="/book-demo#form"
                className="group inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-gray-950 text-white text-[0.9rem] font-semibold hover:bg-gray-800 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.26)] hover:-translate-y-px"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              {/* Secondary */}
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border-[1.5px] border-[#185FA5] text-[#185FA5] text-[0.9rem] font-semibold bg-white hover:bg-[#185FA5] hover:text-white transition-all duration-200"
              >
                Get Your Free GBP Audit →
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center gap-7 flex-wrap"
            >
              <div>
                <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">
                  50+
                </p>
                <p className="text-[0.75rem] text-gray-400 font-medium mt-1.5 leading-none">
                  outlets managed
                </p>
              </div>

              <div className="w-px h-9 bg-gray-200 shrink-0" />

              <div>
                <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">
                  100+
                </p>
                <p className="text-[0.75rem] text-gray-400 font-medium mt-1.5 leading-none">
                  reputation issues handled
                </p>
              </div>

              <div className="w-px h-9 bg-gray-200 shrink-0" />

              <div>
                <p className="text-[0.75rem] text-gray-400 font-medium leading-none mb-1">
                  Built for
                </p>
                <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">
                  SMBs
                </p>
              </div>
            </motion.div>
          </div>

          {/* ═══════════════════════════════
              RIGHT — Hero image
          ═══════════════════════════════ */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Layered glow halo */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 via-purple-300/15 to-teal-400/20 blur-[48px] pointer-events-none" />
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-violet-200/30 to-teal-200/20 blur-[16px] pointer-events-none" />

            {/* Card */}
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_24px_80px_-8px_rgba(80,40,180,0.18),0_8px_32px_-4px_rgba(0,0,0,0.10)] ring-1 ring-violet-100">
              <Image
                src="/assets/HeroBanner.png"
                alt="Singapore SMB owner growing their business with Epicware"
                width={1672}
                height={941}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
