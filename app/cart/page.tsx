import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0806] pt-32 pb-24 px-6 md:px-12 text-junoon-cream overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/images/mughal_ambiance.png')] opacity-[0.05] bg-cover bg-center mix-blend-luminosity pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806] via-transparent to-[#0A0806] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/menu" className="flex items-center gap-2 text-junoon-gold hover:text-white transition-colors uppercase tracking-[0.2em] font-label-caps text-xs">
            <ArrowLeft size={16} /> Continue Exploring
          </Link>
        </div>

        <h1 className="font-playfair text-5xl md:text-6xl text-white font-light mb-12 border-b border-[#d4af37]/20 pb-8">
          Your <span className="italic text-[#d4af37]">Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Cart Item */}
            <div className="flex flex-col sm:flex-row gap-8 items-center bg-[#1A140F] p-6 rounded-lg border border-[#d4af37]/10">
              <div className="w-full sm:w-32 h-32 bg-junoon-dark rounded-md overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr')"}} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-playfair text-2xl text-white">Signature Spice Blend Collection</h3>
                    <p className="font-label-caps text-[#d4af37] tracking-[0.2em] text-xs uppercase mt-2">Junoon Atelier</p>
                  </div>
                  <button className="text-white/40 hover:text-red-400 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-4 bg-junoon-dark border border-[#d4af37]/20 rounded px-4 py-2">
                    <button className="text-[#d4af37] hover:text-white">-</button>
                    <span className="font-body-sm">1</span>
                    <button className="text-[#d4af37] hover:text-white">+</button>
                  </div>
                  <span className="font-playfair text-2xl text-white">Rs. 8,500</span>
                </div>
              </div>
            </div>

             {/* Cart Item */}
             <div className="flex flex-col sm:flex-row gap-8 items-center bg-[#1A140F] p-6 rounded-lg border border-[#d4af37]/10">
              <div className="w-full sm:w-32 h-32 bg-junoon-dark rounded-md overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: "url('/frames/junoon-frame-037.webp')"}} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-playfair text-2xl text-white">Private Tasting Experience</h3>
                    <p className="font-label-caps text-[#d4af37] tracking-[0.2em] text-xs uppercase mt-2">For Two Guests</p>
                  </div>
                  <button className="text-white/40 hover:text-red-400 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-4 bg-junoon-dark border border-[#d4af37]/20 rounded px-4 py-2">
                    <button className="text-[#d4af37] hover:text-white">-</button>
                    <span className="font-body-sm">1</span>
                    <button className="text-[#d4af37] hover:text-white">+</button>
                  </div>
                  <span className="font-playfair text-2xl text-white">Rs. 25,000</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#120E0A] p-8 rounded-lg border border-[#d4af37]/20 sticky top-32">
              <h3 className="font-playfair text-3xl text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 font-body-sm text-white/80 border-b border-[#d4af37]/20 pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. 33,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>Rs. 1,675</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-label-caps tracking-[0.2em] text-xs uppercase">Total</span>
                <span className="font-playfair text-4xl text-[#d4af37]">Rs. 35,175</span>
              </div>

              <Link href="/checkout" className="w-full flex items-center justify-center gap-3 py-4 bg-[#d4af37] text-junoon-dark font-label-caps uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-colors">
                <ShoppingBag size={16} /> Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
