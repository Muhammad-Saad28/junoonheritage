const fs = require('fs');

const htmlPath = 'e:/Own/Clients/JunonHeritage/stitch_junoon_luxury_pakistani_culinary_experience/junoon_the_soul_of_pakistani_cuisine/code.html';
const nextDir = 'e:/Own/Clients/JunonHeritage/junoon';
const pagePath = nextDir + '/app/page.tsx';

const html = fs.readFileSync(htmlPath, 'utf8');
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
    let body = bodyMatch[1];
    
    // Remove HTML comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');
    
    // Convert to JSX attributes
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/for=/g, 'htmlFor=');
    body = body.replace(/stroke-width=/g, 'strokeWidth=');
    body = body.replace(/crossorigin/g, 'crossOrigin');
    // Replace the logo in navbar
    const logoRegex = /<img alt="JUNOON Heritage Luxury Wordmark Logo"[\s\S]*?<\/a>/;
    body = body.replace(logoRegex, `<a className="group flex flex-col items-start" data-path="our-story" href="/"><img alt="JUNOON Logo" className="h-12 w-auto object-contain" src="/logo.png" /></a>`);
    
    // Set up the Hero section to have an ID so we can target it for animation, or wrap it in a client component.
    // Actually, let's just make the whole page a Client Component for now to allow effects.
    // Let's find the hero image:
    const heroImgRegex = /<img alt="Signature Mutton Karahi cooked in an authentic iron wok with fresh ginger and coriander" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https:\/\/lh3\.googleusercontent\.com\/[^"]+"\/>/;
    
    body = body.replace(heroImgRegex, `{/* HERO_IMAGE_PLACEHOLDER */}
<div id="hero-frame-container" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 relative">
  <img id="hero-frame" alt="Hero Animation" className="w-full h-full object-cover absolute inset-0" src="/frames/frame-1.jpg" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
  {/* Fallback while frames are missing */}
  <img alt="Signature Mutton Karahi cooked in an authentic iron wok with fresh ginger and coriander" className="w-full h-full object-cover absolute inset-0 -z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"/>
</div>`);

    // The form tag has an inline onsubmit which is not allowed in React like this: onsubmit="event.preventDefault(); alert('...');"
    body = body.replace(/onsubmit="event\.preventDefault\(\); alert\('([^']+)'\);"/g, `onSubmit={(e) => { e.preventDefault(); alert('$1'); }}`);
    
    const pageTsx = `"use client";
import React, { useEffect, useRef } from 'react';

export default function Page() {
  
  // Hero Animation Logic
  useEffect(() => {
    const frameImg = document.getElementById('hero-frame') as HTMLImageElement;
    if (!frameImg) return;
    
    let currentFrame = 1;
    const totalFrames = 30; // Adjust this when frames are placed
    let intervalId: NodeJS.Timeout;

    // Simple ping-pong or loop animation
    const animate = () => {
      currentFrame = currentFrame >= totalFrames ? 1 : currentFrame + 1;
      // frameImg.src = \`/frames/frame-\${currentFrame}.jpg\`; 
      // User hasn't placed them yet, so it will trigger onError and hide if they don't exist.
    };
    
    // Uncomment this when frames are ready
    // intervalId = setInterval(animate, 100); 

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      ${body}
    </>
  );
}
`;
    fs.writeFileSync(pagePath, pageTsx);
    console.log("Converted successfully to JSX.");
}
