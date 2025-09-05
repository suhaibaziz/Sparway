import { getPackages } from "../../constants/packages";
import { normalizeLang, isRTL } from "../i18n/i18n";
import PackagesClient from "./PackagesClient";

export const metadata = {
  title: "Angebote | Sparway",
  description:
    "Pakete für Google Ads, Meta und TikTok – transparente Startpreise, klare Leistungen.",
};

export default function AngebotePage({ searchParams }) {
  const lang = normalizeLang((searchParams?.lang || "de").toLowerCase());
  const rtl = isRTL(lang);
  const { t, groups } = getPackages(lang);

  // Render the fancy UI in a client child
  return <PackagesClient lang={lang} rtl={rtl} t={t} groups={groups} />;
}
