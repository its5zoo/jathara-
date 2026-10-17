"use client";

import React, { useState } from "react";
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
  Car
} from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { EVENT_METADATA } from "@/data/eventData";

export function GIETCampusMapSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "GIET University Campus, Goboriguda, Po-Kharling, Gunupur, Dist-Rayagada, Odisha - 765022, India";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=GIET+University+Gunupur+Odisha+765022";
  const googleMapsPlaceUrl = "https://www.google.com/maps/search/?api=1&query=GIET+University+Gunupur+Odisha+765022";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
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
          title="Interactive Campus Location & Navigation"
          subtitle="GIET University is situated in the scenic Vansadhara Valley of Gunupur along NH-326. Explore the live interactive map and navigate directly to the summit venue."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-10 items-stretch">
          {/* Left Column: Interactive Map Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#e6dfd1] bg-white shadow-sm flex flex-col">
              {/* Top Map Header Bar */}
              <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-xs border-b border-[#e6dfd1] flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#f7f4ec] text-[#e87042] border border-[#dfd6c4] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4 text-[#c25022]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1c1917] leading-tight">
                      GIET University Campus Map
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#78716c] leading-tight mt-0.5">
                      Gunupur, Rayagada • GPS: 19.0526° N, 83.8340° E
                    </p>
                  </div>
                </div>

                <a
                  href={googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#e87042]/10 text-[#c25022] border border-[#e87042]/30 text-[11px] font-semibold transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Live Interactive Map Frame */}
              <div className="relative flex-1 w-full bg-[#f4ede2] overflow-hidden">
                <iframe
                  title="GIET University Gunupur Live Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=83.820%2C19.043%2C83.848%2C19.062&layer=mapnik&marker=19.0526%2C83.8340"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-10">
                  <div className="bg-[#1c1917]/90 text-white backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/20 shadow-md flex items-center gap-2.5 max-w-sm">
                    <div className="w-7 h-7 rounded-lg bg-[#e87042] flex items-center justify-center shrink-0 text-white shadow-2xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold text-white truncate">
                        GIET University Main Campus
                      </p>
                      <p className="text-[10px] text-white/80 truncate">
                        Goboriguda, Po-Kharling, Gunupur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Venue & Direct Navigation Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6dfd1] shadow-xs flex flex-col justify-between h-full space-y-5">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e87042]/10 text-[#c25022] text-[11px] font-bold uppercase tracking-wider">
                    <Building className="w-3.5 h-3.5" />
                    Official Summit Venue
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#78716c]">
                    PIN: 765022
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1c1917] leading-tight">
                  GIET University Campus
                </h3>
                <p className="text-xs sm:text-sm text-[#57534e] mt-1 leading-relaxed">
                  South Odisha&apos;s premier university campus featuring central auditoriums, incubation zones, and on-campus guest suites.
                </p>

                {/* Verified Address Box */}
                <div className="mt-4 p-4 rounded-2xl bg-[#faf8f4] border border-[#ede7db] space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <MapPin className="w-4 h-4 text-[#e87042] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#292524] leading-relaxed font-medium">
                        {fullAddress}
                      </p>
                    </div>
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

                {/* Key Transit Gateways to Campus */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#78716c]">
                    Distance From Transit Points
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

              {/* Direct Route Navigation Actions */}
              <div className="pt-4 border-t border-[#ede7db] space-y-2.5">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45] text-white text-xs sm:text-sm font-bold shadow-sm hover:opacity-95 transition-opacity"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs text-[#78716c] pt-1">
                  <span>Helpline for delegates:</span>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
