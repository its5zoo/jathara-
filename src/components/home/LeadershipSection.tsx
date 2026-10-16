import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Quote, Award } from "lucide-react";
import { Container } from "../common/Container";
import { GIET_LEADERSHIP_PROFILES } from "@/data/leadershipData";

export function LeadershipSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf7f2] via-[#f7f3eb] to-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="wide">
        {/* ========================================================
            PART 1: HONOURING THE VISION BEHIND ISF
           ======================================================== */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
              Honouring the Vision Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">
                ISF
              </span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Dr. J. A. Chowdary, Founder &amp; Chairman of International Startup Foundation, championing grassroots innovation across Bharat.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#e8dfd3] shadow-md flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#e8dfd3]">
              <Image
                src="/images/leadership/dr-ja-chowdary.png"
                alt="Dr. J. A. Chowdary — Founder & Chairman, International Startup Foundation"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover object-top"
              />
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e87042]">
                  Founder &amp; Chairman, ISF
                </span>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] mt-1">
                  Dr. J. A. Chowdary
                </h3>
                <p className="text-xs sm:text-sm text-[#78716c] font-medium mt-0.5">
                  Former IT Advisor to Govt of AP • Ex-Director STPI • Indian IT Ecosystem Architect
                </p>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#44403c] italic leading-relaxed pl-3 border-l-2 border-[#e87042]/50">
                &ldquo;India&apos;s true innovative breakthrough will not emerge solely from metropolitan high-rises, but from decentralizing opportunity directly to grassroots youth across rural and tribal corridors.&rdquo;
              </blockquote>

              <div className="pt-2">
                <Link
                  href="/about#vision"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#e87042] hover:text-[#c25022] transition-colors group"
                >
                  <span>More about ISF Vision &amp; Mandate</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: INSTITUTIONAL LEADERSHIP (GIET UNIVERSITY)
           ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
              Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Leadership</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Guiding GIET University&apos;s 28-year legacy of academic and innovation excellence.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          {/* Leaders Grid (5 Leaders) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {GIET_LEADERSHIP_PROFILES.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl border border-[#e8dfd3] overflow-hidden shadow-xs hover:shadow-md hover:border-[#e87042]/40 transition-all flex flex-col group"
              >
                <div className="relative aspect-[3/3.6] w-full bg-[#181a24] overflow-hidden">
                  <Image
                    src={leader.imageSrc}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-center truncate">
                    {leader.position}
                  </span>
                </div>

                <div className="p-3 text-center flex-1 flex flex-col justify-between">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1c1917] line-clamp-1">
                    {leader.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#78716c] line-clamp-1 mt-0.5">
                    {leader.honorific || leader.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
