const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldHeaderRegex = /<header className=\{\`fixed top-0[\s\S]*?<\/header>/;

const newHeader = `<header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 bg-[#4a582c]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-xl \${animState === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}\`}>
        <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <a className="group flex flex-col items-start" data-path="our-story" href="/">
              <img alt="JUNOON Logo" className="h-12 w-auto object-contain drop-shadow-md" src="/logo.png" />
            </a>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xl">
            <a aria-current="page" className="font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-1" data-path="our-story" href="#">OUR STORY</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="menu" href="#">MENU</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="experience" href="#">EXPERIENCE</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="gallery" href="#">GALLERY</a>
            <a className="font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1" data-path="reservations" href="#">RESERVATIONS</a>
          </nav>
          <div className="flex items-center gap-space-md">
            <a className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm font-label-caps text-label-caps tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#4a582c] transition-all duration-300 shadow-sm backdrop-blur-sm" data-path="reservations" href="#">RESERVE A TABLE</a>
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#4a582c] text-[#d4af37] transition-all duration-300 cursor-pointer shadow-sm">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
        </div>
      </header>`;

code = code.replace(oldHeaderRegex, newHeader);
fs.writeFileSync('app/page.tsx', code);
