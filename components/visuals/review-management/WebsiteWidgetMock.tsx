"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ReviewCard from "../ReviewCard";
import { IllustrativeCaption } from "../SourceCaption";
import { useScrollReveal } from "../useScrollReveal";
import { FICTIONAL_REVIEWERS } from "../fixtures";

const WIDGET_REVIEWS = [
  { reviewer: FICTIONAL_REVIEWERS[0], rating: 5, text: "Always on time, great results." },
  { reviewer: FICTIONAL_REVIEWERS[1], rating: 5, text: "Friendly team, booked again." },
  { reviewer: FICTIONAL_REVIEWERS[2], rating: 4, text: "Great service, busy on weekends." },
];

/**
 * R7 — #review-widgets. A website section mock showing a few featured
 * reviews with a clear, honest link out to every review — not just the
 * good ones, labelled per the brief's selective-showcasing rule.
 */
export default function WebsiteWidgetMock() {
  const reveal = useScrollReveal();
  return (
    <motion.div
      {...reveal}
      role="img"
      aria-label="A website section titled Featured reviews, showing three review cards, with a clearly labelled link to see all reviews on Google"
      className="mx-auto w-full max-w-lg rounded-2xl border border-border/60 bg-card shadow-card-hover p-5"
    >
      <div className="flex items-center justify-between mb-3" aria-hidden="true">
        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          Featured reviews
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary">
          See all reviews on Google <ArrowRight className="w-3 h-3" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" aria-hidden="true">
        {WIDGET_REVIEWS.map((r) => (
          <ReviewCard key={r.reviewer} reviewer={r.reviewer} rating={r.rating} text={r.text} compact />
        ))}
      </div>
      <IllustrativeCaption />
    </motion.div>
  );
}
