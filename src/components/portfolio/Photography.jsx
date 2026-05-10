import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  "/1_lal.jpeg", "/2_lal.jpeg", "/3_lal.jpeg", "/4_lal.jpeg", "/5_lal.jpeg",
  "/6_lal.jpeg", "/7_lal.jpeg", "/8_lal.jpeg", "/9_lal.jpeg", "/10_lal.jpeg",
  "/11_lal.jpeg", "/12_lal.jpeg", "/13_lal.jpeg", "/14_lal.jpeg", "/15_lal.jpeg",
  "/16_lal.jpeg", "/17_lal.jpeg", "/18_lal.jpeg", "/19_lal.jpeg", "/20_lal.jpeg",
  "/21_lal.jpeg", "/22_lal.jpeg", "/23_lal.jpeg"
];

function PhotoCell({ allPhotos, startOffset, className = "" }) {
  const [idx, setIdx] = useState(startOffset % allPhotos.length);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const changeImage = () => {
      setIdx((prevIdx) => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * allPhotos.length);
        } while (nextIdx === prevIdx && allPhotos.length > 1);
        return nextIdx;
      });
    };

    // SLOWER DURATION: Changes every 8 to 12 seconds
    const randomDuration = 8000 + Math.random() * 4000;

    const t = setInterval(changeImage, randomDuration);
    return () => clearInterval(t);
  }, [allPhotos.length]);

  return (
    <>
      <button
        onClick={() => setLightbox(true)}
        className={`group relative overflow-hidden rounded-2xl bg-secondary border border-border hover:border-primary/40 transition-all duration-500 focus:outline-none ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={allPhotos[idx]}
            alt="Photography"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }} // Slow, elegant fade
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </button>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={allPhotos[idx]} alt="Full view" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
              <button onClick={() => setLightbox(false)} className="absolute -top-14 right-0 text-white/70 hover:text-white transition-colors">
                <X className="w-10 h-10" />
              </button>
              <button onClick={() => setIdx((i) => (i - 1 + allPhotos.length) % allPhotos.length)} className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % allPhotos.length)} className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all">
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Photography() {
  return (
    <section id="photography" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="text-xs font-mono text-primary tracking-widest mb-3">04 · CREATIVE OUTLET</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Photography <span className="font-light text-muted-foreground italic">Gallery</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-2xl">
            A practice in observation and the interplay of light. These captures represent moments of stillness away from the laboratory.
          </p>
        </motion.div>

        {/* PROFESSIONAL BENTO COLLAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
          {/* Main Large Feature */}
          <PhotoCell allPhotos={PHOTOS} startOffset={0} className="col-span-2 row-span-2 md:col-span-2 md:row-span-2" />
          
          {/* Vertical Tall Feature */}
          <PhotoCell allPhotos={PHOTOS} startOffset={5} className="col-span-1 row-span-2" />
          
          {/* Smaller Square Blocks */}
          <PhotoCell allPhotos={PHOTOS} startOffset={12} className="col-span-1 row-span-1" />
          <PhotoCell allPhotos={PHOTOS} startOffset={8} className="col-span-1 row-span-1" />
          
          {/* Horizontal Wide Feature */}
          <PhotoCell allPhotos={PHOTOS} startOffset={3} className="col-span-2 row-span-1" />
        </div>
      </div>
    </section>
  );
}
