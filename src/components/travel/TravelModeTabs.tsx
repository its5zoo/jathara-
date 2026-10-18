"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Car, Check, MapPin, Navigation, Plane, Train } from "lucide-react";
import { Container } from "../common/Container";

type TravelMode = "road" | "rail" | "air";

type ArrivalOption = {
  id: string;
  name: string;
  code?: string;
  distance: string;
  mapOrigin: string;
  onward: string;
};

type ModeGuide = {
  modeLabel: string;
  instruction: string;
  finalStep: string;
  note: string;
  options: ArrivalOption[];
};

const tabs = [
  { id: "road" as const, label: "By Road", icon: Car },
  { id: "rail" as const, label: "By Rail", icon: Train },
  { id: "air" as const, label: "By Air", icon: Plane },
];

const guides: Record<TravelMode, ModeGuide> = {
  road: {
    modeLabel: "Selected road origin",
    instruction: "Begin from the selected city and follow the confirmed regional approach toward Gunupur.",
    finalStep: "Continue to GIET University, Gobriguda, Po-Kharling for the final approach.",
    note: "Live directions calculate the current route. Check road conditions before departure.",
    options: [
      { id: "road-rayagada", name: "Rayagada", distance: "Regional approach to Gunupur", mapOrigin: "Rayagada Odisha", onward: "Continue toward Gunupur through the regional road corridor." },
      { id: "road-paralakhemundi", name: "Paralakhemundi", distance: "NH-326 approach", mapOrigin: "Paralakhemundi Odisha", onward: "Follow NH-326 toward Gunupur, then continue to the campus." },
      { id: "road-berhampur", name: "Berhampur", distance: "Via Paralakhemundi and NH-326", mapOrigin: "Berhampur Odisha", onward: "Use the live road route toward Gunupur through the NH-326 corridor." },
    ],
  },
  rail: {
    modeLabel: "Selected rail arrival",
    instruction: "Arrive at the selected station and confirm your onward road transport before travel.",
    finalStep: "Ask for GIET University at Gobriguda, Po-Kharling; confirm transport for late arrivals.",
    note: "Train schedules change. Check the operating day and arrival time with Indian Railways.",
    options: [
      { id: "rail-gnpr", name: "Gunupur Railway Station", code: "GNPR", distance: "~5 km to campus", mapOrigin: "Gunupur Railway Station Odisha", onward: "Arrange a local auto-rickshaw or cab after leaving the station." },
      { id: "rail-rgda", name: "Rayagada Railway Station", code: "RGDA", distance: "~75 km to campus", mapOrigin: "Rayagada Railway Station Odisha", onward: "Pre-arrange a road transfer from Rayagada to Gunupur." },
      { id: "rail-che", name: "Srikakulam Road Station", code: "CHE", distance: "~90 km to campus", mapOrigin: "Srikakulam Road Railway Station Amadalavalasa", onward: "Continue by a confirmed regional road transfer to Gunupur." },
      { id: "rail-psa", name: "Palasa Railway Station", code: "PSA", distance: "~90 km to campus", mapOrigin: "Palasa Railway Station Andhra Pradesh", onward: "Arrange the onward connection to Gunupur before arrival." },
    ],
  },
  air: {
    modeLabel: "Selected airport",
    instruction: "Arrive at the selected airport, then complete the journey to Gunupur by confirmed onward transport.",
    finalStep: "Continue to GIET University, Gobriguda; no general event airport shuttle is confirmed.",
    note: "Flight availability can change. Confirm the service and terminal before booking the road transfer.",
    options: [
      { id: "air-vtz", name: "Visakhapatnam Airport", code: "VTZ", distance: "~210 km to campus", mapOrigin: "Visakhapatnam Airport Andhra Pradesh", onward: "Pre-book a road transfer to Gunupur and confirm the terminal pickup point." },
      { id: "air-pyb", name: "Jeypore Airport", code: "PYB", distance: "~195–205 km to the Gunupur area", mapOrigin: "Jeypore Airport Odisha", onward: "Confirm the limited regional flight first, then pre-arrange the road transfer to Gunupur." },
      { id: "air-bbi", name: "Biju Patnaik International Airport", code: "BBI", distance: "~340 km to campus", mapOrigin: "Biju Patnaik International Airport Bhubaneswar", onward: "Compare a confirmed road transfer with current rail options toward Gunupur." },
    ],
  },
};

const defaultSelections: Record<TravelMode, string> = {
  road: "road-rayagada",
  rail: "rail-gnpr",
  air: "air-vtz",
};

