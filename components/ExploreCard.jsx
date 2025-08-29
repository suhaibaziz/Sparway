'use client';


import Image from 'next/image';
import { TiZoom } from 'react-icons/ti';
import { fadeIn } from '../utils/motion';
import { motion, useReducedMotion } from 'framer-motion';
import styles from '../styles';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  const prefersReduced = useReducedMotion();

  const onActivate = () => handleClick?.(id);

  const onKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
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
        priority={index === 0}           // أول صورة بس بتكون أولوية
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 rounded-[24px] object-cover"
      />

      {/* Overlay النصوص */}
      {active !== id ? (
        <div className="pointer-events-none h-1/3 absolute bottom-0 p-2 w-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        </div>
      ) : (
        <div className="pointer-events-none absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px]`}>
            {/* TiZoom ما بده alt — هو آيقونة SVG */}
            <TiZoom className="w-1/2 h-1/2" aria-hidden="true" />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">Explore more</p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
