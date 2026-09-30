"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "OUR STORY", path: "/our-story" },
    { name: "MENU", path: "/menu" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "GALLERY", path: "/gallery" },
    { name: "RESERVATIONS", path: "/reservations" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          {/* We will replace this image tag with Next/Image and local asset once files are ready */}
          <img
            alt="JUNOON Heritage Luxury Wordmark Logo"
            className="h-8 w-auto object-contain"
            src="/junoon-logo.png"
          />
          <Link href="/" className="group flex flex-col items-start">
            <span className="font-headline-sm text-headline-sm uppercase tracking-[0.25em] text-primary group-hover:text-primary-container transition-colors">
              JUNOON
            </span>
            <span className="font-label-caps text-label-caps tracking-[0.3em] text-on-tertiary-container -mt-0.5">
              LAHORE
            </span>
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-space-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-label-caps text-label-caps tracking-[0.2em] transition-colors py-1 ${
                  isActive
                    ? "text-primary font-semibold border-b border-on-tertiary-container pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-md">
          <Link
            href="/reservations"
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm font-label-caps text-label-caps tracking-[0.2em] text-primary border border-on-tertiary-container hover:bg-primary-container hover:text-on-primary transition-all duration-300"
          >
            RESERVE A TABLE
          </Link>
        </div>
      </div>
    </header>
  );
}
