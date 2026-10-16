"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  AlertCircle, 
  Filter, 
  Search, 
  Utensils 
} from "lucide-react";
import { PROGRAMME_DAYS } from "@/data/eventData";
import { SessionTrack } from "@/lib/types";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";

export function ProgrammeClient() {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[0].id);
  const [selectedTrack, setSelectedTrack] = useState<SessionTrack>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeDay = PROGRAMME_DAYS.find((d) => d.id === selectedDayId) || PROGRAMME_DAYS[0];

  // All available tracks for filtering
  const tracks: { id: SessionTrack; label: string }[] = [
    { id: "all", label: "All Sessions" },
    { id: "Inaugural & Awards", label: "Inaugural & Ceremonies" },
    { id: "Healthcare & Lifesciences", label: "Healthcare & Life Sciences" },
    { id: "Agri & Food", label: "Agri & Food" },
    { id: "Junicorn & Grassroots", label: "Junicorn Pitches" },
    { id: "Global Investors & GCC", label: "Investors & GCC" },
    { id: "Policy & Ecosystem", label: "Policy & Ecosystem" },
    { id: "Eco-Trek & Cultural", label: "Eco-Trek & Cultural" },
    { id: "Networking & Dining", label: "Araku Coffee & Dining" },
  ];

  // Filtered sessions for the active day
  const filteredSessions = useMemo(() => {
    return activeDay.sessions.filter((session) => {
      const matchesTrack = selectedTrack === "all" || session.track === selectedTrack;
      const matchesSearch =
        searchQuery.trim() === "" ||
        session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTrack && matchesSearch;
    });
  }, [activeDay, selectedTrack, searchQuery]);

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
            unoptimized
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
            Three Days of Venture Dealmaking, Deep Exploration &amp; Grassroots Scale.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Interactive schedule for 18–20 December 2026 at GIET University, Gunupur. Session timings reflect the draft planning brochure.
          </p>

          {/* Pre-Summit Welcome Dinner Callout */}
          <div className="mt-8 max-w-xl mx-auto p-3.5 rounded-xl bg-[#141620]/80 border border-white/10 text-xs sm:text-sm text-white flex items-center justify-center gap-2 backdrop-blur-md">
            <Utensils className="w-4 h-4 text-[#e87042] flex-shrink-0" />
            <span>
              <strong>Pre-Event Welcome Dinner:</strong> Thursday evening, 17 December 2026 for early arriving dignitaries and delegates.
            </span>
          </div>
        </Container>
      </section>

      {/* Interactive Main Area */}
      <section className="py-12 sm:py-16 bg-[#fcfbf8]">
        <Container size="wide">
          {/* Centered Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl lg:text-[2.65rem] text-[#1c1917] tracking-tight leading-[1.15]">
              Explore the 3-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Summit Timetable</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Plenary ceremonies, deep-tech panels, venture pitches, and regional cultural immersions across all three days.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          {/* Draft Notice Alert */}
          <div className="mb-8 p-4.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start gap-3 shadow-xs">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="font-bold">Tentative Programme — Subject to Change.</strong> The brochure explicitly identifies this schedule as a working draft. Specific speaker panels, session room allocations, and forest trek transport matrices will be formalized and notified to registered delegates.
            </div>
          </div>

          {/* Day Navigation Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {PROGRAMME_DAYS.map((day) => {
              const isSelected = day.id === selectedDayId;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setSelectedDayId(day.id)}
                  className={cn(
                    "p-5 rounded-2xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143e30]",
                    isSelected
                      ? "bg-[#143e30] text-[#fcfbf8] border-[#143e30] shadow-md ring-1 ring-[#143e30]"
                      : "bg-[#ffffff] text-[#222b27] border-[#e6dfd1] hover:bg-[#ede7db]/50 hover:border-[#dfd6c4]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider",
                        isSelected ? "bg-[#d6b25e] text-[#081a14]" : "bg-[#f7f4ec] text-[#143e30]"
                      )}
                    >
                      Day 0{day.dayNumber}
                    </span>
                    <Badge
                      variant={isSelected ? "gold" : "draft"}
                      size="sm"
                      className="text-[10px]"
                    >
                      {day.status}
                    </Badge>
                  </div>

                  <div className="font-serif font-bold text-lg sm:text-xl">
                    {day.dayName}, {day.dateFormatted}
                  </div>

                  <p
                    className={cn(
                      "text-xs mt-2 line-clamp-2",
                      isSelected ? "text-[#dfd6c4]" : "text-[#7e8d87]"
                    )}
                  >
                    {day.theme}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Filter Bar & Search */}
          <div className="bg-[#ffffff] p-4 sm:p-5 rounded-2xl border border-[#e6dfd1] shadow-xs mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7e8d87] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search sessions, roundtables, tracks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#fcfbf8] border border-[#e6dfd1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#143e30] text-[#161e1b]"
              />
            </div>

            {/* Track Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs text-[#7e8d87] font-semibold flex items-center gap-1 mr-1 flex-shrink-0">
                <Filter className="w-3.5 h-3.5" />
                Track:
              </span>
              {tracks.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrack(track.id)}
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer border flex-shrink-0",
                    selectedTrack === track.id
                      ? "bg-[#143e30] text-[#fcfbf8] border-[#143e30] font-semibold"
                      : "bg-[#f7f4ec] text-[#4a5752] border-[#ede7db] hover:bg-[#ede7db]"
                  )}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Detail Banner */}
          <div className="bg-[#f7f4ec] rounded-2xl p-5 border border-[#dfd6c4] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs uppercase font-semibold text-[#8c671b] tracking-wider">
                {activeDay.dayName} Focus
              </div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#103327]">
                {activeDay.theme}
              </h2>
            </div>
            <div className="text-xs text-[#7e8d87]">
              {filteredSessions.length} session{filteredSessions.length === 1 ? "" : "s"} displayed
            </div>
          </div>

          {/* Session Cards List */}
          {filteredSessions.length === 0 ? (
            <div className="bg-[#ffffff] rounded-2xl p-12 text-center border border-[#e6dfd1] max-w-xl mx-auto">
              <Calendar className="w-10 h-10 text-[#7e8d87] mx-auto mb-3" />
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                No Sessions Match Your Search
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-1 mb-4">
                Try selecting &apos;All Sessions&apos; or clearing your search term.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedTrack("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSessions.map((session) => {
                const isCoffee = session.title.toLowerCase().includes("araku");
                const isTrek = session.sessionType === "outdoor";
                const isPitch = session.sessionType === "pitch";

                return (
                  <div
                    key={session.id}
                    className={cn(
                      "rounded-3xl border p-6 sm:p-7 transition-all bg-[#ffffff]",
                      isCoffee
                        ? "border-[#d6b25e]/60 bg-[#fffdfa]"
                        : isTrek
                        ? "border-[#256f57]/50 bg-[#f7faf8]"
                        : "border-[#e6dfd1] hover:border-[#143e30]/40 shadow-xs"
                    )}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                      {/* Left Time Badge */}
                      <div className="flex-shrink-0 md:w-56">
                        <div className="p-3.5 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] text-[#143e30] inline-flex md:flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-[#c25e38] flex-shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-[#161e1b]">
                            {session.timeSlot}
                          </span>
                        </div>

                        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#7e8d87]">
                          <MapPin className="w-3.5 h-3.5 text-[#c25e38]" />
                          <span>{session.location}</span>
                        </div>
                      </div>

                      {/* Right Details */}
                      <div className="flex-1 space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge
                            variant={
                              isCoffee ? "gold" : isTrek ? "forest" : isPitch ? "terracotta" : "ivory"
                            }
                            size="sm"
                          >
                            {session.track}
                          </Badge>

                          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {session.sessionType}
                          </span>

                          {session.isTentative && (
                            <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">
                              Draft Schedule
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#103327]">
                          {session.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#4a5752] leading-relaxed">
                          {session.description}
                        </p>

                        {session.capacityNote && (
                          <div className="mt-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                            Note: {session.capacityNote}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="mt-16 p-8 rounded-3xl bg-[#081a14] text-[#fcfbf8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl">
                Ready to Join the Sessions?
              </h3>
              <p className="text-xs sm:text-sm text-[#c8d1cd] mt-1 max-w-xl">
                Select your participant category on our registration gateway to ensure priority allocation upon official opening.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button href="/register" variant="terracotta" size="md">
                Register Interest
              </Button>
              <Button href="/venue" variant="outline" size="md" className="text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#143e30]">
                Travel Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
