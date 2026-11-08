"use client";

import { useEffect } from "react";

export default function ArticleEnhancer() {
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(".prose");
    if (!article) {
      return;
    }

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
  }, []);

  return null;
}
