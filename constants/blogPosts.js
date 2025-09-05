// data/blogPosts.js
import { normalizeLang } from "../app/i18n/i18n";

// --- Base data (DE) stays exactly as you wrote ---
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
    author: { name: "Sparway Team", role: "Growth & Performance", avatar: "/logo.png" },
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
    author: { name: "Sparway Team", role: "Analytics", avatar: "/logo.png" },
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
    author: { name: "Sparway Team", role: "Design & CRO", avatar: "/logo.png" },
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
    author: { name: "Sparway Team", role: "Paid Media", avatar: "/logo.png" },
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

// ---------- Optional overrides (EN / AR). Add as much as you like; rest falls back to DE ----------
// ---- EN overrides (full bodies for all posts) ----
const enOverrides = {
  "seo-quick-wins-2025": {
    title: "SEO Quick Wins 2025: 12 actions with fast impact",
    excerpt: "From Core Web Vitals to entity optimization: lift your rankings within weeks.",
    tags: ["SEO", "Content", "Technical"],
    content: [
      { type: "h2", text: "Why quick wins matter now" },
      { type: "p",  text: "Not every SEO project needs a relaunch. In 2025 you win with focused, actionable steps that remove blockers and strengthen signals." },
      { type: "h3", text: "1) Prioritize Core Web Vitals" },
      { type: "p",  text: "Start with LCP and CLS. Inspect largest above-the-fold assets and reduce layout shifts with fixed dimensions; lazy-load only below the fold." },
      { type: "ul", items: [
        "Images → AVIF/WebP, correct dimensions, responsive srcset",
        "Critical CSS & preload hero font/image",
        "Audit 3rd-party scripts (tag plan!)",
      ]},
      { type: "h3", text: "2) Keyword mapping & intent cleanup" },
      { type: "p",  text: "One clear intent per URL. Consolidate cannibalization, strengthen hubs and guide users more clearly." },
      { type: "blockquote", text: "Rule: 1 intent → 1 page. Anything else is friction." },
      { type: "h3", text: "3) On-page essentials in 60 minutes" },
      { type: "ol", items: [
        "Title tags with value + differentiation (≤ 60 chars)",
        "Above-the-fold value proposition + primary CTA",
        "Internal links to topical hubs and conversions",
      ]},
      { type: "h3", text: "4) Structured data & entity building" },
      { type: "p",  text: "Use Schema.org (Article, Product, Organization). Strengthen entities via consistent NAP, About/Contact pages and author profiles." },
      { type: "h2", text: "Conclusion" },
      { type: "p",  text: "With clear priority (CWV → intent → on-page → entities) you’ll see visible jumps within weeks — without months of rebuild." },
    ],
  },

  "ga4-vs-meta-pixel-attribution": {
    title: "GA4 vs. Meta Pixel: Understand attribution (without magic)",
    excerpt: "Why numbers differ, what Last Click vs. DDA means, and how to reconcile both worlds.",
    tags: ["Analytics", "Ads", "Attribution"],
    content: [
      { type: "h2", text: "Different numbers are normal" },
      { type: "p",  text: "GA4 and Meta measure differently: cookie lifetimes, lookback windows, modelling and attribution models lead to divergent reports." },
      { type: "h3", text: "Attribution models at a glance" },
      { type: "ul", items: [
        "Last Click: assigns 100% to the last touchpoint.",
        "Data-Driven (GA4 default): distributes credit based on a model.",
        "Meta: mostly “post-click/impression” within defined windows.",
      ]},
      { type: "h3", text: "Typical reasons for discrepancies" },
      { type: "ol", items: [
        "Different lookback windows (e.g., 7 vs 28 days).",
        "Tracking protection/consent — not every session is measured.",
        "Cross-device/browser → different attribution.",
      ]},
      { type: "h3", text: "How to work with both worlds" },
      { type: "ul", items: [
        "Define a primary dashboard (e.g., GA4) + the ad platform’s view.",
        "Name conversion events identically in GA4 and Pixel.",
        "Compare trends, not absolutes. What matters: direction and efficiency.",
      ]},
      { type: "h2", text: "Practical takeaway" },
      { type: "p",  text: "Use GA4 for cross-channel trends and Meta for campaign optimization. A unified event set and clean naming bring both worlds together." },
    ],
  },

  "landingpages-die-konvertieren": {
    title: "Landing pages that convert: frameworks & examples",
    excerpt: "Hero, proof, value, CTA — the building blocks that turn traffic into leads. With checklist.",
    tags: ["Webdesign", "CRO", "Copywriting"],
    content: [
      { type: "h2", text: "The backbone of a high-converting LP" },
      { type: "p",  text: "Clear hero, social proof, concrete value and visible CTAs — all reduced to one intended action." },
      { type: "h3", text: "1) A hero that explains the “why” immediately" },
      { type: "ul", items: [
        "Headline: outcome + audience + differentiation.",
        "Subline: what exactly happens next?",
        "Primary CTA visible; secondary like “see example”.",
      ]},
      { type: "h3", text: "2) Trust & proof" },
      { type: "p",  text: "Logo wall, case snippets, reviews. Concrete numbers beat generic claims." },
      { type: "h3", text: "3) Value sections & objections" },
      { type: "ol", items: [
        "3–5 value points, each with micro-proof.",
        "FAQ on price, duration, risk — remove friction.",
        "Secondary CTAs for low-intent users.",
      ]},
      { type: "h3", text: "4) Performance & UX" },
      { type: "ul", items: [
        "Speed: optimize fonts & images, put JS on a diet.",
        "Visual hierarchy and generous spacing.",
        "Measure scroll & events (CTA, form).",
      ]},
      { type: "h2", text: "Checklist (short)" },
      { type: "ul", items: [
        "1 intent • 1 page",
        "Hero answers: what/why/for whom",
        "First CTA above the fold",
        "Concrete proof over fluff",
        "Fast & accessible (CWV, a11y)",
      ]},
    ],
  },

  "pmax-best-practices": {
    title: "Performance Max best practices for e-commerce",
    excerpt: "Asset groups, feeds, creative variants and signals — how to scale PMAX efficiently.",
    tags: ["Google Ads", "E-Commerce", "PMAX"],
    content: [
      { type: "h2", text: "Why PMAX ticks differently" },
      { type: "p",  text: "PMAX combines inventories (Search, Shopping, YouTube, Discover). Leverage comes from feeds, creatives and clear signals." },
      { type: "h3", text: "1) Feed quality first" },
      { type: "ul", items: [
        "Titles with brand + product + attributes (size/colour).",
        "Clean product categories and GTINs.",
        "High-quality images, availability, up-to-date prices.",
      ]},
      { type: "h3", text: "2) Asset groups with clear logic" },
      { type: "p",  text: "Structure by collection/profit or funnel stage. Keep creatives and landing pages consistent per group." },
      { type: "h3", text: "3) Signals & exclusions" },
      { type: "ol", items: [
        "Audience signals (purchases, high-value visitors).",
        "Brand protection & search terms (run brand campaign separately).",
        "Exclude low-margin or out-of-stock products.",
      ]},
      { type: "h3", text: "4) Tests & measurement" },
      { type: "ul", items: [
        "A/B creatives (hooks, USPs, prices).",
        "Evaluate ROAS by collection — shift budget accordingly.",
        "Wire GA4 conversions & EEC correctly.",
      ]},
      { type: "h2", text: "Conclusion" },
      { type: "p",  text: "PMAX scales when feed, creatives and signals align. Optimize systematically — not just bids." },
    ],
  },
};


