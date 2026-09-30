"use client";
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
    
    let currentFrame = 1;
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
      </header><main className="w-full bg-surface min-h-screen"><div className="flex flex-col w-full">

<section className="relative w-full h-screen bg-primary text-on-primary overflow-hidden">
  {/* Full Background Image */}
  <img id="hero-frame" alt="Hero Animation" src="/frames/junoon-frame-001.webp" className="absolute inset-0 w-full h-full object-cover" />
  <div className={`absolute inset-0 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-1000 ${animState === 'done' ? 'opacity-100' : 'opacity-0'}`}></div>
  
  {/* Initial BBQ Text */}
  <div className={`absolute bottom-8 right-8 text-surface-bright font-display-lg text-6xl md:text-[8rem] tracking-widest transition-all duration-1000 ${animState === 'initial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
    BBQ
  </div>

  {/* Content After Animation */}
  <div className={`relative z-10 w-full h-full min-h-screen flex items-center max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop transition-all duration-1000 delay-300 ${animState === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop w-full items-center">
      
      {/* LEFT TEXT */}
      <div className="lg:col-span-6 space-y-space-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block w-8 h-[1px] bg-on-tertiary-container"></span>
          <span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">ESTABLISHED IN LAHORE • GULBERG III</span>
        </div>
        <div className="space-y-space-xs">
          <h1 className="font-display-lg text-display-lg tracking-tight text-surface-bright leading-[0.95]">JUNOON</h1>
          <p className="font-headline-md text-headline-md italic font-light text-secondary-fixed tracking-wide">The Soul of Pakistani Cuisine</p>
        </div>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl font-light">
          An archival culinary journey traversing royal Mughal repasts and the raw, wood-fired hearths of the Indus.
        </p>
        <div className="pt-space-md flex flex-wrap items-center gap-space-md">
          <a className="px-space-lg py-space-md bg-tertiary-container text-surface-bright font-label-caps text-label-caps tracking-[0.25em] transition-all duration-300 hover:bg-on-tertiary-container hover:text-primary shadow-sm flex items-center gap-2" href="#table-reservation">
            RESERVE A TABLE
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="lg:col-span-6 flex flex-col items-end text-right space-y-4 pt-10 lg:pt-0">
        <h2 className="font-display-md text-4xl lg:text-5xl text-surface-bright tracking-widest uppercase">Junoon Lahore</h2>
        <p className="font-headline-sm text-xl italic text-on-tertiary-container">Mastery over the flame.</p>
        <div className="mt-8 flex items-center gap-6 text-on-primary-container font-label-caps text-label-caps tracking-[0.2em] opacity-80">
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

<section className="w-full bg-inverse-surface text-surface-bright py-space-2xl relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-on-tertiary-container/20 pb-space-lg">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">PROVENANCE &amp; TERRITORY</span>
<span className="font-body-sm text-body-sm text-secondary-fixed">TERROIR OF THE FIVE RIVERS</span>
</div>
<div className="py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<h2 className="lg:col-span-8 font-headline-lg text-headline-lg lg:text-display-md tracking-tight uppercase leading-[1.15]">
          FROM OUR LAND<br/>
<span className="text-on-tertiary-container italic font-normal font-headline-lg lg:text-display-md">TO YOUR TABLE.</span>
</h2>
<div className="lg:col-span-4 space-y-space-sm">
<p className="font-body-md text-body-md text-secondary-fixed-dim">
            The soul of Pakistan resides within its slow fires: iron karahis singing with crushed coriander, stone tandoors blistering royal flatbreads, and ancestral recipes guarded like palace secrets.
          </p>
<div className="flex items-center gap-4 text-on-tertiary-container font-label-caps text-label-caps tracking-[0.2em]">
<span>INDUS BASIN HEIRLOOMS</span>
<span className="text-surface-bright">→</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface text-on-surface py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

<div className="lg:col-span-5 space-y-space-md sticky top-28">
<div className="flex items-center gap-2 text-on-tertiary-container">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
<span className="font-label-caps text-label-caps tracking-[0.25em] uppercase">OUR CREED</span>
</div>
<blockquote className="font-display-md text-display-md leading-[1.1] text-primary">
            “Food is memory.<br/>
            Food is culture.<br/>
<span className="italic text-on-tertiary-container font-normal">Food is Junoon.</span>”
          </blockquote>
<p className="font-label-caps text-label-caps tracking-[0.2em] text-secondary">
            CHEF PATRON &amp; GASTRONOMIC ARCHIVIST
          </p>
</div>

<div className="lg:col-span-7 space-y-space-lg lg:pl-space-xl border-l border-surface-container-highest">
<div className="space-y-space-md">
<span className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">01 / HISTORIC CONTEXT</span>
<h3 className="font-headline-md text-headline-md text-primary">The Architecture of Punjabi &amp; Courtly Hospitality</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
              Junoon was conceived not merely as a dining room, but as a living museum for the palate. Lahore’s identity has always been forged around midnight banquets, copper degs smoking over charcoal embers, and hospitality elevated into sacred ceremonial performance.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg pt-space-sm">
<div className="space-y-space-xs bg-surface-container p-space-md border-t-2 border-on-tertiary-container">
<span className="font-headline-sm text-headline-sm text-primary">Artisanal Ghee &amp; Spices</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cold-churned butter from Sahiwal pasturelands paired with sun-dried whole spices freshly pulverized in volcanic mortar stones every morning.</p>
</div>
<div className="space-y-space-xs bg-surface-container p-space-md border-t-2 border-on-tertiary-container">
<span className="font-headline-sm text-headline-sm text-primary">Ancestral Vessels</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cast heavy-gauge iron woks, pure beaten brass degs, and unglazed terracotta handis preserving temperature and aromatic steam.</p>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between border-t border-surface-container-highest">
<span className="font-body-sm text-body-sm text-secondary italic">"To taste without memory is merely feeding; Junoon is remembrance."</span>
<span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">LAHORE HERITAGE REGISTRY</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-2xl overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-space-lg">

<div className="lg:col-span-8 relative">
<div className="relative w-full aspect-[16/10] overflow-hidden shadow-xl bg-primary">
<img alt="Mutton Karahi with whole green chillies and fresh ginger strands in a seasoned iron kadai" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"/>
<div className="absolute top-4 left-4 bg-tertiary-container text-surface-bright px-3 py-1 font-label-caps text-label-caps tracking-[0.2em]">
              JUNOON SIGNATURE CROWN
            </div>
</div>

<div className="hidden md:block absolute -bottom-6 -right-6 bg-surface-bright p-space-md border border-on-tertiary-container/40 shadow-lg max-w-xs">
<span className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block">COOKING DURATION</span>
<p className="font-headline-sm text-headline-sm text-primary">140 Minutes</p>
<p className="font-body-sm text-body-sm text-secondary">Slow dum reduction in cold-pressed mustard oil and sheep-tail fat.</p>
</div>
</div>

<div className="lg:col-span-4 lg:-ml-12 relative z-10 bg-surface p-space-lg lg:p-space-xl shadow-2xl border-l-4 border-on-tertiary-container">
<div className="space-y-space-md">
<span className="font-label-caps text-label-caps tracking-[0.25em] text-on-tertiary-container uppercase">MASTERWORK RECIPE</span>
<h3 className="font-headline-lg text-headline-lg text-primary leading-tight">
              MUTTON KARAHI
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Traditional slow-cooked mountain mutton seasoned with crushed coriander seed, vine-ripened Punjab tomatoes, hand-julienned ginger, and fiery fresh green chilies in pure ghee.
            </p>
<div className="pt-space-xs flex items-center justify-between border-t border-surface-container-highest">
<span className="font-headline-sm text-headline-sm text-primary">PKR 3,850</span>
<span className="font-body-sm text-body-sm text-secondary">Serves Two to Three</span>
</div>
<div className="pt-space-sm">
<a className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-[0.25em] text-primary hover:text-on-tertiary-container transition-colors uppercase" href="#junoon-menu">
                EXPLORE KARAHI SELECTION →
              </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-2xl border-t border-b border-surface-container-highest">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">PAN-REGIONAL ARCHIVE</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">Pakistan On A Plate</h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md">
          Four distinct terrains, four gastronomic philosophies, united beneath the vaulted arches of Junoon.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="group bg-surface-container p-space-md border border-on-tertiary-container/30 hover:border-on-tertiary-container transition-all duration-300 flex flex-col justify-between h-full">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container">PROVINCE 01</span>
<span className="font-label-caps text-label-caps text-secondary">ALLUVIAL PLAINS</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">PUNJAB</h4>
<div className="h-[1px] w-full bg-on-tertiary-container/30"></div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Mustard greens, stone-ground corn rotis, overnight simmered dal makhani, and the legendary aromatic spice bazaars of Old Lahore.
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container-highest">
<span className="font-label-caps text-label-caps tracking-[0.15em] text-primary group-hover:text-on-tertiary-container transition-colors">TASTING KEY: SMOKED GHEE &amp; MACE</span>
</div>
</div>

<div className="group bg-surface-container p-space-md border border-on-tertiary-container/30 hover:border-on-tertiary-container transition-all duration-300 flex flex-col justify-between h-full">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container">PROVINCE 02</span>
<span className="font-label-caps text-label-caps text-secondary">DELTA &amp; COAST</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">SINDH</h4>
<div className="h-[1px] w-full bg-on-tertiary-container/30"></div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Fragrant saffron dum biryanis, dried plums, sour pomegranate seeds, tamarind-glazed fish, and courtly Persian-influenced gravies.
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container-highest">
<span className="font-label-caps text-label-caps tracking-[0.15em] text-primary group-hover:text-on-tertiary-container transition-colors">TASTING KEY: SAFFRON &amp; DRIED PLUM</span>
</div>
</div>

<div className="group bg-surface-container p-space-md border border-on-tertiary-container/30 hover:border-on-tertiary-container transition-all duration-300 flex flex-col justify-between h-full">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container">PROVINCE 03</span>
<span className="font-label-caps text-label-caps text-secondary">HIGHLANDS &amp; DESERT</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">BALOCHISTAN</h4>
<div className="h-[1px] w-full bg-on-tertiary-container/30"></div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Ancient Sajji roasted over open willow embers, whole lamb seasoned with raw rock salt, and stone-baked kaak bread of pastoral nomads.
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container-highest">
<span className="font-label-caps text-label-caps tracking-[0.15em] text-primary group-hover:text-on-tertiary-container transition-colors">TASTING KEY: WILLOW WOOD &amp; ROCK SALT</span>
</div>
</div>

<div className="group bg-surface-container p-space-md border border-on-tertiary-container/30 hover:border-on-tertiary-container transition-all duration-300 flex flex-col justify-between h-full">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container">PROVINCE 04</span>
<span className="font-label-caps text-label-caps text-secondary">FRONTIER PASSES</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary">KHYBER</h4>
<div className="h-[1px] w-full bg-on-tertiary-container/30"></div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Shinwari salt-charred mutton chops, Peshawar Chapli kebabs pressed with marrow fat, and wild cardamom green kahwa infusions.
            </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container-highest">
<span className="font-label-caps text-label-caps tracking-[0.15em] text-primary group-hover:text-on-tertiary-container transition-colors">TASTING KEY: ANIMAL FAT &amp; WILD MINT</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-2xl" id="junoon-menu">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">CULINARY COMPENDIUM</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">The Junoon Table</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Prepared continuously over live coals and authentic earthen clay tandoors.</p>
</div>

<div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-space-xl border-b border-on-tertiary-container/20 pb-4 overflow-x-auto">
<button className="px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] bg-primary text-on-primary">ALL SELECTIONS</button>
<button className="px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">KARAHI &amp; DEG</button>
<button className="px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">BBQ &amp; GRILL</button>
<button className="px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">BREADS OF THE TANDOOR</button>
<button className="px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">SWEET ARCHIVES</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-space-2xl gap-y-space-md">

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Dum Pukht Mutton Karahi</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 3,850</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Slow-cooked tender shank &amp; chops in heavy cast iron kadai with organic ginger slivers &amp; desi green chilies.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">House Specialty • Punjab Heartland</span>
</div>

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Shinwari Salted Lamb Chops</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 4,200</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Wood-fired rib chops seasoned exclusively with rock salt, coarse black peppercorn, and indigenous lamb-tallow crust.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">Live Hearth • Tribal Khyber</span>
</div>

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Reshmi Chicken Seekh Kabab</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 2,100</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Silk-textured minced chicken infused with clotted dairy cream, mace blossoms, and powdered green cardamom.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">Courtly Mughlai • Delhi Durbar</span>
</div>

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Shahi Daal Junoon (Makhani)</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 1,650</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Overnight slow-simmered black lentils gently smoked over charcoal with artisanal white butter &amp; tomato confit.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">36-Hour Reduction • Vegetarian Fine Art</span>
</div>

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Zafrani Sheermal &amp; Roghani</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 450</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kashmiri saffron milk-glazed tandoori flatbread studded with toasted sesame seeds and brushed with melted clarified ghee.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">Clay Tandoor • Royal Breads</span>
</div>

<div className="py-space-sm border-b border-on-tertiary-container/20 space-y-1">
<div className="flex items-baseline justify-between gap-4">
<h4 className="font-headline-sm text-headline-sm text-primary tracking-wide">Matka Kheer &amp; Gold Vark</h4>
<div className="flex-1 border-b border-dotted border-on-tertiary-container/40"></div>
<span className="font-headline-sm text-headline-sm text-tertiary-container font-semibold">PKR 850</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Thickened buffalo milk rice pudding chilled in earthen clay cups, infused with saffron threads and edible 24k silver vark.</p>
<span className="font-label-caps text-[0.625rem] tracking-[0.15em] text-on-tertiary-container uppercase">Pate de Riz • Heritage Sweet</span>
</div>
</div>

<div className="mt-space-xl text-center">
<a className="inline-flex items-center gap-3 px-space-lg py-space-sm border border-on-tertiary-container text-primary font-label-caps text-label-caps tracking-[0.25em] hover:bg-primary hover:text-on-primary transition-all duration-300" href="#junoon-menu">
          DOWNLOAD COMPLETE A LA CARTE FOLIO
          <span className="material-symbols-outlined text-[18px]">download</span>
</a>
</div>
</div>
</section>

<section className="w-full bg-primary text-on-primary py-space-2xl relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="relative w-full aspect-[21/9] min-h-[460px] overflow-hidden shadow-2xl">
<img alt="Grand dining room at Junoon Lahore with majestic arches, crystal chandeliers, and velvet seating" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
<div className="absolute inset-0 p-space-md md:p-space-xl flex flex-col justify-between">
<div className="flex flex-wrap items-center justify-between gap-4">
<span className="bg-primary/80 backdrop-blur-md px-3 py-1 font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container">
              GULBERG III ARCHITECTURAL INTERIOR
            </span>
<span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.2em]">PRIVATE SALONS AVAILABLE</span>
</div>
<div className="max-w-2xl space-y-space-sm">
<h2 className="font-display-md text-display-md leading-none text-surface-bright uppercase">
              THE ART OF<br/>THE TABLE.
            </h2>
<p className="font-body-md text-body-md text-on-primary-container max-w-lg">
              Carved sandstone arches, soft amber illumination, and hand-stitched tapestries designed as an ode to the Mughal royal court at dusk.
            </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-space-md pt-space-xl text-center border-t border-on-tertiary-container/20 mt-space-xl">
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container block">CRAFT</span>
<span className="font-label-caps text-label-caps text-secondary-fixed">Hand-carved Jali</span>
</div>
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container block">FAMILY</span>
<span className="font-label-caps text-label-caps text-secondary-fixed">Generational Sharing</span>
</div>
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container block">TRADITION</span>
<span className="font-label-caps text-label-caps text-secondary-fixed">Courtly Protocols</span>
</div>
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container block">FLAVOUR</span>
<span className="font-label-caps text-label-caps text-secondary-fixed">Pure Clarified Fats</span>
</div>
<div className="space-y-1 col-span-2 md:col-span-1">
<span className="font-headline-sm text-headline-sm text-on-tertiary-container block">HOSPITALITY</span>
<span className="font-label-caps text-label-caps text-secondary-fixed">Lahori Mehmaan-Nawazi</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex items-center justify-between mb-space-xl">
<div>
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">VISUAL ARCHIVE</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">A Glimpse of Junoon</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 font-label-caps text-label-caps tracking-[0.2em] text-primary hover:text-on-tertiary-container transition-colors" href="#">
          CURATED LOOKBOOK →
        </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">

<div className="md:col-span-7 relative group overflow-hidden bg-primary aspect-[4/3] md:aspect-auto">
<img alt="Guests conversing beneath warm antique lamps in the vaulted dining hall of Junoon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr"/>
<div className="absolute bottom-4 left-4 right-4 bg-inverse-surface/80 backdrop-blur-sm p-3 text-surface-bright flex justify-between items-center">
<span className="font-label-caps text-label-caps tracking-[0.2em]">MAIN ATELIER &amp; ARCADES</span>
<span className="font-body-sm text-body-sm text-on-tertiary-container">DINNER SERVICE</span>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-gutter">
<div className="relative group overflow-hidden bg-primary aspect-[16/10]">
<img alt="Freshly garnished steaming mutton karahi served in a traditional iron vessel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"/>
<div className="absolute bottom-3 left-3 bg-inverse-surface/80 backdrop-blur-sm px-3 py-1 text-on-tertiary-container font-label-caps text-label-caps tracking-[0.2em]">
              THE IRON HEARTH
            </div>
</div>
<div className="bg-surface-container p-space-lg flex-1 flex flex-col justify-between border-l-2 border-on-tertiary-container">
<span className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em]">CANDLELIGHT &amp; BRASS</span>
<p className="font-headline-sm text-headline-sm text-primary italic font-normal">
              “In Lahore, eating is an act of communal reverence. We honor that trust with every hand-hammered platter.”
            </p>
