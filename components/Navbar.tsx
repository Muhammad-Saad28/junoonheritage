"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-1";
    }
    return "font-label-caps text-label-caps tracking-[0.2em] text-white/75 hover:text-[#d4af37] transition-colors py-1";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-1000 bg-[#4a582c]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-xl opacity-100 translate-y-0">
      <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between px-6">
        <div className="flex items-center gap-space-md">
          <Link href="/" className="group flex flex-col items-start">
            <img alt="JUNOON Logo" className="h-20 w-auto object-contain drop-shadow-md" src="/logo.png" />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-8">
          <Link href="/" className={getLinkClasses('/')}>OUR STORY</Link>
          <Link href="/menu" className={getLinkClasses('/menu')}>MENU</Link>
          <Link href="/experience" className={getLinkClasses('/experience')}>EXPERIENCE</Link>
          <Link href="/gallery" className={getLinkClasses('/gallery')}>GALLERY</Link>
          <Link href="/reservations" className={getLinkClasses('/reservations')}>RESERVATIONS</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/reservations" className="hidden sm:inline-flex items-center justify-center px-6 py-2 font-label-caps text-[12px] tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#4a582c] transition-all duration-300 shadow-sm backdrop-blur-sm">
            RESERVE A TABLE
          </Link>
          <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#4a582c] text-[#d4af37] transition-all duration-300 cursor-pointer shadow-sm">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
