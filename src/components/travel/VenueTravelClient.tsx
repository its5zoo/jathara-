"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Plane, 
  Train, 
  Car, 
  ShieldCheck, 
  Building, 
  Bed, 
  Info,
  ExternalLink,
  GraduationCap,
  MapPin,
  Clock,
  Navigation,
  Route,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { TRAVEL_HUBS, EVENT_METADATA } from "@/data/eventData";
import { TransitHubType } from "@/lib/types";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";
import { GunupurHotelsSection } from "./GunupurHotelsSection";
import { GIETCampusMapSection } from "./GIETCampusMapSection";

export function VenueTravelClient() {
  const [activeHubId, setActiveHubId] = useState<string>(TRAVEL_HUBS[0].id);
  const [expandedHubs, setExpandedHubs] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedHubs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredHubs = TRAVEL_HUBS;

  return (
    <div className="w-full">
      {/* Editorial Header with GIET University Campus Aerial Background */}
      <section className="relative text-white py-14 sm:py-20 md:py-24 border-b border-[#232733] overflow-hidden bg-[#0c0d12]">
        {/* Background Image: gietu-campus-aerial.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gietu-campus-aerial.jpg"
            alt="GIET University Campus Aerial View, Gunupur, Odisha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] select-none brightness-95"
          />
          {/* Balanced translucent overlay so the aerial campus is clearly visible while text stays sharp */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
        </div>

        {/* Ambient atmospheric glow accents */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#e87042]/15 rounded-full blur-3xl pointer-events-none z-1" />

        {/* Foreground Content with original compact proportions in pure white */}
        <Container size="default" className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
            GIET University,{" "}
            <span className="bg-gradient-to-r from-[#e87042] via-[#f7c89f] to-[#e87042] bg-clip-text text-transparent">
              Gunupur, Odisha
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Planning your journey to the historic Dandakaranya landscape. Verified transit gateways, airport connections, railway corridors, and campus hospitality.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-white">
            <span className="p-1.5 px-3 sm:p-2 sm:px-3.5 rounded-xl bg-[#141620]/90 border border-white/15 backdrop-blur-md shadow-xs">
              <strong className="text-[#f7c89f]">Campus:</strong> Goboriguda, Gunupur
            </span>
            <span className="p-1.5 px-3 sm:p-2 sm:px-3.5 rounded-xl bg-[#141620]/90 border border-white/15 backdrop-blur-md shadow-xs">
              <strong className="text-[#f7c89f]">District:</strong> Rayagada, Odisha 765022
            </span>
            <span className="p-1.5 px-3 sm:p-2 sm:px-3.5 rounded-xl bg-[#141620]/90 border border-white/15 backdrop-blur-md shadow-xs">
              <strong className="text-[#f7c89f]">Highway:</strong> NH-326
            </span>
          </div>
        </Container>
      </section>

      {/* Campus Infrastructure Overview & Official Architecture Feature */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="GIET University: Innovation in the Dandakaranya Valley"
            subtitle="Gandhi Institute of Engineering and Technology University (GIET University) is a state private university offering world-class research laboratories and residential hospitality amidst scenic hills."
          />

          {/* Official Campus Building Photograph Feature - Clean & Unboxed */}
          <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl border border-[#e6dfd1] overflow-hidden bg-white shadow-sm">
            {/* Clean, unobstructed campus photo */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/giet-school-of-engineering.jpg"
                alt="School of Engineering and Technology, GIET University Campus, Gunupur, Odisha"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-102"
              />
            </div>

            {/* Clean, unboxed architectural venue bar (hairline border, zero floating boxes) */}
            <div className="p-4 sm:p-6 border-t border-[#e6dfd1] bg-[#faf8f5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-[#e6dfd1] shadow-2xs">
                  <Image
                    src="/logos/giet-logo.png"
                    alt="GIET University Official Crest"
                    width={44}
                    height={36}
                    className="max-h-8 max-w-9 w-auto h-auto object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c25022]">
                      Central Summit Venue
                    </span>
                    <span className="text-xs text-[#a8a29e]">•</span>
                    <span className="text-xs font-medium text-[#78716c]">
                      State Private University
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] leading-snug">
                    School of Engineering and Technology Building
                  </h4>
                  <p className="text-xs text-[#57534e] mt-0.5">
                    Main Auditorium, Exhibition Arena &amp; Sector Roundtable Rooms, Gunupur, Rayagada, Odisha
                  </p>
                </div>
              </div>

              <a
                href="https://www.giet.edu/schools/school-of-engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#e87042]/30 bg-white text-xs font-semibold text-[#c25022] hover:bg-[#e87042]/5 transition-colors shrink-0 shadow-2xs self-start sm:self-center"
              >
                <GraduationCap className="w-4 h-4 text-[#e87042]" />
                <span>Official School Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#e87042] mb-3">
                <Building className="w-5 h-5 text-[#c25e38]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Convention & Auditoriums
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                State-of-the-art central auditorium, conference halls, and seminar spaces equipped with audio-visual broadcasting capabilities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#e87042] mb-3">
                <Bed className="w-5 h-5 text-[#e87042]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Residential Hostels & Suites
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                Dedicated university executive guest house suites, faculty residences, and secured student hostel blocks accommodating visiting delegates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#e87042] mb-3">
                <ShieldCheck className="w-5 h-5 text-[#be9740]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Incubation & Lab Facilities
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                Active Technology Business Incubator (TBI) with advanced prototyping, biotechnology facilities, and agricultural testbeds.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive GIET University Campus Map & Directions */}
      <GIETCampusMapSection />

      {/* Verified Travel Gateways & Hub Selector */}
      <section className="py-20 bg-[#ffffff] border-b border-[#e6dfd1]">
        <Container size="wide">
          <SectionHeading
            title="Verified Regional Travel Gateways"
            subtitle="Carefully reviewed distance and transit connectivity options to help you choose the best arrival corridor."
          />

          {/* Cards Grid: Exactly 2 rows on desktop (Row 1: 4 cards, Row 2: 3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mb-12 mt-10">
            {filteredHubs.map((hub, idx) => {
              const isAirport = hub.type === "airport";
              const isRail = hub.type === "railway";
              const isSelected = hub.id === activeHubId;
              const colSpanClass = idx < 4 ? "lg:col-span-3" : "lg:col-span-4";

              return (
                <div
                  key={hub.id}
                  onClick={() => setActiveHubId(hub.id)}
                  className={cn(
                    "bg-white rounded-2xl p-5 sm:p-6 border transition-all cursor-pointer flex flex-col justify-between gap-4",
                    colSpanClass,
                    isSelected
                      ? "border-[#e87042] shadow-md ring-2 ring-[#e87042]/20"
                      : "border-[#e6dfd1] hover:border-[#e87042]/50 hover:shadow-sm"
                  )}
                >
                  <div className="space-y-3.5">
                    {/* Header Row: Category Badge & Code */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                            isAirport
                              ? "bg-amber-50 border-amber-200/60 text-[#c25022]"
                              : isRail
                              ? "bg-emerald-50 border-emerald-200/60 text-emerald-700"
                              : "bg-blue-50 border-blue-200/60 text-blue-700"
                          )}
                        >
                          {isAirport ? (
                            <Plane className="w-4 h-4" />
                          ) : isRail ? (
                            <Train className="w-4 h-4" />
                          ) : (
                            <Car className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#78716c]">
                          {hub.type === "airport" ? "Airport" : hub.type === "railway" ? "Rail Junction" : "Highway Corridor"}
                        </span>
                      </div>

                      <span className="px-2.5 py-1 rounded-md bg-[#faf8f5] border border-[#e6dfd1] text-xs font-mono font-bold text-[#1c1917]">
                        {hub.code}
                      </span>
                    </div>

                    {/* Hub Name: Large & Prominent */}
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] leading-snug">
                      {hub.name}
                    </h3>

                    {/* Clear Metrics: Distance & Travel Time Chip */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm bg-[#faf8f5] border border-[#ede7db] px-2.5 py-1.5 rounded-xl w-fit">
                      <div className="flex items-center gap-1.5 font-bold text-[#1c1917]">
                        <MapPin className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                        <span>{hub.distanceKm}</span>
                      </div>
                      <span className="text-[#d6d0c7]">•</span>
                      <div className="flex items-center gap-1.5 text-[#57534e]">
                        <Clock className="w-3.5 h-3.5 text-[#c25022] shrink-0" />
                        <span className="font-medium">{hub.approxTravelTime}</span>
                      </div>
                    </div>

                    {/* Direct Transit Advice */}
                    <p className="text-xs sm:text-sm text-[#292524] leading-relaxed pt-1">
                      {hub.connectivityDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Travel Help Desk Callout */}
          <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e6dfd1] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e87042] uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Concierge Transit Support</span>
              </div>
              <h4 className="font-serif font-bold text-xl text-[#1c1917]">
                GIET Transport & Reception Coordination
              </h4>
              <p className="text-xs sm:text-sm text-[#4a5752] max-w-xl">
                For groups, institutional delegations, and registered speakers, designated campus shuttles will operate on schedule between Rayagada Railway Station, Palasa, and Visakhapatnam Airport.
              </p>
            </div>

            <Button href={`mailto:${EVENT_METADATA.contactEmail}?subject=Travel%20Desk%20Inquiry`} variant="primary" size="md" className="shrink-0 w-full md:w-auto justify-center">
              <span>Contact Travel Desk</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Accommodation & Local Guidance */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="wide">
          <SectionHeading
            title="Accommodation & Stay Information"
            subtitle="Campus and regional stay arrangements for registered attendees."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#222b27]">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                University On-Campus Hospitality
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                GIET University maintains modern residential facilities including guest house suites for dignitaries, air-conditioned executive quarters for corporate delegates, and student hostels for Junicorn participants.
              </p>
              <div className="text-xs text-[#7e8d87]">
                <em>Allocation is handled during registration confirmation based on participant category.</em>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                Gunupur & Rayagada Hotels
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                A selection of verified local hotels and guest residences are located within Gunupur town and the nearby district center of Rayagada (~75 km). Shuttle loops will be maintained between designated partner hotels and the campus.
              </p>
              <div className="text-xs text-[#7e8d87]">
                <em>Hotel contact lists and preferential summit tariff codes will be published prior to event.</em>
              </div>
            </div>
          </div>

          {/* Gunupur Verified Hotels & Lodging Gallery */}
          <GunupurHotelsSection />
        </Container>
      </section>

      {/* Action Footer */}
      <section className="py-16 bg-[#0c0d12] text-[#fcfbf8] text-center">
        <Container size="default">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl">
            Start Planning Your Journey
          </h2>
          <p className="mt-2 text-sm text-[#c8d1cd] max-w-xl mx-auto">
            Review the 3-day tentative programme or register your category for December 2026.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/programme" variant="gold" size="md" className="w-full sm:w-auto justify-center">
              View 3-Day Programme
            </Button>
            <Button href="https://isf-test.vercel.app/" variant="terracotta" size="md" className="w-full sm:w-auto justify-center">
              Registration Gateway
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

