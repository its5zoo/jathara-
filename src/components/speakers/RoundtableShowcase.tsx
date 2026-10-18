"use client";

import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import {
  OFFICIAL_PANELISTS,
  OFFICIAL_ROUNDTABLES,
  type OfficialRoundtable,
} from "@/data/officialSpeakers";

interface RoundtableShowcaseProps {
  className?: string;
}

const roundtableStyles: Record<
  OfficialRoundtable["badgeColor"],
  { number: string; badge: string; line: string; monogram: string }
> = {
  emerald: {
    number: "text-[#18745b]",
    badge: "border-[#bcded3] bg-[#edf8f4] text-[#155d4b]",
    line: "bg-[#18745b]",
    monogram: "from-[#154e3f] to-[#26775f]",
  },
  amber: {
    number: "text-[#a56218]",
    badge: "border-[#ead5ad] bg-[#fff8e9] text-[#8b5717]",
    line: "bg-[#b77724]",
    monogram: "from-[#8d581b] to-[#c28a3b]",
  },
  blue: {
    number: "text-[#286385]",
    badge: "border-[#bfd8e6] bg-[#eef7fb] text-[#285d7b]",
    line: "bg-[#347497]",
    monogram: "from-[#285c79] to-[#4b86a5]",
  },
  purple: {
    number: "text-[#765383]",
    badge: "border-[#d9c9dd] bg-[#faf3fb] text-[#6d4b78]",
    line: "bg-[#765383]",
    monogram: "from-[#654670] to-[#8c6996]",
  },
};

export function RoundtableShowcase({ className = "" }: RoundtableShowcaseProps) {
  return (
    <div className={`w-full space-y-20 sm:space-y-24 ${className}`}>
      {OFFICIAL_ROUNDTABLES.map((roundtable) => {
        const panelists = roundtable.panelistIds
          .map((id) => OFFICIAL_PANELISTS[id])
          .filter(Boolean);
        const styles = roundtableStyles[roundtable.badgeColor];

        return (
          <article key={roundtable.id} id={roundtable.id} className="scroll-mt-32">
            <header className="relative border-b border-[#dcd6ca] pb-7 sm:pb-8">
              <div className={`absolute bottom-[-1px] left-0 h-[2px] w-16 ${styles.line}`} />

              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className={`font-serif text-sm font-bold ${styles.number}`}>
                      0{roundtable.number}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${styles.badge}`}
                    >
                      {roundtable.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.75rem] font-black leading-[1.1] tracking-[-0.025em] text-[#1b1b18] sm:text-4xl">
                    {roundtable.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#656159] sm:text-[15px]">
                    {roundtable.description}
                  </p>
                </div>

                <div className="grid shrink-0 gap-x-6 gap-y-2 text-xs font-semibold text-[#4e4a43] sm:grid-cols-2 lg:max-w-[26rem]">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#166534]" aria-hidden="true" />
                    {roundtable.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#166534]" aria-hidden="true" />
                    {roundtable.time}
                  </span>
                  <span className="flex items-start gap-2 sm:col-span-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#166534]" aria-hidden="true" />
                    {roundtable.location}
                  </span>
                </div>
              </div>
            </header>

            <div className="mt-8 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {panelists.map((panelist, index) => (
                <article
                  key={panelist.id}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#ded8cd] bg-white shadow-[0_10px_30px_rgba(40,35,27,0.055)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#bdb4a6] hover:shadow-[0_20px_46px_rgba(40,35,27,0.12)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="relative aspect-[4/4.35] overflow-hidden bg-[#ece8df]">
                    {panelist.photoUrl ? (
                      <Image
                        src={panelist.photoUrl}
                        alt={panelist.name}
                        fill
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                        className="object-cover object-top grayscale-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                      />
                    ) : (
                      <div
                        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${styles.monogram}`}
                        role="img"
                        aria-label={`${panelist.name} monogram`}
                      >
                        <span className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />
                        <span className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full border border-white/10" />
                        <span className="absolute inset-x-7 bottom-7 top-7 rounded-full border border-white/[0.08]" />
                        <span className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white/95 sm:text-6xl">
                          {panelist.initials}
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
                      Panelist {String(index + 1).padStart(2, "0")}
                    </span>

                    {panelist.linkedinUrl && (
                      <a
                        href={panelist.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${panelist.name} on LinkedIn`}
                        title={`${panelist.name} on LinkedIn`}
                        className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#185f8c] shadow-sm backdrop-blur-sm transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#185f8c] motion-reduce:transition-none"
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                    <h4 className="font-serif text-[1.35rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#201f1b] transition-colors duration-200 group-hover:text-[#9e4528]">
                      {panelist.name}
                    </h4>
                    {panelist.designation && (
                      <p className="mt-3 text-[13px] font-semibold leading-[1.45] text-[#4d4b45]">
                        {panelist.designation}
                      </p>
                    )}
                    {panelist.organization && (
                      <p className="mt-1 text-xs leading-[1.5] text-[#817b71]">
                        {panelist.organization}
                      </p>
                    )}
                    <div className="mt-auto pt-5">
                      <div className={`h-[2px] w-8 rounded-full ${styles.line} opacity-75 transition-[width] duration-300 group-hover:w-12 motion-reduce:transition-none`} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
