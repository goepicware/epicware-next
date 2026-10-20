import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: { absolute: "About Epicware | AI-Powered Growth Agency" },
  description:
    "Meet Epicware, a Singapore digital marketing agency with its own AI software. Led by Vignesh Wadarajan, our team runs your SEO, local SEO and reviews.",
  alternates: { canonical: "https://www.epicware.ai/about" },
  openGraph: {
    title: "About Epicware | AI-Powered Growth Agency",
    description:
      "Meet Epicware, a Singapore digital marketing agency with its own AI software. Led by Vignesh Wadarajan, our team runs your SEO, local SEO and reviews.",
    url: "https://www.epicware.ai/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.epicware.ai/about#webpage",
      url: "https://www.epicware.ai/about",
      name: "About Epicware | AI-Powered Digital Marketing Agency",
      description:
        "Meet Epicware, a Singapore digital marketing agency with its own AI software. Led by Vignesh Wadarajan, our team runs your SEO, local SEO and reviews.",
      about: { "@id": "https://www.epicware.ai/#organization" },
      mainEntity: { "@id": "https://www.epicware.ai/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.epicware.ai/#organization",
      name: "Epicware",
      legalName: "Epicware Pte Ltd",
      url: "https://www.epicware.ai/",
      description:
        "Epicware is a digital marketing agency in Singapore with its own AI-powered software for SEO, local SEO, AI search and reputation management.",
      email: "hello@epicware.ai",
      telephone: "+65 8444 6582",
      address: {
        "@type": "PostalAddress",
        streetAddress: "78 Shenton Way",
        addressLocality: "Singapore",
        postalCode: "079120",
        addressCountry: "SG",
      },
      areaServed: { "@type": "Country", name: "Singapore" },
      founder: { "@id": "https://www.epicware.ai/about#vignesh" },
      sameAs: ["https://maps.google.com/?cid=14493849264909617169"],
    },
    {
      "@type": "Person",
      "@id": "https://www.epicware.ai/about#vignesh",
      name: "Vignesh Wadarajan",
      jobTitle: "Founder & CEO",
      worksFor: { "@id": "https://www.epicware.ai/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.epicware.ai/about#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are you a software tool (SaaS) or a digital marketing agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are a full-service digital marketing agency powered by our own proprietary AI software. Unlike pure SaaS platforms where you have to do all the work yourself, our team of marketing experts manages and executes your campaigns using our custom-built AI engine to deliver faster, data-driven results.",
          },
        },
        {
          "@type": "Question",
          name: "Who leads Epicware?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Epicware is led by Founder and CEO Vignesh Wadarajan, the former CEO of NinjaOS, the F&B technology company that processed over $120M in gross merchandise value.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Epicware based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Epicware is based at 78 Shenton Way, Singapore. We work with businesses across the island, from single shops and clinics to multi-outlet restaurant chains.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to use Epicware's software myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Our team runs the software for you and reports the results. You can still log in to your dashboard any time to see your rankings, reviews and posts.",
          },
        },
      ],
    },
  ],
};

const howWeWork = [
  {
    title: "Our AI software",
    description: "Real-time review alerts, district-by-district rank tracking, and AI-drafted replies and posts.",
  },
  {
    title: "Our specialists",
    description: "Strategy, content, approvals, and the calls software shouldn't make on its own.",
  },
  {
    title: "You",
    description: "One team to talk to, clear reports, and no software to learn.",
  },
];

const numbers = [
  { figure: "10+ years", label: "Industry experience across our team" },
  { figure: "50+", label: "Singapore brands and enterprises served" },
  { figure: "100+", label: "Outlets managed on Google" },
  { figure: "50+", label: "Business reputations restored" },
  { figure: "4", label: "AI products built in-house" },
];

const whatWeDo = [
  {
    title: "Website SEO",
    description: "SEO services that help your website rank on Google and get quoted in AI answers.",
    href: "/seo-agency-singapore",
  },
  {
    title: "Local SEO",
    description: 'Local SEO services that help you show up in Google Maps and "near me" searches, starting with your Google Business Profile.',
    href: "/local-seo-singapore",
  },
  {
    title: "AI search",
    description: "AI search optimisation so ChatGPT, Gemini and Google AI Overviews can find and describe your business correctly.",
    href: "/ai-search-visibility-singapore",
  },
  {
    title: "Reputation",
    description: "Online reputation management: more Google reviews, a reply to every review, and help with fake or unfair ones.",
    href: "/reputation-management-singapore",
  },
];

