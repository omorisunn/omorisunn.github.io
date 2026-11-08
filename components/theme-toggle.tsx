"use client";

import { useResolvedTheme } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  const theme = useResolvedTheme();
  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable in private mode; the visual state still works.
    }
  };

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={next === "dark" ? "切换到深色模式" : "切换到浅色模式"}
      title={next === "dark" ? "切换到深色模式" : "切换到浅色模式"}
      onClick={toggle}
    >
      <span className="theme-icon theme-icon--sun">
        <SunIcon />
      </span>
      <span className="theme-icon theme-icon--moon">
        <MoonIcon />
      </span>
    </button>
  );
}
