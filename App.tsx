import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Parts from './components/Parts';
import Insights from './components/Insights';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Adventures from './components/Adventures';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#030304] text-white'
        : 'bg-[#eef0f4] text-gray-900'
    }`}>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Sponsors />
      <Parts />
      <Insights />
      <Team />
      <Testimonials />
      <Adventures />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;