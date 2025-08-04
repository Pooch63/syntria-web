"use client";
import React from "react";
import TextImage from "./effects/text-image";
import { TextCarousel, UnderlineOnView } from "./effects/texts";
import SlideUpOnScroll from "./effects/slide-up-on-scroll";

import { Brain, BookOpenText, BarChart4, Stethoscope } from "lucide-react";
import EEGWaveform from "@/components/eeg";

const sections = [
  {
    title: "Clinician-Supported Design",
    text: "Personalized implementation and support ensures products are integrated effectively in care settings - ensuring seamless integration into workflow.",
    icon: Brain,
    gradient: "from-ltrans to-dark-bg",
    reverse: false,
  },
  {
    title: "Rigorous Expert Review",
    text: "All products undergo multidisciplinary clinical, psychological, and technical review. We specialize in identifying and operationalizing clinically validated tools through evidence-based product deployment.",
    icon: BookOpenText,
    gradient: "from-emerald-400 via-green-500 to-lime-400",
    reverse: true,
  },
  {
    title: "Profitable and Scalable Business Model",
    text: "Consistently profitable sales process creating a large user base with high impact.",
    icon: BarChart4,
    gradient: "from-lime-400 via-green-400 to-emerald-500",
    reverse: false,
  },
  {
    title: "Deep Digital Health & Engagement Expertise",
    text: "Our team brings a unique blend of digital mental health, behavior science, and early-stage growth strategy.",
    icon: Stethoscope,
    gradient: "from-lime-400 via-green-400 to-emerald-500",
    reverse: true,
  },
];
// Professional Feature Card Component
function FeatureCard(
  { title, text, icon: Icon, index }: {
    title: string;
    text: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    index: number;
  }) {
    return (
      <SlideUpOnScroll className="transition-all duration-700 ease-out" style={{ transitionDelay: `${index * 150}ms` }}>
        <div className="h-full bg-hcontrast backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 group hover:border-purple-200">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        </div>
      </SlideUpOnScroll>
    );
  }


export default function Landing() {
  return (
    <main className="min-h-screen bg-light-bg font-sans">
      <title>Syntria</title>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="montserrat text-3xl md:text-6xl mb-6 drop-shadow-lg text-gray-500 text-balance">
          The Home for Evidence-Based Cognitive Tools
        </h1>
        <div className="w-[100%] hidden md:block">
          <TextCarousel
            messages={[
              "Cutting-Edge AI Solutions",
              "Mental Health Treatments that Stick",
              "Cognition like Never Before",
              "Syntria",
            ]}
          />
        </div>
        <div className="w-[100%] block md:hidden">
          <p className="text-center text-3xl text-gray-800">Syntria</p>
        </div>
        <h4 className="w-[90%] md:w-[40%] text-md text-gray-500">
          Syntria is a startup turning mental health innovations into accessible
          experiences. Our first product, Skylar’s Run, is a video game powered
          by EEG technology where players advance by focusing—no hands required.
        </h4>
        <a
          href="/skylars-run"
          className="mt-4 px-8 py-3 bg-dark-bg text-hcontrast rounded-full font-semibold shadow-lg hover:bg-dtext transition"
        >
          Learn More
        </a>
{/* 
        <img
          src="/images/brain-body.jpg"
          alt="Giant Display Image"
          className="mt-12 w-full max-w-3xl mx-auto rounded-lg shadow-xl"
        /> */}
      </section>

      {/* EEG Waveform Animation */}
      <section className="pt-10">
        <div className="max-w-[80%] mx-auto">
          <EEGWaveform updateSpeed={90} subheader="Our first product, Skylar's Run, uses real-time brainwave monitoring." />
        </div>
      </section>

      <section className="relative pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SlideUpOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Syntria
              </h2>
              <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto">
                Our comprehensive approach combines clinical expertise with cutting-edge technology.
              </p>
            </div>
          </SlideUpOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {sections.map((section, index) => (
              <FeatureCard key={index} {...section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skylar's Run CTA Section */}
      <section className="bg-gradient-to-br py-20 px-6 text-center text-gray-800">
        <UnderlineOnView containerClassName="mb-3" underlineClassName="bg-gradient-to-r from-dark-bg to-rtrans" className="text-4xl md:text-5xl font-bold mb-6 text-dark-bg drop-shadow-md" text="Discover Skylar's Run" />
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Our first product combines engaging experiences with clinically backed
          strategies to boost cognitive function.
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
