import React, { useMemo } from 'react';

const HeroBackground = () => {
  const bgImage = useMemo(() => {
    const width = 1440;
    const height = 900;
    const spacing = 32;
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);
    
    let dots = '';
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * spacing + spacing / 2;
        const y = i * spacing + spacing / 2;
        const normalizedX = x / width;
        
        // Calculate the core "band" trajectory: A deep swoop starting bottom-left, dropping to bottom-center, and rising sharply to top-right
        const waveY = height * (1.0 - 0.8 * Math.pow(normalizedX - 0.4, 2) * 2.5);
        
        // Distance from the current point to the center of the wave band
        const verticalDist = Math.abs(y - waveY);
        
        // Base radius inversely proportional to the distance from the band center
        let radius = 20 - (verticalDist * 0.04);
        
        // Add organic sinusoidal noise to make the edges of the band irregular and wave-like
        const noise = Math.sin(x * 0.02 + y * 0.02) * 3;
        radius += noise;
        
        // Only draw dots that are large enough to be visible
        if (radius > 1) {
          const finalRadius = Math.min(radius, 14); // Max dot size
          // Smoothly fade out the opacity of smaller dots to perfect the halftone illusion
          const opacity = Math.min(0.6, (finalRadius / 14) * 0.5); 
          dots += `<circle cx="${x}" cy="${y}" r="${finalRadius}" fill="#ef4444" opacity="${opacity}" />`;
        }
      }
    }
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${dots}</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center mix-blend-multiply opacity-80">
      <div 
        className="w-[110%] h-[110%] min-w-[1440px] absolute animate-wave-breathe"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default HeroBackground;
