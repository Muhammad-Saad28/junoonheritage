"use client";
import SignatureDishes from '@/components/SignatureDishes';
import OurStoryTimeline from '@/components/OurStoryTimeline';
import WhyJunoon from '@/components/WhyJunoon';
import TasteOfLahore from '@/components/TasteOfLahore';
import OurMenu from '@/components/OurMenu';
import GallerySection from '@/components/GallerySection';
import Testimonials from '@/components/Testimonials';
import React, { useEffect, useState, useRef } from 'react';

export default function Page() {
  const [animState, setAnimState] = useState('initial');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (animState !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [animState]);

  // Hero Animation Logic
  useEffect(() => {
    const frameImg = document.getElementById('hero-frame') as HTMLImageElement;
    if (!frameImg) return;
    let currentFrame = 37;
    const totalFrames = 300;
    let intervalId: NodeJS.Timeout;

    const initialDelay = setTimeout(() => {
      setAnimState('playing');
      intervalId = setInterval(() => {
        if (currentFrame >= totalFrames) {
          clearInterval(intervalId);
          setAnimState('done');
          return;
        }
        currentFrame++;
        const frameString = currentFrame.toString().padStart(3, '0');
        frameImg.src = `/frames/junoon-frame-${frameString}.webp`;
      }, 40);
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 bg-[#4a582c]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-xl ${animState === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <a className="group flex flex-col items-start" data-path="our-story" href="/">
              <img alt="JUNOON Logo" className="h-20 w-auto object-contain drop-shadow-md" src="/logo.png" />
            </a>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xl">
            <a aria-current="page" className="font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-1" data-path="our-story" href="/">OUR STORY</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="menu" href="/menu">MENU</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="experience" href="/experience">EXPERIENCE</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="reservations" href="/reservations">RESERVATIONS</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="/wishlist" className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300">
                <span className="material-symbols-outlined text-[20px] md:text-[22px]">favorite</span>
              </a>
              <a href="/cart" className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300 relative">
                <span className="material-symbols-outlined text-[20px] md:text-[22px]">shopping_bag</span>
                <span className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 bg-[#d4af37] rounded-full"></span>
              </a>
              <a href="/account" className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300">
                <span className="material-symbols-outlined text-[20px] md:text-[22px]">person</span>
              </a>
            </div>
            <a className="hidden sm:inline-flex items-center justify-center px-6 py-2 font-label-caps text-label-caps tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#4a582c] transition-all duration-300 shadow-sm backdrop-blur-sm uppercase text-xs ml-2" data-path="reservations" href="/reservations">RESERVE A TABLE</a>
            
            {/* Hamburger Menu for Mobile */}
            <button 
              className="xl:hidden ml-2 text-[#d4af37] focus:outline-none flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`xl:hidden absolute top-20 left-0 w-full bg-[#1A140F]/95 backdrop-blur-lg border-b border-[#d4af37]/30 transition-all duration-500 overflow-hidden flex flex-col items-center ${mobileMenuOpen ? 'max-h-[400px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <a className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/">OUR STORY</a>
          <a className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/menu">MENU</a>
          <a className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/experience">EXPERIENCE</a>
          <a className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/reservations">RESERVATIONS</a>
        </div>
      </header><main className="w-full bg-junoon-olive min-h-screen"><div className="w-full block">

        <section className="relative w-full h-[100svh] bg-black text-on-primary overflow-hidden">
          {/* Full Background Image */}
          <img id="hero-frame" alt="Hero Animation" src="/frames/junoon-frame-037.webp" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-1000 ${animState === 'done' ? 'opacity-100' : 'opacity-0'}`}></div>

          {/* Initial BBQ Text */}
          <div className={`absolute bottom-8 right-8 text-junoon-cream font-display-lg text-6xl md:text-[8rem] tracking-widest transition-all duration-1000 ${animState === 'initial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            BBQ
          </div>

          {/* Content After Animation */}
          <div className={`relative z-10 w-full h-full min-h-screen flex items-center max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop transition-all duration-1000 delay-300 ${animState === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop w-full items-center">

              {/* LEFT TEXT */}
              <div className="lg:col-span-6 space-y-space-lg">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-8 h-[1px] bg-on-tertiary-container"></span>
                  <span className="font-label-caps text-label-caps tracking-[0.3em] text-junoon-gold uppercase">ESTABLISHED IN LAHORE • GULBERG III</span>
                </div>
                <div className="space-y-space-xs">
                  <h1 className="font-display-lg text-display-lg tracking-tight text-junoon-cream leading-[0.95]">JUNOON</h1>
                  <p className="font-headline-md text-headline-md italic font-light text-junoon-brown tracking-wide">The Soul of Pakistani Cuisine</p>
                </div>
                <p className="font-body-lg text-body-lg text-junoon-cream/70 max-w-xl font-light">
                  An archival culinary journey traversing royal Mughal repasts and the raw, wood-fired hearths of the Indus.
                </p>
                <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                  <a className="px-space-lg py-space-md bg-tertiary-container text-junoon-cream font-label-caps text-label-caps tracking-[0.25em] transition-all duration-300 hover:bg-on-tertiary-container hover:text-primary shadow-sm flex items-center gap-2" href="#table-reservation">
                    RESERVE A TABLE
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <OurStoryTimeline />

        {/* ═══════════════════════════════════════════════════════
    WHY JUNOON — Feature Highlights
═══════════════════════════════════════════════════════ */}
        <WhyJunoon />

        {/* ═══════════════════════════════════════════════════════
    TASTE OF LAHORE
═══════════════════════════════════════════════════════ */}
        <TasteOfLahore />

        {/* ═══════════════════════════════════════════════════════
    OUR MENU — Flavors of Tradition
═══════════════════════════════════════════════════════ */}
        <OurMenu />

        <section className="w-full bg-[#5c6c37] text-junoon-cream py-space-2xl relative" id="table-reservation">
          <div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <div className="max-w-4xl mx-auto space-y-space-xl">
              <div className="text-center space-y-space-xs">
                <span className="font-label-caps text-label-caps tracking-[0.3em] text-junoon-gold uppercase">PRIVATE CONCIERGE</span>
                <h2 className="font-headline-lg text-headline-lg text-junoon-cream uppercase">Your Table Awaits</h2>
                <p className="font-body-md text-body-md text-junoon-brown max-w-lg mx-auto">
                  Bookings for lunch and dinner tasting services. For large family gatherings or exclusive salon private dining, reservations are suggested 48 hours in advance.
                </p>
              </div>
              <form className="space-y-space-lg bg-junoon-dark/40 backdrop-blur-md p-space-lg md:p-space-xl border border-on-tertiary-container/30" onSubmit={(event) => { event.preventDefault(); alert('Your reservation request has been submitted to the Junoon Maitre d\'. You will receive confirmation via WhatsApp.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">GUEST FULL NAME</label>
                    <input className="w-full bg-junoon-olive-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="e.g. Mian Tariq Rafiq" required type="text" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">CONTACT TELEPHONE (WHATSAPP)</label>
                    <input className="w-full bg-junoon-olive-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="+92 300 1234567" required type="tel" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">CALENDAR DATE</label>
                    <input className="w-full bg-junoon-olive-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream px-3 py-2 font-body-md text-body-md outline-none transition-colors" required type="date" />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">SERVICE TIME</label>
                    <select className="w-full bg-junoon-dark border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream px-3 py-2 font-body-md text-body-md outline-none transition-colors" required>
                      <option value="lunch-1">Lunch Service: 01:00 PM</option>
                      <option value="lunch-2">Lunch Service: 02:30 PM</option>
                      <option value="tea">Royal High Tea: 04:30 PM</option>
                      <option value="dinner-1">Dinner Service: 07:30 PM</option>
                      <option value="dinner-2">Dinner Service: 09:30 PM</option>
                      <option value="dinner-3">Late Seating: 11:00 PM</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">PARTY SIZE</label>
                    <select className="w-full bg-junoon-dark border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream px-3 py-2 font-body-md text-body-md outline-none transition-colors" required>
                      <option value="2">2 Guests (Table Salon)</option>
                      <option value="4">4 Guests (Courtyard View)</option>
                      <option value="6">6 Guests (Arch Alcove)</option>
                      <option value="8">8 Guests (Heritage Banquet)</option>
                      <option value="12">12+ Guests (Private Diwan Suite)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-junoon-gold tracking-[0.2em] block uppercase">SPECIAL REQUESTS / DIETARY</label>
                    <input className="w-full bg-junoon-olive-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-junoon-cream placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="e.g. Mild spice, anniversary, private alcove" type="text" />
                  </div>
                </div>
                <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-on-tertiary-container/20">
                  <span className="font-body-sm text-body-sm text-junoon-brown">
                    Dress code: Smart Traditional or Formal Evening Elegance.
                  </span>
                  <button className="w-full sm:w-auto px-space-xl py-space-md bg-on-tertiary-container text-primary font-label-caps text-label-caps tracking-[0.25em] font-bold hover:bg-junoon-olive-bright transition-colors uppercase" type="submit">
                    CONFIRM RESERVATION
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
      </main> 
      
      <footer className="relative w-full bg-[#0A0806] text-on-primary border-t border-[#d4af37]/20 pt-24 pb-8 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[url('/images/mughal_ambiance.png')] opacity-[0.03] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806] via-transparent to-[#0A0806]"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 border-b border-[#d4af37]/20 pb-20">
            
            {/* Branding Column */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <img src="/logo.png" alt="Junoon Logo" className="w-32 h-auto opacity-90" />
                <p className="font-manrope text-sm text-white/60 max-w-sm leading-loose font-light">
                  Courtly Mughlai gastronomic heritage harmonized with contemporary Punjabi culinary art. An archival dining immersion in the heart of Gulberg III.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
              </div>
            </div>
            
            {/* Location & Hours Column */}
            <div className="md:col-span-4 space-y-8">
              <div>
                <h4 className="font-label-caps text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#d4af37]"></span> Location
                </h4>
                <p className="font-manrope text-sm text-white/70 leading-relaxed font-light">
                  9-C, Block K, Mian Mehmood Ali Kasoori Road,<br />
                  Gulberg III, Lahore, Punjab, Pakistan
                </p>
              </div>
              <div>
                <h4 className="font-label-caps text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#d4af37]"></span> Hours of Service
                </h4>
                <div className="text-white/70 font-manrope text-sm space-y-2 font-light">
                  <p className="flex justify-between border-b border-white/5 pb-2"><span>Lunch & High Tea</span> <span>12:30 PM - 4:30 PM</span></p>
                  <p className="flex justify-between border-b border-white/5 pb-2"><span>Dinner Service</span> <span>07:00 PM - 12:00 AM</span></p>
                </div>
              </div>
            </div>
            
            {/* Contact Column */}
            <div className="md:col-span-3 space-y-8">
              <div>
                <h4 className="font-label-caps text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#d4af37]"></span> Concierge
                </h4>
                <p className="font-manrope text-sm text-white/60 font-light mb-4 leading-relaxed">
                  For bespoke private banquets and tableside tasting itineraries.
                </p>
                <a className="font-playfair text-3xl text-white hover:text-[#d4af37] transition-colors block" href="tel:+923334363996">
                  +92 333 4363996
                </a>
              </div>
              <div>
                <a className="inline-flex items-center gap-2 font-label-caps text-xs text-[#d4af37] hover:text-white transition-colors tracking-[0.2em] uppercase group" href="https://instagram.com/junoonrestaurant" rel="noopener noreferrer" target="_blank">
                  Follow our journey
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
          
          {/* Giant Watermark & Footer Bottom */}
          <div className="pt-12 relative flex flex-col items-center">
            <h1 className="font-playfair text-[12vw] leading-none text-white/[0.03] select-none pointer-events-none text-center tracking-widest w-full">
              JUNOON
            </h1>
            
            <div className="absolute bottom-0 w-full flex flex-col md:flex-row items-center justify-between gap-6 font-label-caps text-[10px] md:text-xs text-white/50 uppercase pb-4">
              <p className="tracking-[0.2em] text-center md:text-left">(C) 2025 JUNOON HOSPITALITY LAHORE.</p>
              <div className="flex items-center gap-6 md:gap-10 tracking-[0.2em]">
                <a className="hover:text-[#d4af37] transition-colors" href="#">ARCHIVE</a>
                <a className="hover:text-[#d4af37] transition-colors" href="#">TERMS & ETIQUETTE</a>
                <a className="hover:text-[#d4af37] transition-colors" href="#">ATELIER</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
