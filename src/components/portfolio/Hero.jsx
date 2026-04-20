import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, BookOpen, MapPin, Mail } from "lucide-react";
import SciBackground from "./SciBackground";

const HERO_IMG = "https://media.base44.com/images/public/69e5f7211ac19d873766d2c9/5da45abc1_generated_a2476dc5.png";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />
      {/* Soft cyber glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyber/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyber/5 blur-3xl pointer-events-none" />

      {/* Decorative t-SNE */}
      <SciBackground
        variant="tsne"
        className="absolute top-24 right-8 w-[360px] h-[260px] opacity-30 pointer-events-none hidden lg:block"
      />

      {/* Top bar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
            <span className="text-cyber font-mono text-sm font-bold">SD</span>
          </div>
          <span className="font-semibold tracking-tight text-navy">Saykat Das, PhD</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("expertise")} className="hover:text-navy transition">Expertise</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-navy transition">Skills</button>
          <button onClick={() => scrollTo("experience")} className="hover:text-navy transition">Experience</button>
          <button onClick={() => scrollTo("publications")} className="hover:text-navy transition">Publications</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-navy transition">Contact</button>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber/40 bg-cyber/5 text-xs font-mono text-navy mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
            AVAILABLE · BIOTECH / PHARMA R&D
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.02] text-balance"
          >
            Saykat Das
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-muted-foreground font-mono"
          >
            PhD Immunologist · Postdoctoral Researcher
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-xl sm:text-2xl text-navy/80 max-w-2xl leading-snug text-balance"
          >
            Bridging <span className="text-navy font-semibold">molecular immunology</span> and
            <span className="text-navy font-semibold"> next-gen immunotherapy</span>
            <span className="text-cyber">.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white rounded-full px-6 h-12"
              onClick={() => scrollTo("contact")}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 h-12 border-navy/20 hover:border-cyber hover:text-navy"
              onClick={() => scrollTo("publications")}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View Publications
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Oslo, Norway
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              saykat_dna@yahoo.com
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyber" />
              Oslo Cancer Cluster
            </div>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-navy border border-navy/20 shadow-2xl shadow-navy/20">
            <img
              src={HERO_IMG}
              alt="3D render of T-cell engaging tumor cell"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />

            {/* Data overlay */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-navy/70 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-mono text-cyber tracking-widest">CAR-T · CD37/CD33</span>
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-navy/70 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-mono text-white/80 tracking-widest">LIVE · KILLING ASSAY</span>
            </div>

            {/* Corner ticks */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cyber/60" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyber/60" />
          </div>

          {/* Floating stat */}
          <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-xl border border-border px-4 py-3 hidden sm:block">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Publications</div>
            <div className="text-2xl font-bold text-navy">5<span className="text-cyber">·</span></div>
            <div className="text-[10px] text-muted-foreground">incl. Nat. Commun.</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <button
          onClick={() => scrollTo("expertise")}
          className="text-muted-foreground hover:text-navy transition flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </button>
      </div>
    </section>
  );
}