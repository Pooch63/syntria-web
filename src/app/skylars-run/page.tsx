"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { Header } from "../effects/texts";
import SlideUpOnScroll from "../effects/slide-up-on-scroll";
import Card from "../effects/card";

// Product showcase sections for Skylar's Run
const showcaseSections = [
  {
    title: "Introducing Skylar's Run",
    text: "Skylar's Run isn't your ordinary video game. Kids control a character (Skylar) and make him move around, but they're not just using their hands - they're using their minds.",
    image: "/images/skylar-preview-1.jpg",
    gradient: "from-emerald-400 via-green-500 to-lime-400",
    reverse: true,
  },
  {
    title: "When Reward Leads to Results",
    text: "Players can only push Skylar forward when EEG technology detects that they're paying attention. This leads to one simple equation: more attention, better gameplay, which instantly improves your child's short and long-term attention abilities.",
    image: "/images/skylar-preview-2.jpg",
    gradient: "from-emerald-400 via-green-500 to-lime-400",
    reverse: false,
  },
  {
    title: "There's No Time Like the Present",
    text: "If you or your child has noticeable problems in paying and maintaining attention, you may benefit from clinically-proven assistance like Skylar's Run. Reach out to get started today.",
    image: "/images/skylar-pop.avif",
    gradient: "from-green-400 via-green-500 to-emerald-500",
    reverse: true,
  },
];

const testimonials = [
  {
    image: "/images/worker.jpg",
    text: "Syntria has made a noticeable difference in my students' focus and engagement. The games are fun and the results are real!",
    name: "Alex Martinez",
    role: "Middle School Teacher",
  },
  {
    image: "/images/kiyaan.jpg",
    text: "As a parent, I love seeing my child excited to play something that’s actually good for their brain. Highly recommend Syntria!",
    name: "Jamie Lee",
    role: "Parent",
  },
  {
    image: "/images/jennifer.png",
    text: "The science behind Syntria is impressive, and the clinical results speak for themselves. This is the future of cognitive health.",
    name: "Dr. Priya Singh",
    role: "Neuroscientist",
  },
  {
    image: "/images/brain.png",
    text: "I’ve seen a real improvement in my child’s attention span since using Syntria. The games are engaging and educational.",
    name: "Morgan Taylor",
    role: "Parent",
  },
  {
    image: "/images/playing.png",
    text: "Our school program saw a boost in student participation thanks to Syntria’s fun approach to cognitive training.",
    name: "Chris Evans",
    role: "School Program Director",
  },
  {
    image: "/images/worker.jpg",
    text: "As a clinician, I appreciate the evidence-based design behind Syntria. It’s a valuable tool for youth cognitive health.",
    name: "Dr. Emily Chen",
    role: "Child Psychologist",
  },
];
const graphs = [
  {
    image: "/images/13-cognitive-skills.png",
    imageAlt: "Skylar's Run Gameplay Preview",
    header: "Skylar's Approach",
    subtitle: "Skylar's Run starts small and ramps up. You won't believe how much you can improve your "
          + "cognition... until you already have.",
    reverse: false
  },
  {
    image: "/images/skylars-run-reductions.png",
    imageAlt: "Skylar's Run Study Findings",
    header: "Skylar's Run Reduces ADHD And Makes it Stay That Way",
    subtitle: "4 clinical trials have found that while playing Skylar's Run, ADHD-related symptoms face a sharp decline. "
          + "After your playing period, you don't have to worry about rebounding - the game has already made its mark.",
    reverse: true
  },
  {
    image: "/images/skylars-run-comparative-analysis.png",
    imageAlt: "Skylar's Run Compared to Other ADHD Treatments",
    header: "Skylar's Run Beats Tradition",
    subtitle: <>Short of prescription stimulants, Skylar&apos;s Run consistently outperforms other
        ADHD medications and treatments on the market.</>,
    reverse: false
  }
]

