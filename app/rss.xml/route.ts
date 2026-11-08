import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(date: string): string {
  return new Date(date + "T00:00:00+08:00").toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const lastBuild = posts[0]?.date ? rfc822(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = SITE.url + "/articles/" + post.slug + "/";
      return [
        "<item>",
        "<title>" + escapeXml(post.title) + "</title>",
        "<link>" + url + "</link>",
        '<guid isPermaLink="true">' + url + "</guid>",
        "<pubDate>" + rfc822(post.date) + "</pubDate>",
        "<description>" + escapeXml(post.excerpt) + "</description>",
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "<channel>",
    "<title>" + escapeXml(SITE.name) + "</title>",
    "<link>" + SITE.url + "/</link>",
    "<description>" + escapeXml(SITE.description) + "</description>",
    "<language>zh-CN</language>",
    "<lastBuildDate>" + lastBuild + "</lastBuildDate>",
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
