import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Activity, 
  Wheat, 
  Cpu, 
  Shield, 
  Users, 
  Building2, 
  Zap, 
  Coins, 
  Leaf, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Compass, 
  Layers,
  Rocket 
} from "lucide-react";
import { STARTUP_VERTICALS } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { StartupVerticalsGrid } from "@/components/startups/StartupVerticalsGrid";

export const metadata: Metadata = {
  title: "Startups & Junicorn Initiative",
  description: "Explore the Junicorn grassroots movement, startup exhibition arena, and thematic verticals at ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

export default function StartupsPage() {
  const iconMap: Record<string, React.ElementType> = {
    Wheat,
    Cpu,
    Activity,
    Shield,
    Users,
    Building2,
    Zap,
    Coins,
    Sparkles,
    Leaf,
    Globe2,
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-pitch-stage.jpg"
            alt="Founders Pitching on Stage to Investor Jury"
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
            Nurturing Rural &amp; Tribal Innovators
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Bridging Grassroots Founders directly with Top Venture Capital.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            The platform where collegiate makers, grassroots problem solvers, and early-stage enterprises connect with national venture capital and industry mentors.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://isf-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e87042] to-[#d95d2c] hover:from-[#d95d2c] hover:to-[#c25022] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Founder Registration Gateway</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <Link 
              href="/programme" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141620]/80 hover:bg-[#1f2230] text-white border border-white/20 font-bold text-sm backdrop-blur-md transition-all"
            >
              <span>Check Pitch Day Timing</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Junicorn Initiative Spotlight */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
              The Junicorn Initiative: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">From Classroom to Enterprise</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Empowering young student innovators, school inventors, and grassroots youth across Odisha and neighboring states.
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
                The <strong>Junicorn Initiative</strong> is a nationwide movement pioneered by ISF to cultivate &apos;Junior Unicorns&apos; - young student innovators, school inventors, and rural youth who demonstrate ingenuity in solving everyday challenges in their local communities.
              </p>

              <p className="text-base text-[#4a5752] leading-relaxed">
                At Dandakaranya, Junicorn places particular emphasis on indigenous and tribal youth from districts across Odisha and neighboring states, providing them the formal stage, presentation coaching, and industry linkages normally confined to metropolitan premier institutes.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#333e3a]">
                    <strong>Curated Pitch Stage:</strong> On Day 1 (Friday 18 Dec, 2:30–3:30 PM), selected Tribal & Rural Junicorn teams will pitch before a panel of angels and sector leaders.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#256f57] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#333e3a]">
                    <strong>Incubation Bridge:</strong> Top projects receive incubation facilitation and advisory support in association with IncubateX and GIET University Incubation Center.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-7 border border-[#e6dfd1] shadow-lg space-y-5 overflow-hidden">
                {/* Photo preview of Junicorn Student Innovators - Clean & Unobstructed */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#dfd6c4] shadow-xs group">
                  <Image
                    src="/images/junicorn-innovators.jpg"
                    alt="Indian Student Innovators Showcasing Prototypes with Mentors"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1c1917]">
                    What Junicorn Teams Receive
                  </h3>
                  <p className="mt-1 text-xs text-[#7e8d87]">
                    Complete grassroots incubation and mentorship package for selected youth teams.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#333e3a]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Free exhibition demo kiosk in the Exhibition Arena</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>One-on-one pairing with industry domain mentors</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Participation in Day 2 Dandakaranya Forest Trekking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Summit certification and innovation recognition awards</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-[#dfd6c4]">
                  <Button href="https://isf-test.vercel.app/" variant="terracotta" size="sm" className="w-full justify-center">
                    Register as Student / Junicorn Maker
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The 8 Official Summit Tracks */}
      <section className="py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
        <Container size="wide">
          <SectionHeading
            title="Thematic Sectors for Showcases & Roundtables"
            subtitle="Startups with active prototypes, MVPs, or operational traction in these eight official domains are invited to exhibit."
          />

          <StartupVerticalsGrid />
        </Container>
      </section>

      {/* Exhibition Showcase Concept */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="The Startup Showcase Arena"
            subtitle="An energetic, purpose-built exhibition arena inside the GIET campus where founders present physical prototypes, software demonstrations, and native produce."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#222b27]">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1]">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-3">
                <Layers className="w-5 h-5 text-[#143e30]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Dedicated Demo Kiosks
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                Standardized modular display kiosks equipped with power, connectivity, and branding displays for hands-on product interaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1]">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-3">
                <Users className="w-5 h-5 text-[#c25e38]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Investor Walkthroughs
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                Structured exhibition walkthroughs for venture partners, angel networks, and GCC strategy executives during Araku coffee breaks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1]">
              <div className="w-10 h-10 rounded-xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-3">
                <Compass className="w-5 h-5 text-[#be9740]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#103327]">
                Tribal Craft & Agro Pavilion
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5752] mt-2 leading-relaxed">
                A showcase pavilion dedicated to organic tribal farm goods, minor millets processing, natural textiles, and indigenous value chains.
              </p>
            </div>
          </div>

          {/* Transparent Policy Notice */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Official Application Notice:</strong> Formal selection criteria, booth dimension options, and evaluation panels will be announced when the registration portal opens. The event does not guarantee specific funding amounts; funding discussions occur directly between founders and participating investors.
            </div>
          </div>
        </Container>
      </section>

      {/* Gateway CTA */}
      <section className="py-16 bg-[#081a14] text-[#fcfbf8] text-center">
        <Container size="default">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl">
            Are You Building for Grassroots India?
          </h2>
          <p className="mt-2 text-sm text-[#c8d1cd] max-w-xl mx-auto">
            Review participation categories and prepare your startup presentation for ISF Startup Jathara 2026.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="https://isf-test.vercel.app/" variant="gold" size="md">
              Browse Registration Categories
            </Button>
            <Button href="/programme" variant="outline" size="md" className="text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#143e30]">
              View Pitch Schedule
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

