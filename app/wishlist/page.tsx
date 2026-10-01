import React from "react";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";

const WISHLIST_ITEMS = [
  {
    id: 1,
    title: "Signature Spice Blend Collection",
    subtitle: "Junoon Atelier",
    price: "Rs. 8,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpm0U9SBIZgn561FHxRfUOQUKqryofqcAuoN81_DmVrJS_s00jUiXKqgrUfo3EXyUB6EOfnzQJUF4S7xD9nStyBwco-SF1p7GhN1ErjnNaGc_DXlHgOSoioW_qGRhrOTkYBApHfMZDbDQM7rfIR1-3MSRwKNndWErxibEzmasoBaGEhfhoY8dvIV3qAgeWFYBljdPOiD58a2069L30tnnC3o08_EsdHnN5hwvAQ21OkDlt6O7I7nLr"
  },
  {
    id: 2,
    title: "Hand-crafted Terracotta Deg",
    subtitle: "Artisan Cookware",
    price: "Rs. 12,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtLeSlrzI9uYTsPGiR1VLoO81OIGxWUMFLA_V2Hxs0JUAeh2YuJTUwfx7sYWDeEV_z8rH_mEjfvU5thg_0AQiiJM-UYnsLtDLqMJjf1nB3TVJDfwN-BU7zt3RcDQG2gDZ0ChyeNIB76Tas-_55qpDNNrbamQ-ymO5J6BMiLjLVe_sh-CFjD4_fWrTFRskSaKonVnOKEV0CQuircdH6fyU95FyXmbq7bFo052Q0DNJb9PnBm-t2UULW"
  },
  {
    id: 3,
    title: "Private Tasting Experience Gift Card",
    subtitle: "For Two Guests",
    price: "Rs. 25,000",
    image: "/frames/junoon-frame-037.webp"
  }
];

export default function WishlistPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0806] pt-32 pb-24 px-6 md:px-12 text-junoon-cream overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/images/mughal_ambiance.png')] opacity-[0.05] bg-cover bg-center mix-blend-luminosity pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806] via-transparent to-[#0A0806] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/account" className="flex items-center gap-2 text-junoon-gold hover:text-white transition-colors uppercase tracking-[0.2em] font-label-caps text-xs">
            <ArrowLeft size={16} /> Back to Account
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#d4af37]/20 pb-8 gap-6">
          <h1 className="font-playfair text-5xl md:text-6xl text-white font-light">
            Your <span className="italic text-[#d4af37]">Wishlist</span>
          </h1>
          <span className="font-label-caps text-white/60 tracking-[0.2em] uppercase text-sm">
            {WISHLIST_ITEMS.length} Items Saved
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WISHLIST_ITEMS.map((item) => (
            <div key={item.id} className="group flex flex-col bg-[#1A140F] border border-[#d4af37]/10 rounded-lg overflow-hidden transition-all hover:border-[#d4af37]/40">
              <div className="relative aspect-square overflow-hidden bg-junoon-dark">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  style={{backgroundImage: `url('${item.image}')`}} 
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md border border-[#d4af37]/30 rounded-full flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-junoon-dark transition-colors z-10">
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="font-label-caps text-[#d4af37] tracking-[0.2em] text-[10px] uppercase mb-2">{item.subtitle}</p>
                <h3 className="font-playfair text-2xl text-white mb-4 flex-1">{item.title}</h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#d4af37]/10">
                  <span className="font-playfair text-xl text-white">{item.price}</span>
                  <button className="flex items-center gap-2 font-label-caps tracking-[0.2em] text-[10px] uppercase text-[#d4af37] hover:text-white transition-colors">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
