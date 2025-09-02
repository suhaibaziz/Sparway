'use client';

import { FiPlus, FiX } from "react-icons/fi";

import Image from "next/image";

import { useState, useMemo } from "react";

import { motion } from 'framer-motion';

import Link from "next/link";

import { getServiceSlugs, getServiceBySlug } from "../../../constants/service";

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

{/* Leistungspakete & Beispiele */}
{/* Leistungspakete & Beispiele */}
{/* Leistungspakete & Beispiele */}
<section className="mx-auto max-w-6xl px-6 pb-6">
  <h2 className="text-2xl md:text-3xl font-bold">Leistungspakete & Beispiele</h2>
  <p className="mt-2 text-white/70">
    Wählen Sie das passende Paket – alle Preise sind Startpreise und werden an Ihr Projekt angepasst.
  </p>

  {(() => {
    const isWebdesign = s.slug === 'webdesign';
    const [expanded, setExpanded] = useState(null);

    const Card = ({ d }) => {
      const isOpen = expanded === d.slug;

      // Decide which examples to render
      const examples = d.examples?.length ? (isOpen ? d.examples : [d.examples[0]]) : [];

      return (
        <div
          key={d.slug}
          className={[
            'rounded-2xl border border-white/10 p-6 flex flex-col transition-all',
            isWebdesign && isOpen ? 'col-span-full' : '',
          ].join(' ')}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold">{d.title}</h3>
              <span className="mt-1 inline-flex text-xs px-3 py-1 rounded-full bg-white/10">
                {d.timeline}
              </span>
            </div>

            {isWebdesign && (
              <button
  type="button"
  onClick={() => setExpanded(isOpen ? null : d.slug)}
  className={`${
    isOpen ? "bg-red-600" : "bg-green-800"
  } rounded-xl p-2 hover:bg-white/20 flex items-center justify-center`}
  aria-expanded={isOpen}
  aria-controls={`pkg-${d.slug}`}
  title={isOpen ? "Schließen" : "Details"}
>
  {isOpen ? (
    <FiX className="w-5 h-5 text-white" />
  ) : (
    <FiPlus className="w-5 h-5 text-white" />
  )}
</button>
            )}
          </div>

          <p className="mt-3 text-sm text-white/80">{d.description}</p>

          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {d.includes.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>

          {/* Beispiele */}
          {examples.length > 0 && (
            <div id={`pkg-${d.slug}`} className="mt-5">
              <p className="mb-2 text-sm text-white/70">
                {isOpen ? 'Beispiele aus dem Web:' : 'Beispiel aus dem Web:'}
              </p>

              <div className={isOpen ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'grid grid-cols-1 gap-3'}>
                {examples.map((ex, i) => (
                  <a
                    key={i}
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-400/50 transition"
                    title={ex.note || ex.title}
                  >
                    <div className={`relative w-full ${isOpen ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
                      <Image
                        src={previewSrc(ex.url)}
                        alt={ex.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{ex.title}</p>
                        {ex.note && <p className="text-sm text-white/60">{ex.note}</p>}
                      </div>
                      <span className="text-xs rounded bg-white/10 px-2 py-1">Live&nbsp;Preview</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <span className="text-cyan-300 font-semibold">{d.startPrice}</span>
            <Link
              href={`/termin?service=${encodeURIComponent(s.slug)}&paket=${encodeURIComponent(d.slug)}`}
              className="rounded-xl px-4 py-2 font-semibold bg-white/10 hover:bg-white/20"
              aria-label={`Angebot für ${d.title} anfragen`}
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      );
    };

    // Keep all cards visible; expanded one spans full row
    const gridClass =
      'grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 auto-rows-auto';

    return (
      <div className={gridClass}>
        {s.deliverables.map(d => (
          <Card key={d.slug} d={d} />
        ))}
      </div>
    );
  })()}
</section>
{/* Branding / Design – Galerie */}
{s.gallery?.length > 0 && (
  <section className="mx-auto max-w-6xl px-6 py-10">
    <h2 className="text-2xl md:text-3xl font-bold">Branding Galerie</h2>
    <p className="mt-2 text-white/70">
      Ein Auszug unserer Arbeiten – Logos, Social-Vorlagen, Print/Packaging & mehr.
    </p>

    {(() => {
      const [activeType, setActiveType] = useState("Alle");
      const types = useMemo(() => {
        const set = new Set(s.gallery.map(g => g.type));
        return ["Alle", ...Array.from(set)];
      }, [s.gallery]);

      const items = useMemo(() => {
        if (activeType === "Alle") return s.gallery;
        return s.gallery.filter(g => g.type === activeType);
      }, [activeType, s.gallery]);

      return (
        <>
          {/* Filter chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveType(t)}
                className={`rounded-full px-4 py-2 text-sm border ${
                  activeType === t
                    ? "bg-white/20 border-white/30"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((g, i) => (
              <div key={`${g.src}-${i}`} className="group overflow-hidden rounded-xl border border-white/10">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={g.src}
                    alt={g.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform"
                    // remove unoptimized if local files in /public
                    // unoptimized 
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{g.title}</p>
                    <p className="text-sm text-white/60">{g.type}</p>
                  </div>
                  <span className="text-xs rounded bg-white/10 px-2 py-1">Design</span>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    })()}
  </section>
)}



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
