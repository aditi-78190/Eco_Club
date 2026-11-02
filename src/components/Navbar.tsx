import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#123D2A]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-emerald-900/40 py-3.5'
          : 'bg-gradient-to-b from-[#123D2A]/90 via-[#123D2A]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-[#1F8A55] flex items-center justify-center text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-[#123D2A] stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Eco Club
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-200/80 font-medium">
                ABES Engineering College
              </span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-white ${
                    isActive ? 'text-white font-semibold' : 'text-stone-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#join"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#123D2A] bg-emerald-300 hover:bg-emerald-200 active:scale-95 transition-all shadow-md shadow-emerald-950/20 whitespace-nowrap"
            >
              <span>Join Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#123D2A] border-b border-emerald-800/60 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-800/50 text-white font-semibold'
                      : 'text-stone-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-emerald-800/40">
            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-400 text-[#123D2A] font-semibold text-sm hover:bg-emerald-300 transition-colors"
            >
              <span>Become a Member</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
