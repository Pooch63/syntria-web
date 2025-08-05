"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import "./slide-up-on-scroll.css";

interface SlideUpOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SlideUpOnScroll: React.FC<SlideUpOnScrollProps> = ({
  children,
  className = "",
  style
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setContentVisible(true);
          observer.disconnect();
        }, 200);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`slide-up-on-scroll ${contentVisible ? "visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideUpOnScroll;
