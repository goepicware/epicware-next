"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LeadStackForm from "./LeadStackForm";
import MockReviewCard from "./MockReviewCard";
import RemovalLog from "./RemovalLog";
import StickyRemoveBar from "./StickyRemoveBar";

// Scroll-triggered fade-up — same easing used across the site
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// Visually obvious VERIFY placeholder — yellow in production, not just a code comment.
// Replace each instance with final confirmed copy before launch.
function Verify({ text }: { text: string }) {
  return (
    <mark className="not-italic bg-yellow-300 text-yellow-900 text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border border-yellow-500/40 mx-0.5 inline-block">
      ⚠ VERIFY: {text}
    </mark>
  );
}

// ─── Minimal Header ──────────────────────────────────────────────────────────
function MinimalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-4 px-6 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/epicware-logo-wide.png"
            alt="Epicware"
            width={130}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <a
          href="#review-form"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
        >
          Get Free Assessment <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* Left — copy + form */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 hero-fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                Bad Review Removal · Singapore
              </span>
            </div>

            <h1
              className="font-display font-bold text-foreground leading-[1.08] mb-5 hero-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Got a bad Google review you don&apos;t deserve?
            </h1>

            <p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg hero-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              We assess the situation at no charge. If the review qualifies, we file
              through the official process and escalate as needed. $200 to start.
              Full refund if we can&apos;t remove it.
            </p>

            {/* Form card */}
            <div
              data-form-section
              className="bg-card border border-border/60 rounded-2xl p-6 shadow-card hero-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-sm font-semibold text-foreground mb-4">
                Tell us about the review — we&apos;ll take it from there.
              </p>
              <LeadStackForm id="review-form" />
            </div>
          </div>

          {/* Right — stacked review mockup */}
          <div className="hidden lg:block hero-fade-up" style={{ animationDelay: "0.25s" }}>
            <MockReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Trust Strip ───────────────────────────────────────────────────
function TrustStrip() {
  const signals = [
    "Singapore-based team",
    "Clinics · Dental · F&B · Services",
    "Free assessment · No obligation",
  ];

  return (
    <div className="border-y border-border/40 bg-muted/30 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-sm text-muted-foreground">
          {signals.map((s) => (
            <span key={s} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
              {s}
            </span>
          ))}
          {/* Ties to the documented case in RemovalLog below — not a
              site-wide estimate, just the number we can actually show. */}
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
            15+ reviews removed
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Section 3: Problem ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "It's costing you customers right now",
      body: "94% of consumers check reviews before visiting a business. A 1-star review sits at the top of your profile and pushes real customers to a competitor — every single day it stays up.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "A reply doesn't make it go away",
      body: "A polite response is good practice. But it keeps the review visible and doesn't change the star count. A 1-star is still a 1-star — no matter how reasonable your reply is.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.9 4.9 14.2 14.2" />
        </svg>
      ),
      title: "Google's removal form rejects most first attempts",
      body: "Most DIY requests are rejected — not because the review is valid, but because the wrong policy violation was cited. Knowing which exact clause applies, and how to word the request, is the difference between success and a flat rejection.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Why this matters
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            What you&apos;re up against
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.1 * i)}
              className="bg-card border border-border/60 rounded-2xl p-6 shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[1.05rem] leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Credibility ───────────────────────────────────────────────────
