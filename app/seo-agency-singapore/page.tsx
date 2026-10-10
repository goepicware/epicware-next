import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  MapPinOff,
  EyeOff,
  Star,
  Search,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Award,
  Users,
  Target,
  FileSearch,
  Code2,
  PenTool,
  Link2,
  Store,
  Clock,
  BarChart3,
  Building2,
  Quote,
  XCircle,
  TrendingUp,
} from "lucide-react";
import CitationWall from "@/components/shared/CitationWall";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { PLANS, formatPrice } from "@/lib/pricing-data";
import { isPriceIncreaseLive, PRICE_INCREASES } from "@/lib/price-increase";

const CANONICAL = "https://www.epicware.ai/seo-agency-singapore";

export const metadata: Metadata = {
  title: { absolute: "Best SEO Agency in Singapore | AI-Powered | Epicware" },
  description:
    "Epicware is an AI-powered SEO agency in Singapore. Our SEO services rank you on Google, Google Maps and AI search, with live data and dated proof.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Best SEO Agency in Singapore | AI-Powered | Epicware",
    description:
      "Epicware is an AI-powered SEO agency in Singapore. Our SEO services rank you on Google, Google Maps and AI search, with live data and dated proof.",
    url: CANONICAL,
    images: [
      {
        url: "https://www.epicware.ai/assets/workflow/heatmap-ranking.png",
        width: 1200,
        height: 630,
        alt: "Epicware SEO agency in Singapore live ranking dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Agency in Singapore | AI-Powered | Epicware",
    description:
      "Epicware is an AI-powered SEO agency in Singapore. Our SEO services rank you on Google, Google Maps and AI search, with live data and dated proof.",
  },
};

// Live plan data — never hardcode prices.
const live = isPriceIncreaseLive();
const effectivePlans = PLANS.map((plan) => {
  const increase = PRICE_INCREASES[plan.name];
  if (live && increase) {
    return { ...plan, monthlyPrice: increase.newMonthly, annualPrice: increase.newAnnual };
  }
  return plan;
});

function planHasFeature(planName: string, needle: string): boolean {
  const plan = effectivePlans.find((p) => p.name === planName);
  if (!plan) return false;
  if (plan.features.some((f) => (typeof f === "string" ? f : f.label).toLowerCase().includes(needle))) {
    return true;
  }
  const inherited = effectivePlans.find((p) => plan.subtitle.includes(`Everything in ${p.name}`));
  return inherited ? planHasFeature(inherited.name, needle) : false;
}
const plansWithWebsiteSEO = effectivePlans.filter((p) => planHasFeature(p.name, "website seo"));

const CREDENTIALS = [
  { icon: Users, label: "50+ outlets managed" },
  { icon: Award, label: "Founded by the NinjaOS team ($120M GMV, exited 2021)" },
  { icon: Star, label: "5.0★ on Google" },
  { icon: Globe, label: "Active in SG · MY · UAE · UK · US" },
];

const PAIN_CARDS = [
  {
    icon: FileText,
    title: "You Get a Monthly PDF, Not Live Data",
    body: "Most SEO agencies send a report once a month. We run EpicMap, our own rank-tracking dashboard, and you see the same screen we work from, updated every week.",
  },
  {
    icon: MapPinOff,
    title: "Google Maps Is Treated as Someone Else's Job",
    body: "Many SEO agencies only chase website rankings. Google Maps is core to our SEO services, with district-level rank grids for every outlet you run.",
  },
  {
    icon: EyeOff,
    title: "AI Search Is Invisible to Them",
    body: "ChatGPT and Google AI Overviews are already naming businesses by name. Most agencies aren't tracking it. We audit, fix and monitor your AI visibility monthly.",
  },
  {
    icon: Star,
    title: "One Fake 1-Star Review Can Undo Months of SEO",
    body: "A single policy-breaking review can outweigh months of ranking work. Our bad review removal service identifies the violation and escalates it for you.",
  },
];

const SEARCH_SURFACES = [
  {
    icon: Search,
    name: "Google Search Results",
    body: "Technical health, helpful content and the right links decide who ranks on Google — and which pages get seen first.",
  },
  {
    icon: MapPin,
    name: "Google Maps and the Local Pack",
    body: "Your Google Business Profile, distance to the searcher and review signals decide who makes the top three on Maps.",
  },
  {
    icon: Sparkles,
    name: "AI Overviews, ChatGPT and Gemini",
    body: "AI tools name businesses they can verify across trusted sources — consistent facts, clear entities and real citations.",
  },
  {
    icon: Star,
    name: "Reviews and Ratings",
    body: "Reviews are the last check before someone calls, books or walks in — and the easiest thing for a competitor to attack.",
  },
];

const SERVICES = [
  {
    icon: Target,
    name: "SEO Strategy and Keyword Research",
    body: (
      <>
        We map the buyer-intent keywords worth targeting, find the gaps your competitors have left open, and assign
        one target keyword per page — so your own pages never end up competing against each other on the same
        search.
      </>
    ),
  },
  {
    icon: FileSearch,
    name: "SEO Audit",
    body: (
      <>
        A full technical, content, backlink, Google Maps and AI-crawlability audit, with every fix ranked by the
        impact it will have on your rankings. Start with a{" "}
        <Link href="/free-audit" className="text-primary font-medium hover:underline">
          free SEO audit
        </Link>
        .
      </>
    ),
  },
  {
    icon: Code2,
    name: "Technical SEO",
    body: "Crawlability, indexing, Core Web Vitals, mobile performance, schema markup, redirects, sitemaps and JavaScript rendering — the technical foundation that lets Google find and trust your site.",
  },
  {
    icon: PenTool,
    name: "On-Page SEO",
    body: "Titles, meta descriptions, headings, internal links, search intent and image alt text, all built around a clear conversion path so visitors don't just read — they call, book or buy.",
  },
  {
    icon: FileText,
    name: "SEO Content and Blogs",
    body: (
      <>
        Service pages, location pages, industry pages, FAQs and guides, written around the questions your customers
        actually search for and approved by you before anything goes live. See{" "}
        <Link href="/blog" className="text-primary font-medium hover:underline">
          our blog
        </Link>
        .
      </>
    ),
  },
  {
    icon: Link2,
    name: "Link Building and Digital PR",
    body: (
      <>
        Relevant local links, directory listings, digital PR and brand mentions — never bought links or link farms.
        Find your own opportunities with our{" "}
        <Link href="/tools/backlink-opportunity-finder" className="text-primary font-medium hover:underline">
          free backlink opportunity finder
        </Link>
        .
      </>
    ),
  },
  {
    icon: MapPin,
    name: "Local SEO and Google Business Profile",
    body: (
      <>
        The Google Maps 3-Pack, full profile optimisation, citation consistency and district-level rank grids. See
        our{" "}
        <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
          local SEO services
        </Link>{" "}
        and{" "}
        <Link href="/local-seo-singapore/gbp-optimisation" className="text-primary font-medium hover:underline">
          Google Business Profile optimisation
        </Link>
        .
      </>
    ),
  },
  {
    icon: Sparkles,
    name: "AI SEO and GEO",
    body: (
      <>
        Entity clarity, schema, citable answers and third-party mentions built for AI Overviews, ChatGPT, Gemini and
        Perplexity. See our{" "}
        <Link href="/ai-search-visibility-singapore" className="text-primary font-medium hover:underline">
          AI search optimisation (GEO)
        </Link>
        .
      </>
    ),
  },
  {
    icon: ShieldCheck,
    name: "Reviews and Reputation",
    body: (
      <>
        Review generation, a reply to every review, and policy-breaking reviews challenged and removed. See{" "}
        <Link href="/review-management-singapore" className="text-primary font-medium hover:underline">
          Google review management
        </Link>{" "}
        and{" "}
        <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
          online reputation management
        </Link>
        .
      </>
    ),
  },
  {
    icon: Store,
    name: "Multi-Location SEO",
    body: (
      <>
        Keywords, rank tracking and reporting broken out per outlet, for chains and groups of any size. See{" "}
        <Link href="/use-cases/manage-multiple-gbp-locations" className="text-primary font-medium hover:underline">
          managing multiple Google Business Profiles
        </Link>
        .
      </>
    ),
  },
];

const COMPARISON_ROWS = [
  { label: "Reporting", agency: "Monthly PDF", epicware: "Live dashboard, 24/7" },
  { label: "Google Maps", agency: "Add-on or ignored", epicware: "Grid rank tracking by district" },
  {
    label: "AI search (GEO)",
    agency: "Rarely offered",
    epicware: "Audit, implementation, monthly citation monitoring",
  },
  {
    label: "Reputation",
    agency: "Not offered",
    epicware: "Review generation, AI responses, bad review removal",
  },
  { label: "Pricing", agency: "“It depends” — hidden until a sales call", epicware: "Published plans, see /pricing" },
  { label: "Time to first results", agency: "Months of onboarding", epicware: "Core setup delivered in 30 days" },
  { label: "Commitment", agency: "Long lock-in contracts", epicware: "Cancel with 30 days' notice" },
];

const WONT_DO = [
  "No ranking guarantees",
  "No bought links or link farms",
  "No fake or incentivised reviews",
  "No review gating",
  "No long lock-in contracts",
  "No vanity keyword reports",
];

const CASE_STUDIES = [
  {
    tag: "Medical Aesthetics · 2 outlets",
    title: "Top 3 in 60 Days: How a Singapore Medical Aesthetic Clinic Won Orchard and Hougang",
    stats: ["#1 Map Pack, Hougang", "#1 ChatGPT recommendation, Orchard", "+25% calls & enquiries"],
    href: "/case-studies/aesthetic-clinic-seo-singapore",
  },
  {
    tag: "F&B · 5 outlets",
    title: "How a 5-Outlet Singapore Restaurant Chain Became the Answer on Google Maps, Search and AI Overviews",
    stats: ["+24.1% organic traffic", "13.6K organic clicks", "17.3K AI Overview impressions"],
    href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
  },
  {
    tag: "Hair Salons · 4 outlets",
    title: "How a Singapore Salon Chain Grew to 150+ Reviews and Ranked in the Top 3",
    stats: ["Rank 7 → Top 3", "30 → 150+ reviews per outlet"],
    href: "/case-studies/salon-whatsapp-automation",
  },
  {
    tag: "F&B · 6 outlets",
    title: "How a Singapore Restaurant Group Grew to 200+ Reviews Per Outlet",
    stats: ["45 → 200+ reviews per outlet", "Centralised multi-outlet dashboard"],
    href: "/case-studies/restaurant-multi-outlet-growth-singapore",
  },
  {
    tag: "Healthcare · Multi-clinic",
    title: "How a Singapore Clinic Network Raised Their Google Rating to 4.7",
    stats: ["3 fake reviews removed", "3.8 → 4.7 rating"],
    href: "/case-studies/clinic-review-growth-singapore",
  },
];

const ROADMAP = [
  {
    icon: Clock,
    title: "First 30 Days: Audit, Access and Quick Wins",
    body: "Access to your Google Business Profile, Analytics, Search Console and website. A full SEO, Maps and AI audit. A keyword map, rank tracking set up, and your first fixes live.",
  },
  {
    icon: Target,
    title: "Months 2–3: Foundation",
    body: "Technical fixes, on-page optimisation, priority service pages, weekly GBP posts, citation building and review requests — the groundwork every later gain is built on.",
  },
  {
    icon: TrendingUp,
    title: "Months 4–6: Authority",
    body: "Content clusters, link building and digital PR, AI citation work, and internal linking that passes authority between your pages.",
  },
  {
    icon: Sparkles,
    title: "Months 7–12: Expansion",
    body: "New keywords, new location and industry pages, a bigger share of AI answers, and ongoing conversion improvements as traffic compounds.",
  },
];

const REPORTING_KPIS = [
  "Keyword rankings",
  "Google Maps rank by district",
  "Organic traffic",
  "Calls and direction requests",
  "Enquiries and form fills",
  "AI citations",
  "Review count and rating",
];

const INDUSTRIES = [
  { name: "Restaurants and F&B", href: "/industries/restaurants" },
  { name: "Medical Clinics", href: "/industries/healthcare-clinics" },
  { name: "Dental Clinics", href: "/industries/dental-clinics" },
  { name: "Hair and Beauty Salons", href: "/industries/nail-hair-salons" },
  { name: "Spas and Wellness Centres", href: "/industries/wellness-centres" },
  { name: "Physiotherapy Clinics", href: "/industries/physiotherapy" },
  { name: "Tuition Centres", href: "/industries/tuition-centres" },
  { name: "Car Workshops", href: "/industries/car-workshops" },
  { name: "Retail Stores", href: "/industries/retail-stores" },
];

const CLIENT_REVIEWS = [
  {
    name: "Sy Lilin",
    tag: "Medical Aesthetic Clinic",
    text: "We engaged Epicware for our medical aesthetic clinic and it ranked within top 3 within 1–2 months, exceeded our expectations. They are knowledgeable for SEO and google ranking.",
  },
  {
    name: "James H",
    tag: "Multi-Outlet Business",
    text: "Honestly didn't expect results this fast. Within the first month our Google Business Profile was generating significantly more calls and website clicks across all our outlets.",
  },
  {
    name: "Hazel Johnson",
    tag: "SMB Client",
    text: "Standard local agencies cost SGD 3,000–5,000/month, whereas Epicware's plans start at SGD 299/month with no lock-in contracts.",
  },
];

const RESOURCES = [
  { title: "How to Hire a Local SEO Agency in Singapore", href: "/blog/how-to-hire-local-seo-agency-singapore" },
  { title: "SEO vs Local SEO: Which Do You Need?", href: "/blog/seo-vs-local-seo" },
  { title: "What Is SEO? A Plain-English Guide", href: "/blog/what-is-seo-local-business" },
  { title: "Google Maps Ranking Factors in Singapore", href: "/blog/google-maps-ranking-factors" },
  { title: "Free Backlink Opportunity Finder", href: "/tools/backlink-opportunity-finder" },
  { title: "Free AI Visibility Checker", href: "/ai-visibility" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What does an SEO agency in Singapore do?",
    a: "An SEO agency handles strategy, technical SEO, content, link building, local SEO, AI search optimisation and reporting — ideally from one team, not several hand-offs. Epicware does all of this on the same software you can see live.",
  },
  {
    q: "How much does SEO cost in Singapore?",
    a: "Cost depends on how many outlets you run, how competitive your keywords are, and which channels you need covered. See our SEO plans at /pricing for exact pricing.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Google Maps rankings often move within 4–8 weeks. Organic rankings typically take 3–6 months. Competitive keywords can take 6–12 months. Our dated case studies above show real timelines, not estimates.",
  },
  {
    q: "What is the difference between an SEO agency, an SEO company and an SEO consultant?",
    a: "An SEO agency or SEO company is a team that does the work for you. A consultant advises and audits but doesn't usually execute. Epicware is an agency — our team does the work, on our own software.",
  },
  {
    q: "How do I choose the best SEO agency in Singapore?",
    a: "Look for live data instead of a monthly PDF, dated proof instead of vague claims, coverage of Maps, AI search and reviews alongside Google, no long lock-in, real references, and a clear list of what they won't do.",
  },
  {
    q: "Can an SEO agency guarantee first-page rankings?",
    a: "No. Rankings depend on competition and Google's own algorithm, and any agency promising a guarantee is misleading you. What a good agency can promise is a transparent process, dated proof of past results, and live reporting.",
  },
  {
    q: "What is the difference between SEO and GEO?",
    a: "SEO wins rankings in Google's organic results. GEO (generative engine optimisation) wins citations in AI answers like ChatGPT and Google AI Overviews. See our GEO services at /ai-search-visibility-singapore.",
  },
  {
    q: "Can SEO get my business recommended by ChatGPT or Google AI Overviews?",
    a: "SEO work strengthens the entity and content signals AI tools rely on, which improves your odds — but no one can guarantee a specific AI citation. Our dated proof above shows real AI Overview and ChatGPT results we've achieved.",
  },
  {
    q: "Should I start with SEO or Google Ads?",
    a: "Google Ads brings leads immediately but stops the moment you stop paying. SEO takes longer to build but compounds over time. Many Singapore businesses run both together, especially in the first few months.",
  },
  {
    q: "Do I need a new website for SEO?",
    a: "Not always. Our SEO audit decides this — many sites just need technical fixes and better content, not a rebuild. We'll tell you honestly if a rebuild would actually move the needle.",
  },
  {
    q: "Is SEO worth it for small businesses in Singapore?",
    a: "Yes, when your customers search before they buy — which covers most local businesses. Local SEO, focused on Google Maps, is usually the fastest return for a small business with one or two outlets.",
  },
  {
    q: "Do you work with multi-outlet businesses?",
    a: "Yes. Every outlet gets its own keyword strategy, rank tracking and reporting, all managed from one Epicware dashboard — whether you run two outlets or twenty.",
  },
  {
    q: "Is Epicware an SEO agency or a software company?",
    a: "Both. Our team does the SEO work, and you get access to the same EpicMap and EpicReview software we use to do it — so every ranking, review and AI citation stays visible to you, live.",
  },
  {
    q: "Can you remove bad Google reviews?",
    a: "We remove reviews that break Google's own policies — fake, spam, conflict-of-interest or off-topic. You pay $200 per review upfront, refunded in full if it isn't removed within 3 months. Our removal success rate is 94%.",
  },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Singapore",
  serviceType: "Search engine optimisation",
  url: CANONICAL,
  provider: { "@id": "https://www.epicware.ai/#organization" },
  areaServed: { "@type": "Country", name: "Singapore" },
  description:
    "AI-powered SEO services in Singapore covering technical SEO, on-page SEO, content, link building, local SEO, Google Business Profile and AI search optimisation.",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.epicware.ai" },
    { "@type": "ListItem", position: 2, name: "SEO Agency Singapore", item: CANONICAL },
  ],
};

