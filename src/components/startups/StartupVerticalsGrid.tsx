"use client";

import React, { useState } from "react";
import {
  Activity,
  Building2,
  Check,
  ChevronDown,
  Coins,
  Cpu,
  Lightbulb,
  Shield,
  Sparkles,
  Users,
  Wheat,
  Zap,
} from "lucide-react";
import { STARTUP_VERTICALS } from "@/data/eventData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Cpu,
  Activity,
  Shield,
  Users,
  Building2,
  Zap,
  Coins,
  Sparkles,
  Lightbulb,
};

export function StartupVerticalsGrid() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const isAllExpanded = STARTUP_VERTICALS.every((vertical) => expandedIds[vertical.id]);

  const toggleExpand = (id: string, index: number) => {
    // On lg (2-col grid), sync the row partner so neither side looks empty
    const isLg = typeof window !== "undefined" && window.innerWidth >= 1024;
    if (isLg) {
      const partnerIndex = index % 2 === 0 ? index + 1 : index - 1;
      const partnerId = STARTUP_VERTICALS[partnerIndex]?.id;
      const next = !expandedIds[id];
      setExpandedIds((cur) => ({
        ...cur,
        [id]: next,
        ...(partnerId ? { [partnerId]: next } : {}),
      }));
    } else {
      setExpandedIds((cur) => ({ ...cur, [id]: !cur[id] }));
    }
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedIds({});
      return;
    }

    setExpandedIds(
      Object.fromEntries(STARTUP_VERTICALS.map((vertical) => [vertical.id, true]))
    );
  };

  return (
    <div className="min-w-0 overflow-hidden rounded-[28px] border border-[#d8d0c2] bg-[#fffdf9] shadow-[0_24px_60px_rgba(50,42,31,0.07)]">
      <div className="flex flex-col gap-4 border-b border-[#ded6c9] bg-[#f2ede3] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="font-serif text-3xl font-bold text-[#a84e2d]">09</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#363a35]">Official sectors</p>
            <p className="mt-0.5 text-xs text-[#777169]">One connected innovation portfolio</p>
          </div>
        </div>
        <button
          onClick={toggleAll}
          type="button"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[#cbc1b2] bg-white px-4 py-2 text-xs font-bold text-[#38352f] transition-colors hover:border-[#a84e2d] hover:text-[#a84e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a84e2d]/40"
        >
          {isAllExpanded ? "Collapse all focus areas" : "Explore all focus areas"}
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform duration-300", isAllExpanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="grid min-w-0 lg:grid-cols-2">
        {STARTUP_VERTICALS.map((vertical, index) => {
          const Icon = iconMap[vertical.iconName] || Sparkles;
          const isExpanded = Boolean(expandedIds[vertical.id]);
          const panelId = `${vertical.id}-focus-areas`;

          return (
            <article
              key={vertical.id}
              className={cn(
                "group relative min-w-0 border-b border-[#e3ddd3] px-5 py-6 transition-colors duration-300 hover:bg-[#faf6ef] sm:px-8 sm:py-8",
                index % 2 === 0 && (index === STARTUP_VERTICALS.length - 1 ? "" : "lg:border-r"),
                index === STARTUP_VERTICALS.length - 1 && "lg:col-span-2 lg:border-b-0",
                STARTUP_VERTICALS.length % 2 === 0 && index >= STARTUP_VERTICALS.length - 2 && "lg:border-b-0",
                isExpanded && "bg-[#faf6ef]"
              )}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="font-serif text-sm font-bold text-[#a84e2d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cec0] bg-white text-[#1b5947] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none">
                    <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="break-words text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-[#8a6729] [overflow-wrap:anywhere]">
                    {vertical.subtitle}
                  </p>
                  <h3 className="mt-2 break-words font-serif text-2xl font-bold leading-[1.08] tracking-[-0.025em] text-[#1e211e] [overflow-wrap:anywhere] sm:text-[1.7rem]">
                    {vertical.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#666158]">
                    {vertical.description}
                  </p>

                  <div className="mt-6 flex min-w-0 flex-col items-start gap-3 border-t border-[#e2dbd0] pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                    <button
                      type="button"
                      onClick={() => toggleExpand(vertical.id, index)}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#a84e2d] transition-colors hover:text-[#77341f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a84e2d]/40"
                    >
                      {isExpanded ? "Hide focus areas" : "View focus areas"}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-300", isExpanded && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div id={panelId} className="animate-in fade-in slide-in-from-top-1 duration-300 motion-reduce:animate-none">
                      <div className="mt-5 border-l-2 border-[#b85b38] pl-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#817a70]">Sub-domain focus</p>
                        <ul className="mt-3 grid gap-2 text-xs leading-5 text-[#494740]">
                          {vertical.focusAreas.map((area) => (
                            <li key={area} className="flex items-start gap-2">
                              <Check className="mt-1 h-3 w-3 shrink-0 text-[#1b6952]" strokeWidth={2.5} aria-hidden="true" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-[11px] leading-5 text-[#777168]">
                          <strong className="font-bold text-[#514e47]">Built for:</strong> {vertical.targetParticipants}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
