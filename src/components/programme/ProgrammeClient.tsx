"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { PROGRAMME_DAYS } from "@/data/eventData";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";

// Map each session to its tailored realistic photo & metadata
function getSessionImage(sessionId: string, sessionType: string, title: string): { src: string; alt: string; tag: string } {
  const lowerTitle = title.toLowerCase();

  // Day 0 - 9 Sectoral Pre-Summit Breakouts (each with its own distinct realistic documentary photo)
  if (sessionId === "sess-001" || lowerTitle.includes("agritech")) {
    return {
      src: "/images/sessions/breakout-agritech.jpg",
      alt: "Agritech startup founders demonstrating soil sensors and precision agriculture in seminar hall",
      tag: "Agritech & Food Safety"
    };
  }
  if (sessionId === "sess-002" || lowerTitle.includes("defence") || lowerTitle.includes("aerospace")) {
    return {
      src: "/images/sessions/breakout-defence.jpg",
      alt: "Aerospace and defence engineering prototype demonstration before jury in auditorium",
      tag: "Defence & Deep Tech"
    };
  }
  if (sessionId === "sess-003" || lowerTitle.includes("life sciences") || lowerTitle.includes("healthcare breakout")) {
    return {
      src: "/images/sessions/breakout-healthcare.jpg",
      alt: "Biomedical startup founder presenting diagnostic device to medical jury",
      tag: "Life Sciences & Healthcare"
    };
  }
  if (sessionId === "sess-004" || (lowerTitle.includes("infrastructure") && !lowerTitle.includes("roundtable"))) {
    return {
      src: "/images/sessions/breakout-infra.jpg",
      alt: "Civil engineering and sustainable materials presentation in conference hall",
      tag: "Infrastructure"
    };
  }
  if (sessionId === "sess-005" || lowerTitle.includes("clean energy") || lowerTitle.includes("water safety")) {
    return {
      src: "/images/sessions/breakout-clean-energy.jpg",
      alt: "Solar-powered water filtration prototype demonstration before academic panel",
      tag: "Clean Energy & Water Safety"
    };
  }
  if (sessionId === "sess-006" || lowerTitle.includes("quantum") || (lowerTitle.includes("ai &") && lowerTitle.includes("technology"))) {
    return {
      src: "/images/sessions/breakout-ai-quantum.jpg",
      alt: "Computer science researcher presenting AI models and quantum computing benchmarks in auditorium",
      tag: "AI & Quantum Tech"
    };
  }
  if (sessionId === "sess-007" || lowerTitle.includes("fintech") || lowerTitle.includes("tribaltech")) {
    return {
      src: "/images/sessions/breakout-fintech-tribal.jpg",
      alt: "Rural fintech POS device and tribal marketplace demonstration before banking jury",
      tag: "Fintech & Tribaltech"
    };
  }
  if (sessionId === "sess-008" || lowerTitle.includes("women empowerment") || lowerTitle.includes("social inclusion")) {
    return {
      src: "/images/sessions/breakout-women-empowerment.jpg",
      alt: "Woman entrepreneur presenting artisanal enterprise and rural empowerment initiative",
      tag: "Women Empowerment"
    };
  }
  if (sessionId === "sess-009" || lowerTitle.includes("cross-disciplinary") || lowerTitle.includes("innovation showcase")) {
    return {
      src: "/images/sessions/breakout-innovation-showcase.jpg",
      alt: "Engineering students demonstrating autonomous robotics rover in university makerspace",
      tag: "Innovation Showcase"
    };
  }

  // Day 1 & General Sessions
  if (sessionId === "sess-101" || lowerTitle.includes("registration") || lowerTitle.includes("breakfast networking")) {
    return {
      src: "/images/sessions/session-breakfast.jpg",
      alt: "Delegate Registration & Breakfast Networking at Convention Pavilion",
      tag: "Networking & Registration"
    };
  }
  if (sessionId === "sess-102" || lowerTitle.includes("exhibition")) {
    return {
      src: "/images/sessions/session-exhibition.jpg",
      alt: "Exhibition Inauguration & Ribbon Cutting Ceremony",
      tag: "Exhibition Arena"
    };
  }
  if (sessionId === "sess-103" || lowerTitle.includes("awards") || lowerTitle.includes("inauguration function")) {
    return {
      src: "/images/sessions/session-inauguration.jpg",
      alt: "Summit Inauguration Function & Recognition Awards on Stage",
      tag: "Ceremony & Awards"
    };
  }
  if (sessionId === "sess-104" || lowerTitle.includes("keynote")) {
    return {
      src: "/images/startup-stage-backdrop.jpg",
      alt: "Plenary Keynote Session on Scaling Grassroots Ventures",
      tag: "Keynote Plenary"
    };
  }
  if (sessionId === "sess-106" || lowerTitle.includes("agri & food roundtable")) {
    return {
      src: "/images/sessions/breakout-agritech.jpg",
      alt: "Agri & Food Sector Leadership Roundtable Discussion",
      tag: "Agri & Food Roundtable"
    };
  }
  if (sessionId === "sess-105" || sessionId === "sess-302" || sessionType === "roundtable") {
    return {
      src: "/images/sessions/session-roundtable.jpg",
      alt: "Executive Sector Roundtable & Policy Formulation Discussion",
      tag: "Sector Roundtable"
    };
  }
  if (sessionId === "sess-108" || sessionType === "pitch") {
    return {
      src: "/images/sessions/session-pitching.jpg",
      alt: "Tribal and Rural Junicorn Pitching Session Before Investors",
      tag: "Venture Pitching"
    };
  }
  if (sessionId === "sess-109" || lowerTitle.includes("araku") || lowerTitle.includes("coffee")) {
    return {
      src: "/images/sessions/session-coffee.jpg",
      alt: "Araku Artisanal Coffee Tasting & Founder Networking Break",
      tag: "Araku Coffee Break"
    };
  }
  if (sessionId === "sess-110" || lowerTitle.includes("gcc") || lowerTitle.includes("investors")) {
    return {
      src: "/images/summit-investors-lounge.jpg",
      alt: "Global Investors & GCC Connect Executive Lounge",
      tag: "Investor Lounge"
    };
  }
  if (sessionId === "sess-111" || lowerTitle.includes("gala") || lowerTitle.includes("cultural")) {
    return {
      src: "/images/sessions/session-gala.jpg",
      alt: "Cultural Programme & Gala Networking Dinner Under the Stars",
      tag: "Gala & Cultural Night"
    };
  }
  if (sessionId === "sess-201" || sessionType === "outdoor") {
    return {
      src: "/images/dandakaranya-canopy.jpg",
      alt: "Dandakaranya Forest Trekking Expedition in Historic Wilderness",
      tag: "Forest Eco-Trek"
    };
  }
  if (sessionId === "sess-301" || sessionId === "sess-303" || lowerTitle.includes("lunch")) {
    return {
      src: "/images/sessions/session-breakfast.jpg",
      alt: "Executive Dining Pavilion and Delegate Networking",
      tag: "Dining & Departure"
    };
  }
  
  return {
    src: "/images/summit-pitch-stage.jpg",
    alt: title,
    tag: "Summit Session"
  };
}

