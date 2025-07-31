"use client";
import React from "react";
import Link from "next/link";
import recommendReroute from "./reroute";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const currentPathname = usePathname();
  const recommended = recommendReroute({ currentPathname });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100 text-gray-800 px-6 text-center relative overflow-hidden">
      {/* Optional background SVG blob */}
      <svg
        className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-10 text-green-300"
        fill="currentColor"
        viewBox="0 0 200 200"
      >
        <path
          d="M45.5,-65.9C57.5,-55.6,65.7,-43,70.3,-29.4C74.9,-15.8,75.9,-0.9,73.1,12.7C70.3,26.2,63.7,38.3,54.3,50.1C44.9,61.9,32.7,73.3,18.2,76.6C3.8,79.9,-12.9,75.1,-26.5,67C-40.1,58.9,-50.6,47.6,-60.6,34.2C-70.6,20.9,-80.1,5.4,-77.4,-8.8C-74.8,-23,-60.1,-36,-45.9,-46.3C-31.7,-56.5,-15.9,-64.1,-0.1,-63.9C15.6,-63.8,31.3,-55.9,45.5,-65.9Z"
          transform="translate(100 100)"
        />
      </svg>

      <h1 className="text-[120px] font-extrabold text-green-500 leading-none drop-shadow-lg z-10">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 z-10">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md text-gray-600 z-10">
        {recommended != null && (
          <>
            Maybe a typo? {currentPathname} does kinda look like{" "}
            <Link href={recommended} className="underline">
              {recommended}
            </Link>
            .
          </>
        )}
        {recommended == null && (
          <>
            We couldn&apos;t figure out what you meant, so we&apos;ll just bring
            you <Link href="/">back home</Link>.
          </>
        )}
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg rounded-xl transition shadow-md z-10"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
