"use client";

import React from "react";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles
} from "lucide-react";
import { EVENT_METADATA } from "@/data/eventData";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { InstitutionalLogos } from "../common/InstitutionalLogos";

export function HeroSection() {
  return (
    <section 
      aria-label="Summit Introduction and Official Identity"
      className="relative text-[#fcfbf8] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 overflow-hidden border-b border-[#1b5341]/60 bg-[#061811]"
    >
      {/* Background Image: GIET University Campus Aerial View with Serene Botanical Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/gietu-campus-aerial.jpg"
          alt="GIET University Campus Aerial View, Gunupur, Odisha"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_42%] brightness-95 scale-102"
        />
        {/* Balanced translucent overlay: clear aerial campus with sharp text legibility */}
        <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061811] via-[#061811]/60 to-[#061811]/70" />
        
        {/* Soft atmospheric peach-gold lighting accents */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#d6b25e]/15 rounded-full blur-[130px] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#c25e38]/10 rounded-full blur-[100px] pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* Delicate Topographic Contour Vector Graphic */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] z-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100,200 Q200,100 600,220 T1500,150 M-100,350 Q300,250 800,380 T1500,300 M-100,500 Q400,420 900,520 T1500,480"
          fill="none"
          stroke="#d6b25e"
          strokeWidth="1.2"
        />
        <path
          d="M-50,280 Q250,180 700,300 T1550,230 M-50,430 Q350,330 850,450 T1550,400"
          fill="none"
          stroke="#256f57"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Foreground Content */}
      <Container size="default" className="relative z-10 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Eyebrow Badge: Organizer & Academic Host */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#be9740]/20 border border-[#be9740]/40 text-[#f7e3af] text-xs sm:text-[13px] font-semibold backdrop-blur-md mb-4 sm:mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d6b25e] animate-pulse" aria-hidden="true" />
            <span>ISF × GIET University</span>
            <span className="text-[#be9740]/80">·</span>
            <span className="text-white/90 font-medium">Dandakaranya 2026</span>
          </div>

          {/* Signature Event Title */}
          <h1 className="font-serif font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] max-w-4xl mx-auto">
            ISF STARTUP JATHARA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6b25e] via-[#f7e3af] to-[#c2983d]">
              2026
            </span>
          </h1>

          {/* Location & Cultural Identity Subtitle */}
          <p className="mt-2.5 sm:mt-3 text-base xs:text-lg sm:text-xl md:text-2xl font-serif text-[#ede7db] italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Dandakaranya Valley Innovation Summit
          </p>

          {/* Concise Strategic Mission (Under 20 words — Instant Cognition) */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Catalyzing grassroots innovators and tribal youth founders from India&apos;s heartlands, connecting them directly with global venture capital and mentors.
          </p>

          {/* Essential Event Metadata Strip (Date + Campus) */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#081a14]/85 border border-white/20 backdrop-blur-md shadow-xs">
              <Calendar className="w-4 h-4 text-[#d6b25e] shrink-0" />
              <strong className="text-[#fcfbf8]">{EVENT_METADATA.dates}</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#081a14]/85 border border-white/20 backdrop-blur-md shadow-xs">
              <MapPin className="w-4 h-4 text-[#c25e38] shrink-0" />
              <span className="text-[#dfd6c4]">GIET University Campus, Gunupur, Odisha</span>
            </span>
          </div>

          {/* Primary Action Buttons (2 High-Converting CTAs) */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              href="/register"
              variant="terracotta"
              size="lg"
              className="font-bold shadow-xl text-sm sm:text-base transition-transform active:scale-95 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5"
            >
              <span>Register for Summit</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href="/programme"
              variant="gold"
              size="lg"
              className="font-bold shadow-xl text-sm sm:text-base transition-transform active:scale-95 w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Explore 3-Day Programme</span>
            </Button>
          </div>

          {/* 4-Pillar Serene Telemetry Strip (Single Row, Glassmorphism, 0 Vertical Bloat) */}
          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto rounded-2xl bg-[#081a14]/75 border border-[#256f57]/50 backdrop-blur-md p-3 sm:p-5 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-3 md:gap-0 text-center">
              <div className="px-3 py-1">
                <span className="block font-serif font-black text-xl sm:text-2xl text-[#d6b25e]">2,000+</span>
                <span className="block text-[11px] sm:text-xs text-[#c8d1cd] font-medium mt-0.5">Summit Delegates</span>
              </div>
              <div className="px-3 py-1">
                <span className="block font-serif font-black text-xl sm:text-2xl text-[#d6b25e]">100+</span>
                <span className="block text-[11px] sm:text-xs text-[#c8d1cd] font-medium mt-0.5">Grassroots Startups</span>
              </div>
              <div className="px-3 py-1">
                <span className="block font-serif font-black text-xl sm:text-2xl text-[#d6b25e]">50+</span>
                <span className="block text-[11px] sm:text-xs text-[#c8d1cd] font-medium mt-0.5">VCs &amp; Mentors</span>
              </div>
              <div className="px-3 py-1">
                <span className="block font-serif font-black text-xl sm:text-2xl text-[#d6b25e]">8</span>
                <span className="block text-[11px] sm:text-xs text-[#c8d1cd] font-medium mt-0.5">Focus Sectors</span>
              </div>
            </div>
          </div>

          {/* Institutional Trust Strip */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-white/15">
            <InstitutionalLogos variant="hero-strip" />
          </div>

        </div>
      </Container>
    </section>
  );
}
