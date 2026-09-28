import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#fcfbfa]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#E8F0FF] rounded-full filter blur-[150px] -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F3F7FF] rounded-full filter blur-[120px] translate-x-1/4 translate-y-1/4"></div>

      {/* Decorative Dot Grid (Top Center/Right) */}
      <div className="absolute top-[15%] left-[45%] w-[300px] h-[300px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wOCkiLz48L3N2Zz4=')] opacity-80 mask-image:radial-gradient(circle,white,transparent)"></div>

      {/* Abstract Thin Sweeping Lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M-100 800 C 200 800, 150 400, -100 200" fill="none" stroke="#4A7BF6" strokeWidth="0.5" className="opacity-30" />
        <path d="M-100 800 C 300 700, 250 300, -100 100" fill="none" stroke="#4A7BF6" strokeWidth="0.5" className="opacity-20" />
        <path d="M-100 800 C 400 600, 350 200, -100 0" fill="none" stroke="#4A7BF6" strokeWidth="0.5" className="opacity-10" />
        
        {/* Bottom sweeps */}
        <path d="M 0 900 C 400 800, 800 900, 1440 700" fill="none" stroke="#4A7BF6" strokeWidth="0.5" className="opacity-20" />
        <path d="M 0 950 C 500 850, 900 950, 1440 750" fill="none" stroke="#4A7BF6" strokeWidth="0.5" className="opacity-15" />
      </svg>
      
    </div>
  );
};

export default WaveBackground;
