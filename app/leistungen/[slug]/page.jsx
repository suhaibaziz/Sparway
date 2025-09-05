// app/leistungen/[slug]/page.jsx
import { normalizeLang, isRTL } from "../../i18n/i18n"; // adjust path if yours is ../app/i18n/i18n
import { getServiceSlugs, getServiceBySlug } from "../../../constants/service";
import ServiceClient from "./ServiceClient";

// Server-only
export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

// metadata should also localize
export async function generateMetadata({ params, searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const s = getServiceBySlug(params.slug, lang);
  return {
    title: s ? `${s.title} | Sparway Marketing` : "Leistung",
    description: s?.tagline ?? "",
  };
}

export default function Page({ params, searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const rtl = isRTL(lang);

  const s = getServiceBySlug(params.slug, lang);
  if (!s) return <div className="p-10 text-white">Service nicht gefunden.</div>;

  // pass lang/rtl down so the client can render correctly
  return (
    <div dir={rtl ? "rtl" : "ltr"} lang={lang}>
      <ServiceClient service={s} lang={lang} rtl={rtl} />
    </div>
  );
}