export function ProgrammeClient() {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[1].id);
  const [hoveredSessionId, setHoveredSessionId] = useState<string | null>(null);
  const [expandedCeremony, setExpandedCeremony] = useState(false);

  const activeDay = PROGRAMME_DAYS.find((d) => d.id === selectedDayId) || PROGRAMME_DAYS[1];

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-timetable-display.jpg"
            alt="Summit Programme & Timetable Display Screen with Attendees"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-95"
          />
          {/* Obsidian-Peach scrim & vignette */}
          <div className="absolute inset-0 z-10 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        <Container size="wide" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Summit Programme &amp; Timetable
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Four Days of Sectoral Breakouts, Venture Pitching, Forest Exploration &amp; Grassroots Ecosystem Building.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Verified official schedule for 17–20 December 2026 at GIET University, Gunupur.
          </p>
        </Container>
      </section>

      {/* Interactive Main Area */}
      <section className="py-12 sm:py-16 bg-[#fcfbf8]">
        <Container size="default">
          <div className="max-w-5xl mx-auto">
            {/* Centered Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl lg:text-[2.65rem] text-[#1c1917] tracking-tight leading-[1.15]">
                Explore the Summit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Agenda &amp; Timetable</span>
              </h2>
              <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
                Pre-summit domain breakouts, plenary inaugurations, sector roundtables, Junicorn pitches, and forest immersion across all days.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            {/* Day Navigation Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
              {PROGRAMME_DAYS.map((day) => {
                const isSelected = day.id === selectedDayId;
                return (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => setSelectedDayId(day.id)}
                    className={cn(
                      "p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] relative overflow-hidden group",
                      isSelected
                        ? "bg-[#1c1917] text-[#fcfbf8] border-[#1c1917] shadow-lg ring-1 ring-[#1c1917]"
                        : "bg-[#ffffff] text-[#222b27] border-[#e6dfd1] hover:bg-[#ede7db]/50 hover:border-[#dfd6c4]"
                    )}
                  >
                    {/* Subtle top indicator line */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e87042] via-[#d68c45] to-[#c25022]" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={cn(
                          "text-xs font-semibold px-2.5 py-0.5 rounded-md uppercase tracking-wider",
                          isSelected ? "bg-[#e87042] text-white" : "bg-[#f7f4ec] text-[#e87042]"
                        )}
                      >
                        {day.dayNumber === 0 ? "Pre-Summit" : `Day 0${day.dayNumber}`}
                      </span>
                    </div>

                    <div className="font-serif font-bold text-base sm:text-lg">
                      {day.dayName}, {day.dateFormatted}
                    </div>

                    <p
                      className={cn(
                        "text-xs mt-1.5 line-clamp-2",
                        isSelected ? "text-[#dfd6c4]" : "text-[#7e8d87]"
                      )}
                    >
                      {day.theme}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Animated Vertical Graph Timeline */}
            <div className="relative pl-7 min-[380px]:pl-8 sm:pl-10 md:pl-14">
            {/* Continuous Vertical Graph Spine Line */}
            <div 
              className="absolute left-3 sm:left-4 md:left-6 top-3 bottom-8 w-[3px] bg-gradient-to-b from-[#e87042] via-[#d68c45] to-[#c25022]/40 rounded-full"
              style={{
                boxShadow: "0 0 12px rgba(232, 112, 66, 0.35)"
              }}
            >
              {/* Dynamic light pulse flowing down the spine */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent w-full h-32 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            {/* Sessions Stack */}
            <div className="space-y-3.5 sm:space-y-4">
              {activeDay.sessions.map((session, index) => {
                const isCoffee = session.title.toLowerCase().includes("araku");
                const isTrek = session.sessionType === "outdoor";
                const isHovered = hoveredSessionId === session.id;
                const media = getSessionImage(session.id, session.sessionType, session.title);

                return (
                  <div
                    key={session.id}
                    onMouseEnter={() => setHoveredSessionId(session.id)}
                    onMouseLeave={() => setHoveredSessionId(null)}
                    className="relative group"
                  >
                    {/* Animated Timeline Graph Node on Spine */}
                    <div 
                      className={cn(
                        "absolute -left-[28px] sm:-left-[39px] md:-left-[47px] top-6 -translate-y-1/2 flex items-center justify-center transition-all duration-300 z-10",
                        isHovered ? "scale-115" : "scale-100"
                      )}
                    >
                      {/* Pulse halo ring */}
                      <span className={cn(
                        "absolute -inset-1 rounded-full bg-[#e87042]/25 transition-opacity",
                        isHovered ? "opacity-100 animate-ping" : "opacity-0 group-hover:opacity-100"
                      )} />

                      {/* Main Node Badge */}
                      <div className={cn(
                        "w-6.5 h-6.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-[11px] transition-colors duration-300 shadow-sm border-2",
                        isHovered
                          ? "bg-[#e87042] text-white border-white ring-2 ring-[#e87042]"
                          : "bg-[#1c1917] text-[#ffedd5] border-[#e87042]"
                      )}>
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Horizontal Connector Branch to Card */}
                      <div className={cn(
                        "hidden sm:block absolute left-full w-3 sm:w-5 h-[2px] transition-all duration-300",
                        isHovered 
                          ? "bg-gradient-to-r from-[#e87042] to-[#d68c45]" 
                          : "bg-gradient-to-r from-[#e87042]/60 to-transparent"
                      )} />
                    </div>

                    {/* Timeline Session Content Card with AI Scene Picture - Compact & Sleek */}
                    <div
                      className={cn(
                        "rounded-2xl border p-4 sm:p-4.5 transition-all duration-300 bg-[#ffffff]",
                        isHovered
                          ? "shadow-md -translate-y-0.5 border-[#e87042] ring-1 ring-[#e87042]/30"
                          : isCoffee
                          ? "border-[#d6b25e]/60 bg-[#fffdfa] shadow-xs"
                          : isTrek
                          ? "border-[#256f57]/50 bg-[#f7faf8] shadow-xs"
                          : "border-[#e6dfd1] hover:border-[#dfd6c4] shadow-xs"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Left / Main Details */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          {/* Timing Row */}
                          <div className="flex items-center gap-2 mb-1.5">
                            {/* Time Pill */}
                            <div className="px-2.5 py-1 rounded-lg bg-[#f7f4ec] border border-[#dfd6c4] text-[#1c1917] inline-flex items-center gap-1.5 shadow-2xs">
                              <Clock className="w-3 h-3 text-[#e87042] flex-shrink-0" />
                              <span className="font-bold text-xs text-[#161e1b] tracking-tight">
                                {session.timeSlot}
                              </span>
                            </div>
                          </div>

                          {/* Session Title */}
                          <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors">
                            {session.title}
                          </h3>

                          {/* Location Pin */}
                          <div className="flex items-center gap-1.5 text-xs text-[#7e8d87]">
                            <MapPin className="w-3 h-3 text-[#e87042] flex-shrink-0" />
                            <span className="font-semibold text-[#57534e]">{session.location}</span>
                          </div>

                          {/* Session Description */}
                          <p className="text-xs text-[#57534e] leading-relaxed">
                            {session.description}
                          </p>

                          {/* Optional Sub-events timeline (e.g. Inauguration Ceremony Breakdown) */}
                          {session.subEvents && session.subEvents.length > 0 && (
                            <div className="mt-3 pt-2.5 border-t border-[#ede7db]/80">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedCeremony(!expandedCeremony);
                                }}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c25022] hover:text-[#e87042] transition-colors cursor-pointer py-1"
                              >
                                <span>
                                  {expandedCeremony 
                                    ? "Hide Minute-by-Minute Ceremony Protocol" 
                                    : "View Minute-by-Minute Ceremony Schedule (09:30 - 11:25 AM)"}
                                </span>
                                {expandedCeremony ? (
                                  <ChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <ChevronDown className="w-3.5 h-3.5" />
                                )}
                              </button>

                              {expandedCeremony && (
                                <div className="mt-2.5 space-y-1 bg-[#faf8f5] p-3 sm:p-4 rounded-xl border border-[#ede7db] max-h-80 overflow-y-auto">
                                  {session.subEvents.map((evt, eIdx) => (
                                    <div 
                                      key={eIdx} 
                                      className="flex items-start gap-2 sm:gap-2.5 text-xs text-[#292524] py-1 border-b border-[#ede7db]/50 last:border-0"
                                    >
                                      <span className="font-mono font-semibold text-[#c25022] shrink-0 text-[10.5px] sm:text-[11px] w-20 min-[360px]:w-24">
                                        {evt.time}
                                      </span>
                                      <span className="leading-snug text-[#44403c] font-medium text-xs">{evt.title}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Right / Visual AI-Generated Picture Thumbnail - Compact & Elegant */}
                        <div className="relative w-full sm:w-44 md:w-52 lg:w-56 h-32 sm:h-28 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[#1c1917] border border-[#e6dfd1]/80 shadow-2xs">
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 224px"
                            className={cn(
                              "object-cover transition-all duration-500 ease-out",
                              isHovered ? "scale-105 brightness-100" : "scale-100 brightness-95"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Timeline Milestone End Terminal */}
            <div className="relative mt-8 pt-4 flex items-center gap-3">
              <div className="absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1c1917] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#7e8d87] pl-3 sm:pl-0">
                End of {activeDay.dayName} Scheduled Sessions • Transitions to Evening Network Circles
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-16 p-8 rounded-3xl bg-[#0c0d12] text-[#fcfbf8] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#232733] shadow-lg">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl">
                Ready to Join the Sessions?
              </h3>
              <p className="text-xs sm:text-sm text-[#c8d1cd] mt-1 max-w-xl">
                Select your participant category on our registration gateway to ensure priority allocation upon official opening.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button href="https://isf-test.vercel.app/" variant="terracotta" size="md">
                Register Interest
              </Button>
              <Button href="/venue" variant="outline" size="md" className="text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#1a1d28]">
                Travel Guide
              </Button>
            </div>
          </div>
        </div>
      </Container>
      </section>
    </div>
  );
}
