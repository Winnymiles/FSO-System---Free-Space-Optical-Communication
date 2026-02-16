import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Rotate3d, Target, Terminal, Cpu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Parts: React.FC = () => {
  const { theme } = useTheme();
  const [activePart, setActivePart] = useState<string | null>(null);

  const parts = [
    { id: 'mems', label: 'MEMS Mirror', top: '45%', left: '48%', desc: 'Microelectromechanical Systems mirror for high-speed beam steering.' },
    { id: 'camera', label: 'Camera Vision', top: '65%', left: '30%', desc: 'Camera acquisition and feedback loop for target tracking.' },
    { id: 'control', label: 'Closed-Loop Control', top: '25%', left: '65%', desc: 'Algorithms monitoring light throughput to adjust mirror orientation.' },
    { id: 'laser', label: 'Laser Source', top: '55%', left: '75%', desc: 'High-intensity optical signal generator for free-space transmission.' },
    { id: 'lora', label: 'LoRa RF', top: '80%', left: '50%', desc: 'LoRa communication for sensor telemetry and remote monitoring.' },
  ];

  const primaryTerminal = [
    'MEMS mirror alignment algorithms',
    'Camera acquisition + feedback loop',
    'Light sensor input analysis',
    'Motorized lid actuation logic',
  ];

  const secondaryTerminal = [
    'Sensor polling (Temp, Orientation, Vibration)',
    'Retroreflector orientation feedback',
    'LoRa RF communication handling',
    'Power management and remote monitoring',
  ];

  return (
    <section id="parts" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,50,150,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,50,150,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle number="004" title="Proposed Method" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-lg font-light mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            The core of the system is a fully integrated MEMS mirror which dynamically adjusts its orientation using a closed-loop feedback mechanism.
          </p>
          <p className={`text-xs font-mono max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
            This ensures real-time corrections to maintain optimal laser beam alignment. The control system continuously monitors light throughput and the target's visual image to minimize tracking errors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Component List */}
          <div className="space-y-4">
            <h3 className={`text-lg font-display mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <Target className="text-blue-500" size={20} />
              System Components
            </h3>
            {parts.map((part, idx) => (
              <div
                key={part.id}
                className={`group p-4 border-l-4 transition-all duration-300 cursor-pointer ${
                  activePart === part.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : theme === 'dark'
                      ? 'border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-white/10'
                      : 'border-gray-200 bg-gray-100 hover:border-blue-500/50 hover:bg-blue-50'
                }`}
                onMouseEnter={() => setActivePart(part.id)}
                onMouseLeave={() => setActivePart(null)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-sm">0{idx + 1}</span>
                  <h4 className={`font-display text-lg ${activePart === part.id ? 'text-blue-500' : theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {part.label}
                  </h4>
                </div>
                <p className={`text-xs mt-2 ml-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{part.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Video and Image */}
          <div className="space-y-6">
            {/* Video */}
            <div className={`relative rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
              <video
                src="/IMG_8967.MOV"
                className="w-full h-[300px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className={`border-t px-4 py-3 ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}>
                <span className="text-xs font-mono text-blue-500 bg-blue-500/20 px-2 py-1 rounded">LIVE DEMO</span>
              </div>
            </div>

            {/* System Diagram Image */}
            <div className={`relative rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-white'}`}>
              <img
                src="/Image.png"
                alt="System Diagram"
                className="w-full h-auto object-contain"
              />
              <div className={`border-t px-4 py-3 ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}>
                <span className="text-xs font-mono text-blue-500 bg-blue-500/20 px-2 py-1 rounded">SYSTEM ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Software Overview */}
        <div className="mt-24">
          <h3 className={`text-2xl font-display mb-8 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <Cpu className="text-blue-500" size={24} />
            Software Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Terminal */}
            <div className={`border rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className={`bg-gradient-to-r from-blue-500/20 to-transparent px-4 py-3 border-b flex items-center gap-2 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <Terminal size={16} className="text-blue-500" />
                <span className={`text-sm font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Primary Terminal</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                {primaryTerminal.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-blue-500">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Terminal */}
            <div className={`border rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className={`bg-gradient-to-r from-green-500/20 to-transparent px-4 py-3 border-b flex items-center gap-2 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <Terminal size={16} className="text-green-500" />
                <span className={`text-sm font-mono ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Secondary Terminal</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                {secondaryTerminal.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="text-green-500">&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parts;