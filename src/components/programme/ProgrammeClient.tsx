"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  MapPin,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Tag
} from "lucide-react";
import { PROGRAMME_DAYS } from "@/data/eventData";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";

export function ProgrammeClient() {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[1].id);
  const [hoveredSessionId, setHoveredSessionId] = useState<string | null>(null);
  const [expandedCeremony, setExpandedCeremony] = useState(false);

  const activeDay = PROGRAMME_DAYS.find((d) => d.id === selectedDayId) || PROGRAMME_DAYS[1];

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Real Static Backdrop */}
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
                    {/* Top indicator line */}
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

            {/* Clean Executive Vertical Timeline (No AI thumbnail clutter) */}
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
              <div className="space-y-4">
                {activeDay.sessions.map((session, index) => {
                  const isHovered = hoveredSessionId === session.id;

                  return (
                    <div
                      key={session.id}
                      onMouseEnter={() => setHoveredSessionId(session.id)}
                      onMouseLeave={() => setHoveredSessionId(null)}
                      className="relative group"
                    >
                      {/* Timeline Graph Node on Spine */}
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

                      {/* Clean Executive Session Card (Pure content, no AI thumbnails) */}
                      <div
                        className={cn(
                          "rounded-2xl border p-5 sm:p-6 transition-all duration-300 bg-white shadow-2xs",
                          isHovered
                            ? "shadow-md -translate-y-0.5 border-[#e87042] ring-1 ring-[#e87042]/30"
                            : "border-[#e6dfd1] hover:border-[#dfd6c4]"
                        )}
                      >
                        <div className="space-y-2.5">
                          {/* Timing & Track Row */}
                          <div className="flex flex-wrap items-center justify-between gap-2.5">
                            <div className="flex flex-wrap items-center gap-2">
                              {/* Time Pill */}
                              <div className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#e8dfd3] text-[#1c1917] inline-flex items-center gap-1.5 shadow-2xs">
                                <Clock className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                                <span className="font-bold text-xs sm:text-sm text-[#161e1b] tracking-tight">
                                  {session.timeSlot}
                                </span>
                              </div>

                              {/* Track Badge */}
                              {session.track && (
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#e87042]/10 text-[#c25022]">
                                  {session.track}
                                </span>
                              )}
                            </div>

                            {/* Location Chip */}
                            <div className="inline-flex items-center gap-1.5 text-xs text-[#78716c]">
                              <MapPin className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                              <span className="font-semibold text-[#57534e]">{session.location}</span>
                            </div>
                          </div>

                          {/* Session Title */}
                          <h3 className="font-serif font-black text-lg sm:text-xl text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors">
                            {session.title}
                          </h3>

                          {/* Session Description */}
                          <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                            {session.description}
                          </p>

                          {/* Optional Sub-events timeline (e.g. Inauguration Ceremony Breakdown) */}
                          {session.subEvents && session.subEvents.length > 0 && (
                            <div className="mt-3.5 pt-3 border-t border-[#ede7db]">
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
                                    : "View Minute-by-Minute Ceremony Protocol (09:30 – 11:25 AM)"}
                                </span>
                                {expandedCeremony ? (
                                  <ChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <ChevronDown className="w-3.5 h-3.5" />
                                )}
                              </button>

                              {expandedCeremony && (
                                <div className="mt-2.5 space-y-1 bg-[#faf8f5] p-3.5 sm:p-4 rounded-xl border border-[#ede7db] max-h-80 overflow-y-auto">
                                  {session.subEvents.map((evt, eIdx) => (
                                    <div 
                                      key={eIdx} 
                                      className="flex items-start gap-2.5 sm:gap-3 text-xs text-[#292524] py-1.5 border-b border-[#ede7db]/50 last:border-0"
                                    >
                                      <span className="font-mono font-semibold text-[#c25022] shrink-0 text-[11px] w-24">
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Callout Bar */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-[#e8dfd3] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#e87042] uppercase block">
                  Delegate Protocol &amp; Pre-Registration
                </span>
                <h4 className="font-serif font-black text-xl sm:text-2xl text-[#1c1917] mt-1">
                  Have Questions Regarding Session Allocation?
                </h4>
                <p className="text-xs sm:text-sm text-[#57534e] mt-1 max-w-xl">
                  Connect with the Summit Secretariat for stage schedules, jury presentation rooms, or sectoral breakout slot confirmations.
                </p>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="shrink-0 w-full sm:w-auto"
              >
                <span>Contact Secretariat</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
