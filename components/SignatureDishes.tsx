"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const dishes = [
  {
    id: 1,
    num: '01',
    name: 'Dum Pukht Biryani',
    sub: 'The Royal Seal',
    desc: 'Aged basmati rice and tender mutton slow-cooked in a sealed dough-lined brass pot — a living Mughal court ritual.',
    price: 'Rs. 4,200',
    tag: 'Mughal Heritage',
    frame: '/frames/junoon-frame-050.webp',
  },
  {
    id: 2,
    num: '02',
    name: 'Sikandari Raan',
    sub: "The Conqueror's Feast",
    desc: 'Whole leg of spring lamb, marinated for 48 hours in aromatic spices and slow-roasted to absolute perfection.',
    price: 'Rs. 12,500',
    tag: 'Wood-Roasted',
    frame: '/frames/junoon-frame-120.webp',
  },
  {
    id: 3,
    num: '03',
    name: 'Tandoori Jhinga',
    sub: 'The Coastal Ember',
    desc: 'Colossal bay prawns kissed by open flames, glazed with saffron butter and finished with smoked paprika.',
    price: 'Rs. 4,500',
    tag: 'Open Flame',
    frame: '/frames/junoon-frame-200.webp',
  },
];

export default function SignatureDishes() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: '#0a0c07' }} className="w-full overflow-hidden">

      {/* Top gold rule */}
      <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)' }} />

      {/* ── HEADER ── */}
      <div className="text-center px-8 lg:px-16 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
        >
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, marginBottom:18 }}>
            <div style={{ width:56, height:1, background:'rgba(212,175,55,0.4)' }} />
            <svg width="13" height="13" viewBox="0 0 14 14"><path d="M7 0L8.3 5.7L14 7L8.3 8.3L7 14L5.7 8.3L0 7L5.7 5.7L7 0Z" fill="#d4af37" opacity="0.8"/></svg>
            <div style={{ width:56, height:1, background:'rgba(212,175,55,0.4)' }} />
          </div>
          <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:11, letterSpacing:'0.5em', color:'#d4af37', textTransform:'uppercase', marginBottom:14 }}>
            Culinary Excellence
          </p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.8rem,6.5vw,5.5rem)', fontWeight:400, lineHeight:1.05, color:'#fff', margin:0 }}>
            Signature{' '}
            <em style={{ color:'#d4af37' }}>Masterpieces</em>
          </h2>
        </motion.div>
      </div>

      {/* ── CINEMATIC CARDS ── */}
      <div
        style={{
          display:'flex',
          flexDirection:'row',
          width:'100%',
          height:'clamp(500px,75vh,760px)',
        }}
      >
        {dishes.map((dish, i) => {
          const isHovered = hovered === i;
          return (
            <motion.div
              key={dish.id}
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.75, delay: i*0.14, ease:[0.16,1,0.3,1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: isHovered ? 2.4 : 1,
                transition:'flex 0.65s cubic-bezier(0.16,1,0.3,1)',
                position:'relative',
                overflow:'hidden',
                cursor:'pointer',
              }}
            >
              {/* Image */}
              <Image
                src={dish.frame}
                alt={dish.name}
                fill
                style={{
                  objectFit:'cover',
                  transform: isHovered ? 'scale(1.08)' : 'scale(1.02)',
                  transition:'transform 0.85s cubic-bezier(0.16,1,0.3,1)',
                }}
              />

              {/* Gradient overlay */}
              <div style={{
                position:'absolute', inset:0,
                background: isHovered
                  ? 'linear-gradient(to top,rgba(10,12,7,0.93) 0%,rgba(10,12,7,0.45) 50%,rgba(10,12,7,0.1) 100%)'
                  : 'linear-gradient(to top,rgba(10,12,7,0.85) 0%,rgba(10,12,7,0.3) 60%,rgba(10,12,7,0.15) 100%)',
                transition:'background 0.5s ease',
              }} />

              {/* Side divider */}
              {i < 2 && (
                <div style={{
                  position:'absolute', right:0, top:'8%', bottom:'8%',
                  width:1,
                  background:'linear-gradient(to bottom,transparent,rgba(212,175,55,0.2) 50%,transparent)',
                  zIndex:5,
                }} />
              )}

              {/* Content layer */}
              <div style={{
                position:'absolute', inset:0, zIndex:4,
                padding:'clamp(20px,3.5%,44px)',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
              }}>

                {/* Top row: number + tag */}
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{
                    fontFamily:"'Manrope',sans-serif",
                    fontSize:10, letterSpacing:'0.45em',
                    color: isHovered ? '#d4af37' : 'rgba(255,255,255,0.25)',
                    transition:'color 0.4s ease',
                  }}>
                    {dish.num}
                  </span>
                  <div style={{
                    flex:1, height:1,
                    background: isHovered ? 'rgba(212,175,55,0.45)' : 'rgba(255,255,255,0.08)',
                    transition:'background 0.4s ease',
                  }} />
                  <span style={{
                    fontFamily:"'Manrope',sans-serif",
                    fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase',
                    color:'#d4af37',
                    border:'1px solid rgba(212,175,55,0.35)',
                    padding:'4px 9px',
                    opacity: isHovered ? 1 : 0.55,
                    transition:'opacity 0.4s ease',
                  }}>
                    {dish.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  {/* Subtitle */}
                  <p style={{
                    fontFamily:"'Manrope',sans-serif",
                    fontSize:9.5, letterSpacing:'0.4em', textTransform:'uppercase',
                    color:'#d4af37', marginBottom:8,
                    opacity: isHovered ? 1 : 0.65,
                    transition:'opacity 0.4s ease',
                  }}>
                    {dish.sub}
                  </p>

                  {/* Dish name */}
                  <h3 style={{
                    fontFamily:"'Playfair Display',serif",
                    fontSize:'clamp(1.5rem,2.5vw,2.8rem)',
                    fontWeight:400, lineHeight:1.1, color:'#fff',
                    marginBottom:14,
                  }}>
                    {dish.name}
                  </h3>

                  {/* Description — slides in on hover */}
                  <div style={{
                    overflow:'hidden',
                    maxHeight: isHovered ? 130 : 0,
                    opacity: isHovered ? 1 : 0,
                    transition:'max-height 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                    marginBottom: isHovered ? 18 : 0,
                  }}>
                    <p style={{
                      fontFamily:"'Manrope',sans-serif",
                      fontSize:13, lineHeight:1.75,
                      color:'rgba(255,255,255,0.58)',
                      fontWeight:300,
                    }}>
                      {dish.desc}
                    </p>
                  </div>

                  {/* Price + CTA row */}
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{
                      fontFamily:"'Playfair Display',serif",
                      fontStyle:'italic',
                      fontSize:'clamp(1rem,1.6vw,1.4rem)',
                      color:'#d4af37',
                    }}>
                      {dish.price}
                    </span>
                    <div style={{
                      display:'flex', alignItems:'center', gap:8,
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                      transition:'opacity 0.4s ease 0.12s, transform 0.4s ease 0.12s',
                    }}>
                      <span style={{
                        fontFamily:"'Manrope',sans-serif",
                        fontSize:8.5, letterSpacing:'0.35em', textTransform:'uppercase',
                        color:'#d4af37',
                      }}>Order Now</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Animated gold underline */}
                  <div style={{
                    marginTop:14, height:1,
                    background:'linear-gradient(90deg,#d4af37,transparent)',
                    width: isHovered ? '100%' : '24%',
                    opacity: isHovered ? 0.85 : 0.3,
                    transition:'width 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                  }} />
                </div>
              </div>

              {/* Corner ornaments */}
              <div style={{
                position:'absolute', top:14, right:14, zIndex:5,
                width:26, height:26,
                borderTop:'1px solid rgba(212,175,55,0.4)',
                borderRight:'1px solid rgba(212,175,55,0.4)',
                opacity: isHovered ? 1 : 0.35,
                transition:'opacity 0.4s ease',
              }} />
              <div style={{
                position:'absolute', bottom:14, left:14, zIndex:5,
                width:26, height:26,
                borderBottom:'1px solid rgba(212,175,55,0.4)',
                borderLeft:'1px solid rgba(212,175,55,0.4)',
                opacity: isHovered ? 1 : 0.35,
                transition:'opacity 0.4s ease',
              }} />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom gold rule */}
      <div style={{ height:1, background:'linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)' }} />
    </section>
  );
}
