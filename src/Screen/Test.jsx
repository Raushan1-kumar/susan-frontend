import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function GreenEnergyUI() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-lg font-bold flex items-center space-x-2">
          <span className="text-green-700">Green-de</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-green-700 p-2 px-3 rounded-full bg-gray-200">Green Energy</a>
          <a href="#" className="hover:text-green-700 p-2 px-3 rounded-full bg-gray-200">Consulting</a>
          <a href="#" className="hover:text-green-700 p-2 px-3 rounded-full bg-gray-200">Solar Power</a>
          <a href="#" className="hover:text-green-700 p-2 px-3 rounded-full bg-gray-200">Wind Turbine</a>
          <a href="#" className="hover:text-green-700 p-2 px-3 rounded-full bg-gray-200">Pricing</a>
        </nav>
        <button className="bg-black text-white rounded-full px-6 py-2">Get in touch</button>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-12 px-6">
        <p className="text-gray-500 text-sm flex justify-center items-center space-x-2">
          <span>🌿⚡ Providing energy solutions ⚡🌿</span>
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Visit Us At Central Green-Park
        </h1>
        <p className="text-gray-500 mt-2">
          Any ongoing maintenance costs associated with the energy-saving measures.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded-full">Contact Us</button>
          <button className="border border-gray-300 px-6 py-2 rounded-full">About Green-de</button>
        </div>
        
        {/* Floating Island Image with Shadow */}
        <motion.img 
          src="https://static.vecteezy.com/system/resources/previews/026/751/410/non_2x/floating-island-edited-of-brown-and-green-island-generative-ai-free-png.png" 
          alt="Floating Island"
          className="mx-auto mt-10 w-[100%] max-w-md drop-shadow-4xl"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>
    </div>
  );
}
