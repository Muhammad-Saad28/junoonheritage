import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-junoon-dark flex items-center justify-center p-6 text-junoon-cream relative overflow-hidden">
      {/* Background ambient image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity" 
        style={{backgroundImage: "url('/frames/junoon-frame-290.webp')"}} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-junoon-dark via-junoon-dark/80 to-transparent" />

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-junoon-gold hover:text-white transition-colors uppercase tracking-[0.2em] font-label-caps text-xs mb-8">
          <ArrowLeft size={16} /> Back to Junoon
        </Link>
        
        <div className="bg-[#1A140F]/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-[#d4af37]/20 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-4xl text-white mb-2">Welcome Back</h1>
            <p className="text-white/60 text-sm font-label-caps tracking-[0.1em] uppercase">Access your Junoon Concierge</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-xs">Password</label>
                <Link href="#" className="text-xs text-white/50 hover:text-[#d4af37] transition-colors">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/30 outline-none focus:border-[#d4af37] transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button className="w-full py-4 mt-4 bg-[#d4af37] text-junoon-dark font-label-caps uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors">
              Sign In
            </button>
          </form>

          <p className="text-center text-white/60 text-sm mt-8">
            Don't have an account? <Link href="/signup" className="text-[#d4af37] hover:text-white transition-colors border-b border-[#d4af37]/30 pb-0.5 ml-1">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