<div className="flex items-center justify-between text-secondary font-body-sm text-body-sm pt-space-sm border-t border-surface-container-highest">
<span>TABLE 14 • RESERVED</span>
<span className="text-primary font-bold">120 COVERS DAILY</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-inverse-surface text-surface-bright py-space-2xl relative" id="table-reservation">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="max-w-4xl mx-auto space-y-space-xl">
<div className="text-center space-y-space-xs">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">PRIVATE CONCIERGE</span>
<h2 className="font-headline-lg text-headline-lg text-surface-bright uppercase">Your Table Awaits</h2>
<p className="font-body-md text-body-md text-secondary-fixed max-w-lg mx-auto">
            Bookings for lunch and dinner tasting services. For large family gatherings or exclusive salon private dining, reservations are suggested 48 hours in advance.
          </p>
</div>
<form className="space-y-space-lg bg-primary/40 backdrop-blur-md p-space-lg md:p-space-xl border border-on-tertiary-container/30" onSubmit="event.preventDefault(); alert('Your reservation request has been submitted to the Junoon Maitre d\'. You will receive confirmation via WhatsApp.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">GUEST FULL NAME</label>
<input className="w-full bg-surface-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="e.g. Mian Tariq Rafiq" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">CONTACT TELEPHONE (WHATSAPP)</label>
<input className="w-full bg-surface-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="+92 300 1234567" required="" type="tel"/>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">CALENDAR DATE</label>
<input className="w-full bg-surface-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright px-3 py-2 font-body-md text-body-md outline-none transition-colors" required="" type="date"/>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">SERVICE TIME</label>
<select className="w-full bg-primary border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright px-3 py-2 font-body-md text-body-md outline-none transition-colors" required="">
<option value="lunch-1">Lunch Service: 01:00 PM</option>
<option value="lunch-2">Lunch Service: 02:30 PM</option>
<option value="tea">Royal High Tea: 04:30 PM</option>
<option value="dinner-1">Dinner Service: 07:30 PM</option>
<option value="dinner-2">Dinner Service: 09:30 PM</option>
<option value="dinner-3">Late Seating: 11:00 PM</option>
</select>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">PARTY SIZE</label>
<select className="w-full bg-primary border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright px-3 py-2 font-body-md text-body-md outline-none transition-colors" required="">
<option value="2">2 Guests (Table Salon)</option>
<option value="4">4 Guests (Courtyard View)</option>
<option value="6">6 Guests (Arch Alcove)</option>
<option value="8">8 Guests (Heritage Banquet)</option>
<option value="12">12+ Guests (Private Diwan Suite)</option>
</select>
</div>

