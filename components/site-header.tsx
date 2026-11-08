"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { NAV, SITE } from "@/lib/site";
import { CloseIcon, GitHubIcon, MenuIcon } from "./icons";
import ThemeToggle from "./theme-toggle";

function isCurrent(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  const base = href.endsWith("/") ? href.slice(0, -1) : href;
  return pathname === base || pathname.startsWith(base + "/");
}

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const headerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 16));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuPath(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <motion.header
      ref={headerRef}
      className={"site-header" + (scrolled ? " is-scrolled" : "")}
      initial={reduced ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-capsule" aria-label="主导航">
        <div className="nav-links">
          {NAV.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                prefetch={false}
                key={item.href}
                href={item.href}
                className={"nav-link" + (current ? " is-active" : "")}
                aria-current={current ? "page" : undefined}
              >
                {current ? (
                  <motion.span
                    aria-hidden="true"
                    className="nav-active-pill"
                    layoutId="nav-active-pill"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 38 }
                    }
                  />
                ) : null}
                <span className="nav-link-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <a
          className="icon-button"
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <GitHubIcon />
        </a>
        <ThemeToggle />
      </nav>

      <div className="mobile-bar">
        <Link prefetch={false} className="wordmark" href="/">
          omori_sunny
        </Link>
        <button
          type="button"
          className="icon-button menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          <span className="menu-icon menu-icon--open">
            <MenuIcon />
          </span>
          <span className="menu-icon menu-icon--close">
            <CloseIcon />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={"mobile-menu" + (open ? " is-open" : "")}
        aria-hidden={!open}
      >
        <nav className="mobile-nav" aria-label="移动端导航">
          {NAV.map((item) => (
            <Link
              prefetch={false}
              key={item.href}
              href={item.href}
              className={
                "mobile-nav-link" +
                (isCurrent(pathname, item.href) ? " is-active" : "")
              }
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              onClick={() => setMenuPath(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a
            className="mobile-github"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
