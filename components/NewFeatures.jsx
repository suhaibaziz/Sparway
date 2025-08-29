import Image from 'next/image';
import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    {/* أيقونة داخل مربع */}
    <div
      className={`${styles.flexCenter} w-[150px] h-[150px] rounded-[24px] bg-[#323f5d] relative`}
    >
      <Image
        src={imgUrl}
        alt={title || 'icon'}
        fill
        sizes="120px"
        className="object-contain p-4"
      />
    </div>

    {/* العنوان */}
    <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h2>

    {/* الوصف */}
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
