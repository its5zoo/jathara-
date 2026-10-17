"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Container } from "../common/Container";
import { EVENT_METADATA } from "@/data/eventData";

export function GIETCampusMapSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "GIET University, Gunupur, Rayagada, Odisha - 765022";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#faf8f4] border-b border-[#e6dfd1]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Content (No button, clean typography) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h2 className="font-serif font-black text-2xl sm:text-3.5xl text-[#1c1917] tracking-tight">
                GIET University Campus, Gunupur
              </h2>
              <p className="text-xs sm:text-sm text-[#57534e] mt-2 leading-relaxed">
                Situated in the scenic Vansadhara Valley along NH-326 in South Odisha. The summit is hosted across the central convention auditoriums and campus facilities.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-[#292524] pt-1">
              <MapPin className="w-4 h-4 text-[#e87042] shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">{fullAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="ml-2.5 text-xs font-semibold text-[#c25022] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <span className="text-emerald-700 font-bold">✓ Copied</span>
                  ) : (
                    "Copy Address"
                  )}
                </button>
              </div>
            </div>

            {/* Nearby Transit: Simple Clean List */}
            <div className="pt-3 border-t border-[#e8dfd3]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#78716c] mb-2">
                Nearby Transit
              </p>
              <ul className="text-xs sm:text-sm text-[#44403c] space-y-1.5">
                <li>• Gunupur Railway Station: <strong className="text-[#1c1917]">4.5 km</strong> (~10 mins)</li>
                <li>• Gunupur Bus Stand: <strong className="text-[#1c1917]">3.8 km</strong> (~8 mins)</li>
                <li>• Rayagada Railway Junction: <strong className="text-[#1c1917]">72 km</strong> (~1h 45m)</li>
                <li>• Palasa Railway Junction: <strong className="text-[#1c1917]">90 km</strong> (~2 hrs)</li>
              </ul>
            </div>

            {/* Helpline (No button needed) */}
            <div className="pt-3 border-t border-[#e8dfd3] text-xs text-[#78716c]">
              <span>Helpline: </span>
              <a
                href={`tel:${EVENT_METADATA.helplinePhone.replace(/\s+/g, "")}`}
                className="font-semibold text-[#c25022] hover:underline"
              >
                {EVENT_METADATA.helplinePhone}
              </a>
            </div>
          </div>

          {/* Right: Clean Google Maps Embed (No buttons, no picture) */}
          <div className="lg:col-span-6">
            <div className="w-full h-[320px] sm:h-[360px] md:h-[390px] rounded-2xl overflow-hidden border border-[#e6dfd1] shadow-sm bg-[#ede7db]">
              <iframe
                title="GIET University Campus Location Map"
                src="https://maps.google.com/maps?q=GIET%20University%2C%20Gunupur%2C%20Odisha%20765022&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
