import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";

export function GatewayCTA() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0d281e] via-[#103327] to-[#081a14] text-[#fcfbf8] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c25e38]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#256f57]/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b5341] border border-[#256f57]/60 text-xs text-[#d6b25e] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ISF Startup Jathara @ Dandakaranya</span>
        </div>

        <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl text-[#fcfbf8] tracking-tight max-w-2xl mx-auto leading-tight">
          Be Part of India&apos;s Grassroots Innovation Gathering
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#c8d1cd] max-w-xl mx-auto leading-relaxed">
          Whether you are building a startup, investing in emerging talent, or joining as a delegate, registrations are open for December 2026.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button
            href="/register"
            variant="gold"
            size="lg"
            className="font-bold text-sm sm:text-base shadow-lg"
          >
            <span>Register for Summit</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            href="/programme"
            variant="outline"
            size="lg"
            className="text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#143e30] hover:border-[#dfd6c4] text-sm sm:text-base"
          >
            <span>Explore 3-Day Programme</span>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#7e8d87]">
          <span>18–20 December 2026</span>
          <span>•</span>
          <span>GIET University, Gunupur, Odisha</span>
          <span>•</span>
          <span>ISF • GIET • IncubateX</span>
        </div>
      </Container>
    </section>
  );
}