const faqGroups = [
  {
    label: null,
    items: [
      {
        q: "Are you a software tool (SaaS) or a digital marketing agency?",
        a: "We are a full-service digital marketing agency powered by our own proprietary AI software. Unlike pure SaaS platforms where you have to do all the work yourself, our team of marketing experts manages and executes your campaigns using our custom-built AI engine to deliver faster, data-driven results.",
      },
      {
        q: "Who leads Epicware?",
        a: "Epicware is led by Founder and CEO Vignesh Wadarajan, the former CEO of NinjaOS, the F&B technology company that processed over $120M in gross merchandise value.",
      },
      {
        q: "Where is Epicware based?",
        a: "Epicware is based at 78 Shenton Way, Singapore. We work with businesses across the island, from single shops and clinics to multi-outlet restaurant chains.",
      },
      {
        q: "Do I have to use Epicware's software myself?",
        a: "No. Our team runs the software for you and reports the results. You can still log in to your dashboard any time to see your rankings, reviews and posts.",
      },
      {
        q: "Do I need to learn how to use your AI software?",
        a: "Not at all! Our team handles everything for you — from strategy and campaign setup to optimization and reporting. You get all the speed and accuracy of advanced AI, backed by real human expertise, without any learning curve.",
      },
    ],
  },
  {
    label: "Questions About Results & Strategy",
    items: [
      {
        q: "How does your AI technology help my business grow faster?",
        a: "Traditional agencies rely on slow, manual processes. Our custom AI software automates hours of market research, local SEO audits, content creation, and competitor analysis in seconds. This allows our expert marketers to focus on strategy, giving your business a distinct edge and faster growth.",
      },
      {
        q: "What industries or businesses do you specialize in?",
        a: "We specialize in working with local businesses, multi-location brands, and growing enterprises looking to dominate their local markets, rank higher on Google, and convert more local leads into paying customers.",
      },
    ],
  },
  {
    label: "Questions About Working Together",
    items: [
      {
        q: "Who will be managing my account and campaigns?",
        a: "You will be assigned a dedicated Account Manager and a team of marketing specialists. While our AI software works behind the scenes to crunch data and automate workflows, your dedicated team ensures everything aligns perfectly with your business goals.",
      },
      {
        q: "How are you different from traditional digital marketing agencies?",
        a: "Traditional agencies are often slow, expensive, and lack clear data insights. Pure tech tools leave all the work on your shoulders. Epicware combines the best of both worlds: the strategy and personal care of a top-tier agency with the speed and precision of proprietary AI software.",
      },
    ],
  },
  {
    label: "Questions About Pricing & Getting Started",
    items: [
      {
        q: "How do we get started with Epicware?",
        a: "Getting started is simple! Book a free strategy call with our team. We'll analyze your current online presence, discuss your growth goals, and present a custom marketing plan tailored to your business.",
      },
      {
        q: "What kind of support do you provide after we onboard?",
        a: "We offer end-to-end support, including regular performance reviews, transparent custom dashboards, and direct communication with your dedicated account manager to ensure continuous growth.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Fold 1: Hero */}
      <section className="hero-gradient pt-28 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-6">
            ABOUT EPICWARE
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            About Epicware: An AI-Powered Growth Marketing Agency
          </h1>
          <p className="text-lg text-foreground/80 font-medium mb-4">
            We built the software. Our team drives the growth.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Epicware is a digital marketing agency in Singapore with its own AI-powered software. Our
            specialists use it to get local businesses found on Google, Google Maps and AI search, win
            more reviews and protect their reputation. You never have to learn the software: our team
            runs it for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book a Free Strategy Call →
            </Link>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-border/60 text-foreground font-medium text-sm hover:border-primary/30 transition-all duration-300"
            >
              Get Your Free SEO Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 2: Who we are */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">
            An Agency First, With Our Own AI Behind Every Client
          </h2>
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              Most business owners don&apos;t want another dashboard to manage. They want customers
              through the door, higher Google Maps rankings and revenue they can see.
            </p>
            <p>
              So Epicware works as your marketing team. Our specialists plan the strategy, do the work
              and report the results. Our own AI software does the heavy lifting in the background: it
              tracks your rankings, flags new reviews the moment they arrive, and drafts replies and
              posts for our team to check.
            </p>
          </div>
        </div>
      </section>

      {/* Fold 3: Why we built our own AI */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">Why We Built Our Own AI</h2>
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              Business owners kept getting stuck between two bad options. Traditional agencies were
              slow, with manual reports and weeks between updates. Software tools were fast but left all
              the work to the owner, and few owners had time to use them.
            </p>
            <p>
              We built our own AI software to close that gap. It handles the repetitive work, such as
              rank scans across every Singapore district, review alerts, reply drafts and post
              scheduling, so our specialists spend their time on strategy and results.
            </p>
          </div>
        </div>
      </section>

      {/* Fold 4: How we work */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">AI Speed, Human Judgement</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Every client gets both: proven local SEO strategy from a team with 10+ years in the
              industry, and AI workflows that make the work faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {howWeWork.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["10+ Years Experience", "50+ Brands Served", "Singapore-Built", "100+ Outlets Managed"].map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 bg-card border border-border/60 rounded-full px-4 py-2 shadow-card"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground/80">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 5: Epicware in numbers */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-display font-bold text-foreground leading-tight mb-10">Epicware in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {numbers.map((n) => (
              <div key={n.label}>
                <p className="font-display font-bold text-foreground text-3xl md:text-4xl mb-2">{n.figure}</p>
                <p className="text-sm text-muted-foreground leading-snug">{n.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Real-time review alerts · District-by-district rank scans · AI-drafted review replies
          </p>
        </div>
      </section>

      {/* Fold 6: Founder's note */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-8 leading-tight text-center">
            A Message From Our Founder &amp; CEO
          </h2>
          <div className="rounded-2xl border border-border/60 bg-card p-6 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-primary/20 shrink-0">
                <Image
                  src="/assets/founder-vignesh.jpg"
                  alt="Vignesh Wadarajan, Founder and CEO of Epicware"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-foreground">Vignesh Wadarajan</p>
                <p className="text-sm text-muted-foreground">Founder &amp; CEO, Epicware</p>
              </div>
            </div>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-6">
              <p>
                At NinjaOS, I spent years building technology for restaurant groups and multi-outlet
                brands across Asia-Pacific. One frustration came up again and again: owners didn&apos;t
                need another complicated dashboard. They didn&apos;t have time to learn complex AI
                tools. They wanted customers through the door, higher Google Maps rankings and real
                revenue.
              </p>
              <p>
                So we built Epicware the other way round. We started with the agency, then built our
                own AI software to power it. When you work with us, you&apos;re never left figuring out
                a tool on your own. You get a team of marketing specialists who use our AI to do the
                heavy lifting, and who answer to you for the results.
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Vignesh leads Epicware&apos;s strategy and product. Before Epicware, he was CEO of
              NinjaOS, the online ordering technology company behind restaurant brands across
              Asia-Pacific.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
                Former CEO of NinjaOS: $120M+ in GMV and a successful exit
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
                Member, Forbes Technology Council
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80">
                Deep roots in Singapore&apos;s tech and business ecosystem
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fold 7: What we do */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">What We Do</h2>
            <p className="text-base text-muted-foreground">One team for every way customers find you online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {whatWeDo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-200"
              >
                <p className="font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            All of it runs on our four AI products: EpicMap, EpicReview, EpicSocial and EpicEngage. Our{" "}
            <Link href="/reviews" className="text-foreground font-medium hover:underline">client reviews</Link>{" "}
            and{" "}
            <Link href="/case-studies" className="text-foreground font-medium hover:underline">case studies</Link>{" "}
            show what that looks like in practice.
          </p>
        </div>
      </section>

      {/* Fold 8: FAQ */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-10 leading-tight text-center">
            Questions About Epicware
          </h2>
          <div className="space-y-10">
            {faqGroups.map((group, gi) => (
              <div key={gi}>
                {group.label && (
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{group.label}</p>
                )}
                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-border/60 bg-card p-5">
                      <p className="font-semibold text-foreground text-sm mb-2">{item.q}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 9: Call to action */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">Let&apos;s Grow Your Business Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free strategy call. We&apos;ll show you where you stand on Google, Google Maps and AI
            search, and what we&apos;d fix first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book a Free Strategy Call →
            </Link>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Get Your Free SEO Audit
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
