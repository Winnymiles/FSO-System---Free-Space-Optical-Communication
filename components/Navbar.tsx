import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const navItems: NavItem[] = [
  { label: 'Project', href: '#about' },
  { label: 'System', href: '#gallery' },
  { label: 'Tech', href: '#parts' },
  { label: 'Partners', href: '#sponsorships' },
  { label: 'Research', href: '#insights' },
  { label: 'Team', href: '#team' },
  { label: 'Timeline', href: '#adventures' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When not scrolled, always use light text (hero is dark in both modes)
  const useLightText = !isScrolled || theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
            : 'bg-[#eef0f4]/90 backdrop-blur-md border-gray-200 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`font-display font-bold text-2xl tracking-widest flex items-center gap-2 ${useLightText ? 'text-white' : 'text-gray-900'}`}>
          <div className="w-8 h-8 border-2 border-blue-500 rounded-br-lg rounded-tl-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className={`w-2 h-2 rounded-full animate-pulse ${useLightText ? 'bg-white' : 'bg-blue-500'}`}></div>
          </div>
          FSO SYSTEM
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-mono uppercase tracking-[0.15em] transition-colors relative group ${
                useLightText ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all group-hover:w-full ${
                useLightText ? 'bg-white' : 'bg-gray-900'
              }`}></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-colors ${
              useLightText
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-colors ${
              useLightText
                ? 'border-white/20 text-white'
                : 'border-gray-300 text-gray-700'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={useLightText ? 'text-white' : 'text-gray-900'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col space-y-4 ${
          theme === 'dark' ? 'bg-black/95 border-white/10' : 'bg-white/95 border-gray-200'
        }`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-mono uppercase tracking-widest ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
