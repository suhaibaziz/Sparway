'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, User, Send, Sparkles, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

export default function FuturisticContactCard2030({
  selectedCount,
  selectedList = [],
  form, 
  setForm,
  handleSubmit,
}) {
  const reduce = useReducedMotion();

  const localFadeIn = (direction = 'left', type = 'tween', delay = 0.1, duration = 0.9) => {
    const axis = ['left', 'right'].includes(direction) ? 'x' : 'y';
    const dist = { left: -24, right: 24, up: 24, down: -24 }[direction] || 24;
    return {
      initial: { opacity: 0, [axis]: reduce ? 0 : dist },
      animate: { opacity: 1, [axis]: 0, transition: { type, delay, duration } },
      exit: { opacity: 0, [axis]: reduce ? 0 : -dist },
    };
  };

  const Aurora = () => (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <motion.div
          className="absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,0.35), rgba(0,0,0,0))',
          }}
          animate={
            reduce
              ? {}
              : { x: [0, 20, -10, 0], y: [0, -10, 10, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,0.35), rgba(0,0,0,0))',
          }}
          animate={
            reduce
              ? {}
              : { x: [0, -20, 10, 0], y: [0, 15, -10, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div
  aria-hidden
  className="absolute inset-0 rounded-3xl opacity-[0.08] mix-blend-overlay"
  style={{
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
  }}
/>

    </>
  );

  const GradientBorder = ({ children }) => (
    <div className="relative">
      <div
        className="absolute -inset-[1px] rounded-3xl
        bg-[linear-gradient(120deg,rgba(34,197,94,.6),rgba(16,185,129,.15),rgba(59,130,246,.4))]
        opacity-60 blur-[2px]"
        aria-hidden
      />
      <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_40px_-20px_rgba(16,185,129,0.6),0_10px_25px_-18px_rgba(59,130,246,0.5)]">
        {children}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={localFadeIn('left', 'tween', 0.1, 0.9)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
      role="region"
      aria-label="Kontakt & Wachstumsplan"
    >
      <GradientBorder>
        <div className="relative p-6 sm:p-8 md:p-10">
          <Aurora />

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-sm text-white/70">
                <Sparkles className="h-4 w-4" aria-hidden />
                <TypingText title="| Los geht’s – gemeinsam wachsen" textStyles="text-left" />
              </div>
              <div className="text-white">
                <TitleText title={<>Bereit, richtig durchzustarten?</>} />
              </div>
            </div>

            <motion.div
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
              Sofort startklar
            </motion.div>
          </div>

          {/* Subtext */}
          <p className="mt-4 max-w-2xl text-white/90 leading-relaxed">
            Wir kombinieren Strategie, Design und Performance-Marketing – damit aus Klicks
            echte Kund:innen werden. Wählen Sie, was Sie brauchen, und wir melden uns mit
            einem klaren Plan und transparenten Schritten.
          </p>

          {/* Selection summary */}
          <div className="mt-6">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl">
              Lassen Sie uns Ihr Wachstum planen
            </h3>
            <p className="text-white/75 mt-2">
              {selectedCount > 0
                ? `Ausgewählt: ${selectedCount} Dienstleistung(en). Senden Sie uns kurz Ihre Daten – wir melden uns mit einem Vorschlag.`
                : 'Sagen Sie uns kurz, worum es geht. Wir melden uns mit einem konkreten Plan und nächsten Schritten.'}
            </p>

            {selectedCount > 0 && (
              <motion.div
                className="mt-3 flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                }}
              >
                {selectedList.map((s, i) => (
                  <motion.span
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    {(s?.split?.('__')?.[1]) || s}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 md:gap-5">
            <label className="relative block">
              <span className="sr-only">Ihr Name</span>
              <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                placeholder="Ihr Name"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/50 outline-none focus:ring-4 focus:ring-emerald-400/20 focus:border-emerald-300/40 transition"
                required
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Ihre E-Mail</span>
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="email"
                placeholder="Ihre E-Mail"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/50 outline-none focus:ring-4 focus:ring-emerald-400/20 focus:border-emerald-300/40 transition"
                required
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Kurz Ihr Ziel & Kontext (optional)</span>
              <textarea
                rows={4}
                placeholder="Kurz Ihr Ziel & Kontext (optional)"
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className="w-full p-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/50 outline-none focus:ring-4 focus:ring-emerald-400/20 focus:border-emerald-300/40 transition"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <ChevronRight className="h-4 w-4" aria-hidden />
                <span>
                  Wir melden uns innerhalb von <span className="font-semibold text-white">24h</span> mit klaren nächsten Schritten.
                </span>
              </div>
              <div className="text-xs text-white/60">Keine langen Formulare.</div>
            </div>

            <div className="pt-1">
              <motion.button
                type="submit"
                whileHover={reduce ? {} : { scale: 1.02, y: -1 }}
                whileTap={reduce ? {} : { scale: 0.98, y: 0 }}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-[#0b1220]
                  bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-400
                  shadow-[0_10px_25px_-10px_rgba(16,185,129,0.6)]
                  hover:shadow-[0_20px_45px_-20px_rgba(16,185,129,0.7)]
                  transition"
              >
                <span
                  className="absolute inset-0 rounded-xl ring-1 ring-white/30 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-60"
                  aria-hidden
                />
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                {selectedCount > 0 ? 'Anfrage mit Auswahl senden' : 'Unverbindlich anfragen'}
              </motion.button>
            </div>

            <p className="text-xs text-white/60">
              Keine langen Formulare. Wir melden uns innerhalb von 24h mit klaren nächsten Schritten.
            </p>
          </form>
        </div>
      </GradientBorder>
    </motion.div> 
  );
}
