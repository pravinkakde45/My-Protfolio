"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Compass, Heart, Camera } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  category: "Traditional" | "Casual" | "Formal";
  title: string;
  description: string;
  aspectClass: string; // for Bento grid styling
  focalClass: string; // to frame face perfectly
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/gallery-1.jpg",
    category: "Traditional",
    title: "Emerald Sunglasses Portrait",
    description: "Close-up cinematic framing wearing green traditional kurti and dark shades.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 2,
    src: "/gallery/gallery-2.jpg",
    category: "Casual",
    title: "Casual Azure Striped",
    description: "Relaxed look in a vertical light-blue and white striped cotton shirt.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 3,
    src: "/gallery/gallery-3.jpg",
    category: "Traditional",
    title: "Intricate Crimson close-up",
    description: "Traditional maroon-red kurti close-up detailing fine custom craftsmanship.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 4,
    src: "/gallery/gallery-4.jpg",
    category: "Traditional",
    title: "Emerald Wall-Lean",
    description: "Traditional green kurti full-body posture standing gracefully outdoors.",
    aspectClass: "md:col-span-1 md:row-span-2",
    focalClass: "object-[center_15%]",
  },
  {
    id: 5,
    src: "/gallery/gallery-5.jpg",
    category: "Traditional",
    title: "Crimson Tree-Lean Stance",
    description: "Traditional red kurti full-body stand leaning next to garden tree trunk.",
    aspectClass: "md:col-span-1 md:row-span-2",
    focalClass: "object-[center_15%]",
  },
  {
    id: 6,
    src: "/gallery/gallery-6.jpg",
    category: "Casual",
    title: "Sky-Blue Casuals",
    description: "Standing posture looking down casually against a clean white wall.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 7,
    src: "/gallery/gallery-7.jpg",
    category: "Traditional",
    title: "Embroidered Crimson Halftrack",
    description: "Staggered portrait in red traditional wear displaying rich fabric textures.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 8,
    src: "/gallery/gallery-8.jpg",
    category: "Traditional",
    title: "Traditional Emerald Stature",
    description: "Elegant outdoor pose wearing traditional green kurti with white trousers.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 9,
    src: "/gallery/gallery-9.jpg",
    category: "Traditional",
    title: "Emerald Garden Lean",
    description: "Full posture standing leaning next to garden foliage and brick wall.",
    aspectClass: "md:col-span-1 md:row-span-1",
    focalClass: "object-[center_15%]",
  },
  {
    id: 10,
    src: "/gallery/gallery-10.jpg",
    category: "Casual",
    title: "Horizon Mountain Vista",
    description: "Standing on a scenic mountain summit, looking off into mountain ranges under soft clouds.",
    aspectClass: "md:col-span-2 md:row-span-2",
    focalClass: "object-cover",
  },
  {
    id: 11,
    src: "/gallery/gallery-11.jpg",
    category: "Casual",
    title: "Temple Steps Leisure",
    description: "Relaxed outdoor pose on flight of steps, wearing layered blue shirt and dark trousers.",
    aspectClass: "md:col-span-1 md:row-span-2",
    focalClass: "object-[center_15%]",
  },
  {
    id: 12,
    src: "/gallery/gallery-12.jpg",
    category: "Casual",
    title: "Sunset Shore Contemplation",
    description: "Scenic profile silhouette overlooking golden sunset horizons above the sea.",
    aspectClass: "md:col-span-2 md:row-span-1",
    focalClass: "object-cover",
  }
];

