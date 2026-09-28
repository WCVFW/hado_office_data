import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions",
      text: "The precision accounting services completely transformed our financial visibility. Their team is exceptionally responsive and deeply knowledgeable about scaling SaaS businesses.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, Apex Retail",
      text: "Outsourcing our payroll and recruitment to them was the best decision we made this year. They found us top-tier talent in record time without any administrative headaches.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Director of Ops, Horizon Group",
      text: "Their business advisory team provided strategic insights that helped us navigate a very tough market. Truly a trusted partner that cares about our long-term growth.",
      rating: 5
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-[#020617] pt-12 pb-24 relative z-10">
      <section className="w-full max-w-[1200px] px-6 lg:px-12 xl:px-16 mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-[36px] md:text-[44px] font-bold text-white mb-6">
            Trusted by <span className="text-[#E14AA8]">Australian Businesses</span>
          </h2>
          <p className="font-sans text-[16px] text-slate-400">
            See what our clients have to say about partnering with Hado Australia for their financial and HR needs.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Testimonial Cards */}
          {[
            {
              quote: "Hado completely transformed our payroll and HR. Navigating Australian compliance used to be a nightmare, but now it's fully automated and stress-free.",
              name: "Sarah T.",
              title: "Operations Director, Sydney"
            },
            {
              quote: "Their strategic accounting team acts like an in-house CFO. We've scaled our operations across three states with their continuous financial advisory.",
              name: "Marcus L.",
              title: "Founder, Melbourne Tech"
            },
            {
              quote: "Finding the right talent in this market is tough, but Hado's recruitment team brought us three top-tier candidates within a week.",
              name: "Elena R.",
              title: "HR Manager, Brisbane"
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-[#5278F6]">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                      viewport={{ once: true }}
                      className="w-5 h-5 fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </motion.svg>
                  ))}
                </div>
                
                {/* Text */}
                <p className="font-sans text-[16px] leading-[27.2px] text-slate-300 opacity-90 mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center text-[#E14AA8] font-display font-bold text-lg border border-[#E14AA8]/30 group-hover:scale-110 transition-transform">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-[18px] font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[14px] text-[#5278F6]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>
    </div>
  );
};

export default TestimonialsSection;
