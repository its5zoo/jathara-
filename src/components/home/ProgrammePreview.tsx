"use client";

import React, { useState } from "react";
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  Calendar
} from "lucide-react";
import { PROGRAMME_DAYS } from "@/data/eventData";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";

export function ProgrammePreview() {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[0].id);

  const activeDay = PROGRAMME_DAYS.find((d) => d.id === selectedDayId) || PROGRAMME_DAYS[0];

  return (
    <section className="py-14 sm:py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Summit Schedule"
          title="Three Days of Focused Engagement"
          subtitle="Explore the key highlights for each day of Startup Jathara 2026."
          action={
            <Button href="/programme" variant="primary" size="md">
              <span>View Full Schedule</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          }
        />

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {PROGRAMME_DAYS.map((day) => {
            const isSelected = day.id === selectedDayId;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setSelectedDayId(day.id)}
                className={cn(
                  "flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143e30]",
                  isSelected
                    ? "bg-[#143e30] text-[#fcfbf8] border-[#143e30] shadow-sm"
                    : "bg-[#ffffff] text-[#222b27] border-[#dfd6c4] hover:bg-[#ede7db]/50"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
                    isSelected ? "bg-[#d6b25e] text-[#081a14]" : "bg-[#f7f4ec] text-[#143e30]"
                  )}
                >
                  D{day.dayNumber}
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider opacity-80">
                    {day.dayName}
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-bold">
                    {day.dateFormatted}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Day Content */}
        <div className="bg-[#ffffff] border border-[#e6dfd1] rounded-3xl p-5 sm:p-8 shadow-xs max-w-4xl mx-auto">
          <div className="border-b border-[#ede7db] pb-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="terracotta" size="sm">
                  Day {activeDay.dayNumber} Theme
                </Badge>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#103327]">
                {activeDay.theme}
              </h3>
            </div>
            <span className="text-xs text-[#7e8d87] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c25e38]" />
              <span>{activeDay.dateFormatted}</span>
            </span>
          </div>

          {/* Top 3 Highlight Sessions */}
          <div className="space-y-3">
            {activeDay.sessions.slice(0, 3).map((session) => (
              <div
                key={session.id}
                className="p-3.5 sm:p-4 rounded-xl bg-[#fcfbf8] border border-[#ede7db] hover:border-[#143e30]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded-lg bg-[#f7f4ec] border border-[#dfd6c4] text-[#143e30] shrink-0 text-center min-w-[95px]">
                    <Clock className="w-3 h-3 mx-auto mb-0.5 text-[#c25e38]" />
                    <span className="text-[11px] font-bold block leading-tight text-[#161e1b]">
                      {session.timeSlot}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#8c671b] uppercase tracking-wider block">
                      {session.track}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#103327] truncate">
                      {session.title}
                    </h4>
                    <p className="text-xs text-[#5c6964] mt-0.5 line-clamp-1">
                      {session.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#7e8d87] shrink-0 sm:self-center">
                  <MapPin className="w-3 h-3 text-[#c25e38]" />
                  <span>{session.location.split(",")[0]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#ede7db] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-[#7e8d87]">
              Showing key highlights. Explore all {activeDay.sessions.length} sessions in the complete schedule.
            </p>
            <Button href="/programme" variant="secondary" size="sm" className="w-full sm:w-auto">
              <span>Explore Complete 3-Day Schedule</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