<div className="space-y-2">
<label className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em] block uppercase">SPECIAL REQUESTS / DIETARY</label>
<input className="w-full bg-surface-container-lowest/10 border-b border-on-tertiary-container/50 focus:border-on-tertiary-container text-surface-bright placeholder-secondary-fixed/40 px-3 py-2 font-body-md text-body-md outline-none transition-colors" placeholder="e.g. Mild spice, anniversary, private alcove" type="text"/>
</div>
</div>
<div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-on-tertiary-container/20">
<span className="font-body-sm text-body-sm text-secondary-fixed">
              Dress code: Smart Traditional or Formal Evening Elegance.
            </span>
<button className="w-full sm:w-auto px-space-xl py-space-md bg-on-tertiary-container text-primary font-label-caps text-label-caps tracking-[0.25em] font-bold hover:bg-surface-bright transition-colors uppercase" type="submit">
              CONFIRM RESERVATION
            </button>
</div>
</form>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-2xl border-b border-surface-container-highest">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-space-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-tertiary-container">photo_camera</span>
<span className="font-label-caps text-label-caps tracking-[0.25em] text-primary uppercase">@JUNOONRESTAURANT • LAHORE</span>
</div>
<a className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container hover:text-primary transition-colors" href="https://instagram.com/junoonrestaurant" rel="noopener noreferrer" target="_blank">
          FOLLOW ON INSTAGRAM →
        </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div className="aspect-square bg-primary relative group overflow-hidden">
