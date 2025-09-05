// app/blog/page.jsx
import { getPosts } from "../../constants/blogPosts";           // <-- i18n-aware getters
import BlogClient from "./BlogClient";
import { normalizeLang, isRTL } from "../i18n/i18n";       // adjust path if needed

const UI = {
  de: {
    title: "Sparway Blog",
    desc:
      "Frische Playbooks zu SEO, Webdesign, Social & Performance – kurz, praxisnah, direkt umsetzbar.",
    metaTitle: "Blog | Sparway Marketing",
    metaDesc:
      "Insights zu SEO, Webdesign, Social & Performance-Ads. Taktiken, Frameworks und Praxisbeispiele von Sparway Marketing.",
  },
  en: {
    title: "Sparway Blog",
    desc:
      "Fresh playbooks for SEO, web design, social & performance — short, practical, immediately usable.",
    metaTitle: "Blog | Sparway Marketing",
    metaDesc:
      "Insights on SEO, web design, social & performance ads. Tactics, frameworks and real-world examples from Sparway Marketing.",
  },
  ar: {
    title: "مدوّنة Sparway",
    desc:
      "أدلة سريعة للسيو، تصميم الويب، السوشيال والإعلانات — مختصرة وعملية قابلة للتطبيق فورًا.",
    metaTitle: "المدونة | Sparway Marketing",
    metaDesc:
      "رؤى حول السيو، تصميم الويب، السوشيال وإعلانات الأداء. تكتيكات وأُطر وأمثلة عملية من Sparway Marketing.",
  },
};

// Localized <head> metadata
export function generateMetadata({ searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const t = UI[lang] ?? UI.de;

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      type: "website",
      url: `https://www.sparway.com/blog?lang=${lang}`,
    },
    twitter: {
      card: "summary",
      title: t.metaTitle,
      description: t.metaDesc,
    },
  };
}

export default function BlogPage({ searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const rtl = isRTL(lang);
  const t = UI[lang] ?? UI.de;

  // localized posts list
  const posts = getPosts(lang);

  return (
    <main className="min-h-screen bg-primary-black" dir={rtl ? "rtl" : "ltr"} lang={lang}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className={`${rtl ? "text-right" : ""} mb-8`}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {t.title}
          </h1>
          <p className="mt-2 text-white/70 max-w-2xl">{t.desc}</p>
        </header>

        <BlogClient initialPosts={posts} lang={lang} rtl={rtl} />
      </div>
    </main>
  );
}
