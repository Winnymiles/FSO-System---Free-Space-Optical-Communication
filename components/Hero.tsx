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

      {/* Overlay - different for dark/light */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-black/60 via-black/40 to-black/70'
          : 'bg-gradient-to-r from-slate-100/70 via-slate-50/40 to-transparent'
      }`}></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <div>
            <p className={`text-sm md:text-base font-mono tracking-[0.2em] uppercase mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Capstone Project 2025-2026
            </p>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl leading-tight font-display font-bold tracking-wide ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Free-Space<br/>
              <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Optical</span><br/>
              Communication<br/>
              System
            </h1>
            <p className={`text-base md:text-lg mt-6 max-w-xl border-l-2 border-blue-500 pl-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              High-Speed FSO Receiver with MEMS Mirror Alignment for Drone and Fixed Target Communication
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded border ${
                theme === 'dark'
                  ? 'text-blue-400 bg-blue-500/20 border-blue-500/30'
                  : 'text-blue-700 bg-blue-600/20 border-blue-500/50'
              }`}>MEMS Mirrors</span>
              <span className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded border ${
                theme === 'dark'
                  ? 'text-blue-400 bg-blue-500/20 border-blue-500/30'
                  : 'text-blue-700 bg-blue-600/20 border-blue-500/50'
              }`}>LoRa Integration</span>
              <span className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded border ${
                theme === 'dark'
                  ? 'text-blue-400 bg-blue-500/20 border-blue-500/30'
                  : 'text-blue-700 bg-blue-600/20 border-blue-500/50'
              }`}>Computer Vision</span>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>&lt;5s</div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Lock-on Speed</div>
              </div>
              <div>
                <div className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>85%</div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Signal Intensity</div>
              </div>
              <div>
                <div className={`text-2xl md:text-3xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>4.0s</div>
                <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Spiral Scan V2</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4 animate-bounce">
        <div className={`h-16 w-[1px] bg-gradient-to-b from-transparent ${theme === 'dark' ? 'to-blue-500' : 'to-blue-600'}`}></div>
        <span className={`text-[10px] font-mono tracking-widest uppercase rotate-90 origin-left translate-x-3 ${
          theme === 'dark' ? 'text-blue-500/50' : 'text-blue-600/70'
        }`}>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;