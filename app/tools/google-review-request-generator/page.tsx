import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Heart, CheckCircle2, Users, ArrowRight } from "lucide-react";
import ReviewRequestGenerator from "@/components/tools/ReviewRequestGenerator";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Free Google Review Request Message Generator",
  description:
    "Create effective WhatsApp, SMS, and email messages to ask customers for Google reviews without sounding awkward.",
  alternates: { canonical: "https://www.epicware.ai/tools/google-review-request-generator" },
  openGraph: {
    title: "Free Google Review Request Message Generator | Epicware",
    description: "Create effective WhatsApp, SMS, and email messages to ask customers for Google reviews.",
    url: "https://www.epicware.ai/tools/google-review-request-generator",
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Google Review Request Message Generator",
  description: "Create effective WhatsApp, SMS, and email messages to ask customers for Google reviews.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "Epicware", url: "https://www.epicware.ai" },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Google Review Request Message Generator?",
      acceptedAnswer: { "@type": "Answer", text: "This is a free tool that helps business owners create effective messages to ask customers for Google reviews. It generates ready-to-use messages for WhatsApp, SMS, or email that sound natural and get results." },
    },
    {
      "@type": "Question",
      name: "Is this tool free to use?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, this tool is completely free. No sign-up or payment is required. You can generate unlimited review request messages." },
    },
    {
      "@type": "Question",
      name: "Who should use this tool?",
      acceptedAnswer: { "@type": "Answer", text: "This tool is ideal for local business owners including restaurants, salons, spas, clinics, retail stores, and service providers who want to ask customers for reviews without sounding awkward or pushy." },
    },
  ],
};

const tips = [
  { icon: Clock, title: "Time It Right", desc: "Ask right after a positive experience — when satisfaction is highest and memory is fresh." },
  { icon: Heart, title: "Make It Personal", desc: "Use the customer's name and reference their specific experience for higher response rates." },
  { icon: CheckCircle2, title: "Keep It Simple", desc: "Include a direct link to your Google review page. Remove friction to maximise conversions." },
  { icon: Users, title: "Show Appreciation", desc: "Thank customers for their business first. People are more likely to help those who appreciate them." },
];

export default function GoogleReviewRequestGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60 text-sm font-semibold text-foreground">
              Free Tool
            </span>
          </div>
          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
              Google Review Request Message Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask customers for reviews the right way — without sounding awkward.
            </p>
          </div>
          <ReviewRequestGenerator />
        </div>
      </section>

      {/* About */}
      <section className="section-gradient-2 py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6">About This Tool</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is the Google Review Request Message Generator?</h3>
                <p>This is a free tool that creates professional messages to ask customers for Google reviews. It generates ready-to-use text for WhatsApp, SMS, or email that sounds natural and encourages customers to leave feedback.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Who is this tool for?</h3>
                <p>This tool is designed for local business owners including restaurants, cafes, salons, spas, clinics, retail stores, and service providers who want to increase their Google review count.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What problem does this solve?</h3>
                <p>Many business owners don't know how to ask for reviews without sounding awkward or pushy. This tool generates polite, effective messages that customers actually respond to, helping businesses build their online reputation.</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Looking for more <Link href="/tools" className="text-primary hover:underline">free Google review tools</Link>? Check out our complete collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
            How to Ask Customers for Google Reviews
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {tips.map((t) => (
              <div key={t.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <t.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-card border border-border/50 p-8 lg:p-10 text-center">
            <p className="text-xl text-foreground font-medium mb-3">
              Want review requests sent automatically after every visit or payment?
            </p>
            <p className="text-muted-foreground mb-8">Epicware automates this for you.</p>
            <Link
              href="/products/epicreview"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-all duration-300 group"
            >
              Explore Epicware Review Automation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
