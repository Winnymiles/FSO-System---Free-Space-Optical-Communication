import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-center overflow-hidden">
      {/* Animated Globe Background */}
      <img
        src="/csm_csm_Physik-Instrumente-Free-Space-Optical-Communication_1200x600_c625b1dad2.JPG--1920-20_f722b19a59.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ animation: 'heroFloat 30s ease-in-out infinite' }}
      />

      {/* Overlay - dark in both modes so globe + text stay clear */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-black/60 via-black/40 to-black/70'
          : 'bg-gradient-to-r from-[#0d1b2a]/85 via-[#0d1b2a]/60 to-[#0d1b2a]/20'
      }`}></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <div>
            <p className="text-base md:text-lg font-mono tracking-[0.2em] uppercase mb-6 text-blue-400">
              Capstone Project 2025-2026
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-display font-bold tracking-wide text-white">
              High-Speed<br/>
              Free-Space<br/>
              <span className="text-blue-400">Optical Receiver</span><br/>
              Alignment
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-xl border-l-2 border-blue-500 pl-6 text-gray-300">
              with Machine Vision Tracking for Drone and Fixed Target Communication
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-sm font-mono uppercase tracking-widest px-5 py-2.5 rounded border text-blue-400 bg-blue-500/20 border-blue-500/30">MEMS Mirrors</span>
              <span className="text-sm font-mono uppercase tracking-widest px-5 py-2.5 rounded border text-blue-400 bg-blue-500/20 border-blue-500/30">LoRa Integration</span>
              <span className="text-sm font-mono uppercase tracking-widest px-5 py-2.5 rounded border text-blue-400 bg-blue-500/20 border-blue-500/30">Computer Vision</span>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">&lt;5s</div>
                <div className="text-sm mt-1 text-gray-400">Lock-on Speed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">85%</div>
                <div className="text-sm mt-1 text-gray-400">Signal Intensity</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">4.0s</div>
                <div className="text-sm mt-1 text-gray-400">Spiral Scan V2</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4 animate-bounce">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-blue-500"></div>
        <span className="text-[10px] font-mono tracking-widest uppercase rotate-90 origin-left translate-x-3 text-blue-500/50">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
