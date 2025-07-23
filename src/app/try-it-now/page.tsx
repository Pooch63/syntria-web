import React from "react";
import Card from "../effects/card";
import SlideUpOnScroll from "../effects/slide-up-on-scroll";

export default function TryItNow() {
  return (
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans pb-20">
      <section className="flex flex-col items-center justify-center pt-32 pb-5 px-4 text-center mb-16 rounded-b-3xl w-full text-light-bg">
        <SlideUpOnScroll>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-dark-bg drop-shadow-lg">Try Syntria Now</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-banner-text opacity-90">
            If you&apos;re interested in Skylar&apos;s Run, or want to invest in the future of healthcare, reach out today.
          </p>
        </SlideUpOnScroll>
        <a
          href="#contact-us"
          className="mt-4 px-10 py-4 bg-dark-bg text-light-bg rounded-full font-semibold shadow-lg hover:bg-ltrans hover:text-ltext transition text-lg"
        >
          Get Started
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-12 items-stretch">
        <Card className="h-full" header="Easy to Begin" content="We'd be more than happy to customize our products to fit you or your organization's needs. Just let us know what you're looking for." />
        <Card className="h-full" header="No Risk, All Reward" content="Whether you're an individual or a 10,000 member organization, it's 60 days or your money back." />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center" id="contact-us">
        <h2 className="text-2xl font-bold text-dark-bg mb-4">Ready to experience the future?</h2>
        <p className="mb-6 text-lg opacity-90 text-dark-bg">Prepare to enter a new era.</p>
        <a className="inline-block px-10 py-4 bg-gradient-to-r from-ltrans to-rtrans text-light-bg rounded-full font-semibold shadow-lg hover:bg-dark-bg hover:text-light-bg transition text-lg transition-transform duration-300 scale-100 hover:scale-[1.1]"
          href="mailto:hello@syntria.org"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
