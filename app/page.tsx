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
              <img alt="JUNOON Logo" className="h-12 w-auto object-contain drop-shadow-md" src="/logo.png" />
            </a>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xl">
            <a aria-current="page" className="font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-1" data-path="our-story" href="/">OUR STORY</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="menu" href="/menu">MENU</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="experience" href="/experience">EXPERIENCE</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="gallery" href="/gallery">GALLERY</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="reservations" href="/reservations">RESERVATIONS</a>
          </nav>
          <div className="flex items-center gap-space-md">
            <a className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm font-label-caps text-label-caps tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#4a582c] transition-all duration-300 shadow-sm backdrop-blur-sm" data-path="reservations" href="/reservations">RESERVE A TABLE</a>
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#4a582c] text-[#d4af37] transition-all duration-300 cursor-pointer shadow-sm">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
        </div>
      </header><main className="w-full bg-junoon-olive min-h-screen"><div className="w-full block">

        <section className="relative w-full h-screen bg-junoon-dark text-on-primary overflow-hidden">
          {/* Full Background Image */}
          <img id="hero-frame" alt="Hero Animation" src="/frames/junoon-frame-037.webp" className="absolute inset-0 w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-junoon-dark/40 backdrop-blur-[2px] transition-opacity duration-1000 ${animState === 'done' ? 'opacity-100' : 'opacity-0'}`}></div>

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

              {/* RIGHT TEXT */}
              <div className="lg:col-span-6 flex flex-col items-end text-right space-y-4 pt-10 lg:pt-0">
                <h2 className="font-display-md text-4xl lg:text-5xl text-junoon-cream tracking-widest uppercase">Junoon Lahore</h2>
                <p className="font-headline-sm text-xl italic text-junoon-gold">Mastery over the flame.</p>
                <div className="mt-8 flex items-center gap-6 text-junoon-cream/70 font-label-caps text-label-caps tracking-[0.2em] opacity-80">
                  <span>FLAVOUR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  <span>HERITAGE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                  <span>CRAFT</span>
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


      </div></main > <footer className="w-full bg-[#4a582c] text-on-primary border-t border-on-tertiary-container/30"><div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-2xl pb-space-xl"><div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl border-b border-on-primary-container/20 pb-space-2xl"><div className="md:col-span-5 space-y-space-md"><div className="space-y-space-xs"><span className="font-headline-md text-headline-md tracking-[0.2em] uppercase text-junoon-cream block">JUNOON</span><p className="font-label-caps text-label-caps tracking-[0.3em] text-junoon-gold uppercase">The Soul of Pakistani Cuisine</p></div><p className="font-body-md text-body-md text-junoon-cream/70 max-w-md pt-space-xs">Courtly Mughlai gastronomic heritage harmonized with contemporary Punjabi culinary art. An archival dining immersion in the heart of Gulberg III.</p></div><div className="md:col-span-3 space-y-space-sm"><h4 className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-junoon-gold">Location &amp; Hours</h4><p className="font-body-sm text-body-sm text-junoon-cream/70 leading-relaxed">9-C, Block K, Mian Mehmood Ali Kasoori Road,<br />Gulberg III, Lahore, Punjab, Pakistan</p><div className="pt-space-xs text-junoon-cream/70 font-body-sm text-body-sm"><p className="text-junoon-cream font-title-md text-title-md">Lunch &amp; High Tea: 12:30 PM – 4:30 PM</p><p className="text-junoon-cream font-title-md text-title-md">Dinner Service: 07:00 PM – 12:00 AM</p></div></div><div className="md:col-span-4 space-y-space-sm"><h4 className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-junoon-gold">Private Concierge</h4><p className="font-body-sm text-body-sm text-junoon-cream/70">For bespoke private banquets and tableside tasting itineraries:</p><div className="space-y-space-xs pt-space-xs"><a className="font-title-lg text-title-lg text-junoon-cream hover:text-junoon-gold transition-colors tracking-wide block" href="tel:+923334363996">+92 333 4363996</a><a className="font-label-caps text-label-caps text-junoon-gold hover:text-junoon-cream transition-colors tracking-[0.2em] inline-block uppercase" href="https://instagram.com/junoonrestaurant" rel="noopener noreferrer" target="_blank">Instagram: @junoonrestaurant</a></div></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-caps text-label-caps text-junoon-cream/70"><p className="tracking-[0.15em]">© 2025 JUNOON HOSPITALITY LAHORE. ALL RIGHTS RESERVED.</p><div className="flex items-center gap-space-lg tracking-[0.15em]"><a className="hover:text-junoon-cream transition-colors" data-path="our-story" href="#">ARCHIVE</a><a className="hover:text-junoon-cream transition-colors" data-path="reservations" href="/reservations">TERMS &amp; ETIQUETTE</a><a className="hover:text-junoon-cream transition-colors" data-path="experience" href="/experience">ATELIER</a></div></div></div></footer>
    </>
  );
}
