import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, LineChart, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { Input } from "@/components/ui/input";

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

function Column({ icon: Icon, title, items, query, accent = false }) {
  const filtered = useMemo(
    () =>
      !query
        ? items
        : items.filter((it) =>
            (typeof it === "string" ? it : it.label + " " + it.detail)
              .toLowerCase()
              .includes(query.toLowerCase())
          ),
    [items, query]
  );

  return (
    <div
      className={`p-8 rounded-2xl border ${
        accent
          ? "bg-navy text-white border-navy"
          : "bg-white border-border"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            accent ? "bg-cyber/20 text-cyber" : "bg-navy/5 text-navy"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <h3 className={`text-lg font-bold tracking-tight ${accent ? "text-white" : "text-navy"}`}>
          {title}
        </h3>
      </div>

      {typeof filtered[0] === "string" ? (
        <div className="flex flex-wrap gap-2">
          {filtered.map((it) => (
            <span
              key={it}
              className={`text-sm px-3 py-1.5 rounded-lg font-mono ${
                accent
                  ? "bg-white/10 text-white/90 hover:bg-cyber/20 hover:text-cyber"
                  : "bg-secondary text-navy/80 hover:bg-cyber/10 hover:text-navy"
              } transition cursor-default`}
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
              className={`flex items-start gap-3 p-3 rounded-lg ${
                accent ? "bg-white/5" : "bg-secondary/60"
              }`}
            >
              <div className={`mt-0.5 ${accent ? "text-cyber" : "text-cyber"}`}>
                {it.label === "GMP Training" ? (
                  <Award className="w-5 h-5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className={`font-semibold text-sm ${accent ? "text-white" : "text-navy"}`}>
                  {it.label}
                </div>
                <div className={`text-xs font-mono mt-0.5 ${accent ? "text-white/60" : "text-muted-foreground"}`}>
                  {it.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillMatrix() {
  const [q, setQ] = useState("");

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyber tracking-widest mb-4">02 · TECHNICAL MATRIX</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
              A full-stack immunologist's toolkit.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Industry-ready across wet lab, data science and regulatory-grade compliance.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search skills (e.g. CRISPR)"
              className="pl-9 h-11 bg-white border-border focus-visible:ring-cyber"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-3 gap-5"
        >
          <Column icon={FlaskConical} title="Wet Lab" items={WET_LAB} query={q} />
          <Column icon={LineChart} title="Data Science" items={DATA_SCI} query={q} />
          <Column icon={ShieldCheck} title="Compliance" items={COMPLIANCE} query={q} accent />
        </motion.div>
      </div>
    </section>
  );
}