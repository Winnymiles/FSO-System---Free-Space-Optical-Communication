import React from 'react';
import SectionTitle from './SectionTitle';
import { Sponsor } from '../types';
import { ExternalLink, Building2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const sponsors = [
  { id: '001', name: 'National Research Council', tier: 'Industry Partner', since: 'Ground Station & Testing', website: 'nrc.canada.ca', color: 'text-red-500' },
  { id: '002', name: 'Carleton University', tier: 'Academic', since: 'Joint Program — Optical Systems & Sensors', website: 'carleton.ca', color: 'text-red-500' },
  { id: '003', name: 'Algonquin College', tier: 'Academic', since: 'Joint Program — Optical Systems & Sensors', website: 'algonquincollege.com', color: 'text-green-500' },
];

const Sponsors: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="sponsorships" className={`py-24 ${theme === 'dark' ? 'bg-[#050505]' : 'bg-[#f5f6fa]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle number="003" title="Partners & Institution" />
        <p className={`mb-12 max-w-2xl font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          This FSO system is developed as part of the <span className="text-blue-500">Information Technology - Optical Systems and Sensors</span> program, a joint initiative between Carleton University and Algonquin College, with industry partnership from NRC.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`group relative border p-8 min-h-[250px] flex flex-col justify-between hover:border-blue-500/50 transition-colors duration-300 ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-white shadow-sm'}`}
            >
              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-l border-t group-hover:border-blue-400 ${theme === 'dark' ? 'border-white/30' : 'border-gray-300'}`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-r border-t group-hover:border-blue-400 ${theme === 'dark' ? 'border-white/30' : 'border-gray-300'}`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-l border-b group-hover:border-blue-400 ${theme === 'dark' ? 'border-white/30' : 'border-gray-300'}`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-r border-b group-hover:border-blue-400 ${theme === 'dark' ? 'border-white/30' : 'border-gray-300'}`}></div>

              <div>
                <Building2 className={`${sponsor.color} mb-6`} size={32} />
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{sponsor.tier}</div>
                <h3 className={`text-xl font-display font-medium group-hover:text-blue-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {sponsor.name}
                </h3>
              </div>

              <div className={`pt-8 border-t border-dashed flex justify-between items-end ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <div>
                  <div className={`text-[10px] uppercase tracking-wider mb-1 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>Role</div>
                  <div className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{sponsor.since}</div>
                </div>
                <a href={`https://${sponsor.website}`} target="_blank" rel="noreferrer" className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white/20' : 'text-gray-400'}`}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;