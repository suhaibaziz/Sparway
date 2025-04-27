'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Sparway"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold"> Sparway </span> Bei der Sparway GmbH sind wir mehr als nur eine Agentur für digitales Marketing und Webdesign – wir sind Ihr strategischer Partner in der digitalen Welt. Gegründet aus einer Leidenschaft für Innovation und dem Streben nach Exzellenz, ist es unsere Mission, Unternehmen jeder Größe mit maßgeschneiderten digitalen Lösungen zu stärken, die Wachstum fördern, die Sichtbarkeit erhöhen und dauerhafte Kundenbeziehungen schaffen. <br/> Lassen Sie uns gemeinsam mit <span className="font-extrabold">Sparway</span> die Welt der digitalen Möglichkeiten entdecken – scrollen Sie nach unten und tauchen Sie ein!

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
