import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-junoon-dark pt-32 pb-24 px-6 md:px-12 text-junoon-cream flex justify-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Form */}
        <div className="space-y-12">
          <div>
            <Link href="/cart" className="flex items-center gap-2 text-junoon-gold hover:text-white transition-colors uppercase tracking-[0.2em] font-label-caps text-xs mb-8">
              <ArrowLeft size={16} /> Return to Cart
            </Link>
            <h1 className="font-playfair text-4xl md:text-5xl text-white font-light">
              Secure <span className="italic text-[#d4af37]">Checkout</span>
            </h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-6 border-b border-[#d4af37]/20 pb-4">Contact Information</h2>
              <div className="space-y-4">
                <input type="email" placeholder="Email Address" className="w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="news" className="accent-[#d4af37]" />
                  <label htmlFor="news" className="text-sm text-white/60">Keep me updated on news and exclusive offers</label>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-6 border-b border-[#d4af37]/20 pb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                <input type="text" placeholder="Address" className="col-span-2 w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                <input type="text" placeholder="City" className="w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                <input type="text" placeholder="Postal Code" className="w-full bg-[#1A140F] border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
              </div>
            </section>

            <section>
              <h2 className="font-label-caps text-[#d4af37] tracking-[0.2em] uppercase text-sm mb-6 border-b border-[#d4af37]/20 pb-4">Payment</h2>
              <div className="bg-[#1A140F] border border-[#d4af37]/20 rounded p-6">
                <div className="flex items-center gap-3 mb-6 text-white/60">
                  <Lock size={16} className="text-[#d4af37]" />
                  <span className="text-sm">All transactions are secure and encrypted.</span>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Expiration Date (MM/YY)" className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                    <input type="text" placeholder="Security Code (CVV)" className="w-full bg-junoon-dark border border-[#d4af37]/20 rounded p-4 text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition-colors" />
                  </div>
                </div>
              </div>
            </section>
            
            <button className="w-full py-5 bg-[#d4af37] text-junoon-dark font-label-caps uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-colors">
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="h-full">
          <div className="bg-[#4a582c] p-8 rounded-lg border border-[#d4af37]/20 sticky top-32">
            <h3 className="font-playfair text-3xl text-white mb-8 border-b border-[#d4af37]/20 pb-4">Order Summary</h3>
            
            <div className="space-y-6 mb-8 border-b border-[#d4af37]/20 pb-8">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-junoon-dark rounded border border-[#d4af37]/20 flex items-center justify-center relative overflow-hidden">
                  <img alt="Spice Blend" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr" className="opacity-70 object-cover w-full h-full absolute inset-0" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#d4af37] text-junoon-dark rounded-full flex items-center justify-center text-[10px] font-bold z-10">1</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-sm font-playfair">Signature Spice Blend</h4>
                </div>
                <div className="text-white font-playfair">Rs. 8,500</div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-junoon-dark rounded border border-[#d4af37]/20 flex items-center justify-center relative overflow-hidden">
                  <img alt="Tasting Experience" src="/frames/junoon-frame-037.webp" className="opacity-70 object-cover w-full h-full absolute inset-0" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#d4af37] text-junoon-dark rounded-full flex items-center justify-center text-[10px] font-bold z-10">1</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-sm font-playfair">Private Tasting</h4>
                </div>
                <div className="text-white font-playfair">Rs. 25,000</div>
              </div>
            </div>

            <div className="space-y-4 font-body-sm text-white/80 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 33,500</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>Rs. 1,675</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-[#d4af37]/20">
              <span className="font-label-caps tracking-[0.2em] text-xs uppercase">Total</span>
              <span className="font-playfair text-4xl text-[#d4af37]">Rs. 35,175</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
