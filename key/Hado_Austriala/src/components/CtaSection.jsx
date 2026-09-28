import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <div id="contact" className="w-full bg-[#020617] pb-24 relative z-10">
      <section className="w-full max-w-[1200px] px-6 lg:px-12 xl:px-16 mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#0F172A] border border-[#5278F6]/30 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-8 shadow-[0_0_40px_rgba(82,120,246,0.1)]"
        >
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5278F6]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E14AA8]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

          {/* Left Column: Text & CTA */}
          <div className="relative z-10 max-w-xl text-center lg:text-left flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-[36px] md:text-[44px] font-bold leading-tight text-white mb-6"
            >
              Ready to scale your <span className="text-[#E14AA8]">Australian business</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-sans text-[16px] leading-[1.7] text-slate-300 mb-8"
            >
              Join the growing number of companies who trust Hado Australia with their financial management, recruitment, and compliance. Let's build something great together.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5278F6] text-white hover:opacity-90 px-8 py-4 rounded-full font-bold text-[16px] transition-all shadow-lg shadow-[#5278F6]/20"
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-10 w-full lg:max-w-md shrink-0 flex flex-col gap-4"
          >
            {/* Contact Card 1: Email */}
            <div className="glass-card bg-[#1E293B]/60 border border-slate-700/50 p-5 rounded-2xl flex items-center gap-4 hover:border-[#5278F6]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-[#E14AA8]" />
              </div>
              <div>
                <p className="text-[13px] text-slate-400 font-medium mb-0.5">Email Us</p>
                <p className="text-[15px] text-white font-bold">hello@hadoaustralia.com.au</p>
              </div>
            </div>

            {/* Contact Card 2: Phone */}
            <div className="glass-card bg-[#1E293B]/60 border border-slate-700/50 p-5 rounded-2xl flex items-center gap-4 hover:border-[#5278F6]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-[#5278F6]" />
              </div>
              <div>
                <p className="text-[13px] text-slate-400 font-medium mb-0.5">Call Us</p>
                <p className="text-[15px] text-white font-bold">+61 468 443 185 </p>
              </div>
            </div>

            {/* Contact Card 3: Address */}
            <div className="glass-card bg-[#1E293B]/60 border border-slate-700/50 p-5 rounded-2xl flex items-center gap-4 hover:border-[#E14AA8]/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-[#E14AA8]" />
              </div>
              <div>
                <p className="text-[13px] text-slate-400 font-medium mb-0.5">Visit Us</p>
                <p className="text-[15px] text-white font-bold">Level 4, 11 York St, Sydney NSW 2000</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </section>
    </div>
  );
};

export default CtaSection;
