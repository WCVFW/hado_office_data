"use client";

import React from "react";
import { motion } from "framer-motion";

const contactCards = [
  {
    title: "Email us",
    description: "Drop us a line anytime.",
    actionText: "Send email",
    link: "mailto:cafexo2025@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    title: "Call us",
    description: "Speak to our friendly team.",
    actionText: "Call our team",
    link: "tel:+917200097677",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    title: "Visit us",
    description: "Visit our coffee shop.",
    actionText: "Get directions",
    link: "https://maps.google.com/?q=211, Valluvar Kottam High Rd, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    title: "Opening hours",
    description: "We are open every day.",
    actionText: "10AM – 12PM",
    link: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-32 bg-white px-6 md:px-12 lg:px-24 overflow-hidden font-poppins border-t border-gray-100">
      
      {/* CSS Dotted Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Ready for a truly extraordinary coffee experience? Let's chat about how we can help.
          </p>
        </motion.div>

        {/* 4 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col items-start h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-12">
                {card.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-8 font-medium">
                {card.description}
              </p>

              {card.link ? (
                <a 
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  {card.actionText}
                </a>
              ) : (
                <div className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 bg-white w-full sm:w-auto cursor-default">
                  {card.actionText}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links below */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex gap-4"
        >
          <a href="https://www.instagram.com/cafexo_nungambakkam/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f25c54] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61584341062965" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f25c54] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
