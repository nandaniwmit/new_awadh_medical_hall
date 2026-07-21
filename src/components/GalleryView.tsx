import React, { useState, useEffect } from "react";
import { GALLERY_DATA } from "../types";
import { Maximize2, ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Filter images based on category tab
  const filteredImages = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category === selectedCategory);

  const categories = ["All", "Store Front", "Medicine Shelves", "Products", "Medical Equipment", "Customers"];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox(1);
      } else if (e.key === "ArrowLeft") {
        navigateLightbox(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const openLightbox = (id: string) => {
    const index = GALLERY_DATA.findIndex((img) => img.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
      setZoomScale(1);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(1);
  };

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    let nextIndex = lightboxIndex + direction;
    if (nextIndex >= GALLERY_DATA.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = GALLERY_DATA.length - 1;
    }
    setLightboxIndex(nextIndex);
    setZoomScale(1);
  };

  const handleZoom = (amount: number) => {
    setZoomScale((prev) => Math.min(Math.max(prev + amount, 0.5), 3));
  };

  const currentLightboxImage = lightboxIndex !== null ? GALLERY_DATA[lightboxIndex] : null;

  return (
    <div className="space-y-12 py-12 text-left">
      
      {/* Gallery Header */}
      <section className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/5 dark:from-gray-900 dark:to-gray-950 border-b border-gray-150 dark:border-gray-800 py-16 text-center rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="relative z-10 space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest bg-white dark:bg-gray-850 px-3 py-1 rounded-full shadow-sm">
            Visual Tour
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Our Store Gallery
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
            Browse through New Awadh Medical Hall’s physical spaces. Meticulously cataloged shelves, certified equipment, and friendly pharmacy environments.
          </p>
        </div>
      </section>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wide transition cursor-pointer ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15"
                : "bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img.id)}
              className="break-inside-avoid bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-gray-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition duration-300 group cursor-pointer relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {img.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> Photo
                  </span>
                </div>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-sm">
                  {img.title}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE LIGHTBOX POPUP WITH ZOOM */}
      {currentLightboxImage && (
        <div className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm flex flex-col justify-between p-4">
          
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between text-white p-2">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                {currentLightboxImage.category}
              </span>
              <h2 className="text-sm font-extrabold">{currentLightboxImage.title}</h2>
            </div>

            {/* Lightbox Control Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleZoom(0.25)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                title="Zoom In"
              >
                <ZoomIn className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => handleZoom(-0.25)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-4.5 h-4.5" />
              </button>
              <span className="text-xs font-mono px-2 py-1 bg-white/10 rounded">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 bg-red-650 hover:bg-red-700 rounded-lg transition ml-4"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center: Image with zoom and navigation */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
            
            {/* Left Button */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Stage */}
            <div
              className="transition-transform duration-200 max-w-full max-h-[70vh] flex items-center justify-center select-none"
              style={{ transform: `scale(${zoomScale})` }}
            >
              <img
                src={currentLightboxImage.imageUrl}
                alt={currentLightboxImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Footer Description */}
          <div className="max-w-xl mx-auto text-center text-gray-400 text-xs pb-4 px-4 leading-relaxed">
            {currentLightboxImage.description}
            <div className="text-[10px] text-gray-500 mt-2">
              Image {GALLERY_DATA.findIndex(img => img.id === currentLightboxImage.id) + 1} of {GALLERY_DATA.length} • Drag zoom bar or scroll to adjust visual frame • Press ESC to quit.
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
