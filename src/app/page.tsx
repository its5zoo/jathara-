import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { VerticalsSection } from "@/components/home/VerticalsSection";
import { VenueBridgeCard } from "@/components/home/VenueBridgeCard";
import { FounderVisionSection } from "@/components/home/FounderVisionSection";
import { ChiefGuestSection } from "@/components/home/ChiefGuestSection";
import { InstitutionalLeadershipSection } from "@/components/home/InstitutionalLeadershipSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { ProgrammePreview } from "@/components/home/ProgrammePreview";
import { GatewayCTA } from "@/components/home/GatewayCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section - Refined height, real campus backdrop, 4-stat telemetry */}
      <HeroSection />

      {/* 2. Summit Tracks - 8 focus sectors, concise cards */}
      <VerticalsSection />

      {/* 3. Host Campus & Travel Bridge */}
      <VenueBridgeCard />

      {/* 4. Honouring the Vision Behind ISF (Founder & Chairman Dr. J. A. Chowdary) */}
      <FounderVisionSection />

      {/* 5. Chief Guest of Honour Spotlight - Sadguru Sri Madhusudan Sai */}
      <ChiefGuestSection />

      {/* 6. Institutional Leadership (GIET University Governance) */}
      <InstitutionalLeadershipSection />

      {/* 7. Frequently Asked Questions */}
      <HomeFAQ />

      {/* 8. Three Days of Immersive Engagement - Curated Timeline Preview (Last Content Section) */}
      <ProgrammePreview />

      {/* 9. Closing Call to Action */}
      <GatewayCTA />
    </div>
  );
}
