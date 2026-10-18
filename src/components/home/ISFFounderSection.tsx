import Image from "next/image";
import { Building2, Cpu, ShieldCheck, Users } from "lucide-react";
import { Container } from "../common/Container";

const credentials = [
  {
    icon: Building2,
    label: "Founding Director",
    detail: "STPI — Built India's IT Corridor",
  },
  {
    icon: Cpu,
    label: "Co-Founder",
    detail: "PortalPlayer · Acquired by NVIDIA",
  },
  {
    icon: ShieldCheck,
    label: "IT Advisor",
    detail: "Special Chief Secretary, Govt. of AP",
  },
  {
    icon: Users,
    label: "Co-Founder",
    detail: "Hyderabad Angels Network",
  },
];

export function ISFFounderSection() {
  return (
    <section
      aria-label="ISF Founder"
      className="section-reveal bg-[#f7f4ec] py-16 sm:py-20 border-b border-[#e6dfd1]"
    >
      <Container size="default">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 items-center">

          {/* Photo */}
          <div className="relative mx-auto w-64 sm:w-72 lg:w-full max-w-[380px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(43,37,28,0.14)]">
              <Image
                src="/images/leadership/ja-chowdary.jpg"
                alt="J.A. Chowdary — Founder & Chairman, International Startup Foundation"
                fill
                sizes="(max-width: 1023px) 288px, 380px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d1a14]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#86efac]">
                  Founder & Chairman
                </span>
                <p className="mt-1 font-serif text-lg font-bold text-white leading-tight">
                  International Startup Foundation
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-4 h-px bg-[#15803d]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#15803d]">
                The Visionary Behind the Jathara
              </span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1c1917] tracking-tight leading-[1.1]">
              Shri J.A. Chowdary
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#7a5c28]">
              Founder & Chairman — International Startup Foundation (ISF)
            </p>

            <p className="mt-5 text-sm sm:text-[15px] leading-[1.8] text-[#4a4540] max-w-xl">
              A pioneer of India&apos;s technology revolution, J.A. Chowdary built the
              foundations of India&apos;s IT corridor as the Founding Director of STPI
              and co-architect of HITEC City. His co-founded startup PortalPlayer
              powered the first-generation iPod and was acquired by NVIDIA.
              He later served as Special Chief Secretary &amp; IT Advisor to the
              Government of Andhra Pradesh, shaping state-level startup policy.
              Today, through ISF, he is bridging venture capital with grassroots
              founders across Bharat.
            </p>

            {/* Credential row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((c) => {
                const IconComponent = c.icon;
                return (
                  <div
                    key={c.label + c.detail}
                    className="flex items-center gap-3.5 rounded-xl border border-[#e3d9cc] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(43,37,28,0.04)] hover:border-[#15803d]/35 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] border border-[#ecdccb] flex items-center justify-center shrink-0 text-[#15803d]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#15803d] block">
                        {c.label}
                      </span>
                      <span className="text-xs font-semibold text-[#2b251c] mt-0.5 block leading-snug">
                        {c.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-[#78716c] leading-relaxed">
              Honorary Doctorate, Chitkara University (2025) · HYSEA Lifetime Achievement Award (2020) · IIT Madras
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
