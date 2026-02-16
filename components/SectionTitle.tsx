import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, className = '' }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-baseline space-x-4 mb-12 ${className}`}>
      <h2 className={`text-2xl md:text-3xl font-display tracking-[0.2em] uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <span className={`font-mono text-lg tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-gray-400'}`}>
        [{number}]
      </span>
    </div>
  );
};

export default SectionTitle;