'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 [content-visibility:auto] [contain-intrinsic-size:900px]`} 
      // content-visibility بيمنع الرسم لحد ما العنصر يقرب من الشاشة
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} 
        // once:true بيمنع إعادة تشغيل الأنيميشن كل ما المستخدم لفوق/لتحت
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(0.8)} className={styles.heroHeading}>
            Sparway
          </motion.h1>

          <motion.div
            variants={textVariant(0.95)}
            className="flex flex-row items-center justify-center"
          >
            <h1 className={styles.heroHeading}>Mar</h1>
            <h1 className={styles.heroHeading}>K</h1>
            <h1 className={styles.heroHeading}>eting</h1>
          </motion.div>
        </div> 

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
        >
          {/* الأشرطة التزيينية بدون blur/backdrop لتخفيف الحمل */}
          <div className="absolute w-full h-[60px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />

          {/* صورة الهيرو — Next Image مع تحجيم وpriority للـLCP */}
          <div className="relative w-full sm:h-[600px] h-[450px] rounded-tl-[140px] z-10">
            <Image
              src="/hero.png"
              alt="cover"
              fill
              priority
              placeholder="blur"
              blurDataURL="/hero-blur.png" // حط نسخة 20–40px مضغوطة بالـpublic
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              className="object-contain"
            />
          </div>

          <div className="absolute w-full h-[60px] hero-gradient rounded-bl-[140px] z-[0] sm:-bottom-[20px] -bottom-[10px]" />

{/* شِلّ الـ <a href="#explore"> عن الـdiv الكبير */}
<div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px] pointer-events-none">
  {/* الـstamp يتحرّك، لكن ما عليه كليك */}
  <motion.div
    className="[will-change:transform]"
    animate={prefersReduced ? {} : { rotate: 360 }}
    transition={prefersReduced ? {} : { repeat: Infinity, duration: 10, ease: 'linear' }}
  >
<Image
  onClick={() => {
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }}
  src="/stamp.png"
  alt="stamp"
  width={155}
  height={155}
  loading="lazy"
  sizes="(max-width: 640px) 100px, 155px"
  className="cursor-pointer"
  role="button"
/>

  </motion.div>

  {/* زر “Explore” فقط هو القابل للنقر */}

</div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
