import React from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const milestones = [
  { id: '001', title: 'Research and Initial Design', date: 'Oct 1 – Oct 26, 2025', note: 'System architecture defined, component selection finalized.' },
  { id: '002', title: 'Hardware Acquisition', date: 'Oct 27 – Nov 21, 2025', note: 'MEMS mirror, LattePanda, Arduino boards, sensors procured.' },
  { id: '003', title: 'Software Development', date: 'Nov 22 – Dec 17, 2025', note: 'Spiral Scan algorithms, LoRa firmware, and control software developed.' },
  { id: '004', title: 'System Integration / Indoor Test', date: 'Dec 18, 2025 – Jan 31, 2026', note: 'Full indoor integration completed. Sub-5 second lock-on achieved.' },
  { id: '005', title: 'Final Printing & Waterproofing', date: 'Feb 1 – 14, 2026', note: '3D-printed enclosures fabricated and sealed for outdoor deployment.' },
  { id: '006', title: 'Outdoor Testing Range Phase', date: 'Feb 15 – 28, 2026', note: 'Drone tested at 5 m (2.5 min lock-on) and 10 m (7 min lock-on) at NRC outdoor range.' },
  { id: '007', title: 'Data Analysis & System Fine-tuning', date: 'March 1 – 15, 2026', note: 'EVM benchmarking across modulations. System parameters refined.' },
  { id: '008', title: 'Final Prototype Demonstration', date: 'April 2026', note: 'Capstone demonstration successfully completed. Project concluded.' },
];

const Adventures: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="adventures" className={`py-24 ${theme === 'dark' ? 'bg-[#030304]' : 'bg-[#eef0f4]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="007" title="Project Timeline" />

        <p className={`max-w-2xl text-base font-light mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          All milestones have been successfully completed. The FSO communication system has been fully designed, built, tested, and demonstrated.
        </p>

        <div className="mt-4 space-y-3">
          {milestones.map((item) => (
            <div
              key={item.id}
              className={`relative group transition-all duration-300 p-5 md:p-6 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white border-gray-200 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={22} />
                  <div>
                    <h3 className={`text-base md:text-lg font-display tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm font-mono mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{item.date}</p>
                    <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{item.note}</p>
                  </div>
                </div>
                <span className="flex-shrink-0 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded bg-green-500/20 text-green-500">
                  Done
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
