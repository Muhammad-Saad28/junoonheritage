import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  // Using some frames as gallery images
  const images = [
    "/images/lahore_1940_vintage.png",
    "/images/mughal_ambiance.png",
    "/images/wood_fired_hearth.png",
    "/images/signature_biryani.png",
    "/images/lahore_1940_vintage.png",
    "/images/mughal_ambiance.png",
  ];

  return (
    <main className="relative w-full bg-[#0A0806] min-h-screen pt-32 pb-24 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/images/mughal_ambiance.png')] opacity-[0.05] bg-cover bg-center mix-blend-luminosity pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806] via-transparent to-[#0A0806] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
      <section className="max-w-[1440px] mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair text-[#d4af37] mb-6">Gallery</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            A visual journey through the flames, flavors, and elegance of Junoon.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative overflow-hidden group border border-[#d4af37]/20 shadow-lg">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#d4af37] font-playfair text-xl tracking-widest border border-[#d4af37] px-6 py-2">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
