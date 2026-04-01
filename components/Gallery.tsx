import React, { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import { ArrowRight, ArrowLeft, Microscope, Activity, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const galleryData: { src: string; title: string; desc: string; type?: string; poster?: string; muted?: boolean; playbackRate?: number; objectPosition?: string }[] = [
  {
    src: "/system visualization/Team with dom.jpg",
    title: "The Team at NRC",
    desc: "Figure 1: The project team at the NRC dome — our primary outdoor testing ground for long-range FSO experiments.",
  },
  {
    src: "/system visualization/indoor retroreflector.JPG",
    title: "Indoor Retroreflector Setup",
    desc: "Figure 2: Retroreflector mounted on the optical bench inside the lab for controlled beam-return testing.",
  },
  {
    src: "/system visualization/indoor test.mp4",
    poster: "/system visualization/indoor test_poster.jpg",
    title: "Indoor Beam Alignment Test",
    desc: "Indoor alignment session — fine-tuning the MEMS mirror for optimal signal lock-on using Spiral Scan V2.",
    type: "video",
  },
  {
    src: "/system visualization/mems alignment.mp4",
    poster: "/system visualization/mems alignment_poster.jpg",
    title: "MEMS Mirror Alignment",
    desc: "MEMS mirror beam steering demonstration — closed-loop control achieving sub-5 second lock-on speed.",
    type: "video",
  },
  {
    src: "/system visualization/laser alignment outdoor_processed.mp4",
    poster: "/system visualization/laser alignment outdoor_processed_poster.jpg",
    title: "Laser Alignment — Outdoor",
    desc: "Outdoor laser alignment test — steering a precision beam to a fixed target at extended range.",
    type: "video",
    muted: false,
  },
  {
    src: "/system visualization/drone with target.jpeg",
    title: "Drone with Target Reflector",
    desc: "Figure 3: Target retroreflector mounted on drone airframe for aerial FSO communication experiments.",
  },
  {
    src: "/system visualization/outdoor flying drone_extended.mp4",
    poster: "/system visualization/outdoor flying drone_extended_poster.jpg",
    title: "Drone in Flight — FSO Link",
    desc: "Drone carrying the retroreflector in flight — validating the FSO optical link with a moving aerial target.",
    type: "video",
    objectPosition: "center 20%",
  },
  {
    src: "/system visualization/retroreflector outdoor.mp4",
    poster: "/system visualization/retroreflector outdoor_poster.jpg",
    title: "Outdoor Retroreflector",
    desc: "Figure 4: Retroreflector deployed in the field — configured for long-range outdoor optical return testing.",
    type: "video",
  },
  {
    src: "/system visualization/outdoor-setup-alignment.mp4",
    poster: "/system visualization/outdoor-setup-alignment_poster.jpg",
    title: "Outdoor Testing — Setup & Alignment",
    desc: "Full outdoor deployment at the NRC field site — terminal setup, power-on sequence, and beam alignment phase.",
    type: "video",
    muted: false,
    playbackRate: 1.25,
  },
  {
    src: "/system visualization/team with drone.jpeg",
    title: "Team with Drone",
    desc: "Figure 5: The team with the UAV used for aerial FSO tests — wrapping up a successful outdoor campaign.",
  },
];

const VideoCard: React.FC<{ item: typeof galleryData[0]; idx: number; theme: string }> = ({ item, idx, theme }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      if (item.playbackRate) videoRef.current.playbackRate = item.playbackRate;
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1;
      setPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (videoRef.current) videoRef.current.currentTime = t;
    setCurrentTime(t);
  };

  return (
    <div
      className={`relative flex-none snap-center overflow-hidden border transition-all duration-500 ${
        playing ? 'w-[90vw] md:w-[800px] h-[520px]' : 'w-[85vw] md:w-[650px] h-[480px]'
      } ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-gray-200 bg-black shadow-sm'}`}
      onMouseLeave={handlePause}
    >
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        className="w-full h-full object-cover transition-all duration-700"
        style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
        loop
        playsInline
        muted
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      {/* Play button */}
      {!playing && (
        <button onClick={handlePlay} className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative w-16 h-16 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all">
            <Play size={28} className="ml-1" />
            {item.playbackRate && item.playbackRate > 1 && (
              <span className="absolute -top-1 -right-1 text-[9px] font-bold bg-blue-600 rounded px-1">{item.playbackRate}×</span>
            )}
          </div>
        </button>
      )}

      {/* Gradient overlay + info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent flex flex-col justify-end pointer-events-none">
        {/* Seek slider */}
        <div className="px-6 pb-1 pointer-events-auto">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.05}
            value={currentTime}
            onChange={handleSeek}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-[3px] accent-blue-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-white/50 mt-1">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
        <div className="px-6 pb-6">
          <span className="text-xs font-mono text-blue-500 mb-1 block">PROJECT ASSET {idx + 1}</span>
          <h3 className="text-lg font-display font-bold text-white">{item.title}</h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">{item.desc}</p>
        </div>
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
        <SectionTitle number="002" title="Lab & Field Documentation" className="mb-0" />

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
              <div key={idx} className={`relative flex-none w-[85vw] md:w-[650px] h-[480px] snap-center group overflow-hidden border ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-gray-200 bg-black shadow-sm'}`}>
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
