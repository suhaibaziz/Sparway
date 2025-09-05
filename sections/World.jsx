'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from "next/image";
import BusinessMap from '../components/BusinessMap';


const World = () => (
  <section className={`${styles.paddings} relative z-10 overflow-visible`}>
    <motion.div
    id='referal'
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} w-full min-w-0 mx-auto flex flex-col`}
    >
      <TypingText title="| Referal benifets" textStyles="text-center" />
      <TitleText
        title={(
          <>
          Empfehle Geschäftsinhaber in deinem Umfeld und lade sie ein, sich uns anzuschließen – erhalte 40 % Rabatt auf alle unsere Dienstleistungen.
        </>
        
        )}
        textStyles="text-center"
      />

{/* <motion.div
  variants={fadeIn("up", "tween", 0.3, 1)}
  className="relative mt-[69px] flex w-full h-[550px]"
>

  <Image
    src="/designs/GermanyMap.webp"
    alt="map"
    fill
    className="object-contain"
    priority
  />


  <div className="absolute top-[32%] left-[50%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
    <Image src="/designs/clothes.png" alt="Clothes shop" fill className="object-contain" />
  </div>

  <div className="absolute sm:top-10 bottom-40 left-[30%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
    <Image src="/designs/doctor.png" alt="doctor" fill className="object-contain" />
  </div>

  <div className="hidden lg:block absolute bottom-20 right-20 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
    <Image src="/designs/taxi.png" alt="Takxi" fill className="object-contain" />
  </div>

  <div className="hidden lg:block absolute bottom-[20%] left-[15%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
    <Image src="/designs/supermarkt.png" alt="Supermarket" fill className="object-contain" />
  </div>

  <div className="absolute top-0 right-[22%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
    <Image src="/designs/engineers.png" alt="Engineering" fill className="object-contain" />
  </div>
</motion.div> */}
<div className="mt-10 w-full min-w-0 overflow-visible">
<BusinessMap/>
</div>
    </motion.div>
  </section>
);

export default World;
