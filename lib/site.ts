export const SITE = {
  name: "omori_sunny",
  url: "https://omorisunn.github.io",
  github: "https://github.com/omorisunn",
  description: "omori_sunny 的个人博客。", // TODO: replace before publishing
  tagline: "Everything is going to be okey.",
};

export const NAV = [
  { href: "/", label: "首页" },
  { href: "/articles/", label: "文章" },
  { href: "/about/", label: "关于" },
];

export const FILTER_TAGS = ["全部", "示例", "设计", "技术", "随笔"];

export type Work = {
  name: string;
  description: string;
  href: string;
  image: string;
  meta: string;
};

export const WORKS: Work[] = [
  {
    name: "Create: Waterparked",
    description: "用可自定义的滑道，在 Minecraft 里搭建水上乐园。",
    href: "https://github.com/omorisunn/create-waterparked",
    image: "/works/create-waterparked.webp",
    meta: "Minecraft · Kotlin",
  },
  {
    name: "dsh-ui-animations",
    description: "给 DeepSeek Harness 的界面动画插件。",
    href: "https://github.com/omorisunn/dsh-ui-animations",
    image: "/works/dsh-ui-animations.svg",
    meta: "DeepSeek Harness · JavaScript",
  },
];
