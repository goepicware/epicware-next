import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  products: {
    heading: "Products",
    items: [
      { href: "/products/epicmap", label: "EpicMap — Rank Tracking" },
      { href: "/products/epicreview", label: "EpicReview — Reviews" },
      { href: "/products/epicengage", label: "EpicEngage — Email" },
      { href: "/products/epicsocial", label: "EpicSocial — Social" },
      { href: "/products", label: "All Products" },
    ],
  },
  services: {
    heading: "Services",
    items: [
      { href: "/free-audit", label: "Free Local SEO Audit" },
      { href: "/ai-visibility", label: "Free AI Search Audit" },
      { href: "/reputation-management-singapore", label: "Reputation Management" },
      { href: "/local-seo-singapore", label: "Local SEO Services" },
      { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
      { href: "/growth-tools", label: "Growth Tools" },
      { href: "/bad-review-removal-singapore", label: "Bad Review Removal" },
      { href: "/remove-review", label: "Remove a Bad Review" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  solutions: {
    heading: "Solutions",
    items: [
      { href: "/industries/restaurants", label: "F&B Restaurants" },
      { href: "/industries/healthcare-clinics", label: "Medical Clinics" },
      { href: "/industries/nail-hair-salons", label: "Hair & Beauty Salons" },
      { href: "/industries/tuition-centres", label: "Tuition Centres" },
      { href: "/industries/dental-clinics", label: "Dental Clinics" },
      { href: "/industries/car-workshops", label: "Car Workshops" },
      { href: "/industries", label: "All Industries" },
    ],
  },
  company: {
    heading: "Company",
    items: [
      { href: "/about", label: "About" },
      { href: "/reseller", label: "Reseller Programme" },
      { href: "/creators", label: "Become a Creator" },
      { href: "/blog", label: "Blog" },
      { href: "/resources/guides", label: "Guides" },
      { href: "/tools", label: "Free Tools" },
      { href: "/local-growth", label: "Local Growth Platform" },
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
  compare: {
    heading: "Compare",
    items: [
      { href: "/comparison/epicware-vs-birdeye", label: "vs Birdeye" },
      { href: "/comparison/epicware-vs-brightlocal", label: "vs BrightLocal" },
      { href: "/comparison/epicware-vs-gradeus", label: "vs Grade.us" },
      { href: "/comparison/epicware-vs-yext", label: "vs Yext" },
      { href: "/comparison/epicreview-vs-qr-code-review", label: "vs QR Code Reviews" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-background overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-primary/3 via-secondary/2 to-transparent blur-[100px]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-accent/3 via-transparent to-transparent blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand column */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-8 group">
              <Image
                src="/assets/epicware-logo.png"
                alt="Epicware"
                width={120}
                height={48}
                className="h-12 w-auto transition-all duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Local SEO & Reputation Management Platform for Local SMBs, Everywhere.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@epicware.ai"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors duration-300 group"
              >
                hello@epicware.ai
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="https://share.google/K1DfMHlISqq4rUWnp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Object.entries(FOOTER_LINKS).map(([key, col]) => (
                <div key={key}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                    {col.heading}
                  </h4>
                  <ul className="space-y-4">
                    {col.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2026 Epicware Pte Ltd — Local SEO & Reputation Management Platform
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
