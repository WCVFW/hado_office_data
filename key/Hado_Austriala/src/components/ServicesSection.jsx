import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, BarChart3, Headphones, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="services" className="w-full max-w-[1200px] px-6 lg:px-12 xl:px-16 pb-20 mx-auto relative z-10 pt-10">
      
      {/* Header Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        
        {/* Left Side: Badge + Heading */}
        <div className="flex flex-col items-center max-w-xl">
          {/* Pill Badge */}
          <div className="flex items-center gap-2 bg-[#0F172A]/80 text-[#5278F6] px-4 py-2 rounded-full mb-4 font-medium text-[13px] border border-[#5278F6]/30 backdrop-blur-sm">
            <Users className="w-4 h-4" />
            <span>Your Australian Business Partner</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="font-display text-[32px] md:text-[40px] font-bold text-white mb-6 leading-tight">
            Streamlined Management for <br className="hidden md:block"/>
            <span className="text-[#E14AA8] relative inline-block">
              Modern Enterprises
            </span>
          </h2>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        
        {/* Left Side: 2x2 Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          
          {/* Card 1: HRM Services */}
          <motion.div variants={itemVariants} className="glass-card rounded-[20px] p-5 sm:p-6 flex flex-col justify-center min-h-[160px] cursor-pointer group hover:border-[#5278F6]/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center text-[#5278F6] mb-4 group-hover:scale-110 transition-transform">
              <Users strokeWidth={2.5} size={20} />
            </div>
            <h3 className="font-sans text-[18px] font-bold leading-[1.3] text-white mb-1.5 tracking-tight group-hover:text-[#5278F6] transition-colors">
              HR<br/>Services
            </h3>
            <p className="font-sans text-[13px] text-slate-400 font-medium">
              Comprehensive workforce management
            </p>
          </motion.div>

          {/* Card 2: Payroll */}
          <motion.div variants={itemVariants} className="bg-[#5278F6] rounded-[20px] p-5 sm:p-6 flex flex-col justify-center min-h-[160px] cursor-pointer group hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#020617] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <FileText strokeWidth={2.5} size={20} />
            </div>
            <h3 className="font-sans text-[18px] font-bold leading-[1.3] text-white mb-1.5 tracking-tight">
              Payroll<br/>Processing
            </h3>
            <p className="font-sans text-[13px] text-white/90 font-medium">
              Accurate, compliant, and on-time
            </p>
          </motion.div>

          {/* Card 3: Accounts */}
          <motion.div variants={itemVariants} className="glass-card rounded-[20px] p-5 sm:p-6 flex flex-col justify-center min-h-[160px] cursor-pointer group hover:border-[#5278F6]/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center text-[#5278F6] mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 strokeWidth={2.5} size={20} />
            </div>
            <h3 className="font-sans text-[18px] font-bold leading-[1.3] text-white mb-1.5 tracking-tight group-hover:text-[#5278F6] transition-colors">
              Accounts &<br/>Bookkeeping
            </h3>
            <p className="font-sans text-[13px] text-slate-400 font-medium">
              Complete financial clarity
            </p>
          </motion.div>

          {/* Card 4: Business Advisory */}
          <motion.div variants={itemVariants} className="glass-card rounded-[20px] p-5 sm:p-6 flex flex-col justify-center min-h-[160px] cursor-pointer group hover:border-[#E14AA8]/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center text-[#E14AA8] mb-4 group-hover:scale-110 transition-transform">
              <Headphones strokeWidth={2.5} size={20} />
            </div>
            <h3 className="font-sans text-[18px] font-bold leading-[1.3] text-white mb-1.5 tracking-tight group-hover:text-[#E14AA8] transition-colors">
              Business<br/>Advisory
            </h3>
            <p className="font-sans text-[13px] text-slate-400 font-medium">
              Growth strategies for your market
            </p>
          </motion.div>

        </div>

        {/* Right Side: Large Card */}
        <motion.div variants={itemVariants} className="lg:col-span-7 glass rounded-[24px] p-6 sm:p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-[#1E293B] transition-colors">
          
          {/* Subtle Dot Grid Background Pattern in Corner */}
          <div className="absolute bottom-0 left-10 w-[150px] h-[150px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkiLz48L3N2Zz4=')] opacity-30 z-0"></div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-between z-10 py-1">
            <div>
              <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-white leading-tight mb-4">Looking for a tailored strategy?</h3>
              <p className="font-sans text-[15px] font-medium leading-[1.8] text-slate-300 mb-6 pr-2">
                We understand the complexities of the Australian business environment. Let our experts handle the compliance, recruitment, and financials so you can drive your vision forward.
              </p>
            </div>
            
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5278F6] flex items-center justify-center text-white hover:scale-105 transition-all mt-auto shrink-0 group/btn">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full relative z-10 flex items-center justify-center rounded-2xl overflow-hidden mt-6 md:mt-0 ring-1 ring-[#1E293B]">
            <img 
              src="/financial_chart.png" 
              alt="Financial Dashboard" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl opacity-90 mix-blend-screen" 
            />
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default ServicesSection;