// ---- AR overrides (full bodies for all posts) ----
const arOverrides = {
  "seo-quick-wins-2025": {
    title: "انتصارات SEO سريعة 2025: 12 خطوة ذات تأثير فوري",
    excerpt: "من مقاييس الويب الأساسية إلى تحسين الكيانات: ارفع ترتيبك خلال أسابيع.",
    tags: ["السيو", "المحتوى", "تقني"],
    content: [
      { type: "h2", text: "لماذا الانتصارات السريعة مهمة الآن" },
      { type: "p",  text: "ليس كل مشروع سيو يحتاج لإعادة إطلاق. في 2025 تربح بخطوات مركّزة قابلة للتنفيذ تزيل العوائق وتُعزّز الإشارات." },
      { type: "h3", text: "1) أعطِ Core Web Vitals الأولوية" },
      { type: "p",  text: "ابدأ بـ LCP وCLS. افحص أكبر العناصر أعلى الصفحة وقلّل تبدّل التخطيط بأبعاد ثابتة؛ وفعّل التحميل الكسول أسفل الطي فقط." },
      { type: "ul", items: [
        "الصور → AVIF/WebP بأبعاد صحيحة وsrcset متجاوب",
        "Critical CSS وPreload لخط/صورة البطل",
        "مراجعة صارمة لسكربتات الطرف الثالث (خطة الوسوم)",
      ]},
      { type: "h3", text: "2) مواءمة الكلمات وتنظيف النية" },
      { type: "p",  text: "نية بحث واحدة لكل عنوان URL. وحّد الصفحات المتداخلة، قوِّ المراكز، ووجّه المستخدمين بوضوح." },
      { type: "blockquote", text: "قاعدة: نية واحدة → صفحة واحدة. وما عدا ذلك احتكاك." },
      { type: "h3", text: "3) أساسيات الصفحة في 60 دقيقة" },
      { type: "ol", items: [
        "وسوم العنوان بقيمة وتميّز (≤ 60 حرفًا)",
        "عرض قيمة واضح أعلى الصفحة + زر أساسي",
        "روابط داخلية إلى المراكز والتحويلات",
      ]},
      { type: "h3", text: "4) البيانات المنظّمة وبناء الكيانات" },
      { type: "p",  text: "استخدم Schema.org (Article, Product, Organization). قوِّ الكيانات عبر بيانات NAP المتسقة وصفحات التعريف/التواصل وملفات المؤلفين." },
      { type: "h2", text: "الخلاصة" },
      { type: "p",  text: "مع ترتيب أولويات واضح (CWV ← النية ← داخل الصفحة ← الكيانات) ستحقق قفزات ملحوظة خلال أسابيع — دون إعادة بناء طويلة." },
    ],
  },

  "ga4-vs-meta-pixel-attribution": {
    title: "GA4 مقابل Meta Pixel: فهم الإسناد (دون سحر)",
    excerpt: "لماذا تختلف الأرقام، ومعنى Last Click مقابل DDA، وكيف تجمع العالمين.",
    tags: ["تحليلات", "إعلانات", "إسناد"],
    content: [
      { type: "h2", text: "اختلاف الأرقام أمر طبيعي" },
      { type: "p",  text: "يقيس GA4 وMeta بطرق مختلفة: مدة الكوكيز، نوافذ الاسترجاع، النمذجة، ونماذج الإسناد تؤدي إلى تقارير متباينة." },
      { type: "h3", text: "لمحة عن نماذج الإسناد" },
      { type: "ul", items: [
        "Last Click: يُسند 100% لآخر تفاعل.",
        "Data-Driven (الافتراضي في GA4): يوزّع النسب اعتمادًا على النمذجة.",
        "Meta: غالبًا «بعد النقرة/المشاهدة» ضمن نوافذ زمنية محددة.",
      ]},
      { type: "h3", text: "أسباب شائعة لاختلاف الأرقام" },
      { type: "ol", items: [
        "نوافذ استرجاع مختلفة (مثل 7 مقابل 28 يومًا).",
        "حماية الخصوصية/الموافقة — ليست كل الجلسات تُقاس.",
        "اختلاف الأجهزة/المتصفحات → اختلاف الإسناد.",
      ]},
      { type: "h3", text: "كيف توحّد العالمين عمليًا" },
      { type: "ul", items: [
        "حدّد لوحة رئيسية (مثل GA4) + منظور منصة الإعلانات.",
        "وحّد أسماء أحداث التحويل في GA4 وPixel.",
        "قارن التوجهات لا القيم المطلقة. الأهم: الاتجاه والكفاءة.",
      ]},
      { type: "h2", text: "خلاصة عملية" },
      { type: "p",  text: "استخدم GA4 للاتجاهات عبر القنوات وMeta لتحسين الحملات. مجموعة أحداث موحّدة وتسميات نظيفة توحّد العالمين." },
    ],
  },

  "landingpages-die-konvertieren": {
    title: "صفحات هبوط تُحوِّل: أطر وأمثلة",
    excerpt: "Hero وProof وValue وCTA — اللبنات التي تُحوّل الزيارات إلى عملاء محتملين. مع قائمة فحص.",
    tags: ["تصميم الويب", "تحسين التحويل", "كتابة المحتوى"],
    content: [
      { type: "h2", text: "الهيكل الرئيس لصفحة هبوط قوية" },
      { type: "p",  text: "بطل واضح، دلائل ثقة، قيمة ملموسة وأزرار دعوة مرئية — بهدف إجراء واحد فقط." },
      { type: "h3", text: "1) بطل يوضّح «لماذا» فورًا" },
      { type: "ul", items: [
        "العنوان: النتيجة + الجمهور + التميّز.",
        "العنوان الفرعي: ما الذي سيحدث بعد ذلك تحديدًا؟",
        "زر أساسي ظاهر، وثانوي مثل «شاهد مثال».",
      ]},
      { type: "h3", text: "2) الثقة والدليل" },
      { type: "p",  text: "جدار شعارات، لقطات حالات، تقييمات. الأرقام المحددة تتفوّق على العبارات العامة." },
      { type: "h3", text: "3) أقسام القيمة والاعتراضات" },
      { type: "ol", items: [
        "3–5 نقاط قيمة، ولكل منها دليل صغير.",
        "أسئلة شائعة حول السعر والمدة والمخاطر — أزل الاحتكاك.",
        "أزرار ثانوية لأصحاب النية المنخفضة.",
      ]},
      { type: "h3", text: "4) الأداء وتجربة الاستخدام" },
      { type: "ul", items: [
        "السرعة: حسّن الخطوط والصور وقلّل JavaScript.",
        "تسلسل بصري واضح ومسافات كافية.",
        "قياس التمرير والأحداث (الأزرار، النموذج).",
      ]},
      { type: "h2", text: "قائمة فحص مختصرة" },
      { type: "ul", items: [
        "نية واحدة • صفحة واحدة",
        "البطل يجيب: ماذا/لماذا/لمن",
        "أول زر أعلى الصفحة",
        "دلائل ملموسة بدل الحشو",
        "سريع وسهل الوصول (CWV وa11y)",
      ]},
    ],
  },

  "pmax-best-practices": {
    title: "أفضل ممارسات Performance Max للتجارة الإلكترونية",
    excerpt: "مجموعات الأصول، الخلاصات، تنويعات الإبداع والإشارات — هكذا توسّع PMAX بكفاءة.",
    tags: ["إعلانات جوجل", "تجارة إلكترونية", "PMAX"],
    content: [
      { type: "h2", text: "لماذا يعمل PMAX بشكل مختلف" },
      { type: "p",  text: "يجمع PMAX مخزونات متعددة (البحث، التسوّق، يوتيوب، ديسكفر). القوة في الخلاصات والإبداعات والإشارات الواضحة." },
      { type: "h3", text: "1) جودة الخلاصة أولًا" },
      { type: "ul", items: [
        "عناوين تتضمن العلامة + المنتج + السمات (الحجم/اللون).",
        "تصنيفات منتجات نظيفة وأرقام GTIN.",
        "صور عالية الجودة وتوفّر وأسعار محدثة.",
      ]},
      { type: "h3", text: "2) مجموعات أصول بمنطق واضح" },
      { type: "p",  text: "قسّم حسب المجموعة/الربحية أو مرحلة القمع. ثبّت اتساق الإبداعات وصفحات الهبوط داخل كل مجموعة." },
      { type: "h3", text: "3) الإشارات والاستثناءات" },
      { type: "ol", items: [
        "إشارات جمهور (عمليات شراء، زوار ذوو قيمة عالية).",
        "حماية العلامة والتحكم بمصطلحات البحث (حملة العلامة منفصلة).",
        "استبعاد المنتجات منخفضة الهامش أو غير المتوفرة.",
      ]},
      { type: "h3", text: "4) الاختبارات والقياس" },
      { type: "ul", items: [
        "اختبارات A/B للإبداعات (Hooks، عروض، أسعار).",
        "قيّم ROAS لكل مجموعة وانقل الميزانية للأفضل.",
        "ربط تحويلات GA4 وEEC بشكل صحيح.",
      ]},
      { type: "h2", text: "الخلاصة" },
      { type: "p",  text: "يتوسع PMAX عندما تتناغم الخلاصة والإبداعات والإشارات. حسّن بمنهجية — ليس عبر العطاءات فقط." },
    ],
  },
};


