import type { Metadata } from "next";
import Link from "next/link";
import { Store, Stethoscope, Scissors, GraduationCap, Building2, BookOpen, ArrowRight } from "lucide-react";
import BookDemoForm from "@/components/book-demo/BookDemoForm";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a free strategy call with Epicware. We'll assess your current growth stage and recommend the most suitable system for your business.",
  alternates: { canonical: "https://www.epicware.ai/book-demo" },
  openGraph: {
    title: "Book a Free Strategy Call | Epicware",
    description: "We'll assess your current growth stage and recommend the most suitable system for your business.",
    url: "https://www.epicware.ai/book-demo",
  },
};

const industries = [
  { icon: Store, label: "Restaurant Operators" },
  { icon: Stethoscope, label: "Clinics & Healthcare" },
  { icon: Scissors, label: "Salons & Wellness" },
  { icon: GraduationCap, label: "Tuition & Education" },
  { icon: Building2, label: "Multi-Outlet Brands" },
];

const steps = [
  "We review your submission and business context",
  "We schedule a strategy call at a time that works for you",
  "We assess your visibility, reputation, and revenue structure",
  "We recommend a system roadmap tailored to your business",
];

export default function BookDemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-display font-bold text-foreground mb-6 leading-tight">
            Book a Strategy Call
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We'll assess your current growth stage and recommend the most suitable system for your business.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
            Who This Is For
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
            What Happens After You Submit
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-foreground text-base leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3">
              Strategy Call Form
            </h2>
            <p className="text-muted-foreground">This helps us prepare properly for your call.</p>
          </div>
          <div className="rounded-3xl bg-card/90 border border-border/50 p-8 lg:p-10 shadow-elegant">
            <BookDemoForm />
          </div>
        </div>
      </section>

      {/* Not ready */}
      <section className="section-gradient-3 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-5">
            Not Ready for a Call?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Explore at your own pace.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border border-border/60 text-foreground font-semibold text-base hover:bg-muted/50 transition-all duration-300"
            >
              Explore Pricing
            </Link>
            <Link
              href="/resources/guides/local-business-playbook-2026"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border border-border/60 text-foreground font-semibold text-base hover:bg-muted/50 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              Read the Growth Guide
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
