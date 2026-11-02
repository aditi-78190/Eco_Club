import { Leaf, ArrowUp, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Events & Drives', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Eco Impact', href: '#impact' },
    { label: 'Sustainability Tips', href: '#sustainability' },
    { label: 'Join Us', href: '#join' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0e2c1e] text-white pt-20 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-[#1F8A55] flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5 text-[#123D2A] stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                  Eco Club
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-medium">
                  ABES Engineering College, Ghaziabad
                </span>
              </div>
            </div>

            <p className="font-serif text-emerald-200 text-sm tracking-wide italic">
              &ldquo;THINK. ACT. CODE. WORK GREENER.&rdquo;
            </p>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering students to champion environmental preservation, carbon reduction, campus biodiversity, and technological sustainability.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ecoclub_abes"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-400/20 text-stone-300 hover:text-emerald-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/eco-club-abes-ec"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-400/20 text-stone-300 hover:text-emerald-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn placeholder"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:ecoclub@abes.ac.in"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-400/20 text-stone-300 hover:text-emerald-300 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Email Secretariat"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-emerald-300 transition-colors py-1 truncate"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* College Campus Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4">
              Campus Location
            </h4>
            <div className="flex items-start gap-2 text-xs text-stone-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                ABES Engineering College<br />
                Campus NH-24, Delhi-Hapur Bypass Rd,<br />
                Ghaziabad, UP 201009
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-300 pt-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ecoclub@abes.ac.in</span>
            </div>
            <p className="text-[11px] text-stone-400 italic pt-2">
              Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p className="font-medium text-stone-300">
              Designed with purpose. Driven by sustainability.
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              &copy; {new Date().getFullYear()} Eco Club, ABES Engineering College, Ghaziabad. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
