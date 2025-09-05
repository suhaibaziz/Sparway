'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { serviceOptions } from '../constants';

const GetStartedContact = () => {
  const [selected, setSelected] = useState({});
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Toast (نفس فكرة الصفحة الثانية)
  const [toast, setToast] = useState(null); // { type: 'success'|'error'|'info', message: string }
  const showToast = (message, type = 'info', timeout = 4000) => {
    setToast({ message, type });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), timeout);
  };
  useEffect(() => () => window.clearTimeout(showToast._t), []);

  const toggle = (key) => setSelected((p) => ({ ...p, [key]: !p[key] }));
  const selectedList = useMemo(
    () => Object.entries(selected).filter(([, v]) => v).map(([k]) => k),
    [selected]
  );
  const selectedCount = selectedList.length;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق بسيط
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Bitte Name angeben.';
    if (!form.email.trim()) nextErrors.email = 'Bitte E-Mail angeben.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      showToast('Bitte Pflichtfelder ausfüllen.', 'error');
      return;
    }

    // نحضّر البيانات بنفس الهيكل المستخدم سابقًا
    const selection = selectedList.map((key) => {
      // key شكلها: "Kategorie__Item"
      const [category, item] = key.split('__');
      return { category, item };
    });

    try {
      setSubmitting(true);

      const payload = {
        service: 'intake',                         // معرّف عام لهذا النموذج
        paket: 'services-selection',               // fallback paket
        paketTitle: 'Kontaktformular (Auswahl)',   // عنوان يظهر في الإيميل
        page: typeof window !== 'undefined' ? window.location.href : '',
        contact: {
          name: form.name,
          email: form.email,
          phone: '',           // أضف حقل هاتف هنا لو ضفته بالفورم لاحقًا
          details: form.message,
        },
        selection,             // القائمة المختارة (category + item)
        // note (اختياري): يمكن إضافة ملاحظة عامة
      };

      const { data, status } = await axios.post('/api/request', payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 10000,
      });

      if (status !== 200 || !data?.ok) throw new Error(data?.error || `HTTP ${status}`);

      showToast('Danke! Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.', 'success');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setSelected({});
    } catch (err) {
      const msg =
        (axios.isAxiosError(err) && (err.response?.data?.error || err.message)) ||
        'Unbekannter Fehler';
      console.error('Axios error:', msg);
      showToast(`Ups! Die Anfrage konnte nicht gesendet werden. ${msg}`, 'error', 7000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={`${styles.paddings} relative z-10 overflow-visible`} id="contact">
      {/* Toast */}
      <div className="pointer-events-none fixed top-4 right-4 z-[60] space-y-2">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              className={`pointer-events-auto w-[340px] rounded-xl border px-4 py-3 shadow-xl
                ${toast.type === 'success' ? 'bg-green-600/20 border-green-400/30' :
                   toast.type === 'error'   ? 'bg-red-600/20 border-red-400/30' :
                                              'bg-white/10 border-white/20'}`}
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${toast?.type === 'success' ? 'bg-green-300' : toast?.type === 'error' ? 'bg-red-300' : 'bg-white/60'}`}></div>
                <p className="text-sm leading-relaxed">{toast.message}</p>
                <button
                  type="button"
                  onClick={() => setToast(null)}
                  className="ml-auto text-xs text-white/70 hover:text-white"
                >
                  Schließen
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* soft ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(99,102,241,.18),transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className={`${styles.innerWidth} w-full min-w-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start`}
      >
        {/* Left */}
        <div className="space-y-6">
        <motion.div variants={planetVariants('left')} className="relative w-full min-w-0 aspect-[5/3] rounded-2xl overflow-hidden">
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

        {/* Right: form */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.15, 0.9)}
          className="flex flex-col w-full min-w-0 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8"
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
            <div>
              <input
                type="text"
                placeholder="Ihr Name"
                value={form.name}
                onChange={(e) => { setForm((p) => ({ ...p, name: e.target.value })); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                className={`p-3 rounded-lg border bg-transparent text-white placeholder:text-white/50 w-full
                  ${errors.name ? 'border-red-400/70' : 'border-white/15'}`}
                required
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Ihre E-Mail"
                value={form.email}
                onChange={(e) => { setForm((p) => ({ ...p, email: e.target.value })); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                className={`p-3 rounded-lg border bg-transparent text-white placeholder:text-white/50 w-full
                  ${errors.email ? 'border-red-400/70' : 'border-white/15'}`}
                required
              />
              {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
            </div>

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
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-700 to-green-800 text-white font-semibold px-5 py-3 hover:bg-emerald-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting
                ? 'Wird gesendet...'
                : selectedCount > 0
                  ? 'Anfrage mit Auswahl senden'
                  : 'Unverbindlich anfragen'}
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
