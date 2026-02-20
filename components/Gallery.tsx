import React, { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { ArrowRight, ArrowLeft, Microscope, Activity, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const galleryData: { src: string; title: string; desc: string; type?: string; comingSoon?: boolean }[] = [
  {
    src: "/fso-research.jpg",
    title: "The Team at NRC",
    desc: "Figure 1: Group members in front of the NRC dome — Ground Station & Testing site."
  },
  {
    src: "/indoor-test.MP4",
    title: "Indoor Test",
    desc: "MEMS mirror beam steering demonstration — indoor alignment test.",
    type: "video"
  },
  {
    src: "/lab-mems-mirror.JPG",
    title: "Retroreflector",
    desc: "Figure 2: Retroreflector mounted on optical bench for beam return."
  },
  {
    src: "/lab-mems-sensor.JPG",
    title: "MEMS with Mounted Camera",
    desc: "Figure 3: MEMS mirror with mounted camera for vision-guided alignment."
  },
  {
    src: "/lab-video-1.MOV",
    title: "Lab Test Session 1",
    desc: "Lab recording — optical alignment and calibration process.",
    type: "video"
  },
  {
    src: "/lab-lattepanda-screen.JPG",
    title: "LattePanda Control System",
    desc: "Figure 4: LattePanda running MEMS SDK and Python control software via VS Code."
  },
  {
    src: "/lab-video-2.MOV",
    title: "Lab Test Session 2",
    desc: "Lab recording — MEMS mirror response testing.",
    type: "video"
  },
  {
    src: "/lab-video-3.MOV",
    title: "Motor Lid Control Test",
    desc: "Lab recording — motorized lid mechanism control and actuation test.",
    type: "video"
  },
  {
    src: "",
    title: "Outdoor Test Setup",
    desc: "Outdoor range testing phase — field deployment and long-range alignment.",
    comingSoon: true
  },
  {
    src: "",
    title: "Full Lab Configuration",
    desc: "Complete indoor test setup — LattePanda, MEMS, and oscilloscope.",
    comingSoon: true
  },
];

const VideoCard: React.FC<{ item: typeof galleryData[0]; idx: number; theme: string }> = ({ item, idx, theme }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <div
      className={`relative flex-none snap-center overflow-hidden border transition-all duration-500 ${
        playing ? 'w-[90vw] md:w-[750px] h-[450px]' : 'w-[85vw] md:w-[600px] h-[400px]'
      } ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-white shadow-sm'}`}
      onMouseLeave={handlePause}
    >
      <video
        ref={videoRef}
        src={item.src}
        className={`w-full h-full object-cover transition-all duration-700 ${playing ? 'opacity-100' : 'opacity-60'}`}
        loop
        playsInline
        muted
      />
      {/* Play button overlay */}
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all">
            <Play size={28} className="ml-1" />
          </div>
        </button>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none">
        <span className="text-xs font-mono text-blue-500 mb-2">PROJECT ASSET {idx + 1}</span>
        <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
        <p className="text-xs text-gray-400 mt-2 font-mono">{item.desc}</p>
      </div>
    </div>
  );
};

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
            item.type === 'video' ? (
              <VideoCard key={idx} item={item} idx={idx} theme={theme} />
            ) : item.comingSoon ? (
              <div key={idx} className={`relative flex-none w-[85vw] md:w-[600px] h-[400px] snap-center overflow-hidden border flex flex-col items-center justify-center ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-white shadow-sm'}`}>
                <div className="text-center">
                  <div className={`text-4xl font-display font-bold mb-4 ${theme === 'dark' ? 'text-white/20' : 'text-gray-300'}`}>COMING SOON</div>
                  <span className="text-xs font-mono text-blue-500 mb-2 block">PROJECT ASSET {idx + 1}</span>
                  <h3 className={`text-xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-xs mt-2 font-mono ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
              </div>
            ) : (
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
            )
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
