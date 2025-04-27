'use client';

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
    <div className="absolute left-1/3 w-[15%] inset-0 gradient-10 "  />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center z-10`}>
      <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />

      <h2 className="font-extrabold test-[28px] text-white leading-[30px] gap-2 flex justify-center items-center">
        <motion.img
              src="/log-circle.png"
              alt="logo"
              className="sm:w-[110px] w-[110px] sm:h-[110px] h-[110px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
            />Sparway Marketing 
      </h2>

      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
