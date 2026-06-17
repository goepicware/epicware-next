import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PREVIEW_POSTS = [
  {
    category: "Local SEO",
    title: "Google Maps Ranking Factors: The Complete 2026 Guide",
    readTime: "8 min read",
    href: "/blog/google-maps-ranking-factors",
  },
  {
    category: "Reviews",
    title: "How to Get More Google Reviews (Without Breaking Policy)",
    readTime: "6 min read",
    href: "/blog/how-to-get-more-google-reviews",
  },
  {
    category: "Strategy",
    title: "The Local Business Playbook for Dominating Google in 2026",
    readTime: "12 min read",
    href: "/resources/guides/local-business-playbook-2026",
  },
];

export default function ResourcesPreview() {
  return (
    <section className="py-24 lg:py-32 section-gradient-3">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              From the Blog
            </span>
            <h2 className="font-display text-foreground">
              Learn how local businesses win on Google
            </h2>
          </div>
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group card-elevated p-8 flex flex-col gap-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/8 px-3 py-1 rounded-full self-start">
                {post.category}
              </span>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200 text-lg leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
