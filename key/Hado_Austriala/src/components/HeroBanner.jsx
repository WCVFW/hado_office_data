import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[1200px] px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pb-12 w-full flex-1"
    >
      
      {/* Left Column: Text Content */}
      <div className="flex flex-col items-start text-left mt-12 md:mt-20 lg:pl-12 xl:pl-16">
        
        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-[28px] lg:text-[36px] font-semibold leading-[1.15] text-white mb-6 tracking-tight" 
        >
          Empowering Australian Businesses with <br className="hidden lg:block"/>
          <span className="text-[#E14AA8]">Smart Financial & HR Solutions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="max-w-[500px] mb-10 font-sans text-[14px] font-normal leading-[1.6] text-slate-400"
        >
          From expert recruitment to seamless payroll and precision accounting, Hado Australia delivers end-to-end business management so you can focus on scaling.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5278F6] text-white hover:opacity-90 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors text-[14px] w-full sm:w-auto justify-center group"
          >
            Get a Consultation 
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.div>
          </motion.a>
          
          <motion.a 
            href="#services"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="glass-card text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all text-[14px] w-full sm:w-auto justify-center"
          >
            <Briefcase className="w-4 h-4 text-[#E14AA8]" /> 
            Explore Services
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column: Empty (Allows Background Image to show through) */}
      <div className="w-full hidden lg:block"></div>

    </motion.main>
  );
}

export default HeroBanner;
