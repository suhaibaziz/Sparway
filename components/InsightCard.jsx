'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, imgUrl, title, subtitle }) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.4, prefersReduced ? 0.4 : 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      {/* الصورة الرئيسية */}
      <div className="relative md:w-[270px] w-full h-[250px] rounded-[32px] overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 270px"
          className="object-cover rounded-[32px]"
          placeholder="blur"
          blurDataURL="/blur-placeholder.png" // حط نسخة صغيرة إذا بدك
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[600px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>

        {/* الأيقونة الجانبية */}
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border border-white">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src="/arrow.svg"
              alt="arrow"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
