import React from "react";
import AtiqHero from "@/components/atiq/AtiqHero";
import AtiqExpertise from "@/components/atiq/AtiqExpertise";
import AtiqTimeline from "@/components/atiq/AtiqTimeline";
import AtiqProjects from "@/components/atiq/AtiqProjects";
import AtiqVoluntary from "@/components/atiq/AtiqVoluntary";
import AtiqFooter from "@/components/atiq/AtiqFooter";

export default function AtiqPortfolio() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white font-inter">
      <AtiqHero />
      <AtiqExpertise />
      <AtiqTimeline />
      <AtiqProjects />
      <AtiqVoluntary />
      <AtiqFooter />
    </main>
  );
}