'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const markers = [
  { type: 'clothes',     src: '/designs/clothes.png',           alt: 'Bekleidungsgeschäft', top: '32%', left: '50%' },
  { type: 'doctor',      src: '/designs/doctor.png',            alt: 'Arztpraxis',          top: '10%', left: '30%' },
  { type: 'taxi',        src: '/designs/taxi.png',              alt: 'Taxi/Transport',      top: '78%', left: '82%' },
  { type: 'supermarket', src: '/designs/supermarkt.png',        alt: 'Supermarkt',          top: '80%', left: '15%' },
  { type: 'engineering', src: '/designs/engineers.png',         alt: 'Ingenieurbüro',       top: '0%',  left: '78%' },

  { type: 'restaurant',  src: '/designs/resturant.png',         alt: 'Restaurant',          top: '24%', left: '62%' },
  { type: 'transporter', src: '/designs/lkw.png',               alt: 'Spedition/Transport', top: '46%', left: '18%' },
  { type: 'coffee',      src: '/designs/kaffee.png',            alt: 'Café',                top: '58%', left: '55%' },
  { type: 'cleaning',    src: '/designs/cleaning.png',          alt: 'Reinigungsdienst',    top: '66%', left: '72%' },

  { type: 'pharmacy',    src: '/designs/apotheke.png',          alt: 'Apotheke',            top: '14%', left: '12%' },
  { type: 'bakery',      src: '/designs/croissant.png',         alt: 'Bäckerei',            top: '36%', left: '84%' },
  { type: 'hairdresser', src: '/designs/haare-schneiden.png',   alt: 'Friseur',             top: '70%', left: '35%' },
  { type: 'car-repair',  src: '/designs/mechaniker.png',        alt: 'Autowerkstatt',       top: '52%', left: '8%'  },
  { type: 'gym',         src: '/designs/double-gym-hantel.png', alt: 'Fitnessstudio',       top: '18%', left: '48%' },
  { type: 'hotel',       src: '/designs/hotel.png',             alt: 'Hotel',               top: '64%', left: '25%' },
  { type: 'florist',     src: '/designs/florist.png',           alt: 'Blumengeschäft',      top: '42%', left: '68%' },
  { type: 'law',         src: '/designs/gesetz.png',            alt: 'Anwaltskanzlei',      top: '28%', left: '6%'  },
  { type: 'accounting',  src: '/designs/buchhalter.png',        alt: 'Steuerberatung',      top: '8%',  left: '58%' },
];

export default function BusinessMap() {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-10 w-full"
      aria-label="Karte mit Branchen-Markern"
    >
      {/* The wrapper enforces the same aspect ratio as your map image.
         If your GermanyMap.webp is 1920×1080, 16:9 is perfect. */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-visible">
        {/* Map base — use object-cover so it fills exactly the box.
           With the right aspect ratio above, no letterboxing occurs. */}
        <Image
          src="/designs/GermanyMap.webp"
          alt="Deutschland-Karte"
          fill
          className="contain h-full"
          priority
          sizes="(max-width: 1024px) 100vw, 90vw"
        />

        {/* Markers */}
        {markers.map((m) => (
          <div
            key={`${m.type}-${m.top}-${m.left}`}
            className={`
              absolute -translate-x-1/2 -translate-y-1/2
              w-[52px] h-[52px] p-[4px] rounded-full bg-gradient-to-r from-red-500 to-blue-800
              shadow-[0_0_0_1px_rgba(255,255,255,.15)]
              max-[1400px]:w-[44px] max-[1400px]:h-[44px]
              max-[1100px]:w-[32px] max-[1100px]:h-[32px]
              max-[800px]:w-[24px] max-[800px]:h-[24px]
            `}
            
            style={{ top: m.top, left: m.left }}
            title={m.alt}
            aria-label={m.alt}
          >
            <div className="relative w-full h-full">
              <Image
                src={m.src}
                alt={m.alt}
                fill
                className="object-contain rounded-full"
                sizes="56px"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
