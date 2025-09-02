'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const prefersReduced = useReducedMotion();

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className={`${styles.yPaddings} max-lg:pl-6 max-lg:pr-6 pl-36 pr-36 [content-visibility:auto] [contain-intrinsic-size:900px]`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        {/* Headline & Subheading */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h1
            variants={textVariant(0.8)}
            className="text-4xl sm:text-6xl font-extrabold text-white leading-tight"
          >
            Ihr Partner für digitales Wachstum
          </motion.h1>

          <motion.p
            variants={textVariant(1.05)}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
          >
            Effektives Social Media Management, modernes Webdesign, SEO und zielgerichtete
            Performance-Ads – alles aus einer Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textVariant(1.15)}
            className="mt-8 flex justify-center flex-wrap items-center gap-3"
          >
            <button
              onClick={() => smoothScroll('services')}
              className="rounded-2xl px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-yellow-500 to-green-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Leistungen entdecken"
            >
              Leistungen entdecken
            </button>

            <Link
              href="/termin"
              className="rounded-2xl px-6 py-3 text-base font-semibold text-white/90 border border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Kostenlose Beratung"
            >
              Kostenlose Beratung
            </Link>
          </motion.div>
        </div>

        {/* Hero Visual mit zwei Bildern */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[2px]"
        >
          <div className="absolute w-full h-[68px] hero-gradient rounded-tl-[140px] rounded-tr-[140px] z-[0] sm:-top-[35px] max-lg:-top-[37px]" />

          {/* Flex-Container für Bilder */}
{/* Flex-Container für Bilder */}
<div className="relative w-full h-[220px] sm:h-[600px] rounded-tl-[140px] z-10 flex flex-row items-stretch justify-center gap-4">
  {/* hero.png */}
  <div className="relative w-1/2 h-full">
    <Image
      src="/hero.png"
      alt="Digitales Marketing – Illustration"
      fill
      priority
      placeholder="blur"
      blurDataURL="/hero-blur.png"
      // sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px"
      className="object-contain object-center"
    />
  </div>

  {/* 123.webp / avif */}
  <div className="relative w-1/2 h-full">
    <Image
      src="/craiyon_124738_image.webp"
      alt="Zusätzliches Bild"
      fill
      loading="lazy"
      className="object-contain object-center rounded-xl"
      // sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 600px"
    />
  </div>
</div>



          <div className="absolute w-full h-[60px] hero-gradient rounded-bl-[140px] rounded-br-[140px] z-[0] sm:-bottom-[20px] -bottom-[10px]" />

          {/* Explore-Stempel */}
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.div
              className="[will-change:transform]"
              animate={prefersReduced ? {} : { rotate: 360 }}
              transition={prefersReduced ? {} : { repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              <Image
                onClick={() => smoothScroll('explore')}
                src="/stamp.png"
                alt="Zum Erkunden scrollen"
                width={155}
                height={155}
                loading="lazy"
                sizes="(max-width: 640px) 80px, 105px"
                className="cursor-pointer max-[680px]:max-w-[80px]"
                role="button"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
