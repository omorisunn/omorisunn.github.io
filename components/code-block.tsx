"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { useResolvedTheme } from "@/lib/theme";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), { ssr: false });
const STILL_POINTER = { x: 0, y: 0 };

export default function CodeBlock({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) {
  const theme = useResolvedTheme();
  const codeRef = useRef<HTMLPreElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const copyCode = async () => {
    const text = codeRef.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        if (!document.execCommand("copy")) return;
      } catch {
        return;
      } finally {
        area.remove();
      }
    }
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="code-block" data-language={language}>
      <div className="code-glass-background" aria-hidden="true">
        <LiquidGlass
          className="code-glass-panel"
          cornerRadius={16}
          padding="0"
          displacementScale={36}
          blurAmount={0.12}
          saturation={120}
          aberrationIntensity={1}
          elasticity={0}
          globalMousePos={STILL_POINTER}
          mouseOffset={STILL_POINTER}
          overLight={theme === "light"}
          mode="standard"
          style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%" }}
        >
          <span className="code-glass-fill" />
        </LiquidGlass>
      </div>
      <pre ref={codeRef} aria-label={`${language} 代码`}>{children}</pre>
      <span className="code-language" aria-hidden="true">{language}</span>
      <button
        type="button"
        className="copy-code"
        data-copied={copied}
        aria-label="复制代码"
        onClick={copyCode}
      >
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}
