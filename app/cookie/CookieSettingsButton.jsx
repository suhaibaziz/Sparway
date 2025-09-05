"use client";

import { useState } from "react";

export default function CookieSettingsButton() {
  const [hint, setHint] = useState("");

  const openSettings = () => {
    const hasCMP =
      typeof window !== "undefined" &&
      window.CookieConsent &&
      typeof window.CookieConsent.showSettings === "function";

    if (hasCMP) {
      window.CookieConsent.showSettings();
    } else {
      // no blocking alerts; show a small inline hint for a few seconds
      setHint("Hinweis: Die Cookie-Einstellungen sind über das Banner erreichbar, sobald es geladen wurde.");
      window.setTimeout(() => setHint(""), 5000);
      console.warn("Cookie settings UI not available (no CMP hook found).");
    }
  };

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={openSettings}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
      >
        Cookie-Einstellungen öffnen
      </button>

      {hint ? (
        <div className="mt-2 text-xs text-white/70">{hint}</div>
      ) : null}
    </div>
  );
}
