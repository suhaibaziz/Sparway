
'use client';


import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; // adjust path

// Put your icons in /public/designs/icons/ (70x70 or 50x50 is perfect)
const markers = [
  // existing ones
  { type: "clothes",      src: "/designs/clothes.png",      alt: "Bekleidungsgeschäft", top: "32%", left: "50%" },
  { type: "doctor",       src: "/designs/doctor.png",       alt: "Arztpraxis",          top: "10%", left: "30%" },
  { type: "taxi",         src: "/designs/taxi.png",         alt: "Taxi/Transport",      top: "78%", left: "82%" },
  { type: "supermarket",  src: "/designs/supermarkt.png",   alt: "Supermarkt",          top: "80%", left: "15%" },
  { type: "engineering",  src: "/designs/engineers.png",    alt: "Ingenieurbüro",       top: "0%",  left: "78%" },

  // NEW: restaurant, transporter, coffee, cleaning
  { type: "restaurant",   src: "/designs/resturant.png",   alt: "Restaurant",       top: "24%", left: "62%" },
  { type: "transporter",  src: "/designs/lkw.png",  alt: "Spedition/Transport", top: "46%", left: "18%" },
  { type: "coffee",       src: "/designs/kaffee.png",       alt: "Café",             top: "58%", left: "55%" },
  { type: "cleaning",     src: "/designs/cleaning.png",     alt: "Reinigungsdienst", top: "66%", left: "72%" },

  // Add as many future customers as you like:
  { type: "pharmacy",     src: "/designs/apotheke.png",     alt: "Apotheke",         top: "14%", left: "12%" },
  { type: "bakery",       src: "/designs/croissant.png",       alt: "Bäckerei",         top: "36%", left: "84%" },
  { type: "hairdresser",  src: "/designs/haare-schneiden.png",  alt: "Friseur",          top: "70%", left: "35%" },
  { type: "car-repair",   src: "/designs/mechaniker.png",   alt: "Autowerkstatt",    top: "52%", left: "8%"  },
  { type: "gym",          src: "/designs/double-gym-hantel.png",          alt: "Fitnessstudio",    top: "18%", left: "48%" },
  { type: "hotel",        src: "/designs/hotel.png",        alt: "Hotel",            top: "64%", left: "25%" },
  { type: "florist",      src: "/designs/florist.png",      alt: "Blumengeschäft",   top: "42%", left: "68%" },
  { type: "law",          src: "/designs/gesetz.png",          alt: "Anwaltskanzlei",   top: "28%", left: "6%"  },
  { type: "accounting",   src: "/designs/buchhalter.png",   alt: "Steuerberatung",   top: "8%",  left: "58%" },
];

export default function BusinessMap() {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      className="relative mt-[69px] flex w-full h-[550px]"
    >
      {/* Map background */}
      <Image
        src="/designs/GermanyMap.webp"
        alt="Deutschland-Karte"
        fill
        className="object-contain"
        priority
      />

      {/* Markers */}
      {markers.map((m) => (
        <div
          key={`${m.type}-${m.top}-${m.left}`}
          className="absolute w-[55px] h-[55px] p-[4px] rounded-full bg-[#5d6680] [box-shadow:0_0_0_1px_rgba(255,255,255,.15)]"
          style={{ top: m.top, left: m.left }}
          title={m.alt}
        >
          <div className="relative w-full h-full">
            <Image
              src={m.src}
              alt={m.alt}
              fill
              sizes="50px"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}
