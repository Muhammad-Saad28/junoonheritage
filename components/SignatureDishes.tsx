"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureDishes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-[#3e472f] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col mb-16 text-center items-center"
        >
          <span className="font-label-caps text-[14px] text-[#d4af37] uppercase tracking-[0.3em] font-semibold mb-4">Culinary Excellence</span>
          <h2 className="font-playfair text-5xl lg:text-7xl text-white">Signature Masterpieces</h2>
          <div className="h-[1px] w-24 bg-[#d4af37] mt-8"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* Dish 1 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center">
            <div className="w-full aspect-[4/5] overflow-hidden mb-8 border border-[#d4af37]/20 relative shadow-2xl">
              <img src="/frames/junoon-frame-050.webp" alt="Dum Pukht Biryani" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-playfair text-3xl text-[#d4af37] mb-3 group-hover:text-white transition-colors duration-500">Dum Pukht Biryani</h3>
            <p className="text-white/70 font-light text-center leading-relaxed max-w-sm mb-4">Aged basmati rice and tender mutton slow-cooked in a sealed dough-lined brass pot.</p>
            <span className="font-label-caps text-[#d4af37] tracking-[0.2em] text-sm">Rs. 4,200</span>
          </motion.div>

          {/* Dish 2 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center mt-0 lg:mt-16">
            <div className="w-full aspect-[4/5] overflow-hidden mb-8 border border-[#d4af37]/20 relative shadow-2xl">
              <img src="/frames/junoon-frame-120.webp" alt="Sikandari Raan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-playfair text-3xl text-[#d4af37] mb-3 group-hover:text-white transition-colors duration-500">Sikandari Raan</h3>
            <p className="text-white/70 font-light text-center leading-relaxed max-w-sm mb-4">Whole leg of spring lamb, marinated for 48 hours and slow-roasted to absolute perfection.</p>
            <span className="font-label-caps text-[#d4af37] tracking-[0.2em] text-sm">Rs. 12,500</span>
          </motion.div>

          {/* Dish 3 */}
          <motion.div variants={itemVariants} className="group flex flex-col items-center mt-0 md:mt-16 lg:mt-32">
            <div className="w-full aspect-[4/5] overflow-hidden mb-8 border border-[#d4af37]/20 relative shadow-2xl">
              <img src="/frames/junoon-frame-200.webp" alt="Tandoori Jhinga" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-playfair text-3xl text-[#d4af37] mb-3 group-hover:text-white transition-colors duration-500">Tandoori Jhinga</h3>
            <p className="text-white/70 font-light text-center leading-relaxed max-w-sm mb-4">Colossal bay prawns kissed by the open flames, glazed with saffron and smoked paprika.</p>
            <span className="font-label-caps text-[#d4af37] tracking-[0.2em] text-sm">Rs. 4,500</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
