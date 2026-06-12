import type { ReactNode } from "react";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

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

export default function BlogArticle({ schema, dateModified, ogImage, badge, h1, publishDate, readTime, intro, body, ctaHref, ctaLabel, ctaContext, relatedPosts }: BlogArticleProps) {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }} />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-12">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            {badge}
          </div>
          <h1 className="font-display font-bold text-foreground mb-4 leading-tight">{h1}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{publishDate}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Intro */}
          <div className="text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">{intro}</div>

          {/* Body */}
          <div className="prose prose-lg max-w-none text-muted-foreground
            [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:space-y-2 [&_ul]:mb-4
            [&_ol]:space-y-2 [&_ol]:mb-4
            [&_li]:leading-relaxed
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline">
            {body}
          </div>

          {/* Inline CTA */}
          <div className="my-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
            <p className="text-base text-foreground mb-4">{ctaContext}</p>
            <Link href={ctaHref}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
              {ctaLabel} →
            </Link>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border/60">
              <h2 className="font-display font-semibold text-foreground text-lg mb-4">Related Articles</h2>
              <div className="space-y-3">
                {relatedPosts.map((p) => (
                  <Link key={p.href} href={p.href}
                    className="block text-primary font-medium hover:underline text-sm">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
