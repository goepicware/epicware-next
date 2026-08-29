"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

// Same video already in use on the homepage under "See How It Works"
// (components/home/VideoSection.tsx) — same video ID, same click-to-play
// convention (no autoplay), same gtag video_play tracking pattern. No
// custom poster frame exists for it elsewhere, so this reuses the standard
// YouTube maxresdefault thumbnail, same as the homepage does.
const VIDEO_ID = "3tTdzspaS2E";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ExplainerVideo() {
  const [playing, setPlaying] = useState(false);
  const shouldReduce = useReducedMotion();

  function handlePlay() {
    setPlaying(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", {
        event_category: "engagement",
        event_label: "ai_visibility_shift_video",
        video_id: VIDEO_ID,
      });
    }
  }

  return (
    <motion.div
      {...fadeUp(0.15)}
      className="relative mx-auto max-w-[860px] aspect-video rounded-2xl border border-white/15 bg-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden mt-12"
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1`}
          title="How Epicware ranks your business on Google Maps, ChatGPT and Gemini"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video: How Epicware ranks you on Google Maps, ChatGPT and Gemini"
          className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Image
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Video thumbnail: How Epicware ranks you on Google Maps, ChatGPT and Gemini"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg ${
                shouldReduce ? "" : "group-hover:scale-110 transition-transform duration-300"
              }`}
            >
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-luxury-gold translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-sm lg:text-base font-semibold tracking-wide drop-shadow-md">
              ▶ See How It Works
            </span>
          </div>
        </button>
      )}
    </motion.div>
  );
}

export default function ShiftBand() {
  const { shift } = AI_VISIBILITY;
  return (
    <section className="relative bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.span {...fadeUp()} className="block text-xs font-bold uppercase tracking-widest text-luxury-gold mb-5">
          Why this matters now
        </motion.span>
        <motion.p {...fadeUp(0.05)} className="font-display font-semibold text-white text-[clamp(1.5rem,3.2vw,2rem)] leading-snug max-w-3xl mx-auto">
          {shift.quoteLead} <span className="text-luxury-gold">{shift.quoteAccent}</span>
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="text-white/60 text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-6">
          {shift.body}
        </motion.p>

        <ExplainerVideo />
      </div>
    </section>
  );
}
