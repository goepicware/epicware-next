"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const VIDEO_ID = "3tTdzspaS2E";

const COPY = {
  eyebrow: "RANKED #1 ON GOOGLE MAPS, CHATGPT & GEMINI — SG · MY · UAE · UK · US",
  headline: "See how businesses get found first",
  subline:
    "A 2-minute walkthrough of the exact system we use to rank clients #1 on Google Maps, ChatGPT, and Gemini — proven with real Singapore clients, built for SMBs across SG, MY, UAE, UK & US.",
  playLabel: "▶ See How It Works (2 min)",
  ariaLabel:
    "Play video: How Epicware ranks you on Google Maps, ChatGPT and Gemini",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const shouldReduce = useReducedMotion();

  function handlePlay() {
    setPlaying(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "video_play", {
        event_category: "engagement",
        event_label: "homepage_hero_video",
        video_id: VIDEO_ID,
      });
    }
  }

  const fadeUp = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-violet-600">
              {COPY.eyebrow}
            </span>
          </div>

          <h2
            className="font-bold text-gray-900 leading-[1.15] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            {COPY.headline}
          </h2>

          <p className="text-gray-500 text-[1rem] leading-relaxed max-w-xl mx-auto">
            {COPY.subline}
          </p>
        </motion.div>

        {/* Video block */}
        <motion.div
          {...(shouldReduce
            ? {}
            : {
                ...fadeUp,
                transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
              })}
          className="relative mx-auto max-w-4xl aspect-video rounded-2xl border border-gray-100 bg-gray-50 shadow-[0_6px_40px_rgba(0,0,0,0.08)] overflow-hidden"
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
              aria-label={COPY.ariaLabel}
              className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              {/* Poster thumbnail */}
              <Image
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Video thumbnail: How Epicware ranks you on Google Maps, ChatGPT and Gemini"
                fill
                className="object-cover"
                priority={false}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Play button + label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg ${
                    shouldReduce ? "" : "group-hover:scale-110 transition-transform duration-300"
                  }`}
                >
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-violet-600 translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span className="text-white text-sm lg:text-base font-semibold tracking-wide drop-shadow-md">
                  {COPY.playLabel}
                </span>
              </div>
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
