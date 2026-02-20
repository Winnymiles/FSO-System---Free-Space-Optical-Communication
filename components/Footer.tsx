import React from 'react';
import { Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`relative border-t overflow-hidden ${
      theme === 'dark' ? 'bg-black border-white/5' : 'bg-[#e8eaf0] border-gray-200'
    }`}>
      {/* Thanks for Visiting Section */}
      <div className="relative py-20 overflow-hidden">
        <video
          src="/IMG_7570.MOV"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Thanks for Visiting!
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            We appreciate you taking the time to learn about our Free-Space Optical Communication System project.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex -space-x-4">
              <img src="/Aarya.jpg" alt="Aarya" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
              <img src="/Samiksha.jpeg" alt="Samiksha" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
              <img src="/Winny.JPEG" alt="Winny" className="w-12 h-12 rounded-full border-2 border-black object-cover" />
            </div>
            <p className="text-sm text-gray-400 self-center font-mono">— Aarya, Samiksha & Winny</p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative pt-24 pb-12">
        {/* Background Graphic */}
        <div className="absolute -bottom-[50%] left-0 right-0 h-[600px] w-full flex justify-center pointer-events-none">
          <div className="w-[1000px] h-[1000px] rounded-full bg-blue-900/10 blur-[100px]"></div>
          <div className="absolute top-0 w-[80%] h-[120%] bg-gradient-to-t from-blue-900/20 to-transparent mask-image-radial"></div>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <div className={`font-display font-bold text-3xl tracking-widest mb-8 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
               <div className="w-8 h-8 border-2 border-blue-500 rounded-br-lg rounded-tl-lg flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-blue-500'}`}></div>
              </div>
              FSO SYSTEM
            </div>
            <p className={`text-sm max-w-sm mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
              Advancing free-space optical communication through high-precision MEMS technology. A Capstone Project committed to the future of connectivity.
            </p>

            <div className="space-y-4">
              <label className={`text-xs font-mono uppercase tracking-widest block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact the Team</label>
              <div className="flex max-w-sm">
                <input type="email" placeholder="Contact email" className={`px-4 py-3 text-sm flex-1 focus:outline-none focus:border-blue-500/30 font-mono ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-gray-300 text-gray-900'}`} />
                <button className={`px-6 py-3 text-xs font-mono uppercase transition-colors ${theme === 'dark' ? 'bg-white/10 border-t border-r border-b border-white/10 text-white hover:bg-white hover:text-black' : 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'}`}>
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
             <div className="flex items-center gap-6 mb-12">
               <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mr-4">Connect</span>
               <a href="#" className={`transition-colors border p-2 rounded-full ${theme === 'dark' ? 'text-gray-400 hover:text-white border-white/10' : 'text-gray-500 hover:text-blue-500 border-gray-300'}`}><Linkedin size={16} /></a>
               <a href="#" className={`transition-colors border p-2 rounded-full ${theme === 'dark' ? 'text-gray-400 hover:text-white border-white/10' : 'text-gray-500 hover:text-blue-500 border-gray-300'}`}><Twitter size={16} /></a>
               <a href="#" className={`transition-colors border p-2 rounded-full ${theme === 'dark' ? 'text-gray-400 hover:text-white border-white/10' : 'text-gray-500 hover:text-blue-500 border-gray-300'}`}><Globe size={16} /></a>
             </div>

             <div className={`flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
               <a href="#about" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-blue-500'}>Project</a>
               <a href="#parts" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-blue-500'}>System</a>
               <a href="#team" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-blue-500'}>Team</a>
               <a href="#" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-blue-500'}>University</a>
             </div>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-wider ${theme === 'dark' ? 'border-white/5 text-gray-600' : 'border-gray-200 text-gray-500'}`}>
          <div className="flex gap-6 mb-4 md:mb-0">
             <a href="#" className={theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-blue-500'}>Project Documentation</a>
             <a href="#" className={theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-blue-500'}>Technical Paper</a>
          </div>
          <div>
            © FSO Capstone Project 2025 — Carleton University & Algonquin College
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;