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
    img: "/images/bbq_grill_platter.png", 
    dishes: ["Shinwari Chops", "Chapli Kebab", "Reshmi Kebab", "Malai Boti"]
  },
  { 
    num: "02", 
    name: "Handi & Karahi", 
    sub: "Rich, slow-simmered tradition", 
    desc: "Mutton and poultry simmered for hours in heavy cast-iron woks and unglazed terracotta, preserving every ounce of flavor, fat, and aroma.",
    img: "/images/handi_karahi.png", 
    dishes: ["Dum Pukht Karahi", "Daal Makhani", "Chicken Handi", "Mutton Paye"]
  },
  { 
    num: "03", 
    name: "Royal Rice", 
    sub: "Timeless grains, authentic taste", 
    desc: "Extra-long grain basmati infused with Kashmiri saffron, sealed with dough, and steam-cooked to trap the fragrant essence of royal banquets.",
    img: "/images/signature_biryani.png", 
    dishes: ["Mutton Dum Biryani", "Zafrani Pulao", "Hyderabadi Rice"]
  }
];

export default function OurMenu() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".menu-card") as HTMLElement[];

    cards.forEach((card, i) => {
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

            <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-12 lg:px-24 h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 overflow-y-auto pt-20 md:pt-0">
              
              {/* Left Content */}
              <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 shrink-0">
                <span className="font-playfair text-[6rem] md:text-[12rem] leading-none text-white/10 font-black absolute top-4 md:-top-20 left-1/2 md:-left-20 -translate-x-1/2 md:translate-x-0 pointer-events-none select-none">
                  {item.num}
                </span>
                
                <h3 className="font-playfair text-4xl md:text-7xl text-white font-normal mb-2 md:mb-4 z-10">
                  {item.name}
                </h3>
                <p className="font-label-caps text-[#d4af37] tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-8 z-10">
                  {item.sub}
                </p>
                <p className="font-manrope text-base md:text-xl text-white/70 font-light max-w-lg leading-relaxed mb-6 md:mb-12 z-10">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 z-10">
                  {item.dishes.map((dish, idx) => (
                    <span key={idx} className="font-label-caps text-[10px] md:text-xs tracking-[0.2em] text-white/90 border border-white/20 px-4 py-2 md:px-6 md:py-3 uppercase bg-white/5 backdrop-blur-sm">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content - Decorative Window */}
              <div className="flex md:flex-1 w-full justify-center md:justify-end items-center pb-12 md:pb-0 shrink-0">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[550px] relative border border-[#d4af37]/30 p-2 md:p-4 mt-6 md:mt-0">
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
