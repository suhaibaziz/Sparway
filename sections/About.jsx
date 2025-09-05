'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useSearchParams } from 'next/navigation';

// قاموس النصوص
const dict = {
  de: {
    title: '| Über Sparway Marketing',
    slogan:
      '„Wir helfen Unternehmen zu wachsen, indem wir ihre digitale Präsenz managen, Kosten optimieren und erfolgreiche Marketingkampagnen umsetzen.“',
    body: `Bei der Sparway Marketing GmbH sind wir mehr als nur eine Agentur für digitales Marketing und Webdesign – wir sind Ihr strategischer Partner in der digitalen Welt. Gegründet aus einer Leidenschaft für Innovation und dem Streben nach Exzellenz, ist es unsere Mission, Unternehmen jeder Größe mit maßgeschneiderten digitalen Lösungen zu stärken, die Wachstum fördern, die Sichtbarkeit erhöhen und dauerhafte Kundenbeziehungen schaffen.
      Lassen Sie uns gemeinsam mit Sparway die Welt der digitalen Möglichkeiten entdecken – scrollen Sie nach unten und tauchen Sie ein!`,
    scrollAlt: 'Nach unten scrollen',
  },
  en: {
    title: '| About Sparway Marketing',
    slogan:
      '“We help companies grow by managing their digital presence, optimizing costs, and running successful marketing campaigns.”',
    body: `At Sparway GmbH, we are more than just a digital marketing and web design agency – we are your strategic partner in the digital world. Founded from a passion for innovation and a pursuit of excellence, our mission is to empower businesses of all sizes with tailor-made digital solutions that drive growth, increase visibility, and build lasting customer relationships.
      Let’s explore the world of digital opportunities together with Sparway Marketing – scroll down and dive in!`,
    scrollAlt: 'Scroll to explore',
  },
  ar: {
    title: '| عن Sparway Marketing',
    slogan:
      '« نساعد الشركات على النمو من خلال إدارة حضورها الرقمي، تحسين التكاليف، وتنفيذ حملات تسويقية ناجحة. »',
    body: `في شركة Sparway Marketing نحن أكثر من مجرد وكالة للتسويق الرقمي وتصميم المواقع – نحن شريكك الاستراتيجي في العالم الرقمي. تأسست من شغف بالابتكار والسعي نحو التميز، ورسالتنا هي تمكين الشركات على اختلاف أحجامها بحلول رقمية مخصّصة تعزز النمو، تزيد من الظهور، وتبني علاقات دائمة مع العملاء.
      دعنا نكتشف معًا عالم الفرص الرقمية مع Sparway Marketing – انزل للأسفل وابدأ رحلتك!`,
    scrollAlt: 'انزل للأسفل للاستكشاف',
  },
};

const About = () => {
  const prefersReduced = useReducedMotion();
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'de';
  const t = dict[lang] || dict.de;
  const isRTL = lang === 'ar';

  const handleScrollDown = () => {
    const el = document.getElementById('explore');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${styles.paddings} relative z-10 [content-visibility:auto] [contain-intrinsic-size:800px]`}
    >
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title={t.title} textStyles="text-center" />

        {/* الجملة التسويقية */}
        <motion.p
          variants={fadeIn('up', 'tween', 0.1, 0.8)}
          className="mt-[16px] font-extrabold sm:text-[30px] text-[20px] text-center text-white max-w-[900px]"
        >
          {t.slogan}
        </motion.p>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 0.8)}
          className="mt-[24px] font-normal sm:text-[28px] text-[18px] leading-relaxed text-center text-secondary-white whitespace-pre-line"
        >
          {t.body}
        </motion.p>

        {/* السهم للنزول */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 0.8)}
          className="mt-[28px]"
        >
          <Image
            src="/arrow-down.svg"
            alt={t.scrollAlt}
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
