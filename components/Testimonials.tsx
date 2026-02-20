import React, { useState } from 'react';
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
    quote: "Integrating the machine vision pipeline with the optical alignment system was one of the most rewarding challenges — seeing the beam lock on for the first time was unforgettable.",
    name: 'Samiksha',
    role: 'Vision & Integration',
    image: '/Samiksha.jpg',
  },
  {
    quote: "Designing the mechanical enclosure and secondary terminal meant balancing precision optical requirements with field-deployable durability — a true engineering puzzle.",
    name: 'Winny',
    role: 'Systems & Mechanical',
    image: '/Winny.JPEG',
  },
];

const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className={`py-24 overflow-hidden ${theme === 'dark' ? 'bg-[#060608]' : 'bg-[#f5f6fa]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="007" title="Testimonials" />

        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
              theme === 'dark' ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-500'
            }`}>
              <Quote size={24} />
            </div>
          </div>

          {/* Quote text */}
          <blockquote className={`text-center text-lg md:text-xl leading-relaxed font-light mb-10 min-h-[100px] ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-3">
            <div className={`w-16 h-16 rounded-full overflow-hidden border-2 ${
              theme === 'dark' ? 'border-blue-500/30' : 'border-blue-200'
            }`}>
              <img
                src={t.image}
                alt={t.name}
                className={`w-full h-full object-cover ${
                  t.name === 'Dr. Wahab Almuhtadi' ? 'object-[center_45%]' : ''
                }`}
              />
            </div>
            <div className="text-center">
              <p className={`font-display text-sm font-bold tracking-wide ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{t.name}</p>
              <p className="text-xs text-blue-500 font-mono uppercase tracking-widest">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                theme === 'dark'
                  ? 'border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                  : 'border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-500'
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
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

            <button
              onClick={next}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                theme === 'dark'
                  ? 'border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400'
                  : 'border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-500'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
