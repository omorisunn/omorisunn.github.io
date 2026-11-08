import Link from "next/link";

import { formatDate } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";

type FeaturedPostProps = {
  post: PostMeta;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="featured-post">
      <Link
        prefetch={false}
        className="featured-post-link"
        href={"/articles/" + post.slug + "/"}
      >
        <div className="featured-post-top">
          <div className="tag-list" aria-label="标签">
            {post.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <time className="featured-post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="featured-post-title">{post.title}</h3>
        <p className="featured-post-excerpt">{post.excerpt}</p>
        <span className="featured-post-cta">
          阅读全文 <span aria-hidden="true">→</span>
        </span>
      </Link>
    </article>
  );
}
