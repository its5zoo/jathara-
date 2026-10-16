import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Mic2, 
  ArrowRight, 
  Mail, 
  AlertCircle 
} from "lucide-react";
import { INITIAL_SPEAKERS } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { EmptyState } from "@/components/common/EmptyState";

export const metadata: Metadata = {
  title: "Speakers & Dignitaries",
  description: "Official roster, plenary keynotes, and track chairs for ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

export default function SpeakersPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-speakers-backdrop.jpg"
            alt="Speakers, Mentors and Dignitaries on Podium"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-95"
          />
          {/* Obsidian-Peach scrim & vignette */}
          <div className="absolute inset-0 z-10 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        <Container size="default" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Speakers, Mentors &amp; Dignitaries
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Distinguished Voices from Industry, Policy &amp; Deep-Tech Venture Capital.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Leading voices across government, venture capital, agriculture, healthcare, and higher education convening in Dandakaranya.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-xs text-[#ffedd5] bg-[#141620]/80 border border-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-md">
            <AlertCircle className="w-4 h-4 text-[#e87042] flex-shrink-0" />
            <span>
              <strong>Editorial Transparency:</strong> The official confirmed dignitary roster is currently in steering committee review and will be released in scheduled editions.
            </span>
          </div>
        </Container>
      </section>

      {/* Main Speakers Section */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="Official Speaker & Dignitary Announcements"
            subtitle="In accordance with our strict data integrity policy, only verified and confirmed speakers will appear on this official roster."
          />

          {/* Polished Empty State / Advisory Notice */}
          <EmptyState
            icon="clock"
            badgeText="Roster In Formalization"
            title="Official Speaker Lineup is Being Finalized"
            description="The steering committee of the International Startup Foundation and GIET University is currently finalizing invitations and confirmations for plenary keynotes, ministerial guests, and sector roundtable chairs."
            note="To maintain authentic and verified information, speaker profiles will be populated progressively upon formal confirmation. No placeholder personas are used."
            actionLabel="Inquire About Speaking / Mentoring"
            actionHref="/contact"
            className="mb-16"
          />

          {/* Sector Panel Chairs Outline */}
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Roundtable Tracks &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Panel Formats</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Curated discussion tracks convening leaders, policy champions, and innovators across focus domains.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INITIAL_SPEAKERS.map((spk) => (
                <div
                  key={spk.id}
                  className="bg-[#ffffff] rounded-3xl p-6 sm:p-7 border border-[#e6dfd1] hover:border-[#143e30]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="terracotta" size="sm">
                        {spk.track}
                      </Badge>
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {spk.statusLabel}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg sm:text-xl text-[#103327]">
                      {spk.name}
                    </h4>

                    <div className="text-xs font-semibold text-[#8c671b] uppercase tracking-wider mt-1">
                      {spk.designation}
                    </div>

                    <p className="text-xs sm:text-sm text-[#4a5752] mt-3 leading-relaxed">
                      {spk.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ede7db] flex items-center justify-between text-xs text-[#7e8d87]">
                    <span>Host Track: {spk.track}</span>
                    <Link
                      href="/programme"
                      className="text-[#143e30] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Session</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Speaker Nominations & Applications */}
      <section className="py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
        <Container size="default">
          <div className="bg-[#ffffff] rounded-3xl p-8 sm:p-12 border border-[#e6dfd1] shadow-xs max-w-4xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] flex items-center justify-center text-[#143e30] mx-auto">
              <Mic2 className="w-6 h-6 text-[#c25e38]" />
            </div>

            <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
              Recommend a Speaker or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Apply to Mentor</span>
            </h3>

            <p className="text-sm sm:text-base text-[#4a5752] max-w-2xl mx-auto leading-relaxed">
              Are you an experienced founder, agronomist, public health expert, angel investor, or academic researcher passionate about grassroots youth entrepreneurship? We welcome nominations for our sector roundtables.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="md">
                <Mail className="w-4 h-4 mr-2" />
                <span>Submit Speaker Nomination</span>
              </Button>
              <Button href="/register?category=speaker-mentor" variant="outline" size="md">
                <span>Mentor Category Details</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

