import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROOF } from "@/lib/site/proof";
import {
  Store,
  Search,
  FileText,
  Code2,
  Link2,
  MessageSquareText,
  ShieldX,
  Grid3x3,
  Building2,
  AlertTriangle,
  Wrench,
  CalendarCheck,
  LineChart,
  UtensilsCrossed,
  Stethoscope,
  Smile,
  Scissors,
  GraduationCap,
  Car,
  Flower2,
  ShoppingBag,
  Activity,
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
  title: { absolute: "Local SEO Services Singapore | Local SEO Agency | Epicware" },
  description:
    `Local SEO services in Singapore: citations, reviews, location pages and weekly rank tracking, from a AI local SEO agency that has managed ${PROOF.outletsManaged.value} outlets.`,
  alternates: { canonical: "https://www.epicware.ai/locations/singapore/local-seo" },
  openGraph: {
    title: "Local SEO Services Singapore | Local SEO Agency | Epicware",
    description:
      `Local SEO services in Singapore: citations, reviews, location pages and weekly rank tracking, from a AI local SEO agency that has managed ${PROOF.outletsManaged.value} outlets.`,
    url: "https://www.epicware.ai/locations/singapore/local-seo",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.epicware.ai/locations/singapore/local-seo#webpage",
      url: "https://www.epicware.ai/locations/singapore/local-seo",
      name: "Local SEO Services Singapore | Local SEO Agency | Epicware",
      description:
        `Local SEO services in Singapore: citations, reviews, location pages and weekly rank tracking, from a local SEO agency that has managed ${PROOF.outletsManaged.value} outlets.`,
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
      about: { "@id": "https://www.epicware.ai/locations/singapore/local-seo#service" },
      breadcrumb: { "@id": "https://www.epicware.ai/locations/singapore/local-seo#breadcrumb" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.epicware.ai/assets/epicmap-before-after.png",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.epicware.ai/locations/singapore/local-seo#service",
      name: "Local SEO Services in Singapore",
      serviceType: "Local SEO",
      description:
        "Local keyword research, location and service-area pages, local schema, link building and business listings, review generation, negative review removal and weekly local rank tracking for Singapore businesses.",
      url: "https://www.epicware.ai/locations/singapore/local-seo",
      provider: { "@id": "https://www.epicware.ai/#organization" },
      areaServed: { "@type": "Country", name: "Singapore" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Local SEO services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Business Profile Optimisation", url: "https://www.epicware.ai/locations/singapore/google-business-profile" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Keyword and Competitor Research", url: "https://www.epicware.ai/services/local-seo/competitor-analysis" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Location and Service-Area Pages" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Schema Markup" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Link Building and Business Listings", url: "https://www.epicware.ai/services/local-seo/citation-building" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Review Generation and Reputation Management", url: "https://www.epicware.ai/locations/singapore/review-management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Negative Review Removal", url: "https://www.epicware.ai/locations/singapore/review-removal" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Rank Tracking", url: "https://www.epicware.ai/services/local-seo/rank-tracking" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Outlet Management", url: "https://www.epicware.ai/use-cases/manage-multiple-gbp-locations" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.epicware.ai/locations/singapore/local-seo#faq",
      mainEntity: [
        { "@type": "Question", name: "How much do local SEO services cost in Singapore?", acceptedAnswer: { "@type": "Answer", text: "Cost depends on your number of outlets and how competitive your keywords are. One clinic in a quiet estate needs less work than five restaurants in Orchard. A free audit shows which plan fits; see our pricing page." } },
        { "@type": "Question", name: "How long do local SEO services take to work?", acceptedAnswer: { "@type": "Answer", text: "Local rankings can move within 30 to 60 days of fixing your listings and citations. Review-driven gains usually take three to six months, longer in busy districts." } },
        { "@type": "Question", name: "Can you guarantee a #1 local ranking?", acceptedAnswer: { "@type": "Answer", text: "No. No agency can honestly guarantee #1 in local results: Google says no one can pay for a better local ranking. We promise the work and show you every weekly scan." } },
        { "@type": "Question", name: "Do Google reviews help local SEO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Google says more reviews and positive ratings can help your local ranking, and it advises replying to them. Google's policy bans paid or rewarded reviews and asking only happy customers; we do neither." } },
        { "@type": "Question", name: "Do I need a physical shop for local SEO?", acceptedAnswer: { "@type": "Answer", text: "No, but you must meet customers in person. Service-area businesses, like aircon servicing and movers, should hide their address on Google and list the areas they serve instead. We track those areas." } },
        { "@type": "Question", name: "Can you manage local SEO for multiple outlets?", acceptedAnswer: { "@type": "Answer", text: "Yes. Each outlet gets its own keyword list, review tracking and rank grid, side by side in one dashboard. We have managed more than 100 outlets, including a five-outlet restaurant chain and a four-outlet salon chain." } },
        { "@type": "Question", name: "How do I choose a local SEO agency or tool in Singapore?", acceptedAnswer: { "@type": "Answer", text: "Ask for dated ranking proof for businesses like yours, a list of first-month fixes and your own login to see rankings across your district. Avoid anyone who guarantees #1 or offers to buy reviews." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.epicware.ai/locations/singapore/local-seo#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai/" },
        { "@type": "ListItem", position: 2, name: "Local SEO Services", item: "https://www.epicware.ai/locations/singapore/local-seo" },
      ],
    },
  ],
};

const services = [
  { icon: Store, title: "Google Business Profile Optimisation", href: "/locations/singapore/google-business-profile", text: "A 19-point audit of your profile, the fixes done for you, and weekly posts that keep it active." },
  { icon: Search, title: "Local Keyword and Competitor Research", href: "/services/local-seo/competitor-analysis", text: "The searches customers use in each district, and what the businesses ranking above you do differently." },
  { icon: FileText, title: "Location and Service-Area Pages", href: null, text: "A page for every outlet, plus a page for each area you cover where you have no shop, written for local searches." },
  { icon: Code2, title: "Local Schema Markup", href: null, text: "LocalBusiness structured data on each location page, so search engines and AI tools can read your address, hours and services." },
  { icon: Link2, title: "Local Link Building and Business Listings", href: "/services/local-seo/citation-building", text: "Links from Singapore sites, associations and partners, plus your details checked and corrected across 40+ directories." },
  { icon: MessageSquareText, title: "Review Generation and Reputation Management", href: "/locations/singapore/review-management", text: "Review requests by WhatsApp and email after visits, replies to your reviews, and real-time alerts when new reviews arrive." },
  { icon: ShieldX, title: "Negative Review Removal", href: "/locations/singapore/review-removal", text: "Fake and policy-breaking reviews reported to Google with evidence and followed up; Google makes the final call." },
  { icon: Grid3x3, title: "Local Rank Tracking", href: "/services/local-seo/rank-tracking", text: "EpicMap tracks your rank week by week on a grid of points across each district." },
  { icon: Building2, title: "Multi-Outlet Management", href: "/use-cases/manage-multiple-gbp-locations", text: "Separate keyword lists, review tracking and rank grids for every outlet, in one login." },
];

const processSteps = [
  { icon: Search, title: "Week 1: Audit and keyword map", text: "We map the searches that matter in each district, scan your rankings on an EpicMap grid and check your listings, citations, reviews and competitors." },
  { icon: Wrench, title: "Weeks 1–2: Fix the foundations", text: "We correct listings and citations, fix name, address and phone mismatches, and plan the location pages you're missing." },
  { icon: CalendarCheck, title: "Every week: Reviews and content", text: "Review requests go out, new reviews get replies, and new citations and local content go live." },
  { icon: LineChart, title: "Every month: Report and adjust", text: "We review your weekly rank scans by district, check competitors and shift effort to stalled keywords." },
];

const softwareTabs = [
  { name: "EpicMap", href: "/products/epicmap", caption: "Local rank tracking on a grid across your districts, updated weekly", image: "/assets/epicmap-before-after.png", alt: "EpicMap dashboard tracking local rankings by district" },
  { name: "EpicReview", href: "/products/epicreview", caption: "Review requests, AI-drafted replies and real-time review alerts", image: "/assets/epicreview-demo.png", alt: "EpicReview inbox with an AI-drafted reply to a Google review" },
  { name: "EpicEngage", href: "/products/epicengage", caption: "Email campaigns that bring customers back", image: "/assets/EpicEngage.png", alt: "EpicEngage email campaign bringing customers back" },
  { name: "EpicSocial", href: "/products/epicsocial", caption: "Social posts created and scheduled for every outlet", image: "/assets/EpicSocial.png", alt: "EpicSocial calendar with scheduled social posts for each outlet" },
];

const results = [
  { h3: "Aesthetic clinic, Hougang and Orchard", headline: "#1 Map Pack", text: "First 60 days from 1 July 2026: #1 in the Local Map Pack and #1 organic for “hougang aesthetic clinic”. #3 in the Map Pack for “aesthetic medical clinic in Orchard”. Calls and enquiries: +25%.", href: "/case-studies/aesthetic-clinic-seo-singapore", image: "/assets/epicmap-screen.png" },
  { h3: "Hair salon chain, four outlets", headline: "30 → 165 reviews", text: "In 90 days, the Orchard outlet's reviews grew from 30 to 165, and it rose from #7 to #2 in the map results for “hair salon Orchard”.", href: "/case-studies/salon-whatsapp-automation", image: "/assets/epicreview-screen.png" },
  { h3: "Restaurant chain, five outlets", headline: "+24.1% organic visitors", text: "Visitors from organic search rose 24.1% from March to August 2026, against the previous six months. Two outlets reached #1 and #2 in the Local Map Pack for the chain's signature category term.", href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore", image: "/assets/EpicMapImageforweb.png" },
];

const whyPoints = [
  { title: "Our own AI-powered software.", text: "Our tools handle rank scans, reply drafts, email and social posts, so our specialists focus on strategy." },
  { title: "Built by operators.", text: "Our founder, Vignesh Wadarajan, built NinjaOS, an F&B platform that processed over $120M in GMV before its 2021 exit. We judge success by calls and bookings." },
  { title: "Dated proof.", text: "Real ranking screenshots with the date they were taken, not projections." },
  { title: "Google's rules, every time.", text: "No fake or rewarded reviews, no asking only happy customers, no keyword-stuffed business names. Clinic posts and replies follow MOH advertising rules." },
];

const comparisonRows = [
  { label: "Where you show", local: "Map results and local listings", website: "Organic results across Singapore" },
  { label: "Typical search", local: "“dentist near me”, “hair salon Orchard”", website: "“teeth whitening options”, “how to choose a hair salon”" },
  { label: "Main levers", local: "Google listings, reviews, citations, location pages", website: "Pages, content, technical SEO, backlinks" },
  { label: "Time to results", local: "Local rankings can move in 30–60 days", website: "Often 4–12 months" },
];

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants", href: "/industries/restaurants" },
  { icon: Stethoscope, label: "Medical clinics", href: "/industries/healthcare-clinics" },
  { icon: Smile, label: "Dental clinics", href: "/industries/dental-clinics" },
  { icon: Scissors, label: "Hair and nail salons", href: "/industries/nail-hair-salons" },
  { icon: GraduationCap, label: "Tuition centres", href: "/industries/tuition-centres" },
  { icon: Car, label: "Car workshops", href: "/industries/car-workshops" },
  { icon: Flower2, label: "Wellness centres", href: "/industries/wellness-centres" },
  { icon: ShoppingBag, label: "Retail stores", href: "/industries/retail-stores" },
  { icon: Activity, label: "Physiotherapy clinics", href: "/industries/physiotherapy" },
];

const districtPins = [
  { name: "Jurong", slug: "jurong", x: 14, y: 52 },
  { name: "Clementi", slug: "clementi", x: 26, y: 50 },
  { name: "Buona Vista", slug: "buona-vista", x: 32, y: 46 },
  { name: "Orchard", slug: "orchard", x: 44, y: 38 },
  { name: "Toa Payoh", slug: "toa-payoh", x: 52, y: 30 },
  { name: "Ang Mo Kio", slug: "ang-mo-kio", x: 56, y: 20 },
  { name: "Yishun", slug: "yishun", x: 52, y: 10 },
  { name: "Woodlands", slug: "woodlands", x: 40, y: 6 },
  { name: "Tampines", slug: "tampines", x: 80, y: 26 },
  { name: "Bedok", slug: "bedok", x: 74, y: 36 },
];

const faqs = [
  { q: "How much do local SEO services cost in Singapore?", a: "Cost depends on your number of outlets and how competitive your keywords are. One clinic in a quiet estate needs less work than five restaurants in Orchard. A free audit shows which plan fits; see our pricing page.", href: "/pricing", anchor: "pricing page" },
  { q: "How long do local SEO services take to work?", a: "Local rankings can move within 30 to 60 days of fixing your listings and citations. Review-driven gains usually take three to six months, longer in busy districts." },
  { q: "Can you guarantee a #1 local ranking?", a: "No. No agency can honestly guarantee #1 in local results: Google says no one can pay for a better local ranking. We promise the work and show you every weekly scan." },
  { q: "Do Google reviews help local SEO?", a: "Yes. Google says more reviews and positive ratings can help your local ranking, and it advises replying to them. Google's policy bans paid or rewarded reviews and asking only happy customers; we do neither." },
  { q: "Do I need a physical shop for local SEO?", a: "No, but you must meet customers in person. Service-area businesses, like aircon servicing and movers, should hide their address on Google and list the areas they serve instead. We track those areas." },
  { q: "Can you manage local SEO for multiple outlets?", a: "Yes. Each outlet gets its own keyword list, review tracking and rank grid, side by side in one dashboard. We have managed more than 100 outlets, including a five-outlet restaurant chain and a four-outlet salon chain." },
  { q: "How do I choose a local SEO agency or tool in Singapore?", a: "Ask for dated ranking proof for businesses like yours, a list of first-month fixes and your own login to see rankings across your district. Avoid anyone who guarantees #1 or offers to buy reviews." },
];

export default function LocalSEOSingaporePage() {
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
              { label: "Local SEO" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
                LOCAL SEO AGENCY · SINGAPORE
              </div>
              <h1 className="font-display font-bold text-foreground mb-5 leading-[1.08]">
                Local SEO Services in Singapore That Turn Nearby Searches Into Customers
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                When someone nearby searches for what you sell, the first few businesses in the local
                results get the calls. Our local SEO services in Singapore work to win those spots for
                the keywords and districts that bring you bookings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
                  Get a Free Local SEO Audit
                </Link>
                <Link href="/book-demo#form" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200">
                  Book a Free Strategy Call
                </Link>
              </div>
              <a href="https://share.google/K1DfMHlISqq4rUWnp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                ⭐ Rated on Google
              </a>
              <div className="flex flex-wrap gap-3">
                {[`${PROOF.outletsManaged.value} Outlets Managed`, "10+ Years' Specialist Experience", "Listings Corrected on 40+ Directories", `${PROOF.reviewsRemoved.value} Negative Reviews Removed`].map((b) => (
                  <span key={b} className="inline-flex items-center bg-card/80 border border-border/60 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 shadow-card">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-dramatic">
              <Image
                src="/assets/epicmap-before-after.png"
                alt="EpicMap grid showing a Singapore clinic's local rankings across Hougang"
                width={760}
                height={580}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fold 2: What local SEO services are */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-6 leading-tight">What Are Local SEO Services?</h2>
          <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 mb-5">
            <p className="text-base text-foreground/90 leading-relaxed">
              Local SEO services help a business rank when people nearby search on Google Search and
              Google Maps. They cover your business listings, local citations, reviews, location pages
              and rank tracking.
            </p>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Google ranks local results mainly on three things: relevance, distance and prominence,{" "}
            <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              according to Google
            </a>
            . You can&apos;t move your shop closer to every customer. Local SEO improves the other two:
            how well your business matches the search, and how well-known it is. Our guide to{" "}
            <Link href="/blog/google-maps-ranking-factors" className="text-primary font-medium hover:underline">
              local ranking factors
            </Link>{" "}
            explains each one.
          </p>
        </div>
      </section>

      {/* Fold 3: Why local SEO matters */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-foreground mb-5 leading-tight">
                Why Local SEO Matters for Singapore Businesses
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Singapore is dense, and local results change with where the searcher stands. Two
                searchers 2 km apart, in Tampines and Pasir Ris, can see a different top three for the
                same search. Customers search by MRT station, mall and estate, like &quot;dentist near
                Toa Payoh MRT&quot;.
              </p>
              <h3 className="font-display font-semibold text-foreground text-lg mb-4">Why businesses slip in local search</h3>
              <ul className="space-y-3">
                {[
                  "A name, address or phone number that differs across directories",
                  "Missing from the directories and listings customers in Singapore use",
                  "Few reviews, old reviews or unanswered reviews",
                  "No page on your website for each outlet",
                  "Competitors with more local mentions and links",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/assets/two-pins-2km.webp"
                alt="Two searchers 2 km apart in Singapore seeing different local results"
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fold 4: Our local SEO services */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">Our Local SEO Services in Singapore</h2>
            <p className="text-base text-muted-foreground">Our local SEO services cover the work below, scoped to your plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {services.map((s) => {
              const Icon = s.icon;
              const card = (
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <p className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
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
          <div className="rounded-2xl bg-primary/5 border border-primary/15 px-6 py-5 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI answers draw on the same signals: Google AI Overviews and ChatGPT often use listings,
              reviews and citations when naming nearby businesses. Our{" "}
              <Link href="/locations/singapore/ai-search-visibility" className="text-primary font-medium hover:underline">
                AI search optimisation
              </Link>{" "}
              helps you get named in them too.
            </p>
          </div>
        </div>
      </section>

      {/* Fold 5: How our process works */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-12 text-center">How Our Local SEO Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-2xl border border-border/60 bg-card p-6">
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

      {/* Fold 6: Our software */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-4">
              OUR SOFTWARE
            </div>
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">See Every Ranking and Review in One Dashboard</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              We&apos;re an agency with its own AI-powered software. Your rankings, reviews and
              campaigns sit in one dashboard you can log in to at any time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Fold 7: Results */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-foreground leading-tight mb-3">Local SEO Results for Singapore Businesses</h2>
            <p className="text-base text-muted-foreground">What our local SEO services delivered for real clients, and how long it took.</p>
          </div>
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

      {/* Fold 8: Why Epicware */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-10 text-center">
            Why Choose Epicware as Your Local SEO Agency in Singapore
          </h2>
          <div className="grid grid-cols-3 gap-6 mb-12 text-center">
            {[
              { n: "100+", l: "Outlets managed" },
              { n: "10+", l: "Years of specialist experience" },
              { n: "4", l: "AI-powered tools of our own" },
            ].map((t) => (
              <div key={t.l}>
                <p className="font-display font-bold text-foreground text-3xl md:text-4xl mb-2">{t.n}</p>
                <p className="text-sm text-muted-foreground">{t.l}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {whyPoints.map((p) => (
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

      {/* Fold 9: Local SEO vs website SEO */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-5 text-center">Local SEO vs Website SEO: Which Do You Need?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Local SEO wins customers near your outlet. Website SEO wins searches across Singapore
            through your web pages. Most businesses with a shop, clinic or outlet need both.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border/60 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="text-left p-4 font-semibold text-foreground"></th>
                  <th className="text-left p-4 font-semibold text-foreground bg-primary/8">Local SEO</th>
                  <th className="text-left p-4 font-semibold text-foreground">Website SEO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/40 last:border-0">
                    <td className="p-4 font-medium text-foreground/80">{row.label}</td>
                    <td className="p-4 text-muted-foreground bg-primary/5">{row.local}</td>
                    <td className="p-4 text-muted-foreground">{row.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-center">
            <Link href="/locations/singapore/seo" className="text-primary font-medium hover:underline">
              For your website, see our SEO services in Singapore →
            </Link>
          </p>
        </div>
      </section>

      {/* Fold 10: Areas and industries */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground leading-tight mb-3 text-center">Local SEO Across Singapore</h2>
          <p className="text-base text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We work across Singapore and track rankings district by district, from Jurong and
            Woodlands to Tampines and Bedok. See the{" "}
            <Link href="/locations/singapore" className="text-primary font-medium hover:underline">
              areas we serve in Singapore
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <svg viewBox="0 0 100 60" className="w-full h-auto" role="img" aria-label="Map of Singapore districts where Epicware tracks local rankings">
              <path
                d="M8,40 Q6,28 16,20 Q22,8 38,5 Q52,2 62,8 Q78,10 86,18 Q92,26 88,34 Q90,42 80,44 Q72,52 58,50 Q44,56 32,52 Q18,54 10,48 Z"
                fill="var(--muted)"
                stroke="var(--border)"
                strokeWidth="0.5"
              />
              {districtPins.map((d) => (
                <Link key={d.slug} href={`/locations/singapore/${d.slug}`}>
                  <g>
                    <circle cx={d.x} cy={d.y} r="1.8" fill="var(--primary)" />
                    <text x={d.x} y={d.y - 3} textAnchor="middle" fontSize="3" fill="var(--foreground)" className="font-medium">
                      {d.name}
                    </text>
                  </g>
                </Link>
              ))}
            </svg>
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-5">Industries we work with</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Link
                      key={ind.label}
                      href={ind.href}
                      className="flex flex-col items-center text-center gap-2 rounded-xl border border-border/60 bg-card p-4 hover:border-primary/30 transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-xs font-medium text-foreground/80">{ind.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fold 11: FAQ */}
      <section className="py-14 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground mb-10 leading-tight text-center">Local SEO Questions From Singapore Businesses</h2>
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
                      <Link href={item.href} className="text-primary font-medium hover:underline">{item.anchor}</Link>
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

      {/* Fold 12: Final CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/epicmap-before-after.png" alt="" fill className="object-cover blur-2xl" />
        </div>
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <h2 className="font-display font-bold mb-4">Get Your Free Local SEO Audit</h2>
          <p className="text-lg opacity-90 mb-8">
            See where you rank in your district today. We&apos;ll check your listings, citations and
            reviews, scan your keywords across your area and send you the fixes that matter most,
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-foreground font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Get My Free Audit →
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

      <MoneyPageLinkRings countrySlug="singapore" serviceSlug="local-seo" />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