export default function TheProof() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByCard = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector?.(".testimonial-card") as HTMLElement | null;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 32;
    if (typeof container.scrollBy === "function") {
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 text-gray-900 font-sans">
      <Head>
        <title>Skylar&apos;s Run</title>
      </Head>
      
      {/* Hero Banner Section */}
      <section className="w-full bg-gradient-to-br from-emerald-300 via-green-400 to-emerald-500 text-white pt-23 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to Skylar&apos;s Run
            </h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-90">
              Game-Based Cognitive Support for Mental Health Improvement™.
              <br/>
              Designed by neuroscientists to make focus fun—and effective,
              this is Syntria&apos;s biggest innovation in the healthcare space.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-lg shadow-inner"></div>
              <Image
                src="/images/playing.png"
                alt="Skylar's Run Gameplay"
                className="relative w-full h-full object-contain drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase Sections */}
      <div className="space-y-20 pt-10 pb-20">
        {showcaseSections.map((section) => (
          <section
            key={"SR PS " + section.title}
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
                <div className="absolute inset-0 rounded-2xl bg-emerald-200/40 shadow-2xl blur-md" />
                <Image
                  src={section.image}
                  alt={section.title}
                  className="relative w-56 h-56 md:w-72 md:h-72 object-contain opacity-95 drop-shadow-xl z-10"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-4 pt-20 text-center">
        <Header text="What We Do" />
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Skylar&apos;s Run causes noticeable improvements in all 5 types of attention, as well as
          8 other functions relating to inhibition, for a total of <b>13</b> cognitive skills.
        </p>
      </section>

      {/* Game Image + Gradient Text Section */}
      {graphs.map((graph, idx) => (
        <section
        key={"Graph SR " + idx}
        className={`max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12 ${
          graph.reverse ? "md:flex-row-reverse" : ""
        }`}>
          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={graph.image}
                alt={graph.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Side with Fade Effect */}
          <SlideUpOnScroll className="flex-1 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">{graph.header}</h2>
            <p className="text-lg text-white opacity-90">{graph.subtitle}</p>
          </SlideUpOnScroll>
        </section>
      ))}

      {/* Existing Proof Content */}
      <section className="max-w-4xl mx-auto pt-10 pb-12 px-4 text-center">
        <Header text="The Proof" />
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Syntria only uses technology backed by years and research and <b>results</b>. Skylar&apos;s Run is no exception.
        </p>
      </section>

      {/* Proof Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-12">
        <Card header="Backed by Time" content="Althought Syntria is a new innovator, Skylar's Run has been incrementally improving for over 17 years. In those near-2 decades, we've become 100% confident that Skylar can help you succeed." />
        <Card header="Real-Time Feedback" content="Skylar's Run gives you a reward when you pay attention and a reminder when you don't, meaning cognitive function gets a quick boost that stays." />
      </section>

      {/* Clinical Trials Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">8 Clinical Trials. Real Results.</h2>
        <p className="text-lg text-center mb-10 text-emerald-600 opacity-90">Skylar&apos;s Run is backed by rigorous science. Our clients see improvements in:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <SlideUpOnScroll className="h-full">
            <div className="flex flex-col items-center h-full bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-2 border-emerald-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-green-400 shadow-lg mb-4 animate-pulse">
                <span className="text-3xl font-extrabold text-white drop-shadow">1</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Mathematics</h3>
              <p className="text-sm text-gray-700 opacity-80 text-center">Kids aren&apos;t behind anymore. They improve by 8.3 months on average.</p>
            </div>
          </SlideUpOnScroll>
          <SlideUpOnScroll className="h-full">
            <div className="flex flex-col items-center h-full bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-2 border-emerald-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-green-400 shadow-lg mb-4 animate-pulse">
                <span className="text-3xl font-extrabold text-white drop-shadow">2</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Homework</h3>
              <p className="text-sm text-gray-700 opacity-80 text-center">Expect a 36% increase in your child&apos;s homework completion.</p>
            </div>
          </SlideUpOnScroll>
          <SlideUpOnScroll className="h-full">
            <div className="flex flex-col items-center h-full bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-2 border-emerald-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-green-400 shadow-lg mb-4 animate-pulse">
                <span className="text-3xl font-extrabold text-white drop-shadow">3</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Testing</h3>
              <p className="text-sm text-gray-700 opacity-80 text-center">Your child can now prove how smart they are, with 30-40% test score improvements.</p>
            </div>
          </SlideUpOnScroll>
          <SlideUpOnScroll className="h-full">
            <div className="flex flex-col items-center h-full bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-2 border-emerald-100">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-green-400 shadow-lg mb-4 animate-pulse">
                <span className="text-3xl font-extrabold text-white drop-shadow">4</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-700 mb-2">Reading</h3>
              <p className="text-sm text-gray-700 opacity-80 text-center">Kids&apos; worth isn&apos;t measured by their reading level. But if it were, they&apos;d be 6.6 months richer after playing.</p>
            </div>
          </SlideUpOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-emerald-700 drop-shadow">What People Are Saying</h2>
          <div className="relative">
            {/* Left Arrow */}
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scrollByCard(-1)}
              className="hidden cursor-pointer md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-emerald-100 rounded-full shadow-lg p-2 border border-emerald-200 transition"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Right Arrow */}
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scrollByCard(1)}
              className="hidden cursor-pointer md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-emerald-100 rounded-full shadow-lg p-2 border border-emerald-200 transition"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden gap-8 scrollbar-hide py-2 px-1 scroll-smooth snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={"Testimonial SR " + idx}
                  className="testimonial-card flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 min-w-[320px] max-w-xs mx-auto snap-center transition-transform duration-300"
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-emerald-100"
                  />
                  <p className="text-lg italic mb-4 text-gray-700">“{t.text}”</p>
                  <div className="font-semibold text-emerald-700">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-16 bg-transparent text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">Ready to Transform Attention?</h2>
          <p className="text-lg md:text-xl text-gray-700 opacity-90 mb-8">
            Give Skylar&apos;s Run a try today and see the results for yourself.
          </p>
          <a
            href="/try-it-now"
            className="inline-block px-8 py-4 text-white text-xl font-semibold bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Try Skylar&apos;s Run Now
          </a>
        </div>
      </section>
    </main>
  );
}
