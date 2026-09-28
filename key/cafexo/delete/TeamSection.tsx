"use client";

import React from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    name: "John Doggett",
    desc: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
    img: "/images/staff-01.jpg"
  },
  {
    name: "Jeffrey Spender",
    desc: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
    img: "/images/staff-02.jpg"
  },
  {
    name: "Monica Reyes",
    desc: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
    img: "/images/staff-03.jpg"
  }
];

export default function TeamSection() {
  return (
    <section id="our_team" className="py-24 relative z-20 font-poppins text-white overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/slider-01.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111111]/95" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4 font-playfair italic text-[#EFBF03]">
            Our Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 font-light leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {teamData.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Image */}
              <div className="w-full h-80 overflow-hidden mb-6 relative rounded-md border-4 border-transparent group-hover:border-[#EFBF03] transition-all duration-300">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-[#EFBF03] transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-6">
                {member.desc}
              </p>

              {/* Socials */}
              <ul className="flex justify-center gap-4">
                <li>
                  <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EFBF03] hover:border-[#EFBF03] transition-colors">
                    {/* FB icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EFBF03] hover:border-[#EFBF03] transition-colors">
                    {/* Twitter icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#EFBF03] hover:border-[#EFBF03] transition-colors">
                    {/* LinkedIn icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