<img alt="Overhead view of slow-cooked karahi with copper utensils" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"/>
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
<span className="font-label-caps text-[0.625rem] tracking-[0.2em] text-surface-bright">CLAY-POT TRADITION</span>
</div>
</div>
<div className="aspect-square bg-primary relative group overflow-hidden">
<img alt="Candlelit tables inside Junoon dining hall" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr"/>
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
<span className="font-label-caps text-[0.625rem] tracking-[0.2em] text-surface-bright">COURTYARD AMBIANCE</span>
</div>
</div>
<div className="aspect-square bg-primary relative group overflow-hidden">
<img alt="Garnishing the signature karahi with hand-cut coriander and ginger" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"/>
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
<span className="font-label-caps text-[0.625rem] tracking-[0.2em] text-surface-bright">CHEF’S FINISHING TOUCH</span>
</div>
</div>
<div className="aspect-square bg-primary relative group overflow-hidden">
<img alt="Guests gathered for an evening service at Junoon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr"/>
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
<span className="font-label-caps text-[0.625rem] tracking-[0.2em] text-surface-bright">MIDNIGHT BANQUETING</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">

<div className="lg:col-span-5 space-y-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">SANCTUARY &amp; ACCESS</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">Gulberg III, Lahore</h2>
</div>
<div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
<p>
              9-C, Block K, Mian Mehmood Ali Kasoori Road,<br/>
              Gulberg III, Lahore, Punjab, Pakistan
            </p>
