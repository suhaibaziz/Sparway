'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

import styles from '../styles';
import { getInsights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { normalizeLang, isRTL } from '../app/i18n/i18n';

// tiny UI copy per lang (headings)
const ui = {
  de: { typing: '| Einblicke', title: 'Einblicke über Sparway Marketing' },
  en: { typing: '| Insight',   title: 'Insights about Sparway Marketing' },
  ar: { typing: '| لمحات',     title: 'لمحات عن Sparway Marketing' },
};

const Insights = () => {
  const searchParams = useSearchParams();
  const lang = normalizeLang((searchParams.get('lang') || 'de').toLowerCase());
  const rtl = isRTL(lang);
  const t = ui[lang] ?? ui.de;

  const items = getInsights(lang) || []; // pulls localized title/subtitle from constants

  return (
    <section className={`${styles.paddings} relative z-10`} id="insights" dir={rtl ? 'rtl' : 'ltr'} lang={lang}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.typing} textStyles="text-center" />
        <TitleText title={t.title} textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {items.map((insight, i) => (
            <InsightCard
              key={insight.title ?? `Insight-${i + 1}`}
              {...insight}     // has imgUrl, title, subtitle (already localized)
              index={i + 1}
              lang={lang}      // pass down if the card itself needs it
              rtl={rtl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
