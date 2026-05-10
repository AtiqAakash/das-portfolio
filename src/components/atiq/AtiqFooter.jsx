import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MapPin, Github, Linkedin, Camera } from "lucide-react";

const REFS = [
  { name: "Mathias Løe", role: "CEO, Altivon AS", email: "mathias@altivon.no" },
  { name: "Niklas Nyroth", role: "CEO, Robot Aviation AS", email: "niklas.nyroth@robotaviation.com" },
  { name: "Simon Burczyk", role: "Operations Specialist, Beagle Systems", email: "s.burczyk@beaglesystems.com" },
  { name: "Cem Yolcubal", role: "Drone Developer & Test Pilot, TOPSeven", email: "cem_goblin@hotmail.com" },
];

export default function AtiqFooter() {
  const [copied, setCopied] = useState(false);
  const email = "atiqur@altivon.no";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <footer id="contact" className="relative bg-[#050810] text-white overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">05 · GET IN TOUCH</div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Let's build something
            <br />
            <span className="text-cyan-400">that flies.</span>
          </h2>
          <p className="mt-5 text-white/50 text-lg max-w-lg">
            Open to UAV engineering, aerial operations, and tech leadership roles across Europe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={`mailto:${email}`}>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#080C14] font-semibold text-sm transition">
                <Mail className="w-4 h-4" />
                {email}
              </button>
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm transition"
            >
              {copied ? <><Check className="w-4 h-4 text-cyan-400" /> Copied</> : <><Copy className="w-4 h-4" /> Copy email</>}
            </button>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm transition">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </button>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/30 font-mono">
            <MapPin className="w-4 h-4" />
            Oslo, Norway · +47 458 08 855
          </div>
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-xs font-mono text-white/30 tracking-widest mb-6">REFERENCES</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REFS.map((ref) => (
              <div key={ref.name} className="p-4 rounded-xl border border-white/6 bg-white/2">
                <div className="font-semibold text-white/80 text-sm">{ref.name}</div>
                <div className="text-white/35 text-xs mt-1">{ref.role}</div>
                <a href={`mailto:${ref.email}`} className="text-cyan-400/60 hover:text-cyan-400 text-xs font-mono mt-2 block transition truncate">
                  {ref.email}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-white/25">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">ATIQ.NO</span>
            <span>· © {new Date().getFullYear()} Atiqur Rahman. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="w-4 h-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
            <a href="https://flickr.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Camera className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}