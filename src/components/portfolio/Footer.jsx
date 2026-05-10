import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [copied, setCopied] = React.useState(false);
  const email = "saykat_dna@yahoo.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <footer id="contact" className="relative bg-foreground text-white overflow-hidden">
      {/* Subtle teal glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-mono text-primary tracking-widest mb-4">05 · GET IN TOUCH</div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Let's engineer the next
            <br />
            <span className="text-primary">generation of therapies.</span>
          </h2>
          <p className="mt-6 text-white/80 text-lg max-w-xl">
            Open to biotech, pharma and translational research roles in CAR-T, antibody discovery and immunotherapy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={`mailto:${email}`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12 px-6">
                <Mail className="w-4 h-4 mr-2" />
                {email}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={copyEmail}
              className="rounded-full h-12 px-5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-primary" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" /> Copy email
                </>
              )}
            </Button>
            <a href="https://no.linkedin.com/in/saykat-das-423b10155" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4" />
            Utmarkveien 12, 0689, Bøler, Oslo, Norway · +47 969 97 847
          </div>
        </motion.div>

        {/* UPDATED COPYRIGHT SECTION */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md overflow-hidden border border-primary/30 flex items-center justify-center bg-primary/10">
              <img src="/1_lal.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span>
              © {new Date().getFullYear()}{" "}
              <a 
                href="https://atiq.no" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-primary transition-colors underline underline-offset-4"
              >
                Atiq
              </a>. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <span>Built with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
