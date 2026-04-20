import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80",
    alt: "Close-up of frost crystals on a surface",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    alt: "Wildflowers in soft natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Portrait in natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    alt: "Misty mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Forest light through trees",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    alt: "Ocean waves at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80",
    alt: "Starry sky over landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    alt: "Urban architecture geometry",
  },
];

export default function Photography() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const prev = () => setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setLightbox((i) => (i + 1) % PHOTOS.length);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setLightbox(null);
  };

  return (
    <section id="photography" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12"
        >
          <div className="max-w-xl">
            <div className="text-xs font-mono text-muted-foreground tracking-widest mb-3">
              PERSONAL · PHOTOGRAPHY
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
              Photography <span className="font-normal text-muted-foreground">(Hobby)</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm lg:text-base max-w-lg">
              Outside the lab, photography serves as a quiet creative outlet — a practice in observation, 
              composition, and the interplay of light and detail. The same attention to precision that 
              drives scientific work translates naturally into framing a scene.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3"
        >
          {PHOTOS.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300 rounded-xl" />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[lightbox].src.replace("w=800", "w=1200")}
                alt={PHOTOS[lightbox].alt}
                className="w-full h-full object-contain rounded-xl max-h-[80vh]"
              />

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/60 tracking-widest">
                {lightbox + 1} / {PHOTOS.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}