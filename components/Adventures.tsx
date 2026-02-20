import React from 'react';
import SectionTitle from './SectionTitle';
import { ArrowUpRight, CheckCircle2, Circle, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const milestones = [
  { id: '001', title: 'Research and Initial Design', date: 'Oct 1 - Oct 26, 2025', status: 'completed' },
  { id: '002', title: 'Hardware Acquisition', date: 'Oct 27 - Nov 21, 2025', status: 'completed' },
  { id: '003', title: 'Software Development', date: 'Nov 22 - Dec 17, 2025', status: 'completed' },
  { id: '004', title: 'System Integration / Indoor Test', date: 'Dec 18, 2025 - Jan 31, 2026', status: 'completed' },
  { id: '005', title: 'Final Printing & Waterproofing', date: 'Feb 1 - 14, 2026', status: 'completed' },
  { id: '006', title: 'Outdoor Testing Range Phase', date: 'Feb 15 - 28, 2026', status: 'current' },
  { id: '007', title: 'Data Analysis & System Fine-tuning', date: 'March 1 - 15, 2026', status: 'upcoming' },
  { id: '008', title: 'Final Prototype Demonstration', date: 'April 2026', status: 'upcoming' },
];

const Adventures: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="adventures" className={`py-24 ${theme === 'dark' ? 'bg-[#030304]' : 'bg-[#eef0f4]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="007" title="Project Timeline" />

        <div className="mt-12 space-y-3">
          {milestones.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-300 p-4 md:p-6 rounded-lg border ${
                item.status === 'current'
                  ? 'bg-blue-500/10 border-blue-500/50'
                  : item.status === 'completed'
                  ? theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : 'bg-white border-gray-200 hover:bg-gray-50 shadow-sm'
                  : theme === 'dark'
                    ? 'bg-white/5 border-white/10 opacity-60'
                    : 'bg-gray-100 border-gray-200 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="text-green-500" size={24} />
                  ) : item.status === 'current' ? (
                    <ArrowUpRight className="text-blue-500" size={24} />
                  ) : (
                    <Circle className="text-gray-500" size={24} />
                  )}
                  <div>
                    <h3 className={`text-lg md:text-xl font-display tracking-wide ${
                      item.status === 'current' ? 'text-blue-500' : item.status === 'completed' ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-gray-400'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded ${
                    item.status === 'completed'
                      ? 'bg-green-500/20 text-green-500'
                      : item.status === 'current'
                      ? 'bg-blue-500/20 text-blue-500'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {item.status === 'completed' ? 'Completed' : item.status === 'current' ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;