const CATEGORIES = ["All", "Traditional", "Casual"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered list of images based on active tab
  const filteredImages = GALLERY_IMAGES.filter((img) =>
    selectedCategory === "All" ? true : img.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const openFullGallery = () => {
    setIsFullGalleryOpen(true);
  };

  const closeFullGallery = () => {
    setIsFullGalleryOpen(false);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
      } else if (isFullGalleryOpen) {
        if (e.key === "Escape") closeFullGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, isFullGalleryOpen, closeLightbox, showNext, showPrev]);

  // Instantly close overlay when clicking floating Navbar header items
  useEffect(() => {
    const handleCloseOverlays = () => {
      setIsFullGalleryOpen(false);
      setLightboxIndex(null);
    };
    window.addEventListener("closeActiveOverlays", handleCloseOverlays);
    return () => {
      window.removeEventListener("closeActiveOverlays", handleCloseOverlays);
    };
  }, []);

  // Clean centralized body overflow scroll control for Lenis and mobile support
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (isFullGalleryOpen || lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "unset";
      if (lenis) {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      if (lenis) {
        lenis.start();
      }
    };
  }, [isFullGalleryOpen, lightboxIndex]);

  return (
    <section id="gallery" className="relative py-24 bg-dark-bg/20 overflow-hidden">
      {/* Decorative cyber grid background lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Teaser Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 mb-6"
            >
              <Camera className="w-3.5 h-3.5 text-neon-blue" />
              <span className="text-[10px] font-bold tracking-widest text-neon-blue uppercase">
                LIFE BEYOND CODE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase leading-tight"
            >
              VISUAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">
                CHRONICLES
              </span>
            </motion.h2>

            {/* Inspiring photography theme quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-6 py-2 border-l-2 border-neon-purple/40 mb-6 max-w-xl"
            >
              <p className="text-lg md:text-xl text-gray-300 font-display italic font-light leading-relaxed">
                &ldquo;Photography is the story I fail to put into words.&rdquo;
              </p>
              <p className="text-xs text-neon-cyan tracking-wider font-semibold mt-2 uppercase">
                — Pravin Kakde
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8 max-w-xl"
            >
              Beyond compiling applications and building architectures, I capture quiet moments. This collection chronicles local traditional celebrations, outdoor heights, and shoreside reflections.
            </motion.p>

            {/* Magnetic Interactive View Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={openFullGallery}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(0,210,255,0.2)] hover:shadow-[0_0_30px_rgba(111,0,255,0.4)] transition-all duration-300 border border-white/10 flex items-center gap-3 overflow-hidden group cursor-pointer"
              data-cursor-text="EXPLORE"
            >
              <span className="relative z-10">View My Gallery</span>
              <Compass className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover:rotate-185 text-white" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:translate-x-0 transition-transform duration-300 -z-10" />
            </motion.button>
          </div>

          {/* Right Side: Double-Layered Cover Photo Tilt Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl p-[1.5px] bg-gradient-to-br from-neon-blue/30 via-transparent to-neon-purple/30 group shadow-[0_0_40px_rgba(0,210,255,0.08)]"
              data-cursor-text="TEASER"
            >
              {/* Outer neon trailing shadow glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

              {/* Cover Card Inner Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-dark-bg/60 border border-white/5 flex flex-col justify-end p-6">
                {/* Visual Cover Photo (Sunset Shore Silhouette) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gallery/gallery-12.jpg"
                  alt="Gallery Horizon Cover"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cyber gradients overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/10 to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/30 transition-colors duration-500 rounded-3xl pointer-events-none" />

                {/* Teaser info tag */}
                <div className="relative z-10 flex flex-col items-start">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold text-gray-300 uppercase tracking-widest mb-3">
                    <Heart className="w-2.5 h-2.5 text-neon-purple animate-pulse" />
                    Cover Story
                  </div>
                  <h3 className="font-display font-black text-xl text-white tracking-wide uppercase leading-tight group-hover:text-neon-cyan transition-colors duration-300">
                    Sunset Shore
                  </h3>
                  <p className="text-[10px] text-gray-400 font-light mt-1 uppercase tracking-widest">
                    12 Moments Documented
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Cinematic Full-screen Bento Grid Modal overlay */}
      <AnimatePresence>
        {isFullGalleryOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ type: "spring", damping: 30, stiffness: 180 }}
            className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-3xl overflow-y-auto"
            data-lenis-prevent
          >
            {/* Top Fixed Navigation HUD */}
            <div className="sticky top-0 w-full z-50 bg-dark-bg/60 backdrop-blur-xl border-b border-white/5 py-5 px-6">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-display font-black text-xs text-white">
                    PK
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-white tracking-widest uppercase">
                      PRAVIN&apos;S CHRONICLES
                    </h3>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      Interactive Catalog
                    </p>
                  </div>
                </div>

                {/* Categories Tab Selector inside HUD */}
                <div className="hidden md:flex gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-neon-blue/15 to-neon-purple/15 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,210,255,0.15)]"
                          : "bg-white/2 border-white/5 text-gray-400 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Close Overlay Trigger */}
                <button
                  onClick={closeFullGallery}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-neon-purple/40 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group cursor-pointer shadow-lg"
                  data-cursor-text="CLOSE"
                >
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-neon-purple" />
                </button>
              </div>

              {/* Mobile view only Category tabs block */}
              <div className="flex md:hidden justify-center gap-2 mt-4 flex-wrap">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-neon-blue/15 to-neon-purple/15 border-neon-blue text-neon-blue"
                        : "bg-white/2 border-white/5 text-gray-400"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body: Bento Masonry Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12 pb-24 relative z-10">
              
              <div className="text-center mb-10 md:hidden">
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">
                  FULL GALLERY
                </h3>
                <p className="text-xs text-gray-400 font-light">
                  Click any card to open lightbox details
                </p>
              </div>

              {/* Bento Grid */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px]"
              >
                <AnimatePresence mode="popLayout">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`relative group rounded-2xl overflow-hidden bg-white/2 border border-white/5 cursor-pointer shadow-lg overflow-hidden flex flex-col justify-end ${image.aspectClass}`}
                      onClick={() => openLightbox(index)}
                      data-cursor-text="VIEW"
                    >
                      {/* Visual Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${image.focalClass}`}
                        loading="lazy"
                      />

                      {/* Cyber Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300 pointer-events-none" />

                      {/* Interactive Neon Outline Border on Hover */}
                      <div className="absolute inset-0 border border-neon-blue/0 group-hover:border-neon-blue/40 transition-colors duration-500 rounded-2xl pointer-events-none" />

                      {/* Corner Accents */}
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-dark-bg/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <Maximize2 className="w-3.5 h-3.5 text-neon-blue" />
                      </div>

                      {/* Card Content */}
                      <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20 text-[9px] font-bold text-neon-blue tracking-widest uppercase">
                            {image.category}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-white tracking-wide truncate group-hover:text-neon-cyan transition-colors duration-300">
                          {image.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 font-light mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {image.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Full-screen Lightbox Carousel Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 bg-dark-bg/90 backdrop-blur-2xl"
          >
            {/* Top HUD Controls */}
            <div className="flex items-center justify-between w-full relative z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-bold uppercase tracking-widest">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {lightboxIndex + 1} of {filteredImages.length}
                </span>
              </div>

              {/* Close Lightbox button */}
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-neon-blue/40 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group cursor-pointer shadow-lg"
                data-cursor-text="CLOSE"
              >
                <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-neon-cyan" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex items-center justify-between flex-1 relative my-6">
              
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-0 md:left-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-neon-blue/40 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer shadow-lg group"
                data-cursor-text="PREV"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5 text-neon-blue" />
              </button>

              {/* Image Stage */}
              <div className="w-full max-w-4xl mx-auto h-[55vh] md:h-[70vh] flex items-center justify-center relative px-12 select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full relative flex items-center justify-center rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-black/20"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={filteredImages[lightboxIndex].src}
                      alt={filteredImages[lightboxIndex].title}
                      className="max-w-full max-h-full object-contain rounded-xl select-none pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-0 md:right-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-neon-blue/40 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer shadow-lg group"
                data-cursor-text="NEXT"
              >
                <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 text-neon-blue" />
              </button>
            </div>

            {/* Bottom Captions panel */}
            <div className="max-w-3xl mx-auto w-full text-center relative z-10 pb-4">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wide mb-2 uppercase">
                  {filteredImages[lightboxIndex].title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                  {filteredImages[lightboxIndex].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
