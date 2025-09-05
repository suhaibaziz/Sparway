// components/Navbar.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { t } from '../app/i18n/translations';

const makeNavItems = (lang) => ([
  { label: t(lang, 'nav.start', 'Start'),     href: '/',          kind: 'page' },
  { label: t(lang, 'nav.services', 'Leistungen'), href: '#leistungen', kind: 'section' },
  { label: t(lang, 'nav.referral', 'Referral'),   href: '#referal',    kind: 'section' },
  { label: t(lang, 'nav.contact', 'Kontakt'),     href: '#contact',    kind: 'section' },
  { label: t(lang, 'nav.blogs', 'Blogs'),         href: '/blogs',   kind: 'page' },
  { label: t(lang, 'nav.offers', 'Angebote'),     href: '/angebote',kind: 'page' },
]);

const languages = [
  { code: 'de', name: 'Deutsch', flag: '/flags/de.png' },
  { code: 'en', name: 'English', flag: '/flags/en.png' },
  { code: 'ar', name: 'العربية', flag: '/flags/ar.png' },
];

const scrollToId = (hash) => {
  const id = hash.replace('#', '');
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const setLangCookie = (code) => {
  if (typeof document === 'undefined') return;
  document.cookie = `site_lang=${code}; path=/; max-age=31536000; SameSite=Lax`;
};

const replaceQueryParam = (url, key, value) => {
  const u = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'http://dummy');
  if (value) u.searchParams.set(key, value);
  else u.searchParams.delete(key);
  return u.pathname + (u.search ? `?${u.searchParams.toString()}` : '') + u.hash;
};

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLang = useMemo(() => searchParams.get('lang') || 'de', [searchParams]);
  const navItems = useMemo(() => makeNavItems(currentLang), [currentLang]);

  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  useEffect(() => { setLangCookie(currentLang); }, [currentLang]);

  const onNavClick = useCallback((item) => (e) => {
    if (item.kind === 'section' && item.href.startsWith('#')) {
      e.preventDefault();
      scrollToId(item.href);
      setOpen(false);
      if (typeof history !== 'undefined' && history.replaceState) {
        history.replaceState(null, '', item.href);
      }
    } else {
      setOpen(false);
    }
  }, []);

  const changeLang = (code) => {
    setLangCookie(code);
    const newUrl = replaceQueryParam(window.location.href, 'lang', code);
    router.replace(newUrl);
    setOpenLang(false);
    setOpen(false);
  };

  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative pt-6`}>
      <div className="absolute left-1/3 w-[15%] inset-0 gradient-10" />

      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center z-10`}>
        {/* Search placeholder */}
        <button type="button" aria-label="Search" className="relative w-[24px] h-[24px] text-white/80 hover:text-white transition" title="Search">
          <Image src="/search.svg" alt="search" fill sizes="24px" className="object-contain" />
        </button>

        {/* Logo + Title */}
        <h1 className="font-extrabold text-[20px] sm:text-[24px] text-white leading-[30px] gap-2 flex justify-center items-center">
          <motion.div className="relative sm:w-[110px] w-[88px] sm:h-[110px] h-[88px]" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}>
            <Image src="/log-circle.png" alt="logo" fill sizes="112px" className="object-contain max-w-[80%]" priority />
          </motion.div>
          Sparway Marketing
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              (item.kind === 'page' && item.href !== '/' && pathname?.startsWith(item.href)) ||
              (item.kind === 'page' && item.href === '/' && pathname === '/') || false;

            const LinkEl = item.kind === 'section' ? (
              <a
                href={item.href}
                onClick={onNavClick(item)}
                className={`px-3 py-2 rounded-lg text-sm transition ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={replaceQueryParam(item.href, 'lang', currentLang)}
                className={`px-3 py-2 rounded-lg text-sm transition ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'}`}
              >
                {item.label}
              </Link>
            );

            return <div key={item.href} className="relative">{LinkEl}</div>;
          })}

          {/* Language switcher */}
          <div className="relative ml-2">
            <button
              type="button"
              onClick={() => setOpenLang(v => !v)}
              aria-expanded={openLang}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white/10 hover:bg-white/15 text-white/90"
              title={t(currentLang, 'nav.language', 'Language')}
            >
              <span className="relative w-5 h-5">
                <Image
                  src={languages.find(l => l.code === currentLang)?.flag || '/flags/de.svg'}
                  alt={currentLang.toUpperCase()}
                  fill sizes="20px"
                  className="object-contain rounded-sm"
                />
              </span>
              {currentLang.toUpperCase()}
            </button>

            <AnimatePresence>
              {openLang && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#0b1220] p-1 shadow-lg z-20"
                >
                  {languages.map(lng => {
                    const active = lng.code === currentLang;
                    return (
                      <button
                        type="button"
                        key={lng.code}
                        onClick={() => changeLang(lng.code)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${active ? 'bg-green-600 text-white' : 'text-white hover:bg-white/10'}`}
                      >
                        <span className="relative w-5 h-5">
                          <Image src={lng.flag} alt={lng.name} fill sizes="20px" className="object-contain rounded-sm" />
                        </span>
                        {lng.name}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu button */}
        <button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" className="relative w-[28px] h-[28px] md:hidden">
          <Image src="/menu.svg" alt="menu" fill sizes="28px" className="object-contain" />
        </button>
      </div>

      {/* Mobile menu (labels already localized via navItems) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`${styles.innerWidth} mx-auto md:hidden mt-4`}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              {navItems.map((item) => {
                const isActive =
                  (item.kind === 'page' && item.href !== '/' && pathname?.startsWith(item.href)) ||
                  (item.kind === 'page' && item.href === '/' && pathname === '/') || false;

                const LinkEl = item.kind === 'section' ? (
                  <a
                    href={item.href}
                    onClick={onNavClick(item)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition ${isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={replaceQueryParam(item.href, 'lang', currentLang)}
                    onClick={() => setOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition ${isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'}`}
                  >
                    {item.label}
                  </Link>
                );

                return <div key={item.href} className="w-full">{LinkEl}</div>;
              })}

              {/* Mobile language */}
              <div className="mt-2 p-2 rounded-xl bg-white/80 border border-white/10">
                <div className="text-xs text-white/60 px-2 pb-1">{t(currentLang, 'nav.language', 'Language')}</div>
                <div className="flex gap-2">
                  {languages.map((lng) => {
                    const active = lng.code === currentLang;
                    return (
                      <button
                        type="button"
                        key={lng.code}
                        onClick={() => changeLang(lng.code)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${active ? 'bg-white/15 text-white' : 'text-white'}`}
                      >
                        <span className="relative text-white w-5 h-5">
                          <Image src={lng.flag} alt={lng.name} fill sizes="20px" className="object-contain rounded-sm" />
                        </span>
                        {lng.code.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
