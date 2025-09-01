'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { serviceOptions } from '../constants';

const GetStartedContact = () => {
  const [selected, setSelected] = useState({});
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const toggle = (key) => setSelected((p) => ({ ...p, [key]: !p[key] }));
  const selectedList = useMemo(
    () => Object.entries(selected).filter(([, v]) => v).map(([k]) => k),
    [selected]
  );

  const selectedCount = selectedList.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email fallback (replace with your form endpoint if you have one)
    const body =
      `Name: ${form.name}\nEmail: ${form.email}\n\nServices:\n- ${selectedList.join('\n- ')}` +
      `\n\nMessage:\n${form.message}`;
    window.location.href =
      `mailto:info@sparway.com?subject=New%20Project%20Inquiry&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id="contact">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(99,102,241,.18),transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className={`${styles.innerWidth} mx-auto grid lg:grid-cols-2 gap-10 items-center`}
      >
        {/* Left: story + selector */}
        <div className="space-y-6">
      
          {/* Illustration (lightweight, rounded) */}
          <motion.div variants={planetVariants('left')} className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden">
            <Image
              src="/feedback-img.webp"
              alt="Sparway — Start your project"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Service selector */}
          <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="grid gap-5">
            {serviceOptions.map((group) => (
              <div key={group.category} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="mb-2 flex flex-wrap items-baseline gap-2">
                  <h4 className="text-white font-semibold">{group.category}</h4>
                  {group.note ? <span className="text-white/60 text-sm">{group.note}</span> : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const key = `${group.category}__${item}`;
                    const active = !!selected[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggle(key)}
                        className={`px-3 py-1.5 rounded-full text-sm transition
                          ${active
                            ? 'bg-emerald-400 text-[#0b1220]'
                            : 'bg-white/10 text-white/90 hover:bg-white/15'}`}
                        aria-pressed={active}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: form + strong CTA */}
{/* Right: form + strong CTA */}
<motion.div
  variants={fadeIn('left', 'tween', 0.15, 0.9)}
  className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 h-full"
>
<TypingText title="| Los geht’s – gemeinsam wachsen" textStyles="text-left" />
          <TitleText title={<>Bereit, richtig durchzustarten?</>} />

          <p className="text-white leading-relaxed">
            Wir kombinieren Strategie, Design und Performance-Marketing – damit aus Klicks
            echte Kund:innen werden. Wählen Sie, was Sie brauchen, und wir melden uns mit
            einem klaren Plan und transparenten Schritten.
          </p>

  <div>
    <h3 className="text-white font-extrabold text-2xl">Lassen Sie uns Ihr Wachstum planen</h3>
    <p className="text-white/75 mt-2">
      {selectedCount > 0
        ? `Ausgewählt: ${selectedCount} Dienstleistung(en). Senden Sie uns kurz Ihre Daten – wir melden uns mit einem Vorschlag.`
        : 'Sagen Sie uns kurz, worum es geht. Wir melden uns mit einem konkreten Plan und nächsten Schritten.'}
    </p>
  </div>

  <form onSubmit={handleSubmit} className="mt-auto grid gap-4">
    <input
      type="text"
      placeholder="Ihr Name"
      value={form.name}
      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
      className="p-3 rounded-lg border border-white/15 bg-transparent text-white placeholder:text-white/50"
      required
    />
    <input
      type="email"
      placeholder="Ihre E-Mail"
      value={form.email}
      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
      className="p-3 rounded-lg border border-white/15 bg-transparent text-white placeholder:text-white/50"
      required
    />
    <textarea
      rows={4}
      placeholder="Kurz Ihr Ziel & Kontext (optional)"
      value={form.message}
      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
      className="p-3 rounded-lg border border-white/15 bg-transparent text-white placeholder:text-white/50"
    />

    {selectedCount > 0 && (
      <div className="text-xs text-white/70">
        <span className="font-semibold text-white">Ihre Auswahl:</span>{' '}
        {selectedList.map((s) => s.split('__')[1]).join(', ')}
      </div>
    )}

    <button
      type="submit"
      className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 text-[#0b1220] font-semibold px-5 py-3 hover:bg-emerald-300 transition"
    >
      {selectedCount > 0 ? 'Anfrage mit Auswahl senden' : 'Unverbindlich anfragen'}
    </button>

    <p className="text-xs text-white/60">
      Keine langen Formulare. Wir melden uns innerhalb von 24h mit klaren nächsten Schritten.
    </p>
  </form>
</motion.div>

      </motion.div>
    </section>
  );
};

export default GetStartedContact;
