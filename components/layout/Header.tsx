"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV = {
  platform: {
    label: "Services",
    items: [
      { href: "/reputation-management-singapore", label: "Reputation Management" },
      { href: "/local-seo-singapore", label: "Local SEO Singapore" },
      { href: "/ai-search-visibility-singapore", label: "AI & GEO Visibility" },
      { href: "/growth-tools", label: "Growth Tools" },
    ],
  },
  solutions: {
    label: "Solutions",
    items: [
      { href: "/industries/restaurants", label: "F&B Restaurants" },
      { href: "/industries/healthcare-clinics", label: "Medical Clinics" },
      { href: "/industries/nail-hair-salons", label: "Hair & Beauty Salons" },
      { href: "/industries/tuition-centres", label: "Tuition Centres" },
      { href: "/services", label: "View All Industries →" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { href: "/blog", label: "Blog" },
      { href: "/resources/guides", label: "Guides" },
      { href: "/tools", label: "Free Tools" },
    ],
  },
};

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
        <div className="absolute top-full left-0 pt-2 z-50">
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 lg:px-8">
      <div
        className={`container mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 rounded-full ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-2xl border border-border/50 shadow-lg"
            : "py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/assets/epicware-logo-wide.png"
              alt="Epicware"
              width={140}
              height={36}
              className="h-8 lg:h-9 w-auto transition-all duration-500 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <DesktopDropdown {...NAV.platform} />
            <DesktopDropdown {...NAV.solutions} />
            <DesktopDropdown {...NAV.resources} />
            <Link
              href="/pricing"
              className="px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop dual CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-foreground/20 text-foreground hover:bg-muted hover:border-foreground/30 h-11 px-5 font-semibold"
            >
              <Link href="/audit">Free Audit</Link>
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
              <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l-0">
              <nav className="flex flex-col h-full bg-background">
                <div className="flex-1 p-8 pt-16 space-y-1 overflow-y-auto">
                  {Object.entries(NAV).map(([key, menu]) => (
                    <div key={key} className="border-b border-border/30">
                      <button
                        onClick={() =>
                          setExpandedMobile(expandedMobile === key ? null : key)
                        }
                        className="flex items-center justify-between w-full py-4 text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {menu.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${expandedMobile === key ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expandedMobile === key && (
                        <div className="pb-4 pl-4 space-y-2">
                          {menu.items.map((item) => (
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
                    <Link href="/audit" onClick={() => setMobileOpen(false)}>
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
