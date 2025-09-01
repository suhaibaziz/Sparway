'use client';

// app/leistungen/[slug]/page.jsx
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
// اختر واحداً من السطرين حسب مكان الملف:
// import { getServiceSlugs, getServiceBySlug } from "@/data/services";
import { getServiceSlugs, getServiceBySlug } from "../../../constants/service";
import LinkPreviewCard from "../../../components/LinkPreviewCard";
const previewSrc = (url) =>
  // جرّب mShots أولاً (سريع ومجاني) – غيّر إلى thum.io إذا حبيت
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`;
  // بديل thum.io:
  // `https://image.thum.io/get/width/800/${url}`;

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export default function ServicePage({ params }) {
  const s = getServiceBySlug(params.slug);
  if (!s) return <div className="p-10 text-white">Service nicht gefunden.</div>;

  return (
    <main className="min-h-screen text-white bg-primary-black">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{s.title}</h1>
            <p className="mt-4 text-white/80 text-lg">{s.tagline}</p>
            <div className="mt-8 flex gap-3">
              <Link href={s.cta.href} className="rounded-2xl px-6 py-3 font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                {s.cta.text}
              </Link>
              <Link href="/kontakt" className="rounded-2xl px-6 py-3 font-semibold border border-white/20 hover:bg-white/10">
                Unverbindlich anfragen
              </Link>
            </div>
          </div>
        
          <motion.div
          className="relative sm:w-[110px] w-[110px] sm:h-[110px] h-[110px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        >
          <Image
            src="/log-circle.png"
            alt="logo"
            fill
            sizes="112px"
            className="object-contain max-w-[80%]"
            priority
          />
        </motion.div>
          
        </div>
      </section>

      {/* Leistungspakete & Beispiele (بديل المشاريع/Preise) */}
   {/* Leistungspakete & Beispiele */}
<section className="mx-auto max-w-6xl px-6 pb-6">
  <h2 className="text-2xl md:text-3xl font-bold">Leistungspakete & Beispiele</h2>
  <p className="mt-2 text-white/70">
    Wählen Sie das passende Paket – alle Preise sind Startpreise und werden an Ihr Projekt angepasst.
  </p>

  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {s.deliverables.map((d) => {
      const href = `/termin?service=${encodeURIComponent(s.slug)}&paket=${encodeURIComponent(d.slug)}`;
      return (
        <div key={d.slug} className="rounded-2xl border border-white/10 p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{d.title}</h3>
            <span className="text-sm px-3 py-1 rounded-full bg-white/10">{d.timeline}</span>
          </div>
          <p className="mt-2 text-white/80">{d.description}</p>

          <ul className="mt-4 space-y-2 text-white/80">
            {d.includes.map((f, i) => <li key={i}>• {f}</li>)}
          </ul>

          {/* أمثلة من الإنترنت */}
{/* أمثلة من الويب مع صور تلقائية */}
{d.examples?.length > 0 && (
  <div className="mt-5">
    <p className="text-white/70 text-sm mb-2">Beispiele aus dem Web:</p>

    <div className="grid grid-cols-1 gap-3">
      {d.examples.map((ex, i) => (
        <a
          key={i}
          href={ex.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-400/50 transition"
          title={ex.note || ex.title}
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={previewSrc(ex.url)}
              alt={ex.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="p-3 flex items-center justify-between">
            <div>
              <p className="font-semibold">{ex.title}</p>
              {ex.note && <p className="text-sm text-white/60">{ex.note}</p>}
            </div>
            <span className="text-xs px-2 py-1 rounded bg-white/10">Live&nbsp;Preview</span>
          </div>
        </a>
      ))}
    </div>
  </div>
)}


          <div className="mt-5 flex items-center justify-between">
            <span className="text-cyan-300 font-semibold">{d.startPrice}</span>
            <Link
              href={href}
              className="rounded-xl px-4 py-2 font-semibold bg-white/10 hover:bg-white/20"
              aria-label={`Angebot für ${d.title} anfragen`}
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* FAQs */}
      {s.faqs?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold">Häufige Fragen</h2>
          <div className="mt-6 space-y-4">
            {s.faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-white/10 p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-fuchsia-600/30 to-cyan-500/30 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold">{s.tagline}</h3>
          <p className="mt-2 text-white/80">Lassen Sie uns Ihre Ziele besprechen – wir zeigen Ihnen den schnellsten Weg dorthin.</p>
          <Link href={s.cta.href} className="mt-6 inline-block rounded-2xl px-6 py-3 font-semibold bg-white/10 hover:bg-white/20">
            {s.cta.text}
          </Link>
        </div>
      </section>
    </main>
  );
}
