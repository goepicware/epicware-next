import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Maps markdown-generated HTML elements to the site's actual design
 * system. The codebase styles every element by hand with explicit
 * Tailwind classes (see any existing page's "prose prose-lg" divs,
 * which only ever wrap plain <p> tags) rather than using the
 * @tailwindcss/typography plugin — which isn't installed here, so the
 * bare `prose` class used in the money-page layouts had no effect at
 * all. This is the fix: style MDX output the same way the rest of the
 * site styles everything else, not by adding a new styling paradigm.
 */
export const mdxComponents = {
  h2: ({ children, ...props }: { children: ReactNode; id?: string }) => (
    <h2 className="font-display text-foreground text-2xl font-bold mt-10 mb-4 first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode; id?: string }) => (
    <h3 className="font-display text-foreground text-lg font-semibold mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground leading-relaxed mb-4">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal pl-5 space-y-2 text-base text-muted-foreground leading-relaxed mb-4">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <Link href={href ?? "#"} className="text-primary font-medium hover:underline">
      {children}
    </Link>
  ),
};
