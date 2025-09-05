"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostClient({ post, prev, next, related }) {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef(null);

  // Build a lightweight TOC from h2/h3 blocks
  const toc = useMemo(() => {
    const arr = [];
    (post.content || []).forEach((b, i) => {
      if (b.type === "h2" || b.type === "h3") {
        const id = slugify(b.text || `sec-${i}`);
        arr.push({ id, level: b.type, text: b.text });
      }
    });
    return arr;
  }, [post.content]);

  // Progress on scroll
  useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY - el.offsetTop;
      const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Share handlers
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      {/* Top progress bar */}
      <div className="sticky top-0 z-40 h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_260px] gap-10">
        {/* Main content */}
        <div ref={articleRef} id="post-content">
          {Array.isArray(post.content) && post.content.length > 0 ? (
            <RenderContent blocks={post.content} />
          ) : (
            <FallbackContent />
          )}

          {/* Share */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-white/70 text-sm">Teilen:</span>
            <a
              href={twUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
            >
              Twitter / X
            </a>
            <a
              href={liUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(shareUrl);
              }}
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15"
            >
              Link kopieren
            </button>
          </div>

          {/* Prev / Next */}
          <nav className="mt-10 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <PostNavCard label="Vorheriger Beitrag" post={prev} align="left" />
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/50 text-sm">—</div>
            )}
            {next ? (
              <PostNavCard label="Nächster Beitrag" post={next} align="right" />
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/50 text-sm">—</div>
            )}
          </nav>

          {/* Related */}
          {related?.length > 0 && (
            <section className="mt-12">
              <h3 className="text-xl font-extrabold text-white">Verwandte Beiträge</h3>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blogs/${p.slug}`}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
                  >
                    <div className="relative w-full aspect-[16/10]">
                      <Image src={p.cover} alt={p.title} fill className="object-cover group-hover:scale-[1.03] transition-transform" />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-white/60">{formatDate(p.date)} • {p.readingMinutes || 6} Min</div>
                      <h4 className="mt-1 text-base font-bold text-white">{p.title}</h4>
                      <p className="mt-1 text-sm text-white/75 line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-16 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white/85">Inhalt</p>
            <ul className="mt-2 space-y-1 text-sm">
              {toc.length ? (
                toc.map((it) => (
                  <li key={it.id}>
                    <a
                      href={`#${it.id}`}
                      className={`block truncate hover:text-white ${it.level === "h3" ? "pl-3 text-white/70" : "text-white/85"}`}
                    >
                      {it.text}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-white/60">Keine Unterüberschriften</li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

/* ---------- helpers & small components ---------- */

function RenderContent({ blocks }) {
  return (
    <div className="prose prose-invert prose-headings:font-extrabold max-w-none">
      {blocks.map((b, i) => {
        const key = `${b.type}-${i}`;
        if (b.type === "h2") return <h2 id={slugify(b.text)} key={key}>{b.text}</h2>;
        if (b.type === "h3") return <h3 id={slugify(b.text)} key={key}>{b.text}</h3>;
        if (b.type === "p") return <p key={key}>{b.text}</p>;
        if (b.type === "blockquote") return <blockquote key={key}>{b.text}</blockquote>;
        if (b.type === "ul") return <ul key={key}>{b.items?.map((li, j) => <li key={j}>{li}</li>)}</ul>;
        if (b.type === "ol") return <ol key={key}>{b.items?.map((li, j) => <li key={j}>{li}</li>)}</ol>;
        if (b.type === "code") return <pre key={key}><code>{b.text}</code></pre>;
        if (b.type === "img") {
          return (
            <figure key={key} className="not-prose rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative w-full aspect-[16/9]">
                <Image src={b.src} alt={b.alt || ""} fill className="object-cover" />
              </div>
              {b.caption && <figcaption className="p-2 text-sm text-white/70">{b.caption}</figcaption>}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}

function FallbackContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <p>
        Dieser Beitrag ist momentan als Vorschau veröffentlicht. Die vollständigen Inhalte werden
        in Kürze ergänzt. Folge dem Blog für Updates zu SEO, Webdesign, Social & Performance.
      </p>
    </div>
  );
}

function PostNavCard({ label, post, align = "left" }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition block"
    >
      <span className="text-xs text-white/60">{label}</span>
      <div className={`mt-1 font-semibold text-white ${align === "right" ? "text-right" : ""}`}>
        {post.title}
      </div>
    </Link>
  );
}

function slugify(str = "") {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("de-DE", { year: "numeric", month: "short", day: "2-digit" });
  } catch {
    return iso;
  }
}
