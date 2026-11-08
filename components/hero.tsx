"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import AvatarTray from "./avatar-tray";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      return;
    }

    let frame = 0;
    const onMove = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        section.style.setProperty("--px", x.toFixed(3));
        section.style.setProperty("--py", y.toFixed(3));
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      section.style.setProperty("--px", "0");
      section.style.setProperty("--py", "0");
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-avatar-layer">
        <AvatarTray />
      </div>
      <div className="hero-copy">
        <h1 id="hero-title">omori_sunny</h1>
        <p className="hero-tagline">Everything is going to be okey.</p>
        <div className="hero-actions">
          <Link prefetch={false} className="pill pill--primary" href="/articles/">
            读文章
          </Link>
          <Link prefetch={false} className="pill pill--glass" href="/about/">
            关于我
          </Link>
        </div>
      </div>
    </section>
  );
}
