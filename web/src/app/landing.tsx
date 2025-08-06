"use client";
import React, { useEffect, useRef } from "react";
import { TextCarousel, UnderlineOnView } from "@/effects/texts";
import SlideUpOnScroll from "@/effects/slide-up-on-scroll";
import FeatureCard from "@/effects/feature";

import { Brain, BookOpenText, BarChart4, Stethoscope, ArrowUp, ArrowDown } from "lucide-react";

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

function generateBorderClasses(direction: 'full' | 'tl' | 'tr' | 'bl' | 'br', color: string): string {
  if (direction == "full") {
    return `border-${color}`;
  }
  if (direction == 'tl') {
    return generateBorderClasses("full", color) + ` md:border-r-1 md:border-b-1`;
  }
  if (direction == 'tr') {
    return generateBorderClasses("full", color) + ` md:border-l-1 md:border-b-1`;
  }
  if (direction == 'bl') {
    return generateBorderClasses("full", color) + ` md:border-t-1 md:border-r-1`;
  }
  if (direction == 'br') {
    return generateBorderClasses("full", color) + ` md:border-t-1 md:border-l-1`;
  }
  return "unknown";
}
function LandingGrid() {
  return (
    <div className="relative">
      <svg
        className="absolute"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          rx="8"
          ry="8"
          className="card-border-animation-line"
          height="100%"
          width="100%"
          stroke-linejoin="round"
        />
      </svg>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Improvements */}
          <SlideUpOnScroll>
            <div className="">
              <a 
                href="/skylars-run/audience/sports" 
                className={`group block p-4 hover:bg-gray-50 transition-all duration-300 ${generateBorderClasses("tl", "dark-bg")}`}
              >
                <div className="flex items-center space-x-2">
                  <ArrowUp className="w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                  <span className="text-lg font-medium text-dtext">
                    Sports Performance
                  </span>
                </div>
              </a>

              <a 
                href="/skylars-run/audience/pediatrics" 
                className={`group block p-4 hover:bg-gray-50 transition-all duration-300 ${generateBorderClasses("bl", "dark-bg")}`}
              >
                <div className="flex items-center space-x-2">
                  <ArrowUp className="w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                  <span className="text-lg font-medium text-dtext">
                    School Potential
                  </span>
                </div>
              </a>
            </div>
          </SlideUpOnScroll>

          {/* Right Column - Reductions */}
          <SlideUpOnScroll>
            <div className="text-left md:text-right">
              <a 
                href="/skylars-run/audience/elderly"
                className={`group block p-4 hover:bg-gray-50 transition-all duration-300 ${generateBorderClasses("tr", "dark-bg")}`}
              >
                <div className="flex items-center justify-end space-x-2">
                  <ArrowDown className="md:hidden w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                  <span className="text-lg font-medium text-dtext">
                    Risk of Falling
                  </span>
                  <ArrowDown className="hidden md:block w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>

              <a 
                href="/skylars-run/audience/mental-health" 
                className={`group block p-4 hover:bg-gray-50 transition-all duration-300 ${generateBorderClasses("br", "dark-bg")}`}
              >
                <div className="flex items-center justify-end space-x-2">
                  <ArrowDown className="md:hidden w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                  <span className="text-lg font-medium text-dtext">
                    Attention Difficulties
                  </span>
                  <ArrowDown className="hidden md:block w-5 h-5 text-dtext group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
            </div>
          </SlideUpOnScroll>
        </div>
      </div>
    </div>
  );
}

function ParallaxHeroImage() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5; // Image moves at 50% of scroll speed
        imageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/images/brain.jpg"
          alt="Brain technology visualization"
          className="w-full h-[120%] object-cover object-center absolute top-[-10%]"
          style={{ willChange: 'transform' }}
        />
        {/* Optional overlay for better text readability if needed */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-light-bg font-sans">
      <title>Syntria</title>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-10 px-4 text-center">
        <h1 className="text-3xl md:text-6xl mb-6 drop-shadow-lg text-dtext text-balance">
          Unlock Human Potential
        </h1>
        <div className="w-[100%] hidden md:block">
          <TextCarousel
            messages={[
              "Cutting-Edge AI Solutions",
              "Syntria",
              "Mental Health Treatments that Stick",
              "Syntria",
              "Cognition like Never Before",
              "Syntria",
            ]}
          />
        </div>
        <div className="w-[100%] block md:hidden">
          <p className="text-center text-3xl text-gray-800">Syntria</p>
        </div>
        <br/>
        <LandingGrid />
        <a
          href="/skylars-run"
          className="mt-4 px-8 py-3 bg-dark-bg text-hcontrast rounded-full font-semibold shadow-lg hover:bg-dtext transition"
        >
          Learn More
        </a>
      </section>

      {/* Parallax Hero Image */}
      <ParallaxHeroImage />

      <section className="relative pt-20 px-4 bg-light-bg">
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