// data/services.js
export const services = [
    {
      slug: "webdesign",
      title: "Webdesign",
      tagline: "Moderne, schnelle und konvertierende Websites.",
      heroImage: "/services/webdesign/hero.jpg",
      deliverables: [
        {
          slug: "landing-page",
          title: "Landing Page",
          description:
            "Eine fokussierte Seite für Kampagnen oder Lead-Generierung – schnell, klar, messbar.",
          startPrice: "ab 999 €",
          timeline: "1–2 Wochen",
          includes: [
            "Individuelles Design (Figma → Code)",
            "Responsive + Performance-Optimierung",
            "Kontakt-/Lead-Formular, Tracking (GA4/Meta-Pixel)",
            "On-Page SEO (Title/Meta/Schema basic)",
          ],
          examples: [
            { title: "Stripe – Payment Landing", url: "https://stripe.com/payments", note: "Klares Messaging, starke Visuals & Trust" },
            { title: "Linear – Produkt-LP", url: "https://linear.app/", note: "Minimalistisch, extrem schnell" },
            { title: "Vercel – Framework Pages", url: "https://vercel.com/frameworks", note: "Developer-gerichtete LP mit Sections" },
            { title: "Lapa Ninja – Landing Galerie", url: "https://www.lapa.ninja/", note: "Große Sammlung von LP-Beispielen" },
            { title: "Land-book – Inspiration", url: "https://land-book.com/", note: "Kuratierte Landing Pages" },
          ],
        },
        {
          slug: "business-website",
          title: "Business Website (mehrseitig)",
          description:
            "Moderne Unternehmensseite mit mehreren Sektionen/Seiten für Leistungen, Team & Kontakt.",
          startPrice: "ab 2.499 €",
          timeline: "3–4 Wochen",
          includes: [
            "Mehrere Seiten (Start/Leistungen/Über uns/Kontakt)",
            "CMS (WordPress/Headless) nach Bedarf",
            "On-Page SEO + Blog/News",
            "Cookie/Consent & Grundschutz DSGVO-ready",
          ],
          examples: [
            { title: "Basecamp – Company Site", url: "https://basecamp.com/", note: "Klarer Tone-of-Voice, simple Struktur" },
            { title: "Intercom – B2B Website", url: "https://www.intercom.com/", note: "Starke Use-Cases & Social Proof" },
            { title: "Awwwards – Business Beispiele", url: "https://www.awwwards.com/websites/business/", note: "Ausgezeichnete Unternehmensseiten" },
            { title: "godly.website – Inspiration", url: "https://godly.website/", note: "Kuratiert, modern, kreativ" },
          ],
        },
        {
          slug: "shop",
          title: "E-Commerce / Shop",
          description:
            "Konversionsstarker Online-Shop mit sauberem Checkout & Tracking.",
          startPrice: "ab 4.990 €",
          timeline: "4–6 Wochen",
          includes: [
            "Shop (WooCommerce/Shopify/Headless)",
            "Produktkategorien, Varianten, Gutscheine",
            "Zahlungen, Versand & Steuer-Setup (DE)",
            "Feed für Google Merchant / Meta Catalog",
          ],
          examples: [
            { title: "Apple – Store", url: "https://www.apple.com/shop", note: "Saubere UX, starke Produktdarstellung" },
            { title: "Nike – E-Commerce", url: "https://www.nike.com/", note: "Kreative Visuals, starke Filter/PLP" },
            { title: "Shopify – Inspiration", url: "https://www.shopify.com/examples", note: "Sammlung echter Shopify-Shops" },
            { title: "Baymard – UX Research", url: "https://baymard.com/research", note: "Best Practices für Shop-UX" },
          ],
        },
      ],
      faqs: [
        { q: "Wie lange dauert ein Projekt?", a: "Zwischen 2–6 Wochen – je nach Umfang und Assets." },
        { q: "Arbeitet ihr mit WordPress oder React?", a: "Beides. Wir wählen die beste Lösung für das Ziel." },
      ],
      cta: { text: "Kostenlose Beratung buchen", href: "/termin" },
    },
  
    {
      slug: "seo-google-ads",
      title: "SEO & Google Ads",
      tagline: "Gefunden werden – organisch und mit bezahlten Kampagnen.",
      heroImage: "/services/seo/hero.jpg",
      deliverables: [
        {
          slug: "seo-audit",
          title: "SEO-Audit & Quick-Wins",
          description:
            "Technik, Content & Offpage: klare Prioritätenliste für schnelle Wirkung.",
          startPrice: "590 € einmalig",
          timeline: "5–7 Tage",
          includes: [
            "Technik-Check (CWV, Indexierung, Sitemap)",
            "Keyword-Mapping & Content-Gaps",
            "On-Page Empfehlungen + Roadmap",
            "30-min Review-Call",
          ],
          examples: [
            { title: "Google Search Central", url: "https://developers.google.com/search", note: "Offizielle SEO-Dokumentation" },
            { title: "Backlinko – SEO Guides", url: "https://backlinko.com/seo", note: "Fundierte Guides & Taktiken" },
            { title: "Ahrefs – Blog", url: "https://ahrefs.com/blog/", note: "Praxisnahe Analysen & Tests" },
          ],
        },
        {
          slug: "seo-betreuung",
          title: "Monatliche SEO-Betreuung",
          description:
            "Nachhaltiges Wachstum mit Content-Plan & technischer Optimierung.",
          startPrice: "ab 890 €/Monat",
          timeline: "laufend, Mindestlaufzeit 3 Monate",
          includes: [
            "Content-Plan + Erstellung/Briefings",
            "Technische Optimierung & Monitoring",
            "Monatsreporting & Maßnahmenplan",
            "Backlink-Strategie leichtgewichtig",
          ],
          examples: [
            { title: "Think with Google – Cases", url: "https://www.thinkwithgoogle.com/intl/en-cee/", note: "Case Studies & Insights" },
            { title: "SearchPilot Tests", url: "https://www.searchpilot.com/resources/ab-tests", note: "SEO A/B-Test Ergebnisse" },
          ],
        },
        {
          slug: "google-ads",
          title: "Google Ads (Search/PMAX)",
          description:
            "Kampagnen, die Leads/Verkäufe liefern – sauber getrackt & optimiert.",
          startPrice: "ab 690 € Setup + ab 490 €/Monat",
          timeline: "Setup 3–5 Tage, laufend",
          includes: [
            "Konto-Setup & Conversion-Tracking",
            "Kampagnen-Struktur (Search/PMAX/Brand)",
            "A/B-Tests für Anzeigentexte & LP",
            "Wöchentliches Monitoring",
          ],
          examples: [
            { title: "Google Ads Help – Best Practices", url: "https://support.google.com/google-ads/answer/6167122", note: "Offizielle Ads Empfeh­lungen" },
            { title: "Measure School", url: "https://www.measureschool.com/blog/", note: "Tracking/GA4/Tag Manager Know-how" },
          ],
        },
      ],
      faqs: [
        { q: "Wie schnell sehe ich Ergebnisse?", a: "SEO: 3–6 Monate. Ads: ab Woche 1 – mit Optimierung." },
      ],
      cta: { text: "SEO/Ads Check starten", href: "/termin" },
    },
  
    {
      slug: "social-media",
      title: "Social Media Ads & Marketing",
      tagline: "Content, der performs – von Reels bis Conversions.",
      heroImage: "/services/social/hero.jpg",
      deliverables: [
        {
          slug: "content-plan",
          title: "Content-Plan & Produktion",
          description:
            "Planbare Inhalte (Reels/Posts/Stories) passend zur Marke & Zielgruppe.",
          startPrice: "ab 690 €/Monat",
          timeline: "monatlich",
          includes: [
            "Redaktionsplan (2–4 Posts/Woche)",
            "Grafiken/Short-Videos (UCG optional)",
            "Community-Guidelines & Tonalität",
            "Monatsreporting",
          ],
          examples: [
            { title: "Instagram Creators", url: "https://www.instagram.com/creators/", note: "Tipps & Trends" },
            { title: "TikTok Business – Inspiration", url: "https://www.tiktok.com/business/en/inspiration", note: "Best Cases & Ideen" },
            { title: "Later – Blog", url: "https://later.com/blog/", note: "Social Content Strategien" },
          ],
        },
        {
          slug: "meta-ads",
          title: "Meta / TikTok / LinkedIn Ads",
          description:
            "Paid-Social-Kampagnen mit klarer Zieldefinition und sauberen Funnels.",
          startPrice: "Setup ab 790 € + Betreuung ab 590 €/Monat",
          timeline: "Setup 3–7 Tage, laufend",
          includes: [
            "Konto-Setup & Pixel/Conversions API",
            "Creatives & Hooks (A/B)",
            "Funnel (TOF/MOF/BOF)",
            "Wöchentliches Optimieren",
          ],
          examples: [
            { title: "Meta Success Stories", url: "https://www.facebook.com/business/success", note: "Offizielle Case Studies" },
            { title: "LinkedIn Ads Blog", url: "https://www.linkedin.com/business/marketing/blog", note: "B2B-Insights" },
          ],
        },
        {
          slug: "ugc",
          title: "UGC & Creatives",
          description:
            "Nutzer-ähnliche Videos & Ads-Visuals, die in Feeds natürlich wirken.",
          startPrice: "ab 350 € / Video",
          timeline: "5–10 Tage",
          includes: [
            "Skript + Hooks",
            "Produktion 9:16/1:1/16:9",
            "Caption/Hashtags & Varianten",
            "Nutzungsrechte für Ads",
          ],
          examples: [
            { title: "UGC Examples – TikTok", url: "https://www.tiktok.com/tag/ugc", note: "Echte UGC-Beispiele" },
            { title: "Billo – UGC Inspiration", url: "https://billo.app/ugc-examples", note: "Sammlung an UGC-Ads" },
          ],
        },
      ],
      faqs: [
        { q: "Produziert ihr auch Videos?", a: "Ja – In-House und mit Partnern je nach Budget." },
      ],
      cta: { text: "Social starten", href: "/termin" },
    },
    // --- ADD after your existing services ---

{
  slug: "branding",                           // matches /leistungen/branding
  title: "Branding & Design",
  tagline: "Einprägsame Marken, die auffallen – von Logo bis Packaging.",
  heroImage: "/services/branding/hero.jpg",
  deliverables: [
    {
      slug: "logo-kit",
      title: "Logo Kit",
      description:
        "Hauptlogo, Variationen, Schwarz/Weiß, Favicon – sauber als Assets exportiert.",
      startPrice: "ab 790 €",
      timeline: "1–2 Wochen",
      includes: [
        "3–4 Logo-Entwürfe + 2 Runden Revision",
        "Finale Dateien: SVG, PDF, PNG",
        "Favicon / App-Icon",
        "Mini-Style-Sheet (Farben/Typo)",
      ],
      // websites not relevant here; we keep examples empty or link to dribbble/behance if desired
      examples: [],
    },
    {
      slug: "brand-kit",
      title: "Brand Kit (Light)",
      description:
        "Kompakter Markenbaukasten für Social/Ads/Website – schnell einsetzbar.",
      startPrice: "ab 1.490 €",
      timeline: "2–3 Wochen",
      includes: [
        "Logo-Set + Farbpalette + Typografie",
        "Social-Templates (IG/FB/LinkedIn, 6–10 Vorlagen)",
        "Buttons/Icons/Patterns",
        "Brand Guideline (10–15 Seiten)",
      ],
      examples: [],
    },
    {
      slug: "social-templates",
      title: "Social Templates",
      description:
        "Wiederverwendbare Vorlagen (Feed/Story/Reel-Cover) für konsistenten Auftritt.",
      startPrice: "ab 590 €",
      timeline: "5–7 Tage",
      includes: [
        "8–12 Templates (IG/FB/LinkedIn, PSD/FIG/Canva)",
        "Cover/Thumbnails, Story-Sequenzen",
        "Export-Vorgaben (Formate/Größen)",
        "Kurze Übergabe-Session",
      ],
      examples: [],
    },
    {
      slug: "print-packaging",
      title: "Print & Packaging",
      description:
        "Flyer, Plakate, Packaging – druckfertige Daten mit Beschnitt & Farbprofil.",
      startPrice: "ab 690 €",
      timeline: "1–3 Wochen",
      includes: [
        "Layout-Entwürfe + 2 Revisionen",
        "Druck-PDF (CMYK, 3mm Beschnitt)",
        "Mockups zur Vorschau",
        "Lieferanten-Handling optional",
      ],
      examples: [],
    },
  ],
  // real works go here:
  gallery: [
    // type can be "Logo", "Social", "Poster", "Packaging", "Guideline"
    // { title: "Acme – Primärlogo",        type: "Logo",      src: "/portfolio/branding/acme-logo-primary.png" },
    // { title: "Acme – Monogramm",         type: "Logo",      src: "/portfolio/branding/acme-logo-mark.png" },
    { title: "Sparway – Social Set 01",   type: "Social",    src: "/designs/MedicalHealthcare.webp" },
    { title: "Sparway – Social Set 01",   type: "Social",    src: "/designs/last/post.avif" },
    { title: "Seo – Social Set 02",   type: "Social",    src: "/designs/seo.avif" },
    { title: "Degital-Marketing – Social Set 02",   type: "Social",    src: "/designs/digitalmarketing.avif" },
    { title: "Resturant –  Poster",     type: "Poster",    src: "/designs/HotdogListe.avif" },
    { title: "Tourisim –  Poster",     type: "Poster",    src: "/designs/last/acient.avif" },
    { title: "ads –  Poster",     type: "Poster",    src: "/designs/last/ads.avif" },
    { title: "Restaurant –  Poster",     type: "Poster",    src: "/designs/last/resturant2.avif" },
    { title: "Restaurant –  Poster",     type: "Poster",    src: "/designs/last/resturant3.avif" },
    { title: "Restaurant –  Poster",     type: "Poster",    src: "/designs/last/resturant4.avif" },
    { title: "Restaurant –  Poster",     type: "Poster",    src: "/designs/last/resturant5.avif" },
    { title: "Restaurant –  Poster",     type: "Poster",    src: "/designs/last/resturant6.avif" },
    { title: "Tourisim –  Poster",     type: "Poster",    src: "/designs/last/tourist.avif" },
    { title: "Bau arbeit –  Poster",     type: "Poster",    src: "/designs/last/baustele.avif" },
    { title: "Bau arbeit –  Poster",     type: "Poster",    src: "/designs/last/baustele1.avif" },
    { title: "Medical Center –  Poster",     type: "Poster",    src: "/designs/last/brochure1.avif" },
    { title: "Cars  –  Poster",     type: "Poster",    src: "/designs/last/cars1.avif" },
    { title: "Cars  –  Poster",     type: "Poster",    src: "/designs/last/cars2.avif" },
    { title: "Kaffee  –  Poster",     type: "Poster",    src: "/designs/last/coffe1.avif" },
    { title: "Kaffee  –  Poster",     type: "Poster",    src: "/designs/last/coffe2.avif" },
    { title: "Logistics  –  Poster",     type: "Poster",    src: "/designs/last/delivery.avif" },
    { title: "Logistics  –  Poster",     type: "Poster",    src: "/designs/last/delivery2.avif" },
    { title: "Branding – Sparway", type: "Poster", src: "/designs/Branding.avif" },
    // { title: "Herbal – Box Packaging",   type: "Packaging", src: "/portfolio/branding/herbal-pack-box.jpg" },
    // { title: "Brand Guideline – Excerpt",type: "Guideline", src: "/portfolio/branding/brand-guide-spread.jpg" },
  ],
  faqs: [
    { q: "Wie läuft die Logo-Entwicklung ab?", a: "Briefing → Moodboard → 3–4 Entwürfe → 2 Revisionen → Finalisierung & Übergabe der Dateien." },
    { q: "Liefern Sie druckfertige Daten?", a: "Ja. CMYK, korrekte Beschnittzugabe, Profile und Export für Ihre Druckerei." },
  ],
  cta: { text: "Branding anfragen", href: "/termin" },
},

{
  slug: "werbung",                         // matches /leistungen/werbung
  title: "Werbung & Kampagnen",
  tagline: "Kreative Kampagnen, die Aufmerksamkeit in Ergebnisse verwandeln.",
  heroImage: "/services/ads/hero.jpg",
  deliverables: [
    {
      slug: "kampagnen-konzept",
      title: "Kampagnen-Konzept",
      description:
        "Von Leitidee bis Media-Plan: Botschaft, Creatives, Kanäle und KPIs aus einem Guss.",
      startPrice: "ab 1.490 €",
      timeline: "1–2 Wochen",
      includes: [
        "Creative Leitidee, Hook-Angles",
        "Key Visuals + Copy-Lines",
        "Media-Mix Vorschlag",
        "Messkonzept (KPIs, Events)",
      ],
      examples: [],
    },
    {
      slug: "ad-creatives",
      title: "Ad-Creatives Paket",
      description:
        "Statisches + Video-Material für Meta/TikTok/LinkedIn inkl. Varianten zum Testen.",
      startPrice: "ab 790 €",
      timeline: "5–10 Tage",
      includes: [
        "5–10 Creatives (Stills/Shorts)",
        "Formate 1:1 / 9:16 / 16:9",
        "Hook-Varianten + CTAs",
        "Export + Übergabe",
      ],
      examples: [],
    },
  ],
  faqs: [
    { q: "Können Sie auch die Ausspielung übernehmen?", a: "Ja – in Kombination mit unserem SEO/Ads-Service begleiten wir Setup, Tracking und Optimierung." },
  ],
  cta: { text: "Kampagne starten", href: "/termin" },
},

  ];
  
  export const getServiceSlugs = () => services.map((s) => s.slug);
  export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
  