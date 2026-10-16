import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Plane, Train, Hotel, ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function VenueBridgeCard() {
  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="wide">
        <div className="relative rounded-3xl overflow-hidden border border-[#e8dfd3] bg-[#ffffff] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Campus Photo with soft warm overlay */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] overflow-hidden">
              <Image
                src="/images/gietu-campus-aerial.jpg"
                alt="GIET University Green Campus Aerial View"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141620]/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#f7ede2] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e87042]" />
                  <span>Gunupur, Rayagada, Odisha</span>
                </span>
                <p className="font-serif font-bold text-lg sm:text-xl drop-shadow-sm">
                  GIET University Campus
                </p>
                <p className="text-xs text-[#e8e4df] drop-shadow-sm">
                  57-Acre Serene Green Valley Campus
                </p>
              </div>
            </div>

            {/* Concise Information & Direct Link */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#e87042] block mb-2">
                  Campus &amp; Travel
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1c1917] leading-tight">
                  Join Us in the Serene Hills of Dandakaranya
                </h3>
                <p className="text-sm sm:text-base text-[#57534e] mt-3 leading-relaxed">
                  The summit is hosted at GIET University — a premier research institution established in 1997. Find all travel routes, pick-up points, and accommodation options in our dedicated guide.
                </p>

                {/* 3 Quick Transit Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
                  <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8dfd3] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#ffedd5] text-[#e87042] flex items-center justify-center shrink-0">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1c1917]">Airports</div>
                      <div className="text-[11px] text-[#78716c] mt-0.5 leading-tight">
                        Visakhapatnam (VTZ) &amp; Bhubaneswar
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8dfd3] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#fef3c7] text-[#c99b42] flex items-center justify-center shrink-0">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1c1917]">Railways</div>
                      <div className="text-[11px] text-[#78716c] mt-0.5 leading-tight">
                        Rayagada (75km) &amp; Gunupur
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8dfd3] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#ffedd5] text-[#e87042] flex items-center justify-center shrink-0">
                      <Hotel className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1c1917]">Stay</div>
                      <div className="text-[11px] text-[#78716c] mt-0.5 leading-tight">
                        Campus Guest Houses &amp; Hotels
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#e8dfd3] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#78716c]">
                  Detailed transit maps, cab helplines &amp; room booking are ready.
                </span>
                <Link
                  href="/venue"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1c1917] hover:bg-[#2e2c29] text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
                >
                  <span>Explore Venue &amp; Travel Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
