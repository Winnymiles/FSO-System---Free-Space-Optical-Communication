import React from 'react';
import SectionTitle from './SectionTitle';
import { Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`relative py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="001" title="Ambition & Purpose" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Ambition & Purpose Content */}
          <div className="space-y-8">
            <h3 className={`text-2xl font-display ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Free-Space Optical Communication with MEMS</h3>
            <p className={`text-lg leading-relaxed font-light border-l-2 border-blue-500/50 pl-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Free-Space Optics (FSO) is a technology that uses optical/laser light propagating in free space to transmit data—think of it as "fiber optics without the fiber."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className={`p-4 border-l border-blue-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'}`}>
                <h4 className={`font-display text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Mechanism</h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Utilizes lasers or LEDs as transmission source and photodiodes as receivers.</p>
              </div>
              <div className={`p-4 border-l border-blue-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'}`}>
                <h4 className={`font-display text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Spectrum</h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Near-infrared (850nm or 1550nm), avoiding congested RF bands.</p>
              </div>
            </div>

            <p className={`text-sm leading-7 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="text-blue-500 font-medium">Primary Application:</span> Ideal for high-bandwidth, point-to-point links ("Last Mile") where laying physical cables is costly.
            </p>

            <div className={`space-y-6 text-sm leading-7 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                The system is designed to enhance precision and reliability in optical communications involving UAVs, drones, and fixed targets. A closed-loop control mechanism utilizing a <span className="text-blue-500">Spiral Scan Algorithm</span> continuously monitors and adjusts the MEMS mirror orientation in real time, achieving sub-5 second lock-on speeds.
              </p>
              <p>
                Our machine vision tracking system, powered by the MKR 1310 with sensor polling every 2 seconds, maintains 85% signal intensity during indoor testing—demonstrating robust performance for drone and fixed target communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 border-l border-blue-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'}`}>
                <h4 className={`font-display text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Compact & Lightweight</h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Ideal for space and ground-based optical systems.</p>
              </div>
              <div className={`p-4 border-l border-blue-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'}`}>
                <h4 className={`font-display text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Precision Control</h4>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Enables accurate beam steering for real-time tracking.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Video + Goal */}
          <div className="space-y-8">
            <div className="relative h-[350px] flex items-center justify-center">
               <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
               <div className="absolute inset-4 border border-blue-500/10 rounded-full animate-reverse-spin"></div>

               <video
                 src="/20251120_163524.MP4"
                 className="w-[80%] h-[80%] object-cover rounded-full"
                 autoPlay
                 muted
                 loop
                 playsInline
               />
            </div>

            <div className={`border-l-4 border-blue-500 p-6 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/10 to-transparent' : 'bg-blue-50'}`}>
              <h4 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-3">Our Goal</h4>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Developing a compact, high-speed FSO system for MEMS-based beam steering and automated feedback to achieve optical alignment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className={`p-8 rounded-sm border-t-4 border-blue-600 ${theme === 'dark' ? 'glass-panel' : 'bg-white shadow-md'}`}>
              <div className={`text-3xl md:text-4xl font-display font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>4.0s</div>
              <div className={`text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Spiral Scan V2 lock-on speed<br/>fastest algorithm tested</div>
           </div>
           <div className={`p-8 rounded-sm border-t-4 border-blue-600 ${theme === 'dark' ? 'glass-panel' : 'bg-white shadow-md'}`}>
              <div className={`text-3xl md:text-4xl font-display font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>MKR 1310</div>
              <div className={`text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sensor polling every 2 seconds<br/>for real-time tracking</div>
           </div>
           <div className={`p-8 rounded-sm border-t-4 border-blue-600 ${theme === 'dark' ? 'glass-panel' : 'bg-white shadow-md'}`}>
              <div className={`text-3xl md:text-4xl font-display font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>85%</div>
              <div className={`text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Signal intensity maintained<br/>during indoor benchmarking</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;