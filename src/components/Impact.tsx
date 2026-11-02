import { useState, useEffect } from "react";
import {
  TreePine,
  CalendarCheck,
  Users2,
  Sparkles,
  Leaf,
  Droplets,
  Wind,
  Info,
  Sliders,
} from "lucide-react";

export default function Impact() {
  const [sliderSaplings, setSliderSaplings] = useState<number>(350);

  // Animated counters simulation
  const [counters, setCounters] = useState({
    trees: 0,
    events: 0,
    volunteers: 0,
    initiatives: 0,
  });

  const targets = {
    trees: 420,
    events: 24,
    volunteers: 100,
    initiatives: 18,
  };

  useEffect(() => {
    let frame = 0;
    const totalFrames = 40;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        trees: Math.floor(targets.trees * eased),
        events: Math.floor(targets.events * eased),
        volunteers: Math.floor(targets.volunteers * eased),
        initiatives: Math.floor(targets.initiatives * eased),
      });

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Calculated estimates based on slider
  const co2OffsetPerYear = (sliderSaplings * 22).toLocaleString(); // avg tree absorbs ~22kg CO2/year
  const oxygenProducedPerDay = (sliderSaplings * 0.28).toFixed(1); // kg oxygen
  const studentsInvolved = Math.round(sliderSaplings * 1.6);

  return (
    <section
      id="impact"
      className="py-24 bg-[#123D2A] text-white relative overflow-hidden"
    >
      {/* Background radial gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Eco Impact Metrics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Measuring Our Ecological Footprint
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-3">
            Every seedling planted, every litter-free quadrangle, and every line
            of green code contributes towards a healthier campus ecosystem.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-200/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Info className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              Official Note: These figures represent illustrative demo targets &
              sample metrics for the 2026 academic year
            </span>
          </div>
        </div>

        {/* 4 Animated KPI Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Stat 1 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-all flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-6">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1 tabular-nums">
                {counters.trees}
                <span className="text-emerald-400">+</span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-1">
                Trees Planted
              </h3>
              <p className="text-xs text-stone-300">
                Native saplings nurtured across campus & perimeter green belts
                (Sample metric).
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-all flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-6">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1 tabular-nums">
                {counters.events}
                <span className="text-emerald-400">+</span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-1">
                Events Organised
              </h3>
              <p className="text-xs text-stone-300">
                Workshops, plogging sweeps, hackathons & symposiums held on
                campus (Sample metric).
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-all flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-6">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1 tabular-nums">
                {counters.volunteers}
                <span className="text-emerald-400">+</span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-1">
                Volunteers Engaged
              </h3>
              <p className="text-xs text-stone-300">
                Passionate engineering students actively contributing hours to
                green initiatives (Sample metric).
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-all flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1 tabular-nums">
                {counters.initiatives}
                <span className="text-emerald-400">+</span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-1">
                Active Initiatives
              </h3>
              <p className="text-xs text-stone-300">
                Pillars spanning e-waste recycling, clean air checks & paperless
                administration (Sample metric).
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Impact Visualizer Box */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Control Column */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Projection Calculator</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4">
                Simulate Campus Afforestation Impact
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Adjust the slider below to simulate the projected annual
                ecological benefits of planting native trees around ABES
                Engineering College.
              </p>

              {/* Slider Component */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-stone-300">
                    Simulated Saplings Planted:
                  </span>
                  <span className="text-emerald-300 font-serif text-xl font-bold tabular-nums">
                    {sliderSaplings} saplings
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={sliderSaplings}
                  onChange={(e) => setSliderSaplings(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>50 (Small Drive)</span>
                  <span>500 (Campus Phase)</span>
                  <span>1000 (City Green Belt)</span>
                </div>
              </div>
            </div>

            {/* Right Metric Circular Visualization */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Output 1: CO2 */}
              <div className="bg-black/30 rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Wind className="w-5 h-5" />
                </div>
                <div className="font-serif text-2xl font-bold text-white mb-1 tabular-nums">
                  {co2OffsetPerYear} kg
                </div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-200/80 font-medium">
                  Estimated CO₂ Absorption / Year
                </span>
              </div>

              {/* Output 2: Oxygen */}
              <div className="bg-black/30 rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <div className="font-serif text-2xl font-bold text-white mb-1 tabular-nums">
                  {oxygenProducedPerDay} kg
                </div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-200/80 font-medium">
                  Est. Daily Oxygen Output
                </span>
              </div>

              {/* Output 3: Student Engaged */}
              <div className="bg-black/30 rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Users2 className="w-5 h-5" />
                </div>
                <div className="font-serif text-2xl font-bold text-white mb-1 tabular-nums">
                  {studentsInvolved}
                </div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-200/80 font-medium">
                  Student Volunteer Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
