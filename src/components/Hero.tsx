import { ArrowDown, Sparkles, Compass, UserPlus } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#123D2A]"
    >
      {/* Background Image with Ambient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/eco_hero_forest_1793624155237.jpg"
          alt="Lush green sunlit forest canopy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
        />
        {/* Editorial Gradients & Deep Forest Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#123D2A]/85 via-[#123D2A]/75 to-[#123D2A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Organic Leaf Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-emerald-400/30 blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-emerald-300/25 blur-sm" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-emerald-200/30 blur-sm" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* College & Club Badge Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-emerald-200 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span className="tracking-wide">ECO CLUB · ABES ENGINEERING COLLEGE</span>
        </div>

        {/* Club Tagline */}
        <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-emerald-300/90 mb-4">
          THINK. ACT. CODE. WORK GREENER.
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 text-balance leading-[1.1] max-w-4xl drop-shadow-sm">
          Small Actions.<br />
          <span className="italic font-normal text-emerald-300">Greener Tomorrow.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed mb-8 text-balance">
          Building a sustainable future through awareness, innovation, technology, and collective action.
        </p>

        {/* Introductory Statement Quote */}
        <div className="relative max-w-xl mx-auto px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 text-emerald-100 text-xs sm:text-sm italic mb-10 text-balance">
          &ldquo;We believe that a greener future begins with the choices we make today.&rdquo;
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold bg-emerald-400 text-[#123D2A] hover:bg-emerald-300 active:scale-95 transition-all shadow-lg shadow-emerald-950/40"
          >
            <UserPlus className="w-4 h-4" />
            <span>Become a Member</span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 active:scale-95 border border-white/20 transition-all backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>Explore Our Mission</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-300/80 hover:text-white transition-colors cursor-pointer">
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center gap-1 group">
          <span className="text-[11px] uppercase tracking-widest text-emerald-200/70 group-hover:text-emerald-200 transition-colors">
            Scroll Down
          </span>
          <div className="w-7 h-10 rounded-full border border-emerald-300/30 flex items-start justify-center p-1.5 group-hover:border-emerald-300/60 transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-300 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
