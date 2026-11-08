import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import {
  gfmHeadingId,
  getHeadingList,
  resetHeadings,
} from "marked-gfm-heading-id";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
};

export type Heading = {
  id: string;
  text: string;
  level: number;
};

export type Post = PostMeta & {
  html: string;
  headings: Heading[];
  prev: PostMeta | null;
  next: PostMeta | null;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

marked.use(
  gfmHeadingId(),
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, language) {
      return hljs.highlight(code, {
        language: hljs.getLanguage(language) ? language : "plaintext",
      }).value;
    },
  }),
);
marked.setOptions({ gfm: true, async: false });

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value ?? "");
}

function plainText(markdown: string): string {
  return markdown
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function plainInline(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/_/g, "")
    .trim();
}

function readingTime(markdown: string): number {
  const characters = plainText(markdown).replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(characters / 300));
}

function listFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();
}

function readFile(slug: string) {
  const filePath = path.join(POSTS_DIR, slug + ".md");
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return {
    filePath,
    raw: fs.readFileSync(filePath, "utf8"),
  };
}

function toMeta(slug: string, raw: string): PostMeta {
  const { data, content } = matter(raw);
  const fallback = plainText(content);
  const excerpt =
    typeof data.excerpt === "string" && data.excerpt.trim().length > 0
      ? data.excerpt.trim()
      : fallback.slice(0, 96) + (fallback.length > 96 ? "…" : "");

  return {
    slug,
    title: String(data.title ?? slug),
    date: normalizeDate(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    excerpt,
    readingTime: readingTime(content),
  };
}

export function getAllPosts(): PostMeta[] {
  const posts = listFiles()
    .map((file) => {
      const slug = path.basename(file, ".md");
      const fileData = readFile(slug);
      if (!fileData) {
        return null;
      }
      const { data } = matter(fileData.raw);
      if (data.draft === true) {
        return null;
      }
      return toMeta(slug, fileData.raw);
    })
    .filter((post): post is PostMeta => post !== null);

  return posts.sort((a, b) => {
    if (a.date === b.date) {
      return a.title.localeCompare(b.title, "zh-CN");
    }
    return a.date < b.date ? 1 : -1;
  });
}

export function getPost(slug: string): Post | null {
  const fileData = readFile(slug);
  if (!fileData) {
    return null;
  }

  const { data, content } = matter(fileData.raw);
  if (data.draft === true) {
    return null;
  }

  resetHeadings();
  const html = marked.parse(content) as string;
  const headings: Heading[] = getHeadingList().map((heading) => ({
    id: heading.id,
    text: plainInline(heading.raw),
    level: heading.level,
  }));

  const all = getAllPosts();
  const index = all.findIndex((post) => post.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  return {
    ...toMeta(slug, fileData.raw),
    html,
    headings,
    prev,
    next,
  };
}
