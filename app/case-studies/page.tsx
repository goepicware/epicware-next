import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Real Local SEO & Reputation Results | Epicware",
  description:
    "See how Singapore SMBs across F&B, healthcare, and beauty grew their Google Maps rank, reviews, and AI search visibility with Epicware.",
  alternates: { canonical: "https://www.epicware.ai/case-studies" },
};

const CASE_STUDIES = [
  {
    href: "/case-studies/hair-salon-seo-singapore",
    badge: "Hair & Beauty · Singapore · 2 Mall Outlets",
    title: "Rankings Don't Fill Chairs. Bookings Do.",
    result: "+283% website users, #1 rankings, 5x engagement",
  },
  {
    href: "/case-studies/aesthetic-clinic-seo-singapore",
    badge: "Medical Aesthetics · Singapore · 2 Outlets",
    title: "Top 3 in 60 Days: How a Singapore Medical Aesthetic Clinic Won Orchard and Hougang",
    result: "#1 Map Pack, #1 ChatGPT recommendation, +25% enquiries",
  },
  {
    href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
    badge: "F&B · Singapore · 5 Outlets",
    title: "How a 5-Outlet Singapore Restaurant Chain Became the Answer on Google Maps, Search and AI Overviews",
    result: "+24.1% organic traffic, #1 rankings, AI Overview citations",
  },
  {
    href: "/case-studies/restaurant-multi-outlet-growth-singapore",
    badge: "F&B · Singapore",
    title: "How a Singapore Restaurant Group Grew to 200+ Reviews Per Outlet",
    result: "45 → 200+ reviews per outlet in 90 days",
  },
  {
    href: "/case-studies/clinic-review-growth-singapore",
    badge: "Healthcare · Singapore",
    title: "How a Singapore Clinic Network Raised Their Google Rating to 4.7",
    result: "Fake reviews removed, rating raised to 4.7",
  },
  {
    href: "/case-studies/salon-whatsapp-automation",
    badge: "Hair Salons · Singapore",
    title: "How a Singapore Salon Chain Grew to 150+ Reviews and Ranked in the Top 3",
    result: "150+ reviews per outlet, top 3 Maps rank",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">Case Studies</span>
        <h1 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-4 max-w-2xl">
          Real Singapore SMBs. Real Local SEO Results.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-14">
          From restaurant chains to clinics to salons — see exactly what Epicware did, and the numbers it produced.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-card transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-wide text-primary">{c.badge}</span>
              <h2 className="font-semibold text-foreground text-lg leading-snug flex-1">{c.title}</h2>
              <p className="text-sm text-muted-foreground">{c.result}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Read the case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
