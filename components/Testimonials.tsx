"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  { stars:5, text:"\"No restaurant goes to the heart of Lahore. The food ambiance and vibes are unmatched & truly wow!\"", name:"Ayesha Khan", tag:"Verified Guest", avatar:"AK" },
  { stars:5, text:"\"The rooftop view of Badshahi Mosque while enjoying authentic Lahori food is perfection. Cannot believe it!\"", name:"Umair Raza", tag:"Food Critic", avatar:"UR" },
  { stars:5, text:"\"From the ambiance to the taste, everything was perfect. Junoon has set the bar for fine dining up to none!\"", name:"Hira Cheema", tag:"Regular Guest", avatar:"HC" },
];

function GoldOrb({ style }: { style: React.CSSProperties }) {
  return <div style={{ position:"absolute", borderRadius:"50%", background:"radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)", pointerEvents:"none", ...style }} />;
}

function Embers() {
  const embers = [{id:0,size:3,left:"5%",delay:"0s",dur:"4s"},{id:1,size:4,left:"25%",delay:"1s",dur:"5s"},{id:2,size:2,left:"50%",delay:"0.5s",dur:"3.5s"},{id:3,size:5,left:"72%",delay:"2s",dur:"6s"},{id:4,size:3,left:"90%",delay:"0.8s",dur:"4.5s"}];
  const colors = ["#d4af37","#e8c558","#c8872a"];
  return <>{embers.map((e,i)=><div key={e.id} className="ember" style={{ width:e.size,height:e.size,left:e.left,bottom:"10%",background:colors[i%3],animationDuration:e.dur,animationDelay:e.delay,boxShadow:`0 0 ${e.size*2}px ${colors[i%3]}` }} />)}</>;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a+1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section style={{ background:"linear-gradient(160deg,#0a0c07 0%,#131908 100%)", position:"relative", overflow:"hidden", padding:"clamp(60px,8vw,120px) 0" }}>
      <GoldOrb style={{ width:400, height:400, top:"50%", left:"50%", transform:"translate(-50%,-50%)", opacity:0.25 }} />
      <Embers />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(20px,5vw,80px)" }}>
        <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.85}} style={{ textAlign:"center", marginBottom:64 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20, justifyContent:"center" }}>
            <div style={{ width:40, height:1, background:"rgba(212,175,55,0.45)" }} />
            <span style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase" }}>Testimonials</span>
            <div style={{ width:40, height:1, background:"rgba(212,175,55,0.45)" }} />
          </div>
          <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(2rem,4.5vw,3.8rem)", fontWeight:400, color:"#fff", lineHeight:1.1 }}>
            What Our <em style={{ color:"#d4af37" }}>Guests Say</em>
          </h2>
        </motion.div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {TESTIMONIALS.map((t,i)=>(
            <motion.div key={i} initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:i*0.14}} whileHover={{y:-6,boxShadow:"0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.2)"}}
              style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.02) 100%)", border:`1px solid ${active===i?"rgba(212,175,55,0.35)":"rgba(255,255,255,0.06)"}`, padding:"36px 28px", position:"relative", transition:"border-color 0.5s", backdropFilter:"blur(8px)" }}>
              <div style={{ position:"absolute", top:12, right:12, width:18, height:18, borderTop:"1px solid rgba(212,175,55,0.35)", borderRight:"1px solid rgba(212,175,55,0.35)" }} />
              <div style={{ display:"flex", gap:3, marginBottom:20 }}>
                {Array.from({length:t.stars}).map((_,si)=>(
                  <svg key={si} width="14" height="14" viewBox="0 0 14 14"><path d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z" fill="#d4af37"/></svg>
                ))}
              </div>
              <p style={{ fontFamily:"Playfair Display,serif", fontSize:15, lineHeight:1.75, color:"rgba(255,255,255,0.80)", fontStyle:"italic", marginBottom:28 }}>{t.text}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12, borderTop:"1px solid rgba(212,175,55,0.10)", paddingTop:20 }}>
                <div style={{ width:42, height:42, borderRadius:"50%", background:"rgba(212,175,55,0.12)", border:"1px solid rgba(212,175,55,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Playfair Display,serif", fontSize:13, color:"#d4af37", fontStyle:"italic" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily:"Manrope,sans-serif", fontSize:13, fontWeight:600, color:"#fff" }}>{t.name}</div>
                  <div style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.3em", color:"#d4af37", textTransform:"uppercase", marginTop:2 }}>{t.tag}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ display:"flex", gap:8, justifyContent:"center", marginTop:40 }}>
          {TESTIMONIALS.map((_,i)=><button key={i} onClick={()=>setActive(i)} style={{ width:active===i?24:6, height:6, borderRadius:3, background:active===i?"#d4af37":"rgba(212,175,55,0.20)", border:"none", cursor:"pointer", transition:"all 0.35s", padding:0 }} />)}
        </div>
      </div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,#d4af37 30%,#d4af37 70%,transparent)" }} />
    </section>
  );
}
