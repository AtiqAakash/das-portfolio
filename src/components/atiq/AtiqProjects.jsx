import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Flight Logger",
    desc: "Web-based UAV flight log management and analytics platform.",
    tech: ["HTML", "PHP", "MySQL"],
    icon: "✈️",
    url: null,
  },
  {
    title: "ConBot",
    desc: "Automated setup utility for ArduPilot SITL environments — simplifies UAV development and testing.",
    tech: ["Bash", "Python"],
    icon: "🤖",
    url: null,
  },
  {
    title: "PX4 Simulation Configurator",
    desc: "GUI launcher for PX4 SITL with persistent config, real-time log viewer, and ULG–KML conversion.",
    tech: ["Python"],
    icon: "🎮",
    url: null,
    badge: "Beagle Sim",
  },
  {
    title: "Transparent MAVLink OSD",
    desc: "FPV-style telemetry overlay for Ubuntu/QGroundControl; displays live MAVLink data via UDP.",
    tech: ["Python"],
    icon: "📺",
    url: null,
  },
  {
    title: "IoT Home / Arduino",
    desc: "Versatile home monitoring & automation (motion, temp, gas, flame) with a simple web UI.",
    tech: ["C++", "Arduino", "HTML/JS"],
    icon: "🏠",
    url: null,
  },
  {
    title: "IoT Weather Station",
    desc: "ESP8266 + DHT22 web dashboard for temperature & humidity monitoring.",
    tech: ["C++", "Arduino", "HTML/CSS/JS"],
    icon: "🌦️",
    url: null,
  },
];

export default function AtiqProjects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">03 · PROJECTS</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Built from scratch.
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl">
            Tools I've built to solve real UAV engineering and operations challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-white/8 bg-white/2 hover:border-cyan-500/25 hover:bg-cyan-500/3 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{proj.icon}</span>
                {proj.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                    {proj.badge}
                  </span>
                )}
                {proj.url && (
                  <a href={proj.url} target="_blank" rel="noreferrer" className="text-white/30 hover:text-cyan-400 transition">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <h3 className="font-bold text-white text-base leading-tight">{proj.title}</h3>
              <p className="mt-2 text-white/45 text-sm leading-relaxed flex-1">{proj.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}