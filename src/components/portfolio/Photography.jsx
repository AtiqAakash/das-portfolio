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

    // SPEED CONTROL: 
    // 5000 (base ms) + 3000 (random variance) = changes every 5-8 seconds.
    const randomDuration = 5000 + Math.random() * 3000;

    const t = setInterval(changeImage, randomDuration);
    return () => clearInterval(t);
  }, [allPhotos.length]);

  return (
    <>
      <button
        onClick={() => setLightbox(true)}
        className={`group relative overflow-hidden bg-muted focus:outline-none ${className}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={allPhotos[idx]}
            alt="Gallery"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }} // Smooth 2s cross-fade
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
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
              <img src={allPhotos[idx]} alt="Preview" className="max-w-full max-h-[85vh] object-contain shadow-2xl" />
              <button onClick={() => setLightbox(false)} className="absolute -top-14 right-0 text-white/70 hover:text-white">
                <X className="w-10 h-10" />
              </button>
              <button onClick={() => setIdx((i) => (i - 1 + allPhotos.length) % allPhotos.length)} className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % allPhotos.length)} className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
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
    <section id="photography" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs font-mono text-primary tracking-widest mb-3 text-center md:text-left">04 · MOMENTS</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-center md:text-left">
            Observation & <span className="text-muted-foreground font-light italic">Detail</span>
          </h2>
        </motion.div>

        {/* PROFESSIONAL SEAMLESS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 h-[900px] md:h-[700px] border border-border">
          {/* Big Feature */}
          <PhotoCell allPhotos={PHOTOS} startOffset={0} className="col-span-2 row-span-2" />
          
          {/* Portrait blocks */}
          <PhotoCell allPhotos={PHOTOS} startOffset={3} className="col-span-1 row-span-2" />
          <PhotoCell allPhotos={PHOTOS} startOffset={7} className="col-span-1 row-span-2" />
          
          {/* Wide block */}
          <PhotoCell allPhotos={PHOTOS} startOffset={11} className="col-span-2 row-span-1" />
          
          {/* Square fillers */}
          <PhotoCell allPhotos={PHOTOS} startOffset={15} className="col-span-1 row-span-1" />
          <PhotoCell allPhotos={PHOTOS} startOffset={19} className="col-span-1 row-span-1" />
          
          {/* Final Large landscape */}
          <PhotoCell allPhotos={PHOTOS} startOffset={5} className="col-span-2 row-span-1" />
        </div>
      </div>
    </section>
  );
}
