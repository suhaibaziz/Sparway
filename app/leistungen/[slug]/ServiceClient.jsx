// app/leistungen/[slug]/ServiceClient.jsx
'use client';

import { FiPlus, FiX } from "react-icons/fi";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { normalizeLang, isRTL } from "../../i18n/i18n"; // adjust if path differs

const previewSrc = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`;

// ----- UI i18n -----
const UI = {
  de: {
    heroCtaFallback: "Allgemeine Anfrage",
    ctaSecondary: "Unverbindlich anfragen",
    toastSuccess: "Danke! Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.",
    toastErrorPrefix: "Ups! Die Anfrage konnte nicht gesendet werden.",
    validateName: "Bitte Name angeben.",
    validateEmail: "Bitte E-Mail angeben.",
    close: "Schließen",
    heroExamplesTitle: "Leistungspakete & Beispiele",
    heroExamplesDesc:
      "Wählen Sie das passende Paket – alle Preise sind Startpreise und werden an Ihr Projekt angepasst.",
    details: "Details",
    examplesOne: "Beispiel aus dem Web:",
    examplesMany: "Beispiele aus dem Web:",
    livePreview: "Live Preview",
    startFrom: "ab",
    start: "Starten",
    brandingGallery: "Branding Galerie",
    brandingDesc:
      "Ein Auszug unserer Arbeiten – Logos, Social-Vorlagen, Print/Packaging & mehr.",
    all: "Alle",
    design: "Design",
    contactTitle: "Ihre Kontaktdaten",
    namePH: "Name",
    emailPH: "E-Mail",
    phonePH: "Telefonnummer (optional)",
    detailsPH: "Weitere Details zum Projekt",
    cancel: "Abbrechen",
    submit: "Absenden",
    sending: "Wird gesendet...",
  },
  en: {
    heroCtaFallback: "General inquiry",
    ctaSecondary: "Request a callback",
    toastSuccess: "Thanks! Your request was sent. We’ll get back shortly.",
    toastErrorPrefix: "Oops! We couldn’t send your request.",
    validateName: "Please enter your name.",
    validateEmail: "Please enter your email.",
    close: "Close",
    heroExamplesTitle: "Packages & Examples",
    heroExamplesDesc:
      "Pick what fits — prices are starting points and will be tailored to your project.",
    details: "Details",
    examplesOne: "Example from the web:",
    examplesMany: "Examples from the web:",
    livePreview: "Live Preview",
    startFrom: "from",
    start: "Start",
    brandingGallery: "Branding Gallery",
    brandingDesc:
      "Selected work — logos, social templates, print/packaging & more.",
    all: "All",
    design: "Design",
    contactTitle: "Your contact details",
    namePH: "Name",
    emailPH: "Email",
    phonePH: "Phone (optional)",
    detailsPH: "More details about the project",
    cancel: "Cancel",
    submit: "Send",
    sending: "Sending...",
  },
  ar: {
    heroCtaFallback: "طلب عام",
    ctaSecondary: "اطلب تواصلاً",
    toastSuccess: "شكرًا! تم إرسال طلبك، سنعاودك قريبًا.",
    toastErrorPrefix: "عذرًا! تعذر إرسال الطلب.",
    validateName: "يرجى إدخال الاسم.",
    validateEmail: "يرجى إدخال البريد الإلكتروني.",
    close: "إغلاق",
    heroExamplesTitle: "الباقات والأمثلة",
    heroExamplesDesc:
      "اختر ما يناسبك — الأسعار ابتدائية وتُكيَّف بحسب مشروعك.",
    details: "التفاصيل",
    examplesOne: "مثال من الويب:",
    examplesMany: "أمثلة من الويب:",
    livePreview: "معاينة مباشرة",
    startFrom: "ابتداءً من",
    start: "ابدأ",
    brandingGallery: "معرض الهوية",
    brandingDesc:
      "نماذج مختارة — شعارات، قوالب اجتماعية، مطبوعات/تغليف والمزيد.",
    all: "الكل",
    design: "تصميم",
    contactTitle: "بيانات التواصل",
    namePH: "الاسم",
    emailPH: "البريد الإلكتروني",
    phonePH: "الهاتف (اختياري)",
    detailsPH: "تفاصيل إضافية عن المشروع",
    cancel: "إلغاء",
    submit: "إرسال",
    sending: "جاري الإرسال...",
  },
};

export default function ServiceClient({ service, lang: langProp, rtl: rtlProp }) {
  const searchParams = useSearchParams();
  const lang = normalizeLang((langProp || searchParams.get("lang") || "de").toLowerCase());
  const rtl = typeof rtlProp === "boolean" ? rtlProp : isRTL(lang);
  const t = UI[lang] ?? UI.de;

  const s = service;

  // Modal + form
  const [modalOpen, setModalOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", details: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Toasts
  const [toast, setToast] = useState(null);
  const showToast = (message, type = "info", timeout = 4000) => {
    setToast({ message, type });
    if (typeof window !== "undefined") {
      window.clearTimeout(showToast._t);
      showToast._t = window.setTimeout(() => setToast(null), timeout);
    }
  };
  useEffect(() => () => {
    if (typeof window !== "undefined") window.clearTimeout(showToast._t);
  }, []);

  const handleStart = (d) => {
    const fallback = { slug: "standard", title: t.heroCtaFallback };
    setActivePackage(d || fallback);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    const nextErrors = {};
    if (!formData.name?.trim()) nextErrors.name = t.validateName;
    if (!formData.email?.trim()) nextErrors.email = t.validateEmail;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      showToast(`${t.toastErrorPrefix} ${Object.values(nextErrors)[0] || ""}`.trim(), "error");
      return;
    }

    try {
      setSubmitting(true);
      const { data, status } = await axios.post(
        "/api/request",
        {
          service: s.slug,
          paket: activePackage.slug,
          paketTitle: activePackage.title,
          page: typeof window !== "undefined" ? window.location.href : "",
          contact: formData,
          lang, // include current language
        },
        { headers: { "Content-Type": "application/json" }, timeout: 10000 }
      );
      if (status !== 200 || !data?.ok) throw new Error(data?.error || `HTTP ${status}`);

      showToast(t.toastSuccess, "success");
      setModalOpen(false);
      setFormData({ name: "", email: "", phone: "", details: "" });
      setErrors({});
    } catch (err) {
      const msg =
        (axios.isAxiosError(err) && (err.response?.data?.error || err.message)) ||
        "Unknown error";
      console.error("Axios error:", msg);
      showToast(`${t.toastErrorPrefix} ${msg}`, "error", 7000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen text-white bg-primary-black" dir={rtl ? "rtl" : "ltr"} lang={lang}>
      {/* ---- Toast ---- */}
      <div className={`pointer-events-none fixed top-4 ${rtl ? "left-4" : "right-4"} z-[60] space-y-2`}>
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              className={`pointer-events-auto w-[340px] rounded-xl border px-4 py-3 shadow-xl
                ${toast.type === "success" ? "bg-green-600/20 border-green-400/30" :
                   toast.type === "error"   ? "bg-red-600/20 border-red-400/30" :
                                              "bg-white/10 border-white/20"}`}
              role="status"
              aria-live="polite"
            >
              <div className={`flex items-start gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                <div className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${toast?.type === "success" ? "bg-green-300" : toast?.type === "error" ? "bg-red-300" : "bg-white/60"}`}></div>
                <p className="text-sm leading-relaxed">{toast.message}</p>
                <button
                  type="button"
                  onClick={() => setToast(null)}
                  className="ml-auto text-xs text-white/70 hover:text-white"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---- HERO ---- */}
      <section className="relative">
        <div className={`mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center ${rtl ? "text-right" : ""}`}>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{s.title}</h1>
            <p className="mt-4 text-white/80 text-lg">{s.tagline}</p>
            <div className={`mt-8 flex gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
              <Link href={s.cta.href} className="rounded-2xl px-6 py-3 font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                {s.cta.text}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setActivePackage({ slug: "standard", title: t.heroCtaFallback });
                  setModalOpen(true);
                }}
                className="rounded-2xl px-6 py-3 font-semibold border border-white/20 hover:bg-white/10"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>

          <motion.div
            className={`relative sm:w-[110px] w-[110px] sm:h-[110px] h-[110px] ${rtl ? "ml-auto" : ""}`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
          >
            <Image src="/log-circle.png" alt="logo" fill sizes="112px" className="object-contain max-w-[80%]" priority />
          </motion.div>
        </div>
      </section>

      {/* ---- PACKAGES ---- */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <h2 className={`text-2xl md:text-3xl font-bold ${rtl ? "text-right" : ""}`}>{t.heroExamplesTitle}</h2>
        <p className={`mt-2 text-white/70 ${rtl ? "text-right" : ""}`}>{t.heroExamplesDesc}</p>

        {(() => {
          const isWebdesign = s.slug === "webdesign";
          const [expanded, setExpanded] = useState(null);

          const Card = ({ d }) => {
            const isOpen = expanded === d.slug;
            const examples = d.examples?.length ? (isOpen ? d.examples : [d.examples[0]]) : [];

            return (
              <div key={d.slug} className="rounded-2xl border border-white/10 p-6 flex flex-col transition-all">
                <div className={`flex items-start justify-between gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                  <div className={`${rtl ? "text-right" : ""}`}>
                    <h3 className="text-xl font-bold">{d.title}</h3>
                    {d.timeline && (
                      <span className="mt-1 inline-flex text-xs px-3 py-1 rounded-full bg-white/10">{d.timeline}</span>
                    )}
                  </div>

                  {isWebdesign && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : d.slug)}
                      className={`${isOpen ? "bg-red-600" : "bg-green-800"} rounded-xl p-2 hover:bg-white/20 flex items-center justify-center`}
                      aria-expanded={isOpen}
                      aria-controls={`pkg-${d.slug}`}
                      title={t.details}
                    >
                      {isOpen ? <FiX className="w-5 h-5 text-white" /> : <FiPlus className="w-5 h-5 text-white" />}
                    </button>
                  )}
                </div>

                {d.description && (
                  <p className={`mt-3 text-sm text-white/80 ${rtl ? "text-right" : ""}`}>{d.description}</p>
                )}

                {Array.isArray(d.includes) && d.includes.length > 0 && (
                  <ul className={`mt-4 space-y-2 text-sm text-white/80 ${rtl ? "text-right" : ""}`}>
                    {d.includes.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}

                {examples.length > 0 && (
                  <div id={`pkg-${d.slug}`} className="mt-5">
                    <p className={`mb-2 text-sm text-white/70 ${rtl ? "text-right" : ""}`}>
                      {isOpen ? t.examplesMany : t.examplesOne}
                    </p>
                    <div className={isOpen ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" : "grid grid-cols-1 gap-3"}>
                      {examples.map((ex, i) => (
                        <a
                          key={i}
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-400/50 transition"
                          title={ex.note || ex.title}
                        >
                          <div className={`relative w-full ${isOpen ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                            <Image src={previewSrc(ex.url)} alt={ex.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform" />
                          </div>
                          <div className={`p-3 flex items-center justify-between ${rtl ? "flex-row-reverse" : ""}`}>
                            <div className={`${rtl ? "text-right" : ""}`}>
                              <p className="font-semibold">{ex.title}</p>
                              {ex.note && <p className="text-sm text-white/60">{ex.note}</p>}
                            </div>
                            <span className="text-xs rounded bg-white/10 px-2 py-1">{t.livePreview}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`mt-5 flex flex-wrap items-center justify-between gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                  {d.startPrice && <span className="text-cyan-300 font-semibold">{d.startPrice}</span>}
                  <button
                    type="button"
                    onClick={() => handleStart(d)}
                    className="rounded-xl px-4 py-2 font-semibold bg-white/10 hover:bg-white/20"
                    aria-label={`${t.start}: ${d.title}`}
                  >
                    {t.start}
                  </button>
                </div>
              </div>
            );
          };

          if (isWebdesign && expanded) {
            const active = s.deliverables.find((d) => d.slug === expanded);
            const others = s.deliverables.filter((d) => d.slug !== expanded);
            return (
              <>
                <div className="grid grid-cols-1 mt-6 gap-6">{active && <Card d={active} />}</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">{others.map((d) => <Card key={d.slug} d={d} />)}</div>
              </>
            );
          }

          return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
              {s.deliverables.map((d) => (
                <Card key={d.slug} d={d} />
              ))}
            </div>
          );
        })()}
      </section>

      {/* ---- BRANDING GALLERY ---- */}
      {s.gallery?.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className={`text-2xl md:text-3xl font-bold ${rtl ? "text-right" : ""}`}>{t.brandingGallery}</h2>
          <p className={`mt-2 text-white/70 ${rtl ? "text-right" : ""}`}>{t.brandingDesc}</p>

          {(() => {
            const [activeType, setActiveType] = useState(t.all);
            const types = useMemo(() => [t.all, ...Array.from(new Set(s.gallery.map((g) => g.type)))], [s.gallery, t.all]);
            const items = useMemo(
              () => (activeType === t.all ? s.gallery : s.gallery.filter((g) => g.type === activeType)),
              [activeType, s.gallery, t.all]
            );

            return (
              <>
                <div className={`mt-4 flex flex-wrap gap-2 ${rtl ? "justify-end" : ""}`}>
                  {types.map((tt) => (
                    <button
                      key={tt}
                      type="button"
                      onClick={() => setActiveType(tt)}
                      className={`rounded-full px-4 py-2 text-sm border ${
                        activeType === tt ? "bg-white/20 border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {tt}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((g, i) => (
                    <div key={`${g.src}-${i}`} className="group overflow-hidden rounded-xl border border-white/10">
                      <div className="relative w-full aspect-[4/3]">
                        <Image src={g.src} alt={g.title} fill className="object-cover group-hover:scale-[1.03] transition-transform" />
                      </div>
                      <div className={`p-3 flex items-center justify-between ${rtl ? "flex-row-reverse text-right" : ""}`}>
                        <div>
                          <p className="font-semibold">{g.title}</p>
                          <p className="text-sm text-white/60">{g.type}</p>
                        </div>
                        <span className="text-xs rounded bg-white/10 px-2 py-1">{t.design}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </section>
      )}

      {/* ---- MODAL ---- */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-primary-black border border-white/20 rounded-2xl p-6 w-full max-w-lg" dir={rtl ? "rtl" : "ltr"}>
            <h3 className={`text-xl font-bold mb-4 ${rtl ? "text-right" : ""}`}>{t.contactTitle}</h3>

            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder={t.namePH}
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }); }}
                  className={`w-full px-4 py-2 rounded-xl bg-white/10 border focus:outline-none
                    ${errors.name ? "border-red-400/60" : "border-white/20"}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder={t.emailPH}
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                  className={`w-full px-4 py-2 rounded-xl bg-white/10 border focus:outline-none
                    ${errors.email ? "border-red-400/60" : "border-white/20"}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>

              <input
                type="tel"
                placeholder={t.phonePH}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <textarea
                placeholder={t.detailsPH}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none min-h-[100px]"
              />
            </div>

            <div className={`mt-5 flex justify-end gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10"
                disabled={submitting}
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? t.sending : t.submit}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
