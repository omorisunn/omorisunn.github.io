import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        <span>© 2026 omori_sunny</span>
        <span className="footer-separator" aria-hidden="true">·</span>
        <a href={SITE.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="footer-separator" aria-hidden="true">·</span>
        <a href="/rss.xml">RSS</a>
        <span className="footer-separator" aria-hidden="true">·</span>
        <a href="#top">回到顶部</a>
      </p>
    </footer>
  );
}
