import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#020617] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="w-full max-w-[1140px] px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-['Inter_Display',_'Inter_Display_Placeholder',_sans-serif] text-[24px] font-bold text-white mb-6">
              Hado<span className="text-[#5278F6]">.</span>
            </h3>
            <p className="font-['Inter',_'Inter_Placeholder',_sans-serif] text-[15px] leading-relaxed text-slate-400 mb-6 pr-4">
              Your trusted Australian partner for comprehensive business solutions, precision accounting, and seamless workforce management.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#5278F6] hover:text-white transition-all cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.56v.01c-.88.39-1.83.65-2.83.77a4.93 4.93 0 002.16-2.72c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 00-8.38 4.48A13.95 13.95 0 011.67 3.15 4.93 4.93 0 003.2 9.73c-.8-.03-1.55-.25-2.21-.61v.06a4.92 4.92 0 003.95 4.83 4.88 4.88 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.06 0 14-7.5 14-14v-.64A10.02 10.02 0 0024 4.56z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#5278F6] hover:text-white transition-all cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 01-2.06-2.06A2.06 2.06 0 015.34 3.3a2.06 2.06 0 012.06 2.06 2.06 2.06 0 01-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-['Inter_Display',_'Inter_Display_Placeholder',_sans-serif] text-[18px] font-semibold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-['Inter',_'Inter_Placeholder',_sans-serif] text-[15px] text-slate-400">
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-['Inter_Display',_'Inter_Display_Placeholder',_sans-serif] text-[18px] font-semibold text-white mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3 font-['Inter',_'Inter_Placeholder',_sans-serif] text-[15px] text-slate-400">
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Precision Accounting</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Expert Recruitment</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Seamless Payroll</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">Business Advisory</a></li>
              <li><a href="#" className="hover:text-[#5278F6] transition-colors">24/7 Priority Support</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-['Inter_Display',_'Inter_Display_Placeholder',_sans-serif] text-[18px] font-semibold text-white mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 font-['Inter',_'Inter_Placeholder',_sans-serif] text-[15px] text-slate-400">
              <li className="flex items-start gap-3 hover:text-[#5278F6] transition-colors cursor-pointer">
                <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#5278F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>1/10 Hammond Court<br/>Altona Meadows, VIC 3028<br/>Australia</span>
              </li>
              <li className="flex items-center gap-3 hover:text-[#5278F6] transition-colors cursor-pointer">
                <svg className="w-5 h-5 shrink-0 text-[#5278F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@hado.com" className="transition-colors">hello@hado.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-[#5278F6] transition-colors cursor-pointer">
                <svg className="w-5 h-5 shrink-0 text-[#5278F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+61 468 443 185</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter',_'Inter_Placeholder',_sans-serif] text-[14px] text-gray-500">
            &copy; {new Date().getFullYear()} Hado Business Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 font-['Inter',_'Inter_Placeholder',_sans-serif] text-[14px] text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
