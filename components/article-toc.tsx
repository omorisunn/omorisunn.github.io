"use client";

import { useEffect, useState } from "react";

import type { Heading } from "@/lib/posts";

type ArticleTocProps = {
  headings: Heading[];
};

export default function ArticleToc({ headings }: ArticleTocProps) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const update = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(headings[headings.length - 1].id);
        return;
      }

      const line = window.scrollY + 140;
      let current = headings[0]?.id ?? "";
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (!element) {
          continue;
        }
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= line) {
          current = heading.id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="article-toc" aria-label="目录">
      <p className="toc-label">目录</p>
      <nav className="toc-nav">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={"#" + heading.id}
            className={
              "toc-link toc-level-" +
              heading.level +
              (active === heading.id ? " is-active" : "")
            }
            aria-current={active === heading.id ? "location" : undefined}
            onClick={() => setActive(heading.id)}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
