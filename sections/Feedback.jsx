'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
<motion.div
  variants={fadeIn('right', 'tweeen', 0.2, 1)}
  className="flex-[0.4] lg:max-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
>
  <div className="feedback-gradient -z-10" />
  <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Interested in Our Services?</h4>
  <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
    Fill out the form below and let us help you establish or grow your business with our expert services.
  </p>

  {/* Form Start */}
  <form className="mt-[24px] flex flex-col space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="p-3 rounded-[10px] border border-[#6a6a6a] bg-transparent text-white placeholder:text-[#b0b0b0] mt-5"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="p-3 rounded-[10px] border border-[#6a6a6a] bg-transparent text-white placeholder:text-[#b0b0b0]"
    />
    <textarea
      placeholder="Tell us about your business and services you're interested in"
      rows="4"
      className="p-3 rounded-[10px] border border-[#6a6a6a] bg-transparent text-white placeholder:text-[#b0b0b0]"
    />
    <button
      type="submit"
      className="bg-[#FF6F61] text-white py-3 rounded-[10px] text-[16px] transition-all hover:bg-[#f57c70]"
    >
      Submit
    </button>
  </form>
  {/* Form End */}
</motion.div>


      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center item-center"
      >
        <img src="/contact-us.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          {/* <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px]  md:h-[170px] h-[115px] object-contain" /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
