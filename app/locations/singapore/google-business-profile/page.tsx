import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROOF } from "@/lib/site/proof";
import {
  Tag,
  Star,
  FileText,
  Sparkles,
  MessageCircle,
  CheckSquare,
  Target,
  Calendar,
  Link2,
  Wrench,
  IdCard,
  ShieldCheck,
  CalendarCheck,
  Camera,
  Building2,
  CalendarHeart,
  Flag,
  Grid3x3,
  BarChart3,
  Key,
  LineChart,
  UtensilsCrossed,
  Stethoscope,
  Smile,
  Scissors,
  GraduationCap,
  Car,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import MoneyPageLinkRings from "@/components/site/MoneyPageLinkRings";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: { absolute: "Google Business Profile Optimisation Singapore | Epicware" },
  description:
    "Epicware provides GBP optimisation and Google Maps SEO services in Singapore: a 19-point profile audit, priority fixes in 48 hours, weekly posts and rank tracking. Get a quote!",
  alternates: { canonical: "https://www.epicware.ai/locations/singapore/google-business-profile" },
  openGraph: {
    title: "Google Business Profile Optimisation in Singapore | Epicware",
    description:
      "Epicware provides GBP optimisation and Google Maps SEO services in Singapore: a 19-point profile audit, priority fixes in 48 hours, weekly posts and rank tracking. Get a quote!",
    url: "https://www.epicware.ai/locations/singapore/google-business-profile",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#webpage",
      url: "https://www.epicware.ai/locations/singapore/google-business-profile",
      name: "Google Business Profile Optimisation Singapore | Epicware",
      description:
        "GBP optimisation and Google Maps SEO services in Singapore: a 19-point profile audit, priority fixes in 48 hours, weekly posts and rank tracking.",
      inLanguage: "en-SG",
      dateModified: "2026-10-16",
      lastReviewed: "2026-10-16",
      reviewedBy: {
        "@type": "Person",
        name: "Vignesh Wadarajan",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": "https://www.epicware.ai/#organization" },
      },
      publisher: { "@id": "https://www.epicware.ai/#organization" },
      about: { "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#service" },
      breadcrumb: { "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#breadcrumb" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.epicware.ai/assets/epicmap-before-after.png",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#service",
      name: "Google Business Profile Optimisation in Singapore",
      alternateName: ["GBP optimisation", "GMB optimisation", "Google Maps SEO services"],
      serviceType: "Google Business Profile optimisation",
      description:
        "A 19-point Google Business Profile audit, category benchmarking, high-impact fixes, weekly Google posts, review replies, spam reporting, suspension recovery and weekly Google Maps rank tracking for Singapore businesses.",
      url: "https://www.epicware.ai/locations/singapore/google-business-profile",
      provider: { "@id": "https://www.epicware.ai/#organization" },
      areaServed: { "@type": "Country", name: "Singapore" },
      isRelatedTo: { "@id": "https://www.epicware.ai/locations/singapore/local-seo#service" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GBP optimisation services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Profile Audit and Fixes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Category and Service Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Setup, Verification and Duplicates", url: "https://www.epicware.ai/services/google-business-profile/setup" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suspension Recovery" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weekly Google Posts", url: "https://www.epicware.ai/services/google-business-profile/post-scheduling" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photos, Videos and Products" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Review Requests and Replies", url: "https://www.epicware.ai/locations/singapore/review-management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Outlet Profiles", url: "https://www.epicware.ai/use-cases/manage-multiple-gbp-locations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Holiday Hours and Edit Watch" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Competitor Spam Reporting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Maps Rank Tracking", url: "https://www.epicware.ai/services/local-seo/rank-tracking" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Click and Call Reporting" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#faq",
      mainEntity: [
        { "@type": "Question", name: "How much does GBP optimisation cost in Singapore?", acceptedAnswer: { "@type": "Answer", text: "Google Business Profile is free; you pay for the work. Cost depends on your outlets and how competitive your categories are. A free GBP audit shows which plan fits; see our pricing page." } },
        { "@type": "Question", name: "How long does GBP optimisation take to show results?", acceptedAnswer: { "@type": "Answer", text: "Google Maps rankings can move within 30 to 60 days of the fixes. Review-driven gains usually take three to six months, longer in busy districts." } },
        { "@type": "Question", name: "Is Google My Business the same as Google Business Profile?", acceptedAnswer: { "@type": "Answer", text: "Yes. Google renamed Google My Business to Google Business Profile in 2021, so GMB optimisation and GBP optimisation mean the same work." } },
        { "@type": "Question", name: "Can you guarantee #1 on Google Maps?", acceptedAnswer: { "@type": "Answer", text: "No. No agency can honestly guarantee it: Google says no one can pay for a better local ranking. We promise the work and show every weekly scan." } },
        { "@type": "Question", name: "Do you need my Google login?", acceptedAnswer: { "@type": "Answer", text: "No. You add us as a manager on your profile, so you stay the owner and can remove our access at any time." } },
        { "@type": "Question", name: "Should I add keywords to my business name?", acceptedAnswer: { "@type": "Answer", text: "No. Google's guidelines say your name should reflect your real-world business name, and adding unnecessary information can get your profile suspended. We use categories, services and posts instead." } },
        { "@type": "Question", name: "Can you fix a suspended Google Business Profile?", acceptedAnswer: { "@type": "Answer", text: "If your business qualifies for a profile, we find the likely cause, fix it and appeal with evidence such as your ACRA registration. Google decides; it says appeal reviews can take up to five business days." } },
        { "@type": "Question", name: "What happened to Q&A on Google Maps?", acceptedAnswer: { "@type": "Answer", text: "Google phased out Q&A on Business Profiles from late 2025. Its AI now answers customers' questions from your profile, reviews and website, so we keep your profile complete and replies up to date." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.epicware.ai/locations/singapore/google-business-profile#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai/" },
        { "@type": "ListItem", position: 2, name: "Local SEO Services", item: "https://www.epicware.ai/locations/singapore/local-seo" },
        { "@type": "ListItem", position: 3, name: "GBP Optimisation", item: "https://www.epicware.ai/locations/singapore/google-business-profile" },
      ],
    },
  ],
};

const tactics = [
  { icon: Tag, title: "Category first.", text: "Local search experts rank the primary category as the number one local ranking factor, so we compare yours with the profiles ranking above you." },
  { icon: Star, title: "A steady flow of reviews.", text: "Fresh reviews and replies signal an active business, so we request reviews after visits, not in one-off pushes." },
  { icon: FileText, title: "Profile and website match.", text: "Each profile links to the right outlet page, and we flag details on your site that don't match." },
  { icon: Sparkles, title: "A cleaner map.", text: "Fake listings and keyword-stuffed names crowd you out, so we report them through Google's redressal form." },
  { icon: MessageCircle, title: "Ready for AI answers.", text: "Google's AI in Maps answers questions using your profile, reviews and website, so we keep your profile complete, reply to reviews and flag site gaps." },
];

const auditAreas = [
  { icon: CheckSquare, label: "Accuracy", text: "Business name, address and map pin, phone, opening and holiday hours, website and booking links" },
  { icon: Target, label: "Relevance", text: "Primary and secondary categories, services, products, description, attributes, service areas" },
  { icon: Calendar, label: "Activity", text: "Photos, videos and Google posts, and how recent they are" },
  { icon: Star, label: "Reputation", text: "Review count, rating and recency, and how fast you reply" },
  { icon: Link2, label: "Consistency", text: "Name, address and phone (NAP) across directories, duplicate listings and verification status" },
];

const serviceGroups = [
  {
    label: "Fix",
    items: [
      { icon: Wrench, title: "Profile Audit and Fixes", href: null, text: "The 19-point audit, then high-impact fixes within 48 hours of getting manager access." },
      { icon: Tag, title: "Category and Service Strategy", href: null, text: "Categories benchmarked against the profiles ranking above you; services written the way customers search." },
      { icon: IdCard, title: "Setup, Verification and Duplicates", href: "/services/google-business-profile/setup", text: "New profiles taken through Google's verification; duplicates reported and unclaimed listings claimed in your name." },
      { icon: ShieldCheck, title: "Suspension Recovery", href: null, text: "We trace the likely cause, fix it and file the appeal; Google makes the final call." },
    ],
  },
  {
    label: "Grow",
    items: [
      { icon: CalendarCheck, title: "Weekly Google Posts", href: "/services/google-business-profile/post-scheduling", text: "Offers, services and events posted weekly around your target keywords." },
      { icon: Camera, title: "Photos, Videos and Products", href: null, text: "Your photos and videos added regularly, with products and menus kept current." },
      { icon: Star, title: "Review Requests and Replies", href: "/locations/singapore/review-management", text: "Replies to your reviews, and review requests that follow Google's rules." },
      { icon: Building2, title: "Multi-Outlet Profiles", href: null, text: "Every outlet managed side by side; we apply for Google bulk verification if you have 10 or more." },
    ],
  },
  {
    label: "Protect and measure",
    items: [
      { icon: CalendarHeart, title: "Holiday Hours and Edit Watch", href: null, text: "Hours set before every Singapore public holiday; unwanted edits caught and corrected." },
      { icon: Flag, title: "Competitor Spam Reporting", href: null, text: "Spam competitors reported with evidence and followed up until Google decides." },
      { icon: Grid3x3, title: "Google Maps Rank Tracking", href: "/services/local-seo/rank-tracking", text: "EpicMap tracks your rank weekly on a grid across your districts." },
      { icon: BarChart3, title: "Click and Call Reporting", href: null, text: "Tagged links show which site visits came from your profile, plus monthly call and direction reports." },
    ],
  },
];

const processSteps = [
  { icon: Key, title: "Day 1: Access and audit", text: "You add us as a manager, so the profile stays in your name. We run the 19-point audit and an EpicMap rank scan." },
  { icon: Wrench, title: "Within 48 hours: High-impact fixes", text: "We correct categories, services, hours, description, attributes and links. Some edits wait for Google's approval." },
  { icon: Calendar, title: "Every week: Posts, photos and replies", text: "New posts and photos go live, and new reviews get replies." },
  { icon: LineChart, title: "Every month: Report and adjust", text: "You see calls, clicks and directions beside your rank grid, and we adjust the plan." },
];

const results = [
  { h3: "Hair salon chain, four outlets", headline: "#7 → #2", text: "Week 1: categories fixed, service lists completed, 15+ photos added per outlet and hours corrected. In 90 days, the Orchard outlet rose from #7 to #2 on Google Maps for “hair salon Orchard”.", href: "/case-studies/salon-whatsapp-automation", image: "/assets/epicreview-screen.png" },
  { h3: "Aesthetic clinic, Hougang and Orchard", headline: "#1 Map Pack", text: "A 19-point audit and a compliant posting schedule. Within 60 days of starting on 1 July 2026, the Hougang outlet reached #1 in the Local Map Pack for “hougang aesthetic clinic”.", href: "/case-studies/aesthetic-clinic-seo-singapore", image: "/assets/epicmap-screen.png" },
  { h3: "Restaurant chain, five outlets", headline: "#1 and #2", text: "A 19-point audit of all five profiles and twice-weekly posts per outlet. Two outlets reached #1 and #2 in the Local Map Pack for the chain's signature category term.", href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore", image: "/assets/EpicMapImageforweb.png" },
];

const softwareTabs = [
  { name: "EpicMap", href: "/products/epicmap", caption: "Weekly Google Maps rank grids across the districts you serve", image: "/assets/epicmap-before-after.png", alt: "EpicMap weekly Google Maps rank grid for a Singapore outlet" },
  { name: "EpicReview", href: "/products/epicreview", caption: "Review requests, AI-drafted replies and real-time review alerts", image: "/assets/epicreview-demo.png", alt: "EpicReview inbox with an AI-drafted reply for a Singapore outlet" },
  { name: "EpicSocial", href: "/products/epicsocial", caption: "Social posts created and scheduled for every outlet", image: "/assets/EpicSocial.png", alt: "EpicSocial post calendar for a Singapore outlet" },
];

const comparisonRows = [
  { label: "What it covers", gbp: "Your Google Business Profile", local: "Your profile plus citations, location pages and reviews on other platforms" },
  { label: "Best for", gbp: "A stronger Google Maps listing", local: "Competing across districts and search types" },
];

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants", href: "/industries/restaurants", text: "Menus, dish photos and holiday hours kept current" },
  { icon: Stethoscope, label: "Medical clinics", href: "/industries/healthcare-clinics", text: "Accurate services, and replies that never confirm a patient" },
  { icon: Smile, label: "Dental clinics", href: "/industries/dental-clinics", text: "Treatment-led services and photos of the clinic" },
  { icon: Scissors, label: "Hair and nail salons", href: "/industries/nail-hair-salons", text: "Booking links, service menus and photos of your work" },
  { icon: GraduationCap, label: "Tuition centres", href: "/industries/tuition-centres", text: "Classes listed as services, and replies to parents" },
  { icon: Car, label: "Car workshops", href: "/industries/car-workshops", text: "Accurate hours, services and workshop photos" },
];

const faqs = [
  { q: "How much does GBP optimisation cost in Singapore?", a: "Google Business Profile is free; you pay for the work. Cost depends on your outlets and how competitive your categories are. A free GBP audit shows which plan fits; see our pricing page.", href: "/pricing", anchor: "pricing page" },
  { q: "How long does GBP optimisation take to show results?", a: "Google Maps rankings can move within 30 to 60 days of the fixes. Review-driven gains usually take three to six months, longer in busy districts." },
  { q: "Is Google My Business the same as Google Business Profile?", a: "Yes. Google renamed Google My Business to Google Business Profile in 2021, so GMB optimisation and GBP optimisation mean the same work." },
  { q: "Can you guarantee #1 on Google Maps?", a: "No. No agency can honestly guarantee it: Google says no one can pay for a better local ranking. We promise the work and show every weekly scan." },
  { q: "Do you need my Google login?", a: "No. You add us as a manager on your profile, so you stay the owner and can remove our access at any time." },
  { q: "Should I add keywords to my business name?", a: "No. Google's guidelines say your name should reflect your real-world business name, and adding unnecessary information can get your profile suspended. We use categories, services and posts instead.", href: "https://support.google.com/business/answer/7205772", anchor: "Google's guidelines", external: true },
  { q: "Can you fix a suspended Google Business Profile?", a: "If your business qualifies for a profile, we find the likely cause, fix it and appeal with evidence such as your ACRA registration. Google decides; it says appeal reviews can take up to five business days.", href: "https://support.google.com/business/answer/4567512", anchor: "appeal", external: true },
  { q: "What happened to Q&A on Google Maps?", a: "Google phased out Q&A on Business Profiles from late 2025. Its AI now answers customers' questions from your profile, reviews and website, so we keep your profile complete and replies up to date." },
];

export default function GbpOptimisationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Fold 1: Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: "Singapore", href: "/locations/singapore" },
              { label: "Google Business Profile" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
                GBP OPTIMISATION · SINGAPORE
              </div>
              <h1 className="font-display font-bold text-foreground mb-5 leading-[1.08]">
                Google Business Profile Optimisation in Singapore for Higher Google Maps Rankings
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Your Google Business Profile (GBP) is what customers see before they call, visit or
                book. Our GBP optimisation services fix the gaps in your profile, keep it active every
                week and track your Google Maps ranking across Singapore, district by district.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
                  Get a Free GBP Audit
                </Link>
                <Link href="/book-demo#form" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200">
                  Book a Free Strategy Call
                </Link>
              </div>
              <a href="https://share.google/K1DfMHlISqq4rUWnp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                ⭐ Rated on Google
              </a>
              <div className="flex flex-wrap gap-3">
                {["19-Point GBP Audit", "Weekly Maps Rank Grids", `${PROOF.outletsManaged.value} Outlets Managed`, "10+ Years' Specialist Experience"].map((b) => (
                  <span key={b} className="inline-flex items-center bg-card/80 border border-border/60 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 shadow-card">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-dramatic">
              <Image
                src="/assets/epicmap-before-after.png"
                alt="Optimised Google Business Profile and its Google Maps rank grid for a Singapore salon"
                width={760}
                height={580}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fold 2: What GBP optimisation is */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">What Is Google Business Profile Optimisation?</h2>
          <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
            <p className="text-base text-foreground/90 leading-relaxed">
              Google Business Profile optimisation is the work of completing, correcting and updating
              your free business listing on Google Search and Google Maps. It helps you show up in more
              searches, including the Google Maps 3-Pack, the top three map results on Google Search,
              and helps customers choose you. GMB optimisation means the same thing: Google renamed
              Google My Business to Google Business Profile in 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Fold 3: How GBP optimisation can lift your Google Maps ranking */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground mb-5 leading-tight text-center">How GBP Optimisation Can Lift Your Google Maps Ranking</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            Google ranks local results mainly on relevance, distance and prominence (
            <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              Google Business Profile Help
            </a>
            ), as our{" "}
            <Link href="/blog/google-maps-ranking-factors" className="text-primary font-medium hover:underline">
              Google Maps ranking factors
            </Link>{" "}
            guide explains. Google Maps ranking optimisation starts with your profile. Five tactics we
            use in competitive districts:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tactics.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-2xl border border-border/60 bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{t.title}</span> {t.text}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Tactic #1 reflects{" "}
            <a href="https://whitespark.ca/local-search-ranking-factors/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Whitespark&apos;s local ranking-factor survey
            </a>
            . Fake and spam listings can be reported through{" "}
            <a href="https://support.google.com/business/contact/business_redressal_form" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google&apos;s Business Redressal Complaint Form
            </a>
            .
          </p>
        </div>
      </section>

      {/* Fold 4: The 19-point GBP audit */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground mb-5 leading-tight text-center">What Our 19-Point GBP Audit Checks</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            We score your profile across five areas and list every gap by how much it holds back your
            Google Maps ranking.
          </p>
          <div className="space-y-4 mb-8">
            {auditAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.label} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5">
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{area.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/free-audit" className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300">
              Get My Free GBP Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 5: Our GBP optimisation services */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground mb-5 leading-tight text-center">Our GBP Optimisation Services</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Our Google Maps SEO services cover one-off fixes and ongoing Google Business Profile
            management, done for you and reported every month.
          </p>
          <div className="space-y-10">
            {serviceGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{group.label}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.map((s) => {
                    const Icon = s.icon;
                    const card = (
                      <div className="h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-200">
                        <Icon className="w-6 h-6 text-primary mb-4" />
                        <p className="font-semibold text-foreground mb-2 flex items-center gap-1.5 text-sm">
                          {s.title}
                          {s.href && <span className="text-primary">→</span>}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                      </div>
                    );
                    return s.href ? (
                      <Link key={s.title} href={s.href} className="block h-full">{card}</Link>
                    ) : (
                      <div key={s.title}>{card}</div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 6: How it works */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-12 text-center">How Our GBP Optimisation Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-2xl border border-border/60 bg-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm mb-2">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 7: Results */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-12 text-center">GBP Optimisation Results in Singapore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {results.map((r) => (
              <div key={r.h3} className="rounded-2xl border border-border/60 bg-card overflow-hidden flex flex-col">
                <div className="relative aspect-video bg-muted">
                  <Image src={r.image} alt={r.h3} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-display font-bold text-primary text-xl mb-2">{r.headline}</p>
                  <p className="font-semibold text-foreground text-sm mb-2">{r.h3}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{r.text}</p>
                  <Link href={r.href} className="text-sm font-semibold text-primary hover:underline">
                    Read the case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/case-studies" className="text-sm font-semibold text-primary hover:underline">
              See all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 8: Our software */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-4">
              OUR SOFTWARE
            </div>
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">See Your Profile, Rankings and Reviews in One Dashboard</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Our own AI-powered software puts your profile work, rankings and reviews in one dashboard
              you can log in to any time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareTabs.map((tab) => (
              <div key={tab.name} className="rounded-2xl border border-border/60 bg-card overflow-hidden">
                <div className="relative aspect-video bg-muted">
                  <Image src={tab.image} alt={tab.alt} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <Link href={tab.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                    {tab.name} →
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{tab.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 9: Why Epicware */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-10 text-center">
            Why Choose Epicware as Your Google Business Profile Agency
          </h2>
          <div className="grid grid-cols-3 gap-6 mb-12 text-center">
            {[
              { n: "100+", l: "Outlets managed" },
              { n: "10+", l: "Years of specialist experience" },
              { n: "19-point", l: "GBP audit" },
            ].map((t) => (
              <div key={t.l}>
                <p className="font-display font-bold text-foreground text-3xl md:text-4xl mb-2">{t.n}</p>
                <p className="text-sm text-muted-foreground">{t.l}</p>
              </div>
            ))}
          </div>
          <div className="space-y-5 mb-10">
            {[
              { title: "Advanced work, not just the basics.", text: "Category benchmarking, spam reporting, edit watch and suspension recovery sit alongside the routine fixes." },
              { title: "Google's guidelines, every time.", text: "No keywords stuffed into business names, and no fake or rewarded reviews." },
              { title: "Dated proof, honest reporting.", text: "Dated Map Pack screenshots, and you see every weekly scan, including keywords that haven't moved yet." },
            ].map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{p.title}</span> {p.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 border-t border-border/60 pt-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/20 shrink-0">
              <Image src="/assets/founder-vignesh.jpg" alt="Vignesh Wadarajan, Founder and CEO of Epicware" fill className="object-cover" />
            </div>
            <p className="text-sm text-muted-foreground">
              Reviewed by <span className="font-medium text-foreground">Vignesh Wadarajan</span>, Founder &amp; CEO at Epicware · Last updated 16 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Fold 10: GBP optimisation or full local SEO */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-8 text-center">GBP Optimisation or Full Local SEO?</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="text-left p-4 font-semibold text-foreground bg-primary/8">GBP optimisation</th>
                  <th className="text-left p-4 font-semibold text-foreground">Local SEO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/40 last:border-0">
                    <td className="p-4 text-muted-foreground bg-primary/5">
                      <span className="font-medium text-foreground/80 block mb-1">{row.label}</span>
                      {row.gbp}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-center">
            <Link href="/locations/singapore/local-seo" className="text-primary font-medium hover:underline">
              GBP optimisation is part of our local SEO services in Singapore, so you can add the rest at any time →
            </Link>
          </p>
        </div>
      </section>

      {/* Fold 11: By industry */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-12 text-center">GBP Optimisation by Industry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-200"
                >
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <p className="font-semibold text-foreground text-sm mb-1.5">{ind.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 12: FAQ */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-10 leading-tight text-center">Google Business Profile Optimisation: Common Questions</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="rounded-2xl border border-border/60 bg-card px-5 border-b-0">
                <AccordionTrigger className="text-left font-semibold text-foreground text-sm hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.href ? (
                    <>
                      {item.a.split(item.anchor!)[0]}
                      {item.external ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{item.anchor}</a>
                      ) : (
                        <Link href={item.href} className="text-primary font-medium hover:underline">{item.anchor}</Link>
                      )}
                      {item.a.split(item.anchor!)[1]}
                    </>
                  ) : (
                    item.a
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Fold 13: Final CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/epicmap-before-after.png" alt="" fill className="object-cover blur-2xl" />
        </div>
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <h2 className="font-display font-bold mb-4">Get Your Free GBP Audit</h2>
          <p className="text-lg opacity-90 mb-8">
            Find out what your Google Business Profile (formerly Google My Business) is missing and
            where you rank on Google Maps. We&apos;ll run the 19-point audit and send you the fixes,
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-foreground font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Get My Free GBP Audit →
            </Link>
            <Link href="/book-demo#form" className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200">
              Book a Free Strategy Call
            </Link>
            <a href="https://wa.me/6590013157" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <MoneyPageLinkRings countrySlug="singapore" serviceSlug="google-business-profile" />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
