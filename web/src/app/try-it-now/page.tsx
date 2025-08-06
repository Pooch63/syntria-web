import React from "react";
import SlideUpOnScroll from "@/effects/slide-up-on-scroll";
import ContactForm from "@/components/ContactForm";

export default function TryItNow() {
  return (
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans pb-20">
      <title>Try It Now</title>
      <section className="flex flex-col items-center justify-center pt-32 pb-5 px-4 text-center mb-16 rounded-b-3xl w-full text-light-bg">
        <SlideUpOnScroll>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-dark-bg drop-shadow-lg">
            Try Syntria Now
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-banner-text opacity-90">
            If you&apos;re interested in Skylar&apos;s Run, or want to invest in
            the future of healthcare, reach out today.
          </p>
        </SlideUpOnScroll>
        <a
          href="#contact-us"
          className="mt-4 px-10 py-4 bg-dark-bg text-light-bg rounded-full font-semibold shadow-lg hover:bg-ltrans hover:text-ltext transition text-lg"
        >
          Get Started
        </a>
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
