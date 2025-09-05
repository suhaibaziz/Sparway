// app/leistungen/[slug]/page.jsx
import { getServiceSlugs, getServiceBySlug } from "../../../constants/service";
import ServiceClient from "./ServiceClient"; // <- the client UI

// Server-only
export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const s = getServiceBySlug(params.slug);
  return {
    title: s ? `${s.title} | Sparway Marketing` : "Leistung",
    description: s?.tagline ?? "",
  };
}

export default function Page({ params }) {
  const s = getServiceBySlug(params.slug);
  if (!s) return <div className="p-10 text-white">Service nicht gefunden.</div>;
  return <ServiceClient service={s} />; // pass data to client
}
