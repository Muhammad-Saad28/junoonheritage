"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const MENU_ITEMS = [
  { 
    num: "01", 
    name: "BBQ & Grill", 
    sub: "Charcoal-grilled perfection", 
    desc: "Premium cuts marinated in rare mountain herbs, slow-roasted over flaming organic charcoal. Each skewer is a testament to the primal art of fire cooking.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW", 
    dishes: ["Shinwari Chops", "Chapli Kebab", "Reshmi Kebab", "Malai Boti"]
  },
  { 
    num: "02", 
    name: "Handi & Karahi", 
    sub: "Rich, slow-simmered tradition", 
    desc: "Mutton and poultry simmered for hours in heavy cast-iron woks and unglazed terracotta, preserving every ounce of flavor, fat, and aroma.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr", 
    dishes: ["Dum Pukht Karahi", "Daal Makhani", "Chicken Handi", "Mutton Paye"]
  },
  { 
    num: "03", 
    name: "Royal Rice", 
    sub: "Timeless grains, authentic taste", 
    desc: "Extra-long grain basmati infused with Kashmiri saffron, sealed with dough, and steam-cooked to trap the fragrant essence of royal banquets.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW", 
    dishes: ["Mutton Dum Biryani", "Zafrani Pulao", "Hyderabadi Rice"]
  }
];

export default function OurMenu() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".menu-card");

    cards.forEach((card: any, i: number) => {
      // The last card doesn't need to be pinned
      if (i === cards.length - 1) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false, // Allows the next card to overlap
      });

      // Darken and scale down the pinned card as the next one comes over
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.3,
        filter: "brightness(0.3)",
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#4a582c] flex flex-col items-center">
      
      {/* Title Header */}
      <div className="relative w-full py-24 flex flex-col items-center justify-center text-center z-10 border-b border-[#d4af37]/20">
        <div className="relative z-10 flex flex-col items-center">
          <span className="font-label-caps text-[#d4af37] tracking-[0.5em] text-xs uppercase mb-6 drop-shadow-md">Our Menu</span>
          <h2 className="font-playfair text-6xl md:text-8xl text-white font-light drop-shadow-xl">
            Flavors of <span className="italic text-[#d4af37]">Tradition</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#d4af37]/50 mt-12" />
        </div>
      </div>

      <div className="w-full relative">
        {MENU_ITEMS.map((item, index) => (
          <div 
            key={item.num} 
            className="menu-card h-screen w-full relative overflow-hidden flex items-center justify-center sticky top-0"
            style={{ zIndex: index }}
          >
            {/* Background Image full cover */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url(${item.img})` }} 
            />
            
            {/* Elegant vignette and darkness to make text readable */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />

            <div className="relative z-10 w-full max-w-[1440px] px-margin md:px-margin-tablet lg:px-margin-desktop h-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
              
              {/* Left Content */}
              <div className="flex-1 w-full flex flex-col items-start pt-12 md:pt-0">
                <span className="font-playfair text-[8rem] md:text-[12rem] leading-none text-white/10 font-black absolute -top-10 md:-top-20 -left-10 md:-left-20 pointer-events-none select-none">
                  {item.num}
                </span>
                
                <h3 className="font-playfair text-5xl md:text-7xl text-white font-normal mb-4 z-10">
                  {item.name}
                </h3>
                <p className="font-label-caps text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-8 z-10">
                  {item.sub}
                </p>
                <p className="font-manrope text-lg md:text-xl text-white/70 font-light max-w-lg leading-relaxed mb-12 z-10">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-4 z-10">
                  {item.dishes.map((dish, idx) => (
                    <span key={idx} className="font-label-caps text-xs tracking-[0.2em] text-white/90 border border-white/20 px-6 py-3 uppercase bg-white/5 backdrop-blur-sm">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content - Decorative Window */}
              <div className="hidden md:flex flex-1 w-full justify-end items-center">
                <div className="w-[400px] h-[550px] relative border border-[#d4af37]/30 p-4">
                  {/* Image inside the elegant frame */}
                  <div className="w-full h-full relative overflow-hidden bg-black">
                    <div 
                      className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-[2s]"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                  </div>
                  {/* Decorative corners */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#d4af37]" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#d4af37]" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-[#d4af37]" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#d4af37]" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footer / Call to action for full menu */}
      <div className="w-full bg-[#050603] py-24 flex justify-center z-20 relative">
        <a 
          href="/menu" 
          className="group flex items-center justify-center gap-4 border border-[#d4af37]/50 px-12 py-6 hover:bg-[#d4af37] transition-all duration-500"
        >
          <span className="font-label-caps tracking-[0.4em] uppercase text-[#d4af37] group-hover:text-black transition-colors">
            View Complete Archive
          </span>
          <span className="material-symbols-outlined text-[#d4af37] group-hover:text-black transition-colors">
            auto_stories
          </span>
        </a>
      </div>

    </section>
  );
}
