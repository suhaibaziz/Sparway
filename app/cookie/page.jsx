// app/cookie/page.jsx
import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export const metadata = {
  title: "Cookie-Richtlinie | Sparway GmbH",
  description:
    "Cookie-Richtlinie der Sparway GmbH: Informationen zu technisch notwendigen Cookies, Statistik- und Marketing-Cookies, Rechtsgrundlagen, Speicherdauern und Opt-Out.",
};

export default function CookiePage() {
  const lastUpdated = "4. September 2025"; // bei Änderungen aktualisieren

  const Section = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl md:text-2xl font-extrabold text-white mt-10">{title}</h2>
      <div className="mt-3 space-y-3 text-white/85">{children}</div>
    </section>
  );

  return (
    <main className="min-h-screen bg-primary-black">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Cookie-Richtlinie</h1>
          <p className="mt-2 text-white/70">
            Diese Cookie-Richtlinie erklärt, wie und warum die Sparway GmbH Cookies und ähnliche Technologien verwendet.
            Details zur allgemeinen Datenverarbeitung finden Sie in unserer{" "}
            <Link href="/privacy" className="underline">Datenschutzerklärung</Link>.
          </p>
          <p className="mt-2 text-white/60 text-sm">Zuletzt aktualisiert: {lastUpdated}</p>
        </header>

        {/* Inhaltsverzeichnis */}
        <nav className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-400">
          <h2 className="font-semibold ">Inhalt</h2>
          <ul className="mt-2 grid md:grid-cols-2 gap-y-2 text-sm">
            {[
              ["what", "1. Was sind Cookies?"],
              ["who", "2. Verantwortlicher & Kontakt"],
              ["types", "3. Cookie-Kategorien"],
              ["list", "4. Cookies & ähnliche Technologien, die wir einsetzen"],
              ["legal", "5. Rechtsgrundlage & Einwilligung"],
              ["manage", "6. Cookie-Einstellungen verwalten"],
              ["third", "7. Drittlandübermittlungen"],
              ["retention", "8. Speicherdauer"],
              ["changes", "9. Änderungen dieser Richtlinie"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Section id="what" title="1. Was sind Cookies?">
          <p className="text-gray-400">
            Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie Websites besuchen.
            Sie ermöglichen Funktionen (z. B. Warenkorb, Login), messen die Nutzung (Statistik) und unterstützen
            personalisierte Inhalte/Werbung (Marketing). Neben Cookies setzen wir – sofern erforderlich – vergleichbare
            Technologien ein (z. B. Local Storage, Pixel, SDKs).
          </p>
        </Section>

        <Section id="who" title="2. Verantwortlicher & Kontakt">
          <p className="text-gray-400">
            <strong>Sparway GmbH</strong><br />
            Alter Markt 10, 42275 Wuppertal, Deutschland<br />
            E-Mail: <a href="mailto:info@sparway.com" className="underline">info@sparway.com</a> ·
            Telefon: <a href="tel:+4920274777822" className="underline">+49 202 74777822</a>
          </p>
        </Section>

        <Section id="types" title="3. Cookie-Kategorien">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              <strong>Technisch notwendige Cookies</strong> – erforderlich für Grundfunktionen und Sicherheit
              (z. B. Seitennavigation, Formularschutz). Ohne diese funktioniert die Website nicht richtig.
            </li>
            <li>
              <strong>Präferenz-Cookies</strong> – speichern Einstellungen wie Sprache oder Cookie-Einwilligungen.
            </li>
            <li>
              <strong>Statistik-/Analyse-Cookies</strong> – helfen uns, die Nutzung zu verstehen (aggregierte Metriken).
            </li>
            <li>
              <strong>Marketing-/Tracking-Cookies</strong> – ermöglichen personalisierte Werbung und Conversion-Messung.
            </li>
          </ul>
        </Section>

        <Section id="list" title="4. Cookies & ähnliche Technologien, die wir einsetzen">
          <p className="text-white/75">
            Die konkrete Liste kann sich ändern (z. B. durch Releases/Anbieter-Updates). Ihr Cookie-Banner zeigt die jeweils
            aktuelle Fassung. Typische Einträge auf unserer Website:
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-lg font-semibold text-white">A) Technisch notwendig</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li><code>cookie_consent</code> – Speichert Ihre Cookie-Einstellungen (1 Jahr).</li>
              <li><code>_cf_bm / __cf*</code> (falls CDN) – Bot-Management/Performance (30 Min.–1 Tag).</li>
              <li><code>_hostinger_* / hs-*</code> (Hostinger) – Stabilität/Sicherheit (Session bis mehrere Tage).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mt-4">
            <h3 className="text-lg font-semibold text-white">B) Statistik / Analyse (nur mit Einwilligung)</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li><code>_ga</code>, <code>_ga_*</code> (Google Analytics) – Nutzer-/Sitzungs-Messung (2 Jahre / 24 Monate).</li>
              <li><code>_gid</code> (Google Analytics) – Sitzungs-Differenzierung (24 Std.).</li>
              <li><code>_gcl_au</code> (Google) – Conversion-Tracking (90 Tage).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mt-4">
            <h3 className="text-lg font-semibold text-white">C) Marketing / Tracking (nur mit Einwilligung)</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li><code>_fbp</code> (Meta Pixel) – Reichweiten-/Conversion-Messung (90 Tage).</li>
              <li>Pixel-/Local-Storage-Einträge durch Werbenetzwerke (Laufzeit abhängig vom Anbieter).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mt-4">
            <h3 className="text-lg font-semibold text-white">D) Zahlungs-/Drittanbieter (bei Nutzung)</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Stripe (<code>__stripe_mid</code>, <code>__stripe_sid</code>) – Betrugsprävention/Checkout (1 Jahr/30 Min.).</li>
              <li>Mollie, GoCardless – technische Cookies für sichere Zahlungsabwicklung (Laufzeiten je Anbieter).</li>
            </ul>
          </div>

          <p className="text-xs text-white/60 mt-3">
            Hinweis: <strong>Google Fonts</strong> sind bei uns vorzugsweise lokal eingebunden und setzen keine Cookies. Bei CDN-Einbindung
            kann dennoch ein externer Abruf stattfinden (siehe{" "}
            <Link href="/privacy#tools" className="underline">Datenschutzerklärung</Link>).
          </p>
        </Section>

        <Section id="legal" title="5. Rechtsgrundlage & Einwilligung">
          <p className="text-gray-400">
            Technisch notwendige Cookies setzen wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einer funktionsfähigen, sicheren Website). Statistik- und Marketing-Cookies setzen wir ausschließlich auf
            Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit mit Wirkung für die Zukunft widerrufen können.
          </p>
        </Section>

        <Section id="manage" title="6. Cookie-Einstellungen verwalten">
          <p className="text-gray-400">
            Sie können Ihre Einwilligungen jederzeit im Cookie-Banner ändern oder widerrufen. Zusätzlich können Sie Cookies in
            Ihrem Browser löschen/blockieren. Beachten Sie: Ohne technisch notwendige Cookies kann die Website nur eingeschränkt funktionieren.
          </p>
          {/* Falls ihr einen CMP-Trigger habt, verlinkt/öffnet ihn hier: */}
          <CookieSettingsButton/> 
        </Section>

        <Section id="third" title="7. Drittlandübermittlungen">
          <p className="text-gray-400">
            Bei einigen Diensten (z. B. Google, Meta, Stripe) kann eine Verarbeitung außerhalb der EU/EWR erfolgen. Wir achten
            auf geeignete Garantien (insb. EU-Standardvertragsklauseln) nach Art. 44 ff. DSGVO. Details finden Sie in der{" "}
            <Link href="/privacy#xfer" className="underline">Datenschutzerklärung</Link>.
          </p>
        </Section>

        <Section id="retention" title="8. Speicherdauer">
          <p className="text-gray-400">
            Speicherdauern richten sich nach dem jeweiligen Cookie/Anbieter (siehe Liste oben bzw. im Cookie-Banner). Session-Cookies
            werden mit Schließen des Browsers gelöscht; persistente Cookies bleiben bis zum Ablaufdatum oder bis zur manuellen Löschung gespeichert.
          </p>
        </Section>

        <Section id="changes" title="9. Änderungen dieser Richtlinie">
          <p className="text-gray-400">
            Wir passen diese Cookie-Richtlinie an, wenn sich Dienste, Rechtslage oder technische Rahmenbedingungen ändern.
            Die jeweils aktuelle Fassung finden Sie stets auf dieser Seite.
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t border-white/10 text-white/60 text-sm">
          <p className="text-gray-400">
            Weitere Informationen – insbesondere zu Verantwortlichem, Betroffenenrechten, Datenempfängern und Sicherheit –
            entnehmen Sie bitte unserer{" "}
            <Link href="/privacy" className="underline">Datenschutzerklärung</Link>.
          </p>
        </footer>
      </div>
    </main>
  );
}
