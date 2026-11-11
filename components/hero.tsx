"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import AvatarTray from "./avatar-tray";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
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
        section.style.setProperty("--px", (x * 0.5).toFixed(3));
        section.style.setProperty("--py", (y * 0.5).toFixed(3));
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

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-avatar-layer"
        initial={reduced ? false : { opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <AvatarTray />
      </motion.div>
      <div className="hero-copy">
        <motion.h1
          id="hero-title"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
        >
          omori<span className="hero-underscore">_</span>sunny
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease }}
        >
          Everything is going to be okey.
        </motion.p>
             </div>
    </section>
  );
}
