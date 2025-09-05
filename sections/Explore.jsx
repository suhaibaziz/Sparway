'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { getExploreWorlds } from '../constants';
import { isRTL } from '../app/i18n/i18n';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

// i18n dictionary
const dict = {
  de: {
    typing: '| unsere digitale Welt',
    title: <>Wählen Sie die Branche,<br className="md:block hidden" />die Sie mit uns entdecken möchten.</>,
  },
  en: {
    typing: '| our digital world',
    title: <>Choose the industry<br className="md:block hidden" />you want to explore with us.</>,
  },
  ar: {
    typing: '| عالمنا الرقمي',
    title: <>اختر المجال <br className="md:block hidden" />الذي تريد استكشافه معنا.</>,
  },
};

const Explore = () => {
  const searchParams = useSearchParams();
  const lang = (searchParams.get('lang') || 'de').toLowerCase();
  const t = dict[lang] ?? dict.de; // <-- define t with fallback

  const worlds = getExploreWorlds(lang) || [];
  const [active, setActive] = useState('world-1');

  // If you want the first world to be active by default:
  useEffect(() => {
    if (worlds.length > 0) setActive((prev) => (prev && prev !== 'world-6' ? prev : worlds[0].id));
  }, [worlds]);

  const rtl = isRTL(lang);

  return (
    <section id="leistungen" className='p-4' >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.typing} textStyles="text-center" />
        <TitleText title={t.title} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {worlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}           // title already localized + href with ?lang
              index={index}
              active={active}
              handleClick={setActive} // ExploreCard should call handleClick(world.id)
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
