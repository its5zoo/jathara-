import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users, Layers } from "lucide-react";
import { Container } from "../common/Container";

const STATS = [
  {
    value: "3",
    label: "Immersive Days",
    sub: "18–20 Dec 2026",
    icon: CalendarDays,
    accent: "#c25e38",
    bg: "#fff5f0",
  },
  {
    value: "8",
    label: "Sector Tracks",
    sub: "AgriTech · HealthTech · more",
    icon: Layers,
    accent: "#1c6651",
    bg: "#f0f7f4",
  },
  {
    value: "300+",
    label: "Founders & Pitches",
    sub: "Rural · Tribal · Student",
    icon: Users,
    accent: "#8c671b",
    bg: "#fdf8ed",
  },
  {
    value: "1",
    label: "Landmark Venue",
    sub: "GIET University, Gunupur",
    icon: MapPin,
    accent: "#4a5752",
    bg: "#f4f6f5",
  },
];

export function AboutJatharaSection() {
  return (
    <section
      aria-label="About ISF Startup Jathara"
      className="section-reveal py-20 sm:py-28 bg-[#fcfbf8] border-b border-[#e6dfd1]"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.92fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: Editorial text column ─────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow + heading */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-[#c25e38]" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
                  About the Jathara
                </p>
              </div>

              <h2 className="font-serif font-black text-[2.1rem] sm:text-[2.6rem] lg:text-[2.9rem] text-[#1c1917] tracking-tight leading-[1.07]">
                A Gathering{" "}
                <span className="relative inline-block">
                  Unlike Any Other
                  {/* Hand-drawn underline accent */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 220 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5 C40 2, 90 7, 140 4 S200 2, 218 5"
                      stroke="#e87042"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Body copy */}
            <p className="text-base sm:text-[17px] text-[#44403c] leading-[1.75] max-w-lg font-normal">
              ISF Startup Jathara is a national platform that brings grassroots
              founders, Junicorns, investors, and mentors together in Odisha&apos;s
              Dandakaranya region — celebrating indigenous enterprise, accelerating
              rural innovation, and building lasting bonds between Bharat&apos;s
              entrepreneurial heartland and global capital.
            </p>

            {/* Stat tiles — 2×2 grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group relative rounded-2xl border border-[#e6dfd1] bg-white p-4 sm:p-5 hover:shadow-[0_4px_20px_rgba(28,25,23,0.08)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* Coloured left bar */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                      style={{ backgroundColor: stat.accent }}
                      aria-hidden="true"
                    />
                    <div className="pl-1">
                      <div
                        className="inline-flex items-center justify-center w-7 h-7 rounded-lg mb-2.5"
                        style={{ backgroundColor: stat.bg, color: stat.accent }}
                      >
                        <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                      </div>
                      <div
                        className="font-serif font-black text-2xl sm:text-3xl leading-none"
                        style={{ color: stat.accent }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#1c1917]">
                        {stat.label}
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#a8a29e] leading-snug">
                        {stat.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA link */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#103327] hover:text-[#c25e38] transition-colors duration-200 group w-fit border-b border-[#103327]/20 hover:border-[#c25e38]/30 pb-0.5"
            >
              <span>Learn more about the summit</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Right: Photo + overlay card ─────────────────────────── */}
          <div className="relative md:pt-4">
            {/* Decorative offset shadow block */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl bg-[#e87042]/10 border border-[#e87042]/15"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_-10px_rgba(28,25,23,0.22)] aspect-[5/4]">
              <Image
                src="/images/junicorn-innovators.jpg"
                alt="Young innovators and startup founders at ISF Jathara, celebrating Bharat's entrepreneurial spirit"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center hover:scale-[1.025] transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f18]/70 via-transparent to-transparent" />

              {/* Bottom overlay bar */}
              <div className="absolute bottom-0 inset-x-0 px-5 py-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f2c8a8] mb-0.5">
                    Junicorn Innovators
                  </p>
                  <p className="font-serif text-base font-bold text-white leading-snug max-w-[200px]">
                    India&apos;s next-generation problem solvers
                  </p>
                </div>
                {/* Year badge */}
                <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-[#e87042] text-white shadow-lg">
                  <span className="font-serif font-black text-lg leading-none">2026</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider mt-0.5 opacity-85">Edition</span>
                </div>
              </div>
            </div>

            {/* Floating top-right quote card */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white rounded-2xl border border-[#e6dfd1] shadow-[0_8px_28px_rgba(28,25,23,0.12)] px-4 py-3 max-w-[170px] z-10">
              <p className="font-serif text-xs font-bold text-[#1c1917] leading-snug">
                &ldquo;Where Grassroots Bharat Meets Global Capital&rdquo;
              </p>
              <p className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-[#c25e38]">
                ISF Network
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
