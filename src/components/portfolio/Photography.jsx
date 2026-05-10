import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Paths for images located in the /public folder
const PHOTOS = [
  "/1_lal.jpeg", "/2_lal.jpeg", "/3_lal.jpeg", "/4_lal.jpeg", "/5_lal.jpeg",
  "/6_lal.jpeg", "/7_lal.jpeg", "/8_lal.jpeg", "/9_lal.jpeg", "/10_lal.jpeg",
  "/11_lal.jpeg", "/12_lal.jpeg", "/13_lal.jpeg", "/14_lal.jpeg", "/15_lal.jpeg",
  "/16_lal.jpeg", "/17_lal.jpeg", "/18_lal.jpeg", "/19_lal.jpeg", "/20_lal.jpeg",
  "/21_lal.jpeg", "/22_lal.jpeg", "/23_lal.jpeg"
];

function PhotoCell({ allPhotos, startOffset }) {
  // Use startOffset to ensure cells start on different images
  const [idx, setIdx] = useState(startOffset % allPhotos.length);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    // This function picks a random image from your list
    const changeImage = () => {
      setIdx((prevIdx) => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * allPhotos.length);
        } while (nextIdx === prevIdx && allPhotos.length > 1); 
        return nextIdx;
      });
    };

    // This creates a random speed for THIS specific block
    // It will change every 3 to 7 seconds
    const randomDuration = 3000 + Math.random() * 4000;

    const t = setInterval(changeImage, randomDuration);
    return () => clearInterval(t);
  }, [allPhotos.length]); // Only restarts if the number of photos changes

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
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300 rounded-xl" />
      </button>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allPhotos[idx]}
                alt="Photography"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              
              <button
                onClick={() => setLightbox(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-10 h-10" />
              </button>

              <button
                onClick={() => setIdx((i) => (i - 1 + allPhotos.length) % allPhotos.length)}
                className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => setIdx((i) => (i + 1) % allPhotos.length)}
                className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
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
    <section id="photography" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs font-mono text-muted-foreground tracking-widest mb-3">
            04 · CREATIVE OUTLET
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Photography <span className="font-normal text-muted-foreground">(Hobby)</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base max-w-2xl">
            Outside the lab, photography serves as a quiet creative outlet—a practice in observation, 
            composition, and the interplay of light and detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {OFFSETS.map((offset, i) => (
            <PhotoCell key={i} allPhotos={PHOTOS} startOffset={offset} />
          ))}
        </div>
      </div>
    </section>
  );
}
