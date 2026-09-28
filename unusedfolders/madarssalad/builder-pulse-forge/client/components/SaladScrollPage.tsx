"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SaladScrollPage = () => {
  const markerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const foodImg = "client/assets/food.png";
  const leafImg1 = "client/assets/leaf 1.png";
  const leafImg2 = "client/assets/leaf 2.png";

  const sections = [
    {
      title: "Fresh Ingredients",
      desc: "Hand-picked vegetables and greens straight from the farm.",
      marker: { top: "20%", left: "15%" },
    },
    {
      title: "Organic Dressings",
      desc: "Cold-pressed and preservative-free dressings that enhance flavor.",
      marker: { top: "45%", left: "70%" },
    },
    {
      title: "Balanced Nutrition",
      desc: "Each bowl crafted with protein, fiber, and essential vitamins.",
      marker: { top: "70%", left: "40%" },
    },
    {
      title: "Colorful Mix",
      desc: "A vibrant blend of veggies, nuts, and seeds for visual delight.",
      marker: { top: "30%", left: "60%" },
    },
    {
      title: "Sustainable Sources",
      desc: "We support local farmers and eco-friendly farming practices.",
      marker: { top: "55%", left: "10%" },
    },
    {
      title: "Delicious Taste",
      desc: "Healthy eating made joyful with flavors you’ll crave.",
      marker: { top: "65%", left: "60%" },
    },
  ];

  // Auto-rotate sections every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate marker position smoothly
  useEffect(() => {
    if (markerRef.current) {
      gsap.to(markerRef.current, {
        top: sections[activeIndex].marker.top,
        left: sections[activeIndex].marker.left,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative bg-white py-36 lg:py-48">
      <div className="max-w-8xl w-full flex flex-col lg:flex-row gap-24 lg:gap-36 items-center px-6 lg:px-20">
        {/* Left Image */}
        <div className="flex-1 relative w-full lg:w-[55%]">
          <img
            src={foodImg}
            alt="Salad"
            className="w-full rounded-3xl drop-shadow-2xl object-cover max-h-[850px] lg:max-h-[950px]"
          />

          {/* Top-left Leaf */}
          <img
            src={leafImg2}
            alt="Leaf"
            className="absolute -top-20 -left-20 h-40 w-40 md:h-44 md:w-44 lg:h-48 lg:w-48 opacity-80 animate-spin-slow"
          />
          {/* Marker */}
          <div
            ref={markerRef}
            className="absolute animate-bounce"
            style={{
              top: sections[0].marker.top,
              left: sections[0].marker.left,
            }}
          >
            <img
              src="client/assets/carrot.png"
              alt="Marker"
              className="h-28 w-28 md:h-32 md:w-32 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="flex-1 w-full lg:w-[45%] text-center lg:text-left relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-700">
            {sections[activeIndex].title}
          </h2>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed lg:leading-snug">
            {sections[activeIndex].desc}
          </p>

          {/* Bottom-right Leaf */}
          <img
            src={leafImg1}
            alt="Leaf"
            className="absolute -bottom-12 -right-12 h-24 w-24 md:h-28 md:w-28 opacity-80 animate-spin-slow-reverse"
          />

          {/* Navigation Dots */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-emerald-600 to-orange-500 text-white shadow-lg scale-110 animate-pulse"
                    : "bg-gray-200 hover:bg-emerald-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladScrollPage;
