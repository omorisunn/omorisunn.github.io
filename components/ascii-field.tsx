"use client";

import type p5 from "p5";
import { useEffect, useRef } from "react";

import { useResolvedTheme } from "@/lib/theme";

const GLYPHS = ".:-=+*";
const POINTER_RADIUS = 150;

type ScrollState = {
  energy: number;
  velocity: number;
};

export default function AsciiField() {
  const hostRef = useRef<HTMLDivElement>(null);
  const theme = useResolvedTheme();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    let disposed = false;
    let instance: p5 | null = null;
    let stopScroll: (() => void) | null = null;
    const scroll: ScrollState = { energy: 0, velocity: 0 };

    Promise.all([import("p5"), import("gsap"), import("gsap/ScrollTrigger")])
      .then(([p5Module, gsapModule, scrollModule]) => {
        if (disposed) {
          return;
        }

        const P5 = p5Module.default;
        const { gsap } = gsapModule;
        const { ScrollTrigger } = scrollModule;
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            scroll.velocity = self.getVelocity();
          },
        });
        stopScroll = () => trigger.kill();

        const sketch = (p: p5) => {
          const isDark = theme === "dark";
          const ink = isDark ? [245, 245, 247] : [29, 29, 31];
          const accent = isDark ? [167, 139, 250] : [124, 92, 255];

          let width = 0;
          let height = 0;
          let spacing = 22;
          let fontSize = 11;
          let density = 1;
          let reduced = false;
          let isMobile = false;
          let pointerActive = false;
          let pointerX = -9999;
          let pointerY = -9999;
          let slowFrames = 0;

          const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            isMobile = width <= 760;
            spacing = (isMobile ? 22 : 20) * density;
            fontSize = isMobile ? 10 : 11;
            p.resizeCanvas(width, height);
            p.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
            p.textSize(fontSize);
            p.textFont("monospace");
            p.textAlign(p.CENTER, p.CENTER);
            p.noStroke();
          };

          const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") {
              return;
            }
            pointerX = event.clientX;
            pointerY = event.clientY;
            pointerActive = true;
          };

          const onPointerLeave = () => {
            pointerActive = false;
          };

          p.setup = () => {
            reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent(host);
            resize();
            p.frameRate(60);
            window.addEventListener("pointermove", onPointerMove, { passive: true });
            window.addEventListener("pointerout", onPointerLeave, { passive: true });
            if (reduced) {
              p.noLoop();
            }
          };

          p.windowResized = () => {
            resize();
            if (reduced) {
              p.redraw();
            }
          };

          p.draw = () => {
            if (p.deltaTime > 22) {
              slowFrames += 1;
            } else {
              slowFrames = Math.max(0, slowFrames - 1);
            }

            if (slowFrames > 45) {
              slowFrames = 0;
              if (density < 1.15) {
                density = 1.15;
                resize();
              } else if (p.frameRate() > 32) {
                p.frameRate(30);
              }
            }

            scroll.energy *= 0.9;
            const energy = Math.min(1, Math.abs(scroll.velocity) / 1600);
            if (energy > scroll.energy) {
              scroll.energy = energy;
            }

            p.clear();

            const time = p.millis() * 0.000045;
            const phase = p.millis() * 0.00018;
            const waveTime = p.millis() * 0.0007;
            const threshold = (isMobile ? 0.43 : 0.45) - scroll.energy * 0.035;
            const columns = Math.ceil(width / spacing) + 2;
            const rows = Math.ceil(height / spacing) + 2;

            for (let y = 0; y < rows; y += 1) {
              for (let x = 0; x < columns; x += 1) {
                const px = (x - 1) * spacing + spacing / 2;
                const py = (y - 1) * spacing + spacing / 2;
                const nx = x * 0.055 + Math.sin(y * 0.09 + phase) * 0.35;
                const ny = y * 0.06 + Math.cos(x * 0.07 - phase) * 0.35;
                const value = p.noise(nx, ny, time + scroll.energy * 0.35);

                if (value < threshold) {
                  continue;
                }

                const wave = Math.sin(px * 0.007 + py * 0.01 + waveTime);
                const cross = Math.cos(px * 0.004 - py * 0.012 + waveTime * 0.65);
                const swayX = wave * (isMobile ? 7 : 12) + cross * 3;
                const swayY =
                  Math.sin(px * 0.006 + py * 0.009 + waveTime * 0.8) *
                    (isMobile ? 5 : 8) +
                  cross * 2;
                let drawX = px + swayX;
                let drawY = py + swayY;
                let force = 0;

                if (pointerActive) {
                  const dx = px - pointerX;
                  const dy = py - pointerY;
                  const distance = Math.hypot(dx, dy);
                  if (distance < POINTER_RADIUS && distance > 0.01) {
                    force = 1 - distance / POINTER_RADIUS;
                    const push = force * force * 9;
                    drawX += (dx / distance) * push;
                    drawY += (dy / distance) * push;
                  }
                }

                const normalized = (value - threshold) / (1 - threshold);
                const glyph = GLYPHS[Math.min(GLYPHS.length - 1, Math.floor(normalized * GLYPHS.length))];
                const tint = force > 0.25 && (x * 7 + y * 11) % 13 < 2;

                if (tint) {
                  p.fill(accent[0], accent[1], accent[2], (0.22 + force * 0.22) * 255);
                } else {
                  const shimmer = 0.6 + 0.4 * wave;
                  const inkAlpha = (isDark ? 0.13 + normalized * 0.12 : 0.16 + normalized * 0.14) * shimmer;
                  p.fill(ink[0], ink[1], ink[2], inkAlpha * 255);
                }

                p.text(glyph, drawX, drawY);
              }
            }
          };
        };

        instance = new P5(sketch);
      })
      .catch(() => {
        // The static wash remains if the animation layer cannot load.
      });

    return () => {
      disposed = true;
      stopScroll?.();
      instance?.remove();
      host.replaceChildren();
    };
  }, [theme]);

  return <div ref={hostRef} className="ascii-field" aria-hidden="true" />;
}
