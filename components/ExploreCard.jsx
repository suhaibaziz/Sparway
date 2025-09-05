'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { TiZoom } from 'react-icons/ti';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const labels = {
  de: {
    explore: 'Mehr entdecken',
    open: (title) => `„${title}“ öffnen`,
    details: (title) => `${title} – Details ansehen`,
  },
  en: {
    explore: 'Explore more',
    open: (title) => `Open “${title}”`,
    details: (title) => `${title} – View details`,
  },
  ar: {
    explore: 'استكشف المزيد',
    open: (title) => `افتح «${title}»`,
    details: (title) => `${title} – عرض التفاصيل`,
  },
};

function slugify(s) {
  return s.toLowerCase().replace(/&/g, 'und').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  href,      // from constants (already with ?lang via withLang)
  lang: langProp,
}) => {
  const router = useRouter();
  const prefersReduced = useReducedMotion();
  const searchParams = useSearchParams();
  const langRaw = langProp || searchParams.get('lang') || 'de';
  const lang = ['de', 'en', 'ar'].includes(langRaw) ? langRaw : 'de';
  const t = labels[lang];
  const isRTL = lang === 'ar';

  // Use provided href or safe fallback
  const computedHref = href || `/leistungen/${slugify(title)}?lang=${lang}`;

  const go = () => {
    if (!computedHref) return;
    router.push(computedHref);
  };

  const onCardClick = () => {
    if (active === id) {
      // already active → navigate now
      go();
    } else {
      // activate first
      handleClick?.(id);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onCardClick();
    }
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, prefersReduced ? 0.4 : 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px]
         h-auto aspect-[3/4] lg:h-[640px]
         transition-[flex] duration-[700ms] ease-out-flex cursor-pointer
         [content-visibility:auto] [contain-intrinsic-size:640px]`}
      onClick={onCardClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={active === id}
      aria-label={t.open(title)}
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
        priority={index === 0}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 rounded-[24px] object-cover"
      />

      {active !== id ? (
        <div className="pointer-events-none absolute bottom-0 h-1/3 w-full p-2 bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
          <h3 className="absolute z-0 font-semibold sm:text-[26px] text-[18px] text-white lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 w-full p-8 bg-[rgba(0,0,0,0.5)] rounded-b-[24px] z-10">
          <div className={`${styles.flexCenter} mb-[16px] h-[60px] w-[60px] glassmorphism rounded-[12px]`}>
            {/* optional secondary link (zoom button) */}
            <Link
              href={computedHref}
              aria-label={t.details(title)}
              onClick={(e) => e.stopPropagation()}
              className="block rounded-xl p-2 bg-black/50 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <TiZoom className="h-6 w-6 text-white" />
            </Link>
          </div>

          <p className={`font-normal text-[16px] leading-[20.16px] text-white uppercase ${isRTL ? 'text-right' : ''}`}>
            {t.explore}
          </p>
          <h2 className={`mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white ${isRTL ? 'text-right' : ''}`}>
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