// ------------- helpers -------------
const deepClone = (o) => JSON.parse(JSON.stringify(o));

function mergePost(base, ov) {
  if (!ov) return base;
  const p = deepClone(base);
  if (ov.title) p.title = ov.title;
  if (ov.excerpt) p.excerpt = ov.excerpt;
  if (ov.tags) p.tags = ov.tags;

  // content: if provided, replace block-by-block; otherwise keep base
  if (Array.isArray(ov.content)) {
    // if override length matches → replace by index
    const out = [];
    const max = Math.max(base.content.length, ov.content.length);
    for (let i = 0; i < max; i++) {
      out[i] = ov.content[i] ?? base.content[i];
    }
    p.content = out.filter(Boolean);
  }
  return p;
}

function localizePost(post, lang) {
  const L = normalizeLang(lang);
  if (L === "de") return post;

  const en = enOverrides[post.slug];
  const ar = arOverrides[post.slug];

  if (L === "en") return mergePost(post, en);
  if (L === "ar") return mergePost(post, ar);

  return post;
}

// ------------- public API -------------
export const getPosts = (lang = "de") =>
  blogPosts.map((p) => localizePost(p, lang));

export const getPostBySlug = (slug, lang = "de") => {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return undefined;
  return localizePost(p, lang);
};
