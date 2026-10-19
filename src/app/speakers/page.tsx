import type { Metadata } from "next";
import Image from "next/image";
import { 
  Mic2, 
  Mail,
  HeartHandshake,
  GraduationCap,
  Utensils
} from "lucide-react";
import { INITIAL_SPEAKERS, EVENT_METADATA } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { RoundtableShowcase } from "@/components/speakers/RoundtableShowcase";

export const metadata: Metadata = {
  title: "Speakers & Dignitaries",
  description: "Official roster, plenary keynotes, and track chairs for ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

export default function SpeakersPage() {
  const chiefGuest = INITIAL_SPEAKERS.find((s) => s.id === "spk-chief-guest");

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
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#f2b58f] drop-shadow-sm">
            Voices of Innovation · Leadership · Mentorship
          </p>

          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Speakers, Mentors &amp; Dignitaries
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Meet the Minds Shaping Tomorrow
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Meet the entrepreneurs, industry leaders, policymakers, and mentors sharing their knowledge and experience to inspire innovation, guide emerging founders, and strengthen the startup ecosystem at Startup Jathara 2026.
          </p>
        </Container>
      </section>

      {/* Main Speakers Section */}
      <section className="section-reveal py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            eyebrow="Speakers & Dignitaries"
            title="Official Speakers & Dignitary Announcements"
            subtitle="Verified dignitaries and plenary leaders are formally presented below. Additional speakers will be announced as confirmations are received."
          />

          {/* Chief guest editorial feature */}
          {chiefGuest && (
            <article className="group relative mx-auto mb-20 max-w-6xl overflow-hidden rounded-[28px] border border-[#d9d1c3] bg-[#f7f3ea] shadow-[0_24px_70px_rgba(43,37,28,0.1)]">
              <div className="grid md:grid-cols-[minmax(280px,0.82fr)_1.5fr]">
                <div className="relative min-h-[390px] overflow-hidden sm:min-h-[460px] md:min-h-full">
                  <div className="absolute inset-0 bg-[#d8d1c5]">
                    <Image
                      src={chiefGuest.photoUrl || "/images/sadguru-sri-madhusudan-sai.jpg"}
                      alt={chiefGuest.name}
                      fill
                      priority
                      sizes="(max-width: 767px) 100vw, 38vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#101f1a]/85 to-transparent" />
                  </div>
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white sm:inset-x-8 sm:bottom-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2c8a8]">
                        Chief Guest of Honour
                      </span>
                      <p className="mt-1 font-serif text-xl font-bold">Plenary Inauguration</p>
                    </div>
                    <span className="font-serif text-3xl text-white/45" aria-hidden="true">01</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#a94e2d]">
                    Plenary Inauguration Keynote
                  </span>
                  <div>
                    <h3 className="mt-3 font-serif text-3xl font-black leading-[1.04] tracking-[-0.035em] text-[#1b1b18] sm:text-4xl lg:text-[2.8rem]">
                      {chiefGuest.name}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-[#815f22] sm:text-[15px]">
                      Global Humanitarian &amp; Spiritual Leader · Founder, Sri Madhusudan Sai Global Humanitarian Mission
                    </p>
                  </div>

                  <div className="my-6 h-px w-full bg-[#d8d0c2]" />
                  <p className="text-sm leading-7 text-[#53564f] sm:text-[15px]">
                    Revered internationally for establishing transformative selfless institutions across 30+ nations based on <em>Vasudhaiva Kutumbakam</em>. Under his stewardship, free healthcare, values-based higher education, and daily morning nutrition reach millions of underserved families.
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="border-l-2 border-[#b45532] py-1 pl-3.5 text-left">
                      <HeartHandshake className="mb-2 h-4 w-4 text-[#b45532]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block font-bold text-[#1c1917]">Free Pediatric Care</strong>
                        <span className="mt-1 block text-[10px] leading-4 text-stone-500">Sai Sanjeevani Hospitals</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#9a7022] py-1 pl-3.5 text-left">
                      <GraduationCap className="mb-2 h-4 w-4 text-[#8c671b]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block font-bold text-[#1c1917]">Free Education</strong>
                        <span className="mt-1 block text-[10px] leading-4 text-stone-500">SSSUHE University</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#277059] py-1 pl-3.5 text-left">
                      <Utensils className="mb-2 h-4 w-4 text-[#256f57]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block font-bold text-[#1c1917]">3M+ Daily Meals</strong>
                        <span className="mt-1 block text-[10px] leading-4 text-stone-500">Annapoorna Nutrition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}


          {/* Official Sector Roundtables & Panelists Showcase */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff4ed] text-[#c25022] border border-[#fbd4c0] mb-3">
                <Mic2 className="w-3.5 h-3.5" />
                <span>Sectoral Deliberations</span>
              </div>
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Official Sector Roundtables &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Panelists</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Official speaker roster transcribed from ISF Network, convening leaders across life sciences, agriculture, global venture syndicates, and scaling policy.
              </p>
            </div>

            <RoundtableShowcase />
          </div>
        </Container>
      </section>

      {/* Speaker Nominations & Applications */}
      <section className="section-reveal py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
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
        </Container>
      </section>
    </div>
  );
}

