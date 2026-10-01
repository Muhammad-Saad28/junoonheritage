"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { useGSAP } from "@gsap/react";

const LETTERS = [
  { char: "L", title: "Lahore Fort", img: "/images/lahore_fort_exterior.png" },
  { char: "A", title: "Architecture", img: "/images/mughal_ambiance.png" },
  { char: "H", title: "Heritage", img: "/images/lahore_1940_vintage.png" },
  { char: "O", title: "Old City", img: "/images/old_city_lahore.png" },
  { char: "R", title: "Rooftop", img: "/images/rooftop.png" },
  { char: "E", title: "Experience", img: "/images/signature_biryani.png" }
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
      gsap.set(letters, { color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.3)" });
      gsap.set(letters[0] as HTMLElement, { color: "#ffffff", WebkitTextStroke: "0px", filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.8))" });

      // Create sequence for each letter
      for (let i = 1; i < LETTERS.length; i++) {
        tl.to(images[i - 1] as HTMLElement, { opacity: 0, duration: 1 }, `step${i}`)
          .to(captions[i - 1] as HTMLElement, { opacity: 0, y: -20, duration: 1 }, `step${i}`)
          .to(letters[i - 1] as HTMLElement, { color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.3)", filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))", duration: 1 }, `step${i}`)
          
          .to(images[i] as HTMLElement, { opacity: 1, duration: 1 }, `step${i}+=0.5`)
          .to(captions[i] as HTMLElement, { opacity: 1, y: 0, duration: 1 }, `step${i}+=0.5`)
          .to(letters[i] as HTMLElement, { color: "#ffffff", WebkitTextStroke: "0px", filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.8))", duration: 1 }, `step${i}+=0.5`);
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
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Typography Mask */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        
        {/* Caption */}
        <div className="h-12 w-full flex justify-center items-center absolute top-[25%] md:top-[30%]">
          {LETTERS.map((item, i) => (
            <div key={`caption-${i}`} className="lahore-caption absolute text-center">
              <span className="font-label-caps text-white tracking-[0.4em] uppercase text-xs md:text-sm block mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-semibold">A Taste Of</span>
              <span className="font-playfair text-white text-5xl md:text-7xl italic drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">{item.title}</span>
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
                WebkitTextStroke: "2px rgba(255,255,255,0.3)",
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
