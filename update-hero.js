const fs = require('fs');
const path = require('path');

const pagePath = 'e:/Own/Clients/JunonHeritage/junoon/app/page.tsx';

let html = fs.readFileSync(pagePath, 'utf8');

// The new hero section code:
const newHero = `
<section className="relative w-full h-screen bg-primary text-on-primary flex flex-col justify-between overflow-hidden">
  {/* Full Background Animation Frame */}
  <img id="hero-frame" alt="Hero Animation" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" src="/frames/junoon-frame-001.webp" />
  
  {/* Gradient Overlay when done for readability */}
  <div className={\`absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/80 transition-opacity duration-1000 \${animState === 'done' ? 'opacity-100' : 'opacity-0'}\`}></div>

  {/* Initial BBQ Text */}
  <div className={\`absolute bottom-12 right-12 text-on-tertiary-container font-display-lg tracking-[0.2em] uppercase transition-all duration-1000 \${animState === 'initial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}\`}>
    <span className="text-8xl">BBQ</span>
  </div>

  {/* Content After Animation */}
  <div className={\`relative z-10 max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop w-full h-full flex flex-col justify-center transition-all duration-1000 delay-300 \${animState === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}\`}>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center h-full pt-20">
      
      {/* Left Text */}
      <div className="lg:col-span-7 space-y-space-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block w-12 h-[2px] bg-on-tertiary-container"></span>
          <span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container uppercase">ESTABLISHED IN LAHORE • GULBERG III</span>
        </div>
        <div className="space-y-space-xs">
          <h1 className="font-display-lg text-[5rem] lg:text-[7rem] tracking-tight text-surface-bright leading-[0.9]">
            JUNOON
          </h1>
          <p className="font-headline-md text-2xl lg:text-3xl italic font-light text-secondary-fixed tracking-wide">
            The Soul of Pakistani Cuisine
          </p>
        </div>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl font-light leading-relaxed">
          An archival culinary journey traversing royal Mughal repasts and the raw, wood-fired hearths of the Indus. Where passion is distilled into heritage on the table.
        </p>
        <div className="pt-space-md flex flex-wrap items-center gap-space-md">
          <a className="px-space-lg py-space-md bg-tertiary-container text-surface-bright font-label-caps text-label-caps tracking-[0.25em] transition-all duration-300 hover:bg-on-tertiary-container hover:text-primary shadow-sm flex items-center gap-2" href="#table-reservation">
            RESERVE A TABLE
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>
          <a className="px-space-lg py-space-md bg-transparent text-secondary-fixed border border-secondary-fixed/40 font-label-caps text-label-caps tracking-[0.25em] transition-all duration-300 hover:border-on-tertiary-container hover:text-surface-bright" href="#junoon-menu">
            EXPLORE TASTING MENU
          </a>
        </div>
      </div>

      {/* Right Text */}
      <div className="lg:col-span-5 flex flex-col items-end text-right space-y-4 pt-10 lg:pt-0">
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
`;

// Extract everything from <header> to </header>
let headerRegex = /(<header[\s\S]*?<\/header>)/;
let headerMatch = html.match(headerRegex);
let headerStr = headerMatch ? headerMatch[1] : '';

// Wrap header with animation states
let newHeader = headerStr.replace('<header class="', '<header className={`');
newHeader = newHeader.replace('bg-surface/85', 'bg-surface/85 ${animState === "done" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}');

// Extract everything from <main>
let mainRegex = /(<main[\s\S]*?)<\/main>/;
let mainMatch = html.match(mainRegex);
let mainContent = mainMatch[1];

// We need to replace the old section with the new hero
// The old hero starts at <section class="relative w-full min-h-[92vh] and ends at </section> before the next section
let oldHeroRegex = /<section className="relative w-full min-h-\[92vh\][\s\S]*?<\/section>/;
mainContent = mainContent.replace(oldHeroRegex, newHero);

// Rewrite page.tsx
const newPageTsx = \`"use client";
import React, { useEffect, useState } from 'react';

export default function Page() {
  // 'initial' (BBQ text), 'playing' (animating frames), 'done' (show UI)
  const [animState, setAnimState] = useState('initial'); 
  
  // Disable scroll while animating
  useEffect(() => {
    if (animState !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [animState]);

  // Frame animation logic
  useEffect(() => {
    const frameImg = document.getElementById('hero-frame') as HTMLImageElement;
    if (!frameImg) return;
    
    let currentFrame = 1;
    const totalFrames = 300; 
    let intervalId: NodeJS.Timeout;

    // Start delay to show BBQ text
    const initialDelay = setTimeout(() => {
      setAnimState('playing');
      
      // Start frame sequence
      intervalId = setInterval(() => {
        if (currentFrame >= totalFrames) {
          clearInterval(intervalId);
          setAnimState('done');
          return;
        }
        currentFrame++;
        const frameString = currentFrame.toString().padStart(3, '0');
        frameImg.src = \`/frames/junoon-frame-\${frameString}.webp\`; 
      }, 40); // 40ms = 25fps
      
    }, 2000); // Hold BBQ text for 2 seconds

    return () => {
      clearTimeout(initialDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      \${newHeader}
      \${mainContent}
      </main>
      \${html.split('</main>')[1]} // Footer and rest
    </>
  );
}
\`;

fs.writeFileSync(pagePath, newPageTsx);
console.log("Page updated with intro animation logic.");
