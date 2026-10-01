import React from "react";
import Link from "next/link";
import { User, MapPin, Calendar, Heart, Clock, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0806] pt-32 pb-24 px-6 md:px-12 text-junoon-cream overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/images/mughal_ambiance.png')] opacity-[0.05] bg-cover bg-center mix-blend-luminosity pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806] via-transparent to-[#0A0806] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h1 className="font-playfair text-5xl md:text-6xl text-white font-light mb-12 border-b border-[#d4af37]/20 pb-8">
          My <span className="italic text-[#d4af37]">Account</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            <Link href="/account" className="flex items-center gap-4 py-4 px-6 bg-[#120E0A] text-white border-l-2 border-[#d4af37] font-label-caps uppercase tracking-[0.2em] text-xs transition-colors">
              <User size={16} className="text-[#d4af37]" /> Profile
            </Link>
            <Link href="/wishlist" className="flex items-center gap-4 py-4 px-6 text-white/60 hover:bg-[#1A140F] hover:text-white border-l-2 border-transparent hover:border-[#d4af37]/50 font-label-caps uppercase tracking-[0.2em] text-xs transition-colors">
              <Heart size={16} /> Wishlist
            </Link>
            <div className="pt-8 mt-8 border-t border-[#d4af37]/20">
              <button className="flex items-center gap-4 py-4 px-6 text-red-400 hover:bg-[#1A140F]/50 font-label-caps uppercase tracking-[0.2em] text-xs w-full transition-colors text-left">
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Profile Info */}
            <section className="bg-[#1A140F] p-8 rounded-lg border border-[#d4af37]/20">
              <h2 className="font-playfair text-3xl text-white mb-8 border-b border-[#d4af37]/20 pb-4">Profile Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">First Name</label>
                  <div className="text-white font-body-md bg-junoon-dark px-4 py-3 rounded border border-[#d4af37]/10">Tariq</div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Last Name</label>
                  <div className="text-white font-body-md bg-junoon-dark px-4 py-3 rounded border border-[#d4af37]/10">Rafiq</div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Email Address</label>
                  <div className="text-white font-body-md bg-junoon-dark px-4 py-3 rounded border border-[#d4af37]/10">tariq.rafiq@example.com</div>
                </div>
              </div>
              <button className="mt-8 px-8 py-3 bg-[#120E0A] text-white font-label-caps uppercase tracking-[0.2em] text-xs hover:bg-[#d4af37] hover:text-black transition-colors border border-[#d4af37]/30">
                Edit Profile
              </button>
            </section>

            {/* Upcoming Reservation */}
            <section className="bg-[#120E0A] p-8 rounded-lg border border-[#d4af37]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none" style={{backgroundImage: "url('/frames/junoon-frame-290.webp')"}} />
              <div className="relative z-10">
                <h2 className="font-playfair text-3xl text-white mb-2">Upcoming Reservation</h2>
                <p className="text-[#d4af37] font-label-caps tracking-[0.2em] uppercase text-xs mb-8">Table Salon - 4 Guests</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-junoon-dark/60 p-6 rounded border border-[#d4af37]/20 backdrop-blur-md">
                  <div>
                    <div className="text-[#d4af37] text-xs font-label-caps tracking-[0.2em] uppercase mb-1">Date</div>
                    <div className="text-white font-playfair text-xl">Oct 12, 2026</div>
                  </div>
                  <div>
                    <div className="text-[#d4af37] text-xs font-label-caps tracking-[0.2em] uppercase mb-1">Time</div>
                    <div className="text-white font-playfair text-xl">07:30 PM</div>
                  </div>
                  <div>
                    <div className="text-[#d4af37] text-xs font-label-caps tracking-[0.2em] uppercase mb-1">Status</div>
                    <div className="text-green-400 font-playfair text-xl italic">Confirmed</div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
