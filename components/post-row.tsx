"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { formatDate } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";
import Tilt from "./tilt";

type PostRowProps = {
  post: PostMeta;
  reveal?: boolean;
};

export default function PostRow({ post, reveal = false }: PostRowProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!reveal) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    // Rows already in the first viewport should not blink. Only off-screen
    // rows get the reveal treatment.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      return;
    }

    element.classList.add("reveal-armed");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      element.classList.remove("reveal-armed", "is-visible");
    };
  }, [reveal]);

  const onPointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", (event.clientX - rect.left).toFixed(1) + "px");
    element.style.setProperty("--my", (event.clientY - rect.top).toFixed(1) + "px");
  };

  const resetGlow = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
  };

  return (
    <Tilt className="post-row-tilt">
      <article ref={ref} className="post-row">
        <Link
          prefetch={false}
          className="post-row-link"
          href={"/articles/" + post.slug + "/"}
          onPointerMove={onPointerMove}
          onPointerLeave={resetGlow}
        >
          <time className="post-row-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <div className="post-row-body">
            <h3 className="post-row-title">{post.title}</h3>
            <p className="post-row-excerpt">{post.excerpt}</p>
            <div className="tag-list" aria-label="标签">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
    </Tilt>
  );
}
