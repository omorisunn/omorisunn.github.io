"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { useResolvedTheme } from "@/lib/theme";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), {
  ssr: false,
});

export default function AvatarTray() {
  const theme = useResolvedTheme();

  return (
    <div className="avatar-tray">
      <span className="avatar-tray-fallback" aria-hidden="true" />
      <div className="avatar-liquid" aria-hidden="true">
        <LiquidGlass
          cornerRadius={999}
          padding="0"
          displacementScale={48}
          blurAmount={0.08}
          saturation={135}
          aberrationIntensity={1.5}
          elasticity={0.1}
          overLight={theme === "light"}
          mode="standard"
          className="liquid-tray"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <span className="avatar-liquid-disc" />
        </LiquidGlass>
      </div>
      <Image
        className="avatar-image"
        src="/avatar.jpg"
        alt="omori_sunny 的头像"
        width={96}
        height={96}
        sizes="96px"
        priority
      />
    </div>
  );
}
