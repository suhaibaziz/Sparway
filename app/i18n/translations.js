// app/i18n/translations.js
export const messages = {
    de: {
      nav: {
        start: 'Start',
        services: 'Leistungen',
        referral: 'Referral',
        contact: 'Kontakt',
        blogs: 'Blogs',
        offers: 'Angebote',
        language: 'Sprache',
      },
      hero: {
        headline: 'Ihr Partner für digitales Wachstum',
        sub: 'Effektives Social Media Management, modernes Webdesign, SEO und zielgerichtete Performance-Ads – alles aus einer Hand.',
        explore: 'Leistungen entdecken',
        consult: 'Kostenlose Beratung',
      },
      common: {
        readMore: 'Weiterlesen',
      },
    },
    en: {
      nav: {
        start: 'Home',
        services: 'Services',
        referral: 'Referral',
        contact: 'Contact',
        blogs: 'Blogs',
        offers: 'Offers',
        language: 'Language',
      },
      hero: {
        headline: 'Your partner for digital growth',
        sub: 'Effective social media management, modern web design, SEO, and performance ads — all in one place.',
        explore: 'Explore services',
        consult: 'Free consultation',
      },
      common: {
        readMore: 'Read more',
      },
    },
    ar: {
      nav: {
        start: 'الرئيسية',
        services: 'الخدمات',
        referral: 'الإحالة',
        contact: 'تواصل',
        blogs: 'المدونة',
        offers: 'العروض',
        language: 'اللغة',
      },
      hero: {
        headline: 'شريكك للنمو الرقمي',
        sub: 'إدارة فعّالة لوسائل التواصل، تصميم مواقع حديث، سيو وإعلانات أداء — كل ذلك في مكان واحد.',
        explore: 'اكتشف الخدمات',
        consult: 'استشارة مجانية',
      },
      common: {
        readMore: 'اقرأ المزيد',
      },
    },
  };
  
  // tiny helper
  export const t = (lang, path, fallback = '') => {
    const parts = path.split('.');
    let node = messages[lang] || messages.de;
    for (const p of parts) {
      node = node?.[p];
      if (node == null) break;
    }
    return (typeof node === 'string' ? node : fallback) || fallback;
  };
  