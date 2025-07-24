"use client";
import React from "react";
import { Header } from "../effects/texts";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElement } from "../effects/timeline";
import { Building2, Gamepad2 } from 'lucide-react';
import SlideUpOnScroll from "../effects/slide-up-on-scroll";

const team = [
  {
    name: "Kate Flathers",
    role: "Chief Product Officer",
    image: "/images/kate-flathers.jpg",
    expertise: "Product Management",
    bio: "With 15 years experience in healthcare product development, Kate oversaw the launch of "
    + "multi-year SaaS deal. She also dispatched the first fleet of robots that now power Amazon distribution."
  },
  {
    name: "Dr. Jennifer Gentile",
    role: "Founder",
    image: "/images/jennifer.png",
    expertise: "Scaling / Health",
    bio: "Working everyday to spread her revolutionary EEG headband technology.",
  },
  {
    name: "John Loughnane, MD",
    role: "Advisor",
    image: "/images/john-loughnane.jpg",
    expertise: "Tech / Investment",
    bio: "John is the Former Chief of Innovation at CCA & WSV, and he's led tech-driven care models "
    + "for patients using IoT and voice-first tools. We're so excited to have his experience as an investment "
    + "advisor guiding our work!"
  },
  {
    name: "Glenda Carnate",
    role: "Chief Revenue & Data Officer",
    image: "/images/glenda-carnate.jpg",
    expertise: "Business / Data",
    bio: "Glenda has been the founder and CEO of a healthcare venture... three times, including her venture Autism Health. "
    + "As a former global tech executive, she's an expert in monetizing forgotten data and launching AI solutions."
  },
  {
    name: "You",
    role: "Innovator",
    image: "/images/question-mark.png",
    expertise: "Everything",
    bio: "Syntria is always on the search for amazing new talent like you! Reach out today if you're interested in shaping "
    + "the future of healthcare as we know it.",
  },
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-light-bg text-dark-bg font-sans pb-20">
      <section className="max-w-4xl mx-auto pt-32 pb-12 px-4 text-center">
        <Header text="About" />
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90 text-dark-bg">
          Syntria is on a mission to revolutionize cognitive health for youth across the US. By combining cutting-edge EEG technology with the power of video games, we create experiences that are both fun and scientifically proven to boost attention, memory, and focus. Our team is passionate about making a real impact—one game at a time.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-dark-bg mb-8 text-center">Meet the Team</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90 text-dark-bg text-center text-balance">From business to marketing, healthcare to regulatory, our team has it all.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {team.map((member) => (
            <SlideUpOnScroll key={"About Member " + member.name}>
              <button
                className="h-full bg-light-bg rounded-3xl border-2 border-ltrans shadow-xl p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ltrans group"
                type="button"
              >
                {/* Expertise Banner */}
                <div className="w-full -mt-8 mb-4">
                  <div className="mx-auto w-45 py-2 rounded-full bg-gradient-to-r from-ltrans to-rtrans text-white font-bold text-center shadow-md text-sm tracking-wide">
                    {member.expertise}
                  </div>
                </div>
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full bg-ltrans/40 shadow-2xl blur-md" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-28 h-28 object-cover rounded-full border-4 border-ltrans z-10 group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="text-xl font-semibold text-dark-bg mb-1">{member.name}</h3>
                <p className="text-ltrans font-medium mb-2">{member.role}</p>
                <p className="text-dark-bg text-sm opacity-80">{member.bio}</p>
              </button>
            </SlideUpOnScroll>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-dark-bg mb-4">You belong on this list.</h2>
        <p className="mb-6 text-lg opacity-90 text-dark-bg">We&apos;re always looking for new talent. Reach out today and make a difference!</p>
        <a
          href="mailto:hello@syntria.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-ltrans to-rtrans text-white rounded-full font-semibold shadow-lg hover:bg-dark-bg transition"
        >
          Contact Us
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-dark-bg mb-4">History of Syntria</h2>
        <VerticalTimeline>
          <TimelineElement
            icon={<Gamepad2 color="#fff" />}
            date="2011-2014"
          >
            <h2 className="text-hcontrast">Skylar&apos;s Run Rolls Out</h2>
            <h3 className="vertical-timeline-element-subtitle">Thynk&apos;s Flagship Product</h3>
            <br />
            <h6>
              Skylar&apos;s Run video game is finished. First clients with ADHD have promising improvements
            </h6>
          </TimelineElement>
          <TimelineElement
            icon={<Building2 color="#fff" />}
          >
            <h2 className="text-hcontrast">Thynk Begins</h2>
            <h3 className="vertical-timeline-element-subtitle">Newton, MA</h3>
            <br />
            <h6>
              Thynk founded. The company uses EEG video gaming to improve attention
            </h6>
          </TimelineElement>
        </VerticalTimeline>
      </section>
    </main>
  );
} 