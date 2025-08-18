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
  delay = 2800,
  pauseLast = 4000,
}: TextCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const isLast = index === messages.length - 1;

    const timeout = setTimeout(
      () => {
        setIndex((prev) => (isLast ? 0 : prev + 1));
      },
      isLast ? pauseLast : delay,
    );

    return () => clearTimeout(timeout);
  }, [index, delay, pauseLast, messages.length]);

  return (
    <div className="w-full overflow-x-hidden relative h-12 text-center text-xl md:text-4xl text-gray-800">
      <AnimatePresence mode="wait">
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

export function UnderlineOnView({
  text,
  className = undefined,
  underlineClassName,
  containerClassName = undefined,
}: {
  text: string;
  className?: string;
  underlineClassName: string;
  containerClassName?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setUnderlineVisible(true);
      controls.start("animate");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className={clsx(
        "relative inline-block text-2xl font-semibold",
        containerClassName,
      )}
    >
      <span className={className}>{text}</span>
      {underlineVisible && (
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${underlineClassName}`}
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: "100%" }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          onAnimationComplete={() => {
            setTimeout(() => setUnderlineVisible(false), 700);
          }}
        />
      )}
    </div>
  );
}
export function LearnMore({ url }: { url: string }) {
  return (
    <a
      href={url}
      className="inline-block text-rtrans font-semibold hover:underline transition-all"
    >
      Learn More <span className="font-black">&#x2192;</span>
    </a>
  );
}
