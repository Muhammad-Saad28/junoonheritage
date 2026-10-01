"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function JunoonLight() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use springs for ultra-smooth trailing effect
  const mouseX = useSpring(0, { stiffness: 150, damping: 25, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-interactive="true"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 30,
          height: isHovering ? 80 : 30,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0.4)',
          boxShadow: isHovering 
            ? '0 0 40px 20px rgba(212, 175, 55, 0.2)' 
            : '0 0 20px 10px rgba(212, 175, 55, 0.2)',
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Small trailing dust particle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#d4af37]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 4 : 2,
          height: isHovering ? 4 : 2,
          opacity: isHovering ? 0 : 0.8,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
