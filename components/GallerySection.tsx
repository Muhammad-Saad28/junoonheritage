"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const GALLERY_IMGS = [
  { src:"https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr", alt:"Grand Hall", label:"Grand Dining Hall", wide:false },
  { src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW", alt:"Iron Karahi", label:"Iron Hearth", wide:false },
  { src:"https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr", alt:"Ambiance", label:"Candlelit Evenings", wide:false },
  { src:"https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW", alt:"Night Service", label:"Midnight Banqueting", wide:true },
];

function GoldOrb({ style }: { style: React.CSSProperties }) {
  return <div style={{ position:"absolute", borderRadius:"50%", background:"radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)", pointerEvents:"none", ...style }} />;
}

function Embers() {
  const embers = [{ id:0,size:4,left:"12%",delay:"0s",dur:"4s"},{id:1,size:3,left:"35%",delay:"1.5s",dur:"5s"},{id:2,size:5,left:"60%",delay:"0.7s",dur:"3.5s"},{id:3,size:2,left:"80%",delay:"2s",dur:"6s"},{id:4,size:4,left:"90%",delay:"0.3s",dur:"4.5s"}];
  const colors = ["#d4af37","#e8c558","#c8872a"];
  return <>{embers.map((e,i)=><div key={e.id} className="ember" style={{ width:e.size,height:e.size,left:e.left,bottom:"10%",background:colors[i%3],animationDuration:e.dur,animationDelay:e.delay,boxShadow:`0 0 ${e.size*2}px ${colors[i%3]}` }} />)}</>;
}

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start end","end start"] });
  const y = useTransform(scrollYProgress, [0,1], [60,-60]);
  return (
    <section ref={ref} style={{ background:"linear-gradient(180deg,#0b0e08 0%,#111508 100%)", position:"relative", overflow:"hidden" }}>
      <GoldOrb style={{ width:500, height:500, top:"30%", left:-150, opacity:0.4 }} />
      <Embers />
      <div style={{ height:1, background:"linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(60px,8vw,120px) clamp(20px,5vw,80px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }}>
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.85}}
            style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {GALLERY_IMGS.map((img,i)=>(
              <motion.div key={i} whileHover={{scale:1.03}}
                style={{ position:"relative", overflow:"hidden", gridColumn:img.wide?"span 2":"span 1", aspectRatio:img.wide?"21/9":"auto", cursor:"pointer" }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit:"cover", transition:"transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(11,14,8,0.75) 0%, transparent 50%)" }} />
                <span style={{ position:"absolute", bottom:10, left:12, fontFamily:"Manrope,sans-serif", fontSize:8.5, letterSpacing:"0.3em", color:"rgba(212,175,55,0.9)", textTransform:"uppercase" }}>{img.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.85,delay:0.1}} style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:4 }}>
              <div style={{ width:40, height:1, background:"rgba(212,175,55,0.45)" }} />
              <span style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase" }}>Gallery</span>
              <div style={{ width:40, height:1, background:"rgba(212,175,55,0.45)" }} />
            </div>
            <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:400, color:"#fff", lineHeight:1.1, margin:0 }}>
              Moments Worth <em style={{ color:"#d4af37" }}>Remembering</em>
            </h2>
            <p style={{ fontFamily:"Manrope,sans-serif", fontSize:14, lineHeight:1.85, color:"rgba(255,255,255,0.50)", fontWeight:300, maxWidth:400 }}>
              Take a glimpse into the world of Junoon — from our heritage interiors to our signature dishes and iconic views. Every frame tells a story of passion, craft, and belonging.
            </p>
            <div style={{ display:"flex", gap:36, marginTop:8, borderTop:"1px solid rgba(212,175,55,0.12)", paddingTop:24 }}>
              {[["120+","Covers Daily"],["48h","Prep for Raan"],["3","Floors of Views"]].map(([num,label])=>(
                <div key={label}>
                  <div style={{ fontFamily:"Playfair Display,serif", fontSize:28, color:"#d4af37", fontStyle:"italic" }}>{num}</div>
                  <div style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.3em", color:"rgba(255,255,255,0.40)", textTransform:"uppercase", marginTop:2 }}>{label}</div>
                </div>
              ))}
            </div>
            <motion.a href="/gallery" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
              style={{ marginTop:4, alignSelf:"flex-start", display:"inline-flex", alignItems:"center", gap:10, padding:"13px 30px", border:"1px solid rgba(212,175,55,0.45)", color:"#d4af37", fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.4em", textTransform:"uppercase", textDecoration:"none", transition:"all 0.35s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#d4af37";(e.currentTarget as HTMLAnchorElement).style.color="#0b0e08";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="transparent";(e.currentTarget as HTMLAnchorElement).style.color="#d4af37";}}>
              View Gallery
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div style={{ height:1, background:"linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)" }} />
    </section>
  );
}
