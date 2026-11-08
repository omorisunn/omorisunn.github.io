"use client";

import type p5 from "p5";
import { useEffect, useRef } from "react";

import { useResolvedTheme } from "@/lib/theme";

const GLYPHS = "omrisunyOMRISUNY_.=+*^’!,:-/";
const POINTER_RADIUS = 150;
const MAX_VORTICES = 40;

type Vortex = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  strength: number;
  age: number;
};

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
    const listeners = new AbortController();
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
          let pointer: { x: number; y: number; time: number } | null = null;
          let activeTouchId: number | null = null;
          const vortices: Vortex[] = [];
          let columns = 0;
          let rows = 0;
          let offsetsX = new Float32Array(0);
          let offsetsY = new Float32Array(0);
          let velocitiesX = new Float32Array(0);
          let velocitiesY = new Float32Array(0);
          let slowFrames = 0;

          const resize = () => {
            const previousWidth = width;
            const previousSpacing = spacing;
            width = window.innerWidth;
            height = window.innerHeight;
            isMobile = width <= 760;
            spacing = (isMobile ? 22 : 20) * density;
            fontSize = isMobile ? 10 : 11;
            columns = Math.ceil(width / spacing) + 2;
            rows = Math.ceil(height / spacing) + 2;
            const reset = reduced || width !== previousWidth || spacing !== previousSpacing;
            const fit = (values: Float32Array) => {
              const next = new Float32Array(columns * rows);
              if (!reset) next.set(values.subarray(0, next.length));
              return next;
            };
            offsetsX = fit(offsetsX);
            offsetsY = fit(offsetsY);
            velocitiesX = fit(velocitiesX);
            velocitiesY = fit(velocitiesY);
            // Mobile browser bars resize the viewport while scrolling. Keep
            // the active gesture and wake through height-only changes.
            if (reset) {
              pointer = null;
              activeTouchId = null;
              vortices.length = 0;
            }
            p.resizeCanvas(width, height);
            p.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
            p.textSize(fontSize);
            p.textFont("monospace");
            p.textAlign(p.CENTER, p.CENTER);
            p.noStroke();
          };

          const disturb = (x: number, y: number, time: number) => {
            if (reduced) return;
            const current = { x, y, time };
            if (pointer) {
              const dx = current.x - pointer.x;
              const dy = current.y - pointer.y;
              const distance = Math.hypot(dx, dy);
              const elapsed = current.time - pointer.time;
              if (distance < 3) return;

              // Sample the whole stroke, including quick swipes; a stationary
              // cursor contributes no energy. Paired vortices curl its wake.
              if (elapsed < 120) {
                const speed = Math.min(1, distance / Math.max(8, elapsed) / 1.4);
                const steps = Math.min(8, Math.ceil(distance / 20));
                const ux = dx / distance;
                const uy = dy / distance;
                for (let step = 1; step <= steps; step += 1) {
                  for (const side of [-1, 1]) {
                    vortices.push({
                      x: pointer.x + dx * (step / steps) - uy * 26 * side,
                      y: pointer.y + dy * (step / steps) + ux * 26 * side,
                      vx: ux * (12 + speed * 24),
                      vy: uy * (12 + speed * 24),
                      spin: side,
                      strength: 0.35 + speed * 0.65,
                      age: 0,
                    });
                  }
                }
                vortices.splice(0, Math.max(0, vortices.length - MAX_VORTICES));
              }
            }
            pointer = current;
          };

          const onPointerMove = (event: PointerEvent) => {
            // Touch Events keep arriving during native scrolling, whereas
            // touch Pointer Events are cancelled once the browser pans.
            if (event.pointerType === "touch" || activeTouchId !== null) return;
            disturb(event.clientX, event.clientY, event.timeStamp);
          };

          const onTouchStart = (event: TouchEvent) => {
            pointer = null;
            activeTouchId = null;
            if (reduced || event.touches.length !== 1) return;
            const touch = event.touches[0];
            activeTouchId = touch.identifier;
            pointer = { x: touch.clientX, y: touch.clientY, time: event.timeStamp };
          };

          const onTouchMove = (event: TouchEvent) => {
            if (event.touches.length !== 1) return;
            const touch = event.touches[0];
            if (touch.identifier === activeTouchId) {
              disturb(touch.clientX, touch.clientY, event.timeStamp);
            }
          };

          const onTouchEnd = (event: TouchEvent) => {
            if (Array.from(event.touches).some((touch) => touch.identifier === activeTouchId)) return;
            activeTouchId = null;
            pointer = null;
          };

          const onPointerLeave = () => {
            pointer = null;
            activeTouchId = null;
          };

          p.setup = () => {
            const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
            reduced = motionPreference.matches;
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent(host);
            resize();
            p.frameRate(60);
            window.addEventListener("pointermove", onPointerMove, { passive: true, signal: listeners.signal });
            window.addEventListener("touchstart", onTouchStart, { passive: true, signal: listeners.signal });
            window.addEventListener("touchmove", onTouchMove, { passive: true, signal: listeners.signal });
            window.addEventListener("touchend", onTouchEnd, { passive: true, signal: listeners.signal });
            window.addEventListener("touchcancel", onTouchEnd, { passive: true, signal: listeners.signal });
            // Ignore transitions between page elements; only an actual window
            // exit ends a stroke. Existing eddies dissipate naturally.
            window.addEventListener("pointerout", (event) => {
              if (event.pointerType !== "touch" && !event.relatedTarget) onPointerLeave();
            }, { passive: true, signal: listeners.signal });
            window.addEventListener("blur", onPointerLeave, { signal: listeners.signal });
            motionPreference.addEventListener("change", (event) => {
              reduced = event.matches;
              resize();
              if (reduced) {
                p.noLoop();
                p.redraw();
              } else {
                p.loop();
              }
            }, { signal: listeners.signal });
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
            const dt = Math.min(p.deltaTime / 1000, 1 / 30);
            const damping = Math.exp(-8 * dt);
            for (let i = vortices.length - 1; i >= 0; i -= 1) {
              const vortex = vortices[i];
              vortex.age += dt;
              vortex.x += vortex.vx * dt;
              vortex.y += vortex.vy * dt;
              if (vortex.age > 1.6) vortices.splice(i, 1);
            }

            for (let y = 0; y < rows; y += 1) {
              for (let x = 0; x < columns; x += 1) {
                const px = (x - 1) * spacing + spacing / 2;
                const py = (y - 1) * spacing + spacing / 2;
                const nx = x * 0.055 + Math.sin(y * 0.09 + phase) * 0.35;
                const ny = y * 0.06 + Math.cos(x * 0.07 - phase) * 0.35;
                const value = p.noise(nx, ny, time + scroll.energy * 0.35);

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
                let flowX = 0;
                let flowY = 0;
                const index = y * columns + x;

                for (const vortex of vortices) {
                  const dx = drawX + offsetsX[index] - vortex.x;
                  const dy = drawY + offsetsY[index] - vortex.y;
                  const distanceSquared = dx * dx + dy * dy;
                  if (distanceSquared < POINTER_RADIUS * POINTER_RADIUS) {
                    const distance = Math.sqrt(distanceSquared);
                    const envelope = (1 - distance / POINTER_RADIUS) ** 2;
                    const influence = envelope * vortex.strength * Math.exp(-3 * vortex.age);
                    const curl = influence * vortex.spin * 1100 / (distance + 24);
                    flowX += -dy * curl + vortex.vx * influence * 5;
                    flowY += dx * curl + vortex.vy * influence * 5;
                    force += influence;
                  }
                }

                // A damped spring retains momentum, then returns each glyph
                // to the background flow without snapping or leaving trails.
                const flowScale = 1 / Math.max(1, force * 0.7);
                velocitiesX[index] = (velocitiesX[index] +
                  (flowX * flowScale - offsetsX[index] * 28) * dt) * damping;
                velocitiesY[index] = (velocitiesY[index] +
                  (flowY * flowScale - offsetsY[index] * 28) * dt) * damping;
                offsetsX[index] += velocitiesX[index] * dt;
                offsetsY[index] += velocitiesY[index] * dt;
                drawX += offsetsX[index];
                drawY += offsetsY[index];
                force = Math.min(1, force);

                if (value < threshold) continue;

                const normalized = (value - threshold) / (1 - threshold);
                const seed = Math.imul(x + 1, 374761393) ^ Math.imul(y + 1, 668265263);
                const glyph = GLYPHS[((seed >>> 0) + Math.floor(normalized * GLYPHS.length)) % GLYPHS.length];
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
      listeners.abort();
      stopScroll?.();
      instance?.remove();
      host.replaceChildren();
    };
  }, [theme]);

  return <div ref={hostRef} className="ascii-field" aria-hidden="true" />;
}
