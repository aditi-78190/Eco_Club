import { useState } from 'react';
import { ECO_TIPS, EcoTip } from '../data/tipsData';
import {
  Sparkles,
  Shuffle,
  Lightbulb,
  Droplet,
  Zap,
  Recycle,
  HeartHandshake,
  Check,
  TrendingUp,
} from 'lucide-react';

export default function SustainabilityTips() {
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Plastic Reduction',
    'Water Conservation',
    'Energy Saving',
    'Waste Segregation',
    'Sustainable Lifestyle',
  ];

  const filteredTips =
    activeCategory === 'All'
      ? ECO_TIPS
      : ECO_TIPS.filter((t) => t.category === activeCategory);

  const currentTip: EcoTip = filteredTips[selectedTipIndex % filteredTips.length] || ECO_TIPS[0];

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const nextIndex = Math.floor(Math.random() * filteredTips.length);
      setSelectedTipIndex(nextIndex);
      setIsShuffling(false);
    }, 200);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Water Conservation':
        return Droplet;
      case 'Energy Saving':
        return Zap;
      case 'Waste Segregation':
        return Recycle;
      case 'Plastic Reduction':
        return Recycle;
      default:
        return HeartHandshake;
    }
  };

  const CatIcon = getCategoryIcon(currentTip.category);

  return (
    <section id="sustainability" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Sustainability Corner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            A Greener Habit Every Day
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Sustainability isn&apos;t just about big pledges. It is woven through our everyday choices in college classrooms, hostels, and cafeteria tables.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F7F8F2] border border-stone-200/90 shadow-xs gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedTipIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#123D2A] text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-[#123D2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Interactive Tip Showcase */}
        <div className="max-w-4xl mx-auto bg-[#F7F8F2] rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#123D2A] text-emerald-300 flex items-center justify-center shrink-0">
                <CatIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F8A55] block">
                  {currentTip.category} · Habit #{selectedTipIndex + 1}
                </span>
                <span className="text-xs text-stone-500">
                  Difficulty: {currentTip.difficulty}
                </span>
              </div>
            </div>

            {/* Random Shuffle Button */}
            <button
              type="button"
              onClick={handleShuffle}
              disabled={isShuffling}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-stone-300 hover:border-[#1F8A55] text-[#123D2A] shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <Shuffle className={`w-3.5 h-3.5 text-[#1F8A55] ${isShuffling ? 'animate-spin' : ''}`} />
              <span>Discover Another Green Tip</span>
            </button>
          </div>

          {/* Tip Headline & Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D2A] leading-tight">
              {currentTip.title}
            </h3>

            {/* Actionable Step Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1F8A55] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 block mb-1">
                  How To Put It Into Practice
                </span>
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                  {currentTip.actionableStep}
                </p>
              </div>
            </div>

            {/* Did You Know & Impact split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-2xl p-5 border border-stone-200/80">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1F8A55] block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Did You Know?</span>
                </span>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {currentTip.didYouKnow}
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 border border-stone-200/80">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800 block mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Ecological Impact</span>
                </span>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {currentTip.impactImpact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
