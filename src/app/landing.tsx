"use client";
import React, { useRef } from "react";

const sections = [
  {
    title: "Clinician-Supported Design",
    text: "Personalized implementation and support ensures products are integrated effectively in care settings - ensuring seamless integration into workflow.",
    image: "/images/brain.png",
    gradient: "from-green-400 via-green-500 to-emerald-500",
    reverse: false,
  },
  {
    title: "Rigorous Expert Review",
    text: "All products undergo multidisciplinary clinical, psychological, and technical review. We specialize in identifying and operationalizing clinically validated tools through evidence-based product deployment.",
    image: "/images/expert-review.jpg",
    gradient: "from-emerald-400 via-green-500 to-lime-400",
    reverse: true,
  },
  {
    title: "Profitable and Scalable Business Model",
    text: "Consistently profitable sales process creating a large user base with high impact.",
    image: "/images/business-growth.jpg",
    gradient: "from-lime-400 via-green-400 to-emerald-500",
    reverse: false,
  },
  {
    title: "Deep Digital Health & Engagement Expertise",
    text: "Our team brings a unique blend of digital mental health, behavior science, and early-stage growth strategy.",
    image: "/images/jennifer.png",
    gradient: "from-lime-400 via-green-400 to-emerald-500",
    reverse: true
  }
];

export default function Landing() {
  // Testimonials data
  // Remove testimonials data, scrollRef, scrollByCard, and the testimonials section JSX

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section id="qui" className="flex flex-col items-center justify-center py-24 px-4 text-center bg-gradient-to-br from-green-500 via-emerald-500 to-lime-400">
        <h1 className="montserrat text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-white">Syntria</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 opacity-90 text-white">
        Shaping the Future of Improving Cognitive Skills
        </p>
        <a
          href="/try-it-now"
          className="mt-4 px-8 py-3 bg-white text-green-700 rounded-full font-semibold shadow-lg hover:bg-green-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Info Sections */}
      <div className="space-y-20 py-20">
        {sections.map((section, idx) => (
          <section
            key={section.title}
            className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""} items-center max-w-6xl mx-auto px-4 md:space-x-12 md:space-x-reverse-12`}
          >
            {/* Text Side */}
            <div className="flex-1 z-10">
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${section.gradient} shadow-xl mb-6 md:mb-0`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow">{section.title}</h2>
                <p className="text-lg md:text-xl opacity-90 text-white">{section.text}</p>
              </div>
            </div>
            {/* Image Side */}
            <div className="flex-1 flex justify-center items-center min-h-[300px]">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Subtle shadow/tint background */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-200/40 shadow-2xl blur-md" />
                <img
                  src={section.image}
                  alt={section.title}
                  className="relative w-56 h-56 md:w-72 md:h-72 object-contain opacity-95 drop-shadow-xl z-10"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Skylar's Run CTA Section */}
      <section className="bg-gradient-to-br from-green-100 via-emerald-100 to-lime-100 py-20 px-6 text-center text-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-500 drop-shadow-md">Discover Skylar's Run</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
          Our first product combines engaging experiences with clinically backed strategies to boost cognitive function.
        </p>
        <a
          href="/skylars-run"
          className="inline-block mt-4 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold shadow-md hover:bg-emerald-700 transition"
        >
          Try Skylar's Run
        </a>
      </section>
    </main>
  );
} 