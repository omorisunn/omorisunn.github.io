# omorisunn.github.io

omori_sunny 的个人博客。静态导出，部署在 GitHub Pages。

## 本地开发

~~~bash
npm ci
npm run dev
~~~

打开 http://localhost:3000。

## 构建

~~~bash
npm run build
~~~

静态文件输出到 `out/`。

## 写作

文章放在 `content/posts/`，使用 Markdown。文件名就是 URL 的 slug。

Frontmatter 示例：

~~~yaml
---
title: 示例文章一
date: 2026-11-08
tags: [示例, 设计]
excerpt: 一段摘要。
draft: false
---
~~~

- `date` 使用 `YYYY-MM-DD`。
- `excerpt` 会用在列表和 RSS；不写时从正文截取。
- `draft: true` 的文章不会出现在构建结果里。
- 标题会自动生成锚点；二级和三级标题进入目录。

## 部署

推送到 `main` 后，GitHub Actions 会运行 `next build` 并发布 `out/`。

仓库 Settings → Pages → Source 选择 GitHub Actions。

## 待填写

- `lib/site.ts` 的 `SITE.description`（站点描述，用于 SEO 和 RSS）。
- 首页的「关于我」短介绍。
- 关于页的「自述」「Now」「这个站点」。
