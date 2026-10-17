"use client";

import React, { useState } from "react";
import { 
  Wheat, 
  Cpu, 
  Activity, 
  Shield, 
  Users, 
  Building2, 
  Zap, 
  Coins, 
  Sparkles, 
  Leaf, 
  Globe2, 
  ChevronDown,
  ArrowRight 
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
  Leaf,
  Globe2,
};

export function StartupVerticalsGrid() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllExpanded = STARTUP_VERTICALS.every((v) => expandedIds[v.id]);

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedIds({});
    } else {
      const all: Record<string, boolean> = {};
      STARTUP_VERTICALS.forEach((v) => {
        all[v.id] = true;
      });
      setExpandedIds(all);
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar: Compact Helper */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#78716c] font-medium">
          Showing 8 Thematic Focus Verticals
        </span>
        <button
          onClick={toggleAll}
          type="button"
          className="text-xs font-semibold text-[#e87042] hover:text-[#c25022] hover:underline cursor-pointer"
        >
          {isAllExpanded ? "Collapse All Cards" : "Expand All Cards"}
        </button>
      </div>

      {/* Grid: 4 Columns with Clean Compact Default Heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {STARTUP_VERTICALS.map((vertical) => {
          const IconComponent = iconMap[vertical.iconName] || Sparkles;
          const isExpanded = !!expandedIds[vertical.id];

          return (
            <div
              key={vertical.id}
              className={cn(
                "bg-white rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between shadow-xs",
                isExpanded
                  ? "border-[#e87042]/60 shadow-md ring-1 ring-[#e87042]/20"
                  : "border-[#e6dfd1] hover:border-[#e87042]/40 hover:shadow-sm"
              )}
            >
              <div>
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-2xl bg-[#faf8f5] border border-[#ede7db] flex items-center justify-center text-[#c25022] mb-3.5 shrink-0">
                  <IconComponent className="w-5 h-5 text-[#e87042]" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif font-bold text-lg text-[#1c1917] leading-snug break-words [overflow-wrap:anywhere]">
                  {vertical.title.includes("/") ? (
                    vertical.title.split("/").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-[#a8a29e] font-normal mx-0.5">/</span>}
                        {i < arr.length - 1 && <wbr />}
                      </React.Fragment>
                    ))
                  ) : (
                    vertical.title
                  )}
                </h3>

                <p className="text-[10px] sm:text-[11px] font-semibold text-[#8c671b] uppercase tracking-wider mt-1 leading-tight break-words">
                  {vertical.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#57534e] mt-2.5 leading-relaxed">
                  {vertical.description}
                </p>

                {/* Dropdown Toggle Button */}
                <div className="mt-4 pt-3 border-t border-[#f0ede6]">
                  <button
                    type="button"
                    onClick={() => toggleExpand(vertical.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#faf8f5] hover:bg-[#f3eee7] text-xs font-semibold text-[#1c1917] border border-[#e8dfd3]/80 transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Focus Areas" : "View Focus Areas"}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-[#78716c] transition-transform duration-200",
                        isExpanded && "rotate-180 text-[#e87042]"
                      )}
                    />
                  </button>
                </div>

                {/* Expandable Dropdown Content */}
                {isExpanded && (
                  <div className="mt-3.5 space-y-2 pt-3 border-t border-[#ede7db] text-xs animate-in fade-in-50 duration-200">
                    <span className="font-bold text-[#1c1917] uppercase tracking-wider block text-[11px]">
                      Sub-domain Focus:
                    </span>
                    <ul className="space-y-1 text-[#44403c]">
                      {vertical.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e87042] mt-1.5 shrink-0" />
                          <span className="leading-snug">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: External Portal Registration CTA */}
              <div className="mt-5 pt-3.5 border-t border-[#f0ede6]">
                <a
                  href="https://isf-test.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c25022] hover:text-[#a64019] transition-colors"
                >
                  <span>Express Founder Interest</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
