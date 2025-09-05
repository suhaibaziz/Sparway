// constants/packages.js
import { normalizeLang } from "../app/i18n/i18n";

// ----- i18n labels -----
const L = {
  de: {
    title: "Angebote",
    subtitle:
      "Wählen Sie ein Paket oder fragen Sie individuell an. Preise sind Startpreise — Budget & Umfang passen wir an Ihr Ziel an.",
    perMonth: "€ / Monat",
    price: "Preis",
    keywords: "Keywords (SEO)",
    posts: "Posts",
    reels: "Reels",
    adsBudget: "Ads-Budget",
    none: "—",
    plans: ["Bronze", "Silber", "Gold", "Platin"],
    groups: {
      google: "Google Ads Paket",
      meta: "Meta Paket",
      tiktok: "TikTok Paket",
    },
    cta: "Unverbindlich anfragen",
  },
  en: {
    title: "Packages",
    subtitle:
      "Pick a package or request a custom quote. Prices are starting points — we tailor budget & scope to your goals.",
    perMonth: "€ / month",
    price: "Price",
    keywords: "Keywords (SEO)",
    posts: "Posts",
    reels: "Reels",
    adsBudget: "Ads budget",
    none: "—",
    plans: ["Bronze", "Silver", "Gold", "Platinum"],
    groups: {
      google: "Google Ads Package",
      meta: "Meta Package",
      tiktok: "TikTok Package",
    },
    cta: "Request quote",
  },
  ar: {
    title: "الباقات",
    subtitle:
      "اختر باقة جاهزة أو اطلب عرضًا مخصصًا. الأسعار بداية تقديرية — نعدّل الميزانية والنطاق بحسب أهدافك.",
    perMonth: "€ / شهريًا",
    price: "السعر",
    keywords: "الكلمات المفتاحية (SEO)",
    posts: "منشورات",
    reels: "ريلز",
    adsBudget: "ميزانية الإعلانات",
    none: "—",
    plans: ["برونزي", "فضي", "ذهبي", "بلاتينيوم"],
    groups: {
      google: "باقة إعلانات Google",
      meta: "باقة Meta",
      tiktok: "باقة TikTok",
    },
    cta: "اطلب عرضًا",
  },
};

// ----- raw package data (numbers/strings are language-agnostic) -----
const base = {
  google: {
    // rows: labelKey -> values by column
    rows: [
      { key: "price", values: ["1000 €", "1250 €", "1500 €", "2000 €"] },
      { key: "keywords", values: [8, 12, 15, 20] },
      { key: "adsBudget", values: ["600 € (20×30)", "750 € (25×30)", "900 € (30×30)", "1000 € +"] },
    ],
  },
  meta: {
    rows: [
      { key: "price", values: ["300 €", "550 €", "1100 €", "1750 €"] },
      { key: "posts", values: [8, 12, 20, "30+"] },
      { key: "adsBudget", values: ["✗", "200 €", "500 €", "1000 €"] },
    ],
  },
  tiktok: {
    rows: [
      { key: "price", values: ["350 €", "800 €", "1000 €", "1500 €"] },
      { key: "reels", values: [4, 10, 15, 20] },
      { key: "adsBudget", values: ["✗", "300 €", "500 €", "1000 €"] },
    ],
  },
};

// public getter
export function getPackages(lang = "de") {
  const l = normalizeLang(lang);
  const t = L[l] || L.de;
  return {
    t,
    groups: [
      { id: "google", title: t.groups.google, ...base.google },
      { id: "meta", title: t.groups.meta, ...base.meta },
      { id: "tiktok", title: t.groups.tiktok, ...base.tiktok },
    ],
  };
}
