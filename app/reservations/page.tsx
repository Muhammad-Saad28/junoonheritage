import Navbar from "@/components/Navbar";

export default function ReservationsPage() {
  return (
    <main className="w-full bg-[#3e472f] min-h-screen pt-24 text-white">
      <Navbar />
      <section className="max-w-[1440px] mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-playfair text-[#d4af37] mb-6">Reservations</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Secure your table at Junoon and prepare for an unparalleled culinary journey.
          </p>
        </div>

        <div className="w-full max-w-2xl bg-[#4a582c] border border-[#d4af37]/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] m-4 opacity-50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#d4af37] m-4 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#d4af37] m-4 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] m-4 opacity-50"></div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">DATE</label>
                <input 
                  type="date" 
                  className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">TIME</label>
                <select className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors">
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                  <option>21:30</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">GUESTS</label>
                <select className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests (Contact Us)</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="contact@example.com"
                className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#d4af37] font-label-caps text-xs tracking-[0.2em] mb-2">SPECIAL REQUESTS</label>
              <textarea 
                rows={3}
                placeholder="Dietary requirements, celebrations..."
                className="bg-[#3e472f] border border-[#d4af37]/30 text-white p-3 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full mt-8 bg-[#d4af37] text-[#4a582c] font-label-caps tracking-[0.2em] py-4 hover:bg-white transition-colors duration-300 shadow-md font-semibold"
            >
              REQUEST BOOKING
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
