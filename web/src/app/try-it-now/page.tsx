import React from "react";
import SlideUpOnScroll from "@/effects/slide-up-on-scroll";
import ContactForm from "@/components/ContactForm";

export default function TryItNow() {
  return (
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans pb-20">
      <title>Try It Now</title>

      {/* Hero Section with Image */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="z-10">
              <SlideUpOnScroll>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-dark-bg drop-shadow-lg">
                  Try Syntria Now
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mb-8 text-banner-text opacity-90">
                  If you&apos;re interested in Skylar&apos;s Run, or want to
                  invest in the future of healthcare, reach out today.
                </p>
                <a
                  href="#contact-us"
                  className="inline-block px-10 py-4 bg-dark-bg text-light-bg rounded-full font-semibold shadow-lg hover:bg-ltrans hover:text-ltext transition text-lg"
                >
                  Get Started
                </a>
              </SlideUpOnScroll>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/hero-image.jpg"
                  alt="Healthcare Innovation"
                  className="w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-bg/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-3xl mx-auto px-4 py-12 text-center"
        id="contact-us"
      >
        <h2 className="text-2xl font-bold text-dark-bg mb-4">
          Ready to experience the future?
        </h2>
        <p className="mb-6 text-lg opacity-90 text-dark-bg">
          Prepare to enter a new era. Reach out today.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
