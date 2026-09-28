import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div id="about" className="w-full bg-[#020617] pt-24 pb-32 relative z-10 overflow-hidden">
      <section className="w-full max-w-[1200px] px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Background Image */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business Professionals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0F172A]/10"></div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-12 -right-4 lg:-right-12 w-[280px] sm:w-[320px] aspect-[4/3] rounded-[24px] overflow-hidden border-[6px] border-[#020617]">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-12 -right-2 lg:-right-8 bg-[#5278F6] text-white p-6 rounded-[24px] rounded-tl-none flex flex-col items-center justify-center min-w-[140px] z-20"
            >
              <span className="font-display font-black text-[36px] leading-none mb-1">25+</span>
              <span className="font-sans text-[12px] font-bold tracking-wider uppercase text-white/90 text-center">
                Years<br/>of Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mt-20 lg:mt-0"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#E14AA8]"></span>
              <span className="text-[#E14AA8] font-bold text-[13px] tracking-widest uppercase">About Hado Australia</span>
            </div>
            
            <h2 className="font-display text-[36px] md:text-[48px] font-bold text-white mb-6 leading-[1.1]">
              One of the fastest ways to gain business success
            </h2>
            
            <p className="font-sans text-[16px] leading-[1.7] text-slate-400 mb-8">
              At Hado Australia, we are dedicated to transforming how modern enterprises handle their operations. We specialize in delivering integrated HRM services, precise payroll processing, and comprehensive accounting solutions to help clients leverage the power of automation to reach their targets.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5278F6] shrink-0" />
                <span className="text-[15px] font-medium text-white/90">Emergency Solutions Anytime</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5278F6] shrink-0" />
                <span className="text-[15px] font-medium text-white/90">How to Improve Business</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5278F6] shrink-0" />
                <span className="text-[15px] font-medium text-white/90">Transparent & Affordable Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5278F6] shrink-0" />
                <span className="text-[15px] font-medium text-white/90">Reliable & Experienced Team</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5278F6] text-white hover:opacity-90 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-colors text-[14px] w-max group uppercase tracking-wide"
            >
              Get a Quote
              <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }}>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.div>
            </motion.button>

          </motion.div>
          
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
