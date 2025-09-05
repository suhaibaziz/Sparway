'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const navItems = [
  { label: 'Start', href: '/', kind: 'page' },
  { label: 'Leistungen', href: '#leistungen', kind: 'section' },
  { label: 'Referral', href: '#referal', kind: 'section' },
  { label: 'Kontakt', href: '#contact', kind: 'section' },
  { label: 'Blogs', href: '/blogs', kind: 'page' },
  { label: 'Angebote', href: '/angebote', kind: 'page' },
];

const scrollToId = (hash) => {
  const id = hash.replace('#', '');
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onNavClick = useCallback((item) => (e) => {
    if (item.kind === 'section' && item.href.startsWith('#')) {
      e.preventDefault();
      scrollToId(item.href);
      setOpen(false);
      // اختياري: عدّل الهاش بالعنوان بدون قفزة
      if (history.replaceState) history.replaceState(null, '', item.href);
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative pt-6`}
    >
      <div className="absolute left-1/3 w-[15%] inset-0 gradient-10" />

      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center z-10`}>
        {/* Left: Search icon (placeholder) */}
        <button
          aria-label="Search"
          className="relative w-[24px] h-[24px] opacity-90 hover:opacity-100 transition"
        >
          <Image src="/search.svg" alt="search" fill sizes="24px" className="object-contain" />
        </button>

        {/* Center: Logo + Title */}
        <h1 className="font-extrabold text-[20px] sm:text-[24px] text-white leading-[30px] gap-2 flex justify-center items-center">
          <motion.div
            className="relative sm:w-[110px] w-[88px] sm:h-[110px] h-[88px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
          >
            <Image
              src="/log-circle.png"
              alt="logo"
              fill
              sizes="112px"
              className="object-contain max-w-[80%]"
              priority
            />
          </motion.div>
          Sparway Marketing
        </h1>

        {/* Right: Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              (item.kind === 'page' && item.href !== '/' && pathname?.startsWith(item.href)) ||
              (item.kind === 'page' && item.href === '/' && pathname === '/') ||
              false;

            const LinkEl =
              item.kind === 'section' ? (
                <a
                  href={item.href}
                  onClick={onNavClick(item)}
                  className={`px-3 py-2 rounded-lg text-sm transition ${
                    isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm transition ${
                    isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );

            return (
              <div key={item.href} className="relative">
                {LinkEl}
              </div>
            );
          })}
        </div>

        {/* Right: Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menu"
          className="relative w-[28px] h-[28px] md:hidden"
        >
          <Image src="/menu.svg" alt="menu" fill sizes="28px" className="object-contain" />
        </button>
      </div>

      {/* Mobile menu */}
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
                  (item.kind === 'page' && item.href === '/' && pathname === '/') ||
                  false;

                const LinkEl =
                  item.kind === 'section' ? (
                    <a
                      href={item.href}
                      onClick={onNavClick(item)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition ${
                        isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition ${
                        isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );

                return (
                  <div key={item.href} className="w-full">
                    {LinkEl}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
