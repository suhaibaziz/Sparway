'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  // ---- modal + form state (same shape as your service modal) ----
  const [modalOpen, setModalOpen] = useState(false);
  const [activePackage, setActivePackage] = useState({ slug: 'standard', title: 'Allgemeine Anfrage' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // ---- toast (modern alerts) ----
  const [toast, setToast] = useState(null); // { type: 'success'|'error'|'info', message }
  const showToast = (message, type = 'info', timeout = 4000) => {
    setToast({ message, type });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), timeout);
  };
  useEffect(() => () => window.clearTimeout(showToast._t), []);

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // unified open
  const handleStart = (d = null) => {
    const fallback = { slug: 'standard', title: 'Allgemeine Anfrage' };
    setActivePackage(d || fallback);
    setModalOpen(true);
  };

  // same submit logic you used in ServiceClient (payload aligned)
  const handleSubmit = async () => {
    const nextErrors = {};
    if (!formData.name?.trim()) nextErrors.name = 'Bitte Name angeben.';
    if (!formData.email?.trim()) nextErrors.email = 'Bitte E-Mail angeben.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      showToast('Bitte Pflichtfelder ausfüllen.', 'error');
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        // Use a generic service identifier for homepage hero
        service: 'hero',
        paket: activePackage.slug,              // 'standard' by default
        paketTitle: activePackage.title || 'Hero Anfrage',
        page: typeof window !== 'undefined' ? window.location.href : '',
        contact: formData,                      // { name, email, phone, details }
      };

      const { data, status } = await axios.post('/api/request', payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 10000,
      });

      if (status !== 200 || !data?.ok) throw new Error(data?.error || `HTTP ${status}`);

      showToast('Danke! Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.', 'success');
      setModalOpen(false);
      setFormData({ name: '', email: '', phone: '', details: '' });
      setErrors({});
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
    <section
      className={`${styles.yPaddings} max-lg:pl-6 max-lg:pr-6 pl-36 pr-36 [content-visibility:auto] [contain-intrinsic-size:900px]`}
    >
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
                <p className="text-sm leading-relaxed text-white">{toast.message}</p>
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

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        {/* Headline & Subheading */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h1
            variants={textVariant(0.8)}
            className="text-4xl sm:text-6xl font-extrabold text-white leading-tight"
          >
            Ihr Partner für digitales Wachstum
          </motion.h1>

          <motion.p
            variants={textVariant(1.05)}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
          >
            Effektives Social Media Management, modernes Webdesign, SEO und zielgerichtete
            Performance-Ads – alles aus einer Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textVariant(1.15)}
            className="mt-8 flex justify-center flex-wrap items-center gap-3"
          >
            {/* Scroll Button */}
            <button
              type="button"
              onClick={() => smoothScroll('leistungen')}
              className="rounded-2xl px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-yellow-500 to-green-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Leistungen entdecken"
            >
              Leistungen entdecken
            </button>

            {/* Modal Trigger Button (same logic) */}
            <button
              type="button"
              onClick={() => handleStart(null)} // opens modal with fallback paket
              className="rounded-2xl px-6 py-3 text-base font-semibold text-white/90 border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Kostenlose Beratung"
            >
              Kostenlose Beratung
            </button>
          </motion.div>
        </div>

        {/* Hero Visual with two images */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[2px]"
        >
          <div className="absolute w-full h-[68px] hero-gradient rounded-tl-[140px] rounded-tr-[140px] z-[0] sm:-top-[35px] max-lg:-top-[37px]" />

          <div className="relative w-full h-[220px] sm:h-[600px] rounded-tl-[140px] z-10 flex flex-row items-stretch justify-center gap-4">
            <div className="relative w-1/2 h-full">
              <Image
                src="/hero.png"
                alt="Digitales Marketing – Illustration"
                fill
                priority
                placeholder="blur"
                blurDataURL="/hero-blur.png"
                className="object-contain object-center"
              />
            </div>

            <div className="relative w-1/2 h-full">
              <Image
                src="/craiyon_124738_image.webp"
                alt="Zusätzliches Bild"
                fill
                loading="lazy"
                className="object-contain object-center rounded-xl"
              />
            </div>
          </div>

          <div className="absolute w-full h-[60px] hero-gradient rounded-bl-[140px] rounded-br-[140px] z-[0] sm:-bottom-[20px] -bottom-[10px]" />

          {/* Explore stamp */}
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.div
              className="[will-change:transform]"
              animate={prefersReduced ? {} : { rotate: 360 }}
              transition={prefersReduced ? {} : { repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              <Image
                onClick={() => smoothScroll('explore')}
                src="/stamp.png"
                alt="Zum Erkunden scrollen"
                width={155}
                height={155}
                loading="lazy"
                sizes="(max-width: 640px) 80px, 105px"
                className="cursor-pointer max-[680px]:max-w-[80px]"
                role="button"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ---- MODAL (local to Hero) ---- */}
      {modalOpen && (
        <div className="fixed text-white inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-primary-black border border-white/20 rounded-2xl p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Ihre Kontaktdaten</h3>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }); }}
                  className={`w-full px-4 py-2 rounded-xl bg-white/10 border focus:outline-none ${errors.name ? 'border-red-400/60' : 'border-white/20'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                  className={`w-full px-4 py-2 rounded-xl bg-white/10 border focus:outline-none ${errors.email ? 'border-red-400/60' : 'border-white/20'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>

              <input
                type="tel"
                placeholder="Telefonnummer (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <textarea
                placeholder="Weitere Details zum Projekt"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none min-h-[100px]"
              />
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10"
                disabled={submitting}
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Wird gesendet...' : 'Absenden'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
