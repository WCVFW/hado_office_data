// src/components/Hero.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat text-black flex items-center justify-center text-center min-h-[85vh]"
      style={{ backgroundImage: "url('/HeroBanner.png')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center"
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Your <span className="text-[#FFD700]">Legal & Business</span>
            <br className="hidden sm:block" />
            Solution, Simplified
          </h1>

          {/* Search Bar */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto transition-all duration-300">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search services, solutions, or topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow w-full px-6 py-4 rounded-lg shadow-md border border-gray-300 text-gray-700 text-base sm:text-lg outline-none placeholder-gray-500 focus:ring-2 focus:ring-[#C22B5A]"
              style={{ minHeight: "60px" }}
            />

            {/* Search Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#C22B5A] text-white font-semibold text-base sm:text-lg shadow-md hover:bg-[#a3214d] transition-all duration-300">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
