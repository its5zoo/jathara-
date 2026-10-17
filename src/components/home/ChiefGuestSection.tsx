import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, HeartHandshake, GraduationCap, Utensils } from "lucide-react";
import { Container } from "../common/Container";

export function ChiefGuestSection() {
  return (
    <section 
      aria-label="Chief Guest of Honour"
      className="py-14 sm:py-20 bg-[#faf8f4] border-b border-[#e6dfd1] relative overflow-hidden"
    >
      <Container size="default">
        {/* Open, unboxed editorial layout without enclosing box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left: Dignitary Portrait - Prominent & Large */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[390px] lg:max-w-[430px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-[#1c1917]/10 group">
              <Image
                src="/images/sadguru-sri-madhusudan-sai.jpg"
                alt="Sadguru Sri Madhusudan Sai - Chief Guest of Honour at ISF Startup Jathara 2026"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 390px, 430px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>
          </div>

          {/* Right: Narrative & Verified Details (Proper typography & spacing) */}
          <div className="md:col-span-7 lg:col-span-7 space-y-4 text-left">
            
            {/* Header Eyebrow (Zero AI icons) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c25022]">
                Chief Guest of Honour
              </span>
              <span className="text-[#d6c7b2]">•</span>
              <span className="text-xs font-semibold text-[#8c671b] uppercase tracking-wider">
                Plenary Inauguration
              </span>
            </div>

            {/* Title & Organization */}
            <div className="space-y-1">
              <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-tight">
                Sadguru Sri Madhusudan Sai
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8c671b] leading-snug">
                Global Humanitarian, Spiritual Leader &amp; Founder, Sri Madhusudan Sai Global Humanitarian Mission
              </p>
            </div>

            {/* Detailed Humanitarian Context */}
            <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
              Revered internationally for spearheading transformative selfless service across 30+ nations based on the timeless philosophy of <em>Vasudhaiva Kutumbakam</em> (The World is One Family). Under his visionary guidance, massive humanitarian institutions deliver world-class healthcare, values-based higher education, and morning nutrition completely free of charge to millions of underserved families.
            </p>

            {/* 3 Core Humanitarian Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs">
                <HeartHandshake className="w-4 h-4 text-[#c25022] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-[#1c1917] font-bold">Free Pediatric Care</strong>
                  <span className="text-[11px] text-[#6b7280] leading-tight">Sri Sathya Sai Sanjeevani</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-[#8c671b] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-[#1c1917] font-bold">Free Education</strong>
                  <span className="text-[11px] text-[#6b7280] leading-tight">Human Excellence Univ</span>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs">
                <Utensils className="w-4 h-4 text-[#256f57] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-[#1c1917] font-bold">3M+ Daily Meals</strong>
                  <span className="text-[11px] text-[#6b7280] leading-tight">Annapoorna Nutrition</span>
                </div>
              </div>
            </div>

            {/* Verified Ceremony Timing & Venue */}
            <div className="pt-3 border-t border-[#e6dfd1] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#2b2521]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#e87042] shrink-0" />
                <span>
                  <strong>Inauguration Ceremony:</strong> Friday, 18 December 2026 (09:00 – 11:00 AM)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#e87042] shrink-0" />
                <span>Mega Auditorium, GIET University Campus, Gunupur</span>
              </div>
            </div>

            {/* Direct Link to Programme */}
            <div className="pt-1">
              <Link
                href="/programme"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#c25022] hover:text-[#e87042] transition-colors group"
              >
                <span>View Full Inauguration Ceremony Protocol</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
