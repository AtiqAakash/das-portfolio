import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Sparkles } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const PUBS = [
  {
    journal: "Nature Communications",
    year: "2025",
    title: "Enzyme-activating B-cell receptors boost antigen presentation to pathogenic T cells in gluten-sensitive autoimmunity.",
    authors: "Iversen R, Heggelund JE, Das S, Høydahl LS, Sollid LM.",
    doi: "10.1038/s41467-025-57564-5",
    pmid: "40064932",
    impact: "Translational Impact: Reveals BCR-driven antigen presentation as a therapeutic target in celiac disease.",
    tier: "top",
  },
  {
    journal: "Nature Communications",
    year: "2023",
    title: "Autoantibody binding and unique enzyme-substrate intermediate conformation of human transglutaminase 3.",
    authors: "Heggelund JE, Das S, Stamnaes J, Iversen R, Sollid LM.",
    doi: "10.1038/s41467-023-42004-z",
    pmid: "37798283",
    impact: "Translational Impact: Defines a structural target for next-gen autoimmune diagnostics.",
    tier: "top",
  },
  {
    journal: "Advanced Science",
    year: "2023",
    title: "Separate gut plasma cell populations produce autoantibodies against transglutaminase 2 and transglutaminase 3 in dermatitis herpetiformis.",
    authors: "Das S, Stamnaes J, Kemppainen E, Hervonen K, Lundin KEA, et al.",
    doi: "10.1002/advs.202300401",
    pmid: "37424036",
    impact: "Translational Impact: Identifies tissue-specific B-cell subsets for precision targeting.",
    tier: "high",
  },
  {
    journal: "Journal of Autoimmunity",
    year: "2024",
    title: "Selective activation of naïve B cells with unique epitope specificity shapes autoantibody formation in celiac disease.",
    authors: "Das S, Stamnaes J, Høydahl LS, Skagen C, Lundin KEA, Jahnsen J, Sollid LM, Iversen R.",
    doi: "10.1016/j.jaut.2024.103241",
    pmid: "38754235",
    impact: "Translational Impact: Identified new therapeutic targets for autoimmune diagnostics.",
    tier: "high",
  },
  {
    journal: "Manuscript in Preparation",
    year: "2025",
    title: "Phenotypic and genotypic alteration of HBsAg-specific B cells modulate the surface antigen loss after NUC-Stop therapy.",
    authors: "Das S, Aass HCD, Macleod JC, Edlund I, Reikvam DH.",
    doi: null,
    pmid: null,
    impact: "Translational Impact: Informs functional cure strategies in chronic Hepatitis B.",
    tier: "manuscript",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs font-mono text-cyber tracking-widest mb-4">04 · PUBLICATIONS</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight">
            Selected peer-reviewed work.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hover any publication to see its translational impact.
          </p>
        </motion.div>

        <div className="space-y-3">
          {PUBS.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <HoverCard openDelay={120} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <a
                    href={pub.doi ? `https://doi.org/${pub.doi}` : "#"}
                    target={pub.doi ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group block p-6 lg:p-7 rounded-2xl bg-card border border-border hover:border-cyber hover:shadow-lg hover:shadow-cyber/10 transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                      <div className="lg:w-48 flex-shrink-0 mb-3 lg:mb-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono tracking-widest px-2 py-1 rounded ${
                              pub.tier === "top"
                                ? "bg-cyber/15 text-cyber border border-cyber/30"
                                : pub.tier === "high"
                                ? "bg-violet/10 text-violet border border-violet/30"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {pub.tier === "top" ? "★ HIGH IMPACT" : pub.tier === "high" ? "PEER-REVIEWED" : "IN PREP"}
                          </span>
                        </div>
                        <div className="mt-2 font-bold text-navy italic">{pub.journal}</div>
                        <div className="text-xs font-mono text-muted-foreground">{pub.year}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground leading-snug">
                          {pub.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                        {pub.doi && (
                          <div className="mt-3 flex items-center gap-4 text-xs font-mono text-muted-foreground">
                            <span>DOI: {pub.doi}</span>
                            <span>PMID: {pub.pmid}</span>
                            <span className="flex items-center gap-1 text-cyber opacity-0 group-hover:opacity-100 transition">
                              View <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 border-cyber/40 bg-card text-foreground p-4">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cyber flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono text-cyber tracking-widest mb-1">INDUSTRY RELEVANCE</div>
                      <p className="text-sm leading-relaxed">{pub.impact}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <BookOpen className="w-4 h-4" />
          Full publication list available on request.
        </motion.div>
      </div>
    </section>
  );
}