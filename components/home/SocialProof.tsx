"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    stars: 5,
    quote:
      "We went from 12 reviews to 87 in 3 months. Our clinic now shows up in the top 3 on Google Maps for every search in our area.",
    author: "Dr. Priya S.",
    business: "GP Clinic",
    district: "Tampines",
  },
  {
    stars: 5,
    quote:
      "Epicware removed a fake 1-star review that a competitor left on our profile. Paid $200, it was gone in 6 days. Worth every cent.",
    author: "Marcus T.",
    business: "F&B Group",
    district: "Jurong",
  },
  {
    stars: 5,
    quote:
      "Finally a platform that actually understands multi-outlet management. We run 6 salon branches from one dashboard now.",
    author: "Aisha R.",
    business: "Beauty Salon Group",
    district: "Singapore",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Social Proof
          </span>
          <h2 className="font-display text-foreground">
            Trusted by Singapore SMBs
          </h2>
        </motion.div>

        {/* Google Reviews embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          {/* <!-- PASTE GOOGLE REVIEWS EMBED CODE HERE --> */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 text-center min-h-[120px] flex items-center justify-center">
            <p className="text-muted-foreground text-sm italic">
              Google Reviews embed — paste embed code here
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-elevated p-8 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <span key={j} className="text-luxury-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="border-t border-border/40 pt-4">
                <div className="font-semibold text-foreground text-sm">— {review.author}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {review.business}, {review.district}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
