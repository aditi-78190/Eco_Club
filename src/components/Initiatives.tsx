import { useState } from 'react';
import { INITIATIVES_DATA, Initiative } from '../data/initiativesData';
import { Leaf, ArrowRight, CheckCircle2, Target, X, Info } from 'lucide-react';

export default function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <section id="initiatives" className="py-24 bg-[#F7F8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Active Environmental Programs</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Our Campus Initiatives
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From afforestation drives to smart IoT monitoring, explore how our student teams make tangible environmental contributions on campus and beyond.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-stone-500 bg-white px-3 py-1 rounded-full border border-stone-200">
            <Info className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Sample showcase content curated for demonstration</span>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIATIVES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Styled Fallback */}
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#123D2A]/90 text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs text-emerald-200 font-medium">
                    {item.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#123D2A] mb-2 group-hover:text-[#1F8A55] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-500">
                    Target: {item.metricsTarget}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedInitiative(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F8A55] hover:text-[#123D2A] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More Modal Dialog */}
      {selectedInitiative && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedInitiative(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-stone-800 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedInitiative(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1F8A55]">
                {selectedInitiative.category}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-xs text-stone-500">{selectedInitiative.status} Program</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A] mb-3">
              {selectedInitiative.title}
            </h3>
            <p className="text-sm font-medium text-[#1F8A55] mb-5">
              {selectedInitiative.tagline}
            </p>

            {/* Modal Image */}
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-stone-100">
              <img
                src={selectedInitiative.image}
                alt={selectedInitiative.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full narrative */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Overview & Context
              </h4>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {selectedInitiative.fullDesc}
              </p>
            </div>

            {/* Strategic Objectives List */}
            <div className="mb-6 bg-[#F7F8F2] rounded-2xl p-5 border border-stone-200/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#123D2A] mb-3 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#1F8A55]" />
                <span>Action Objectives</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedInitiative.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1F8A55] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestone target badge */}
            <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span>Demo Metric Target:</span>
              <span className="font-semibold text-[#123D2A] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {selectedInitiative.metricsTarget}
              </span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedInitiative(null)}
                className="px-6 py-2.5 text-sm font-medium bg-[#123D2A] text-white rounded-xl hover:bg-[#1F8A55] transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
