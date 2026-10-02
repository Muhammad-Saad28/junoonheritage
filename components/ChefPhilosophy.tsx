"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ChefPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#2c3322] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <Image src="/frames/junoon-frame-290.webp" alt="Wood fired hearth" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c3322] via-[#2c3322]/50 to-[#2c3322]"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-24 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div style={{ opacity }} className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 border border-[#d4af37]/30 rounded-full flex items-center justify-center mb-8 bg-[#2c3322]/50 backdrop-blur-sm shadow-xl">
            <MapPin className="text-[#d4af37] w-6 h-6" />
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
            "The fire is untamed, but it respects the master's hand. Our cuisine is a testament to the <span className="text-[#d4af37] italic">soul of the Indus</span>."
          </h2>
          
          <p className="font-label-caps text-[#d4af37] tracking-[0.3em] uppercase text-sm font-semibold mt-4">
            — The Executive Chef
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16"
          >
            <a href="/experience" className="group flex items-center gap-4 px-8 py-4 border border-[#d4af37]/50 hover:bg-[#d4af37] transition-all duration-500">
              <span className="font-label-caps text-[#d4af37] group-hover:text-[#2c3322] tracking-[0.2em] font-semibold transition-colors duration-500">
                DISCOVER OUR STORY
              </span>
              <span className="material-symbols-outlined text-[#d4af37] group-hover:text-[#2c3322] transition-colors duration-500">
                arrow_forward
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
