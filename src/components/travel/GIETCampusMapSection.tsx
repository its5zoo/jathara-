"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Phone, 
  Compass, 
  Route,
  Building,
  Train,
  Car,
  Sparkles
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { EVENT_METADATA } from "@/data/eventData";

export function GIETCampusMapSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "GIET University Campus, Goboriguda, Po-Kharling, Gunupur, Dist-Rayagada, Odisha - 765022, India";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=GIET+University+Gunupur+Odisha+765022";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#f7f4ec] border-b border-[#e6dfd1] relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#e87042]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" 
        aria-hidden="true" 
      />

      <Container size="wide">
        <SectionHeading
          title="Campus Location & Transit Navigation"
          subtitle="GIET University is situated in the scenic Vansadhara Valley of Gunupur along NH-326. Explore the venue campus overview and launch direct turn-by-turn navigation."
        />

        {/* Unified Luxury Executive Venue Master Card */}
        <div className="bg-white rounded-3xl border border-[#e6dfd1] shadow-sm overflow-hidden mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Panel: Verified Venue Details & Transit Matrix */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e87042]/10 text-[#c25022] text-[11px] font-bold uppercase tracking-wider">
                    <Building className="w-3.5 h-3.5" />
                    Official Summit Venue
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#78716c]">
                    PIN: 765022 • Gunupur, Odisha
                  </span>
                </div>

                {/* Venue Heading */}
                <div>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight leading-tight">
                    GIET University Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534e] mt-1.5 leading-relaxed font-normal">
                    South Odisha&apos;s premier 100-acre academic &amp; innovation campus nestled in the scenic Vansadhara Valley along NH-326, equipped with central convention auditoriums, advanced incubation centers, and executive guest suites.
                  </p>
                </div>

                {/* Verified Address Box */}
                <div className="p-4 rounded-2xl bg-[#faf8f4] border border-[#ede7db] space-y-2.5">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-[#e87042] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#292524] leading-relaxed font-medium">
                      {fullAddress}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#c25022] hover:text-[#a83e18] transition-colors cursor-pointer focus-visible:outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Verified Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Transit Gateways Matrix */}
                <div className="space-y-2">
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#78716c]">
                    Distance From Key Transit Gateways
                  </h4>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede7db] flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-[#78716c] font-medium text-[11px]">
                        <Train className="w-3 h-3 text-[#e87042]" />
                        <span>Gunupur Station</span>
                      </div>
                      <p className="font-serif font-bold text-[#1c1917] text-xs sm:text-sm mt-1">
                        4.5 km <span className="font-sans font-normal text-[10px] text-[#78716c]">(10m)</span>
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede7db] flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-[#78716c] font-medium text-[11px]">
                        <Car className="w-3 h-3 text-[#d68c45]" />
                        <span>Gunupur Bus Stand</span>
                      </div>
                      <p className="font-serif font-bold text-[#1c1917] text-xs sm:text-sm mt-1">
                        3.8 km <span className="font-sans font-normal text-[10px] text-[#78716c]">(8m)</span>
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede7db] flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-[#78716c] font-medium text-[11px]">
                        <Train className="w-3 h-3 text-emerald-600" />
                        <span>Rayagada Junction</span>
                      </div>
                      <p className="font-serif font-bold text-[#1c1917] text-xs sm:text-sm mt-1">
                        72 km <span className="font-sans font-normal text-[10px] text-[#78716c]">(1h 45m)</span>
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#ede7db] flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 text-[#78716c] font-medium text-[11px]">
                        <Route className="w-3 h-3 text-blue-600" />
                        <span>Palasa Junction</span>
                      </div>
                      <p className="font-serif font-bold text-[#1c1917] text-xs sm:text-sm mt-1">
                        90 km <span className="font-sans font-normal text-[10px] text-[#78716c]">(2h)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action & Helpline Row */}
              <div className="pt-4 border-t border-[#ede7db] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45] text-white text-xs sm:text-sm font-bold shadow-sm hover:opacity-95 transition-all group"
                >
                  <Navigation className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1.5 text-xs text-[#78716c] justify-center sm:justify-start">
                  <span>Helpline:</span>
                  <a
                    href={`tel:${EVENT_METADATA.helplinePhone.replace(/\s+/g, "")}`}
                    className="font-semibold text-[#c25022] hover:underline inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{EVENT_METADATA.helplinePhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel: Scenic Campus Photography & Interactive Navigation Launchpad */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full bg-[#0c0d12] overflow-hidden border-t lg:border-t-0 lg:border-l border-[#e6dfd1]">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to launch live GPS turn-by-turn navigation in Google Maps"
                className="group block relative w-full h-full cursor-pointer focus:outline-none"
              >
                {/* Real High-Resolution Campus Aerial Photography */}
                <Image
                  src="/images/gietu-campus-aerial.jpg"
                  alt="GIET University Campus Aerial View in Vansadhara Valley"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                  priority
                />

                {/* Subtle dark gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Top Corner Badge: Live Campus Radar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-[11px] font-semibold shadow-xs">
                    <Compass className="w-3.5 h-3.5 text-[#e87042]" />
                    <span>Campus Aerial View</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10.5px] font-medium shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live GPS Active</span>
                  </div>
                </div>

                {/* Bottom Floating Glassmorphism Navigation Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-[#0c0d12]/80 hover:bg-[#0c0d12]/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/20 shadow-lg transition-all group-hover:border-[#e87042]/60">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#e87042] shrink-0" />
                          <p className="font-serif font-bold text-sm sm:text-base text-white truncate">
                            GIET University Campus
                          </p>
                        </div>
                        <p className="text-[11px] text-[#ffedd5]/80 mt-0.5 truncate">
                          Vansadhara Valley, Gunupur • GPS: 19.0526° N, 83.8340° E
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-[#e87042] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <Navigation className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Interactive Click prompt */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-[#ffedd5]">
                      <span className="group-hover:text-white transition-colors">
                        Click image to navigate on Google Maps
                      </span>
                      <ExternalLink className="w-3 h-3 text-[#e87042] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
