"use client";
import React, { useEffect, useState } from 'react';

interface BenefitItem {
  icon: React.ReactNode;
  header: string;
  subheader: string;
}

interface StorySection {
  name: string;
  story: string;
  outcome: string;
  image: string;
}

interface BuyerPopulationPageProps {
  title: string;
  description: string;
  heroImage?: string;
  heroNumber?: number; // New prop for number display
  benefits: BenefitItem[];
  story: StorySection;
  cta: {
    header: string;
    subheader: string;
  };
}

// Number animation component
const AnimatedNumber: React.FC<{ targetNumber: number; duration?: number }> = ({ 
  targetNumber,
  duration = 3500 
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = easeOutQuart * targetNumber;
      
      setCurrentNumber(current);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start animation after a short delay
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetNumber, duration]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-bold text-hcontrast mb-4">
        ${currentNumber.toFixed(2)}B+
      </div>
      <div className="text-2xl md:text-3xl text-hcontrast opacity-80 font-semibold tracking-wider uppercase">
        Industry
      </div>
    </div>
  );
};

export default function BuyerPopulationPage({
  title,
  description,
  heroImage,
  heroNumber, // New prop
  benefits,
  story,
  cta
}: BuyerPopulationPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-light-bg">
      {/* Hero Banner Section */}
      <section className="pt-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content with Fade In */}
            <div className={`bg-gradient-to-r from-ltrans to-rtrans text-hcontrast rounded-lg px-10 py-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Right Side - Image or Number */}
            <div className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {heroNumber !== undefined ? (
                // Display animated number if heroNumber is provided
                <div className="bg-gradient-to-br from-dark-bg via-rtrans to-ltrans rounded-2xl p-12 shadow-2xl">
                  <AnimatedNumber targetNumber={heroNumber} />
                </div>
              ) : (
                // Display image if no heroNumber is provided
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">
            Transform Your Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {benefits.map((benefit, index) => {
              return (
                <div
                  key={index}
                  className="text-center p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-8">
                    <div className="p-6 bg-gradient-to-br from-rtrans via-dark-bg to-ltrans rounded-3xl shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {benefit.header}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                    {benefit.subheader}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-32 pb-20 px-4 bg-light-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {story.name}&apos;s Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Story Content */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &quot;{story.story}&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Outcome</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {story.outcome}
                </p>
              </div>
            </div>
            {/* Right Side - Person Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <p className="text-lg font-semibold text-gray-900">{story.name}</p>
                  <p className="text-sm text-gray-600">Healthcare Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mb-10 bg-gradient-to-r from-dark-bg via-rtrans to-ltrans text-hcontrast text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {cta.header}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {cta.subheader}
          </p>
          <a
            href="/try-it-now"
            className="inline-block px-8 py-4 bg-white text-rtrans rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}