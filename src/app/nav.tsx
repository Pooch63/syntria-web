"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skylar's Run", href: "/skylars-run" },
  { name: "Try It Now", href: "/try-it-now" },
  { name: "About Us", href: "/about" },
];
const heros = ["/", "/try-it-now"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full px-4 pt-6 z-50 flex justify-center bg-light-bg">
        <nav
          className={clsx(
            "w-full max-w-[80%] px-6 py-4 flex items-center justify-between rounded-2xl shadow-xl transition-all duration-300 bg-gradient-to-br from-ltrans to-rtrans",
            !heros.includes(currentPath) && !menuOpen ? "shadow-md" : "",
          )}
        >
          <div className="flex items-center space-x-3">
            <Link
              className="text-2xl font-extrabold text-white tracking-wide drop-shadow"
              href="/"
            >
              Syntria
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white text-ltext font-semibold hover:text-dtext transition-colors duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Custom Animated Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none z-50 relative group"
            aria-label="Toggle menu"
            style={{ marginTop: "4px", marginLeft: "4px" }}
          >
            <div className="w-7 h-6 flex flex-col justify-between items-center">
              <span
                className={clsx(
                  "block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out origin-left",
                  menuOpen ? "rotate-45" : "",
                )}
              ></span>
              <span
                className={clsx(
                  "block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out",
                  menuOpen ? "opacity-0" : "",
                )}
              ></span>
              <span
                className={clsx(
                  "block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out origin-left",
                  menuOpen ? "-rotate-45" : "",
                )}
              ></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out",
          menuOpen
            ? "transform translate-y-0 opacity-100 pointer-events-auto"
            : "transform -translate-y-full opacity-0 pointer-events-none",
        )}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-bg to-dark-bg"></div>

        {/* Content container */}
        <div className="relative h-full flex flex-col">
          {/* Close button at top */}
          <div className="flex justify-end p-6 pt-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 flex items-center justify-center">
            <ul
              className={clsx(
                "flex flex-col items-center space-y-8 transition-all duration-700 ease-out",
                menuOpen
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-8 opacity-0",
              )}
              style={{
                transitionDelay: menuOpen ? "200ms" : "0ms",
              }}
            >
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className={clsx(
                    "transition-all duration-500 ease-out",
                    menuOpen
                      ? "transform translate-y-0 opacity-100"
                      : "transform translate-y-4 opacity-0",
                  )}
                  style={{
                    transitionDelay: menuOpen
                      ? `${300 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-2xl font-bold hover:text-green-100 transition-colors duration-200 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white block text-center"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom spacing */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
