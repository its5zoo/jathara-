import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function ChiefGuestSection() {
  return (
    <section 
      aria-label="Chief Guest of Honour"
      className="py-12 sm:py-16 bg-[#faf8f4] border-b border-[#e6dfd1] relative overflow-hidden"
    >
      <Container size="default">
        {/* Clean, compact card on cream background */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e6dfd1] p-5 sm:p-7 md:p-8 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 md:gap-8">
          
          {/* Photo: Clean portrait without heavy boxes or dark borders */}
          <div className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-48 md:h-60 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-[#ede7db] bg-[#f7f4ec]">
            <Image
              src="/images/sadguru-sri-madhusudan-sai.jpg"
              alt="Sadguru Sri Madhusudan Sai - Chief Guest of Honour"
              fill
              sizes="(max-width: 640px) 144px, 192px"
              className="object-cover object-top"
            />
          </div>

          {/* Text Details beside Photo */}
          <div className="flex-1 min-w-0 space-y-3 text-left">
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2ea] border border-[#fcd5b5] text-[#c25022] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#e87042]" />
              <span>Chief Guest of Honour • Plenary Inauguration</span>
            </div>

            {/* Name */}
            <div>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight leading-snug">
                Sadguru Sri Madhusudan Sai
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#8c671b] mt-0.5 leading-tight">
                Global Humanitarian, Spiritual Leader &amp; Founder, Sri Madhusudan Sai Global Humanitarian Mission
              </p>
            </div>

            {/* Relevant concise context */}
            <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
              Revered globally for transforming millions of lives by providing completely free healthcare, values-based education, and morning nutrition across 30+ nations — including the Sri Sathya Sai Sanjeevani Hospitals (performing thousands of free pediatric cardiac surgeries) and the Annapoorna Morning Nutrition programme serving over 3 million children daily.
            </p>

            {/* Quick Timing & Venue */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#44403c] pt-1 border-t border-[#ede7db]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                <span><strong>Inauguration:</strong> Friday, 18 Dec 2026 (09:00 – 11:00 AM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                <span>Mega Auditorium, GIET University</span>
              </div>
            </div>

            {/* Direct action link */}
            <div className="pt-1">
              <Link
                href="/programme"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c25022] hover:text-[#e87042] transition-colors"
              >
                <span>View Inaugural Schedule &amp; Day 1 Timings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
