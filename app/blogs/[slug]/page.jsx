// app/blog/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";
import PostClient from "./PostClient";

// 🔁 use the localized API (from the i18n-enabled file I gave you)
import { getPosts, getPostBySlug } from "../../../constants/blogPosts";
import { normalizeLang, isRTL } from "../../i18n/i18n";

// ---- SSG params (language-agnostic slugs) ----
export function generateStaticParams() {
  // build once; content is localized at request time via ?lang
  return getPosts("de").map((p) => ({ slug: p.slug }));
}

// ---- SEO / metadata (localized) ----
export function generateMetadata({ params, searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const post = getPostBySlug(params.slug, lang);
  if (!post) return { title: lang === "ar" ? "لم يتم العثور على المقال | مدونة Sparway" : lang === "en" ? "Post not found | Sparway Blog" : "Beitrag nicht gefunden | Sparway Blog" };

  // keep the slug stable; include ?lang in canonical/OG so sharers see the right language
  const base = "https://www.sparway.com";
  const url = `${base}/blog/${post.slug}?lang=${lang}`;
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
      locale: lang === "ar" ? "ar_AR" : lang === "en" ? "en_US" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [img],
    },
  };
}

export default function BlogPostPage({ params, searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const rtl = isRTL(lang);

  // localized posts list for prev/next/related
  const posts = getPosts(lang);
  const postIndex = posts.findIndex((p) => p.slug === params.slug);
  if (postIndex === -1) return notFound();

  const post = posts[postIndex];
  const prev = posts[postIndex - 1] || null;
  const next = posts[postIndex + 1] || null;

  // simple related: tag overlap (already localized if you override tags)
  const related = posts
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
    <main className="min-h-screen bg-primary-black text-gray-300" dir={rtl ? "rtl" : "ltr"} lang={lang}>
      <article className="mx-auto max-w-4xl px-6 py-10">
        {/* Hero */}
        <header className={`${rtl ? "text-right" : ""} mb-8`}>
          <div className="text-xs text-white/60">
            {formatDate(post.date, lang)} • {post.readingMinutes || estimateReading(post)}{" "}
            {lang === "ar" ? "د" : lang === "en" ? "min" : "Min"}
          </div>

          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">{post.title}</h1>
          <p className="mt-3 text-white/80">{post.excerpt}</p>

          <div className={`mt-4 flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <Image
                src={post.author?.avatar || "/logo.png"}
                alt={post.author?.name || (lang === "ar" ? "الكاتب" : lang === "en" ? "Author" : "Autor")}
                fill
                className="object-cover"
              />
            </div>
            <div className={`text-sm text-white/80 ${rtl ? "text-right" : ""}`}>
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
        <PostClient post={post} prev={prev} next={next} related={related} lang={lang} rtl={rtl} />
      </article>
    </main>
  );
}

function formatDate(iso, lang = "de") {
  try {
    const locale = lang === "ar" ? "ar-EG" : lang === "en" ? "en-GB" : "de-DE";
    return new Date(iso).toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function estimateReading(post) {
  // fallback if readingMinutes missing; ~200 wpm
  const words = JSON.stringify(post.content || "").split(/\s+/).length;
  return Math.max(3, Math.round(words / 200));
}
