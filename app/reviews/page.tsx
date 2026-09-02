import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EPICWARE_PROVIDER } from "@/lib/seo-config";

const PLACE_ID = "ChIJIewhBnQZ2jEREYj-Xh1_JMk";
const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

// This is Epicware's own Google Business Profile rating (the specific
// place_id above) — not the same figure as EPICWARE_AGGREGATE in
// lib/seo-config.ts, which blends multiple review sources across all
// products for service-page schema. Used here as the fallback if the live
// Places fetch below is unavailable or fails.
const STATIC_RATING = { value: 5, count: 7 };

async function getLiveRating(): Promise<{ value: number; count: number; isLive: boolean }> {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!key) return { ...STATIC_RATING, isLive: false };
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${key}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.status !== "OK" || !data.result) return { ...STATIC_RATING, isLive: false };
    return {
      value: data.result.rating ?? STATIC_RATING.value,
      count: data.result.user_ratings_total ?? STATIC_RATING.count,
      isLive: true,
    };
  } catch {
    return { ...STATIC_RATING, isLive: false };
  }
}

export const metadata: Metadata = {
  title: "Epicware Reviews — Real Client Results, Verified on Google",
  description:
    "See what Epicware clients say on Google — real, verified reviews from F&B, clinics, salons, and service businesses that got found on Google, cited by AI, and chosen every time.",
  alternates: { canonical: "https://www.epicware.ai/reviews" },
  openGraph: {
    title: "Epicware Reviews — Real Client Results, Verified on Google",
    description:
      "See what Epicware clients say on Google — real, verified reviews from local businesses getting found on Google, cited by AI, and chosen every time.",
    url: "https://www.epicware.ai/reviews",
  },
};

type ReviewItem = {
  name: string;
  isLocalGuide?: boolean;
  when: string;
  text?: string;
  tag?: string;
  featured?: boolean;
  starOnly?: boolean;
};

const REVIEWS: ReviewItem[] = [
  {
    name: "Sy Lilin",
    when: "7 days ago",
    text: "We engaged Epicware for our medical aesthetic clinic and it ranked within top 3 within 1–2 months, exceeded our expectations. They are knowledgeable for SEO and google ranking. Thank u.",
    tag: "Medical Aesthetic Clinic",
  },
  {
    name: "Vasan Rajenthiran",
    when: "4 weeks ago",
    starOnly: true,
  },
  {
    name: "Simon Chan",
    isLocalGuide: true,
    when: "16 weeks ago",
    text: "Great follow up! Love the professionalism of these guys!",
    tag: "SMB Client",
  },
  {
    name: "James H",
    when: "21 weeks ago",
    text: "Honestly didn't expect results this fast. Within the first month our Google Business Profile was generating significantly more calls and website clicks across all our outlets — and we hadn't even started on review management yet.",
    tag: "Multi-Outlet Business",
  },
  {
    name: "siva bala",
    isLocalGuide: true,
    when: "21 weeks ago",
    text: "We recently worked with this website creation team to build our restaurant delivery website, and the experience was excellent from start to finish. They were easy to communicate with, understood exactly what we needed, and handled everything professionally and efficiently. The final website turned out clean, user-friendly, and perfect for our delivery operations.",
    tag: "F&B, Delivery Website",
  },
  {
    name: "Gavin NG",
    isLocalGuide: true,
    when: "21 weeks ago",
    text: "Fast, intuitive, and easy to use on any device. Since launching with Epicware, ordering has become noticeably more seamless.",
    tag: "F&B, Online Ordering",
  },
  {
    name: "Hazel Johnson",
    when: "15 weeks ago",
    text: "Standard local agencies cost SGD 3,000–5,000/month, whereas Epicware's plans start at SGD 149/month with no lock-in contracts.",
    featured: true,
  },
];

const reviewSchema = REVIEWS.map((r) => ({
  "@type": "Review",
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  author: { "@type": "Person", name: r.name },
  ...(r.text ? { reviewBody: r.text } : {}),
}));

const aggregateSchema = {
  "@context": "https://schema.org",
  ...EPICWARE_PROVIDER,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(STATIC_RATING.value),
    reviewCount: String(STATIC_RATING.count),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviewSchema,
};

export default async function ReviewsPage() {
  const rating = await getLiveRating();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Client Reviews
          </span>
          <h1
            className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Real businesses. Real rankings. Real reviews.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            No cherry-picked testimonials — this is what clients actually say on Google, unedited, after getting
            found on Google, cited by AI, and chosen every time.
          </p>

          <div className="inline-flex flex-col items-center gap-6 bg-card border border-border/60 rounded-3xl px-8 py-8 shadow-card mb-10">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <div>
              <span className="font-display font-bold text-foreground text-3xl">{rating.value.toFixed(1)}</span>
              <span className="text-muted-foreground text-base ml-2">
                from {rating.count} Google Review{rating.count === 1 ? "" : "s"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background h-13 px-7 rounded-full font-semibold">
              <Link href={WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                Write a Review
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-muted h-13 px-7 font-semibold">
              <Link href="#reviews-grid">Read the Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Reviews grid ── */}
      <section id="reviews-grid" className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {REVIEWS.filter((r) => !r.featured && !r.starOnly).map((r) => (
              <div key={r.name} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="text-[15px] text-foreground/90 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-start justify-between gap-3 pt-3 border-t border-dashed border-border">
                  <div>
                    <div className="text-[13px] font-semibold text-foreground">
                      {r.name}
                      {r.isLocalGuide && <span className="text-muted-foreground font-normal"> · Local Guide</span>}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{r.when}</div>
                  </div>
                  {r.tag && (
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-primary text-right shrink-0">
                      {r.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Compact star-only card — no written review text, don't fabricate quote copy */}
            {REVIEWS.filter((r) => r.starOnly).map((r) => (
              <div
                key={r.name}
                className="self-start bg-card border border-border/60 rounded-2xl p-6 shadow-card flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-foreground">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{r.when}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pull-quote */}
          {REVIEWS.filter((r) => r.featured).map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] px-8 py-12 lg:px-14 lg:py-14 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <blockquote className="font-display font-bold text-white text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto mb-6 text-balance">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                {r.name} · {r.when}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-secondary/15 blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-bold text-white mb-10 text-2xl lg:text-4xl text-balance">
            Get found on Google. Get cited by AI. Get chosen every time.
          </h2>
          <Button asChild className="bg-white text-foreground hover:bg-white/90 h-13 px-8 rounded-full font-semibold">
            <Link href="/free-audit" className="flex items-center gap-2">
              Get a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
