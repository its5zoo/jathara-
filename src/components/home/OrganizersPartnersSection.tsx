import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";

const ORGANIZERS = [
  {
    name: "ISF Network",
    fullName: "International Startup Foundation",
    role: "Organizer",
    logo: "/logos/isf-logo.webp",
    href: "https://www.isfnetwork.org",
  },
  {
    name: "GIET University",
    fullName: "Gunupur, Odisha",
    role: "Host Institution",
    logo: "/logos/giet-logo.png",
    href: "https://www.giet.edu",
  },
  {
    name: "IncubateX",
    fullName: "Incubation Foundation",
    role: "Innovation Partner",
    logo: "/logos/incubatex-logo.png",
    href: "https://www.incubationx.com",
  },
];

export function OrganizersPartnersSection() {
  return (
    <section
      aria-label="Organizers, Host & Partners"
      className="section-reveal py-14 sm:py-20 bg-[#fcfbf8] border-t border-[#e6dfd1]"
    >
      <Container size="default">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="w-4 h-px bg-[#15803d]" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#15803d]">
              Convened Under the Aegis Of
            </p>
            <span className="w-4 h-px bg-[#15803d]" aria-hidden="true" />
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight">
            Organizers, Host &amp; Partners
          </h2>
        </div>

        {/* Logo grid — wraps gracefully on mobile */}
        <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-[#e0d9ce]">
          {ORGANIZERS.map((org, idx) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${org.fullName}, ${org.role}`}
              className={`flex flex-col items-center gap-4 group px-8 sm:px-10 md:px-14 py-6 rounded-2xl sm:rounded-none hover:bg-[#f5f0e8] transition-colors duration-200 w-full max-w-[200px] sm:max-w-none sm:flex-1 ${idx === 0 ? "sm:rounded-l-2xl" : ""} ${idx === ORGANIZERS.length - 1 ? "sm:rounded-r-2xl" : ""}`}
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white border border-[#e6dfd1] group-hover:border-[#15803d]/30 shadow-sm group-hover:shadow-md flex items-center justify-center p-3 transition-all duration-200 group-hover:-translate-y-0.5">
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={56}
                  height={56}
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803d] block">
                  {org.role}
                </span>
                <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#15803d] transition-colors block mt-0.5">
                  {org.name}
                </span>
                <span className="text-[11px] text-[#78716c] block mt-0.5">
                  {org.fullName}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
