'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute left-1/3 w-[15%] inset-0 gradient-10" />

    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center z-10`}
    >
      {/* Search icon */}
      <div className="relative w-[24px] h-[24px]">
        <Image
          src="/search.svg"
          alt="search"
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>

      {/* Logo + Title */}
      <h2 className="font-extrabold text-[28px] text-white leading-[30px] gap-2 flex justify-center items-center">
        <motion.div
          className="relative sm:w-[110px] w-[110px] sm:h-[110px] h-[110px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        >
          <Image
            src="/log-circle.png"
            alt="logo"
            fill
            sizes="112px"
            className="object-contain max-w-[80%]"
            priority
          />
        </motion.div>
        Sparway Marketing
      </h2>

      {/* Menu icon */}
      <div className="relative w-[24px] h-[24px]">
        <Image
          src="/menu.svg"
          alt="menu"
          fill
          sizes="24px"
          className="object-contain"
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
