'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Sparway
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}> Gr</h1>
         
          <div className="flex items-end gap-0 mt-">
  {/* E (shaped div) */}
  <div className="relative w-[40px] h-[80px]">
    {/* Vertical column for the E letter */}
    <div className="absolute left-0 top-0 w-[16px] h-full bg-white" />
    {/* Top bar */}
    <div className="absolute top-0 left-[16px] w-[120px] h-[16px] bg-white" />
    {/* Middle bar */}
    <div className="absolute top-1/2 left-[16px] w-[50px] h-[16px] bg-white -translate-y-1/2" />
    {/* Bottom bar */}
    <div className="absolute bottom-0 left-[16px] w-[120px] h-[16px] bg-white" />
  </div>

  {/* A (outlined with inner cut-out) */}
  <div className="relative w-[40px] h-[80px]">
    {/* Outer triangle for A (white outline) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                    border-l-[20px] border-r-[20px] border-b-[80px]
                    border-l-transparent border-r-transparent border-b-white" />
    {/* Inner triangle cut-out (shows background color, e.g. #1a232e) */}
    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 
                    border-l-[16px] border-r-[16px] border-b-[64px]
                    border-l-transparent border-r-transparent border-b-[#1a232e]" />
  </div>

  {/* T (two bars) */}
  <div className="relative w-[100px] h-[80px]">
    {/* Horizontal bar */}
    <div className="absolute top-0 left-0 w-full h-[16px] bg-white" />
    {/* Vertical bar */}
    <div className="absolute top-0 left-1/2 w-[16px] h-full bg-white -translate-x-1/2" />
  </div>
</div>

  


          <h1 className={styles.heroHeading}> Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[60px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
  src="/hero.png"
  alt="cover"
  className="w-full sm:h-[600px] h-[450px] object-contain  rounded-tl-[140px] z-10 relative"
/>
<div className="absolute w-full h-[60px] hero-gradient rounded-bl-[140px] z-[0] sm:-bottom-[20px] -bottom-[10px]" />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
