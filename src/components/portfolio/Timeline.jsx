import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCE = [
  {
    period: "Nov 2025 – Present",
    role: "Postdoctoral Researcher",
    org: "Oslo Cancer Cluster",
    focus: "CAR-T construct design & functional characterization for AML",
    points: [
      "Designed safety-enhanced CAR-T constructs targeting AML and solid tumors (CD37/CD33 Combi-CAR).",
      "Engineered retroviral plasmids for CAR expression and expansion.",
      "Led functional characterization via BLI killing, cytokine-release and multicolor flow cytometry.",
      "Evaluated immune-escape mechanisms including antigen loss and fratricide.",
    ],
  },
  {
    period: "Feb 2024 – Nov 2025",
    role: "Researcher",
    org: "Oslo University Hospital",
    focus: "10x Genomics & immune phenotyping for infectious disease",
    points: [
      "Specialized in multicolor flow cytometry for cell sorting and immune phenotyping.",
      "Performed scRNA-seq (10x Genomics) with R-based high-dimensional analysis.",
      "Optimized ELISA, SPR, PCR/qPCR, ELISpot workflows for infectious disease research.",
      "Developed and validated protocols, supporting technology transfer to collaborators.",
    ],
  },
  {
    period: "Sep 2023 – Jan 2024",
    role: "Researcher",
    org: "University of Oslo",
    focus: "Therapeutic antibody identification & recombinant expression",
    points: [
      "Performed immunorepertoire analysis for therapeutic antibody discovery.",
      "Designed recombinant protein and antibody expression systems (bacterial & mammalian).",
      "Prepared validation reports aligned with experimental and regulatory needs.",
    ],
  },
  {
    period: "Apr 2020 – Sep 2023",
    role: "PhD Researcher",
    org: "University of Oslo",
    focus: "Autoantibody discovery & B-cell function in autoimmune disease",
    points: [
      "Antigen-specific B cell sorting with FACS for monoclonal antibody production.",
      "Characterized antigen-antibody kinetics via ELISA, SPR, HPLC and ammonium-release assays.",
      "Optimized phage-display protocol for broadly neutralizing antibodies.",
      "T cell–B cell collaboration assays in autoimmune disease models.",
    ],
  },
  {
    period: "Jan 2018 – Mar 2020",
    role: "Research Assistant",
    org: "University of Oslo",
    focus: "Molecular biology in GMP-adjacent environments",
    points: [
      "Applied RT-qPCR, western blotting and flow cytometry in GMP-adjacent settings.",
      "Developed immunohistochemistry protocols for tissue protein localization.",
      "Established in vitro T-cell–B-cell co-culture assays.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs font-mono text-cyber tracking-widest mb-4">03 · EXPERIENCE</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
            Eight years at the immunology frontier.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyber via-cyber/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-cyber flex items-center justify-center shadow-md z-10">
                    <span className="w-2 h-2 rounded-full bg-cyber" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="text-xs font-mono text-cyber tracking-widest">{item.period}</div>
                    <h3 className="mt-2 text-2xl font-bold text-navy tracking-tight">{item.role}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                      {left ? (
                        <>
                          <span>{item.org}</span>
                          <Briefcase className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{item.org}</span>
                        </>
                      )}
                    </div>
                    <p className="mt-3 text-navy/80 font-medium">{item.focus}</p>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                        left ? "md:ml-auto" : ""
                      } max-w-md ${left ? "md:text-right" : ""}`}
                    >
                      {item.points.map((p, i) => (
                        <li key={i} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="text-xs font-mono text-cyber tracking-widest mb-6">EDUCATION</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { yr: "2020 – 2023", d: "PhD, Immunology", s: "University of Oslo" },
              { yr: "2017 – 2019", d: "MSc, Molecular Biology", s: "University of Oslo" },
              { yr: "2012 – 2016", d: "BSc, Biochemistry & Biotech", s: "USTC, Bangladesh" },
              { yr: "2008 – 2011", d: "Diploma, Medical Technology", s: "IHT, Bangladesh" },
            ].map((e) => (
              <div key={e.d} className="border-l-2 border-cyber/40 pl-4">
                <div className="text-[11px] font-mono text-cyber tracking-widest">{e.yr}</div>
                <div className="mt-1 font-semibold text-foreground">{e.d}</div>
                <div className="text-sm text-muted-foreground">{e.s}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}