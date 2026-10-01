"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, UtensilsCrossed, Sparkles, HeartHandshake } from "lucide-react";

const CARDS = [
  {
    id: 1,
    title: "ROOFTOP VIEWS",
    subtitle: "Lahore beneath the evening sky",
    desc: "Breathtaking views of Badshahi Mosque and Lahore Fort to see our signature dishes and warm hospitality.",
    image: "/frames/junoon-frame-037.webp",
    icon: MapPin,
  },
  {
    id: 2,
    title: "CULINARY HERITAGE",
    subtitle: "Flavors of the Indus",
    desc: "Discover a menu of Traditional Handi and BBQ flavours that bring you back to the authentic tastes of Lahore.",
    image: "/frames/junoon-frame-290.webp",
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: "MUGHAL LEGACY",
    subtitle: "The Royal Ambiance",
    desc: "Our restaurant brings the rich cultural heritage of Lahore to every corner, with traditional hands-on cooking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "LAHORI WELCOME",
    subtitle: "Mehmaan-nawazi",
    desc: "Mehmaan-nawazi is in our DNA — every guest is welcomed with sincere care and unwavering dedication.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW",
    icon: HeartHandshake,
  },
];

export default function WhyJunoon() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-junoon-olive py-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Title Area */}
      <div className="w-full max-w-[1440px] mb-12 flex flex-col items-center text-center z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[1px] bg-junoon-gold/40" />
          <span className="font-label-caps text-junoon-gold text-[10px] tracking-[0.4em] uppercase">The Junoon Experience</span>
          <div className="w-12 h-[1px] bg-junoon-gold/40" />
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-junoon-cream font-normal mb-4">
          More Than <em className="text-junoon-gold not-italic">Just a Meal</em>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1440px] h-[65vh] min-h-[500px] flex flex-col md:flex-row gap-4 z-10">
        {CARDS.map((card, idx) => {
          const isHovered = hoveredIndex === idx;
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                flex: isHovered ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3) : 1,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative rounded-lg overflow-hidden cursor-pointer group flex-1 min-h-[100px]"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  filter: isHovered ? "grayscale(0%) brightness(1.1)" : "grayscale(80%) brightness(0.4)",
                }}
                transition={{ duration: 0.7 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Gold border tracing effect on hover */}
              <motion.div 
                className="absolute inset-0 border border-junoon-gold/0 z-20 pointer-events-none rounded-lg"
                animate={{
                  borderColor: isHovered ? "rgba(184,148,82,0.4)" : "rgba(184,148,82,0)",
                  boxShadow: isHovered ? "inset 0 0 40px rgba(184,148,82,0.15)" : "inset 0 0 0px rgba(184,148,82,0)",
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full z-30">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-black/40 border border-junoon-gold/30 flex items-center justify-center mb-6 backdrop-blur-md"
                  animate={{
                    borderColor: isHovered ? "rgba(184,148,82,0.8)" : "rgba(184,148,82,0.3)",
                    color: isHovered ? "#d4af37" : "rgba(255,255,255,0.6)"
                  }}
                >
                  <Icon size={18} />
                </motion.div>

                <h3 className="font-label-caps text-junoon-gold text-xs tracking-[0.3em] uppercase mb-2">
                  {card.title}
                </h3>

                <div className="overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{
                      y: isHovered ? 0 : 20,
                      opacity: isHovered ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="font-playfair text-2xl md:text-3xl text-junoon-cream mb-3">
                      {isHovered ? card.subtitle : card.title}
                    </h4>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="w-12 h-[1px] bg-junoon-gold/50 mb-4 mt-2" />
                      <p className="font-manrope text-sm text-junoon-cream/70 font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
