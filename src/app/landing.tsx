"use client";
import React from "react";
import TextImage from "./effects/text-image";
import { TextCarousel } from "./effects/texts";

const sections = [
  {
    title: "Clinician-Supported Design",
    text: "Personalized implementation and support ensures products are integrated effectively in care settings - ensuring seamless integration into workflow.",
    image: "/images/brain.png",
    gradient: "from-ltrans to-dark-bg",
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
  return (
    <main className="min-h-screen bg-light-bg font-sans">
      <title>Syntria</title>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="montserrat text-3xl md:text-6xl mb-6 drop-shadow-lg text-gray-500 text-balance">The Home for Evidence-Based Cognitive Tools
        </h1>
        <div className="w-[100%] hidden md:block">
          <TextCarousel messages={[
            "Cutting-Edge AI Solutions",
            "Mental Health Treatments that Stick",
            "Cognition like Never Before",
            "Syntria"
          ]}/>
        </div>
        <div className="w-[100%] block md:hidden">
          <p className="text-center text-3xl text-gray-800">Syntria</p>
        </div>
        <h4 className="w-[90%] md:w-[40%] text-lg text-gray-500">
          Syntria is a startup turning mental health innovations into accessible experiences.
          Our first product, Skylar’s Run, is a video game powered by EEG technology where players advance by focusing—no hands required.
        </h4>
        <a
          href="/skylars-run"
          className="mt-4 px-8 py-3 bg-dark-bg text-hcontrast rounded-full font-semibold shadow-lg hover:bg-dtext transition"
        >
          Learn More
        </a>

        <img
          src="/images/brain-body.jpg"
          alt="Giant Display Image"
          className="mt-12 w-full max-w-3xl mx-auto rounded-lg shadow-xl"
        />
      </section>

      {/* Info Sections */}
      <div className="space-y-10 py-20">
        {sections.map((section, idx) => (
          <TextImage key={"Section " + idx} {...section} />
        ))}
      </div>

      {/* Skylar's Run CTA Section */}
      <section className="bg-gradient-to-br py-20 px-6 text-center text-gray-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-bg drop-shadow-md">Discover Skylar&apos;s Run</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Our first product combines engaging experiences with clinically backed strategies to boost cognitive function.
        </p>
        <a
          href="/skylars-run"
          className="inline-block mt-4 px-8 py-4 bg-ltrans text-white rounded-full font-semibold shadow-md hover:bg-rtrans transition"
        >
          Try Skylar&apos;s Run Now
        </a>
      </section>
    </main>
  );
} 