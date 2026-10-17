import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  GraduationCap, 
  Utensils, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Quote
} from "lucide-react";
import { Container } from "../common/Container";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";

export function ChiefGuestSection() {
  return (
    <section 
      aria-label="Chief Guest of Honour Spotlight"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0c10] text-[#fcfbf8] border-b border-[#232733] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#c25022]/15 via-[#d97706]/10 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-gradient-to-tl from-[#143e30]/30 via-[#c25022]/10 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <Container size="default" className="relative z-10">
        {/* Section Header Tag */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#c25022]/20 via-[#d97706]/20 to-[#c25022]/20 border border-[#d97706]/40 text-[#fbd38d] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f6ad55]" />
            <span>Chief Guest of Honour • Plenary Inauguration</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#fcfbf8]">
            Welcoming Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbd38d] via-[#f6ad55] to-[#ed8936]">Chief Guest</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#a8a29e] max-w-2xl leading-relaxed">
            The steering committee of the International Startup Foundation and GIET University is deeply honored to announce the gracious presence of revered global humanitarian and spiritual visionary.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#141822] to-[#0d1017] border border-[#2d3748] p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d97706]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Dignitary Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#d97706]/40 shadow-2xl group">
                <Image
                  src="/images/sadguru-sri-madhusudan-sai.jpg"
                  alt="Sadguru Sri Madhusudan Sai - Chief Guest of Honour at ISF Startup Jathara 2026"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80" />

                {/* Floating Role Pill on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0d1017]/90 backdrop-blur-md border border-[#d97706]/30 text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#fbd38d] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f6ad55]" />
                    <span>Plenary Dignitary Keynote</span>
                  </div>
                  <div className="text-xs text-[#e2e8f0] font-medium mt-0.5">
                    18 December 2026 • Mega Audi &amp; Exhibition Arena
                  </div>
                </div>
              </div>

              {/* Ceremony Times Quick Row */}
              <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 min-[360px]:p-2.5 rounded-xl bg-[#1a202c]/60 border border-[#2d3748]">
                  <span className="block text-[10px] text-[#a0aec0] uppercase tracking-wider font-semibold">Exhibition Opener</span>
                  <span className="text-xs font-bold text-[#fbd38d]">09:00 AM • 18 Dec</span>
                </div>
                <div className="p-2 min-[360px]:p-2.5 rounded-xl bg-[#1a202c]/60 border border-[#2d3748]">
                  <span className="block text-[10px] text-[#a0aec0] uppercase tracking-wider font-semibold">Keynote Address</span>
                  <span className="text-xs font-bold text-[#fbd38d]">10:40 AM • Mega Audi</span>
                </div>
              </div>
            </div>

            {/* Right: Narrative, Pillars & Global Impact */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f6ad55] uppercase tracking-widest mb-1.5">
                  <span>Inaugural Guest of Honour</span>
                  <span>•</span>
                  <span>Spiritual Visionary</span>
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#ffffff] tracking-tight">
                  Sadguru Sri Madhusudan Sai
                </h3>

                <p className="text-sm sm:text-base font-medium text-[#fbd38d] mt-1.5">
                  Global Humanitarian, Spiritual Leader &amp; Founder, One World One Family Mission
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="relative p-4 sm:p-5 rounded-2xl bg-[#1a202c]/70 border-l-4 border-l-[#d97706] border-y border-r border-[#2d3748] text-xs sm:text-sm text-[#e2e8f0] italic leading-relaxed">
                <Quote className="w-5 h-5 text-[#f6ad55] mb-1.5 opacity-70" />
                &ldquo;Healthcare, education, and nutrition are fundamental human rights, not commercial privileges. When we serve selflessly without distinction of caste, creed, or nation, we realize the timeless ideal of Vasudhaiva Kutumbakam — The World is One Family.&rdquo;
              </div>

              {/* Narrative Bio */}
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                Revered internationally for transforming millions of lives, Sadguru Sri Madhusudan Sai leads historic global humanitarian missions based out of Sathya Sai Grama, Muddenahalli, Karnataka. A double gold medalist in Chemistry and Management from Sri Sathya Sai Institute of Higher Learning, he renounced corporate life to dedicate his existence entirely to selfless service. Under his stewardship, massive institutions provide world-class healthcare, values-based education, and daily nutrition — completely free of cost across more than 30 nations.
              </p>

              {/* 4 Pillars of Global Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#161b26] border border-[#2d3748] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#c25022]/20 text-[#f6ad55] shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#fcfbf8]">Free Child Heart Surgeries</h4>
                    <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-snug">
                      Sri Sathya Sai Sanjeevani Hospitals — one of the world&apos;s largest networks performing thousands of free pediatric cardiac surgeries globally.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#161b26] border border-[#2d3748] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#d97706]/20 text-[#fbd38d] shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#fcfbf8]">Free Medical College &amp; University</h4>
                    <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-snug">
                      Established SMSIMSR, rural India&apos;s first completely free medical college, and Sri Sathya Sai University for Human Excellence.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#161b26] border border-[#2d3748] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#143e30]/40 text-[#48bb78] shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#fcfbf8]">Morning Nutrition for Millions</h4>
                    <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-snug">
                      Sri Sathya Sai Annapoorna Trust feeds millions of school children daily across thousands of government schools to combat hidden hunger.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#161b26] border border-[#2d3748] flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#3182ce]/20 text-[#63b3ed] shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#fcfbf8]">Companion of the Order of Fiji</h4>
                    <p className="text-[11px] text-[#94a3b8] mt-0.5 leading-snug">
                      Conferred premier state honors for humanitarian work, healthcare diplomacy, and sustainable upliftment across the Pacific and global south.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button href="/programme" variant="primary" size="md" className="w-full sm:w-auto justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>View 18th Dec Plenary Agenda</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/speakers" variant="outline" size="md" className="w-full sm:w-auto justify-center border-[#4a5568] text-[#e2e8f0] hover:bg-[#1a202c]">
                  <span>Explore Speakers &amp; Dignitaries</span>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
