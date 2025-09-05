// constants/index.js
import { withLang, tPick } from "../app/i18n/i18n";

// ---------- Explore worlds ----------
export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/webdev.jpg",
    titleByLang: { de: "Webdesign", en: "Web Design", ar: "تصميم المواقع" },
    href: "/leistungen/webdesign",
  },
  {
    id: "world-2",
    imgUrl: "/seo2.jpg",
    titleByLang: { de: "SEO & Google Ads", en: "SEO & Google Ads", ar: "تحسين محركات البحث وإعلانات جوجل" },
    href: "/leistungen/seo-google-ads",
  },
  {
    id: "world-3",
    imgUrl: "/social-media.jpg",
    titleByLang: { de: "Social Media Ads & Marketing", en: "Social Media Ads & Marketing", ar: "إعلانات السوشيال ميديا والتسويق" },
    href: "/leistungen/social-media",
  },
  {
    id: "world-4",
    imgUrl: "/branding.jpg",
    titleByLang: { de: "Branding & Design", en: "Branding & Design", ar: "الهوية البصرية والتصميم" },
    href: "/leistungen/branding",
  },
  {
    id: "world-5",
    imgUrl: "/werbung.jpg",
    titleByLang: { de: "Werbe-Kosmos", en: "Advertising Universe", ar: "عالم الإعلانات" },
    href: "/leistungen/werbung",
  },
];

// Helper to get localized worlds + keep ?lang
export const getExploreWorlds = (lang = "de") =>
  exploreWorlds.map(w => ({
    ...w,
    title: tPick(w.titleByLang, lang),
    href: withLang(w.href, lang),
  }));

// ---------- Starting features ----------
export const startingFeaturesByLang = {
  de: [
    "Wähle die passende Geschäftslösungen für dein Unternehmen",
    "Erhalte maßgeschneiderte Strategien mit modernem Design und klarem Ziel",
    "Starte durch – wir kümmern uns um Technik, Werbung und Reichweite",
  ],
  en: [
    "Choose the right business solutions for your company",
    "Get tailored strategies with modern design and a clear goal",
    "Launch fast — we handle tech, ads and reach",
  ],
  ar: [
    "اختر الحلول المناسبة لعملك",
    "احصل على استراتيجيات مخصصة بتصميم حديث وأهداف واضحة",
    "انطلق بسرعة — ونحن نتكفّل بالتقنية والإعلانات والانتشار",
  ],
};

export const getStartingFeatures = (lang = "de") =>
  startingFeaturesByLang[lang] || startingFeaturesByLang.de;

// ---------- New features / insights (localized) ----------
export const newFeatures = [
  {
    imgUrl: "/businesws.jpg",
    titleByLang: {
      de: "Von A bis Z: Ihr Online-Business",
      en: "From A to Z: Your Online Business Establishment",
      ar: "من الألف إلى الياء: تأسيس نشاطك الإلكتروني",
    },
    subtitleByLang: {
      de: "Komplettlösung vom rechtlichen Setup bis zur Website & Online-Präsenz.",
      en: "A full solution from legal setup to website and online presence.",
      ar: "حل متكامل من الإعداد القانوني إلى الموقع والحضور الرقمي.",
    },
  },
  {
    imgUrl: "/marketing.jpg",
    titleByLang: {
      de: "Marketing für Ihr Unternehmen",
      en: "Marketing for Your Business",
      ar: "التسويق لعملك",
    },
    subtitleByLang: {
      de: "Mehr Reichweite, mehr Traffic, mehr Conversions – mit klarer Strategie.",
      en: "Boost reach, traffic, and conversions with tailored strategies.",
      ar: "زيادة الوصول والحركة والتحويلات باستراتيجيات مخصصة.",
    },
  },
];

export const getNewFeatures = (lang = "de") =>
  newFeatures.map(f => ({
    ...f,
    title: tPick(f.titleByLang, lang),
    subtitle: tPick(f.subtitleByLang, lang),
  }));

