import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutJatharaSection } from "@/components/home/AboutJatharaSection";
import { FourPillarsSection } from "@/components/home/FourPillarsSection";
import { DandakaranyaHomeSection } from "@/components/home/DandakaranyaHomeSection";
import { ExploreEventSection } from "@/components/home/ExploreEventSection";
import { RegistrationCTA } from "@/components/home/RegistrationCTA";
import { OrganizersPartnersSection } from "@/components/home/OrganizersPartnersSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutJatharaSection />
      <FourPillarsSection />
      <DandakaranyaHomeSection />
      <ExploreEventSection />
      <RegistrationCTA />
      <OrganizersPartnersSection />
    </div>
  );
}
