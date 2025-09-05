// lib/i18n.js
export const SUPPORTED_LANGS = ["de", "en", "ar"];

export const normalizeLang = (lang) =>
  SUPPORTED_LANGS.includes(lang) ? lang : "de";

export const isRTL = (lang) => normalizeLang(lang) === "ar";

export const withLang = (href, lang) => {
  if (!href) return href;
  try {
    const base = typeof window !== "undefined" ? window.location.origin : "http://localhost";
    const u = new URL(href, base);
    if (lang) u.searchParams.set("lang", normalizeLang(lang));
    return u.pathname + (u.search ? `?${u.searchParams.toString()}` : "") + u.hash;
  } catch {
    // relative path (no query yet)
    const q = href.includes("?") ? "&" : "?";
    return `${href}${q}lang=${normalizeLang(lang)}`;
  }
};

// Pick the best translation, fallback to 'de' then to any string value
export const tPick = (obj, lang) => {
  const L = normalizeLang(lang);
  if (!obj || typeof obj !== "object") return obj;
  return obj[L] ?? obj.de ?? Object.values(obj)[0];
};
