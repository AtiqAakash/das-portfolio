import React from "react";
import { motion } from "framer-motion";
import { AntibodyIcon, CarTIcon, HelixIcon, FlowCytometerIcon } from "./MoleculeIcons";

const CARDS = [
  {
    Icon: CarTIcon,
    tag: "Cell Therapy",
    title: "CAR-T Engineering",
    body: "Design of safety-enhanced constructs (CD37/CD33 Combi-CAR) for AML and solid tumors. Functional characterization via BLI killing and cytokine-release assays.",
    keywords: ["CD37/CD33", "Retroviral vectors", "Fratricide control"],
  },
  {
    Icon: AntibodyIcon,
    tag: "Immunology",
    title: "B Cell Biology",
    body: "Advanced sorting of antigen-specific B cells, monoclonal antibody production, and deep immunorepertoire (BCR) analysis to drive antibody discovery.",
    keywords: ["Antigen-specific sort", "BCR-seq", "mAb discovery"],
  },
  {
    Icon: FlowCytometerIcon,
    tag: "Analytics",
    title: "Precision Analytics",
    body: "High-dimensional 10x scRNA-seq, BCR sequencing and multi-color flow cytometry — translated into insights via R Studio, FlowJo and Prism.",
    keywords: ["10x Genomics", "scRNA-seq", "Multi-color FACS"],
  },
  {
    Icon: HelixIcon,
    tag: "Therapeutics",
    title: "Therapeutic Development",
    body: "Monoclonal antibody production, CRISPR-Cas9 knock-in/out engineering, recombinant expression, and binding kinetics via SPR and BLI.",
    keywords: ["CRISPR-Cas9", "SPR / BLI", "Recombinant mAbs"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs font-mono text-cyber tracking-widest mb-4">01 · CORE EXPERTISE</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
            Translational research, from bench to breakthrough.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Four pillars powering antibody discovery, cellular immunotherapy and industry-grade biologic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 rounded-2xl bg-white border border-border hover:border-cyber/60 hover:shadow-xl hover:shadow-cyber/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center group-hover:bg-cyber transition-colors duration-300">
                  <card.Icon className="w-8 h-8 text-cyber group-hover:text-navy transition-colors duration-300" stroke="currentColor" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground">{card.tag}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">{card.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{card.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.keywords.map((k) => (
                  <span
                    key={k}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-navy/70"
                  >
                    {k}
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