"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface TextCarouselProps {
  messages: string[];
  delay?: number; // Time each message stays (ms)
  pauseLast?: number; // Pause duration on last message (ms)
}
export function TextCarousel({
  messages,
  delay = 2000 + 800,
  pauseLast = 4000,
}: TextCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return;

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === messages.length - 1 ? pauseLast : delay,
    );

    return () => clearTimeout(timeout);
  }, [index, delay, pauseLast, messages.length]);

  return (
    <div className="w-[100%] overflow-x-hidden relative h-12 text-center text-xl md:text-4xl text-gray-800">
      <AnimatePresence>
        <motion.div
          key={messages[index]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Header({ text }: { text: string }) {
  return (
    <h1 className="slide-up text-5xl font-extrabold mb-6 text-dtext drop-shadow montserrat">
      {text}
    </h1>
  );
}


export function UnderlineOnView(
  { text, className, underlineClassName, containerClassName = undefined }:
  {
    text: string;
    className: string;
    underlineClassName: string;
    containerClassName?: string;
  }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setUnderlineVisible(true);
      controls.start("animate");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className={clsx("relative inline-block text-2xl font-semibold", containerClassName)}>
      <span className={className}>{text}</span>
      {underlineVisible && (
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${underlineClassName}`}
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: "100%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onAnimationComplete={() => {
            setTimeout(() => setUnderlineVisible(false), 300);
          }}
        />
      )}
    </div>
  );
};