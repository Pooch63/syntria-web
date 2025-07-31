"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
