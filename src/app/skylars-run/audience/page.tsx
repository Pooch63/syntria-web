"use client";
import React, { useState, useEffect } from "react";
import SlideUpOnScroll from "../../effects/slide-up-on-scroll";
import { Header } from "../../effects/texts";

const sections = [
  {
    id: "elderly",
    title: "The Elderly",
    content: "Banana",
    bottom: "$9.98B market"
  },
  { id: "mental-health", title: "Mental Health Patients", content: "Spaceship", bottom: "$5.2B market" },
  { id: "athletes", title: "Athletes", content: "Marshmallow", bottom: "$11.6B market" },
  { id: "pediatrics", title: "Pediatric Practices", content: "Nebula", bottom: "$1.13B market" },
];

export default function AudienceOverview() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const anchor = window.location.hash.slice(1).toLowerCase();
    const match = sections.find(section => section.id === anchor);
    console.log(anchor, match)
    if (match) setOpenSection(match.id);
  }, []);

  return (
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans">
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-12 text-center">
        <Header text="Who Skylar's Run Is For" />
        <p className="text-xl max-w-3xl mx-auto opacity-90 text-ltext mb-12">
          Click each section to discover more.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-10 space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border-2 border-ltrans rounded-xl overflow-hidden shadow-md">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full text-left px-6 py-4 bg-gradient-to-r from-ltrans to-rtrans text-light-bg font-semibold text-xl hover:brightness-110 transition-all focus:outline-none"
              id={section.id}
            >
              {section.title}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden bg-white ${openSection === section.id ? 'max-h-[500px] p-6' : 'max-h-0 p-0'}`}
            >
              {openSection === section.id && (
                <SlideUpOnScroll>
                  <div className="space-y-4">
                    <p className="text-ltext text-lg italic">{section.content}</p>
                    <div className="w-full h-2 bg-gradient-to-r from-rtrans via-dark-bg to-ltrans rounded-full"></div>
                    <div className="w-full h-32 bg-ltrans/10 rounded-3xl blur-sm shadow-inner animate-[wiggle_1s_ease-in-out_infinite]" />
                    <div className="text-sm opacity-50">{section.bottom}</div>
                  </div>
                </SlideUpOnScroll>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
      `}</style>
    </main>
  );
}
