"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Calendar, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/data/eventData";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { Container } from "../common/Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-[#e8dfd3] shadow-[0_2px_12px_rgba(28,25,23,0.05)] py-2 sm:py-2.5"
          : "bg-[#faf7f2] border-[#e8dfd3] py-2.5 sm:py-3.5"
      )}
    >
      <Container size="wide" className="px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* ZONE 1 (LEFT): Authentic Event Identity */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-2 min-[400px]:gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] rounded-xl shrink-0"
              aria-label="ISF Startup Jathara 2026 Homepage"
            >
              {/* Official ISF Mark Container */}
              <div className="w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-2xs border border-[#e8dfd3] transition-transform duration-200 group-hover:scale-105 shrink-0">
                <Image
                  src="/logos/isf-logo.webp"
                  alt="International Startup Foundation (ISF) Logo"
                  width={36}
                  height={36}
                  className="max-h-6 max-w-6 min-[380px]:max-h-7 min-[380px]:max-w-7 sm:max-h-8 sm:max-w-8 w-auto h-auto object-contain"
                  priority
                />
              </div>

              {/* Event Typography Lockup */}
              <div className="flex flex-col text-left shrink-0">
                <span className="font-serif font-black text-xs min-[400px]:text-sm sm:text-base lg:text-[16px] text-[#1c1917] tracking-tight leading-tight group-hover:text-[#e87042] transition-colors whitespace-nowrap">
                  ISF STARTUP JATHARA
                </span>
                <span className="text-[9px] min-[400px]:text-[10px] sm:text-[11px] font-bold text-[#e87042] tracking-wider uppercase mt-0.5 flex items-center gap-1 sm:gap-1.5 leading-none whitespace-nowrap">
                  <span>Dandakaranya 2026</span>
                  <span className="text-[#8c671b] font-medium normal-case hidden 2xl:inline shrink-0">
                    • 18–20 Dec
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* ZONE 2 (CENTER): Primary Desktop Navigation — No overlap, clean responsive gap */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1.5 shrink-0"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-2 2xl:px-2.5 py-1.5 rounded-lg text-xs 2xl:text-[13px] font-semibold transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042]",
                    isActive
                      ? "text-[#1c1917] font-bold bg-[#1c1917]/6 shadow-2xs after:absolute after:bottom-0 after:left-2 after:right-2 2xl:after:left-2.5 2xl:after:right-2.5 after:h-0.5 after:bg-[#e87042] after:rounded-full"
                      : "text-[#57534e] hover:text-[#e87042] hover:bg-[#f5efe6]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="inline-flex items-center gap-1 2xl:gap-1.5">
                    {link.label}
                    {link.badge && (
                      <span
                        className={cn(
                          "text-[8px] 2xl:text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold leading-none",
                          isActive
                            ? "bg-[#e87042] text-white"
                            : "bg-[#ffedd5] text-[#9a3412] border border-[#fed7aa]"
                        )}
                      >
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3 (RIGHT): Action Zone & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Primary Registration Call to Action */}
            <Link
              href="/register"
              className="group inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#e87042] text-white hover:bg-[#d95d2c] shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95 shrink-0 min-h-[36px] sm:min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042]"
              aria-label="Register for ISF Startup Jathara 2026"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 hidden min-[400px]:inline" />
            </Link>

            {/* Mobile / Tablet Navigation Trigger */}
            <MobileNavigation />
          </div>

        </div>
      </Container>
    </header>
  );
}
