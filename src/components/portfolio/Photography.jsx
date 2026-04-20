import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
];

// Each cell gets a random starting offset so they don't all cycle in sync
function PhotoCell({ allPhotos, startOffset }) {
  const [idx, setIdx] = useState(startOffset % allPhotos.length);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % allPhotos.length);
    }, 3000 + startOffset * 400); // staggered slow cycling, ~3s per photo
    return () => clearInterval(t);
  }, [allPhotos.length]);

  return (
    <>
      <button
        onClick={() => setLightbox(true)}
        className="group relative aspect-square overflow-hidden rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 focus:outline-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={allPhotos[idx]}
            alt="Photography"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300 rounded-xl" />
      </button>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allPhotos[idx].replace("w=800", "w=1200")}
                alt="Photography"
                className="w-full object-contain rounded-xl max-h-[80vh]"
              />
              <button
                onClick={() => setLightbox(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIdx((i) => (i - 1 + allPhotos.length) % allPhotos.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % allPhotos.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/60 tracking-widest">
                {idx + 1} / {allPhotos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const OFFSETS = [0, 2, 4, 6, 1, 3, 5, 7];

export default function Photography() {
  return (
    <section id="photography" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-3"
        >
          {OFFSETS.map((offset, i) => (
            <PhotoCell key={i} allPhotos={PHOTOS} startOffset={offset} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}