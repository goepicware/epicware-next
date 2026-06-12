import type { ReactNode } from "react";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import TableOfContents from "@/components/blog/TableOfContents";

interface BlogArticleProps {
  schema: Record<string, unknown>;
  dateModified?: string;
  ogImage?: string;
  badge: string;
  h1: string;
  publishDate: string;
  readTime: string;
  intro: ReactNode;
  body: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  ctaContext: ReactNode;
  relatedPosts: { title: string; href: string }[];
}

export default function BlogArticle({
  schema,
  dateModified,
  ogImage,
  badge,
  h1,
  publishDate,
  readTime,
  intro,
  body,
  ctaHref,
  ctaLabel,
  ctaContext,
  relatedPosts,
}: BlogArticleProps) {
  const datePublished = schema.datePublished as string | undefined;
  const publisher = schema.publisher as Record<string, unknown> | undefined;
  const schemaUrl = (schema.url as string | undefined)?.replace(
    "https://epicware.ai/",
    "https://www.epicware.ai/"
  );

  const enhancedSchema = {
    ...schema,
    "@type": "BlogPosting",
    url: schemaUrl,
    dateModified: dateModified ?? datePublished,
    ...(ogImage
      ? { image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 } }
      : {}),
    publisher: {
      ...publisher,
      logo: {
        "@type": "ImageObject",
        url: "https://www.epicware.ai/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }}
      />

      {/* Hero — full-width dark gradient header */}
      <section className="hero-gradient pt-28 pb-14">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary tracking-widest uppercase mb-6">
            {badge}
          </div>

          {/* H1 */}
          <h1 className="font-display font-bold text-foreground mb-6 leading-tight max-w-3xl">
            {h1}
          </h1>

          {/* Meta bar: author · date · read time */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {/* Author */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/15 text-primary font-bold text-xs shrink-0">
                E
              </span>
              <span className="font-medium text-foreground/80">Epicware Team</span>
            </div>
            <span className="text-border/60">·</span>
            {/* Date */}
            <span>{publishDate}</span>
            <span className="text-border/60">·</span>
            {/* Read time */}
            <span>{readTime}</span>
            <span className="text-border/60">·</span>
            {/* Back to blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
            >
              {badge}
            </Link>
          </div>
        </div>
      </section>

      {/* Article body — 2-column on desktop (article + sticky TOC) */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex gap-12 items-start">
            {/* ── Main content column ── */}
            <div className="flex-1 min-w-0">
              {/* Intro */}
              <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                {intro}
              </div>

              {/* Body */}
              <div
                className="prose prose-lg max-w-none text-muted-foreground
                  [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:scroll-mt-24
                  [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:scroll-mt-24
                  [&_p]:leading-relaxed [&_p]:mb-4
                  [&_ul]:space-y-2 [&_ul]:mb-4
                  [&_ol]:space-y-2 [&_ol]:mb-4
                  [&_li]:leading-relaxed
                  [&_strong]:text-foreground [&_strong]:font-semibold
                  [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline
                  [&_figure]:my-8 [&_figcaption]:text-xs [&_figcaption]:text-center [&_figcaption]:text-muted-foreground [&_figcaption]:mt-2"
              >
                {body}
              </div>

              {/* Inline CTA */}
              <div className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
                <p className="text-base text-foreground mb-4">{ctaContext}</p>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
                >
                  {ctaLabel} →
                </Link>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-5">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card px-4 py-3.5 hover:border-primary/30 hover:bg-primary/3 transition-all duration-200"
                      >
                        <span className="text-primary mt-0.5 shrink-0">→</span>
                        <span className="text-sm text-foreground/80 font-medium leading-snug group-hover:text-primary transition-colors">
                          {p.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── TOC sidebar (desktop only) ── */}
            <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
              <div className="sticky top-24 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </article>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
