"use client";

import { useEffect } from "react";

export default function ArticleEnhancer() {
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".prose");
    if (!article) {
      return;
    }

    const buttons: HTMLButtonElement[] = [];
    const blocks = article.querySelectorAll("pre");

    blocks.forEach((block) => {
      if (block.querySelector(".copy-code")) {
        return;
      }

      block.classList.add("has-copy");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code";
      button.textContent = "复制";
      button.setAttribute("aria-label", "复制代码");

      const markCopied = () => {
        button.textContent = "已复制";
        button.dataset.copied = "true";
        window.setTimeout(() => {
          button.textContent = "复制";
          button.dataset.copied = "false";
        }, 1600);
      };

      button.addEventListener("click", async () => {
        const code = block.querySelector("code");
        const text = (code ? code.textContent : block.textContent) ?? "";
        try {
          await navigator.clipboard.writeText(text);
          markCopied();
        } catch {
          const area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          try {
            document.execCommand("copy");
            markCopied();
          } finally {
            document.body.removeChild(area);
          }
        }
      });

      block.appendChild(button);
      buttons.push(button);
    });

    const tables = article.querySelectorAll("table");
    tables.forEach((table) => {
      if (table.parentElement?.classList.contains("table-wrap")) {
        return;
      }
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      table.parentElement?.insertBefore(wrap, table);
      wrap.appendChild(table);
    });

    return () => {
      buttons.forEach((button) => button.remove());
      blocks.forEach((block) => block.classList.remove("has-copy"));
    };
  }, []);

  return null;
}
