"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Play } from "lucide-react";

const foodImg = "client/assets/food.png";

const Hero = () => {
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Fresh & Healthy <br />
            <span className="text-green-600">Salads Every Day</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Discover a variety of nutritious and delicious salads crafted with
            farm-fresh ingredients. Perfect for your healthy lifestyle.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
              <Leaf className="mr-2 h-5 w-5" /> Order Now
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Recipe
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="relative mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={foodImg}
            alt="Fresh Salad"
            className="w-[380px] md:w-[480px] drop-shadow-2xl rounded-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
