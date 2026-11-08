"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
};

export default function Tilt({ children, className }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--rx", (y * -3).toFixed(2) + "deg");
    ref.current.style.setProperty("--ry", (x * 3).toFixed(2) + "deg");
  };

  const reset = () => {
    if (!ref.current) {
      return;
    }
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={"tilt" + (className ? " " + className : "")}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
