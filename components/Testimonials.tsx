import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const testimonials = [
  {
    quote: "This team demonstrated exceptional technical depth in integrating MEMS mirror control with real-time computer vision — a challenge that even graduate-level researchers find demanding.",
    name: 'Dr. Ross Cheriton',
    role: 'Supervisor',
    image: '/Dr. Ross.jpeg',
  },
  {
    quote: "The Free-Space Optical Communication project represents the kind of innovative, cross-disciplinary engineering that will shape the future of high-speed wireless connectivity.",
    name: 'Dr. Wahab Almuhtadi',
    role: 'Advisor',
    image: '/Dr.-Wahab-Almuhtadi-2018.jpg',
  },
  {
    quote: "Working on the pointing and tracking algorithms pushed us to bridge the gap between theoretical optics and real-world hardware constraints — every iteration taught us something new.",
    name: 'Aarya',
    role: 'Hardware & Control',
    image: '/Aarya.jpg',
  },
  {
    quote: "This project was different from the usual academic work, it felt more real and hands-on. What made it unique was that we had full ownership of the idea, from planning to final execution, which made it feel like something we truly built ourselves. It challenged me, built my confidence, and gave me practical skills that will definitely help me in my future career.",
    name: 'Samiksha',
    role: 'Vision & Integration',
    image: '/Samiksha.png',
  },
  {
    quote: "I would like to thank Dr. Wahab and Dr. Ross for the opportunity. I learned a lot and was able to convert lecture notes into real-world problem solving. This capstone pushed me to think like an engineer — designing, building, and troubleshooting a complete optical system from scratch.",
    name: 'Winny',
    role: 'Systems & Mechanical',
    image: '/Winny.JPEG',
  },
];

const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  // Show 3 cards at a time on desktop, 1 on mobile
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[idx], position: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="testimonials" className={`py-24 overflow-hidden ${theme === 'dark' ? 'bg-[#060608]' : 'bg-[#f5f6fa]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="007" title="Testimonials" />
        <p className={`max-w-2xl font-light text-sm mb-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Hear from our team members and supervisors about the FSO project experience.
        </p>

        <div className="relative">
          {/* Cards */}
          <div className="flex justify-center items-start gap-6 md:gap-8">
            {visibleCards.map((t, i) => (
              <div
                key={t.name}
                className={`relative rounded-lg border pt-14 pb-6 px-6 text-center transition-all duration-500 ${
                  t.position === 0
                    ? 'w-[280px] md:w-[320px] scale-105 z-10'
                    : 'w-[280px] md:w-[300px] opacity-50 scale-95 hidden md:block'
                } ${
                  theme === 'dark'
                    ? 'bg-[#0a0a0a] border-white/10'
                    : 'bg-white border-gray-200 shadow-sm'
                } ${t.position === 0 ? (theme === 'dark' ? 'border-blue-500/30' : 'border-blue-300') : ''}`}
              >
                {/* Profile image */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-4 ${
                    theme === 'dark' ? 'border-[#060608]' : 'border-[#f5f6fa]'
                  }`}>
                    <img
                      src={t.image}
                      alt={t.name}
                      className={`w-full h-full object-cover ${
                        t.name === 'Dr. Wahab Almuhtadi' ? 'object-[center_15%]' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Quote icon */}
                <div className="text-blue-500 mb-3">
                  <Quote size={20} className="mx-auto" />
                </div>

                {/* Quote text */}
                <p className={`text-sm leading-relaxed font-light mb-5 min-h-[80px] ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <p className={`font-display text-sm font-bold tracking-wide ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{t.name}</p>
                <p className="text-[10px] text-blue-500 font-mono uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              theme === 'dark'
                ? 'border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                : 'border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-500 bg-white'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              theme === 'dark'
                ? 'border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                : 'border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-500 bg-white'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 bg-blue-500'
                  : `w-1.5 ${theme === 'dark' ? 'bg-white/20 hover:bg-white/40' : 'bg-gray-300 hover:bg-gray-400'}`
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
