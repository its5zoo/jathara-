// Gunupur Verified Partner Hotels & Stays - Warm Orange Brand Theme (Zero green)
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Car,
  ShieldCheck,
} from "lucide-react";
import { GUNUPUR_HOTELS } from "@/data/hotelsData";

export function GunupurHotelsSection() {
  const [selectedHotelId, setSelectedHotelId] = useState<string>("jagannath-palace");
  const [photoIndices, setPhotoIndices] = useState<Record<string, number>>({
    "jagannath-palace": 0,
    "sai-surya": 0,
    "sree-satya": 0,
    "vijay-in": 0,
  });
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hasManuallySelected, setHasManuallySelected] = useState<boolean>(false);

  // 3-second auto cycle timer - permanently stops if user manually clicks any hotel or gallery item
  useEffect(() => {
    if (isPaused || hasManuallySelected) return;

    const timer = setInterval(() => {
      setSelectedHotelId((currentId) => {
        const currentIndex = GUNUPUR_HOTELS.findIndex((h) => h.id === currentId);
        const nextIndex = (currentIndex + 1) % GUNUPUR_HOTELS.length;
        const nextHotel = GUNUPUR_HOTELS[nextIndex];
        return nextHotel.id;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, hasManuallySelected]);

  const handleHotelSelect = (hotelId: string) => {
    setHasManuallySelected(true);
    setSelectedHotelId(hotelId);
  };

  const prevPhoto = (hotelId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHasManuallySelected(true);
    setPhotoIndices((p) => ({
      ...p,
      [hotelId]: ((p[hotelId] || 0) - 1 + total) % total,
    }));
  };

  const nextPhoto = (hotelId: string, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setHasManuallySelected(true);
    setPhotoIndices((p) => ({
      ...p,
      [hotelId]: ((p[hotelId] || 0) + 1) % total,
    }));
  };

  return (
    <div className="mt-14 pt-12 border-t border-[#dfd6c4]/70">

      {/* ── SECTION HEADER (CENTERED) ── */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight leading-tight">
          Verified Partner Hotels &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Stays</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#57534e] leading-relaxed">
          Curated, verified accommodations within 7–9 minutes of the GIET University summit arena.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
          <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
          <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
          <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
        </div>
      </div>

      {/* ── 2-ROW INTERACTIVE MASTER CONTAINER (PAUSES ON HOVER) ── */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="space-y-3 relative"
      >
        {/* ════════════════════════════════════════════════════════════════
            ROW 1: 4 HOTEL SELECTOR TABS (ACROSS THE TOP)
            Fully responsive: 1-col on small phones, 2-col on tablets/larger phones, 4-col on laptops & desktops
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-3.5 relative z-20">
          {GUNUPUR_HOTELS.map((h) => {
            const active = h.id === selectedHotelId;

            return (
              <button
                key={h.id}
                type="button"
                onClick={() => handleHotelSelect(h.id)}
                className={`relative text-left p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ease-out flex items-center gap-3 cursor-pointer group select-none ${
                  active
                    ? "bg-white border-[#e87042] ring-2 ring-[#e87042]/20 shadow-[0_8px_24px_-4px_rgba(232,112,66,0.18)] -translate-y-0.5"
                    : "bg-[#f8f5f0] hover:bg-white border-[#e6dfd1] hover:border-[#e87042]/40 hover:shadow-xs hover:-translate-y-0.5"
                }`}
              >
                {/* DOWNWARD ARROW INDICATOR (Only on desktop/laptop single row) */}
                {active && (
                  <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[9px] border-t-[#e87042] z-30 drop-shadow-xs" />
                )}

                {/* Circle photo */}
                <div
                  className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                    active
                      ? "border-[#e87042] ring-2 ring-[#e87042]/25 shadow-xs scale-105"
                      : "border-[#d8cebe] group-hover:border-[#e87042]/40 group-hover:scale-102"
                  }`}
                >
                  <Image
                    src={encodeURI(h.frontPhoto)}
                    alt={h.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                {/* Clean Professional Typography */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <p
                      className={`font-serif font-black text-xs sm:text-[13px] lg:text-[13.5px] tracking-tight truncate leading-tight transition-colors duration-200 ${
                        active ? "text-[#c25022]" : "text-[#1c1917] group-hover:text-[#c25022]"
                      }`}
                      title={h.name}
                    >
                      {h.name}
                    </p>
                    <div className="flex items-center gap-0.5 text-[#b48a30] font-bold text-[10.5px] sm:text-xs shrink-0 bg-[#fbf5e6] px-1.5 py-0.5 rounded border border-[#d6b25e]/30">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>{h.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px] text-[#6d7e77]">
                    <span className="truncate">{h.shortAddress}</span>
                    <span
                      className={`shrink-0 font-medium transition-colors duration-200 ${
                        active ? "text-[#c25022] font-bold" : "text-[#879790]"
                      }`}
                    >
                      {h.driveTime}
                    </span>
                  </div>
                </div>

                {/* Subtle Progress Bar for Active Hotel (only before manual interaction) */}
                {active && !isPaused && !hasManuallySelected && (
                  <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#e87042]/15 rounded-full overflow-hidden">
                    <div
                      key={selectedHotelId}
                      className="h-full bg-gradient-to-r from-[#c25022] to-[#e87042] rounded-full animate-hotel-progress"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: ACTIVE HOTEL SHOWCASE BOX (PHOTO LEFT + INFO RIGHT)
            Rendered in a stacked layout with pure GPU crossfade transitions:
            Zero lag, zero layout shift, zero white flicker!
        ════════════════════════════════════════════════════════════════ */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#e2dacf] shadow-[0_16px_50px_-12px_rgba(232,112,66,0.12),0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden ring-1 ring-black/5 relative z-10">
          <div className="grid grid-cols-1 grid-rows-1">
            {GUNUPUR_HOTELS.map((hotel) => {
              const isHotelActive = hotel.id === selectedHotelId;
              const photoIdx = photoIndices[hotel.id] || 0;
              const photo = hotel.photos[photoIdx] || hotel.photos[0];
              const total = hotel.photos.length;

              return (
                <div
                  key={hotel.id}
                  className={`col-start-1 row-start-1 w-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHotelActive
                      ? "opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto visible"
                      : "opacity-0 translate-y-1 scale-[0.99] z-0 pointer-events-none invisible"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-stretch">

                    {/* ──────────────────────────────────────────
                        LEFT: Photo Gallery (with arrows & strip)
                    ────────────────────────────────────────── */}
                    <div className="lg:w-[50%] shrink-0 flex flex-col bg-[#141210] border-b lg:border-b-0 lg:border-r border-[#2d251f]">
                      {/* Main photo stage - full explicit height on all devices */}
                      <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[480px] group overflow-hidden bg-[#0e0c0a]">
                        
                        {/* Ambient color-matched background on the sides (blur fill with crossfade) */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                          {hotel.photos.map((p, idx) => (
                            <div
                              key={`bg-${p.url}`}
                              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                                idx === photoIdx ? "opacity-45" : "opacity-0"
                              }`}
                            >
                              <Image
                                src={encodeURI(p.url)}
                                alt=""
                                fill
                                className="object-cover blur-2xl scale-125 brightness-75"
                              />
                            </div>
                          ))}
                          <div className="absolute inset-0 bg-[#0e0c0a]/55 backdrop-blur-xs" />
                        </div>

                        {/* Main Full-Size Photos - occupies 100% of stage */}
                        {hotel.photos.map((p, idx) => (
                          <div
                            key={p.url}
                            className={`absolute inset-0 p-2 sm:p-3.5 flex items-center justify-center transition-all duration-500 ease-out z-1 ${
                              idx === photoIdx
                                ? "opacity-100 scale-100 pointer-events-auto"
                                : "opacity-0 scale-[0.985] pointer-events-none"
                            }`}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={encodeURI(p.url)}
                                alt={`${hotel.name} – ${p.label}`}
                                fill
                                priority={isHotelActive && idx === 0}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                className="object-contain select-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                              />
                            </div>
                          </div>
                        ))}

                        {/* Top & bottom subtle vignette for controls & caption legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/90 via-transparent to-black/30 pointer-events-none z-2" />

                        {/* Arrow navigation - visible on mobile touch, hover on desktop */}
                        {total > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={(e) => prevPhoto(hotel.id, total, e)}
                              aria-label="Previous photo"
                              className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/25 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
                            >
                              <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => nextPhoto(hotel.id, total, e)}
                              aria-label="Next photo"
                              className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/25 text-white flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
                            >
                              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                            </button>
                          </>
                        )}

                        {/* Photo counter badge */}
                        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-10 pointer-events-none">
                          <span className="text-[10px] sm:text-[11px] font-mono text-white/95 bg-black/70 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 border border-white/20 shadow-sm">
                            {photoIdx + 1} / {total}
                          </span>
                        </div>
                      </div>

                      {/* Photo Filmstrip with Clear Lining & Lighting */}
                      <div className="flex items-center gap-2 sm:gap-2.5 px-3 py-2.5 sm:px-3.5 sm:py-3 bg-[#181512] border-t border-white/15 overflow-x-auto scrollbar-thin">
                        {hotel.photos.map((p, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => {
                              setHasManuallySelected(true);
                              setPhotoIndices((prev) => ({ ...prev, [hotel.id]: i }));
                            }}
                            aria-label={p.label}
                            className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer ${
                              i === photoIdx
                                ? "border-[#e87042] ring-2 ring-[#e87042]/60 brightness-100 scale-105 shadow-[0_0_12px_rgba(232,112,66,0.4)] z-10"
                                : "border-white/30 brightness-90 hover:brightness-100 hover:border-white/70 hover:scale-102"
                            }`}
                          >
                            <Image
                              src={encodeURI(p.url)}
                              alt={p.label}
                              fill
                              sizes="68px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ──────────────────────────────────────────
                        RIGHT: Hotel Details & Booking Specifications (Elevated Editorial Layout)
                    ────────────────────────────────────────── */}
                    <div className="flex-1 flex flex-col p-5 sm:p-7 lg:p-8 min-w-0 bg-white">
                      
                      {/* 1. TOP HEADER: Badges & Rating */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#e8dfd3]">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#fff7ed] text-[#c25022] border border-[#fed7aa]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            GIET Verified Partner
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fefce8] border border-[#fef08a] text-xs">
                          <Star className="w-3.5 h-3.5 text-[#d97706] fill-[#d97706]" />
                          <span className="font-bold text-[#1c1917]">{hotel.rating.toFixed(1)}</span>
                          <span className="text-[#854d0e] font-medium">({hotel.reviewsCount})</span>
                        </div>
                      </div>

                      {/* 2. TITLE & LOCATION */}
                      <div className="py-3.5 border-b border-[#e8dfd3]">
                        <h4 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight leading-snug">
                          {hotel.name}
                        </h4>
                        <p className="flex items-start gap-1.5 mt-1.5 text-xs sm:text-sm text-[#57534e]">
                          <MapPin className="w-4 h-4 text-[#c25022] shrink-0 mt-0.5" />
                          <span>{hotel.address}</span>
                        </p>
                      </div>

                      {/* 3. KEY METRICS STRIP (Horizontal Line-Divided Specs with Micro-Details) */}
                      <div className="grid grid-cols-3 divide-x divide-[#e8dfd3] py-3.5 border-b border-[#e8dfd3] bg-[#faf8f5]/60 -mx-5 sm:-mx-7 lg:-mx-8 px-5 sm:px-7 lg:px-8">
                        <div className="text-center pr-2">
                          <span className="block text-[10px] font-bold tracking-wider text-[#8c671b] uppercase">Transit Time</span>
                          <span className="block text-sm sm:text-base font-extrabold text-[#1c1917] mt-0.5">{hotel.driveTime}</span>
                          <span className="hidden sm:block text-[10.5px] text-[#78716c]">to summit arena</span>
                        </div>
                        <div className="text-center px-2">
                          <span className="block text-[10px] font-bold tracking-wider text-[#8c671b] uppercase">Room Types</span>
                          <span className="block text-sm sm:text-base font-extrabold text-[#1c1917] mt-0.5">{hotel.roomType || "AC & Non-AC"}</span>
                          <span className="hidden sm:block text-[10.5px] text-[#78716c]">single &amp; double</span>
                        </div>
                        <div className="text-center pl-2">
                          <span className="block text-[10px] font-bold tracking-wider text-[#8c671b] uppercase">Campus Distance</span>
                          <span className="block text-sm sm:text-base font-extrabold text-[#1c1917] mt-0.5">{hotel.distanceToCampus}</span>
                          <span className="hidden sm:block text-[10.5px] text-[#78716c]">from GIET gate</span>
                        </div>
                      </div>

                      {/* 4. LOWER SECTION: AMENITIES (LEFT) + SHUTTLE & RESERVATION (RIGHT) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e8dfd3] pt-4 gap-y-4 md:gap-y-0 flex-1">
                        
                        {/* Sub-Column 1 (Left): Stay Amenities & Priority Notice */}
                        <div className="space-y-3.5 md:pr-5">
                          <div>
                            <span className="block text-[10.5px] font-bold tracking-wider uppercase text-[#8c671b] mb-2.5">
                              Room Amenities &amp; Services
                            </span>
                            <div className="space-y-2 text-xs text-[#374151]">
                              {hotel.tags.map((tag, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                                  <span className="font-medium text-[#1c1917]">{tag}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#f0e9df] text-[11px] text-[#78716c]">
                            <p className="flex items-center gap-1.5 font-medium text-[#c25022]">
                              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                              <span>Priority Check-in for ISF Delegates</span>
                            </p>
                          </div>
                        </div>

                        {/* Sub-Column 2 (Right): Shuttle Connectivity & Booking Action */}
                        <div className="space-y-3.5 md:pl-5 pt-3 md:pt-0 flex flex-col justify-between">
                          
                          {/* Summit Shuttle Card */}
                          <div className="p-2.5 rounded-xl bg-[#fffaf5] border border-[#f5dfce] flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c25022] to-[#e87042] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Car className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-xs text-[#1c1917]">GIET Summit Shuttle</p>
                              <p className="text-[11px] text-[#78716c] mt-0.5">{hotel.driveTime} transfer · Direct campus loop</p>
                            </div>
                          </div>

                          {/* Direct Booking Desk CTA */}
                          <div className="space-y-2">
                            <div>
                              <span className="block font-bold text-[#8c671b] uppercase tracking-wider text-[10px]">Direct Booking Desk</span>
                            </div>

                            <a
                              href={`tel:${hotel.primaryPhone.replace(/[^0-9+]/g, "")}`}
                              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45] hover:from-[#d95d2c] hover:to-[#c25022] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(232,112,66,0.3)] hover:shadow-[0_6px_20px_rgba(232,112,66,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group/cta cursor-pointer text-center"
                            >
                              <Phone className="w-4 h-4 text-white transition-transform group-hover/cta:rotate-12 shrink-0" />
                              <span>Call to Book: {hotel.primaryPhone}</span>
                            </a>

                            <div className="flex items-center justify-between text-[11px] text-[#78716c] pt-1 border-t border-[#f0e9df]">
                              <span className="font-medium text-[#c25022] flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Delegate Tariff
                              </span>
                              {hotel.allPhones.length > 1 && (
                                <a
                                  href={`tel:${hotel.allPhones[1].replace(/[^0-9+]/g, "")}`}
                                  className="font-mono text-[11px] text-[#57534e] hover:text-[#c25022] hover:underline"
                                >
                                  Alt: {hotel.allPhones[1]}
                                </a>
                              )}
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
