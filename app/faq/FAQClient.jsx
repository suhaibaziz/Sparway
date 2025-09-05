"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQClient({ initialCategories }) {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState("Alle");
  const [openId, setOpenId] = useState(null);

  // read hash for deep link (#question-id)
  useEffect(() => {
    const id = decodeURIComponent((typeof window !== "undefined" && window.location.hash || "").replace("#", ""));
    if (id) setOpenId(id);
  }, []);

  const categories = useMemo(() => ["Alle", ...initialCategories.map((c) => c.label)], [initialCategories]);

  const flatList = useMemo(() => {
    const items = [];
    initialCategories.forEach((c) => {
      c.items.forEach((it) => items.push({ ...it, category: c.label }));
    });
    return items;
  }, [initialCategories]);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return flatList.filter((it) => {
      const inCat = activeCat === "Alle" || it.category === activeCat;
      const matchQ =
        !ql ||
        it.q.toLowerCase().includes(ql) ||
        it.a.toLowerCase().includes(ql) ||
        it.category.toLowerCase().includes(ql);
      return inCat && matchQ;
    });
  }, [flatList, activeCat, q]);

  return (
    <>
      {/* controls */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Frage suchen… z. B. „SEO“, „Preise“, „Tracking“"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="max-[700px]:text-[9px] w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="FAQ durchsuchen"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xs">⌘K</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCat(c)}
              className={`max-[700px]:text-[12px] rounded-full px-3 py-1.5 text-sm border transition
                ${activeCat === c ? "bg-white/20 border-white/30 text-white" : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* list */}
      <div className="rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10">
        {filtered.length ? (
          filtered.map((it) => (
            <FAQRow key={it.id} item={it} openId={openId} setOpenId={setOpenId} />
          ))
        ) : (
          <div className="p-6 text-center text-gray-300">Keine Einträge gefunden.</div>
        )}
      </div>

      {/* bottom CTA */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10 p-6">
        <h3 className="text-xl font-bold text-white">Noch Fragen?</h3>
        <p className="mt-1 text-gray-300">
          Schreiben Sie uns kurz, wir melden uns zeitnah mit einer klaren Antwort.
        </p>
        <div className="mt-3 flex gap-2">
          <a
            href="mailto:contact-marketing@Sparway.com?subject=Frage%20zu%20Sparway"
            className="rounded-xl bg-white/15 px-4 py-2 text-sm max-[700px]:text-[12px] text-white hover:bg-white/25 border border-white/20"
          >
            E-Mail senden
          </a>
          <a
            href="https://wa.me/4917666623360"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-400 text-[#0b1220] px-4 py-2 max-[700px]:text-[12px] text-sm font-semibold hover:bg-emerald-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

function FAQRow({ item, openId, setOpenId }) {
  const isOpen = openId === item.id;
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const el = document.getElementById(item.id);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen, item.id]);

  return (
    <div id={item.id} className="px-4 sm:px-6 max-[700px]:text-[12px]">
      <button
        type="button"
        onClick={() => {
          const next = isOpen ? null : item.id;
          setOpenId(next);
          if (history.replaceState) history.replaceState(null, "", next ? `#${next}` : " ");
        }}
        className="w-full py-4 flex items-start gap-3 text-left"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
      >
        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400/80" />
        <span className="flex-1 font-semibold text-white">{item.q}</span>
        <svg
          className={`mt-1 h-5 w-5 shrink-0 text-gray-300 transition-transform ${isOpen ? "rotate-45" : ""}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${item.id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="pb-5 pl-5 text-gray-300">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
