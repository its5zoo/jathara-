import React from "react";
import Link from "next/link";
import { 
  Wheat, 
  Cpu, 
  Activity, 
  Shield, 
  Users, 
  Building2, 
  Zap, 
  Coins, 
  ArrowRight, 
  Sparkles
} from "lucide-react";
import { OFFICIAL_TRACKS, SummitTrack } from "@/lib/config/tracks";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import { cn } from "@/lib/utils";

// Icon resolution helper for official tracks
const trackIconMap: Record<string, React.ElementType> = {
  Wheat,
  Cpu,
  Activity,
  Shield,
  Users,
  Building2,
  Zap,
  Coins,
};

export function VerticalsSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Summit Verticals"
          title="Eight Focus Sectors"
          subtitle="Explore the 8 tracks tailored to rural innovation and high-growth national markets."
        />

        {/* Canonical Eight-Track Grid - Streamlined, Compact & Easy to Read */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {OFFICIAL_TRACKS.map((track: SummitTrack) => {
            const IconComp = trackIconMap[track.iconName] || Sparkles;

            return (
              <div
                key={track.slug}
                className={cn(
                  "bg-[#ffffff] rounded-2xl p-5 border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden",
                  track.accentBorder
                )}
              >
                {/* Subtle thematic ambient wash */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity",
                    track.accentBg
                  )}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Track Index Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105",
                        track.iconBg
                      )}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <Badge variant={track.tagVariant} size="sm">
                      Track 0{track.id}
                    </Badge>
                  </div>

                  {/* Track Heading */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#103327] group-hover:text-[#1b5341] transition-colors leading-snug">
                    {track.title}
                  </h3>

                  {/* Concise Description in Easy Words */}
                  <p className="text-xs text-[#5c6964] mt-2 line-clamp-2 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="relative z-10 mt-4 pt-3 border-t border-[#ede7db] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#8c671b]">
                    Dec 2026
                  </span>
                  <Link
                    href={`/register?category=startup-founder&track=${track.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#103327] group-hover:text-[#c25e38] transition-colors"
                  >
                    <span>Apply in Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-10 text-center">
          <Button href="/startups" variant="secondary" size="md" className="font-bold shadow-2xs w-full sm:w-auto justify-center">
            <span>Explore Complete Startup &amp; Junicorn Guidelines</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
