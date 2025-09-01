'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { serviceOptions } from '../constants';

const GetStarted = () => {
  const [selected, setSelected] = useState({}); // no TS types here

  const toggle = (key) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  const handleContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.href = 'mailto:info@sparway.com?subject=Project%20Inquiry';
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        {/* Illustration */}
        <motion.div variants={planetVariants('left')} className={`${styles.flexCenter} flex-1`}>
          <div className="relative w-[90%] aspect-square rounded-full overflow-hidden">
            <Image
              src="/start.jpg"
              alt="Get Started"
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 90vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-[0.9] flex flex-col">
          <TypingText title="| So starten Sie bei uns durch" />
          <TitleText title={<>Mit nur wenigen Klicks loslegen</>} />

          {/* Groups */}
          <div className="mt-8 grid gap-6">
            {serviceOptions.map((group) => (
              <div key={group.category} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-baseline gap-2">
                  <h4 className="text-white font-semibold text-lg">{group.category}</h4>
                  {group.note ? <span className="text-white/60 text-sm">{group.note}</span> : null}
                </div>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {group.items.map((item) => {
                    const key = `${group.category}__${item}`;
                    const isOn = !!selected[key];
                    return (
                      <li key={key}>
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={isOn}
                            onChange={() => toggle(key)}
                            className="h-4 w-4 accent-emerald-400"
                            aria-label={item}
                          />
                          <span className="text-white/90 text-sm sm:text-base">{item}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="button"
              onClick={handleContact}
              className="rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-[#0b1220] font-semibold px-5 py-3 transition"
            >
              {selectedCount > 0 ? `Weiter mit ${selectedCount} Auswahl(en)` : 'Kontakt aufnehmen'}
            </button>
            <p className="text-white/70 text-sm">
              Was brauchen Sie? Wählen Sie oben aus und&nbsp;
              <span className="text-white">kontaktieren Sie uns</span>, um Ihr Business voranzubringen.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
