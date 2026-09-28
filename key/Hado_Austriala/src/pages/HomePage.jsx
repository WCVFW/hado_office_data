import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from '../components/Navbar';
import WaveBackground from '../components/WaveBackground';
import HeroBanner from '../components/HeroBanner';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <div className="min-h-screen bg-[#020617] font-sans flex flex-col items-center selection:bg-[#5278F6]/20 selection:text-[#5278F6]">
        
        {/* Global Navbar */}
        <Navbar />
        
        {/* Top Section with Background */}
        <div className="w-full relative overflow-hidden flex flex-col items-center pb-12 min-h-[100vh] justify-center pt-28">
          {/* The main Herobanner image covering the entire top section */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 bg-[url('/Herobanner.png')] bg-cover bg-center bg-no-repeat opacity-60 md:opacity-100" 
          ></div>
          
          {/* Dark gradient overlay: Keeps text readable on left, removes dark layer on right */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" 
          ></div>
          
          <div className="relative z-10 w-full flex flex-col items-center flex-1 w-full max-w-full justify-center">
            <HeroBanner />
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Features Section (Our Services + Guarantee) */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Final Call to Action */}
        <CtaSection />

        {/* Footer */}
        <Footer />
        
      </div>
    </ReactLenis>
  );
};

export default HomePage;
