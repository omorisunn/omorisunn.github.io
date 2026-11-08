import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.date;

  return [
    {
      url: SITE.url + "/",
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: SITE.url + "/articles/",
      lastModified: latest,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: SITE.url + "/about/",
      lastModified: latest,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...posts.map((post) => ({
      url: SITE.url + "/articles/" + post.slug + "/",
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
