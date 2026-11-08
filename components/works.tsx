import Image from "next/image";

import { WORKS } from "@/lib/site";

export default function Works() {
  return (
    <section className="home-works" aria-labelledby="works-title">
      <div className="section-head">
        <h2 id="works-title">作品</h2>
        <span className="works-count">{WORKS.length} 个项目</span>
      </div>
      <ul className="works-grid">
        {WORKS.map((work) => (
          <li key={work.name}>
            <a
              className="work-card"
              href={work.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${work.name}，在 GitHub 打开`}
            >
              <Image
                className="work-card-image"
                src={work.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 480px"
                loading="lazy"
              />
              <span className="work-card-scrim" aria-hidden="true" />
              <span className="work-card-body">
                <span className="work-card-meta">{work.meta}</span>
                <span className="work-card-title">{work.name}</span>
                <span className="work-card-desc">{work.description}</span>
                <span className="work-card-foot">
                  GitHub <span className="work-card-arrow" aria-hidden="true">↗</span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