export default function SeoAgencySingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      {/* Fold 1 · Hero */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            AI-POWERED SEO AGENCY · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            SEO Agency in Singapore: Get Found on Google, Maps and AI Search
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We are an AI-powered SEO agency in Singapore. Our SEO services cover Google rankings, Google Maps, AI
            search and reviews — and you see every ranking live in our own software, with dated proof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get My Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {CREDENTIALS.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.label}
                  className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-4 py-3 shadow-card"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/80">{cred.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 2 · Pain points */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12 max-w-2xl mx-auto">
            What Most SEO Agencies in Singapore Won&apos;t Tell You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PAIN_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-card border border-border/60 rounded-2xl p-6">
                  <Icon className="w-6 h-6 text-loss mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 3 · Why SEO now means Google, Maps and AI */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-6 max-w-3xl mx-auto">
            Why SEO in Singapore Now Means Google, Maps and AI Search
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Singapore customers check several places before they call: Google results, Google Maps, AI answers and
            reviews. Rankings also change street by street in a city this dense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEARCH_SURFACES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="bg-card border border-border/60 rounded-2xl p-6">
                  <Icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 4 · Our SEO Services */}
      <section id="seo-services" className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-6">Our SEO Services in Singapore</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Everything below is done by our team and tracked live on our own software. Most clients combine several
            of these.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="bg-card border border-border/60 rounded-2xl p-6">
                  <Icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fold 5 · Proof wall */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10 text-center mx-auto">
            <h2 className="font-display font-bold text-foreground">SEO Results With Dates, Not Promises</h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Every card is a live screenshot captured 30–60 days after the client started.
            </p>
          </div>
        </div>

        <CitationWall ctaHref="/free-audit" hideIntro />

        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-premium bg-muted aspect-[4/3]">
              <Image
                src="/assets/workflow/heatmap-ranking.png"
                alt="EpicMap live rank grid showing keyword rankings by district"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                This is what clients see: live rank by keyword and district, every week.
              </p>
              <Link href="/case-studies" className="text-sm font-semibold text-primary hover:underline">
                See how this looks for your business →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fold 6 · Case study slider */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-6">
            SEO Case Studies From Singapore Businesses
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Read exactly what we did and the numbers it produced.
          </p>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:mx-0 lg:px-0">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="group shrink-0 w-[300px] snap-start lg:w-auto bg-card border border-border/60 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-card transition-all duration-300"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{cs.tag}</span>
                <h3 className="font-display font-semibold text-foreground text-base mb-4 leading-snug group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {cs.stats.map((stat) => (
                    <li key={stat} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      {stat}
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 mt-auto">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/case-studies" className="text-sm font-semibold text-primary hover:underline">
              See all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 7 · Why Epicware */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">
            Why Businesses Choose Epicware as Their SEO Agency in Singapore
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60 mb-14">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-foreground">
                    &nbsp;
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-muted-foreground">
                    Typical SEO agency
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold text-primary bg-primary/5">
                    Epicware
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? "bg-muted/10" : ""}>
                    <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">{row.label}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.agency}</td>
                    <td className="px-5 py-4 text-foreground font-medium bg-primary/5">{row.epicware}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <BarChart3 className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                Live Rankings, Not a Monthly PDF
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clients see the same{" "}
                <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                  EpicMap
                </Link>{" "}
                dashboard our team uses.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <Target className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                Keywords Chosen for Leads, Not Volume
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Buyer-intent searches first — rankings that bring customers, not just traffic.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <Sparkles className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                Google, Maps, AI Search and Reviews in One Plan
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No hand-offs between agencies — one team covers every surface customers use to find you.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <Award className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
              <h3 className="font-display font-semibold text-foreground text-base mb-2">
                Built by Operators Who Grew Local Businesses
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Founded by the team behind NinjaOS, an F&amp;B SaaS platform that processed over $120M in GMV before
                its 2021 exit.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border/60 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-display font-semibold text-foreground text-base mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-loss" aria-hidden="true" /> What We Won&apos;t Do
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WONT_DO.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-loss shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fold 8 · 12-month roadmap */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">Our 12-Month SEO Roadmap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {ROADMAP.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-card border border-border/60 rounded-2xl p-6">
                  <Icon className="w-6 h-6 text-primary mb-4" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Realistic timing: Google Maps rankings often move within 4–8 weeks, organic rankings in 3–6 months, and
            competitive keywords in 6–12 months.
          </p>
        </div>
      </section>

      {/* Fold 9 · Reporting */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">How We Report SEO Results</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-premium bg-muted aspect-[4/3]">
              <Image
                src="/assets/workflow/reputation-dashboard.png"
                alt="Epicware live SEO and reputation dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">The KPIs We Track</h3>
                <ul className="flex flex-wrap gap-2">
                  {REPORTING_KPIS.map((kpi) => (
                    <li key={kpi} className="text-xs font-medium bg-muted px-3 py-1.5 rounded-full text-foreground/80">
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">Your Live SEO Dashboard</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The same{" "}
                  <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                    EpicMap
                  </Link>{" "}
                  and{" "}
                  <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                    EpicReview
                  </Link>{" "}
                  screens our team works in, available to you 24/7.
                </p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">A Monthly Strategy Review</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  What moved, why, and what we do next — in plain English, not jargon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fold 10 · Industries */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-6">SEO for Your Industry</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            The searches that bring customers differ by industry, so the keyword plan does too.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group bg-card border border-border/60 rounded-2xl p-5 flex items-center gap-3 hover:border-primary/40 hover:shadow-card transition-all duration-300"
              >
                <Building2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  SEO for {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 11 · Pricing */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">How Much Does SEO Cost in Singapore?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto">
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-base mb-2">What Affects SEO Pricing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Number of outlets, keyword competition, the state of your website, and which channels you need —
                Google, Maps, AI search, reviews.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-base mb-2">How to Compare SEO Quotes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                What&apos;s delivered each month, how results are reported, contract length, and who owns the content
                and accounts afterwards.
              </p>
            </div>
          </div>

          <h3 className="font-display font-semibold text-foreground text-center text-xl mb-8">Our SEO Plans</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {effectivePlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border bg-card p-6 flex flex-col ${
                  plan.highlight ? "border-primary/40" : "border-border/60"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`self-start mb-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      plan.highlight ? "bg-primary text-white" : "bg-foreground text-background"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <h4 className="font-display font-bold text-foreground text-xl mb-1">{plan.name}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-snug">{plan.subtitle}</p>
                <div className="mb-6">
                  <span className="font-display font-bold text-3xl text-foreground">
                    ${formatPrice(plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">/mo</span>
                </div>
                <Link
                  href="/book-demo#form"
                  className={`inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 mt-auto ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Book Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mb-6">
            Website SEO is included from {plansWithWebsiteSEO[0]?.name} upward.
          </p>
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              See what our SEO plans include <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 12 · Fit */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">Who Our SEO Services Are Built For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Built for
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multi-outlet and local service businesses — F&amp;B, medical and dental clinics, salons, wellness,
                car workshops, tuition centres, retail — plus B2B service firms that win locally.
              </p>
            </div>
            <div className="bg-card border border-border/60 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">Not the right fit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Large e-commerce catalogues needing product-level SEO at scale, and enterprise international SEO
                programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fold 13 · Client reviews */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">What Our SEO Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {CLIENT_REVIEWS.map((r) => (
              <div key={r.name} className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4">
                <Quote className="w-5 h-5 text-primary" aria-hidden="true" />
                <p className="text-sm text-foreground/90 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="text-xs text-muted-foreground pt-3 border-t border-dashed border-border">
                  <span className="font-semibold text-foreground">{r.name}</span> · {r.tag}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="text-sm font-semibold text-primary hover:underline">
              Read all client reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Fold 15 · Resources */}
      <section className="section-gradient-2 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display font-bold text-foreground text-center mb-12">Free SEO Guides and Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group bg-card border border-border/60 rounded-2xl p-5 hover:border-primary/40 hover:shadow-card transition-all duration-300"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {r.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 16 · FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-8 text-center">
            SEO Agency Singapore: Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="font-semibold text-foreground text-sm mb-2">{q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fold 17 · Final CTA */}
      <section className="section-gradient-1 py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            See Exactly Where You&apos;re Losing Customers on Google, Maps and AI
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A free audit from an SEO agency in Singapore of your Google rankings, Maps visibility, AI search presence
            and reviews. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get My Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border/60 text-foreground font-semibold text-sm hover:bg-muted/50 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            50+ outlets managed · 6 dated #1 results · 5 published case studies · 5 markets
          </p>
        </div>
      </section>

      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
