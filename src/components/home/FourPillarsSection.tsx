import React from "react";
import { Container } from "../common/Container";
import { Rocket, Users2, MessageSquare, Compass } from "lucide-react";

// Official Four Pillars from ISF Startup Jathara
const FOUR_PILLARS = [
  {
    number: "01",
    title: "Junicorn Startup Showcase",
    description:
      "A dedicated stage for early-stage student and grassroots founders to pitch before investors, mentors, and industry leaders.",
    icon: Rocket,
    accent: "#c25e38",
  },
  {
    number: "02",
    title: "Investor & Mentor Connect",
    description:
      "Structured one-on-one meetings, panel discussions, and open mentoring sessions bridging capital with grassroots innovation.",
    icon: Users2,
    accent: "#b88728",
  },
  {
    number: "03",
    title: "Sectoral Roundtables",
    description:
      "Deep-dive roundtable dialogues across eight high-growth sectors, led by domain experts, investors, and ecosystem builders.",
    icon: MessageSquare,
    accent: "#2d6a4f",
  },
  {
    number: "04",
    title: "Dandakaranya Experience",
    description:
      "A signature immersive trekking experience through the ancient forests of Dandakaranya, where dialogue flows freely in nature.",
    icon: Compass,
    accent: "#3a6348",
  },
];

export function FourPillarsSection() {
  return (
    <section
      aria-label="Four Pillars of ISF Startup Jathara"
      className="section-reveal py-20 sm:py-28 bg-[#f7f4ec] border-b border-[#e6dfd1] relative overflow-hidden"
    >
      {/* Ambient warm glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#e87042]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#d6b25e]/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <Container size="wide" className="relative z-10">
        {/* Section heading */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#c25e38] mb-3">
            The Four Pillars
          </p>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.08]">
            Built on Four Foundations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#57534e] max-w-xl leading-relaxed font-normal">
            Every element of ISF Startup Jathara is designed with purpose — centered
            around four distinct pillars that make this gathering transformative.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={`group relative rounded-2xl bg-white border border-[#e8e2d5] hover:border-[#c25e38]/40 shadow-[0_2px_12px_rgba(28,25,23,0.04)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.10)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden card-enter card-enter-${idx + 1}`}
              >
                {/* Colored top bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="p-6 flex flex-col gap-4">
                  {/* Number */}
                  <span
                    className="font-serif font-black text-4xl tracking-tight leading-none opacity-10 select-none"
                    style={{ color: pillar.accent }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 -mt-2"
                    style={{
                      backgroundColor: `${pillar.accent}15`,
                      color: pillar.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-[17px] sm:text-lg text-[#1c1917] leading-snug group-hover:text-[#103327] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#57534e] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
