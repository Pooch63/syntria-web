"use client";
import React, { useState, useEffect } from "react";
import SlideUpOnScroll from "@/effects/slide-up-on-scroll";
import { Header } from "@/effects/texts";

type GraphProps = { title: string; headers: [string, string, string]; data: { title: string; description: string; }[][] };

const sections: {
  id: string;
  title: string;
  paragraph: string;
  graph?: GraphProps;
  bottom: string;
}[] = [
  {
    id: "elderly",
    title: "The Elderly",
    paragraph: "The aging population presents one of the fastest-growing and highest-need markets in healthcare. With cognitive decline affecting millions and traditional interventions often proving expensive or ineffective, there's a clear demand for engaging, low-friction solutions that promote longevity and independence. Skylar’s Run offers measurable cognitive benefits—such as improved executive function and delayed onset of decline—that can reduce long-term healthcare costs and improve quality of life. This positions the product not only as a wellness tool, but also as a preventative healthcare solution that aligns with trends in value-based care, opening doors to senior living facilities, Medicare-funded programs, and family caregivers seeking proactive tools.",
    graph: {
      title: "Anxiety and Depression Cost Savings Through Skylar’s Run",
      headers: [
        'Reduced Behavioral & Crisis Staffing',
        'Stronger Clinical Care',
        'Healthier Environment',
      ],
      data: [
        [
          { title: 'Alternating Attention', description: 'Fewer staff required for task/room transitions.' },
          { title: 'Divided Attention', description: 'Reduced task simplification support' },
          { title: 'Cognitive Inhibition', description: 'Reduce time spent managing spirals' },
          { title: 'Novelty Inhibition', description: 'Lower anxiety spikes due to new routines, settings, or staff transitions' },
        ],
        [
          { title: 'Focused Attention', description: 'Reduced time lost in redirection, task initiation' },
          { title: 'Sustained Attention', description: 'More engaged in external settings' },
          { title: 'Motivational Inhibition', description: 'Higher engagement in responsibilities' },
          { title: 'Inner Voice', description: 'Decreased use of poor self-talk' },
        ],
        [
          { title: 'Selective Attention', description: 'Stronger ability to thrive in chaotic environments' },
          { title: 'Behavioral Inhibition', description: 'Sparser outbursts' },
          { title: 'Interference Control', description: 'Fewer breakdowns in group settings' },
          { title: 'Delayed Gratification', description: 'Higher patience' },
          { title: 'Self-Regulation', description: 'Lower chance of anxiety attacks, mood crashes' },
        ]
      ],
    },
    bottom: "$9.98B market",
  },
  {
    id: "mental-health",
    title: "Mental Health Patients",
    paragraph: "Mental health represents a $5.2B+ industry in the U.S. alone, yet scalable, evidence-backed tools for attention, depression, and anxiety remain limited. Skylar’s Run demonstrates powerful outcomes in this space: 75% attention and behavior improvement, 50% reduction in ADHD classification, and significant impact on mood-related disorders. These numbers position the product as a cost-effective complement to therapy and medication, especially appealing to schools, therapists, and digital mental health providers looking to expand their toolkit. The rising prevalence of ADHD and anxiety—especially post-COVID—makes this not just a niche tool, but a timely platform with massive relevance.",
    bottom: "$5.2B market",
  },
  {
    id: "athletes",
    title: "Athletes",
    paragraph: "Marshmallow",
    bottom: "$11.6B market",
  },
  {
    id: "pediatrics",
    title: "Pediatric Practices",
    paragraph: "Nebula",
    bottom: "$1.13B market",
  },
];

const colors = ["#86e2d5", "#3dc3af", "#159483"];

const AudienceGraph = ({ headers, data, title }: GraphProps) => {
  return (
    <>
      <p className="text-lg font-semibold text-dtext mb-4">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {headers.map((header, idx) => (
          <div key={idx} className="rounded-md p-4" style={{ backgroundColor: colors[idx] }}>
            <h2 className="text-lg font-semibold text-white mb-4">{header}</h2>
            <ul className="space-y-2 text-sm text-white">
              {data[idx].map((point, idx2) => (
                <li key={idx2} className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>{point.title}: {point.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default function AudienceOverview() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [allowOverflow, setAllowOverflow] = useState<string | null>(null);

  useEffect(() => {
    if (openSection) {
      const timeout = setTimeout(() => setAllowOverflow(openSection), 500); // match transition duration
      return () => clearTimeout(timeout);
    } else {
      setAllowOverflow(null);
    }
  }, [openSection]);


  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const anchor = window.location.hash.slice(1).toLowerCase();
    const match = sections.find((section) => section.id === anchor);
    console.log(anchor, match);
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
          <div
            key={section.id}
            className="border-2 border-ltrans rounded-xl overflow-y-auto shadow-md"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full text-left px-6 py-4 bg-gradient-to-r from-ltrans to-rtrans text-light-bg font-semibold text-xl hover:brightness-110 transition-all focus:outline-none"
              id={section.id}
            >
              {section.title}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${
                openSection === section.id ? "max-h-[500px] p-6" : "max-h-0 p-0"
              } ${
                allowOverflow === section.id ? "overflow-auto" : "overflow-hidden"
              } bg-white`}
            >
              {openSection === section.id && (
                <SlideUpOnScroll>
                  <div className="space-y-4">
                    {section.graph != null && (<>
                      <AudienceGraph {...section.graph} />
                      <div className="w-full h-2 bg-gradient-to-r from-rtrans via-dark-bg to-ltrans rounded-full"></div>
                    </>)}

                    
                    <p className="text-ltext text-md">
                      {section.paragraph}
                    </p>

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
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }
      `}</style>
    </main>
  );
}
