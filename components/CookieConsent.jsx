// components/CookieConsent.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cookie_consent";

const defaultConsent = {
  necessary: true,       // always true (not toggleable)
  preferences: false,
  analytics: false,
  marketing: false,
  timestamp: null,
  version: 1,            // bump if you change categories/text
};

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // basic shape check
    return typeof parsed === "object" && parsed.necessary ? parsed : null;
  } catch {
    return null;
  }
}

function writeConsent(consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, timestamp: Date.now() }));
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(defaultConsent);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Expose a tiny API for your /cookie page button
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.CookieConsent = {
      ...(window.CookieConsent || {}),
      showSettings: () => setSettingsOpen(true),
      get: () => readConsent() || defaultConsent,
    };
  }, []);

  // Show banner on first visit or when version changed
  useEffect(() => {
    const stored = readConsent();
    if (!stored || stored.version !== defaultConsent.version) {
      setBannerOpen(true);
      setConsent(stored ? { ...stored, version: defaultConsent.version } : defaultConsent);
    } else {
      setConsent(stored);
    }
  }, []);

  const saveAndCloseBanner = (next) => {
    writeConsent(next);
    setConsent(next);
    setBannerOpen(false);
  };

  const acceptAll = () =>
    saveAndCloseBanner({ ...defaultConsent, preferences: true, analytics: true, marketing: true });

  const rejectAll = () =>
    saveAndCloseBanner({ ...defaultConsent, preferences: false, analytics: false, marketing: false });

  const saveSettings = () => {
    writeConsent(consent);
    setSettingsOpen(false);
    // keep banner hidden after settings save
    setBannerOpen(false);
  };

  const hasAnyDecision = useMemo(() => !!readConsent(), []);

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {bannerOpen && (
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-[60]"
            role="dialog"
            aria-live="polite"
          >
            <div className="rounded-2xl border border-white/15 bg-[#0b1220]/90 backdrop-blur p-4 md:p-5 text-white shadow-xl">
              <h3 className="font-semibold text-lg">Cookies & Datenschutz</h3>
              <p className="mt-2 text-sm text-white/80">
                Wir verwenden Cookies, um unsere Website sicher zu betreiben (notwendig) und – mit Ihrer Einwilligung –
                Funktionen für Präferenzen, Statistik (Analytics) und Marketing zu aktivieren. Sie können Ihre Auswahl
                jederzeit anpassen.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 px-2 py-1 border border-white/10">Notwendig</span>
                <span className="rounded-full bg-white/10 px-2 py-1 border border-white/10">Präferenzen</span>
                <span className="rounded-full bg-white/10 px-2 py-1 border border-white/10">Analytics</span>
                <span className="rounded-full bg-white/10 px-2 py-1 border border-white/10">Marketing</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Nur erforderlich
                </button>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Einstellungen
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="ml-auto rounded-xl bg-emerald-400 text-[#0b1220] font-semibold px-4 py-2 text-sm hover:bg-emerald-300"
                >
                  Alle akzeptieren
                </button>
              </div>

              <p className="mt-3 text-xs text-white/60">
                Mehr Infos in unserer{" "}
                <a href="/privacy" className="underline">Datenschutzerklärung</a> und{" "}
                <a href="/cookie" className="underline">Cookie-Richtlinie</a>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#0b1220] p-5 text-white shadow-2xl"
              role="dialog" aria-modal="true"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">Cookie-Einstellungen</h3>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(false)}
                  className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-sm hover:bg-white/15"
                >
                  Schließen
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {/* Necessary */}
                <ToggleRow
                  label="Notwendig"
                  description="Erforderlich für Grundfunktionen, Sicherheit und Rechtskonformität."
                  checked
                  disabled
                />
                {/* Preferences */}
                <ToggleRow
                  label="Präferenzen"
                  description="Speichert Einstellungen (z. B. Sprache, Einwilligungen)."
                  checked={consent.preferences}
                  onChange={(v) => setConsent((c) => ({ ...c, preferences: v }))}
                />
                {/* Analytics */}
                <ToggleRow
                  label="Analytics"
                  description="Anonyme/aggregierte Nutzungsmessung (z. B. Google Analytics)."
                  checked={consent.analytics}
                  onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
                />
                {/* Marketing */}
                <ToggleRow
                  label="Marketing"
                  description="Personalisierung/Conversion-Messung (z. B. Meta Pixel)."
                  checked={consent.marketing}
                  onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setConsent({ ...defaultConsent, preferences: false, analytics: false, marketing: false });
                    saveSettings();
                  }}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Nur erforderlich
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConsent({ ...defaultConsent, preferences: true, analytics: true, marketing: true });
                    saveSettings();
                  }}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={saveSettings}
                  className="ml-auto rounded-xl bg-emerald-400 text-[#0b1220] font-semibold px-4 py-2 text-sm hover:bg-emerald-300"
                >
                  Auswahl speichern
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ToggleRow({ label, description, checked, onChange, disabled }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-3">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-white/70">{description}</p>
      </div>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={!!checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
        <span className="text-sm text-white/80">{checked ? "Aktiv" : "Inaktiv"}</span>
      </label>
    </div>
  );
}

/** Helper you can import elsewhere if needed */
export function getConsent() {
  if (typeof window === "undefined") return defaultConsent;
  return readConsent() || defaultConsent;
}
