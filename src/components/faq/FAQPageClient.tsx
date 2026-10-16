"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, HelpCircle, Mail } from "lucide-react";
import { FAQ_ITEMS } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { cn } from "@/lib/utils";

export function FAQPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "General",
    "Programme",
    "Startups & Junicorn",
    "Investors & Delegates",
    "Travel & Stay",
    "Registration",
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Background Image: summit-timetable-display.jpg */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-timetable-display.jpg"
            alt="Startup Jathara Knowledge & Information Hub"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center brightness-95"
          />
          <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-[#fcfbf8] tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#e87042] via-[#f7c89f] to-[#e87042] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#dfd6c4] max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Everything you need to know about the Dandakaranya summit schedule, participation, transit hubs, and registration.
          </p>
        </Container>
      </section>

      {/* Main FAQ Area */}
      <section className="py-20 bg-[#fcfbf8]">
        <Container size="default">
          {/* Search & Filter Controls */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 text-[#7e8d87] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search across all questions and answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#ffffff] border border-[#e6dfd1] rounded-2xl text-sm sm:text-base text-[#161e1b] focus:outline-none focus:ring-2 focus:ring-[#e87042] shadow-xs"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border",
                    selectedCategory === cat
                      ? "bg-[#e87042] text-white border-[#e87042] shadow-xs"
                      : "bg-[#ffffff] text-[#4a5752] border-[#e6dfd1] hover:bg-[#ede7db]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Results */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="bg-[#ffffff] rounded-2xl p-10 text-center border border-[#e6dfd1]">
                <HelpCircle className="w-10 h-10 text-[#7e8d87] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                  No matching questions found
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5752] mt-1 mb-4">
                  Please try a different search phrase or category filter.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Reset FAQ Filter
                </Button>
              </div>
            ) : (
              <FAQAccordion items={filteredFaqs} allowMultiple />
            )}

            {/* Assistance Card */}
            <div className="mt-14 p-8 rounded-3xl bg-[#f7f4ec] border border-[#ede7db] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1c1917]">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5752] mt-1">
                  Contact the International Startup Foundation Secretariat directly.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="md" className="flex-shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                <span>Contact Desk</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

