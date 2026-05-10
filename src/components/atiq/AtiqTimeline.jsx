import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Co-founder & Drone Operations Manager",
    org: "Altivon AS",
    period: "Apr 2026 – Present",
    location: "Oslo, Norway",
    color: "cyan",
    bullets: [
      "Direct end-to-end UAV operations for commercial exterior maintenance & thermographic inspections",
      "Manage flight planning, fleet maintenance, report handling, and pilot training",
      "EASA STS certified, highest-level Airwatch LUC operator",
      "Spearhead R&D and tech-driven business development for autonomous industrial services",
    ],
  },
  {
    role: "Drone Pilot & Technician",
    org: "Beagle Systems",
    period: "May 2025 – Apr 2026",
    location: "Hamburg, Germany",
    color: "blue",
    bullets: [
      "Licensed A1/A3, A2, STS Drone Pilot (EASA certified)",
      "Conduct drone operations, maintenance, repair, and assembly",
      "UAV system integration and hardware development",
      "Test flights, validation, and evaluation of new UAV solutions",
      "Fleet scheduling, documentation, and compliance reporting",
    ],
  },
  {
    role: "Drone R&D (Werkstudent)",
    org: "TOPSeven GmbH",
    period: "Oct 2024 – Mar 2025",
    location: "Emden, Germany",
    color: "violet",
    bullets: [
      "Built drones from scratch; integrated sensors and payloads",
      "Configured Pixhawk & CubePilot firmware",
      "Contributed to custom Android UAV control app (Java / MavSDK)",
      "SITL simulations and microcontroller programming",
    ],
  },
  {
    role: "UAV Systems Intern",
    org: "Robot Aviation",
    period: "Nov 2023 – Jun 2024",
    location: "Hønefoss, Norway",
    color: "teal",
    bullets: [
      "UAV test flights and troubleshooting of aerial systems",
      "Configured PMDDL and 4G high-bandwidth communication modules",
      "FLIR sensor integration for inspection missions",
      "Documentation, reports, and system validation",
    ],
  },
  {
    role: "Network Testing Technician",
    org: "Home & Marine",
    period: "Jul 2024 – Sep 2024",
    location: "Bremen, Germany",
    color: "slate",
    bullets: [
      "IT infrastructure onboard Disney Cruise Ship (Disney Treasure 2)",
      "Troubleshooting, configuration, and fault analysis",
    ],
  },
  {
    role: "IT Support Engineer",
    org: "CodeFix IT",
    period: "Jan 2018 – Nov 2019",
    location: "Dhaka, Bangladesh",
    color: "slate",
    bullets: [
      "Server and network support; Linux systems configuration",
      "Security protocols and backup solutions",
      "Customer and development team technical support",
    ],
  },
];

const colorMap = {
  cyan: "border-cyan-500 bg-cyan-500",
  blue: "border-blue-500 bg-blue-500",
  violet: "border-violet-500 bg-violet-500",
  teal: "border-teal-500 bg-teal-500",
  slate: "border-slate-500 bg-slate-500",
};

const textMap = {
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
  teal: "text-teal-400",
  slate: "text-slate-400",
};

export default function AtiqTimeline() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">02 · EXPERIENCE</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Career in motion.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="md:pl-14 relative"
              >
                {/* dot */}
                <div className={`hidden md:block absolute left-[11px] top-6 w-2.5 h-2.5 rounded-full border-2 ${colorMap[exp.color]} ring-4 ring-[#0A0F1A]`} />

                <div className="p-6 rounded-2xl border border-white/8 bg-white/2 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <div className={`text-sm font-mono mt-0.5 ${textMap[exp.color]}`}>{exp.org}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono text-white/40">{exp.period}</div>
                      <div className="text-xs text-white/30 mt-0.5">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${colorMap[exp.color].split(" ")[1]}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/4"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-5">EDUCATION</div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-white">M.Sc. Programming & System Architecture</div>
              <div className="text-cyan-400 font-mono text-sm mt-1">University of Oslo</div>
              <div className="text-white/40 text-xs mt-1 font-mono">Thesis remaining</div>
            </div>
            <div>
              <div className="font-bold text-white">B.Sc. Computer Science & Engineering</div>
              <div className="text-cyan-400 font-mono text-sm mt-1">University of Development Alternative</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}