export const insights = [
  {
    imgUrl: "/online-marketing.jpg",
    titleByLang: {
      de: "Werden Sie unser Marketing-Kunde und führen Sie den Markt",
      en: "Become Our Marketing Client and Lead the Market",
      ar: "كن عميلنا في التسويق وتصدّر السوق",
    },
    subtitleByLang: {
      de: "Zielgerichtete Strategien & moderne Tools für nachhaltigen Erfolg.",
      en: "Targeted strategies and modern tools for sustainable success.",
      ar: "استراتيجيات موجّهة وأدوات حديثة لنجاح مستدام.",
    },
  },
  {
    imgUrl: "/business-product.jpg",
    titleByLang: {
      de: "Gründen Sie Ihr Online-Business und erreichen Sie Ihre Ziele",
      en: "Establish Your Online Business and Achieve Your Goals",
      ar: "أسس نشاطك الإلكتروني وحقق أهدافك",
    },
    subtitleByLang: {
      de: "Von der Website bis zur Sichtbarkeit – alles aus einer Hand.",
      en: "From website to visibility — all in one place.",
      ar: "من الموقع إلى الظهور — كل ذلك في مكان واحد.",
    },
  },
  {
    imgUrl: "/question-product.jpg",
    titleByLang: {
      de: "Unsicher? Kostenlose Beratung durch unsere Expert:innen",
      en: "Not Sure? Get a Free Consultation from Our Experts",
      ar: "لست متأكدًا؟ احصل على استشارة مجانية من خبرائنا",
    },
    subtitleByLang: {
      de: "Senden Sie Ihre Fragen – wir empfehlen die beste Lösung.",
      en: "Send your questions — we’ll recommend the best solution.",
      ar: "أرسل أسئلتك — وسنوصي بأفضل حل.",
    },
  },
];

export const getInsights = (lang = "de") =>
  insights.map(i => ({
    ...i,
    title: tPick(i.titleByLang, lang),
    subtitle: tPick(i.subtitleByLang, lang),
  }));

// ---------- Socials (as-is) ----------
export const socials = [
  {
    name: "Tiktok",
    url: "/twitter.svg",
    link: "https://www.tiktok.com/@sparway_marketing_gmbh",
  },
  {
    name: "instagram",
    url: "/instagram.svg",
    link: "https://www.instagram.com/sparway_marketing/",
  },
];

// ---------- Service options (group + items) ----------
export const serviceOptions = [
  {
    categoryByLang: {
      de: "Website Development",
      en: "Website Development",
      ar: "تطوير المواقع",
    },
    noteByLang: {
      de: "(WordPress, Laravel, React)",
      en: "(WordPress, Laravel, React)",
      ar: "(ووردبريس، لارافيل، رياكت)",
    },
    itemsByLang: {
      de: [
        "Landing Pages",
        "SEO-Optimierung",
        "E-Commerce Shops",
        "CRM & Chatbots",
        "Google Analytics & Tracking",
      ],
      en: [
        "Landing Pages",
        "SEO Optimization",
        "E-Commerce Shops",
        "CRM & Chatbots",
        "Google Analytics & Tracking",
      ],
      ar: [
        "صفحات هبوط",
        "تحسين محركات البحث",
        "متاجر إلكترونية",
        "إدارة علاقات العملاء وروبوتات محادثة",
        "تحليلات جوجل والتتبّع",
      ],
    },
  },
  {
    categoryByLang: {
      de: "Logo & Branding",
      en: "Logo & Branding",
      ar: "الشعار والهوية",
    },
    itemsByLang: {
      de: [
        "Logo-Design",
        "Corporate Identity",
        "Business-Profil (PDF)",
        "Flyer, Broschüren, Poster",
        "Professionelle Fotografie",
        "Promo-Videos & Reels",
      ],
      en: [
        "Logo Design",
        "Corporate Identity",
        "Business Profile PDF",
        "Flyers, Brochures, Posters",
        "Professional Photography",
        "Promo Videos & Reels",
      ],
      ar: [
        "تصميم الشعار",
        "الهوية المؤسسية",
        "بروفايل الشركة PDF",
        "مطويات وبروشورات وبوسترات",
        "تصوير احترافي",
        "فيديوهات ترويجية وريلز",
      ],
    },
  },
  {
    categoryByLang: {
      de: "Social Media Management",
      en: "Social Media Management",
      ar: "إدارة وسائل التواصل",
    },
    itemsByLang: {
      de: [
        "Content-Creation (Posts, Reels, Videos)",
        "Paid Ads (Facebook, Instagram, TikTok, Google Ads)",
        "Community Management",
        "Monatsreports & Analytics",
      ],
      en: [
        "Content Creation (Posts, Reels, Videos)",
        "Paid Advertising (Facebook, Instagram, TikTok, Google Ads)",
        "Community Management",
        "Monthly Reports & Analytics",
      ],
      ar: [
        "صناعة المحتوى (منشورات، ريلز، فيديو)",
        "إعلانات مدفوعة (فيسبوك، إنستغرام، تيك توك، جوجل)",
        "إدارة المجتمع",
        "تقارير شهرية وتحليلات",
      ],
    },
  },
];

// to render serviceOptions in a given language
export const getServiceOptions = (lang = "de") =>
  serviceOptions.map(g => ({
    category: tPick(g.categoryByLang, lang),
    note: g.noteByLang ? tPick(g.noteByLang, lang) : undefined,
    items: (g.itemsByLang?.[lang] || g.itemsByLang?.de || []),
  }));