export function TravelModeTabs() {
  const [activeMode, setActiveMode] = useState<TravelMode>("rail");
  const [selections, setSelections] = useState(defaultSelections);
  const guide = guides[activeMode];
  const selected = guide.options.find((option) => option.id === selections[activeMode]) ?? guide.options[0];

  const directionsUrl = useMemo(
    () => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selected.mapOrigin)}&destination=${encodeURIComponent("GIET University, Gobriguda, Po-Kharling, Gunupur, Odisha 765022")}`,
    [selected.mapOrigin]
  );

  return (
    <section className="border-b border-[#e6dfd1] bg-white py-12 sm:py-16">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a74e2d]">Travel guidance</p>
          <h2 className="mt-2 font-serif text-3xl font-black tracking-tight text-[#1c1917] sm:text-4xl">How to Reach Us</h2>
          <p className="mt-3 text-sm leading-6 text-[#57534e] sm:text-base">Choose your travel mode, select an arrival point, and follow the route to campus.</p>
        </div>

        <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 rounded-xl border border-[#ded5c7] bg-[#f7f4ec] p-1" role="tablist" aria-label="Choose travel mode">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = tab.id === activeMode;
            return (
              <button key={tab.id} type="button" role="tab" aria-selected={active} aria-controls="travel-mode-panel" onClick={() => setActiveMode(tab.id)} className={`flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-2 text-xs font-bold transition sm:gap-2 sm:text-sm ${active ? "bg-[#173d31] text-white shadow-sm" : "text-[#57534e] hover:bg-white hover:text-[#173d31]"}`}>
                <Icon className="h-4 w-4" aria-hidden="true" /> {tab.label}
              </button>
            );
          })}
        </div>

        <div id="travel-mode-panel" role="tabpanel" className="mx-auto mt-5 max-w-6xl overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#fcfbf8]">
          <div className="flex flex-col gap-3 border-b border-[#e6dfd1] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7efe9] text-[#173d31]"><MapPin className="h-4 w-4" aria-hidden="true" /></span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a74e2d]">{guide.modeLabel}</p>
                <h3 className="font-serif text-lg font-black leading-tight text-[#1c1917] sm:text-xl">{selected.name}</h3>
              </div>
            </div>
            <p className="text-xs font-semibold text-[#57534e] sm:text-right">{selected.code ? `${selected.code} · ` : ""}{selected.distance}</p>
          </div>

          <div className="grid md:grid-cols-3">
            {[
              { title: "Where to arrive", text: guide.instruction },
              { title: "How to continue", text: selected.onward },
              { title: "Reach the venue", text: guide.finalStep },
            ].map((step, index) => (
              <div key={step.title} className="relative px-5 py-4 md:border-r md:border-[#e6dfd1] md:px-6 md:last:border-r-0">
                <div className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0e2d5] text-[11px] font-black text-[#a74e2d]">{index + 1}</span>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-[#315d4e]">{step.title}</p><p className="mt-1.5 text-sm leading-6 text-[#4a5752]">{step.text}</p></div>
                </div>
                {index < 2 && <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-[#fcfbf8] text-[#b7aa99] md:block" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="border-t border-[#e6dfd1] bg-white px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#78716c]">Select your {activeMode === "air" ? "airport" : activeMode === "rail" ? "station" : "starting point"}</p><p className="mt-1 text-xs text-[#6b625b]">{guide.note}</p></div>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#a74e2d] px-4 text-xs font-bold text-white transition hover:bg-[#8f4025]">
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Directions from {selected.code ?? selected.name}
              </a>
            </div>

            <div className={`mt-3 grid gap-2 ${guide.options.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`} role="radiogroup" aria-label={`Select ${activeMode} arrival point`}>
              {guide.options.map((option) => {
                const active = option.id === selected.id;
                return (
                  <button key={option.id} type="button" role="radio" aria-checked={active} onClick={() => setSelections((current) => ({ ...current, [activeMode]: option.id }))} className={`relative min-h-[76px] rounded-xl border p-3 text-left transition ${active ? "border-[#a74e2d] bg-[#fff8f2] ring-1 ring-[#a74e2d]/15" : "border-[#e1d9ce] bg-white hover:border-[#a74e2d]/45"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div><p className="text-sm font-bold leading-5 text-[#1c1917]">{option.name}</p><p className="mt-1 text-xs font-semibold text-[#a74e2d]">{option.code ? `${option.code} · ` : ""}{option.distance}</p></div>
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${active ? "border-[#a74e2d] bg-[#a74e2d] text-white" : "border-[#cfc4b6] text-transparent"}`}><Check className="h-3 w-3" aria-hidden="true" /></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
