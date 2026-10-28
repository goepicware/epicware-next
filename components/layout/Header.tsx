"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site/services";
import { COUNTRIES } from "@/lib/site/countries";
import { DISTRICTS } from "@/lib/districts";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Rich Products dropdown — 4 named SaaS modules
const PRODUCTS = [
  {
    href: "/products/epicmap",
    name: "EpicMap",
    descriptor: "Rank Tracking · GBP Optimisation",
    summary: "See where you rank across every Singapore district",
  },
  {
    href: "/products/epicreview",
    name: "EpicReview",
    descriptor: "Review Management · Bad Review Removal",
    summary: "Generate reviews, respond with AI, remove bad ones",
  },
  {
    href: "/products/epicengage",
    name: "EpicEngage",
    descriptor: "Email Marketing",
    summary: "Turn one-time customers into regulars automatically",
  },
  {
    href: "/products/epicsocial",
    name: "EpicSocial",
    descriptor: "Social Scheduling · GBP Posts",
    summary: "Stay visible without living on social media",
  },
];

// Display labels for the Services menu where the marketing name differs
// from lib/site/services.ts's canonical Service.name. Hrefs and ordering
// come straight from SERVICES so this can't drift out of sync with the
// actual service list the way the old hand-written array did (it had
// "Review Management" listed twice, pointing at the same URL).
const SERVICE_NAV_LABELS: Record<string, string> = {
  seo: "SEO",
  "google-business-profile": "GBP Optimisation",
  "ai-search-visibility": "AI Search Optimisation (GEO)",
  "review-management": "Online Reputation Management",
};

