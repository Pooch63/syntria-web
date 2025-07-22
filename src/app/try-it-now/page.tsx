import React from "react";
import Card from "../effects/card";

export default function TryItNow() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 text-gray-900 font-sans pb-20">
      <section className="flex flex-col items-center justify-center py-32 px-4 text-center bg-gradient-to-br from-green-500 via-emerald-500 to-lime-400 mb-16 rounded-b-3xl shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">Try Syntria Now</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 text-white opacity-90">
          If you're interested in Skylar's Run, or want to invest in the future of healthcare, reach out today.
        </p>
        <a
          href="#contact-us"
          className="mt-4 px-10 py-4 bg-white text-green-700 rounded-full font-semibold shadow-lg hover:bg-green-100 transition text-lg"
        >
          Get Started
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-stretch">
        <Card className="h-full" header="Easy to Begin" content="We'd be more than happy to customize our products to fit you or your organization's needs. Just let us know what you're looking for." />
        <Card className="h-full" header="No Risk, All Reward" content="Whether you're an individual or a 10,000 member organization, it's 60 days or your money back." />
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center" id="contact-us">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">Ready to experience the future?</h2>
        <p className="mb-6 text-lg opacity-90">Prepare to enter a new era.</p>
        <a className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition text-lg"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
