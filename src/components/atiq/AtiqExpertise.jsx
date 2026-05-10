import React from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "🚁",
    tag: "Operations",
    title: "UAV Operations",
    body: "End-to-end drone operations for commercial exterior maintenance, thermographic inspections, and high-pressure cleaning. EASA STS-certified with Airwatch LUC framework.",
    tags: ["EASA STS", "LUC", "Thermography", "Fleet Mgmt"],
  },
  {
    icon: "🔧",
    tag: "Engineering",
    title: "UAV Engineering",
    body: "Build drones from scratch, integrate sensors and payloads. Configure Pixhawk & CubePilot flight controllers. SITL simulations, firmware, and hardware development.",
    tags: ["Pixhawk", "CubePilot", "MAVLink", "SITL"],
  },
  {
    icon: "💻",
    tag: "Software",
    title: "Dev & Automation",
    body: "UAV ground control software, flight log platforms, Android apps with MavSDK, PX4 simulation configurators, IoT dashboards and microcontroller programming.",
    tags: ["Python", "Java", "Arduino", "Bash", "PHP"],
  },
  {
    icon: "📡",
    tag: "Systems",
    title: "Systems Integration",
    body: "Communication module configuration (PMDDL, 4G), FLIR sensor integration, network infrastructure, Linux systems, and security protocol implementation.",
    tags: ["FLIR", "4G/PMDDL", "Linux", "Networking"],
  },
];

export default function AtiqExpertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">01 · CORE EXPERTISE</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Flying, building, and coding<br />
            <span className="text-cyan-400">autonomous systems.</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl">
            From hardware assembly to software development — a full-stack UAV professional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-cyan-500/30 hover:bg-cyan-500/4 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-white/30">{card.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
              <p className="mt-3 text-white/50 leading-relaxed text-sm">{card.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50">
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