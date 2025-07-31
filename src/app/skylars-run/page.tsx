"use client";
import React, { useRef } from "react";
import { Header } from "../effects/texts";
import SlideUpOnScroll from "../effects/slide-up-on-scroll";
import Card from "../effects/card";
import TextImage from "../effects/text-image";

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
    text: "Players can only push Skylar forward when EEG technology detects that they're paying attention. This leads to one simple equation: more attention = better gameplay, which instantly improves your child's short and long-term attention abilities.",
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
    image: "/images/jessica.png",
    text: "Skylar’s Run has been a game-changer for our family. Seeing our child excel in school and gain confidence in their abilities is truly a priceless feeling. Thank you for giving us a tool that has made such a positive impact on our lives!",
    name: "Jessica",
    role: "Mom",
  },
  {
    image: "/images/lisa.png",
    text: "Skylar's Run has been a game-changer for our child, Joseph. This program's engaging gameplay led to better focus and task management, school performance, homework completion and self-regulation skills.",
    name: "Lisa",
    role: "Educator",
  },
  {
    image: "/images/gabriella.png",
    text: "Thanks to Skylar's Run our child is now able to focus better, stay on task, and achieve academic success. As parents, we couldn't be more proud of their progress and we're grateful for creating such an innovative and effective solution.",
    name: "Gabriella",
    role: "School Superintendent",
  },
];
const graphs = [
  {
    image: "/images/13-cognitive-skills.png",
    imageAlt: "Skylar's Run Gameplay Preview",
    header: "Skylar's Approach",
    subtitle:
      "Skylar's Run starts small and ramps up. You won't believe how much you can improve your " +
      "cognition... until you already have.",
    reverse: false,
  },
  {
    image: "/images/skylars-run-reductions.png",
    imageAlt: "Skylar's Run Study Findings",
    header: "Skylar's Run Reduces ADHD And Keeps it That Way",
    subtitle:
      "4 clinical trials have found that while playing Skylar's Run, ADHD-related symptoms face a sharp decline. " +
      "After your playing period, you don't have to worry about rebounding - the game has already made its mark.",
    reverse: true,
  },
  {
    image: "/images/skylars-run-comparative-analysis.png",
    imageAlt: "Skylar's Run Compared to Other ADHD Treatments",
    header: "Skylar's Run Beats Tradition",
    subtitle: (
      <>
        Short of prescription stimulants, Skylar&apos;s Run consistently
        outperforms other ADHD medications and treatments on the market.
      </>
    ),
    reverse: false,
  },
];
const whoItsFor = [
  {
    title: "The Elderly",
    description:
      "An increase in cognition can lead to longer lifespans, delay cognitive decline, and improve executive function and daily living.",
    anchor: "elderly",
  },
  {
    title: "Mental Health Patients",
    description:
      "Skylar's Run has been shown over and over to improve mental health symptoms, particularly those associated with depression and anxiety.",
    anchor: "mental-health",
  },
  {
    title: "Athletes",
    description:
      "Being at the top of your game doesn't just mean having the physique. Athletes need to constantly sharpen mental acuity and improve metrics like decision making, inhibition, focus and control.",
    anchor: "athletes",
  },
  {
    title: "Pediatric Practices",
    description:
      "Whether you're a microschool looking to improve your kids' quality of life or a pediatrician worried about their patients' cognition, Skylar's Run provides the perfect opportunity to improve academics and cognition.",
    anchor: "pediatrics",
  },
];
const results = [
  {
    title: "Schools",
    description:
      "Kids aren't behind anymore. On average, they get boosted a full grade level in reading and math.",
  },
  {
    title: "Behavior",
    description:
      "Participants see an average improvement of 75% in attention and behavior.",
  },
  {
    title: "Mental Health",
    description:
      "44% of players with depression and 22% of anxiety-ridden players see a decrease in symptoms.",
  },
  {
    title: "Work Life",
    description:
      "Yes, Skylar's Run is for adults, too, and 78% of those who pick it up experience an increase in work productivity.",
  },
];

function ResultCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <SlideUpOnScroll className="h-full">
      <div className="flex flex-col items-center h-full bg-light-bg rounded-2xl shadow p-6 border-2 border-dark-bg">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-bg shadow mb-4">
          <span className="text-3xl font-extrabold text-light-bg drop-shadow">
            {number}
          </span>
        </div>
        <h3 className="text-lg font-bold text-dtext mb-2">{title}</h3>
        <p className="text-sm text-dtext opacity-80 text-center">
          {description}
        </p>
      </div>
    </SlideUpOnScroll>
  );
}

