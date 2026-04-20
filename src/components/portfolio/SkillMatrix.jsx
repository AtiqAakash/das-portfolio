import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, LineChart, ShieldCheck, CheckCircle2, Award } from "lucide-react";

const WET_LAB = [
  "CRISPR-Cas9 (KI/KO)",
  "Viral Vector Engineering",
  "Plasmid Design",
  "Phage Display",
  "ELISA",
  "SPR",
  "BLI",
  "ELISpot",
  "RT-qPCR",
  "Western Blot",
  "Flow Cytometry (multi-color)",
  "Cell Sorting (FACS)",
  "Mammalian Cell Culture",
  "Bacterial Expression",
  "HPLC",
  "Immunohistochemistry",
];

const DATA_SCI = [
  "R Studio (scRNA-seq)",
  "10x Genomics Analysis",
  "BCR-seq Analysis",
  "FlowJo",
  "GraphPad Prism",
  "ImageJ",
  "AlphaFold",
  "PyMol",
  "eLab Journal",
  "Biovia ScienceCloud",
];

const COMPLIANCE = [
  { label: "FELASA-C", detail: "Animal Care & Fieldwork (2019)" },
  { label: "GMP Training", detail: "Verification · 1XUk53wTCi" },
  { label: "SOP Authoring", detail: "Protocols & tech transfer" },
  { label: "Validation Reports", detail: "Regulatory-aligned documentation" },
];

function Column({ icon: Icon, title, items, accent = false }) {
  const filtered = items;

  return (
    <div className={`p-8 rounded-2xl border ${accent ? "bg-primary/5 border-primary/20" : "bg-white border-border"}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
      </div>

      {typeof filtered[0] === "string" ? (
        <div className="flex flex-wrap gap-2">
          {filtered.map((it) => (
            <span
              key={it}
              className="text-sm px-3 py-1.5 rounded-lg font-mono bg-secondary text-foreground/80 border border-border hover:border-primary/40 hover:text-primary transition cursor-default"
            >
              {it}
            </span>
          ))}
          {filtered.length === 0 && (
            <span className="text-sm text-muted-foreground">No matches.</span>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((it) => (
            <div
              key={it.label}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary border border-border"
            >
              <div className="mt-0.5 text-primary">
                {it.label === "GMP Training" ? (
                  <Award className="w-5 h-5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">{it.label}</div>
                <div className="text-xs font-mono mt-0.5 text-muted-foreground">{it.detail}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillMatrix() {

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-secondary">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-primary tracking-widest mb-4">02 · TECHNICAL MATRIX</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              A full-stack immunologist's toolkit.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Industry-ready across wet lab, data science and regulatory-grade compliance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-3 gap-5"
        >
          <Column icon={FlaskConical} title="Wet Lab" items={WET_LAB} />
          <Column icon={LineChart} title="Data Science" items={DATA_SCI} />
          <Column icon={ShieldCheck} title="Compliance" items={COMPLIANCE} accent />
        </motion.div>
      </div>
    </section>
  );
}