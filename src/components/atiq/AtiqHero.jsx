import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Camera, MapPin, ChevronDown } from "lucide-react";

const NAV = [
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Voluntary", href: "#voluntary" },
  { label: "Contact", href: "#contact" },
];

export default function AtiqHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scroll = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#080C14]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
        <div className="font-mono text-cyan-400 text-sm tracking-widest">ATIQ.NO</div>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.label}
              onClick={() => scroll(n.href)}
              className="text-sm text-white/60 hover:text-cyan-400 transition font-mono tracking-wide"
            >
              {n.label}
            </button>
          ))}
        </div>
        <a
          href="mailto:atiqur@altivon.no"
          className="hidden md:flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition"
        >
          <Mail className="w-3 h-3" /> Hire me
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-16 py-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Atiqur
              <br />
              <span className="text-cyan-400">Rahman</span>
            </h1>

            <p className="mt-5 text-xl lg:text-2xl text-white/60 font-light leading-relaxed">
              UAV Engineer · Co-founder · Photographer
            </p>

            <p className="mt-4 text-white/50 text-base max-w-xl leading-relaxed">
              Building autonomous aerial systems and scaling industrial drone operations from Oslo.
              EASA-certified, Airwatch LUC operator, and co-founder of Altivon AS.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:atiqur@altivon.no"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#080C14] font-semibold text-sm transition"
              >
                <Mail className="w-4 h-4" />
                atiqur@altivon.no
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 text-sm transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 text-sm transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://flickr.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 text-sm transition"
              >
                <Camera className="w-4 h-4" /> Flickr
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-white/40 font-mono">
              <MapPin className="w-4 h-4" />
              Oslo, Norway · +47 458 08 855
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:grid grid-cols-1 gap-4 ml-auto"
        >
          {[
            { value: "EASA", label: "A1/A3 · A2 · STS" },
            { value: "LUC", label: "Airwatch Operator" },
            { value: "6+", label: "Years in Tech" },
            { value: "400+", label: "Community Members" },
          ].map((s) => (
            <div
              key={s.label}
              className="px-6 py-4 rounded-xl border border-white/8 bg-white/4 backdrop-blur text-center min-w-[130px]"
            >
              <div className="text-2xl font-bold text-cyan-400 font-mono">{s.value}</div>
              <div className="text-xs text-white/50 mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <button
          onClick={() => scroll("#expertise")}
          className="flex flex-col items-center gap-1 text-white/30 hover:text-cyan-400 transition"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}