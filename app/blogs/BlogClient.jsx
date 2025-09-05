"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogClient({ initialPosts }) {
  const sp = useSearchParams();
  const rawLang = (sp.get("lang") || "de").toLowerCase();
  const lang = ["de", "en", "ar"].includes(rawLang) ? rawLang : "de";
  const rtl = lang === "ar";

  // tiny i18n
  const T = {
    de: {
      searchPh: "z.B. SEO..",
      sortNewest: "Neueste",
      sortPopular: "Beliebt",
      all: "Alle",
      readMore: "Weiterlesen",
      loadMore: "Mehr laden",
      empty: "Keine Beiträge gefunden. Passe Filter oder Suche an.",
      min: "Min",
      srchLabel: "Blog durchsuchen",
      kHint: "⌘K",
    },
    en: {
      searchPh: "e.g. SEO…",
      sortNewest: "Newest",
      sortPopular: "Popular",
      all: "All",
      readMore: "Read more",
      loadMore: "Load more",
      empty: "No posts found. Adjust filters or search.",
      min: "min",
      srchLabel: "Search blog",
      kHint: "⌘K",
    },
    ar: {
      searchPh: "مثال: سيو…",
      sortNewest: "الأحدث",
      sortPopular: "الأشهر",
      all: "الكل",
      readMore: "اقرأ المزيد",
      loadMore: "تحميل المزيد",
      empty: "لا توجد مقالات. غيّر عوامل التصفية أو ابحث.",
      min: "د",
      srchLabel: "ابحث في المدوّنة",
      kHint: "⌘K",
    },
  }[lang];

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(T.all);
  const [sortBy, setSortBy] = useState("newest"); // 'newest' | 'popular'
  const [visible, setVisible] = useState(6); // progressive reveal

  // helper to keep ?lang on links
  const withLang = (href) => {
    const sep = href.includes("?") ? "&" : "?";
    return `${href}${sep}lang=${lang}`;
  };

  const allTags = useMemo(() => {
    const s = new Set();
    initialPosts.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return [T.all, ...Array.from(s)];
  }, [initialPosts, T.all]);

  const sorted = useMemo(() => {
    const copy = [...initialPosts];
    copy.sort((a, b) => {
      if (sortBy === "popular") return (b.popularity || 0) - (a.popularity || 0);
      // newest by date
      return new Date(b.date) - new Date(a.date);
    });
    return copy;
  }, [initialPosts, sortBy]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((p) => {
      const matchTag = activeTag === T.all || p.tags?.includes(activeTag);
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q));
      return matchTag && matchQ;
    });
  }, [sorted, activeTag, query, T.all]);

  // featured = first of filtered (after sort) for a hero card
  const [featured, ...rest] = filtered;

  // reset visible when filters change
  useEffect(() => setVisible(6), [query, activeTag, sortBy]);

  return (
    <div dir={rtl ? "rtl" : "ltr"} lang={lang}>
      {/* Controls */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder={T.searchPh}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 max-[700px]:text-[10px] max-[700px]:py-2 max-[611px]:min-w-[80%] "
              aria-label={T.srchLabel}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">
              {T.kHint}
            </span>
          </div>
          <Select
            className="max-[700px]:hidden max-[700px]:text-[8px]"
            label="||"
            value={sortBy}
            onChange={setSortBy}
            options={[
              { value: "newest", label: T.sortNewest },
              { value: "popular", label: T.sortPopular },
            ]}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTag(t)}
              className={`rounded-full px-3 py-1.5 text-sm border transition max-[600px]:text-[10px] text-gray-400
                ${activeTag === t ? "bg-yellow-400 text-black border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10 "}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[260px]">
              <Image
                src={featured.cover}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex flex-col">
              <span className="text-xs text-white/60">
                {formatDate(featured.date, lang)} • {featured.readingMinutes} {T.min}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white max-[700px]:text-[14px]">
                {featured.title}
              </h2>
              <p className="mt-2 text-white/80 max-[700px]:text-[12px]">{featured.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {featured.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs  text-gray-300 rounded-full bg-white/10 px-2 py-1 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4">
                <a
                  href={withLang(`/blogs/${featured.slug}`)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 max-[700px]:text-[12px] text-[white] font-semibold px-4 py-2"
                >
                  {T.readMore}
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {rest.slice(0, visible - 1).map((p) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
            >
              <a href={withLang(`/blogs/${p.slug}`)} className="block">
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-white/60">
                    {formatDate(p.date, lang)} • {p.readingMinutes} {T.min}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/75 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={p.author?.avatar || "/avatars/sparway.png"}
                        alt={p.author?.name || (lang === "ar" ? "الكاتب" : lang === "en" ? "Author" : "Autor")}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-white/70">{p.author?.name}</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      {rest.length > visible - 1 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + 6)}
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm hover:bg-white/15"
          >
            {T.loadMore}
          </button>
        </div>
      )}

      {/* Empty state */}
      {!featured && (
        <div className="mt-16 text-center text-white/70">{T.empty}</div>
      )}
    </div>
  );
}

function Select({ value, onChange, options, label, className = "" }) {
  return (
    <label className={`inline-flex items-center gap-2 text-white/80 ${className}`}>
      <span className="text-sm">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm max-[700px]:text-[8px] text-white focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#0b1220]">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
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
