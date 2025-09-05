// data/blogPosts.js
export const blogPosts = [
    {
      slug: "seo-quick-wins-2025",
      title: "SEO Quick Wins 2025: 12 Maßnahmen mit schneller Wirkung",
      excerpt:
        "Von Core Web Vitals bis Entity-Optimierung: so hebst du in wenigen Wochen deine Rankings.",
      date: "2025-08-20",
      readingMinutes: 7,
      tags: ["SEO", "Content", "Technical"],
      cover: "/designs/seo.avif",
      author: {
        name: "Sparway Team",
        role: "Growth & Performance",
        avatar: "/logo.png",
      },
      popularity: 87,
      content: [
        { type: "h2", text: "Warum Quick Wins jetzt zählen" },
        {
          type: "p",
          text:
            "Nicht jedes SEO-Projekt braucht einen Relaunch. 2025 gewinnst du mit fokussierten, umsetzbaren Maßnahmen, die Ranking-Hemmnisse entfernen und Signale bündeln.",
        },
  
        { type: "h3", text: "1) Core Web Vitals priorisieren" },
        {
          type: "p",
          text:
            "Starte mit LCP und CLS. Analysiere die größten Assets above the fold und reduziere Layout-Shifts durch feste Größen und Lazyloading nur unterhalb des Falzes.",
        },
        {
          type: "ul",
          items: [
            "Bilder → AVIF/WebP, korrekte Dimensionen, Responsive Srcset",
            "Critical CSS & Preload für hero-font/hero-image",
            "3rd-Party-Skripte kritisch prüfen (Tag-Plan!)",
          ],
        },
  
        { type: "h3", text: "2) Keyword-Mapping & Intent-Cleanup" },
        {
          type: "p",
          text:
            "Eindeutige Suchintention pro URL. Konsolidiere Kannibalisierungen, stärke Hubs und navigiere Nutzer:innen klarer.",
        },
        { type: "blockquote", text: "Regel: 1 Intention → 1 Seite. Alles andere ist Reibung." },
  
        { type: "h3", text: "3) On-Page Essentials in 60 Minuten" },
        {
          type: "ol",
          items: [
            "Titletags mit Value + Differenzierung (max. 60 Zeichen)",
            "Above-the-fold Nutzenversprechen + primärer CTA",
            "Interne Links zu thematischen Hubs und Conversions",
          ],
        },
  
        { type: "h3", text: "4) Strukturierte Daten & Entity-Building" },
        {
          type: "p",
          text:
            "Nutze Schema.org (Article, Product, Organization). Verstärke Entitäten über konsistente NAP-Daten, About/Contact-Seiten und Autor:innen-Profile.",
        },
  
        { type: "h2", text: "Fazit" },
        {
          type: "p",
          text:
            "Mit klarer Priorisierung (CWV → Intent → On-Page → Entities) erzielst du binnen Wochen sichtbare Sprünge – ohne monatelangen Umbau.",
        },
      ],
    },
  
    {
      slug: "ga4-vs-meta-pixel-attribution",
      title: "GA4 vs. Meta Pixel: Attribution verstehen (ohne Magie)",
      excerpt:
        "Warum sich Zahlen unterscheiden, was Last Click vs. DDA bedeutet und wie du beide Welten zusammenbringst.",
      date: "2025-07-02",
      readingMinutes: 6,
      tags: ["Analytics", "Ads", "Attribution"],
      cover: "/meta.webp",
      author: {
        name: "Sparway Team",
        role: "Analytics",
        avatar: "/logo.png",
      },
      popularity: 73,
      content: [
        { type: "h2", text: "Zahlen unterscheiden sich – das ist normal" },
        {
          type: "p",
          text:
            "GA4 und Meta messen verschieden: Cookie-Laufzeiten, Lookback-Windows, Modellierung und Attributionsmodelle führen zu abweichenden Reports.",
        },
  
        { type: "h3", text: "Attributionsmodelle im Kurzcheck" },
        {
          type: "ul",
          items: [
            "Last Click (GA4 Explorer optional): ordnet 100% dem letzten Kontakt zu.",
            "Data-Driven (GA4 Standard): verteilt Anteile modellbasiert.",
            "Meta: überwiegend „Post-Click/Impression“ in definierten Zeitfenstern.",
          ],
        },
  
        { type: "h3", text: "Typische Ursachen für Abweichungen" },
        {
          type: "ol",
          items: [
            "Unterschiedliche Lookback-Windows (z. B. 7 vs. 28 Tage).",
            "Tracking-Schutz/Consent – nicht jede Session wird gemessen.",
            "Cross-Device/Browser → unterschiedliche Zuordnung.",
          ],
        },
  
        { type: "h3", text: "So arbeitest du mit beiden Welten" },
        {
          type: "ul",
          items: [
            "Definiere ein Primär-Dashboard (z. B. GA4) + Ad-Plattform-Ansicht.",
            "Richte Conversion-Events identisch benannt ein (GA4 & Pixel).",
            "Vergleiche Trends, nicht absolute Werte. Entscheidend: Richtung und Effizienz.",
          ],
        },
  
        { type: "h2", text: "Praxis-Fazit" },
        {
          type: "p",
          text:
            "GA4 für kanalübergreifende Trends, Meta für Kampagnenoptimierung. Ein gemeinsames Event-Set und saubere Namings bringen die Welten zusammen.",
        },
      ],
    },
  
    {
      slug: "landingpages-die-konvertieren",
      title: "Landingpages, die konvertieren: Frameworks & Beispiele",
      excerpt:
        "Hero, Proof, Value, CTA – die Bausteine, die aus Traffic Leads machen. Mit Checkliste.",
      date: "2025-06-10",
      readingMinutes: 8,
      tags: ["Webdesign", "CRO", "Copywriting"],
      cover: "/landingpage.webp",
      author: {
        name: "Sparway Team",
        role: "Design & CRO",
        avatar: "/logo.png",
      },
      popularity: 91,
      content: [
        { type: "h2", text: "Das Grundgerüst einer starken LP" },
        {
          type: "p",
          text:
            "Klarer Hero, Social Proof, Nutzenbeweise und sichtbare CTAs. Alles reduziert auf eine eindeutige Handlung.",
        },
  
        { type: "h3", text: "1) Hero, der sofort „Warum“ klärt" },
        {
          type: "ul",
          items: [
            "Headline: Ergebnis + Zielgruppe + Differenzierung.",
            "Subline: Was genau passiert als nächstes?",
            "CTA sichtbar, sekundär „Beispiel ansehen“ o. Ä.",
          ],
        },
  
        { type: "h3", text: "2) Trust & Proof" },
        {
          type: "p",
          text:
            "Logowall, Case-Snippets, Bewertungen. Konkrete Zahlen schlagen generische Aussagen.",
        },
  
        { type: "h3", text: "3) Value Sections & Einwände" },
        {
          type: "ol",
          items: [
            "3–5 Nutzenpunkte, jeweils mit Micro-Proof.",
            "FAQ zu Preis, Dauer, Risiko – nimm Friktion raus.",
            "Sekundäre CTAs für „Low Intent“. ",
          ],
        },
  
        { type: "h3", text: "4) Performance & UX" },
        {
          type: "ul",
          items: [
            "Schnell: Fonts & Bilder optimieren, JS-Diät.",
            "Visuelles Hierarchie-System, klare Abstände.",
            "Scroll-Tracking & Events messen (CTA, Formular).",
          ],
        },
  
        { type: "h2", text: "Checkliste (Kurzfassung)" },
        {
          type: "ul",
          items: [
            "1 Intent • 1 Seite",
            "Hero beantwortet: Was/Warum/Für wen",
            "First CTA above the fold",
            "Konkreter Trust statt Floskeln",
            "Schnell & zugänglich (CWV, a11y)",
          ],
        },
      ],
    },
  
    {
      slug: "pmax-best-practices",
      title: "Performance Max Best Practices für E-Commerce",
      excerpt:
        "Asset-Groups, Feeds, Creative-Varianten und Signale – so skalierst du PMAX effizient.",
      date: "2025-05-22",
      readingMinutes: 9,
      tags: ["Google Ads", "E-Commerce", "PMAX"],
      cover: "/Google-Ads.webp",
      author: {
        name: "Sparway Team",
        role: "Paid Media",
        avatar: "/logo.png",
      },
      popularity: 65,
      content: [
        { type: "h2", text: "Warum PMAX anders tickt" },
        {
          type: "p",
          text:
            "PMAX kombiniert Inventare (Search, Shopping, YouTube, Discover). Der Hebel liegt in Feeds, Creatives und klaren Signalen.",
        },
  
        { type: "h3", text: "1) Feed-Qualität zuerst" },
        {
          type: "ul",
          items: [
            "Titel mit Marke + Produkt + Attributen (Größe/Farbe).",
            "Saubere Produktkategorien & GTINs.",
            "Hochwertige Bilder, Verfügbarkeiten, Preise aktual.",
          ],
        },
  
        { type: "h3", text: "2) Asset-Groups mit klarer Logik" },
        {
          type: "p",
          text:
            "Strukturiere nach Kollektion/Profit oder Funnel-Stufe. Pro Gruppe: konsistente Creatives + Landingpages.",
        },
  
        { type: "h3", text: "3) Signale & Exclusions" },
        {
          type: "ol",
          items: [
            "Zielgruppen-Signale (Käufe, High-Value-Visitors).",
            "Brand-Schutz & Suchbegriffe steuern (Brand-Kampagne separat).",
            "Exclude Low-Margin-Produkte oder Out-of-Stock.",
          ],
        },
  
        { type: "h3", text: "4) Tests & Messung" },
        {
          type: "ul",
          items: [
            "A/B für Creatives (Hooks, USPs, Preise).",
            "ROAS nach Kollektion auswerten – Budget dorthin verschieben.",
            "GA4 Conversions & EEC sauber verdrahten.",
          ],
        },
  
        { type: "h2", text: "Fazit" },
        {
          type: "p",
          text:
            "PMAX skaliert, wenn Feed, Creatives und Signale zusammenpassen. Optimiere systematisch – nicht nur Gebote.",
        },
      ],
    },
  ];
  