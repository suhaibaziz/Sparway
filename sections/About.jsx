'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const prefersReduced = useReducedMotion();

  const handleScrollDown = () => {
    const el = document.getElementById('explore'); // غيّرها لو الاسم مختلف
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className={`${styles.paddings} relative z-10 [content-visibility:auto] [contain-intrinsic-size:800px]`}
    >
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}  // ما نعيد الأنيميشن كل مرة
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Sparway" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.15, 0.8)}
          className="mt-[8px] font-normal sm:text-[28px] text-[18px] leading-relaxed text-center text-secondary-white"
        >
          <span className="font-extrabold">Sparway</span> Bei der Sparway GmbH sind wir mehr als nur eine Agentur für digitales Marketing und Webdesign – wir sind Ihr strategischer Partner in der digitalen Welt. Gegründet aus einer Leidenschaft für Innovation und dem Streben nach Exzellenz, ist es unsere Mission, Unternehmen jeder Größe mit maßgeschneiderten digitalen Lösungen zu stärken, die Wachstum fördern, die Sichtbarkeit erhöhen und dauerhafte Kundenbeziehungen schaffen.
          <br />
          Lassen Sie uns gemeinsam mit <span className="font-extrabold">Sparway</span> die Welt der digitalen Möglichkeiten entdecken – scrollen Sie nach unten und tauchen Sie ein!
        </motion.p>

        {/* السهم: Image + onClick للسكرول */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.25, 0.8)}
          className="mt-[28px]"
        >
          <Image
            src="/arrow-down.svg"
            alt="Scroll to explore"
            width={18}
            height={28}
            onClick={handleScrollDown}
            className="w-[18px] h-[28px] cursor-pointer select-none"
            role="button"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