<div className="pt-2 text-primary font-medium space-y-1">
<p>Valet Attendant available at main porch.</p>
<p>Direct Concierge: +92 333 4363996</p>
<p>Reservations Desk: reservations@junoonrestaurant.pk</p>
</div>
</div>
<div className="pt-space-xs border-t border-on-tertiary-container/20 space-y-2">
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-secondary">Lunch &amp; High Tea Service</span>
<span className="text-primary font-semibold">12:30 PM – 04:30 PM</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-secondary">Dinner Banquet Service</span>
<span className="text-primary font-semibold">07:00 PM – 12:00 AM</span>
</div>
</div>
<div className="pt-space-sm">
<a className="inline-flex items-center gap-3 px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary-container transition-colors" href="https://maps.google.com/?q=Junoon+Restaurant+Gulberg+III+Lahore" rel="noopener noreferrer" target="_blank">
              OPEN NAVIGATION MAP
              <span className="material-symbols-outlined text-[16px]">navigation</span>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="w-full aspect-[16/10] bg-inverse-surface relative overflow-hidden flex items-center justify-center p-space-lg shadow-xl" data-location="9-C, Block K, Gulberg III, Lahore, Pakistan" >

<div className="absolute inset-0 bg-primary/95 flex flex-col justify-between p-space-lg border border-on-tertiary-container/30">
<div className="flex justify-between items-start">
<div className="bg-inverse-surface/80 px-3 py-2 text-surface-bright">
<span className="font-label-caps text-label-caps tracking-[0.2em] text-on-tertiary-container block">LOCATION COORDINATES</span>
<span className="font-body-sm text-body-sm">31°31'13.4"N 74°21'31.3"E</span>
</div>
<div className="w-10 h-10 rounded-full bg-on-tertiary-container/20 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined">pin_drop</span>
</div>
</div>

