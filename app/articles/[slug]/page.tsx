import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ArticleEnhancer from "@/components/article-enhancer";
import ArticleToc from "@/components/article-toc";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPost } from "@/lib/posts";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const tocHeadings = post.headings.filter(
    (heading) => heading.level === 2 || heading.level === 3,
  );

  return (
    <div className="page page-article">
      <div className="article-layout">
        <article className="article-main" aria-labelledby="article-title">
          <Link prefetch={false} className="back-link" href="/articles/">
            <span aria-hidden="true">←</span> 文章
          </Link>

          <header className="article-header">
            <h1 id="article-title">{post.title}</h1>
            <div className="article-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="meta-dot" aria-hidden="true">
                ·
              </span>
              <span>{post.readingTime} 分钟阅读</span>
            </div>
            <div className="tag-list" aria-label="标签">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {tocHeadings.length > 0 ? (
            <details className="toc-mobile">
              <summary>目录</summary>
              <nav aria-label="目录">
                {tocHeadings.map((heading) => (
                  <a
                    key={heading.id}
                    href={"#" + heading.id}
                    className={"toc-level-" + heading.level}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </details>
          ) : null}

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <ArticleEnhancer />

          {post.prev || post.next ? (
            <nav className="post-nav" aria-label="文章导航">
              {post.next ? (
                <Link
                  prefetch={false}
                  className="post-nav-item"
                  href={"/articles/" + post.next.slug + "/"}
                >
                  <span className="post-nav-label">上一篇</span>
                  <span className="post-nav-title">{post.next.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {post.prev ? (
                <Link
                  prefetch={false}
                  className="post-nav-item post-nav-item--next"
                  href={"/articles/" + post.prev.slug + "/"}
                >
                  <span className="post-nav-label">下一篇</span>
                  <span className="post-nav-title">{post.prev.title}</span>
                </Link>
              ) : null}
            </nav>
          ) : null}
        </article>

        <ArticleToc headings={tocHeadings} />
      </div>
    </div>
  );
}
