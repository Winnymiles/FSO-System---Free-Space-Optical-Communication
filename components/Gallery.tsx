import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { ArrowRight, ArrowLeft, Microscope, Activity } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const galleryData = [
  {
    src: "/fso-research.jpg",
    title: "FSO Research",
    desc: "Figure 1: Free-Space Optical Communication Research."
  },
  {
    src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop",
    title: "Free Space Optics",
    desc: "Figure 2: Concept of laser communication links."
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    title: "Experimental Setup",
    desc: "Figure 3: Laboratory bench configuration."
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title: "FSO System",
    desc: "Figure 4: Free-Space Optical Communication with MEMS Alignment."
  },
];

const Gallery: React.FC = () => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className={`relative py-24 border-t ${
      theme === 'dark' ? 'bg-black border-white/5' : 'bg-[#eef0f4] border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <SectionTitle number="002" title="System Visualization" className="mb-0" />
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-gray-500">View Data</span>
          <button className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}><Microscope size={20} /></button>
          <button className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}><Activity size={20} /></button>
        </div>
      </div>

      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-[calc((100vw-80rem)/2)] pb-12 no-scrollbar"
        >
          {galleryData.map((item, idx) => (
            <div key={idx} className={`relative flex-none w-[85vw] md:w-[600px] h-[400px] snap-center group overflow-hidden border ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-white shadow-sm'}`}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-8">
                <span className="text-xs font-mono text-blue-500 mb-2">PROJECT ASSET {idx + 1}</span>
                <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-2 font-mono">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`absolute bottom-4 left-0 right-0 flex justify-center gap-8 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
           <button onClick={() => scroll('left')} className={`p-2 border rounded-full ${theme === 'dark' ? 'hover:text-white border-white/10' : 'hover:text-gray-900 border-gray-300 bg-white'}`}><ArrowLeft size={16} /></button>
           <span className="text-[10px] font-mono tracking-[0.2em] self-center">SCROLL FIGURES</span>
           <button onClick={() => scroll('right')} className={`p-2 border rounded-full ${theme === 'dark' ? 'hover:text-white border-white/10' : 'hover:text-gray-900 border-gray-300 bg-white'}`}><ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;