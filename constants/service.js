// data/services.js
import { normalizeLang, withLang } from '../app/i18n/i18n';

// --- Your original German base data (unchanged) ---
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

  {
    slug: "branding",
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
    gallery: [
      { title: "Sparway – Social Set 01", type: "Social", src: "/designs/MedicalHealthcare.webp" },
      { title: "Sparway – Social Set 01", type: "Social", src: "/designs/last/post.avif" },
      { title: "Seo – Social Set 02", type: "Social", src: "/designs/seo.avif" },
      { title: "Degital-Marketing – Social Set 02", type: "Social", src: "/designs/digitalmarketing.avif" },
      { title: "Resturant –  Poster", type: "Poster", src: "/designs/HotdogListe.avif" },
      { title: "Tourisim –  Poster", type: "Poster", src: "/designs/last/acient.avif" },
      { title: "ads –  Poster", type: "Poster", src: "/designs/last/ads.avif" },
      { title: "Restaurant –  Poster", type: "Poster", src: "/designs/last/resturant2.avif" },
      { title: "Restaurant –  Poster", type: "Poster", src: "/designs/last/resturant3.avif" },
      { title: "Restaurant –  Poster", type: "Poster", src: "/designs/last/resturant4.avif" },
      { title: "Restaurant –  Poster", type: "Poster", src: "/designs/last/resturant5.avif" },
      { title: "Restaurant –  Poster", type: "Poster", src: "/designs/last/resturant6.avif" },
      { title: "Tourisim –  Poster", type: "Poster", src: "/designs/last/tourist.avif" },
      { title: "Bau arbeit –  Poster", type: "Poster", src: "/designs/last/baustele.avif" },
      { title: "Bau arbeit –  Poster", type: "Poster", src: "/designs/last/baustele1.avif" },
      { title: "Medical Center –  Poster", type: "Poster", src: "/designs/last/brochure1.avif" },
      { title: "Cars  –  Poster", type: "Poster", src: "/designs/last/cars1.avif" },
      { title: "Cars  –  Poster", type: "Poster", src: "/designs/last/cars2.avif" },
      { title: "Kaffee  –  Poster", type: "Poster", src: "/designs/last/coffe1.avif" },
      { title: "Kaffee  –  Poster", type: "Poster", src: "/designs/last/coffe2.avif" },
      { title: "Logistics  –  Poster", type: "Poster", src: "/designs/last/delivery.avif" },
      { title: "Logistics  –  Poster", type: "Poster", src: "/designs/last/delivery2.avif" },
      { title: "Branding – Sparway", type: "Poster", src: "/designs/Branding.avif" },
    ],
    faqs: [
      { q: "Wie läuft die Logo-Entwicklung ab?", a: "Briefing → Moodboard → 3–4 Entwürfe → 2 Revisionen → Finalisierung & Übergabe der Dateien." },
      { q: "Liefern Sie druckfertige Daten?", a: "Ja. CMYK, korrekte Beschnittzugabe, Profile und Export für Ihre Druckerei." },
    ],
    cta: { text: "Branding anfragen", href: "/termin" },
  },

  {
    slug: "werbung",
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

// --- Arabic overrides (fill as much as you like; rest will fall back to DE) ---
const arOverrides = {
  webdesign: {
    title: "تصميم المواقع",
    tagline: "مواقع حديثة وسريعة ومحفّزة للتحويل.",
    deliverables: {
      "landing-page": {
        title: "صفحة هبوط",
        description: "صفحة مركّزة للحملات أو جمع العملاء المحتملين — بسرعة ووضوح وقابلة للقياس.",
        startPrice: "ابتداءً من 999€",
        timeline: "1–2 أسبوع",
        includes: [
          "تصميم مخصص (من Figma إلى كود)",
          "توافق مع الجوال + تحسين الأداء",
          "نموذج تواصل/عملاء محتملين + تتبّع (GA4/Meta Pixel)",
          "تحسينات SEO أساسية (Meta/Title/Schema)",
        ],
      },
      "business-website": {
        title: "موقع شركة (متعدد الصفحات)",
        description: "موقع حديث متعدد الأقسام/الصفحات للخدمات والفريق والتواصل.",
        startPrice: "ابتداءً من 2,499€",
        timeline: "3–4 أسابيع",
      },
      shop: {
        title: "متجر إلكتروني",
        description: "متجر قوي التحويل مع سلة شراء وتتبع نظيف.",
        startPrice: "ابتداءً من 4,990€",
        timeline: "4–6 أسابيع",
      },
    },
    faqs: [
      { q: "كم يستغرق تنفيذ المشروع؟", a: "بين 2–6 أسابيع — حسب النطاق والمواد المتاحة." },
      { q: "هل تعملون بـ WordPress أم React؟", a: "كلاهما. نختار الأنسب لتحقيق الهدف." },
    ],
    cta: { text: "احجز استشارة مجانية" },
  },

  "seo-google-ads": {
    title: "السيو وإعلانات جوجل",
    tagline: "لتكون ظاهرًا: عضويًا وبحملات مدفوعة.",
    deliverables: {
      "seo-audit": {
        title: "تدقيق SEO وفوزيات سريعة",
        description: "تقني، محتوى، وروابط خارجية: قائمة أولويات واضحة لتأثير سريع.",
        startPrice: "590€ لمرة واحدة",
        timeline: "5–7 أيام",
      },
      "seo-betreuung": {
        title: "إدارة SEO شهرية",
        description: "نمو مستدام عبر خطة محتوى وتحسين تقني.",
      },
      "google-ads": {
        title: "إعلانات Google (بحث/PMAX)",
        description: "حملات تجلب العملاء/المبيعات مع تتبّع وتحسين نظيف.",
      },
    },
    faqs: [{ q: "متى تظهر النتائج؟", a: "السيو: 3–6 أشهر. الإعلانات: من الأسبوع الأول مع التحسين." }],
    cta: { text: "ابدأ فحص السيو/الإعلانات" },
  },

  "social-media": {
    title: "إعلانات وتسويق السوشيال",
    tagline: "محتوى يحقق النتائج — من الريلز إلى التحويلات.",
    deliverables: {
      "content-plan": {
        title: "خطة المحتوى والإنتاج",
        description: "محتوى قابل للتخطيط (ريلز/منشورات/قصص) متوافق مع العلامة والجمهور.",
      },
      "meta-ads": {
        title: "إعلانات Meta/TikTok/LinkedIn",
        description: "حملات مدفوعة بأهداف واضحة وقنوات Funnel نظيفة.",
      },
      ugc: {
        title: "UGC وكرياتيف",
        description: "فيديوهات وصور تبدو طبيعية في الخلاصات وتعمل كإعلانات.",
      },
    },
    faqs: [{ q: "هل تنتجون الفيديوهات؟", a: "نعم — داخل الفريق أو مع شركاء حسب الميزانية." }],
    cta: { text: "ابدأ السوشيال" },
  },

  branding: {
    title: "الهوية البصرية والتصميم",
    tagline: "علامات لافتة تُحفر في الذهن — من الشعار إلى التغليف.",
    deliverables: {
      "logo-kit": {
        title: "حزمة الشعار",
        description: "الشعار الرئيسي والمتغيّرات والأسود/الأبيض والفافيكون كأصول جاهزة.",
      },
      "brand-kit": {
        title: "حزمة العلامة (خفيفة)",
        description: "صندوق أدوات مضغوط لوسائل التواصل/الإعلانات/الموقع — سريع التطبيق.",
      },
      "social-templates": {
        title: "قوالب اجتماعية",
        description: "قوالب قابلة لإعادة الاستخدام (منشور/قصة/غلاف ريلز) لمظهر متسق.",
      },
      "print-packaging": {
        title: "مطبوعات وتغليف",
        description: "منشورات وملصقات وتغليف — ملفات جاهزة للطباعة مع الهوامش والملفات اللونية.",
      },
    },
    faqs: [
      { q: "كيف تتم عملية تصميم الشعار؟", a: "بريف → مودبورد → 3–4 مقترحات → جولتا مراجعة → تسليم الملفات." },
      { q: "هل توفّرون ملفات جاهزة للطباعة؟", a: "نعم، CMYK وحدود القصّ والملفات اللونية والتصدير للمطبعة." },
    ],
    cta: { text: "اطلب العلامة" },
  },

  werbung: {
    title: "إعلانات وحملات",
    tagline: "حملات إبداعية تحوّل الانتباه إلى نتائج.",
    deliverables: {
      "kampagnen-konzept": {
        title: "مفهوم الحملة",
        description: "من الفكرة الرئيسية حتى خطة الوسائط: الرسالة، الكرياتيف، القنوات، ومؤشرات الأداء.",
      },
      "ad-creatives": {
        title: "حزمة كرياتيف الإعلانات",
        description: "مواد ثابتة/فيديو لـ Meta/TikTok/LinkedIn مع نسخ للاختبار.",
      },
    },
    faqs: [{ q: "هل تديرون عرض الإعلانات؟", a: "نعم، مع خدمة السيو/الإعلانات نرافق الإعداد والتتبع والتحسين." }],
    cta: { text: "ابدأ حملة" },
  },
};

// ---------- merge helpers ----------
const bySlug = (list) => Object.fromEntries(list.map((d) => [d.slug, d]));
const deepClone = (o) => JSON.parse(JSON.stringify(o));

function applyArOverrides(base) {
  const o = arOverrides[base.slug];
  if (!o) return base;

  const out = deepClone(base);

  if (o.title) out.title = o.title;
  if (o.tagline) out.tagline = o.tagline;
  if (o.cta?.text) out.cta = { ...out.cta, text: o.cta.text };

  // FAQs
  if (o.faqs && Array.isArray(out.faqs)) {
    out.faqs = out.faqs.map((f, i) => ({
      ...f,
      q: o.faqs[i]?.q ?? f.q,
      a: o.faqs[i]?.a ?? f.a,
    }));
  }

  // Deliverables by slug
  if (o.deliverables && Array.isArray(out.deliverables)) {
    const od = o.deliverables;
    const map = bySlug(out.deliverables);
    Object.keys(od).forEach((dslug) => {
      if (!map[dslug]) return;
      const d = map[dslug];
      const patch = od[dslug];
      map[dslug] = {
        ...d,
        title: patch.title ?? d.title,
        description: patch.description ?? d.description,
        startPrice: patch.startPrice ?? d.startPrice,
        timeline: patch.timeline ?? d.timeline,
        includes: patch.includes ?? d.includes,
      };
    });
    out.deliverables = Object.values(map);
  }

  return out;
}

function localizeService(svc, lang) {
  const L = normalizeLang(lang);
  let x = deepClone(svc);
  if (L === 'ar') x = applyArOverrides(x);
  // keep CTA link but preserve ?lang
  if (x?.cta?.href) x.cta.href = withLang(x.cta.href, L);
  return x;
}

// ---------- public API ----------
export const getServices = (lang = 'de') =>
  services.map((s) => localizeService(s, lang));

export const getServiceSlugs = () => services.map((s) => s.slug);

export const getServiceBySlug = (slug, lang = 'de') => {
  const s = services.find((x) => x.slug === slug);
  if (!s) return undefined;
  return localizeService(s, lang);
};