export default function TheProof() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByCard = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector?.(
      ".testimonial-card",
    ) as HTMLElement | null;
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
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans">
      <title>Skylar&apos;s Run</title>
      {/* Hero Banner Section */}
      <section className="w-full text-light-bg pt-23 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <SlideUpOnScroll>
            <div className="flex-1 text-center text-banner-text">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                Welcome to Skylar&apos;s Run
              </h1>
              <p className="text-lg md:text-xl max-w-2xl opacity-90 text-banner-text">
                Game-Based Cognitive Support for Mental Health Improvement™.
                <br />
                Designed by neuroscientists to make focus fun—and effective,
                this is Syntria&apos;s biggest innovation in the healthcare
                space.
              </p>
            </div>
          </SlideUpOnScroll>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-light-bg/10 rounded-3xl blur-lg shadow-inner"></div>
              <img
                src="/images/headband.png"
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
          <TextImage key={"SR PS " + section.title} {...section} />
        ))}
      </div>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-4 pt-20 text-center">
        <Header text="What We Do" />
        <p className="text-xl max-w-3xl mx-auto opacity-90 text-ltext">
          Skylar&apos;s Run causes noticeable improvements in all 5 types of
          attention, as well as 8 other functions relating to inhibition, for a
          total of <b>13</b> cognitive skills.
        </p>
      </section>

      {/* Game Image + Gradient Text Section */}
      {graphs.map((graph, idx) => (
        <section
          key={"Graph SR " + idx}
          className={`max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-12 ${
            graph.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={graph.image}
                alt={graph.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Side with Fade Effect */}
          <SlideUpOnScroll className="flex-1 bg-gradient-to-br from-ltrans to-rtrans p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-hcontrast mb-4">
              {graph.header}
            </h2>
            <p className="text-lg text-ltext opacity-90">{graph.subtitle}</p>
          </SlideUpOnScroll>
        </section>
      ))}

      {/* Who It's For Section */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-20 text-center">
        <Header text="Who It's For" />
        <p className="text-xl max-w-3xl mx-auto opacity-90 text-ltext mb-12">
          Skylar’s Run is designed to help people who struggle with focus—but
          also those who want to proactively build it. Whether you’re a parent,
          educator, or clinician, here’s how this tool fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {whoItsFor.map((group, idx) => (
            <SlideUpOnScroll key={"user-group-" + idx}>
              <div className="h-full bg-light-bg border-2 border-ltrans rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-dark-bg mb-3">
                    {group.title}
                  </h3>
                  <p className="text-md text-ltext opacity-90">
                    {group.description}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={`/skylars-run/audience#${group.anchor}`}
                    className="inline-block text-ltrans font-semibold hover:underline transition-all"
                  >
                    Learn More <span className="font-black">&#x2192;</span>
                  </a>
                </div>
              </div>
            </SlideUpOnScroll>
          ))}
        </div>
      </section>

      {/* Existing Proof Content */}
      <section className="max-w-4xl mx-auto pt-10 pb-12 px-4 text-center">
        <Header text="The Proof" />
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90 text-dark-bg">
          Syntria only uses technology backed by years and research and{" "}
          <b>results</b>. Skylar&apos;s Run is no exception.
        </p>
      </section>

      {/* Proof Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-12">
        <Card
          header="Backed by Time"
          content="Althought Syntria is a new innovator, Skylar's Run has been incrementally improving for over 17 years. In those near-2 decades, we've become 100% confident that Skylar can help you succeed."
        />
        <Card
          header="Real-Time Feedback"
          content="Skylar's Run gives you a reward when you pay attention and a reminder when you don't, meaning cognitive function gets a quick boost that stays."
        />
      </section>

      {/* Clinical Trials Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-dark-bg mb-8 text-center">
          15 studies. Real Results.
        </h2>
        <p className="text-lg text-center mb-10 text-dark-bg opacity-90">
          Skylar&apos;s Run is backed by rigorous science. Our clients see
          improvements in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {results.map((result, idx) => (
            <ResultCard
              key={idx}
              description={result.description}
              number={idx + 1}
              title={result.title}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-ltrans to-rtrans relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-dark-bg drop-shadow">
            What People Are Saying
          </h2>
          <div className="relative">
            {/* Left Arrow */}
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scrollByCard(-1)}
              className="hidden cursor-pointer md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-light-bg/80 hover:bg-dark-bg rounded-full shadow-lg p-2 border border-ltrans transition"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-dark-bg hover:text-light-bg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Right Arrow */}
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scrollByCard(1)}
              className="hidden cursor-pointer md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-light-bg/80 hover:bg-dark-bg rounded-full shadow-lg p-2 border border-ltrans transition"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-dark-bg hover:text-light-bg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-scroll md:overflow-x-hidden gap-8 scrollbar-hide py-2 px-1 scroll-smooth snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={"Testimonial SR " + idx}
                  className="testimonial-card flex flex-col items-center bg-light-bg rounded-3xl shadow-xl p-8 min-w-[320px] max-w-xs mx-auto snap-center transition-transform duration-300 border-2 border-ltrans"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-ltrans"
                  />
                  <p className="text-lg italic mb-4 text-dark-bg">“{t.text}”</p>
                  <div className="font-semibold text-dark-bg">{t.name}</div>
                  <div className="text-sm text-ltrans">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-16 bg-transparent text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-bg mb-6">
            Ready to Improve Your Mind?
          </h2>
          <p className="text-lg md:text-xl text-dark-bg opacity-90 mb-8">
            Give Skylar&apos;s Run a try today and see the results for yourself.
          </p>
          <a
            href="/try-it-now"
            className="inline-block px-8 py-4 text-light-bg text-xl font-semibold bg-gradient-to-r from-ltrans to-rtrans rounded-full shadow-lg hover:bg-dark-bg transition transition-transform duration-300 scale-100 hover:scale-[1.1]"
          >
            Try Skylar&apos;s Run Now
          </a>
        </div>
      </section>
    </main>
  );
}
