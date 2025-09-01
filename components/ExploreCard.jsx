'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TiZoom } from 'react-icons/ti';
import { fadeIn } from '../utils/motion';
import { motion, useReducedMotion } from 'framer-motion';
import styles from '../styles';

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'und')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, href }) => {
  const prefersReduced = useReducedMotion();
  const onActivate = () => handleClick?.(id);
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
    }
  };

  // رابط افتراضي إذا ما تم تمرير href
  const link = href || `/leistungen/${slugify(title)}`;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, prefersReduced ? 0.4 : 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px]
         h-auto aspect-[3/4] lg:h-[640px]
         transition-[flex] duration-[700ms] ease-out-flex cursor-pointer
         [content-visibility:auto] [contain-intrinsic-size:640px]`}
      onClick={onActivate}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={active === id}
      aria-label={`Open ${title}`}
    >
      {/* الخلفية */}
      <Image
        src={imgUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
        priority={index === 0}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 rounded-[24px] object-cover"
      />

      {/* زر العدسة دائمًا أعلى اليمين */}
      {/* <div className="absolute top-3 right-3 z-10">
        <Link
          href={link}
          aria-label={`${title} – Details ansehen`}
          onClick={(e) => e.stopPropagation()}
          className="block rounded-xl p-2 bg-black/50 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <TiZoom className="w-6 h-6 text-white" />
        </Link>
      </div> */}

      {/* Overlay النصوص */}
      {active !== id ? (
        <div className="pointer-events-none h-1/3 absolute bottom-0 p-2 w-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px]`}>
            {/* الأيقونة العلوية أصبحت قابلة للنقر؛ هذه للزينة فقط */}
            <Link
          href={link}
          aria-label={`${title} – Details ansehen`}
          onClick={(e) => e.stopPropagation()}
          className="block rounded-xl p-2 bg-black/50 backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <TiZoom className="w-6 h-6 text-white" />
        </Link>
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">Explore more</p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
