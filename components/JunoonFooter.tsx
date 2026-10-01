"use client";
import React from "react";
import { motion } from "framer-motion";

function GoldOrb({ style }: { style: React.CSSProperties }) {
  return <div style={{ position:"absolute", borderRadius:"50%", background:"radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)", pointerEvents:"none", ...style }} />;
}

export function ReservationBanner() {
  return (
    <section style={{ background:"#d4af37", position:"relative", overflow:"hidden", padding:"clamp(40px,6vw,80px) clamp(20px,5vw,80px)" }}>
      <div style={{ position:"absolute", inset:0, background:"repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,0.04) 40px,rgba(255,255,255,0.04) 80px)", pointerEvents:"none" }} />
      <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:24, position:"relative" }}>
        <div>
          <p style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.45em", textTransform:"uppercase", color:"rgba(0,0,0,0.55)", marginBottom:8 }}>Private Concierge</p>
          <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(1.8rem,3.5vw,3rem)", fontWeight:400, color:"#0e1209", lineHeight:1.1, margin:0 }}>
            Your Table <em>Awaits</em>
          </h2>
        </div>
        <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
          <motion.a href="/reservations" whileHover={{scale:1.04}} whileTap={{scale:0.97}}
            style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 32px", background:"#0e1209", color:"#d4af37", fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.4em", textTransform:"uppercase", textDecoration:"none" }}>
            Reserve a Table
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
          <a href="tel:+923334363996" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 32px", border:"1px solid rgba(0,0,0,0.35)", color:"#0e1209", fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.4em", textTransform:"uppercase", textDecoration:"none" }}>
            +92 333 4363996
          </a>
        </div>
      </div>
    </section>
  );
}

export default function JunoonFooter() {
  const quickLinks = [["Our Story","/"],["Menu","/menu"],["Gallery","/gallery"],["Experience","/experience"],["Reservations","/reservations"]];
  return (
    <footer style={{ background:"#0a0c07", borderTop:"1px solid rgba(212,175,55,0.2)", position:"relative", overflow:"hidden" }}>
      <GoldOrb style={{ width:400, height:400, bottom:-100, right:-100, opacity:0.25 }} />
      {/* Marquee strip */}
      <div style={{ borderBottom:"1px solid rgba(212,175,55,0.12)", overflow:"hidden", padding:"12px 0" }}>
        <div className="animate-marquee" style={{ display:"flex", whiteSpace:"nowrap" }}>
          {Array.from({length:8}).map((_,i)=>(
            <span key={i} style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.45em", color:"rgba(212,175,55,0.45)", textTransform:"uppercase", flexShrink:0, paddingRight:64 }}>
              JUNOON HERITAGE LAHORE &nbsp;·&nbsp; THE SOUL OF PAKISTANI CUISINE &nbsp;·&nbsp; GULBERG III &nbsp;·&nbsp; ESTABLISHED IN LAHORE &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(48px,7vw,96px) clamp(20px,5vw,80px) 0" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, paddingBottom:56, borderBottom:"1px solid rgba(212,175,55,0.10)" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily:"Playfair Display,serif", fontSize:28, color:"#fff", letterSpacing:"0.1em", marginBottom:8 }}>JUNOON</div>
            <div style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase", marginBottom:20 }}>The Soul of Pakistani Cuisine</div>
            <p style={{ fontFamily:"Manrope,sans-serif", fontSize:13, lineHeight:1.8, color:"rgba(255,255,255,0.40)", fontWeight:300, maxWidth:320, marginBottom:28 }}>
              Have a question or wish to make a reservation? We would love to hear from you.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, color:"rgba(255,255,255,0.55)", fontFamily:"Manrope,sans-serif", fontSize:13 }}>
                <span style={{ color:"rgba(212,175,55,0.6)" }}>☎</span> +92 333 4363996
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:10, color:"rgba(255,255,255,0.55)", fontFamily:"Manrope,sans-serif", fontSize:13 }}>
                <span style={{ color:"rgba(212,175,55,0.6)" }}>✉</span> info@junoonrestaurant.pk
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase", marginBottom:24 }}>Quick Links</h4>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:14 }}>
              {quickLinks.map(([label,href])=>(
                <li key={label}>
                  <a href={href} style={{ fontFamily:"Manrope,sans-serif", fontSize:13, color:"rgba(255,255,255,0.45)", textDecoration:"none", transition:"color 0.25s", display:"flex", alignItems:"center", gap:8 }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#d4af37")}
                    onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>
                    <span style={{ width:16, height:1, background:"rgba(212,175,55,0.35)", display:"inline-block", flexShrink:0 }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h4 style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase", marginBottom:24 }}>Opening Hours</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[["Lunch & High Tea","12:30 – 04:30 PM"],["Dinner Service","07:00 – 12:00 AM"],["Private Dining","By Reservation"]].map(([label,time])=>(
                <div key={label}>
                  <div style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.2em", color:"rgba(255,255,255,0.30)", textTransform:"uppercase", marginBottom:2 }}>{label}</div>
                  <div style={{ fontFamily:"Playfair Display,serif", fontSize:14, color:"#fff", fontStyle:"italic" }}>{time}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Follow */}
          <div>
            <h4 style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.45em", color:"#d4af37", textTransform:"uppercase", marginBottom:24 }}>Follow Us</h4>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:24 }}>
              {[["https://instagram.com/junoonrestaurant","IG"],["#","FB"],["#","TK"]].map(([href,label])=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width:36, height:36, border:"1px solid rgba(212,175,55,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(212,175,55,0.7)", transition:"all 0.3s", textDecoration:"none", fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.2em" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#d4af37";(e.currentTarget as HTMLAnchorElement).style.color="#0a0c07";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="transparent";(e.currentTarget as HTMLAnchorElement).style.color="rgba(212,175,55,0.7)";}}>{label}</a>
              ))}
            </div>
            <div style={{ border:"1px solid rgba(212,175,55,0.15)", padding:"14px 16px", background:"rgba(212,175,55,0.04)" }}>
              <div style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.3em", color:"rgba(212,175,55,0.6)", textTransform:"uppercase", marginBottom:6 }}>📍 Find Us</div>
              <div style={{ fontFamily:"Manrope,sans-serif", fontSize:12, color:"rgba(255,255,255,0.55)", lineHeight:1.6 }}>9-C, Block K, Gulberg III<br/>Lahore, Punjab, Pakistan</div>
              <a href="https://maps.google.com/?q=Junoon+Restaurant+Gulberg+III+Lahore" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily:"Manrope,sans-serif", fontSize:9, letterSpacing:"0.3em", color:"#d4af37", textTransform:"uppercase", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, marginTop:8 }}>Get Directions →</a>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ padding:"24px 0", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:12 }}>
          <p style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.2em", color:"rgba(255,255,255,0.25)", margin:0 }}>
            © 2025 JUNOON HOSPITALITY LAHORE. ALL RIGHTS RESERVED.
          </p>
          <div style={{ display:"flex", gap:24 }}>
            {["Privacy Policy","Terms & Etiquette","Sitemap"].map(link=>(
              <a key={link} href="#" style={{ fontFamily:"Manrope,sans-serif", fontSize:10, letterSpacing:"0.2em", color:"rgba(255,255,255,0.25)", textDecoration:"none", transition:"color 0.25s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#d4af37")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.25)")}>{link}</a>
            ))}
          </div>
          <div style={{ fontFamily:"Playfair Display,serif", fontSize:13, fontStyle:"italic", color:"rgba(212,175,55,0.4)" }}>Junoon Heritage Floor Plans</div>
        </div>
      </div>
    </footer>
  );
}
