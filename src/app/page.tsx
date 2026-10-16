import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { VerticalsSection } from "@/components/home/VerticalsSection";
import { VenueBridgeCard } from "@/components/home/VenueBridgeCard";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { GatewayCTA } from "@/components/home/GatewayCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section - Refined height, real campus backdrop, 4-stat telemetry */}
      <HeroSection />

      {/* 2. Summit Tracks - 8 focus sectors, concise cards */}
      <VerticalsSection />

      {/* 3. Host Campus & Travel Bridge - Replaces bulky duplicate university & travel sections */}
      <VenueBridgeCard />

      {/* 5. Frequently Asked Questions - 4 practical attendee queries */}
      <HomeFAQ />

      {/* 6. Closing Call to Action */}
      <GatewayCTA />
    </div>
  );
}
