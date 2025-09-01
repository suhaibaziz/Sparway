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
  ];
  
  export const getServiceSlugs = () => services.map((s) => s.slug);
  export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
  