"use client";

import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    subtitle: "Mushroom",
    title: "Balls",
    price: "220",
    oldPrice: "260",
    description: "Crispy golden-fried spheres filled with a rich, savory mushroom blend and artisanal herbs.",
    image: "/fristcard.jpeg",
    bgColor: "bg-[#7C9A3E]",
  },
  {
    id: 2,
    subtitle: "Cheese Stuffed",
    title: "Jalapenos",
    price: "270",
    oldPrice: "320",
    description: "Zesty jalapeños stuffed with a premium cheese blend, breaded and fried to perfection.",
    image: "/secondcard.jpeg",
    bgColor: "bg-[#F2A649]",
  },
  {
    id: 3,
    subtitle: "Garlic Bread",
    title: "Chicken",
    price: "340",
    oldPrice: "390",
    description: "Freshly baked garlic bread topped with tender seasoned chicken and melted mozzarella.",
    image: "/thirdcard.jpeg",
    bgColor: "bg-[#7C9A3E]",
  },
];

export default function MenuSection() {
  return (
    <section className="relative z-20 py-32 bg-white px-6 md:px-12 lg:px-24 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-28 text-center"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
            Crafted with Passion
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-dark tracking-tight mb-6">
            Signature <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#EFBF03] to-primary">Selection</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 items-stretch pt-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`group relative flex flex-col h-full rounded-3xl p-8 pt-40 ${item.bgColor} text-white shadow-xl`}
            >
              {/* Floating Image */}
              <div className="absolute -top-16 left-6 right-6 h-56 z-10 drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[2rem] transform -rotate-[10deg] border-4 border-[#333] shadow-2xl transition-transform duration-500 group-hover:-rotate-6"
                />
                
                {/* Circular Price Badge */}
                <div className="absolute -bottom-6 -right-2 w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center text-dark shadow-2xl transform rotate-[10deg] group-hover:rotate-6 transition-transform duration-500 border-2 border-dashed border-gray-200">
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Price</span>
                  <span className="text-3xl font-black text-[#7C9A3E] leading-none tracking-tighter mb-0.5">₹{item.price}</span>
                  <span className="text-xs text-gray-400 line-through font-semibold decoration-2">₹{item.oldPrice}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 relative z-20 mt-4">
                <h4 className="text-3xl font-playfair italic font-medium text-white/90 mb-[-5px]">
                  {item.subtitle}
                </h4>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                  {item.title}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3.5 h-3.5 text-[#F2A649]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-base">4.5</span>
                </div>

                <p className="text-sm text-white/90 font-medium leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>

                {/* Order Button */}
                <button className="w-36 py-3 rounded-full bg-[#3d271d] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-black hover:shadow-xl hover:-translate-y-1">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
