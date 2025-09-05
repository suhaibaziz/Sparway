'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import BusinessMap from '../components/BusinessMap';
import { normalizeLang, isRTL } from '../app/i18n/i18n';

const ui = {
  de: {
    typing: '| Empfehlungsvorteile',
    title: (
      <>
        Empfehle Geschäftsinhaber:innen in deinem Umfeld und lade sie ein, sich uns
        anzuschließen – erhalte <strong>40 % Rabatt</strong> auf alle unsere
        Dienstleistungen.
      </>
    ),
  },
  en: {
    typing: '| Referral benefits',
    title: (
      <>
        Refer business owners in your network and invite them to join us — get
        <strong> 40% off</strong> all our services.
      </>
    ),
  },
  ar: {
    typing: '| مزايا الإحالة',
    title: (
      <>
        رشّح أصحاب الأعمال من محيطك وادعهم للانضمام إلينا — واحصل على
        <strong> خصم 40%</strong> على جميع خدماتنا.
      </>
    ),
  },
};

const World = () => {
  const searchParams = useSearchParams();
  const lang = normalizeLang((searchParams.get('lang') || 'de').toLowerCase());
  const rtl = isRTL(lang);
  const t = ui[lang] ?? ui.de;

  return (
    <section
      className={`${styles.paddings} relative z-10 overflow-visible`}
      dir={rtl ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <motion.div
        id="referal" // keep your anchor id as-is
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} w-full min-w-0 mx-auto flex flex-col`}
      >
        <TypingText title={t.typing} textStyles="text-center" />
        <TitleText title={t.title} textStyles="text-center" />

        <div className="mt-10 w-full min-w-0 overflow-visible">
          <BusinessMap lang={lang} rtl={rtl} />
        </div>
      </motion.div>
    </section>
  );
};

export default World;
