"use client";

import { motion } from "framer-motion";
const services = [
  {
    title: "Cinematic Weddings",
    description: "Premium cinematic shoots with artistic excellence."
  },
  {
    title: "Pre-Wedding",
    description: "Romantic pre-wedding storytelling with cinematic feel."
  },
  {
    title: "Maternity",
    description: "Beautiful maternity moments captured with elegance."
  },
  {
    title: "Portraits",
    description: "Creative portrait photography with artistic lighting."
  },
  {
    title: "Corporate",
    description: "Professional corporate photography solutions."
  }
];

export default function Home() {
  return (
    <main
      className="text-white scroll-smooth bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
      }}
      
    >
      {/* GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-110"></div>

      <div className="relative z-10">

        {/* NAVBAR */}
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 px-10 py-4 flex justify-between items-center border-b border-yellow-600"
        >
          <h1 className="text-2xl font-bold text-yellow-500">
            Raghuveer
          </h1>

          <div className="space-x-6 text-sm md:text-base">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
        </motion.nav>
        

        {/* HOME */}
        <section
    
          id="home"
          className="h-screen flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
 className="text-5xl md:text-7xl font-extrabold font-playfair text-yellow-500 mb-6 tracking-wide drop-shadow-xl"
>
  Raghuveer Photography
</motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Turning Moments into Timeless Memories✨
          </motion.p>
        </section>
        

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-24 text-center px-6 bg-black/60 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
           At Raghuveer Photography, we believe every moment tells a story. From intimate portraits to grand celebrations, we capture the essence of your life with creativity, emotion, and a cinematic touch. Our mission is to turn fleeting moments into timeless memories that you and your loved ones will cherish forever. Every frame is crafted with passion, precision, and artistry – because your story deserves nothing but the best.
          </p>
        </motion.section>

     {/* SERVICES */}
<motion.section
  id="services"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ staggerChildren: 0.2 }}
  className="py-24 text-center px-6"
>
  <h2 className="text-4xl font-bold text-yellow-500 mb-16">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {services.map((service, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{ scale: 1.05 }}
        className="bg-black/60 border border-yellow-500 p-8 rounded-2xl 
                   hover:shadow-yellow-500/40 shadow-lg transition duration-300"
      >
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
          {service.title}
        </h3>

        <p className="text-gray-300">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>
{/* GALLERY */}
<section
  id="gallery"
  className="py-24 text-center px-6 bg-black/60 relative z-50"
>
  <h2 className="text-4xl font-bold text-yellow-500 mb-12">
    Gallery
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Array.from({ length: 21 }, (_, i) => `g${i + 1}.jpeg`).map((img, i) => {
      const isFourBySix = i < 14; // images 1–14

      return (
        <div
          key={i}
          className={`w-full rounded-xl shadow-xl overflow-hidden cursor-pointer ${
            isFourBySix ? "aspect-[2/3]" : "aspect-auto"
          }`}
        >
          <img
            src={`/images/${img}`}
            alt={`Gallery ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      );
    })}
  </div>
</section>


 {/* Why Choose Raghuveer Photography Section */}
<section className="relative z-10 px-6 py-20 text-white max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
    Why Choose Raghuveer Photography
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="bg-black/80 border-2 border-yellow-400 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Cinematic Storytelling</h3>
      <p className="text-gray-300 text-sm">
        Every shot captures your story with emotion and style.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-black/80 border-2 border-yellow-400 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Premium Quality</h3>
      <p className="text-gray-300 text-sm">
        High-resolution photography & professional editing for timeless memories.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-black/80 border-2 border-yellow-400 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Personalized Experience</h3>
      <p className="text-gray-300 text-sm">
        Tailored sessions to match your vision, style, and personality.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-black/80 border-2 border-yellow-400 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Trusted by Clients</h3>
      <p className="text-gray-300 text-sm">
        Hundreds of happy clients and memorable events captured beautifully.
      </p>
    </div>
  </div>
</section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-24 text-center px-6 bg-black/70"
        >
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">Contact</h2>
          <p className="text-gray-300 mb-2">📞 +91 9966880989</p>
          <p className="text-gray-300 mb-2">📧 raghuveerphotography786@gmail.com</p>
          <p className="text-gray-300">
            📍 Kataram, Hanamkonda, Hyderabad, Telangana
          </p>
        </motion.section>

       
        {/* BOOK YOUR SHOOT */}
        <section className="py-30 bg-black-to-r from-black via-gray-1000 to-black text-center px-6 border-t border-yellow-600">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold text-yellow-500 mb-8"
          >
            Book Your Shoot
          </motion.h2>

          <a href="/book">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px #facc15",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Book Now
            </motion.button>
          </a>
        </section>

      </div>
    </main>
  );
}