<div className="text-center space-y-2">
<div className="inline-block p-4 rounded-full bg-tertiary-container/80 text-surface-bright shadow-2xl animate-bounce">
<span className="material-symbols-outlined text-[32px]">restaurant</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-surface-bright">JUNOON LAHORE</h4>
<p className="font-label-caps text-label-caps text-on-tertiary-container tracking-[0.2em]">MIAN MEHMOOD ALI KASOORI ROAD</p>
</div>
<div className="flex justify-between items-end text-secondary-fixed font-label-caps text-[0.6875rem] tracking-[0.15em]">
<span>DISTANCE FROM LIBERTY CHOWK: 1.2 KM</span>
<span>VALET CONCIERGE OPEN</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main><footer className="w-full bg-primary text-on-primary border-t border-on-tertiary-container/30"><div className="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-2xl pb-space-xl"><div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl border-b border-on-primary-container/20 pb-space-2xl"><div className="md:col-span-5 space-y-space-md"><div className="space-y-space-xs"><span className="font-headline-md text-headline-md tracking-[0.2em] uppercase text-surface-bright block">JUNOON</span><p className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">The Soul of Pakistani Cuisine</p></div><p className="font-body-md text-body-md text-on-primary-container max-w-md pt-space-xs">Courtly Mughlai gastronomic heritage harmonized with contemporary Punjabi culinary art. An archival dining immersion in the heart of Gulberg III.</p></div><div className="md:col-span-3 space-y-space-sm"><h4 className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-tertiary-container">Location &amp; Hours</h4><p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">9-C, Block K, Mian Mehmood Ali Kasoori Road,<br/>Gulberg III, Lahore, Punjab, Pakistan</p><div className="pt-space-xs text-on-primary-container font-body-sm text-body-sm"><p className="text-surface-bright font-title-md text-title-md">Lunch &amp; High Tea: 12:30 PM – 4:30 PM</p><p className="text-surface-bright font-title-md text-title-md">Dinner Service: 07:00 PM – 12:00 AM</p></div></div><div className="md:col-span-4 space-y-space-sm"><h4 className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-tertiary-container">Private Concierge</h4><p className="font-body-sm text-body-sm text-on-primary-container">For bespoke private banquets and tableside tasting itineraries:</p><div className="space-y-space-xs pt-space-xs"><a className="font-title-lg text-title-lg text-surface-bright hover:text-on-tertiary-container transition-colors tracking-wide block" href="tel:+923334363996">+92 333 4363996</a><a className="font-label-caps text-label-caps text-on-tertiary-container hover:text-surface-bright transition-colors tracking-[0.2em] inline-block uppercase" href="https://instagram.com/junoonrestaurant" rel="noopener noreferrer" target="_blank">Instagram: @junoonrestaurant</a></div></div></div><div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-caps text-label-caps text-on-primary-container"><p className="tracking-[0.15em]">© 2025 JUNOON HOSPITALITY LAHORE. ALL RIGHTS RESERVED.</p><div className="flex items-center gap-space-lg tracking-[0.15em]"><a className="hover:text-surface-bright transition-colors" data-path="our-story" href="#">ARCHIVE</a><a className="hover:text-surface-bright transition-colors" data-path="reservations" href="/reservations">TERMS &amp; ETIQUETTE</a><a className="hover:text-surface-bright transition-colors" data-path="experience" href="/experience">ATELIER</a></div></div></div></footer>
    </>
  );
}
