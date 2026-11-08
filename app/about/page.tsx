import type { Metadata } from "next";
import Image from "next/image";

import { GitHubIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: "关于 omori_sunny。",
};

export default function AboutPage() {
  return (
    <div className="page page-about">
      <div className="about-grid">
        <aside className="about-card" aria-label="个人资料">
          <Image
            className="about-avatar"
            src="/avatar.jpg"
            alt="omori_sunny 的头像"
            width={72}
            height={72}
          />
          <p className="about-name">{SITE.name}</p>
          <p className="about-bio">{SITE.tagline}</p>
          <a
            className="about-github"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon" />
            GitHub
          </a>
        </aside>

        <div className="about-copy">
          <h1>关于</h1>

          <section aria-labelledby="about-self">
            <h2 id="about-self">自述</h2>
            {/* TODO: 待填写（用户提供后替换）。 */}
            <p>待填写。</p>
          </section>

          <section aria-labelledby="about-now">
            <h2 id="about-now">Now</h2>
            {/* TODO: 待填写（用户提供后替换）。 */}
            <p>待填写。</p>
          </section>

          <section aria-labelledby="about-site">
            <h2 id="about-site">这个站点</h2>
            {/* TODO: 待填写（用户提供后替换）。 */}
            <p>待填写。</p>
          </section>
        </div>
      </div>
    </div>
  );
}
