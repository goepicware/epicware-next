import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

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
      { href: "/audit-landing", label: "Free Local SEO Audit 🎯" },
      { href: "/reputation-management-singapore", label: "Reputation Management" },
      { href: "/local-seo-singapore", label: "Local SEO Services" },
      { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
      { href: "/growth-tools", label: "Growth Tools" },
      { href: "/bad-review-removal-singapore", label: "Bad Review Removal ⭐" },
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
      { href: "/blog", label: "Blog" },
      { href: "/resources/guides", label: "Guides" },
      { href: "/tools", label: "Free Tools" },
      { href: "/local-growth", label: "Local Growth Platform" },
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
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
              Local SEO & Reputation Management Platform for Singapore SMBs.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.youtube.com/@EpicwareAI/shorts", label: "YouTube", Icon: YoutubeIcon },
                  { href: "https://www.instagram.com/epicwareai/", label: "Instagram", Icon: InstagramIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Epicware ${label}`}
                    className="text-muted-foreground/70 hover:text-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
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
