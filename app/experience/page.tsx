import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <main className="w-full bg-junoon-dark min-h-screen pt-24 text-white">
      <Navbar />
      <section className="max-w-[1440px] mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair text-[#d4af37] mb-6">The Experience</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            More than just dining, Junoon is an immersion into the rich, untamed culinary heritage of Pakistan. 
            From the roaring wood-fired hearths to the meticulous spices hand-ground daily, every element is designed to awaken the senses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="aspect-square bg-[#1A140F] flex items-center justify-center overflow-hidden border border-[#d4af37]/20 shadow-2xl">
            <img src="/frames/junoon-frame-150.webp" alt="Wood-fired hearth" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="px-8">
            <h2 className="text-4xl font-playfair text-[#d4af37] mb-6">The Hearth</h2>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              At the heart of Junoon is our open fire. We believe that true Pakistani BBQ cannot be replicated with modern gas or electric grills. Our meats are slow-cooked over aged wood and charcoal, allowing the natural smoke to infuse deep into every bite.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              Watch as our masterful chefs command the flames, turning simple, high-quality ingredients into smoky, caramelized perfection.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-32">
          <div className="px-8 order-2 md:order-1">
            <h2 className="text-4xl font-playfair text-[#d4af37] mb-6">The Ambiance</h2>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              Step into an environment where luxury meets heritage. Our dining room features hand-carved woodwork, rich textures, and warm, moody lighting that echoes the glow of embers. 
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              Whether you are seated at an intimate table or in our grand dining hall, the atmosphere at Junoon is crafted to make every meal feel like a royal banquet.
            </p>
          </div>
          <div className="aspect-square bg-[#1A140F] flex items-center justify-center overflow-hidden border border-[#d4af37]/20 shadow-2xl order-1 md:order-2">
            <img src="/frames/junoon-frame-290.webp" alt="Ambiance" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </section>
    </main>
  );
}
