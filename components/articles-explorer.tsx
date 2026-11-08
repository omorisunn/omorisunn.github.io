"use client";

import { useMemo, useState } from "react";

import { FILTER_TAGS } from "@/lib/site";
import { formatYear } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";
import PostRow from "./post-row";

type ArticlesExplorerProps = {
  posts: PostMeta[];
};

export default function ArticlesExplorer({ posts }: ArticlesExplorerProps) {
  const [active, setActive] = useState("全部");

  const filtered = useMemo(() => {
    if (active === "全部") {
      return posts;
    }
    return posts.filter((post) => post.tags.includes(active));
  }, [active, posts]);

  const groups = useMemo(() => {
    const map = new Map<string, PostMeta[]>();
    for (const post of filtered) {
      const year = formatYear(post.date);
      const list = map.get(year) ?? [];
      list.push(post);
      map.set(year, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <>
      <div className="tag-filter" role="group" aria-label="按标签筛选">
        {FILTER_TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            className={"filter-pill" + (active === tag ? " is-active" : "")}
            aria-pressed={active === tag}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {groups.length > 0 ? (
        <div className="article-list">
          {groups.map(([year, items]) => (
            <section className="year-group" key={year} aria-labelledby={"year-" + year}>
              <h2 className="year-label" id={"year-" + year}>
                {year}
              </h2>
              <div className="year-posts">
                {items.map((post) => (
                  <PostRow key={post.slug} post={post} reveal />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className="empty-state">这个标签下还没有文章。</p>
      )}
    </>
  );
}
