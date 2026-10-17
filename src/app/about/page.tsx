import type { Metadata } from "next";
import Image from "next/image";
import { 
  Target, 
  Users, 
  TreePine, 
  CheckCircle2, 
  Coffee,
  Building2,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Calendar,
  Compass,
  MapPin,
  Quote
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { 
  GIET_LEADERSHIP_PROFILES, 
  GIET_VERIFIED_MILESTONES, 
  GIET_VERIFIED_STATS,
  GIET_ACADEMIC_SCHOOLS,
  GIET_INNOVATION_ECOSYSTEM
} from "@/data/leadershipData";

export const metadata: Metadata = {
  title: "About GIET University | ISF Startup Jathara 2026",
  description: "Learn about GIET University's 28-year legacy of learning, research and innovation in Gunupur, Odisha, and its role as the official host institution for ISF Startup Jathara 2026 @ Dandakaranya.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* ========================================================
          1. EDITORIAL HEADER & EVENT THESIS
         ======================================================== */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/grassroots-dandakaranya-summit.jpg"
            alt="Igniting Grassroots Potential in Dandakaranya"
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
            Igniting Grassroots Potential in Dandakaranya
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Where Grassroots Youth, Tribal Knowledge &amp; Venture Capital Converge.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            ISF Startup Jathara 2026 is an intentional enterprise movement designed to decentralize India&apos;s startup economy, bringing global capital and institutional mentorship to the rural and tribal communities of South Odisha.
          </p>
        </Container>
      </section>

      {/* ========================================================
          2. THE CORE THESIS & WHAT JATHARA SIGNIFIES
         ======================================================== */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl lg:text-[2.65rem] text-[#1c1917] tracking-tight leading-[1.15]">
              Why Startup Jathara is Different From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Conventional Summits</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Grounding national investment dialogue in rural realities, tribal wisdom, and grassroots engineering.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">

              <p className="text-base text-[#4a5752] leading-relaxed">
                Most entrepreneurship summits occur within glass-walled metropolitan auditoriums, far removed from where raw materials originate, where tribal traditions preserve bio-diverse knowledge, and where grassroots challenges demand inventive engineering.
              </p>

              <p className="text-base text-[#4a5752] leading-relaxed">
                <strong>Startup Jathara @ Dandakaranya</strong> inverts this dynamic. By bringing leading investors, venture capitalists, corporate Global Capability Center (GCC) heads, and technology luminaries directly to GIET University in Gunupur, the summit grounds national dialogue in rural realities.
              </p>

              <div className="p-5 rounded-2xl bg-[#f7f4ec] border border-[#ede7db] space-y-3">
                <h3 className="font-serif font-bold text-lg text-[#103327] flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#c25e38]" />
                  What &apos;Jathara&apos; Signifies
                </h3>
                <p className="text-sm text-[#4a5752] leading-relaxed">
                  In regional tradition, a <em>Jathara</em> is a vibrant collective pilgrimage and festival of celebration, solidarity, and trade. Startup Jathara adopts this cultural ethos - transforming venture capital and startup pitching into a communal celebration of ingenuity, indigenous knowledge, and resilience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e6dfd1] shadow-md space-y-6">
                <h3 className="font-serif font-bold text-xl text-[#103327] border-b border-[#ede7db] pb-3">
                  Summit Guiding Objectives
                </h3>

                <ul className="space-y-4 text-sm text-[#333e3a]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Grassroots Scouting:</strong> Uncover breakthrough ideas developed by rural youth, women self-help collectives, and student innovators.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Venture Capital Access:</strong> Facilitate meaningful pitch opportunities before accredited angel syndicates and venture fund partners.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Cross-Border Linkages:</strong> Partner with GCCs and international foundation networks to support rural scale-ups.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Ecological Consciousness:</strong> Integrate sustainable forest practices, non-timber forest produce value chains, and eco-materials.
                    </span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Button href="/programme" variant="primary" size="sm" className="w-full justify-center">
                    Review 3-Day Draft Timetable
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          3. MANDATORY SECTION: A LEGACY OF LEARNING, RESEARCH & INNOVATION
             (GIET UNIVERSITY INSTITUTIONAL PROFILE)
         ======================================================== */}
      <section id="giet-legacy" className="py-20 sm:py-24 bg-[#ffffff] border-b border-[#e6dfd1]">
        <Container size="default">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-[1.15]">
              A Legacy of Learning, Research &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Innovation</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto leading-relaxed">
              Founded in 1997 in Gunupur, Odisha - fostering multidisciplinary scholarship, advanced research, and grassroots empowerment.
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          {/* Institutional Overview & Founding Story - Completely Open & Unboxed Editorial Design */}
          <div className="py-8 sm:py-10 border-t border-b border-[#e6dfd1]/80 mb-12 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Open Editorial Narrative */}
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c25022]">
                    Institutional Founding &amp; Evolution
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1c1917] leading-tight">
                  From Technical Pioneer to Premier State Private University
                </h3>

                <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                  Established in 1997 by the <strong>Vidya Bharati Educational Trust</strong> in Gunupur, GIET began as an AICTE-approved pioneer in technical and engineering education in Eastern India.
                </p>

                <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                  In 2018, the Odisha Legislative Assembly conferred full State Private University status via the <strong>GIET University Act, 2018</strong>, with UGC Section 2(f) incorporation.
                </p>

                <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                  Set across a <strong>113.03-acre eco-friendly campus</strong> along the scenic Bansadhara River, the university anchors advanced research labs, academic excellence, and grassroots rural incubation.
                </p>
              </div>

              {/* Right Column: Clean Architectural Snapshot (Zero Boxes) */}
              <div className="lg:col-span-5 lg:border-l lg:border-[#e6dfd1] lg:pl-10 space-y-6">
                {/* Header with Logo & Identity */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/logos/giet-logo.png"
                    alt="GIET University Official Crest"
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c25022] block">
                      Host Academic Campus
                    </span>
                    <strong className="block font-serif font-bold text-lg text-[#1c1917] leading-tight">
                      GIET University
                    </strong>
                    <span className="text-xs text-[#78716c] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                      Gunupur, Rayagada, Odisha
                    </span>
                  </div>
                </div>

                {/* Specification List with Clean Subtle Dividers */}
                <div className="space-y-3 text-xs text-[#2b2521] divide-y divide-[#ede7db]">
                  <div className="pt-2 flex items-baseline justify-between gap-4">
                    <span className="text-[#78716c] font-medium shrink-0">Founding Body</span>
                    <span className="font-bold text-[#1c1917] text-right">Vidya Bharati Trust (1997)</span>
                  </div>

                  <div className="pt-3 flex items-baseline justify-between gap-4">
                    <span className="text-[#78716c] font-medium shrink-0">Charter &amp; UGC</span>
                    <span className="font-bold text-[#1c1917] text-right">GIET Act 2018 • UGC Sec 2(f)</span>
                  </div>

                  <div className="pt-3 space-y-1.5">
                    <span className="text-[#78716c] font-medium block">Statutory Accreditations</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["UGC Act 1956", "AICTE", "NAAC", "NBA", "DSIR (SIRO)", "ICAR"].map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#f7f4ec] text-[#44403c] border border-[#dfd6c4]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3 Metric Counts (Typographic Strip - No Boxes) */}
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#ede7db]">
                  <div>
                    <div className="font-serif font-black text-2xl text-[#1c1917]">113+</div>
                    <div className="text-xs text-[#78716c] font-medium">Acres Campus</div>
                  </div>
                  <div>
                    <div className="font-serif font-black text-2xl text-[#1c1917]">4,000+</div>
                    <div className="text-xs text-[#78716c] font-medium">Students</div>
                  </div>
                  <div>
                    <div className="font-serif font-black text-2xl text-[#1c1917]">300+</div>
                    <div className="text-xs text-[#78716c] font-medium">Faculty</div>
                  </div>
                </div>

                {/* Clean Link */}
                <div className="pt-1">
                  <a
                    href="https://www.giet.edu/about-giet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c25022] hover:text-[#e87042] transition-colors group"
                  >
                    <span>Visit Official GIET Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom 6 Verified Statistics - Open Typographic Grid (No Boxes) */}
            <div className="pt-8 border-t border-[#e6dfd1]/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {GIET_VERIFIED_STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-[#8c671b] leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#78716c] leading-snug">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chronological Milestone Timeline */}
          <div className="space-y-8 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Key Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Milestones</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Verified historical chronology sourced from published university records &amp; government gazettes.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GIET_VERIFIED_MILESTONES.map((item, idx) => {
                const simplifiedData: Record<string, { tag: string; shortTitle: string; easyDesc: string }> = {
                  "1997": {
                    tag: "Campus Foundation",
                    shortTitle: "Founding of GIET Gunupur",
                    easyDesc: "Established by Vidya Bharati Educational Trust with AICTE approval, pioneering quality engineering education in South Odisha."
                  },
                  "2005–2026": {
                    tag: "Quality Benchmark",
                    shortTitle: "NAAC 'A' & NBA Accreditations",
                    easyDesc: "Continuously accredited by NAAC and NBA across engineering disciplines for premier outcome-based technical education."
                  },
                  "2018": {
                    tag: "State University",
                    shortTitle: "Conferred Full University Status",
                    easyDesc: "Enacted under the GIET University Act, 2018 by the Odisha Legislative Assembly, celebrating 20+ years of academic excellence."
                  },
                  "2019": {
                    tag: "National Recognition",
                    shortTitle: "Formal UGC Enlistment (Sec 2f)",
                    easyDesc: "Officially incorporated into the recognized universities directory by the University Grants Commission (UGC), New Delhi."
                  },
                  "2020+": {
                    tag: "Innovation Hub",
                    shortTitle: "DSIR Research & Atal Incubator",
                    easyDesc: "Recognized by DSIR for scientific research; launched the Atal Community Innovation Centre (ACIC) and BIRAC biotech labs."
                  },
                  "2026": {
                    tag: "Summit Host",
                    shortTitle: "Host Campus for Startup Jathara",
                    easyDesc: "Selected as official host campus for ISF Startup Jathara 2026, convening 5,000+ delegates, investors, and grassroots founders."
                  }
                };

                const info = simplifiedData[item.year] || {
                  tag: "Milestone",
                  shortTitle: item.title,
                  easyDesc: item.description
                };

                const displayYear = item.year === "2005–2026" ? "2005+" : item.year;

                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e6dfd1] hover:border-[#e87042] shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      {/* Top Row: Large Visible Year + Simple Meaningful Tag */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif font-black text-3xl sm:text-4xl text-[#c25022] tracking-tight whitespace-nowrap shrink-0">
                          {displayYear}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f7f4ec] text-[#e87042] border border-[#dfd6c4] whitespace-nowrap shrink-0">
                          {info.tag}
                        </span>
                      </div>

                      {/* Prominent High-Contrast Title */}
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors">
                        {info.shortTitle}
                      </h4>

                      {/* Large, Easy-to-Read, Clear Description */}
                      <p className="text-sm sm:text-[15px] text-[#44403c] leading-relaxed">
                        {info.easyDesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic & Research Ecosystem Across Disciplines */}
          <div className="space-y-8 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Academic Schools &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Research Ecosystem</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                A multi-disciplinary spectrum spanning engineering, agricultural research, life sciences, healthcare, and business administration.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GIET_ACADEMIC_SCHOOLS.map((school, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#faf8f4] border border-[#ede7db] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-[#dfd6c4] text-[#8c671b]">
                      {school.badge}
                    </span>
                    <GraduationCap className="w-4 h-4 text-[#be9740]" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#103327]">
                    {school.name}
                  </h4>
                  <p className="text-xs text-[#4a5752] leading-relaxed">
                    {school.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation, Incubation & Entrepreneurship Facilities */}
          <div className="space-y-8 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Innovation, Incubation &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Technology Transfer</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Officially documented innovation centers connecting student innovators and community entrepreneurs with national funding and testbeds.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GIET_INNOVATION_ECOSYSTEM.map((center, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#ede7db] shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="ivory" size="sm">
                      {center.tag}
                    </Badge>
                    <Lightbulb className="w-5 h-5 text-[#c25e38]" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#103327]">
                    {center.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                    {center.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Responsibility & Tribal Community Commitment - Architecturally Aligned Border Grid */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#e6dfd1] bg-white shadow-xs overflow-hidden mb-16">
            {/* Header Bar with Proper Dividing Border */}
            <div className="px-6 sm:px-8 py-4.5 border-b border-[#e6dfd1] bg-[#faf8f5]/80 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#e87042]/30 bg-[#e87042]/5 text-[#c25022] text-xs font-semibold">
                Official Mission Mandate
              </div>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Social Responsibility &amp; Regional Inclusion
              </span>
            </div>

            {/* Main Content Area: Title & Framed Quote */}
            <div className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-7">
              <div className="space-y-2.5 max-w-3xl">
                <h3 className="font-serif font-black text-2xl sm:text-3.5xl text-[#1c1917] tracking-tight leading-snug">
                  Empowering the Meritorious Youth of Dandakaranya
                </h3>
                <p className="text-sm sm:text-[15px] text-[#57534e] leading-relaxed">
                  Located in the tribal corridor of Rayagada, GIET University prioritizes grassroots community empowerment - ensuring talented rural and indigenous youth become confident leaders, scientists, and entrepreneurs.
                </p>
              </div>

              {/* Featured Quote with Clean Border Framing */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#faf8f5] border border-[#e6dfd1] border-l-4 border-l-[#e87042]">
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#1c1917] leading-relaxed">
                  &ldquo;To support and uplift the meritorious students of this Tribal Area to represent as an Ambassador in all forums as a part of our social responsibility.&rdquo;
                </p>
              </div>
            </div>

            {/* 3 Key Action Pillars (Crisp 3-Column Grid with Full-Height Borders) */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e6dfd1] border-t border-[#e6dfd1] bg-[#faf8f5]/30">
              <div className="p-6 sm:p-7 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e87042]/10 flex items-center justify-center text-[#e87042] shrink-0">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1c1917]">Full Fee Waivers</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  Merit scholarship endowments and complete tuition assistance for indigenous tribal students.
                </p>
              </div>

              <div className="p-6 sm:p-7 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#c25022]/10 flex items-center justify-center text-[#c25022] shrink-0">
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1c1917]">Gandhi Public School</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  Free foundational primary education and modern learning resources for local rural children.
                </p>
              </div>

              <div className="p-6 sm:p-7 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#d68c45]/10 flex items-center justify-center text-[#d68c45] shrink-0">
                    <Lightbulb className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1c1917]">Grassroots Incubation</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  Hands-on mentorship, seed funding, and incubation through Atal (ACIC) &amp; BIRAC biotechnology labs.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Preview Section (5 Verified Leaders) */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                GIET University <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Leadership Council</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Meet the visionaries, academic officers, and executive leaders guiding the institution.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-0.5 w-6 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-0.5 w-6 rounded-full bg-[#d68c45]/25" />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.giet.edu/leadership/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1c1917] bg-[#f7f4ec] hover:bg-[#ede7db] border border-[#dfd6c4] px-4 py-2 rounded-xl transition-colors"
                >
                  <span>Official GIET Leadership Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e87042]" />
                </a>
              </div>
            </div>

            {/* 5 Leaders Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {GIET_LEADERSHIP_PROFILES.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-[#faf8f4] p-5 rounded-2xl border border-[#ede7db] transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white border border-[#ede7db]">
                      <Image
                        src={leader.imageSrc}
                        alt={`Portrait of ${leader.name}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 20vw"
                        className="object-cover object-top transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c671b] block">
                        {leader.position}
                      </span>
                      <strong className="font-serif text-sm text-[#103327] block leading-tight mt-0.5">
                        {leader.name}
                      </strong>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-[#5c6e64] line-clamp-3 leading-relaxed">
                    {leader.summaryBio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          4. THE DANDAKARANYA CONTEXT
         ======================================================== */}
      <section className="py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="The Dandakaranya Heritage"
            subtitle="Deep historical roots, extraordinary bio-diversity, and an untapped economic frontier in South Odisha."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] rounded-2xl p-6 border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-4">
                <TreePine className="w-5 h-5 text-[#256f57]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Ecological Heartland
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                Spanning parts of Odisha, Andhra Pradesh, Chhattisgarh, and Telangana, Dandakaranya is celebrated for its dense Eastern Ghats flora, medicinal herbs, and water catchments.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-2xl p-6 border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-4">
                <Users className="w-5 h-5 text-[#c25e38]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Indigenous Innovation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                Indigenous communities possess centuries of sophisticated botanical knowledge, seed preservation practices, natural dyeing arts, and cooperative social structures.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-2xl p-6 border border-[#e6dfd1] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-4">
                <Coffee className="w-5 h-5 text-[#be9740]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Signature Agro-Produce
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                From Araku Valley organic coffee to Koraput indigenous millets and organic turmeric, the region is ripe for high-value agricultural branding and direct consumer market channels.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          5. INSTITUTIONAL COALITION: ISF, GIET & INCUBATEX
         ======================================================== */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="Convened by Trusted Institutions"
            subtitle="Combining international startup foundation networks with premier higher education and grassroots incubation leadership."
          />

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] p-2 flex items-center justify-center shrink-0">
                <Image
                  src="/logos/isf-logo.webp"
                  alt="International Startup Foundation (ISF) Official Logo"
                  width={56}
                  height={56}
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#103327]">
                    International Startup Foundation (ISF)
                  </h3>
                  <Badge variant="forest" size="sm">Organizer</Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                  ISF is a global non-profit enterprise movement that builds vibrant startup ecosystems across tier-2, tier-3, and rural regions. ISF brings international investor delegations, structured mentorship curriculums, and national recognition to the event.
                </p>
                <a
                  href="https://www.isfnetwork.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#256f57] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  Visit Official ISF Network Website →
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] p-2 flex items-center justify-center shrink-0">
                <Image
                  src="/logos/giet-logo.png"
                  alt="GIET University Official Logo"
                  width={56}
                  height={56}
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#103327]">
                    GIET University, Gunupur
                  </h3>
                  <Badge variant="ivory" size="sm">Host Institution</Badge>
                  <span className="text-[11px] font-semibold text-[#8c671b] bg-[#f7f4ec] px-2 py-0.5 rounded border border-[#dfd6c4]">
                    State Private University (Act of 2018) • UGC 2(f)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                  Established in Gunupur, Rayagada, Odisha with over 28 years of academic distinction, GIET University is a pioneer in engineering research, agricultural sciences, biotechnology, and rural innovation. Its 113.03-acre green residential campus provides premier laboratory infrastructure, active incubation facilities through its Technology Business Incubator (TBI), ACICGIETU, and BIRAC E-YUVA Centre for Startup Jathara 2026.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="https://www.giet.edu/leadership/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#256f57] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    GIET University Leadership Directory →
                  </a>
                  <a
                    href="https://www.giet.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#7e8d87] hover:text-[#103327] hover:underline inline-flex items-center gap-1"
                  >
                    GIET University Main Portal →
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#e6dfd1] shadow-xs flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] p-2 flex items-center justify-center shrink-0">
                <Image
                  src="/logos/incubatex-logo.png"
                  alt="IncubateX Innovation Foundation Official Logo"
                  width={56}
                  height={56}
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#103327]">
                    IncubateX Innovation Foundation
                  </h3>
                  <Badge variant="terracotta" size="sm">Associated Foundation</Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5752] leading-relaxed">
                  IncubateX specializes in incubation frameworks, design thinking bootcamps, and early-stage acceleration. IncubateX ensures participating startups receive structured pre-event pitch preparation and post-event investment tracking.
                </p>
                <a
                  href="https://www.incubationx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#256f57] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  Visit Official IncubateX Website →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          6. CTA BOTTOM BANNER
         ======================================================== */}
      <section className="py-16 bg-[#081a14] text-[#fcfbf8] text-center">
        <Container size="default">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl">
            Explore the Announced Programme and Pathways
          </h2>
          <p className="mt-3 text-sm text-[#c8d1cd] max-w-xl mx-auto">
            Inspect the tentative three-day timetable or register your interest across founder, investor, and delegate categories.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/programme" variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
              View Draft Schedule
            </Button>
            <Button href="https://isf-test.vercel.app/" variant="terracotta" size="md">
              Registration Gateway
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

