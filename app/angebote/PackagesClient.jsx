"use client";

import { motion } from "framer-motion";
import { withLang } from "../i18n/i18n";
import {
  Medal,
  Trophy,
  Crown,
  Gem,
  Tag,
  Search,
  FileText,
  Clapperboard,
  Wallet2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PackagesClient({ lang, rtl, t, groups }) {
  return (
    <main
      className="min-h-screen bg-[#0b1220] text-white relative overflow-hidden"
      dir={rtl ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#10B9811A] blur-3xl" />
        <div className="absolute top-[33%] -right-40 h-[520px] w-[520px] rounded-full bg-[#D946EF1A] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Hero */}
        <header className={`${rtl ? "text-right" : ""} mb-10`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] px-3 py-1 text-xs text-[#FFFFFFB3]">
            <Sparkles className="h-3.5 w-3.5" />
            {lang === "ar"
              ? "أسعار شفافة، نتائج قابلة للقياس"
              : lang === "en"
              ? "Transparent pricing, measurable results"
              : "Transparente Preise, messbare Ergebnisse"}
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">{t.title}</h1>
          <p className="mt-3 text-[#FFFFFFB3] max-w-3xl leading-relaxed">{t.subtitle}</p>
        </header>

        {/* Packages */}
        <div className="grid gap-14">
          {groups.map((g, gi) => (
            <section key={g.id} className="relative">
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold inline-flex items-center gap-3">
                  <GradientDot />
                  <span>{g.title}</span>
                </h2>
              </div>

              <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#10B98166] via-[#06B6D44D] to-[#D946EF66]">
                <div className="rounded-3xl bg-[#FFFFFF1A] backdrop-blur-xl">
                  <div className="p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {pivotPlans(g.rows, t).map((plan, idx) => {
                        const popular = /gold|golden/i.test(plan.name) || idx === 2;
                        const Icon = getPlanIcon(plan.name, idx);
                        return (
                          <motion.article
                            key={`${plan.name}-${idx}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 + gi * 0.02 }}
                            className={`group relative rounded-2xl border border-[#FFFFFF1A] bg-[#0f183099] p-5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.35)] transition ${
                              popular ? "outline outline-1 outline-[#34D39966]" : ""
                            }`}
                          >
                            {popular && (
                              <div className={`absolute ${rtl ? "left-0" : "right-0"} -top-3`}>
                                <span className="rounded-full bg-[#10B98133] text-emerald-200 border border-[#34D3994D] px-3 py-1 text-[11px] font-semibold tracking-wide">
                                  {lang === "ar" ? "الأكثر شيوعًا" : lang === "en" ? "Most popular" : "Am beliebtesten"}
                                </span>
                              </div>
                            )}

                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFFFFF1A] border border-[#FFFFFF1A]">
                                <Icon className="h-5 w-5 text-[#FFFFFFE6]" />
                              </div>
                              <h3 className="text-xl font-extrabold tracking-wide">{plan.name}</h3>
                            </div>

                            <div className="mt-3 flex items-baseline gap-2">
                              <div className="text-3xl font-extrabold">{plan.price}</div>
                              <div className="text-[#FFFFFF99] text-sm">({t.perMonth})</div>
                            </div>

                            <ul className="mt-5 space-y-3 text-sm">
                              {plan.features.map((f, i) => {
                                const FeatureIcon = getFeatureIcon(f.key);
                                return (
                                  <li key={i} className="flex items-start gap-3 text-[#FFFFFFCC]">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#FFFFFF1A] border border-[#FFFFFF1A] mt-0.5 shrink-0">
                                      <FeatureIcon className="h-3.5 w-3.5" />
                                    </span>
                                    <span className="leading-6">
                                      <span className="text-[#FFFFFFB3]">{f.label}:</span>{" "}
                                      <span className="font-semibold text-white">{f.value}</span>
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>

                            <a
                              href={withLang("/#contact", lang)}
                              onClick={(e) => e.stopPropagation()}
                              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition bg-gradient-to-r from-yellow-600 to-emerald-700 hover:from-yellow-500 hover:to-emerald-600"
                            >
                              {t.cta}
                              <ArrowRight className="h-4 w-4" />
                            </a>

                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                              <div className="absolute -inset-8 bg-gradient-to-tr from-[#34D3991A] via-transparent to-[#E879F91A] blur-2xl" />
                            </div>
                          </motion.article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className={`mt-12 ${rtl ? "text-left" : "text-right"} text-[#FFFFFF99] text-sm`}>
          {lang === "ar"
            ? "الأسعار تقديرية. سنعدّل النطاق والميزانية بعد مكالمة قصيرة لفهم أهدافك."
            : lang === "en"
            ? "Prices are starting points. We fine-tune scope and budget after a short call."
            : "Alle Preise sind Startpreise. Umfang & Budget verfeinern wir nach einem kurzen Gespräch."}
        </div>
      </div>
    </main>
  );
}

/* ---------- helpers ---------- */

function GradientDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-400" />
    </span>
  );
}

function getPlanIcon(name, idx) {
  const n = name.toLowerCase();
  if (n.includes("platin") || n.includes("platinum")) return Gem;
  if (n.includes("gold")) return Crown;
  if (n.includes("silver")) return Trophy;
  if (n.includes("bronze")) return Medal;
  return [Medal, Trophy, Crown, Gem][idx] || Medal;
}

function getFeatureIcon(key) {
  switch (key) {
    case "price":
      return Tag;
    case "keywords":
      return Search;
    case "posts":
      return FileText;
    case "reels":
      return Clapperboard;
    case "adsBudget":
    default:
      return Wallet2;
  }
}

function pivotPlans(rows, t) {
  const colCount = Math.max(...rows.map((r) => r.values.length));
  const names = t.plans.slice(0, colCount);

  return Array.from({ length: colCount }).map((_, idx) => {
    const price = (rows.find((r) => r.key === "price")?.values ?? [])[idx] ?? t.none;
    const features = rows
      .filter((r) => r.key !== "price")
      .map((r) => ({
        key: r.key,
        label:
          r.key === "keywords"
            ? t.keywords
            : r.key === "posts"
            ? t.posts
            : r.key === "reels"
            ? t.reels
            : t.adsBudget,
        value: String(r.values[idx] ?? t.none),
      }));
    return { name: names[idx] ?? `Plan ${idx + 1}`, price, features };
  });
}
