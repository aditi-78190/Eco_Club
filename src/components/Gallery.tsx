import { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import {
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Calendar,
  MapPin,
  Play,
} from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Plantation Drives',
    'Campus Activities',
    'Workshops',
    'Awareness Campaigns',
    'Club Events',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] || null : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! === 0 ? filteredItems.length - 1 : prev! - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleClose = () => {
    setLightboxIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 bg-[#F7F8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#123D2A] text-xs font-semibold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-[#1F8A55]" />
            <span>Visual Chronicles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#123D2A] tracking-tight mb-4">
            Captured Moments of Green Action
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Browse photographs and field highlights from our campus tree planting drives, environmental workshops, cleanups, and team assemblies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-stone-200/90 shadow-xs gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#123D2A] text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-[#123D2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-xs hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Affordance */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Captions */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="font-serif text-base font-semibold leading-tight line-clamp-2 mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-stone-300">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-sm transition-all z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Lightbox Card */}
          <div
            className="max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-white/10 text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] flex items-center justify-center bg-black overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption Deck */}
            <div className="p-6 sm:p-8 bg-stone-950/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                    {activeItem.category}
                  </span>
                  <span className="text-stone-500">·</span>
                  <span className="text-xs text-stone-400">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>

              <div className="shrink-0 space-y-1.5 text-xs text-stone-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeItem.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeItem.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
