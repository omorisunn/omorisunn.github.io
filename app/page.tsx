import Link from "next/link";

import FeaturedPost from "@/components/featured-post";
import Hero from "@/components/hero";
import PostRow from "@/components/post-row";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Hero />

      <section className="home-latest" aria-labelledby="latest-title">
        <div className="section-head">
          <h2 id="latest-title">最近</h2>
          <Link prefetch={false} className="text-link" href="/articles/">
            全部文章 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="latest-posts">
          {featured ? <FeaturedPost post={featured} /> : null}
          {rest.map((post) => (
            <PostRow key={post.slug} post={post} reveal />
          ))}
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <h2 id="home-about-title" className="sr-only">
          关于我
        </h2>
        {/* TODO: 待填写（用户提供后替换）。 */}
        <p className="home-about-text">待填写。</p>
        <Link prefetch={false} className="text-link" href="/about/">
          关于我 <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
