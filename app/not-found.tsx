import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-wrap">
      <div className="not-found glass-panel">
        <h1>404 Not Found</h1>
        <Link prefetch={false} className="pill pill--primary" href="/">
          返回
        </Link>
      </div>
    </div>
  );
}
