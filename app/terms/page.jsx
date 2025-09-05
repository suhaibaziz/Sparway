
import Link from 'next/link';

export const metadata = {
  title: 'AGB / Terms of Service | Sparway Marketing',
  description:
    'Allgemeine Geschäftsbedingungen (AGB) von Sparway Marketing – Leistungen, Zahlung, Rechte an Werken, Datenschutz (DSGVO), Haftung, Gerichtsstand.',
};

export default function TermsPage() {
  const lastUpdated = '4. September 2025'; // bitte bei Änderungen aktualisieren

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
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="mt-2 text-white/70">
            Geltend für sämtliche Leistungen von <strong>Sparway Marketing</strong> (nachfolgend „<strong>Agentur</strong>“) gegenüber
            Unternehmer:innen, juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen
            (nachfolgend „<strong>Kund:in</strong>“). Für Verbraucher:innen gelten gesonderte Hinweise, soweit anwendbar.
          </p>
          <p className="mt-2 text-white/60 text-sm">Zuletzt aktualisiert: {lastUpdated}</p>
        </header>

        {/* Inhaltsverzeichnis */}
        <nav className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/85">
          <h2 className="font-semibold text-gray-200">Inhalt</h2>
          <ul className="mt-2 grid md:grid-cols-2 gap-y-2 text-[#b3b3b3] text-sm">
            {[
              ['scope', '1. Geltungsbereich & Rangfolge'],
              ['offers', '2. Angebot, Vertragsschluss & Laufzeiten'],
              ['services', '3. Leistungsumfang & Mitwirkungspflichten'],
              ['changes', '4. Change Requests (Leistungsänderungen)'],
              ['prices', '5. Preise, Zahlung & Verzug'],
              ['subs', '6. Abos/Retainer & Kündigung'],
              ['timelines', '7. Termine, Abnahme & Gewährleistung'],
              ['thirdparty', '8. Tools, Drittanbieter & Konten'],
              ['ip', '9. Nutzungsrechte, Portfolio & Credits'],
              ['conf', '10. Vertraulichkeit & Referenzen'],
              ['privacy', '11. Datenschutz (DSGVO)'],
              ['ads', '12. Spezielles: SEO/Ads & Performance'],
              ['shop', '13. Spezielles: Web/Shop & Hosting'],
              ['liability', '14. Haftung & Freistellung'],
              ['compliance', '15. Compliance, Export, Sanktionen'],
              ['termination', '16. Laufzeitende & Folgen'],
              ['force', '17. Höhere Gewalt'],
              ['law', '18. Anwendbares Recht & Gerichtsstand'],
              ['changes-terms', '19. Änderungen dieser AGB'],
              ['consumer', '20. Verbraucher-Hinweis (Widerruf)'],
              ['contact', '21. Anbieterkennzeichnung & Kontakt'],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Section id="scope" title="1. Geltungsbereich & Rangfolge">
          <p className='text-gray-400'>
            Diese AGB gelten für alle Verträge, Angebote und Leistungen der Agentur, insbesondere in den Bereichen:
            <em> Webdesign/Entwicklung</em>, <em>Branding/Design</em>, <em>Social Media</em>, <em>SEO</em>,
            <em> Google Ads/Performance-Marketing</em> sowie <em>Werbung & Kampagnen</em>.
          </p>
          <p className='text-gray-400'>
            Abweichende oder ergänzende Bedingungen der Kund:in werden nur Vertragsbestandteil, wenn die Agentur ihnen
            ausdrücklich schriftlich zustimmt. Es gilt folgende Rangfolge: (1) individuelle Vereinbarung/Angebot/SOW,
            (2) diese AGB, (3) Leistungsbeschreibungen/Service-Spezifika, (4) gesetzliche Regelungen.
          </p>
        </Section>

        <Section id="offers" title="2. Angebot, Vertragsschluss & Laufzeiten">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Angebote sind – sofern nicht ausdrücklich befristet – 14 Tage ab Angebotsdatum gültig.</li>
            <li>Der Vertrag kommt durch Angebotsannahme (z. B. per E-Mail) oder durch Leistungsbeginn zustande.</li>
            <li>Laufzeiten ergeben sich aus dem Angebot. Retainer/Abos laufen auf unbestimmte Zeit mit Mindestlaufzeit, sofern angegeben.</li>
          </ul>
        </Section>

        <Section id="services" title="3. Leistungsumfang & Mitwirkungspflichten">
          <p className='text-gray-400'>
            Umfang, Deliverables, Timelines und Meilensteine ergeben sich aus dem Angebot. Die Kund:in stellt alle
            erforderlichen Inhalte (Texte, Medien, Logos), Zugänge (z. B. Domains, Hosting, Werbekonten) und
            Freigaben rechtzeitig zur Verfügung und benennt eine:n verantwortliche:n Ansprechpartner:in.
          </p>
          <p className='text-gray-400'>
            Unterbleiben Mitwirkungen, verschieben sich Termine angemessen. Mehraufwände (z. B. zusätzliche Korrekturschleifen,
            Content-Erstellung, Re-Briefings) werden nach Angebot bzw. Zeitaufwand abgerechnet.
          </p>
        </Section>

        <Section id="changes" title="4. Change Requests (Leistungsänderungen)">
          <p className='text-gray-400'>
            Änderungswünsche nach Auftragserteilung werden als Change Request behandelt. Die Agentur prüft Auswirkungen
            auf Aufwand, Preis und Zeitplan und unterbreitet ein Update. Änderungen werden erst nach Freigabe wirksam.
          </p>
        </Section>

        <Section id="prices" title="5. Preise, Zahlung & Verzug">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Alle Preise verstehen sich netto zzgl. gesetzlicher Umsatzsteuer.</li>
            <li>Zahlungsziele: sofern nicht anders vereinbart, 14 Tage netto ab Rechnungsdatum.</li>
            <li>Teilzahlungen: Üblicherweise 50 % bei Auftrag, Rest gemäß Meilensteinen oder Abnahme.</li>
            <li>Bei Verzug fallen gesetzliche Verzugszinsen und Mahnkosten an; Zurückbehaltungsrechte bleiben vorbehalten.</li>
          </ul>
        </Section>

        <Section id="subs" title="6. Abos/Retainer & Kündigung">
          <p className='text-gray-400'>
            Monatliche Pakete (z. B. SEO-Betreuung, Social Media, Ads-Management) werden monatlich im Voraus abgerechnet.
            Kündigungsfrist: sofern nicht anders vereinbart, 4 Wochen zum Laufzeitende; Mindestlaufzeiten siehe Angebot.
          </p>
        </Section>

        <Section id="timelines" title="7. Termine, Abnahme & Gewährleistung">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Termine sind unverbindlich, sofern nicht ausdrücklich als „fix“ zugesagt und von Kund:in erfüllbar.</li>
            <li>Abnahmen erfolgen nach Vorlage der Ergebnisse bzw. Go-Live. Nicht gemeldete Mängel innerhalb von 7 Tagen gelten als freigegeben, sofern kein versteckter Mangel vorliegt.</li>
            <li>Gewährleistung für Werkleistungen richtet sich nach Gesetz; Nachbesserung hat Vorrang vor Minderung/Rücktritt.</li>
          </ul>
        </Section>

        <Section id="thirdparty" title="8. Tools, Drittanbieter & Konten">
          <p className='text-gray-400'>
            Für Drittleistungen (z. B. Hosting, Domains, Newsletter-Tools, Werbeplattformen, Stock-Material) gelten die
            jeweiligen AGB der Anbieter. Kosten trägt die Kund:in, sofern nicht anders vereinbart. Die Agentur handelt
            als Auftragsverarbeiter oder als bevollmächtigter Admin, ohne Eigentum an den Konten zu erwerben.
          </p>
        </Section>

        <Section id="ip" title="9. Nutzungsrechte, Portfolio & Credits">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>
              Mit vollständiger Zahlung erhält die Kund:in eine einfache, nicht ausschließliche, zeitlich und räumlich
              unbeschränkte Nutzungsrechtseinräumung an den finalen Ergebnissen für den vertraglich vereinbarten Zweck.
            </li>
            <li>
              Rohdaten/Arbeitsdateien (z. B. Figma, Projektdateien, Skripte) verbleiben bei der Agentur, sofern nicht
              ausdrücklich übertragen.
            </li>
            <li>
              Die Agentur darf Ergebnisse, Logos und Projektdaten als Referenz/Portfolio veröffentlichen (inkl. Nennung
              der Kund:in), es sei denn, dem wird vorab schriftlich widersprochen.
            </li>
            <li>
              Drittlizenzen (z. B. Fonts, Stock-Fotos) werden nicht übertragen, sondern verbleiben beim Lizenzinhaber;
              die Kund:in benötigt ggf. eigene Lizenzen.
            </li>
          </ul>
        </Section>

        <Section id="conf" title="10. Vertraulichkeit & Referenzen">
          <p className='text-gray-400'>
            Beide Parteien behandeln vertrauliche Informationen geheim. Ausgenommen sind allgemein bekannte Informationen
            oder solche, die unabhängig entwickelt wurden. Die Agentur darf die Kund:in namentlich als Referenz nennen,
            sofern dem nicht widersprochen wurde.
          </p>
        </Section>

        <Section id="privacy" title="11. Datenschutz (DSGVO)">
          <p className='text-gray-400'>
            Die Parteien beachten die anwendbaren Datenschutzgesetze. Soweit die Agentur personenbezogene Daten im Auftrag
            verarbeitet, schließen die Parteien vor Beginn eine <Link href="/dpa" className="underline">Auftragsverarbeitungsvereinbarung (DPA)</Link>.
            Weitere Informationen unter unserer <Link href="/privacy" className="underline">Datenschutzerklärung</Link> und
            <Link href="/cookie" className="underline"> Cookie-Richtlinie</Link>.
          </p>
        </Section>

        <Section id="ads" title="12. Spezielles: SEO/Ads & Performance">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Ranking-, Reichweiten- oder Umsatz-Garantien sind ausgeschlossen. Performance ist abhängig von Markt, Wettbewerb, Budget und externen Faktoren.</li>
            <li>Werbekonten verbleiben – sofern nichts anderes schriftlich vereinbart – im Eigentum der Kund:in. Die Agentur erhält notwendige Zugriffsrechte.</li>
            <li>Die Kund:in ist für Rechtmäßigkeit der Inhalte/Claims verantwortlich (Kennzeichnungspflichten, Wettbewerbsrecht, Marken- & Urheberrecht).</li>
          </ul>
        </Section>

        <Section id="shop" title="13. Spezielles: Web/Shop & Hosting">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Technische Voraussetzungen (Hosting, PHP/Node-Versionen, SSL, Caching) stellt die Kund:in sicher, sofern nicht anders vereinbart.</li>
            <li>Go-Live erfolgt nach Abnahme; Backups & Rollback-Punkte werden nach Best Effort erstellt, eine 100%-Verfügbarkeit kann nicht garantiert werden.</li>
            <li>Wartung/Updates/Security nur, wenn ausdrücklich beauftragt (Wartungsvertrag/SLA).</li>
          </ul>
        </Section>

        <Section id="liability" title="14. Haftung & Freistellung">
          <p className='text-gray-400'>
            Die Agentur haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung von
            Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit haftet die Agentur nur für die Verletzung
            wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt der Höhe nach auf den typischerweise
            vorhersehbaren Schaden; mittelbare Schäden und entgangener Gewinn sind ausgeschlossen. Zwingende
            Haftungsvorschriften bleiben unberührt.
          </p>
          <p className='text-gray-400'>
            Die Kund:in stellt die Agentur von Ansprüchen Dritter frei, die auf rechtswidrigen Inhalten, fehlenden Rechten
            oder Pflichtverletzungen der Kund:in beruhen.
          </p>
        </Section>

        <Section id="compliance" title="15. Compliance, Export, Sanktionen">
          <p className='text-gray-400'>
            Beide Parteien halten geltendes Recht ein, u. a. Anti-Korruption, Geldwäsche, Exportkontrolle und Sanktionen.
            Bei Verstößen ist die Agentur zur außerordentlichen Kündigung berechtigt.
          </p>
        </Section>

        <Section id="termination" title="16. Laufzeitende & Folgen">
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Bei Beendigung sind bis dahin erbrachte Leistungen zu vergüten.</li>
            <li>Offene Nutzungsrechte entstehen erst nach vollständiger Zahlung.</li>
            <li>Auf Wunsch unterstützt die Agentur beim Handover (separat vergütungspflichtig).</li>
          </ul>
        </Section>

        <Section id="force" title="17. Höhere Gewalt">
          <p className='text-gray-400'>
            Ereignisse außerhalb zumutbarer Kontrolle (z. B. Ausfälle von Drittanbietern, Streiks, Naturereignisse,
            behördliche Anordnungen) befreien die betroffene Partei für deren Dauer von Leistungspflichten; Termine
            verschieben sich angemessen.
          </p>
        </Section>

        <Section id="law" title="18. Anwendbares Recht & Gerichtsstand">
          <p className='text-gray-400'>
            Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG). Ausschließlicher Gerichtsstand für
            Kaufleute ist – soweit zulässig – <strong>Berlin</strong>.
          </p>
        </Section>

        <Section id="changes-terms" title="19. Änderungen dieser AGB">
          <p className='text-gray-400'>
            Die Agentur kann diese AGB mit Wirkung für die Zukunft anpassen. Über wesentliche Änderungen wird informiert.
            Widerspricht die Kund:in nicht innerhalb von 14 Tagen ab Mitteilung, gelten die Änderungen als angenommen.
          </p>
        </Section>

        <Section id="consumer" title="20. Verbraucher-Hinweis (Widerruf)">
          <p className='text-gray-400'>
            Die Leistungen richten sich primär an Unternehmer:innen. Sofern ausnahmsweise Verbraucher:innen beauftragen,
            gelten die gesetzlichen Widerrufsrechte. Ein Widerruf erlischt bei vollständiger Leistungserbringung sowie
            bei Beginn mit ausdrücklicher Zustimmung der Verbraucher:in mit Kenntnis des Verlusts des Widerrufsrechts.
          </p>
          <p className='text-gray-400'>
            Verbraucher-Infos und Muster-Widerrufsformular finden Sie in unserer{' '}
            <Link href="/revocation" className="underline">Widerrufsbelehrung</Link>.
          </p>
        </Section>

        <Section id="contact" title="21. Anbieterkennzeichnung & Kontakt">
          <p className='text-gray-400'>
            <strong>Sparway Marketing</strong><br />
            {/* Trage hier euer Impressum ein */}
            schuchardstr. 6, 42275 Wuppertal, Deutschland<br />
            E-Mail: <a className="underline" href="mailto:marketing@sparway.de">marketing@sparway.de</a><br />
            Telefon: <a className="underline" href="tel:+491010101010">+4917666623360</a><br />
            {/* USt-ID: DE-XXXXXX falls vorhanden */}
          </p>
          <p className='text-gray-400'>
            Datenschutz: <Link href="/privacy" className="underline">Datenschutzerklärung</Link> · Cookies:{' '}
            <Link href="/cookie" className="underline">Cookie-Richtlinie</Link> · DPA:{' '}
            <Link href="/dpa" className="underline">Auftragsverarbeitung</Link>
          </p>
        </Section>

        <footer className="mt-10 pt-6 border-t border-white/10 text-white/60 text-sm">
          <p className='text-gray-400'>
            Diese AGB sind eine Vorlage und ersetzen keine Rechtsberatung. Bitte prüfen Sie, ob branchenspezifische
            Informationspflichten (z. B. PreisangabenVO, Kennzeichnungspflichten, Influencer-Werbung) zusätzlich gelten.
          </p>
        </footer>
      </div>
    </main>
  );
}
