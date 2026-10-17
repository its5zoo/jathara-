import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ChiefGuestSection } from "@/components/home/ChiefGuestSection";
import { VerticalsSection } from "@/components/home/VerticalsSection";
import { VenueBridgeCard } from "@/components/home/VenueBridgeCard";
import { ProgrammePreview } from "@/components/home/ProgrammePreview";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { GatewayCTA } from "@/components/home/GatewayCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section - Refined height, real campus backdrop, 4-stat telemetry */}
      <HeroSection />

      {/* 2. Chief Guest of Honour Spotlight - Sadguru Sri Madhusudan Sai */}
      <ChiefGuestSection />

      {/* 3. Summit Tracks - 8 focus sectors, concise cards */}
      <VerticalsSection />

      {/* 3. Host Campus & Travel Bridge */}
      <VenueBridgeCard />

      {/* 4. Three Days of Immersive Engagement - Curated Timeline Preview */}
      <ProgrammePreview />

      {/* 5. Leadership & Vision Behind ISF + Institutional Governance */}
      <LeadershipSection />

      {/* 6. Frequently Asked Questions */}
      <HomeFAQ />

      {/* 7. Closing Call to Action */}
      <GatewayCTA />
    </div>
  );
}
