import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Initiatives from './components/Initiatives';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import JoinUs from './components/JoinUs';
import SustainabilityTips from './components/SustainabilityTips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionIds = [
        'home',
        'about',
        'team',
        'initiatives',
        'events',
        'gallery',
        'impact',
        'sustainability',
        'join',
        'contact',
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F8F2] text-stone-800 flex flex-col font-sans selection:bg-[#1F8A55] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Team />
        <Initiatives />
        <Events />
        <Gallery />
        <Impact />
        <JoinUs />
        <SustainabilityTips />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#123D2A] text-white hover:bg-[#1F8A55] shadow-lg shadow-black/20 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-emerald-700/50"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-emerald-300" />
        </button>
      )}
    </div>
  );
}
