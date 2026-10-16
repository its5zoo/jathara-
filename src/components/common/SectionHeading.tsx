import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
  action,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16 text-center max-w-3xl mx-auto",
        className
      )}
    >

      <div>
        <h2
          className={cn(
            "text-2.5xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-black tracking-tight leading-[1.15]",
            isDark ? "text-white" : "text-[#1c1917]"
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={cn(
              "mt-3.5 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto",
              isDark ? "text-[#d6d0c7]" : "text-[#57534e]"
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Elegant Centered Design Accent Divider */}
        <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
          <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
          <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
        </div>

        {action && (
          <div className="mt-6 flex justify-center">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
