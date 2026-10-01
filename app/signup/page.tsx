import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-junoon-dark flex items-center justify-center p-6 text-junoon-cream relative overflow-hidden">
      {/* Background ambient image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" 
        style={{backgroundImage: "url('/frames/junoon-frame-150.webp')"}} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-junoon-dark via-junoon-dark/80 to-transparent" />

      <div className="w-full max-w-xl relative z-10 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-junoon-gold hover:text-white transition-colors uppercase tracking-[0.2em] font-label-caps text-xs mb-8">
          <ArrowLeft size={16} /> Back to Junoon
        </Link>
        
        <div className="bg-[#1A140F]/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-[#d4af37]/20 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-4xl text-white mb-2">Join the Concierge</h1>
            <p className="text-white/60 text-sm font-label-caps tracking-[0.1em] uppercase">Exclusive reservations & culinary events</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="First name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Create Password</label>
              <input 
                type="password" 
                className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                placeholder="Choose a secure password"
              />
            </div>

            <button className="w-full py-4 mt-8 bg-[#d4af37] text-junoon-dark font-label-caps uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors">
              Create Account
            </button>
          </form>

          <p className="text-center text-white/60 text-sm mt-8">
            Already a member? <Link href="/login" className="text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 pb-0.5 ml-1">Sign In here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
