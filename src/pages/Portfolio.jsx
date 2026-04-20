import React from "react";
import Hero from "@/components/portfolio/Hero";
import Expertise from "@/components/portfolio/Expertise";
import SkillMatrix from "@/components/portfolio/SkillMatrix";
import Timeline from "@/components/portfolio/Timeline";
import Publications from "@/components/portfolio/Publications";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground font-inter">
      <Hero />
      <Expertise />
      <SkillMatrix />
      <Timeline />
      <Publications />
      <Footer />
    </main>
  );
}