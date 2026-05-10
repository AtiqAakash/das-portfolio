import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  {
    icon: "🇧🇩",
    title: "Founder & President",
    org: "Hridoye Bangladesh",
    desc: "Built and lead a 400+ member Bengali community in Norway — organizing cultural events, networking, and support for Bangladeshis living in Norway.",
    tag: "Community",
  },
  {
    icon: "🏏",
    title: "Board Leader (Daglig Leder)",
    org: "Kringjå Cricket Club · Norges Cricket Forbund",
    desc: "Managing operations, administration, and development of a registered cricket club under the Norwegian Cricket Federation.",
    tag: "Sports",
  },
  {
    icon: "📷",
    title: "Freelance Photographer",
    org: "Portfolio on Flickr",
    desc: "Capturing the world through a lens — from aerial perspectives to street photography. Photography as both creative outlet and professional skill.",
    tag: "Photography",
    link: "https://flickr.com",
    linkLabel: "View Portfolio →",
  },
];

export default function AtiqVoluntary() {
  return (
    <section id="voluntary" className="relative py-24 lg:py-32 bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">04 · BEYOND WORK</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Community, cricket<br />& creativity.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-white/8 bg-white/2 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="text-[10px] font-mono text-cyan-400 tracking-widest mb-2">{item.tag}</div>
              <h3 className="font-bold text-white text-base">{item.title}</h3>
              <div className="text-cyan-400/70 font-mono text-xs mt-1 mb-3">{item.org}</div>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-mono text-cyan-400 hover:text-cyan-300 transition">
                  {item.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}