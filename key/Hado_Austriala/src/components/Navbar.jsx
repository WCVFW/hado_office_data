import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;
          
          if (currentScrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          if (Math.abs(delta) > 10) {
            if (delta > 0 && currentScrollY > 100) {
              setIsVisible(false);
              setMobileMenuOpen(false); // Close mobile menu when scrolling down
            } else {
              setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 w-full flex justify-center z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[120%] opacity-0'
      } ${
        isScrolled 
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-slate-800/50 py-3 sm:py-4' 
          : 'pt-4 sm:pt-6 bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] px-6 lg:px-12 xl:px-16 flex">
        <nav className="w-full transition-all duration-300 relative flex items-center justify-between bg-transparent">
        
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          {/* 8-Petal Flower Logo */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 text-[#5278F6] fill-current">
            <path d="M16 2L2 9L16 16L30 9L16 2Z" />
            <circle cx="23.07" cy="8.93" r="3.5" />
            <circle cx="26" cy="16" r="3.5" />
            <circle cx="23.07" cy="23.07" r="3.5" />
            <circle cx="16" cy="26" r="3.5" />
            <circle cx="8.93" cy="23.07" r="3.5" />
            <circle cx="6" cy="16" r="3.5" />
            <circle cx="8.93" cy="8.93" r="3.5" />
            <circle cx="16" cy="16" r="3.5" />
          </svg>
          <span className="text-[18px] font-extrabold tracking-tighter text-white flex items-center">
            LO<span className="w-[18px] h-[10px] border-[2px] border-white rounded-full mx-[2px] inline-block"></span>O
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-['Inter',_sans-serif] text-[14px] font-medium text-white/90">
          <div className="relative flex flex-col items-center">
            <a href="#" className="transition-colors text-white">Home</a>
            <div className="w-[4px] h-[4px] bg-[#5278F6] rounded-full absolute -bottom-1.5"></div>
          </div>
          
          {/* Services Link (No Dropdown) */}
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>

          <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Section */}
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          
          {/* CTA Button */}
          <a href="#contact" className="bg-[#5278F6] hover:opacity-90 text-white pl-4 pr-1.5 py-1.5 rounded-full transition-all active:scale-95 font-['Inter',_sans-serif] text-[13px] sm:text-[14px] font-bold flex items-center gap-2">
            <span className="hidden sm:inline">Consult Now</span>
            <span className="sm:hidden">Consult</span>
            <div className="w-6 h-6 rounded-full bg-[#020617]/20 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:bg-slate-800 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-2 right-2 mt-2 bg-[#0F172A]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-3 z-20 flex flex-col gap-1 md:hidden">
            <a href="#" className="px-4 py-3 hover:bg-slate-800/50 text-white rounded-xl transition-colors font-medium text-[14px]">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-slate-800/50 text-[#5278F6] rounded-xl transition-colors font-medium text-[14px]">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-slate-800/50 text-white rounded-xl transition-colors font-medium text-[14px]">About Us</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 hover:bg-slate-800/50 text-white rounded-xl transition-colors font-medium text-[14px]">Contact</a>
          </div>
        )}
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
