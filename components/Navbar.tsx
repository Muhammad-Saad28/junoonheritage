"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-1";
    }
    return "font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-1000 bg-[#1A140F]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-xl opacity-100 translate-y-0">
      <div className="h-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex flex-col items-start">
            <img alt="JUNOON Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md" src="/logo.png" />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-8">
          <Link href="/" className={getLinkClasses('/')}>OUR STORY</Link>
          <Link href="/menu" className={getLinkClasses('/menu')}>MENU</Link>
          <Link href="/experience" className={getLinkClasses('/experience')}>EXPERIENCE</Link>
          <Link href="/reservations" className={getLinkClasses('/reservations')}>RESERVATIONS</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Link href="/wishlist" className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300">
              <span className="material-symbols-outlined text-[22px]">favorite</span>
            </Link>
            <Link href="/cart" className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300 relative">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#d4af37] rounded-full"></span>
            </Link>
            <Link href="/account" className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-[#d4af37] transition-all duration-300">
              <span className="material-symbols-outlined text-[22px]">person</span>
            </Link>
          </div>
          <Link href="/reservations" className="hidden sm:inline-flex items-center justify-center px-6 py-2 font-label-caps text-[12px] tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#4a582c] transition-all duration-300 shadow-sm backdrop-blur-sm ml-2">
            RESERVE
          </Link>
          
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
        <Link className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/">OUR STORY</Link>
        <Link className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/menu">MENU</Link>
        <Link className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/experience">EXPERIENCE</Link>
        <Link className="font-label-caps text-sm tracking-[0.2em] transition-colors py-4 text-white hover:text-[#d4af37]" href="/reservations">RESERVATIONS</Link>
      </div>
    </header>
  );
}
