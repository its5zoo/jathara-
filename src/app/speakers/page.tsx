import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Mic2, 
  ArrowRight, 
  Mail,
  HeartHandshake,
  GraduationCap,
  Utensils
} from "lucide-react";
import { INITIAL_SPEAKERS, EVENT_METADATA } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { EmptyState } from "@/components/common/EmptyState";

export const metadata: Metadata = {
  title: "Speakers & Dignitaries",
  description: "Official roster, plenary keynotes, and track chairs for ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

export default function SpeakersPage() {
  const chiefGuest = INITIAL_SPEAKERS.find((s) => s.id === "spk-chief-guest");
  const trackPanels = INITIAL_SPEAKERS.filter((s) => s.id !== "spk-chief-guest");

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
        </Container>
      </section>

      {/* Main Speakers Section */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="Official Speaker & Dignitary Announcements"
            subtitle="In accordance with our strict data integrity policy, verified dignitaries and plenary leaders are formally presented below."
          />

          {/* Chief Guest Spotlight Feature - Prestigious Editorial Presentation */}
          {chiefGuest && (
            <div className="mb-20 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Photo Column - Dignified & High-Resolution */}
                <div className="md:col-span-5 flex justify-center md:justify-start">
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-[#1c1917]/10 group">
                    <Image
                      src={chiefGuest.photoUrl || "/images/sadguru-sri-madhusudan-sai.jpg"}
                      alt={chiefGuest.name}
                      fill
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 400px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                    />
                  </div>
                </div>

                {/* Details Column */}
                <div className="md:col-span-7 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                  {/* Eyebrow */}
                  <div className="flex items-center justify-center md:justify-start gap-2 w-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c25022]">
                      Chief Guest of Honour
                    </span>
                    <span className="text-[#d6c7b2]">•</span>
                    <span className="text-xs font-semibold text-[#8c671b] uppercase tracking-wider">
                      Plenary Keynote
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1 w-full text-center md:text-left">
                    <h3 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-tight">
                      {chiefGuest.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8c671b] leading-snug">
                      Global Humanitarian, Spiritual Leader &amp; Founder, Sri Madhusudan Sai Global Humanitarian Mission
                    </p>
                  </div>

                  {/* Detailed Humanitarian Context */}
                  <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed text-center md:text-left">
                    Revered internationally for spearheading transformative selfless service across 30+ nations based on the timeless philosophy of <em>Vasudhaiva Kutumbakam</em> (The World is One Family). Under his visionary guidance, massive humanitarian institutions deliver world-class healthcare, values-based higher education, and morning nutrition completely free of charge to millions of underserved families.
                  </p>

                  {/* 3 Core Humanitarian Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 w-full">
                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs text-left">
                      <HeartHandshake className="w-4 h-4 text-[#c25022] shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="block text-[#1c1917] font-bold">Free Pediatric Care</strong>
                        <span className="text-[11px] text-[#6b7280] leading-tight">Sri Sathya Sai Sanjeevani</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs text-left">
                      <GraduationCap className="w-4 h-4 text-[#8c671b] shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="block text-[#1c1917] font-bold">Free Education</strong>
                        <span className="text-[11px] text-[#6b7280] leading-tight">Human Excellence Univ</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#e6dfd1]/80 shadow-2xs text-left">
                      <Utensils className="w-4 h-4 text-[#256f57] shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="block text-[#1c1917] font-bold">3M+ Daily Meals</strong>
                        <span className="text-[11px] text-[#6b7280] leading-tight">Annapoorna Nutrition</span>
                      </div>
                    </div>
                  </div>

                  {/* Link to Programme */}
                  <div className="pt-2 w-full flex justify-center md:justify-start">
                    <Link
                      href="/programme"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#c25022] hover:text-[#e87042] transition-colors group"
                    >
                      <span>View Plenary Session Schedule</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}


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
              {trackPanels.map((spk) => (
                <div
                  key={spk.id}
                  className="bg-[#ffffff] rounded-3xl p-6 sm:p-7 border border-[#e6dfd1] hover:border-[#143e30]/30 transition-all flex flex-col justify-between"
                >
                  <div>
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
              <Button href={`mailto:${EVENT_METADATA.contactEmail}?subject=Speaker%20Nomination`} variant="primary" size="md">
                <Mail className="w-4 h-4 mr-2" />
                <span>Submit Speaker Nomination</span>
              </Button>
              <Button variant="outline" size="md">
                <span>Mentor Category Details</span>
              </Button>
            </div>
          </div>

          {/* Additional Plenary Keynotes Advisory Notice */}
          <EmptyState
            icon="mic"
            badgeText="Announcements in Progress"
            title="More Speakers & Mentors Coming Soon"
            description="We are currently confirming distinguished founders, industry leaders, and domain experts. The complete lineup will be published as schedules are locked in."
            note="All speaker profiles are verified directly with the speakers before being published."
            actionLabel="Inquire About Speaking / Mentoring"
            actionHref={`mailto:${EVENT_METADATA.contactEmail}?subject=Speaking%20or%20Mentoring%20Inquiry`}
            className="mt-12"
          />
        </Container>
      </section>
    </div>
  );
}

