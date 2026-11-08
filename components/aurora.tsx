"use client";

import { useEffect } from "react";

export default function Aurora() {
  useEffect(() => {
    const layer = document.querySelector<HTMLElement>(".aurora");
    if (!layer) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      return;
    }

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        layer.style.setProperty("--ax", (x * 14).toFixed(1) + "px");
        layer.style.setProperty("--ay", (y * 10).toFixed(1) + "px");
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora-blob aurora-blob--blue" />
      <span className="aurora-blob aurora-blob--purple" />
      <span className="aurora-blob aurora-blob--cyan" />
    </div>
  );
}