function CredibilitySection() {
  const removable = [
    "Fake reviews from accounts that never visited",
    "Reviews posted by ex-employees",
    "Hate speech or personal attacks",
    "Reviews about the wrong business entirely",
    "Spam or multiple identical posts",
    "Conflict of interest (reviewer has a financial stake)",
    "Unrelated disputes (e.g. landlord-tenant, not a customer interaction)",
  ];

  const notRemovable = [
    "A real customer's honest negative experience",
    'A subjective opinion (“too expensive for me”)',
    "A 1-star rating with no text attached",
    "Any review from someone who genuinely visited",
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Know before you proceed
          </span>
          <h2 className="font-display text-foreground">
            Which reviews can actually be removed?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Usually removable */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-green-50 border border-green-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-green-700" />
              </div>
              <h3 className="font-semibold text-green-900 text-[1rem]">Usually removable</h3>
            </div>
            <ul className="space-y-2.5">
              {removable.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-green-800">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Usually not removable */}
          <motion.div
            {...fadeUp(0.15)}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <X className="w-4 h-4 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-[1rem]">Usually not removable</h3>
            </div>
            <ul className="space-y-2.5">
              {notRemovable.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <X className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-center text-muted-foreground leading-relaxed italic text-[0.95rem]"
        >
          If yours falls in the second column, we&apos;ll tell you that for free —
          and show you the fastest way to outweigh it instead.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 5: How It Works ──────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Submit your details",
      body: (
        <>
          Fill in the form above with your contact details and a brief description
          of the review. You can paste the review text or the Google Maps URL if
          you have it. We&apos;ll assess it against Google&apos;s content policies at
          no charge.
        </>
      ),
    },
    {
      num: "2",
      title: "We file the removal request",
      body: (
        <>
          If the review qualifies, we submit a targeted removal request citing the
          specific policy violation — not a generic flag. We escalate through
          Google&apos;s support channels if the first attempt is rejected. Typical
          turnaround: <Verify text="turnaround time" />.
        </>
      ),
    },
    {
      num: "3",
      title: "We handle the removal",
      body: (
        <>
          You pay $200 upfront per review — we file and escalate through Google&apos;s
          process. If it doesn&apos;t come down, you get a full refund. No partial
          outcomes, no &ldquo;it&apos;s under review forever.&rdquo;{" "}
          <Verify text="confirm where in the funnel payment is actually collected — this page or a follow-up call/invoice" />
        </>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 section-gradient-2">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            The process
          </span>
          <h2 className="font-display text-foreground">How it works</h2>
        </motion.div>

        {/* Desktop: horizontal timeline | Mobile: vertical stack */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border/60" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(0.1 * i)} className="relative">
                <div className="flex md:flex-col items-start gap-4">
                  {/* Numbered circle */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-display font-bold text-lg shadow-button relative z-10">
                    {step.num}
                  </div>

                  {/* Vertical connector — mobile only */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-border/60 -translate-x-1/2" />
                  )}

                  <div className="md:mt-4 pb-8 md:pb-0 flex-1 min-w-0 w-full">
                    <h3 className="font-semibold text-foreground mb-2 text-[1.05rem]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Proof (Founder Note) ─────────────────────────────────────────
// ⚠ SWAP POINT: Replace this entire section with real client testimonials once collected.
// Mark each testimonial with the client's name, business type, and outcome (e.g. "removed in X days").
// Do not include star ratings or before/after numbers you cannot verify.
function ProofSection() {
  return (
    <section className="py-20 lg:py-28 section-gradient-3">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp()} className="bg-card border border-border/60 rounded-3xl p-8 lg:p-10 shadow-card">

          {/* Image slot */}
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-muted border-2 border-border/60 flex items-center justify-center shrink-0 overflow-hidden">
              {/* Replace with actual founder photo: <Image src="/assets/vignesh.jpg" alt="Vignesh, founder of Epicware" width={64} height={64} className="object-cover" /> */}
              <span className="text-xl font-bold text-muted-foreground">V</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">Vignesh</p>
              <p className="text-sm text-muted-foreground">Founder, Epicware</p>
            </div>
          </div>

          <blockquote className="text-[1.05rem] text-foreground leading-relaxed">
            <p className="mb-4">
              &ldquo;I started Epicware after watching a clinic owner in Tampines lose
              bookings for months over a review that was clearly posted by a competitor.
              She&apos;d tried flagging it herself twice — both times rejected. She didn&apos;t
              know which policy to cite, and Google&apos;s process doesn&apos;t explain itself.
            </p>
            <p>
              That&apos;s why this service exists. Not as a guarantee of removal — some
              reviews genuinely can&apos;t be removed, and we&apos;ll tell you that upfront.
              But for the ones that shouldn&apos;t be there, you shouldn&apos;t have to fight
              Google&apos;s system alone.&rdquo;
            </p>
          </blockquote>
        </motion.div>

        {/*
          ══════════════════════════════════════════════════
          TESTIMONIALS GO HERE — swap this comment for real
          client stories once you have them. Keep the card
          structure below and fill in real names + outcomes.
          ══════════════════════════════════════════════════
        */}
      </div>
    </section>
  );
}

// ─── Section 7: Pricing ───────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-lg mx-auto px-6 text-center">
        <motion.div {...fadeUp()}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Simple pricing
          </span>
          <h2 className="font-display text-foreground mb-10">
            What it costs
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="bg-card border border-border/60 rounded-3xl p-8 shadow-card text-left"
        >
          {[
            {
              label: "Assessment",
              value: "Free",
              note: "Always. We review the review, identify whether it qualifies for removal, and tell you our honest assessment.",
              highlight: false,
            },
            {
              label: "Removal",
              value: "$200",
              note: "Per review, paid upfront to start the removal process. Guaranteed: if we don't get it removed, you get a 100% refund.",
              highlight: true,
            },
            {
              label: "Reputation monitoring (optional)",
              value: <>from <Verify text="monitoring price" />/mo</>,
              note: "Ongoing alerts if the review reappears or new violations are posted.",
              highlight: false,
            },
          ].map(({ label, value, note, highlight }, i) => (
            <div
              key={label}
              className={`py-5 ${i < 2 ? "border-b border-border/50" : ""}`}
            >
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="font-semibold text-foreground text-sm">{label}</span>
                <span
                  className={`font-display font-bold text-xl ${highlight ? "text-primary" : "text-foreground"}`}
                >
                  {value}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
            </div>
          ))}

          <a
            href="#review-form"
            className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-foreground text-background font-semibold text-sm mt-6 hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.01]"
          >
            Start with a Free Assessment <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-center text-xs text-muted-foreground mt-4">
            No lock-in contracts. No setup fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8: Risk Reversal ─────────────────────────────────────────────────
function RiskReversalSection() {
  return (
    <section className="py-14 bg-primary/5 border-y border-primary/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fadeUp()}>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Our commitment
          </p>
          <p className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-[1.2]">
            Pay $200 to start. If we can&apos;t remove it, you get every cent back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 9: FAQ ───────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is it legal to request a Google review removal?",
    a: "Yes. We only pursue removals through Google's official policy channels — specifically by flagging reviews that violate Google's content policies: fake reviews, spam, conflicts of interest, off-topic content, or hate speech. There is no hacking, no suppression, and no undisclosed workarounds. If a review doesn't violate policy, we tell you upfront and don't file a request.",
  },
  {
    q: "Do I pay only if it works?",
    a: "No — you pay $200 upfront so we can start the removal process immediately. If we're unsuccessful, you're refunded in full. This lets us move fast instead of waiting to get paid.",
  },
  {
    q: "How long does the removal process take?",
    a: (
      <>
        Timelines vary depending on the review type and whether escalation is required.
        Typical turnaround: <Verify text="turnaround time" />. We keep you updated at
        each stage rather than leaving you in the dark.
      </>
    ),
  },
  {
    q: "What if the review is from a genuine customer who had a bad experience?",
    a: "We'll tell you that in the assessment — free of charge. A genuine negative experience from a real customer generally can't be removed through policy-based channels. If that's the case, we'll outline the most effective way to address it: a well-worded response, a review velocity strategy to dilute its impact, or both.",
  },
  {
    q: "Will the reviewer be notified that I flagged their review?",
    a: "No. Google's review flagging and removal process is not visible to the reviewer. They are not notified when a flag is submitted or when a review is reviewed by Google. There is no counter-notification system for reviewers.",
  },
  {
    q: "What if new bad reviews appear after one is removed?",
    a: "Removal is a one-time action on a specific review. If a pattern of targeted fake reviews emerges — which does happen to some businesses — we can discuss an ongoing monitoring arrangement. Preventatively, the most durable protection is building genuine review volume so a single negative review carries less weight.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "Primarily clinics, dental practices, aesthetics and wellness centres, F&B restaurants and cafés, car workshops, and retail businesses in Singapore. The service works for any Singapore-registered business with a Google Business Profile — the review must be on Google Maps to qualify.",
  },
  {
    q: "Can you help with multiple bad reviews at once?",
    a: "Yes. Each review is assessed individually because different reviews may violate different policies (or none at all). We can assess several at once, and if multiple qualify for removal, we handle them together. Pricing applies per review successfully removed.",
  },
];

function FAQSection() {
  return (
    <section className="py-20 lg:py-28 section-gradient-2">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="font-display text-foreground">Common questions</h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="bg-card border border-border/50 rounded-3xl px-6 lg:px-10 py-4 shadow-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 text-[0.95rem] hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 10: Final CTA ────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Take the first step
          </span>
          <h2 className="font-display text-foreground mb-4">
            Let&apos;s look at your review together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The assessment is free. No commitment to proceed. We&apos;ll tell you
            exactly what we think can be done and why.
          </p>
        </motion.div>

        <motion.div
          data-form-section
          {...fadeUp(0.1)}
          className="bg-card border border-border/60 rounded-2xl p-6 lg:p-8 shadow-card"
        >
          <LeadStackForm />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Minimal Footer ───────────────────────────────────────────────────────────
function MinimalFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/epicware-logo-wide.png"
            alt="Epicware"
            width={110}
            height={30}
            className="h-7 w-auto opacity-70"
          />
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted-foreground text-center">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 shrink-0" />
            Singapore
          </span>
          <a href="mailto:hello@epicware.ai" className="hover:text-foreground transition-colors">
            hello@epicware.ai
          </a>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function RemoveReviewPage() {
  return (
    <>
      <MinimalHeader />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <CredibilitySection />
      <HowItWorksSection />
      <ProofSection />
      <RemovalLog />
      <PricingSection />
      <RiskReversalSection />
      <FAQSection />
      <FinalCTASection />
      <MinimalFooter />
      <StickyRemoveBar />
    </>
  );
}
