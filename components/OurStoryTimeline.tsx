"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { useGSAP } from "@gsap/react";

const TIMELINE_DATA = [
  {
    year: "1940",
    title: "LAHORE'S HERITAGE",
    desc: "A city forged around midnight banquets and copper degs smoking over charcoal embers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr",
    filter: "sepia(0.8) contrast(1.2) brightness(0.6) grayscale(0.5)",
  },
  {
    year: "1970",
    title: "TRADITION & TASTE",
    desc: "Preserving temperature and aromatic steam in unglazed terracotta handis, a legacy passed through generations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW",
    filter: "sepia(0.4) hue-rotate(-15deg) contrast(1.1) brightness(0.8)",
  },
  {
    year: "TODAY",
    title: "JUNOON",
    desc: "A living museum for the palate. The culmination of history, flavor, and mastery over the flame.",
    image: "/frames/junoon-frame-037.webp",
    filter: "none",
  },
];

export default function OurStoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && scrollWrapperRef.current) {
      const sections = gsap.utils.toArray(".timeline-panel");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=250%",
        }
      });

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      });
      
      // Progress line animation
      gsap.to(".progress-line-fill", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top top",
          end: "+=250%",
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#0a0d07] overflow-hidden flex flex-col relative text-white">
      
      {/* Title block fixed during pin */}
      <div className="absolute top-12 left-12 md:top-24 md:left-24 z-20 pointer-events-none">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-[#d4af37]" />
          <span className="font-label-caps text-[#d4af37] tracking-[0.4em] uppercase text-xs">Our Story</span>
        </div>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal opacity-90">
          The Journey Through Time
        </h2>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="flex h-full w-[300vw] items-center relative z-10">
        
        {/* Continuous background line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
        <div className="progress-line-fill absolute top-1/2 left-0 w-full h-[1px] bg-[#d4af37] -translate-y-1/2 z-0 origin-left scale-x-0" />

        {TIMELINE_DATA.map((item, index) => (
          <div key={item.year} className="timeline-panel w-screen h-full flex flex-col items-center justify-center relative px-8 md:px-24">
            
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 md:gap-24 mt-20 md:mt-24">
              
              {/* Image with specific filter */}
              <div className={`w-full md:w-5/12 lg:w-4/12 aspect-[4/5] max-h-[50vh] relative overflow-hidden mt-12 md:mt-0`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{ 
                    backgroundImage: `url(${item.image})`,
                    filter: item.filter 
                  }} 
                />
                <div className="absolute inset-0 bg-black/20" />
                {/* Gold frame overlay */}
                <div className="absolute inset-4 border border-[#d4af37]/30 pointer-events-none" />
              </div>

              {/* Text content */}
              <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
                <span className="font-playfair text-6xl md:text-8xl text-white/10 absolute -top-10 md:-top-20 -left-4 md:-left-10 select-none">
                  {item.year}
                </span>
                
                {/* Timeline node */}
                <div className="hidden md:flex absolute top-1/2 -left-12 md:left-[-6rem] w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20" />

                <h3 className="font-label-caps text-[#d4af37] tracking-[0.3em] uppercase text-sm mb-4">
                  {item.title}
                </h3>
                <p className="font-manrope text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

            </div>

            {/* Mobile timeline node (since horizontal line is behind) */}
            <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.6)] z-20" />
          </div>
        ))}
      </div>
    </section>
  );
}
