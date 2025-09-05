'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, User, Send, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

// القاموس
const dict = {
  de: {
    heading: 'Bereit, richtig durchzustarten?',
    subheading: 'Wir kombinieren Strategie, Design und Performance-Marketing – damit aus Klicks echte Kund:innen werden.',
    plan: 'Lassen Sie uns Ihr Wachstum planen',
    selectionNone: 'Sagen Sie uns kurz, worum es geht. Wir melden uns mit einem konkreten Plan und nächsten Schritten.',
    selectionSome: (n) => `Ausgewählt: ${n} Dienstleistung(en). Senden Sie uns kurz Ihre Daten – wir melden uns mit einem Vorschlag.`,
    name: 'Ihr Name',
    email: 'Ihre E-Mail',
    message: 'Kurz Ihr Ziel & Kontext (optional)',
    submitWith: 'Anfrage mit Auswahl senden',
    submitNo: 'Unverbindlich anfragen',
    hint: 'Keine langen Formulare. Wir melden uns innerhalb von 24h mit klaren nächsten Schritten.',
    fast: 'Sofort startklar',
    within: 'Wir melden uns innerhalb von ',
    hours: '24h',
  },
  en: {
    heading: 'Ready to take off?',
    subheading: 'We combine strategy, design and performance marketing – turning clicks into real customers.',
    plan: 'Let’s plan your growth',
    selectionNone: 'Tell us briefly what it’s about. We’ll get back to you with a concrete plan and next steps.',
    selectionSome: (n) => `Selected: ${n} service(s). Send us your details – we’ll reply with a proposal.`,
    name: 'Your name',
    email: 'Your email',
    message: 'Your goal & context (optional)',
    submitWith: 'Send request with selection',
    submitNo: 'Request without obligation',
    hint: 'No long forms. We’ll reply within 24h with clear next steps.',
    fast: 'Ready instantly',
    within: 'We’ll reply within ',
    hours: '24h',
  },
  ar: {
    heading: 'جاهز تبدأ بقوة؟',
    subheading: 'نحن نجمع بين الاستراتيجية، التصميم والتسويق بالأداء – لتحويل النقرات إلى عملاء حقيقيين.',
    plan: 'خلينا نخطط نموّك',
    selectionNone: 'خبرنا باختصار شو المطلوب. رح نرجعلك بخطة واضحة وخطوات عملية.',
    selectionSome: (n) => `تم اختيار: ${n} خدمة. ابعتلنا بياناتك – ورح نرجعلك بعرض مناسب.`,
    name: 'اسمك',
    email: 'بريدك الإلكتروني',
    message: 'هدفك أو تفاصيل إضافية (اختياري)',
    submitWith: 'إرسال الطلب مع الاختيار',
    submitNo: 'طلب استشارة مجانية',
    hint: 'ما في فورم طويلة. رح نرجعلك خلال 24 ساعة بخطوات واضحة.',
    fast: 'جاهز فوراً',
    within: 'رح نرجعلك خلال ',
    hours: '24 ساعة',
  },
};

export default function FuturisticContactCard2030({
  selectedCount,
  selectedList = [],
  form,
  setForm,
  handleSubmit,
}) {
  const reduce = useReducedMotion();
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'de';
  const t = dict[lang] || dict.de;
  const isRTL = lang === 'ar';

  const localFadeIn = (direction = 'left', type = 'tween', delay = 0.1, duration = 0.9) => {
    const axis = ['left', 'right'].includes(direction) ? 'x' : 'y';
    const dist = { left: -24, right: 24, up: 24, down: -24 }[direction] || 24;
    return {
      initial: { opacity: 0, [axis]: reduce ? 0 : dist },
      animate: { opacity: 1, [axis]: 0, transition: { type, delay, duration } },
      exit: { opacity: 0, [axis]: reduce ? 0 : -dist },
    };
  };

  return (
    <motion.div
      dir={isRTL ? 'rtl' : 'ltr'}
      variants={localFadeIn('left', 'tween', 0.1, 0.9)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
      role="region"
      aria-label="Kontakt & Wachstumsplan"
    >
      <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 text-white">
            <h2 className="text-xl font-bold">{t.heading}</h2>
            <p className="text-white/80">{t.subheading}</p>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.fast}
          </div>
        </div>

        {/* Plan */}
        <div className="mt-6">
          <h3 className="text-white font-extrabold text-xl sm:text-2xl">{t.plan}</h3>
          <p className="text-white/75 mt-2">
            {selectedCount > 0 ? t.selectionSome(selectedCount) : t.selectionNone}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:gap-5">
          <label className="relative block">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder={t.name}
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 text-white placeholder:text-white/50"
              required
            />
          </label>

          <label className="relative block">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="email"
              placeholder={t.email}
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/5 text-white placeholder:text-white/50"
              required
            />
          </label>

          <label className="relative block">
            <textarea
              rows={4}
              placeholder={t.message}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="w-full p-3 rounded-xl bg-white/5 text-white placeholder:text-white/50"
            />
          </label>

          <div className="flex justify-between text-xs text-white/70">
            <span>
              {t.within} <strong>{t.hours}</strong>
            </span>
            <span>{t.hint}</span>
          </div>

          <motion.button
            type="submit"
            whileHover={reduce ? {} : { scale: 1.02 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-400 text-[#0b1220]"
          >
            <Send className="h-5 w-5" />
            {selectedCount > 0 ? t.submitWith : t.submitNo}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
