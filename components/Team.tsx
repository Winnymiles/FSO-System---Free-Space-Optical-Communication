import React from 'react';
import SectionTitle from './SectionTitle';
import { Linkedin, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const teamMembers = [
  {
    name: 'Aarya',
    role: 'Hardware & Control',
    image: '/Aarya.jpg',
    linkedin: 'https://www.linkedin.com/in/jaarya7/',
    contributions: [
      'Latte Panda configuration',
      'MEMS mirror control',
      'Optical alignment',
      'Pointing & Tracking algorithms'
    ]
  },
  {
    name: 'Samiksha',
    role: 'Vision & Integration',
    image: '/Samiksha.jpeg',
    linkedin: 'https://www.linkedin.com/in/samiksha-gupta-830352167/',
    contributions: [
      'Machine vision algorithm',
      'Camera Integration',
      'Primary terminal integration',
      'Overall system logic'
    ]
  },
  {
    name: 'Winny',
    role: 'Systems & Mechanical',
    image: '/Winny.JPEG',
    linkedin: 'https://www.linkedin.com/in/winny-kameni-194349185',
    portfolio: 'https://winny-portfolio-1.vercel.app/',
    contributions: [
      'Retroreflector Integration',
      'Secondary terminal design',
      'Mechanical Enclosure Design',
      'Solar/Battery system'
    ]
  },
];

const supervisors = [
  {
    name: 'Dr. Ross Cheriton',
    role: 'Supervisor',
    image: '/Dr. Ross.jpeg',
    linkedin: 'https://www.linkedin.com/in/ross-cheriton/',
  },
  {
    name: 'Dr. Wahab Almuhtadi',
    role: 'Advisor',
    image: '/Dr.-Wahab-Almuhtadi-2018.jpg',
    linkedin: 'https://www.linkedin.com/in/wahab-almuhtadi-dr-ieee-fellow-eic-fellow-ieee-canada-president-9b66a6/',
  },
];

const Team: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="team" className={`py-24 overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle number="006" title="Capstone Team" />
        <p className={`max-w-2xl font-light text-sm mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          This Free-Space Optical Communication System is the culmination of our Bachelor's degree. Our team combines expertise in optical engineering, control systems, and machine vision to solve complex challenges in FSO communication.
        </p>
        <p className="text-xs font-mono">
          <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}>Program:</span> <span className="text-blue-500">Information Technology - Optical Systems and Sensors</span>
        </p>
      </div>

      {/* Supervisor & Advisor Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className={`text-lg font-display mb-8 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <span className="text-blue-500 font-mono text-xs">—</span>
          Supervisor & Advisor
        </h3>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {supervisors.map((person) => (
            <div key={person.name} className="group text-center">
              <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] relative mx-auto mb-4">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full group-hover:border-blue-400 transition-colors"></div>
                <div className={`absolute inset-2 border rounded-full overflow-hidden ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-mono text-white">
                  {person.role === 'Supervisor' ? 'S' : 'A'}
                </div>
              </div>
              <h4 className={`text-lg font-display mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{person.name}</h4>
              <p className="text-xs text-blue-500 font-mono uppercase tracking-widest mb-2">{person.role}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1 hover:text-blue-400 transition-colors text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}
              >
                <Linkedin size={14} />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className={`text-lg font-display mb-8 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <span className="text-blue-500 font-mono text-xs">—</span>
          Team Members
        </h3>
      </div>

      <div className="relative w-full overflow-hidden pb-12">
         <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap px-6">

            {teamMembers.map((member, index) => (
              <div key={member.name} className="w-[280px] md:w-[300px] relative group">
                {/* Image Container */}
                <div className={`w-full h-[200px] md:h-[220px] overflow-hidden rounded-t-lg border border-b-0 group-hover:border-blue-500/50 transition-colors ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Container */}
                <div className={`border border-t-0 rounded-b-lg p-5 group-hover:border-blue-500/50 transition-colors ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-xl font-display font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                    <div className="flex items-center gap-2">
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}
                          title="Portfolio"
                        >
                          <Globe size={18} />
                        </a>
                      )}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={`hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-blue-500 font-mono uppercase tracking-widest mb-4">{member.role}</p>

                  <div className={`border-t pt-4 text-[10px] font-mono ${theme === 'dark' ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                    <span className="block text-gray-500 uppercase mb-2">Contributions</span>
                    <ul className="space-y-1">
                      {member.contributions.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-blue-500">•</span>
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index === 1 && (
                  <div className={`absolute -top-4 -right-4 w-24 h-24 border border-dashed rounded-full animate-spin-slow z-0 ${theme === 'dark' ? 'border-white/20' : 'border-gray-300'}`}></div>
                )}
              </div>
            ))}

         </div>

         <div className={`text-center mt-8 text-[10px] font-mono tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'}`}>
            Group 2 - Capstone Project
         </div>
      </div>
    </section>
  );
};

export default Team;