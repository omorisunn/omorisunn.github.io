import type { Metadata } from "next";

import ArticlesExplorer from "@/components/articles-explorer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "文章",
  description: "一些关于设计、代码和日常的记录。",
};

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <div className="page page-articles">
      <header className="page-header">
        <h1>文章</h1>
        <p>一些关于设计、代码和日常的记录。</p>
      </header>
      <ArticlesExplorer posts={posts} />
    </div>
  );
}
