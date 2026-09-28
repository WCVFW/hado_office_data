"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/gallery_01.jpg", span: "col-span-1 md:col-span-2 md:row-span-2", alt: "Gallery Image 1" },
  { src: "/images/gallery_02.jpg", span: "col-span-1", alt: "Gallery Image 2" },
  { src: "/images/gallery_03.jpg", span: "col-span-1", alt: "Gallery Image 3" },
  { src: "/images/gallery_04.jpg", span: "col-span-1", alt: "Gallery Image 4" },
  { src: "/images/gallery_05.jpg", span: "col-span-1", alt: "Gallery Image 5" },
  { src: "/images/gallery_06.jpg", span: "col-span-1", alt: "Gallery Image 6" },
  { src: "/images/gallery_07.jpg", span: "col-span-1 md:col-span-2 md:row-span-2", alt: "Gallery Image 7" },
  { src: "/images/gallery_08.jpg", span: "col-span-1", alt: "Gallery Image 8" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white font-poppins text-[#111111] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair italic font-bold text-[#EFBF03] mb-4">
            Our Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-medium leading-relaxed">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#EFBF03]/0 group-hover:bg-[#EFBF03]/60 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Enlarged gallery"
              className="max-w-full max-h-full rounded shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#EFBF03] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