// Simple dropdowns — Services, Solutions, Resources
const NAV = {
  services: {
    label: "Services",
    items: [
      ...SERVICES.map((s) => ({
        href: `/services/${s.slug}`,
        label: SERVICE_NAV_LABELS[s.slug] ?? s.name,
      })),
      { href: "/services", label: "All Services →" },
    ],
  },
  industries: {
    label: "Industries",
    items: [
      { href: "/industries/restaurants", label: "Restaurants" },
      { href: "/industries/healthcare-clinics", label: "Medical Clinics" },
      { href: "/industries/dental-clinics", label: "Dental Clinics" },
      { href: "/industries/nail-hair-salons", label: "Hair & Beauty Salons" },
      { href: "/industries/wellness-centres", label: "Spas & Wellness" },
      { href: "/industries/tuition-centres", label: "Tuition Centres" },
      { href: "/industries/car-workshops", label: "Car Workshops" },
      { href: "/industries/physiotherapy", label: "Physiotherapy" },
      { href: "/industries/retail-stores", label: "Retail Stores" },
      { href: "/industries", label: "All Industries →" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blog", label: "Blog" },
      { href: "/resources/guides", label: "Guides" },
      { href: "/tools", label: "Free Tools" },
      { href: "/ai-visibility", label: "Free AI Visibility Check" },
    ],
  },
};

// Rich 2-column Products dropdown (mirrors Intercom/Linear style)
function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50">
        Products
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-[100]">
          <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg p-2 w-[560px]">
            {/* Column headers */}
            <div className="grid grid-cols-2 gap-4 px-3 py-1.5 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                Product
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                What it does
              </span>
            </div>

            {PRODUCTS.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="grid grid-cols-2 gap-4 items-start px-3 py-2.5 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                onClick={() => setOpen(false)}
              >
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {product.descriptor}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground leading-snug pt-0.5">
                  {product.summary}
                </div>
              </Link>
            ))}

            <div className="border-t border-border/40 mt-1 pt-2 px-3 pb-1">
              <Link
                href="/products"
                className="text-xs font-semibold text-primary hover:underline"
                onClick={() => setOpen(false)}
              >
                View all products →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Rich Locations dropdown — Singapore always shows all 6 services (its
// hub is bespoke .tsx, always live). Every other country shows only the
// services that are actually live for it, driven by liveCountryServices
// (computed server-side in app/layout.tsx via getLiveCountryServices,
// since this is a client component and can't read MDX frontmatter at
// render time). A country with zero live services drops into the
// "coming soon" line instead of getting an empty column — matching the
// Choose Your Market block on every /services/{service}/ page (same
// rule, same reason — see app/services/[service]/page.tsx).
function LocationsDropdown({ liveCountryServices }: { liveCountryServices: Record<string, string[]> }) {
  const [open, setOpen] = useState(false);
  const otherCountries = COUNTRIES.filter((c) => c.slug !== "singapore");
  const liveOtherCountries = otherCountries.filter((c) => (liveCountryServices[c.slug]?.length ?? 0) > 0);
  const comingSoonCountries = otherCountries.filter((c) => (liveCountryServices[c.slug]?.length ?? 0) === 0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50">
        Locations
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-[100]">
          <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg p-4 w-[320px]">
            <div className="mb-3 last:mb-0">
              <Link
                href="/locations/singapore"
                className="block px-2 py-1.5 text-sm font-bold text-foreground hover:text-primary transition-colors rounded-lg"
                onClick={() => setOpen(false)}
              >
                Singapore
              </Link>
              <div className="grid grid-cols-2 gap-x-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/locations/singapore/${s.slug}`}
                    className="px-2 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors rounded-lg truncate"
                    onClick={() => setOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/locations/singapore"
                className="block px-2 py-1 mt-0.5 text-xs font-semibold text-primary hover:underline"
                onClick={() => setOpen(false)}
              >
                {DISTRICTS.length} Singapore districts →
              </Link>
            </div>

            {liveOtherCountries.map((country) => {
              const liveServices = SERVICES.filter((s) => liveCountryServices[country.slug]?.includes(s.slug));
              return (
                <div key={country.slug} className="mb-3 last:mb-0">
                  <Link
                    href={`/locations/${country.slug}`}
                    className="block px-2 py-1.5 text-sm font-bold text-foreground hover:text-primary transition-colors rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    {country.displayName}
                  </Link>
                  <div className="grid grid-cols-2 gap-x-2">
                    {liveServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/locations/${country.slug}/${s.slug}`}
                        className="px-2 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors rounded-lg truncate"
                        onClick={() => setOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {comingSoonCountries.length > 0 && (
              <div className="border-t border-border/40 mt-1 pt-2 px-2">
                <p className="text-xs text-muted-foreground/70 mb-1">
                  {comingSoonCountries.map((c) => c.displayName).join(", ")} — coming soon
                </p>
                <Link
                  href="/locations"
                  className="text-xs font-semibold text-primary hover:underline"
                  onClick={() => setOpen(false)}
                >
                  View all locations →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Standard simple dropdown
function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50">
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-[100]">
          <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg py-2 min-w-[240px]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-5 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header({ liveCountryServices }: { liveCountryServices: Record<string, string[]> }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile nav groups — Products as flat list with descriptor, others standard
  const mobileGroups = [
    {
      key: "products",
      label: "Products",
      items: PRODUCTS.map((p) => ({ href: p.href, label: `${p.name} — ${p.descriptor}` })),
    },
    {
      key: "services",
      label: "Services",
      items: NAV.services.items,
    },
    {
      key: "locations",
      label: "Locations",
      // Singapore's 6 services always listed; other countries only
      // contribute the services liveCountryServices actually marks live
      // (driven by the same server-computed data as the desktop
      // LocationsDropdown). "All Locations" goes to the hub index, which
      // is where the "coming soon" messaging for the rest lives.
      items: [
        { href: "/locations/singapore", label: "Singapore" },
        ...SERVICES.map((s) => ({ href: `/locations/singapore/${s.slug}`, label: `${s.name} — Singapore` })),
        ...COUNTRIES.filter((c) => c.slug !== "singapore").flatMap((c) =>
          SERVICES.filter((s) => liveCountryServices[c.slug]?.includes(s.slug)).map((s) => ({
            href: `/locations/${c.slug}/${s.slug}`,
            label: `${s.name} — ${c.displayName}`,
          }))
        ),
        { href: "/locations", label: "All Locations →" },
      ],
    },
    {
      key: "industries",
      label: "Industries",
      items: NAV.industries.items,
    },
    {
      key: "resources",
      label: "Resources",
      items: NAV.resources.items,
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] py-4 px-4 lg:px-8 transition-all duration-700 ${scrolled ? "backdrop-blur-2xl" : ""}`}>
      <div
        className={`container mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 rounded-full ${
          scrolled
            ? "py-3 bg-background/80 border border-border/50 shadow-lg"
            : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/assets/epicware-logo-wide.png"
              alt="Epicware, AI-powered digital marketing agency in Singapore"
              width={140}
              height={36}
              className="h-8 lg:h-9 w-auto transition-all duration-500 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <ProductsDropdown />
            <DesktopDropdown {...NAV.services} />
            <LocationsDropdown liveCountryServices={liveCountryServices} />
            <DesktopDropdown {...NAV.industries} />
            <Link
              href="/pricing"
              className="px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50"
            >
              Pricing
            </Link>
            {/* Reviews link lives in the footer only, not primary nav */}
            <DesktopDropdown {...NAV.resources} />
          </nav>

          {/* Desktop dual CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-foreground/20 text-foreground hover:bg-muted hover:border-foreground/30 h-11 px-5 font-semibold"
            >
              <Link href="/free-audit">Free Audit</Link>
            </Button>
            <Button
              asChild
              className="bg-foreground hover:bg-foreground/90 text-background h-11 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-dramatic group"
            >
              <Link href="/book-demo#form" className="flex items-center gap-2">
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l-0">
              <nav className="flex flex-col h-full bg-background">
                <div className="flex-1 p-8 pt-6 space-y-1 overflow-y-auto">
                  {mobileGroups.map(({ key, label, items }) => (
                    <div key={key} className="border-b border-border/30">
                      <button
                        onClick={() =>
                          setExpandedMobile(expandedMobile === key ? null : key)
                        }
                        className="flex items-center justify-between w-full py-4 text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${expandedMobile === key ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedMobile === key && (
                        <div className="pb-4 pl-4 space-y-2">
                          {items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-lg text-foreground/60 hover:text-foreground transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/pricing"
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors border-b border-border/30"
                  >
                    Pricing
                  </Link>
                </div>
                <div className="p-8 border-t border-border/30 flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-foreground/20 text-foreground hover:bg-muted h-14 font-semibold text-lg"
                  >
                    <Link href="/free-audit" onClick={() => setMobileOpen(false)}>
                      Free Audit
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-foreground text-background h-14 rounded-full font-semibold text-lg"
                  >
                    <Link href="/book-demo#form" onClick={() => setMobileOpen(false)}>
                      Book a Call →
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
