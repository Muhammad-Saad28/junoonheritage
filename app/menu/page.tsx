import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <main className="w-full bg-junoon-dark min-h-screen pt-24 text-white">
      <Navbar />
      <section className="max-w-[1440px] mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair text-[#d4af37] mb-6">Our Menu</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            A curated selection of royal Mughal repasts and smoky signatures from the wood-fired hearths of the Indus.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Starters */}
          <div>
            <h2 className="text-3xl font-playfair text-[#d4af37] border-b border-[#d4af37]/30 pb-4 mb-8">Starters</h2>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Tandoori Jhinga</h3>
                  <p className="text-white/60 text-sm mt-2">Jumbo prawns marinated in saffron and smoked paprika</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 4,500</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Peshawari Chapli Kebab</h3>
                  <p className="text-white/60 text-sm mt-2">Minced wagyu beef with crushed pomegranate seeds</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 3,800</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Lahori Fried Fish</h3>
                  <p className="text-white/60 text-sm mt-2">Crispy battered river sole with roasted cumin</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 2,900</span>
              </div>
            </div>
          </div>

          {/* Mains */}
          <div>
            <h2 className="text-3xl font-playfair text-[#d4af37] border-b border-[#d4af37]/30 pb-4 mb-8">Signatures</h2>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Sikandari Raan</h3>
                  <p className="text-white/60 text-sm mt-2">Whole leg of spring lamb slow-roasted for 12 hours</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 12,500</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Dum Pukht Biryani</h3>
                  <p className="text-white/60 text-sm mt-2">Aged basmati rice, tender mutton, sealed with pastry</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 4,200</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-wide">Nalli Nihari</h3>
                  <p className="text-white/60 text-sm mt-2">Overnight cooked beef shank stew with bone marrow</p>
                </div>
                <span className="text-[#d4af37] font-semibold text-lg">Rs. 3,500</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
