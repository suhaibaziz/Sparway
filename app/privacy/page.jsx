// app/privacy/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | Sparway GmbH",
  description:
    "Datenschutzerklärung der Sparway GmbH – transparente Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
};

export default function PrivacyPage() {
  const lastUpdated = "4. September 2025"; // bei Änderungen anpassen

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
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Datenschutzerklärung
          </h1>
          <p className="mt-2 text-white/70">
            Wir informieren Sie nachfolgend über Art, Umfang und Zwecke der Verarbeitung personenbezogener Daten
            beim Besuch unserer Website und im Rahmen unserer Leistungen.
          </p>
          <p className="mt-2 text-white/60 text-sm">Zuletzt aktualisiert: {lastUpdated}</p>
        </header>

        {/* Inhaltsverzeichnis */}
        <nav className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/85 text-gray-300">
          <h2 className="font-semibold">Inhalt</h2>
          <ul className="mt-2 grid md:grid-cols-2 gap-y-2 text-sm">
            {[
              ["controller", "1. Verantwortlicher"],
              ["overview", "2. Allgemeine Hinweise"],
              ["hosting", "3. Hosting (Hostinger) & Server-Logfiles"],
              ["data", "4. Erhebung personenbezogener Daten"],
              ["payments", "5. Zahlungsabwicklung (Mollie, GoCardless, Stripe)"],
              ["whatsapp", "6. Kommunikation via WhatsApp Business API (Ultramsg)"],
              ["tools", "7. Analyse & Marketing-Tools"],
              ["cookies", "8. Cookies & Einwilligungsverwaltung"],
              ["retention", "9. Speicherdauer"],
              ["rights", "10. Rechte der betroffenen Personen"],
              ["xfer", "11. Datenübermittlung in Drittländer"],
              ["security", "12. Sicherheit (SSL/TLS)"],
              ["authority", "13. Aufsichtsbehörde & Beschwerderecht"],
              ["contact", "14. Kontakt & Verantwortliche Stelle"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Section id="controller" title="1. Verantwortlicher">
          <p className='text-gray-400'>
            <strong>Sparway GmbH</strong><br />
            Alter Markt 10, 42275 Wuppertal, Deutschland<br />
            E-Mail: <a href="mailto:info@sparway.com" className="underline">info@sparway.com</a><br />
            Telefon: <a href="tel:+4920274777822" className="underline">+49 202 74777822</a>
          </p>
        </Section>

        <Section id="overview" title="2. Allgemeine Hinweise">
          <p className='text-gray-400'>
            Wir verarbeiten personenbezogene Daten nach Maßgabe der DSGVO und des BDSG. Die Verarbeitung erfolgt
            nur soweit erforderlich, zweckgebunden und – soweit notwendig – auf Basis Ihrer Einwilligung.
          </p>
          <p className='text-gray-400'>
            Kategorien betroffener Personen: Interessent:innen, Kund:innen, Lieferant:innen, Website-Besucher:innen.
          </p>
          <p className='text-gray-400'>
            Rechtsgrundlagen: Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Anbahnung), lit. c (rechtliche
            Verpflichtung) und lit. f (berechtigte Interessen) DSGVO.
          </p>
        </Section>

        <Section id="hosting" title="3. Hosting (Hostinger) & Server-Logfiles">
          <p className='text-gray-400'>
            Unsere Website wird bei <strong>Hostinger International Ltd.</strong> betrieben. Zum Betrieb und zur
            Sicherheit der Website verarbeitet der Hoster u. a. IP-Adresse, Datum/Uhrzeit des Zugriffs, Request-URL,
            Referrer, User-Agent. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            sicherem, performantem Hosting).
          </p>
        </Section>

        <Section id="data" title="4. Erhebung personenbezogener Daten">
          <h3 className="text-lg font-semibold text-white mt-3">Kontaktformular & Anfragen</h3>
          <p className='text-gray-400'>
            Bei Kontaktaufnahme (Formular, E-Mail, Telefon) verarbeiten wir Ihre Angaben (z. B. Name, E-Mail,
            Telefonnummer, Nachricht) zur Bearbeitung und Dokumentation der Anfrage. Rechtsgrundlage: Art. 6 Abs. 1
            lit. b DSGVO (Vertrag/Anbahnung) oder lit. f DSGVO (berechtigtes Interesse an Kommunikation).
          </p>

          <h3 className="text-lg font-semibold text-white mt-3">Kundenportal / Projektabwicklung</h3>
          <p className='text-gray-400'>
            Im Rahmen der Projektabwicklung (z. B. Webdesign, Branding, SEO/Ads, Social Media, Kampagnen) verarbeiten
            wir Stammdaten, Kommunikationsdaten, Vertrags- und Abrechnungsdaten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
            DSGVO (Vertragserfüllung).
          </p>

          <h3 className="text-lg font-semibold text-white mt-3">Newsletter (falls abonniert)</h3>
          <p className='text-gray-400'>
            Bei Newsletter-Anmeldung verarbeiten wir Ihre E-Mail-Adresse (ggf. Name) auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO, Double-Opt-In). Widerruf jederzeit mit Wirkung für die Zukunft möglich.
          </p>
        </Section>

        <Section id="payments" title="5. Zahlungsabwicklung (Mollie, GoCardless, Stripe)">
          <p className='text-gray-400'>
            Für die Zahlungsabwicklung setzen wir folgende Anbieter ein. Verarbeitete Daten können sein: Name,
            Rechnungsdaten, E-Mail, Zahlungsmittel (z. B. IBAN, Kreditkartendaten), Transaktions-IDs.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-400">
            <li><strong>Mollie B.V.</strong>, Keizersgracht 126, 1015 CW Amsterdam, NL</li>
            <li><strong>GoCardless Ltd.</strong>, 65 Goswell Rd, London EC1V 7EN, UK</li>
            <li><strong>Stripe Payments Europe Ltd.</strong>, 1 Grand Canal Street Lower, Dublin, IE</li>
          </ul>
          <p className="mt-2 text-gray-400">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und lit. f DSGVO (berechtigtes Interesse
            an sicherer Zahlungsabwicklung). Es gelten die Datenschutzinformationen der jeweiligen Anbieter.
          </p>
        </Section>

        <Section id="whatsapp" title="6. Kommunikation via WhatsApp Business API (Ultramsg)">
          <p className='text-gray-400'>
            Für Support/Anfragen nutzen wir die <strong>WhatsApp Business API</strong> über den Dienst <strong>Ultramsg</strong>.
            Verarbeitet werden Ihre Telefonnummer, Profilinformationen und Chat-Inhalte. Bitte übermitteln Sie keine
            sensiblen Daten. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder Vertrag/Anbahnung (Art. 6
            Abs. 1 lit. b DSGVO).
          </p>
        </Section>

        <Section id="tools" title="7. Analyse & Marketing-Tools">
          <h3 className="text-lg font-semibold text-white mt-3">Google Fonts</h3>
          <p className='text-gray-400'>
            Wir nutzen Google Fonts, teilweise lokal eingebunden. Bei CDN-Einbindung kann Ihre IP-Adresse an Google
            übermittelt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an konsistenter
            Darstellung). Empfehlung: lokale Einbindung.
          </p>

          <h3 className="text-lg font-semibold text-white mt-3">Google Analytics (falls aktiviert)</h3>
          <p className='text-gray-400'>
            Bei Einsatz von Google Analytics werden Cookies gesetzt und Nutzungsdaten (inkl. IP in gekürzter Form)
            an Google übertragen. Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Einwilligung kann
            jederzeit über das Cookie-Banner widerrufen werden.
          </p>

          <h3 className="text-lg font-semibold text-white mt-3">Meta Pixel (falls aktiviert)</h3>
          <p className='text-gray-400'>
            Zur Messung von Conversions und Reichweiten nutzen wir ggf. das Meta Pixel. Rechtsgrundlage: Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Einstellungen/Opt-Out über das Cookie-Banner möglich.
          </p>
        </Section>

        <Section id="cookies" title="8. Cookies & Einwilligungsverwaltung">
          <p className='text-gray-400'>
            Wir verwenden technisch notwendige Cookies (Basisfunktion). Optionale Cookies (Analyse/Marketing) setzen wir
            nur mit Ihrer Einwilligung über das Cookie-Banner. Details und individuelle Einstellungen finden Sie in unserer{" "}
            <Link href="/cookie" className="underline">Cookie-Richtlinie</Link>.
          </p>
        </Section>

        <Section id="retention" title="9. Speicherdauer">
          <p className='text-gray-400'>
            Daten speichern wir nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche
            Aufbewahrungspflichten bestehen (z. B. 6/10 Jahre für steuerliche/handelsrechtliche Unterlagen).
          </p>
        </Section>

        <Section id="rights" title="10. Rechte der betroffenen Personen">
          <ul className="list-disc pl-6 space-y-1 text-gray-400">
            <li>Auskunft, Art. 15 DSGVO</li>
            <li>Berichtigung, Art. 16 DSGVO</li>
            <li>Löschung, Art. 17 DSGVO</li>
            <li>Einschränkung der Verarbeitung, Art. 18 DSGVO</li>
            <li>Datenübertragbarkeit, Art. 20 DSGVO</li>
            <li>Widerspruch, Art. 21 DSGVO</li>
            <li>Widerruf von Einwilligungen mit Wirkung für die Zukunft</li>
          </ul>
          <p className="mt-2 text-gray-400">
            Zur Ausübung Ihrer Rechte genügt eine E-Mail an{" "}
            <a href="mailto:info@sparway.com" className="underline">info@sparway.com</a>.
          </p>
        </Section>

        <Section id="xfer" title="11. Datenübermittlung in Drittländer">
          <p className='text-gray-400'>
            Bei einzelnen Diensten (z. B. WhatsApp, Stripe, Meta) kann eine Verarbeitung außerhalb der EU/EWR erfolgen.
            Wir achten auf geeignete Garantien (z. B. EU-Standardvertragsklauseln) gem. Art. 44 ff. DSGVO.
          </p>
        </Section>

        <Section id="security" title="12. Sicherheit (SSL/TLS)">
          <p className='text-gray-400'>
            Unsere Website nutzt SSL/TLS-Verschlüsselung. Sie erkennen dies u. a. am „https://“ in der Adresszeile.
          </p>
        </Section>

        <Section id="authority" title="13. Aufsichtsbehörde & Beschwerderecht">
          <p className='text-gray-400'>
            Sie haben das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde, insbesondere in dem Mitgliedstaat
            Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für uns zuständig:
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
          </p>
        </Section>

        <Section id="contact" title="14. Kontakt & Verantwortliche Stelle">
          <p className='text-gray-400'>
            <strong>Sparway GmbH</strong><br />
            Alter Markt 10, 42275 Wuppertal, Deutschland<br />
            E-Mail: <a href="mailto:info@sparway.com" className="underline">info@sparway.com</a> ·
            Telefon: <a href="tel:+4920274777822" className="underline">+49 202 74777822</a>
          </p>
          <p className="text-white/70 text-sm">
            Hinweis: Diese Datenschutzerklärung wird fortlaufend an geänderte Rechtslagen, Dienste und Prozesse angepasst.
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t border-white/10 text-white/60 text-sm">
          <p className='text-gray-400'>
            Diese Datenschutzerklärung ist eine sorgfältig erstellte Vorlage und ersetzt keine Rechtsberatung.
            Bitte prüfen Sie, ob zusätzlich eingesetzte Drittanbieter (z. B. Mailchimp, HubSpot, Calendly, TikTok/LinkedIn Pixel,
            YouTube-Einbettungen) ergänzt werden müssen.
          </p>
        </footer>
      </div>
    </main>
  );
}
