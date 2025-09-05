// app/blog/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import { blogPosts } from "../../../constants/blogPosts";

export function generateStaticParams() {
  // optional SSG
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Beitrag nicht gefunden | Sparway Blog" };

  const url = `https://www.sparway.com/blog/${post.slug}`;
  const img = post.cover || "/og-default.jpg";

  return {
    title: `${post.title} | Sparway Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      images: [{ url: img, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [img],
    },
  };
}

export default function BlogPostPage({ params }) {
  const postIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  if (postIndex === -1) return notFound();

  const post = blogPosts[postIndex];
  const prev = blogPosts[postIndex - 1] || null;
  const next = blogPosts[postIndex + 1] || null;

  // simple related: same tag overlap (excluding self), top 3
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      overlap: (p.tags || []).filter((t) => (post.tags || []).includes(t)).length,
    }))
    .filter((x) => x.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 3)
    .map((x) => x.post);

  return (
    <main className="min-h-screen bg-primary-black text-gray-300">
      <article className="mx-auto max-w-4xl px-6 py-10">
        {/* Hero */}
        <header className="mb-8">
          <div className="text-xs text-white/60">
            {formatDate(post.date)} • {post.readingMinutes || estimateReading(post)} Min
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">{post.title}</h1>
          <p className="mt-3 text-white/80">{post.excerpt}</p>

          <div className="mt-4 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <Image
                src={post.author?.avatar || "/logo.png"}
                alt={post.author?.name || "Autor"}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm text-white/80">
              <div className="font-semibold">{post.author?.name || "Sparway Team"}</div>
              <div className="text-white/60">{post.author?.role || "Marketing"}</div>
            </div>
          </div>

          {post.cover && (
            <div className="relative w-full mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[16/9]">
                <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>
          )}
        </header>

        {/* Content + TOC / Progress handled in client for interactivity */}
        <PostClient post={post} prev={prev} next={next} related={related} />
      </article>
    </main>
  );
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function estimateReading(post) {
  // fallback if you don't specify readingMinutes
  const words = JSON.stringify(post.content || "").split(/\s+/).length;
  return Math.max(3, Math.round(words / 200));
}
