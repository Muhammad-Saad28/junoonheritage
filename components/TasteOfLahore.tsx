"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { useGSAP } from "@gsap/react";

const LETTERS = [
  { char: "L", title: "Lahore Fort", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr" },
  { char: "A", title: "Architecture", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW" },
  { char: "H", title: "Heritage", img: "/frames/junoon-frame-037.webp" },
  { char: "O", title: "Old City", img: "/frames/junoon-frame-290.webp" },
  { char: "R", title: "Rooftop", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr" },
  { char: "E", title: "Experience", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW" }
];

export default function TasteOfLahore() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const letters = gsap.utils.toArray(".lahore-letter");
      const images = gsap.utils.toArray(".lahore-image");
      const captions = gsap.utils.toArray(".lahore-caption");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        }
      });

      // Initial state: first image visible
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0] as HTMLElement, { opacity: 1 });
      gsap.set(captions, { opacity: 0, y: 20 });
      gsap.set(captions[0] as HTMLElement, { opacity: 1, y: 0 });
      gsap.set(letters, { color: "transparent", WebkitTextStroke: "1px rgba(212,175,55,0.2)" });
      gsap.set(letters[0] as HTMLElement, { color: "#d4af37", WebkitTextStroke: "0px" });

      // Create sequence for each letter
      for (let i = 1; i < LETTERS.length; i++) {
        tl.to(images[i - 1] as HTMLElement, { opacity: 0, duration: 1 }, `step${i}`)
          .to(captions[i - 1] as HTMLElement, { opacity: 0, y: -20, duration: 1 }, `step${i}`)
          .to(letters[i - 1] as HTMLElement, { color: "transparent", WebkitTextStroke: "1px rgba(212,175,55,0.2)", duration: 1 }, `step${i}`)
          
          .to(images[i] as HTMLElement, { opacity: 1, duration: 1 }, `step${i}+=0.5`)
          .to(captions[i] as HTMLElement, { opacity: 1, y: 0, duration: 1 }, `step${i}+=0.5`)
          .to(letters[i] as HTMLElement, { color: "#d4af37", WebkitTextStroke: "0px", duration: 1 }, `step${i}+=0.5`);
      }
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full bg-junoon-dark flex flex-col justify-center items-center overflow-hidden relative">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity">
        {LETTERS.map((item, i) => (
          <div 
            key={`img-${i}`}
            className="lahore-image absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
      </div>
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-junoon-dark/80 z-10" />

      {/* Typography Mask */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        
        {/* Caption */}
        <div className="h-12 w-full flex justify-center items-center absolute top-[25%] md:top-[30%]">
          {LETTERS.map((item, i) => (
            <div key={`caption-${i}`} className="lahore-caption absolute text-center">
              <span className="font-label-caps text-junoon-cream/80 tracking-[0.4em] uppercase text-xs block mb-2 drop-shadow-md">A Taste Of</span>
              <span className="font-playfair text-[#d4af37] text-4xl md:text-6xl italic drop-shadow-lg">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Giant Letters */}
        <div className="flex items-center justify-between w-full max-w-[90vw] md:max-w-[80vw] px-4 font-playfair font-black text-[15vw] md:text-[18vw] leading-none uppercase select-none drop-shadow-2xl">
          {LETTERS.map((item, i) => (
            <span 
              key={`letter-${i}`} 
              className="lahore-letter transition-all"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(212,175,55,0.2)",
              }}
            >
              {item.char}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
