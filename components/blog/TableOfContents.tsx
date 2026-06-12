"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const tocItems: TocItem[] = headings
      .filter((h) => (h.textContent ?? "").trim().length > 0)
      .map((heading) => {
        const text = (heading.textContent ?? "").trim();
        const id = heading.id || slugify(text);
        if (!heading.id) heading.id = id;
        return { id, text, level: heading.tagName === "H2" ? 2 : 3 };
      });

    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-72px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <nav aria-label="On this page" className="not-prose">
      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
        On This Page
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm leading-snug py-1.5 pr-2 border-l-2 transition-all duration-150 ${
                item.level === 3 ? "pl-4" : "pl-3"
              } ${
                activeId === item.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.pushState(null, "", `#${item.id}`);
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
