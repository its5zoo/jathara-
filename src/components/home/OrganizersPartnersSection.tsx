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
      className="section-reveal py-16 sm:py-20 bg-[#f7f5ee]"
    >
      <Container size="default">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#c25e38] mb-2">
            Convened Under the Aegis Of
          </p>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight">
            Organizers, Host &amp; Partners
          </h2>
        </div>

        {/* Logo strip with dividers */}
        <div className="flex flex-wrap items-stretch justify-center gap-0 divide-x divide-[#e0d9ce]">
          {ORGANIZERS.map((org, idx) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${org.fullName}, ${org.role}`}
              className={`flex flex-col items-center gap-4 group px-8 sm:px-12 py-6 hover:bg-[#f0ece4] transition-colors duration-200 ${idx === 0 ? "rounded-l-2xl" : ""} ${idx === ORGANIZERS.length - 1 ? "rounded-r-2xl" : ""}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-[#e6dfd1] group-hover:border-[#c25e38]/35 shadow-xs group-hover:shadow-sm flex items-center justify-center p-3 transition-all duration-200 group-hover:-translate-y-1">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c25e38] block">
                  {org.role}
                </span>
                <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#c25e38] transition-colors block mt-0.5">
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
