import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Layers3,
  Presentation,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { StartupVerticalsGrid } from "@/components/startups/StartupVerticalsGrid";

export const metadata: Metadata = {
  title: "Startups & Junicorn Initiative",
  description:
    "Explore the Junicorn grassroots movement, startup exhibition arena, and thematic verticals at ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

const teamBenefits = [
  "Free exhibition demo kiosk in the Exhibition Arena",
  "One-on-one pairing with industry domain mentors",
  "Participation in Day 2 Dandakaranya Forest Trekking",
  "Summit certification and innovation recognition awards",
];

const showcaseFeatures = [
  {
    icon: Layers3,
    number: "01",
    title: "Dedicated Demo Kiosks",
    description:
      "Standardized modular display kiosks equipped with power, connectivity, and branding displays for hands-on product interaction.",
  },
  {
    icon: Users,
    number: "02",
    title: "Investor Walkthroughs",
    description:
      "Structured exhibition walkthroughs for venture partners, angel networks, and GCC strategy executives during Araku coffee breaks.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Tribal Craft & Agro Pavilion",
    description:
      "A showcase pavilion dedicated to organic tribal farm goods, minor millets processing, natural textiles, and indigenous value chains.",
  },
];

export default function StartupsPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-[#232733] bg-[#0c0d12] py-16 text-[#fcfbf8] sm:py-24">
        <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
          <Image
            src="/images/summit-pitch-stage.jpg"
            alt="Founders Pitching on Stage to Investor Jury"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-95"
          />
          <div className="absolute inset-0 z-10 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
        </div>

        <Container size="default" className="relative z-20 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f2b58f] sm:text-xs">
            Startups · Student Innovators · Grassroots Enterprise
          </p>
          <h1 className="font-serif text-4xl font-black leading-[1.04] tracking-[-0.035em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl">
            Nurturing Rural &amp; Tribal Innovators
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg font-medium text-[#ffedd5] drop-shadow-sm sm:text-xl">
            Bridging Grassroots Founders directly with Top Venture Capital.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#d6d0c7] sm:text-base">
            Discover emerging startups, student innovations, and grassroots enterprises shaping the future. Explore opportunities to showcase your ideas, connect with industry leaders, and turn promising solutions into real-world impact.
          </p>
        </Container>
      </section>

      <section className="startup-reveal border-b border-[#ddd5c8] bg-[#fcfbf8] py-20 sm:py-24" aria-labelledby="junicorn-heading">
        <Container size="default">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-serif text-base font-bold text-[#b65531]">01</span>
              <span className="h-px w-6 bg-[#c8bfb0]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7a746b]">Junicorn Pathway</span>
            </div>
            <h2 id="junicorn-heading" className="max-w-2xl font-serif text-3xl font-black leading-[1.1] tracking-tight text-[#1b1b18] sm:text-4xl lg:text-[2.75rem]">
              From classroom insight to{" "}
              <span className="text-[#ad4e2c]">credible enterprise.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-[#656158] sm:text-[15px]">
              Empowering young student innovators, school inventors, and grassroots youth across Odisha and neighboring states.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#d9d0c3] bg-[#f4efe6] shadow-[0_24px_70px_rgba(45,38,28,0.1)]">
            <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
              <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px] lg:min-h-full">
                <Image
                  src="/images/junicorn-innovators.jpg"
                  alt="Indian Student Innovators Showcasing Prototypes with Mentors"
                  fill
                  sizes="(max-width: 1023px) 100vw, 52vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025] motion-reduce:transition-none"
                />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#10271f]/90 to-transparent" />
                <div className="absolute inset-x-7 bottom-7 text-white sm:inset-x-10 sm:bottom-9">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3c39f]">Junior Unicorns</span>
                  <p className="mt-2 max-w-md font-serif text-2xl font-bold leading-tight sm:text-3xl">
                    Local ingenuity, prepared for a national stage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-sm leading-7 text-[#4f554f] sm:text-[15px]">
                  The <strong className="font-bold text-[#20241f]">Junicorn Initiative</strong> is a nationwide movement pioneered by ISF to cultivate &apos;Junior Unicorns&apos; - young student innovators, school inventors, and rural youth who demonstrate ingenuity in solving everyday challenges in their local communities.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#4f554f] sm:text-[15px]">
                  At Dandakaranya, Junicorn places particular emphasis on indigenous and tribal youth from districts across Odisha and neighboring states, providing them the formal stage, presentation coaching, and industry linkages normally confined to metropolitan premier institutes.
                </p>

                <div className="mt-8 divide-y divide-[#d8d0c4] border-y border-[#d8d0c4]">
                  <div className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ad4e2c]">Curated Pitch Stage</span>
                    <p className="text-xs leading-5 text-[#454943]">
                      On Day 1 (Friday 18 Dec, 2:30–3:30 PM), selected Tribal &amp; Rural Junicorn teams will pitch before a panel of angels and sector leaders.
                    </p>
                  </div>
                  <div className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#276b55]">Incubation Bridge</span>
                    <p className="text-xs leading-5 text-[#454943]">
                      Top projects receive incubation facilitation and advisory support in association with IncubateX and GIET University Incubation Center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid border-t border-white/10 bg-[#113c30] text-white sm:grid-cols-2 lg:grid-cols-4">
              {teamBenefits.map((benefit, index) => (
                <div key={benefit} className="flex gap-3 border-b border-white/10 px-6 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="font-serif text-sm font-bold text-[#e8ae80]">0{index + 1}</span>
                  <p className="text-xs leading-5 text-white/85">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="startup-reveal border-b border-[#d8d0c2] bg-[#f2ede3] py-20 sm:py-24" aria-labelledby="sectors-heading">
        <Container size="wide">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-serif text-base font-bold text-[#1c6651]">02</span>
              <span className="h-px w-6 bg-[#cfc5b6]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#706a61]">Startup Portfolio</span>
            </div>
            <h2 id="sectors-heading" className="max-w-2xl font-serif text-3xl font-black leading-[1.1] tracking-tight text-[#1b1b18] sm:text-4xl lg:text-[2.75rem]">
              Nine sectors.{" "}
              <span className="text-[#24634f]">One innovation ecosystem.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-[#625e56] sm:text-[15px]">
              Startups with active prototypes, MVPs, or operational traction in these nine official domains are invited to exhibit. Explore each sector to review its complete focus areas.
            </p>
          </div>

          <StartupVerticalsGrid />
        </Container>
      </section>

      <section className="startup-reveal border-b border-[#e0d8ca] bg-[#fcfbf8] py-20 sm:py-24" aria-labelledby="showcase-heading">
        <Container size="default">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-serif text-base font-bold text-[#9a7022]">03</span>
              <span className="h-px w-6 bg-[#d8cfc1]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7a746b]">Showcase Arena</span>
            </div>
            <h2 id="showcase-heading" className="max-w-2xl font-serif text-3xl font-black leading-[1.1] tracking-tight text-[#1b1b18] sm:text-4xl lg:text-[2.75rem]">
              Built for ideas people can{" "}
              <span className="text-[#9a7022]">see, question and test.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-[#656158] sm:text-[15px]">
              An energetic, purpose-built exhibition arena inside the GIET campus where founders present physical prototypes, software demonstrations, and native produce.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[30px] border border-[#d8d0c3] bg-[#112d24] shadow-[0_24px_70px_rgba(30,38,31,0.12)] lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-[360px] lg:min-h-[590px]">
              <Image
                src="/images/startup-stage-backdrop.jpg"
                alt="Startup founders presenting innovations on the summit stage"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c261e]/85 via-transparent to-black/10" />
              <div className="absolute inset-x-7 bottom-7 sm:inset-x-10 sm:bottom-10">
                <Presentation className="h-7 w-7 text-[#edb98f]" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-4 max-w-sm font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                  From live demonstrations to direct investor conversations.
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/12 px-7 py-3 text-white sm:px-10 lg:px-12">
              {showcaseFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="group grid gap-4 py-8 sm:grid-cols-[3.25rem_1fr] sm:py-10">
                    <div>
                      <span className="font-serif text-sm font-bold text-[#e8ae80]">{feature.number}</span>
                      <Icon className="mt-3 h-5 w-5 text-white/75 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">{feature.title}</h3>
                      <p className="mt-3 text-xs leading-6 text-white/68 sm:text-sm">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 border-l-2 border-[#b9862f] bg-[#f7f1e5] px-5 py-5 text-[#614b21] sm:px-6">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#9a7022]" aria-hidden="true" />
            <p className="text-xs leading-6 sm:text-sm">
              <strong className="font-bold text-[#493716]">Official Application Notice:</strong> Formal selection criteria, booth dimension options, and evaluation panels will be announced when the registration portal opens. The event does not guarantee specific funding amounts; funding discussions occur directly between founders and participating investors.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
