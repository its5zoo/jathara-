"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "../common/Container";

// Summit environment scenes
const HERO_BACKDROPS = [
  {
    src: "/images/startup-stage-backdrop.jpg",
    alt: "ISF Startup Jathara Grand Keynote Arena and Delegates",
    tag: "Keynote Arena",
  },
  {
    src: "/images/summit-pitch-stage.jpg",
    alt: "Live Founder Pitch Stage & Investor Jury",
    tag: "Startup Pitch Stage",
  },
  {
    src: "/images/giet-school-of-engineering.jpg",
    alt: "GIET University Engineering & Innovation Campus",
    tag: "GIET University Campus",
  },
  {
    src: "/images/dandakaranya-canopy.jpg",
    alt: "Dandakaranya Innovation Valley",
    tag: "Dandakaranya Valley",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate environment scenes every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BACKDROPS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      aria-label="Summit Introduction and Official Identity"
      className="relative text-[#fcfbf8] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 overflow-hidden border-b border-[#232733] bg-[#0c0d12]"
    >
      {/* Background Rotating Images (Smooth Crossfade Ken-Burns Effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_BACKDROPS.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                unoptimized
                sizes="100vw"
                className={`object-cover object-[center_38%] brightness-95 transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Balanced scrim & vignette so photos are clearly visible while text remains crisp */}
        <div className="absolute inset-0 z-20 bg-black/40 sm:bg-black/35" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
        
        {/* Ambient warm peach-cream lighting glow */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[350px] bg-[#f97316]/12 rounded-full blur-[140px] pointer-events-none z-20" 
          aria-hidden="true" 
        />


      </div>

      {/* Foreground Content */}
      <Container size="default" className="relative z-10 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          


          {/* Official Event Title (Authoritative & Sharp) */}
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            ISF STARTUP JATHARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffedd5] via-[#f7c89f] to-[#e87042]">2026</span>
          </h1>

          {/* The Hook: Why this summit matters */}
          <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl font-serif text-[#ffedd5] font-semibold tracking-normal max-w-2xl mx-auto">
            Where Grassroots Bharat Meets Venture Capital.
          </p>

          {/* Concise, Factual Value Proposition (Zero Fluff) */}
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] leading-relaxed max-w-2xl mx-auto font-normal">
            Eastern India’s flagship 3-day entrepreneurial summit bringing <strong className="text-white font-semibold">100+ vetted founders</strong>, <strong className="text-white font-semibold">50+ tier-1 VCs &amp; angels</strong>, and industry pioneers directly to GIET University, Odisha.
          </p>



          {/* Impact Stats Grid (Clean hairline layout, no box-in-a-box) */}
          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="p-2 text-center">
                <span className="block font-serif font-black text-2xl sm:text-3xl text-white">2,000+</span>
                <span className="block text-xs text-[#a8a29e] mt-0.5 font-medium">Delegates &amp; Attendees</span>
              </div>
              <div className="p-2 text-center">
                <span className="block font-serif font-black text-2xl sm:text-3xl text-[#f7c89f]">100+</span>
                <span className="block text-xs text-[#a8a29e] mt-0.5 font-medium">Startups Pitching</span>
              </div>
              <div className="p-2 text-center">
                <span className="block font-serif font-black text-2xl sm:text-3xl text-[#e87042]">50+</span>
                <span className="block text-xs text-[#a8a29e] mt-0.5 font-medium">VCs, Angels &amp; Mentors</span>
              </div>
              <div className="p-2 text-center">
                <span className="block font-serif font-black text-2xl sm:text-3xl text-[#e5c158]">8</span>
                <span className="block text-xs text-[#a8a29e] mt-0.5 font-medium">Focus Growth Sectors</span>
              </div>
            </div>
          </div>

          {/* Institutional Partners / Conveners Bar (Sleek, transparent, unclipped) */}
          <div className="mt-6 pt-5 border-t border-white/10 max-w-3xl mx-auto">
            <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#a8a29e] uppercase mb-3 text-center">
              Convened Under the Aegis Of
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
              
              {/* 1. ISF Network */}
              <a
                href="https://www.isfnetwork.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141620]/80 hover:bg-[#1a1d2b] border border-white/10 hover:border-[#e87042]/60 transition-all duration-200 group text-left"
                aria-label="International Startup Foundation (ISF) - Organizer"
              >
                <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/logos/isf-logo.webp"
                    alt="International Startup Foundation (ISF)"
                    width={36}
                    height={36}
                    className="max-h-8 max-w-8 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#e87042] uppercase tracking-wider block">
                    Organizer
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f7c89f] transition-colors block leading-tight">
                    ISF Network
                  </span>
                  <span className="text-[11px] text-[#94a3b8] block truncate mt-0.5">
                    International Startup Foundation
                  </span>
                </div>
              </a>

              {/* 2. GIET University */}
              <a
                href="https://www.giet.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141620]/80 hover:bg-[#1a1d2b] border border-white/10 hover:border-[#e87042]/60 transition-all duration-200 group text-left"
                aria-label="GIET University - Host Institution"
              >
                <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/logos/giet-logo.png"
                    alt="GIET University Gunupur"
                    width={36}
                    height={36}
                    className="max-h-8 max-w-8 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#e87042] uppercase tracking-wider block">
                    Host Institution
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f7c89f] transition-colors block leading-tight">
                    GIET University
                  </span>
                  <span className="text-[11px] text-[#94a3b8] block truncate mt-0.5">
                    Gunupur, Odisha
                  </span>
                </div>
              </a>

              {/* 3. IncubateX */}
              <a
                href="https://www.incubationx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#141620]/80 hover:bg-[#1a1d2b] border border-white/10 hover:border-[#e87042]/60 transition-all duration-200 group text-left"
                aria-label="IncubateX Innovation Foundation - Innovation Partner"
              >
                <div className="w-11 h-11 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/logos/incubatex-logo.png"
                    alt="IncubateX Innovation Foundation"
                    width={36}
                    height={36}
                    className="max-h-8 max-w-8 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#e87042] uppercase tracking-wider block">
                    Innovation Partner
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f7c89f] transition-colors block leading-tight">
                    IncubateX
                  </span>
                  <span className="text-[11px] text-[#94a3b8] block truncate mt-0.5">
                    Incubation Foundation
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
