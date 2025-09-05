'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

import { footerVariants } from '../utils/motion';
import styles from '../styles';

// i18n helpers
import { normalizeLang, isRTL, withLang } from '../app/i18n/i18n';

const ui = {
  de: {
    brand: 'Sparway Marketing',
    desc:
      'Tauche ein in die nächste Generation der digitalen Unternehmenswelt. Sparway Marketing verbindet dich mit passenden Kund:innen – für grenzenlose Erfahrungen.',
    company: 'Unternehmen',
    about: 'Über uns',
    careers: 'Karriere',
    blog: 'Blog',
    contact: 'Kontakt',
    resources: 'Ressourcen',
    faq: 'FAQ',
    touch: 'Kontakt aufnehmen',
    email: 'E-Mail',
    phone: 'Telefon',
    newsletterPH: 'Deine E-Mail',
    subscribe: 'Abonnieren',
    rights: 'Alle Rechte vorbehalten.',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    cookie: 'Cookie-Richtlinie',
    socialLabel: (name) => `${name} öffnen`,
  },
  en: {
    brand: 'Sparway Marketing',
    desc:
      'Dive into the next generation of digital business. Sparway Marketing connects you with the right customers—where limitless experiences await.',
    company: 'Company',
    about: 'About Us',
    careers: 'Careers',
    blog: 'Blog',
    contact: 'Contact',
    resources: 'Resources',
    faq: 'FAQ',
    touch: 'Get in Touch',
    email: 'Email',
    phone: 'Phone',
    newsletterPH: 'Your email',
    subscribe: 'Subscribe',
    rights: 'All rights reserved.',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
    socialLabel: (name) => `Open ${name}`,
  },
  ar: {
    brand: 'Sparway Marketing',
    desc:
      'ادخل إلى الجيل الجديد من الأعمال الرقمية. تربطك Sparway Marketing بالعملاء المناسبين حيث تنتظرك تجارب بلا حدود.',
    company: 'الشركة',
    about: 'من نحن',
    careers: 'الوظائف',
    blog: 'المدونة',
    contact: 'تواصل معنا',
    resources: 'الموارد',
    faq: 'الأسئلة الشائعة',
    touch: 'تواصل معنا',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    newsletterPH: 'بريدك الإلكتروني',
    subscribe: 'اشترك',
    rights: 'جميع الحقوق محفوظة.',
    terms: 'شروط الخدمة',
    privacy: 'سياسة الخصوصية',
    cookie: 'سياسة ملفات تعريف الارتباط',
    socialLabel: (name) => `فتح ${name}`,
  },
};

const Footer = () => {
  const searchParams = useSearchParams();
  const lang = normalizeLang((searchParams.get('lang') || 'de').toLowerCase());
  const rtl = isRTL(lang);
  const t = ui[lang] ?? ui.de;

  const yearRange = `© 2024 – ${new Date().getFullYear()} ${t.brand}. ${t.rights}`;

  // internal links must preserve ?lang
  const L = (href) => withLang(href, lang);

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} pt-16 pb-8 relative bg-gray-900 text-white`}
      dir={rtl ? 'rtl' : 'ltr'}
      lang={lang}
    >
      {/* optional gradient overlay */}
      <div className="absolute inset-0 footer-gradient opacity-20 pointer-events-none" />

      <div className={`${styles.innerWidth} mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10`}>
        {/* Brand + Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{t.brand}</h3>
          <p className="text-sm opacity-75">{t.desc}</p>

          <div className={`flex ${rtl ? 'space-x-reverse' : ''} space-x-4 mt-2`}>
            <a
              href="https://www.facebook.com/share/1CWtnEy4Ks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label={t.socialLabel('Facebook')}
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/sparway_marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label={t.socialLabel('Instagram')}
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/004917666623360"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label={t.socialLabel('WhatsApp')}
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@sparway_marketing_gmbh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
              aria-label={t.socialLabel('TikTok')}
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{t.company}</h4>
          <ul className="space-y-2 text-sm opacity-75">
            <li><a href={L('#insights')} className="hover:opacity-90">{t.about}</a></li>
            <li><a href={L('/careers')} className="hover:opacity-90">{t.careers}</a></li>
            <li><a href={L('/blogs')} className="hover:opacity-90">{t.blog}</a></li>
            <li><a href={L('#contact')} className="hover:opacity-90">{t.contact}</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-3">{t.resources}</h4>
          <ul className="space-y-2 text-sm opacity-75">
            <li><a href={L('/faq')} className="hover:opacity-90">{t.faq}</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">{t.touch}</h4>
          <p className="text-sm opacity-75">
            <strong>{t.email}:</strong>{' '}
            <a href="mailto:marketing@Sparway.de" className="hover:opacity-90">marketing@Sparway.de</a><br/>
            <strong>{t.phone}:</strong>{' '}
            <a href="tel:+4917666623360" className="hover:opacity-90">+49 176 66623360</a>
          </p>
          <form className={`flex flex-col sm:flex-row gap-2 ${rtl ? 'sm:flex-row-reverse' : ''}`} onSubmit={(e)=>e.preventDefault()}>
            <input
              type="email"
              placeholder={t.newsletterPH}
              className="flex-grow px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              dir="ltr"
              inputMode="email"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {t.subscribe}
            </button>
          </form>
        </div>
      </div>

      {/* bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 z-10">
        <div className={`flex flex-col md:flex-row items-center justify-between text-sm opacity-75 ${rtl ? 'md:flex-row-reverse' : ''}`}>
          <span className={`${rtl ? 'text-right' : ''}`}>{yearRange}</span>
          <div className={`flex flex-wrap gap-4 mt-4 md:mt-0 ${rtl ? 'flex-row-reverse' : ''}`}>
            <a href={L('/terms')} className="hover:opacity-90">{t.terms}</a>
            <a href={L('/privacy')} className="hover:opacity-90">{t.privacy}</a>
            <a href={L('/cookie')} className="hover:opacity-90">{t.cookie}</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
