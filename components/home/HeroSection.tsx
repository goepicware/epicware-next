import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbff]">

      {/* Atmosphere gradient orbs — hidden on mobile to avoid costly blur paint */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block">
        <div className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full bg-violet-200/40 blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-teal-200/30 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-100/25 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 relative z-10">

        {/* LEFT — Headline + CTAs */}
        <div className="order-2 lg:order-1 max-w-[600px]">

          <div className="hero-fade-up mb-7" style={{ animationDelay: "0ms" }}>
            <span className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-violet-600 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
              Local SEO &amp; Reputation Platform · Singapore
            </span>
          </div>

          <h1
            className="hero-fade-up font-bold text-gray-950 leading-[1.08] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", animationDelay: "70ms" }}
          >
            Get Found on Google.
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #7C3AED 0%, #A855F7 40%, #14B8A6 100%)",
              }}
            >
              Get Cited by AI.
            </span>
            <br />
            Get Chosen Every Time.
          </h1>

          <p
            className="hero-fade-up text-[1.075rem] leading-[1.75] text-gray-500 mb-9 max-w-[460px]"
            style={{ animationDelay: "130ms" }}
          >
            Rank higher on Google Maps, get recommended by ChatGPT and AI
            search, generate more reviews, and remove bad ones — all from one
            dashboard built for local businesses in Singapore and beyond.
          </p>

          <div className="hero-fade-up flex flex-wrap gap-3 mb-10" style={{ animationDelay: "190ms" }}>
            <Link
              href="/book-demo#form"
              className="group inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-gray-950 text-white text-[0.9rem] font-semibold hover:bg-gray-800 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.26)] hover:-translate-y-px"
            >
              Book a Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>

            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border-[1.5px] border-[#185FA5] text-[#185FA5] text-[0.9rem] font-semibold bg-white hover:bg-[#185FA5] hover:text-white transition-all duration-200"
            >
              Get Your Free GBP Audit →
            </Link>
          </div>

          <div className="hero-fade-up flex items-center gap-7 flex-wrap" style={{ animationDelay: "250ms" }}>
            <div>
              <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">50+</p>
              <p className="text-[0.75rem] text-gray-400 font-medium mt-1.5 leading-none">outlets managed</p>
            </div>

            <div className="w-px h-9 bg-gray-200 shrink-0" />

            <div>
              <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">100+</p>
              <p className="text-[0.75rem] text-gray-400 font-medium mt-1.5 leading-none">reputation issues handled</p>
            </div>

            <div className="w-px h-9 bg-gray-200 shrink-0" />

            <div>
              <p className="text-[0.75rem] text-gray-400 font-medium leading-none mb-1">Built for</p>
              <p className="text-[1.9rem] font-bold text-gray-950 leading-none tracking-tight">SMBs</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Hero image */}
        <div className="hero-image-in order-1 lg:order-2" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-br from-violet-200/50 via-white/40 to-teal-200/50 blur-3xl pointer-events-none" />

            <div className="relative h-[420px] lg:h-[520px] overflow-hidden rounded-[36px]">
              <Image
                src="/assets/HeroBanner.webp"
                alt="Singapore SMB owner growing their business with Epicware"
                width={1448}
                height={1086}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-full w-full object-cover object-center"
                priority
              />

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fbfbff] via-[#fbfbff]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-teal-100/10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
