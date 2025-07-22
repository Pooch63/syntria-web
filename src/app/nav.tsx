"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skylar's Run", href: "/skylars-run" },
  { name: "Try It Now", href: "/try-it-now" },
  { name: "About Us", href: "/about" },
];
const heros = ['/', '/try-it-now'];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navClass = 
    "w-full px-8 py-4 flex items-center justify-between z-50 transition-all duration-300 " +
    "bg-gradient-to-br from-ltrans to-rtrans fixed top-0 left-0";

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full px-4 pt-6 z-50 flex justify-center bg-light-bg">
        <nav
          className={clsx(
            "w-full max-w-5xl px-6 py-4 flex items-center justify-between rounded-2xl shadow-xl transition-all duration-300 bg-gradient-to-br from-ltrans to-rtrans",
            !heros.includes(currentPath) && !menuOpen ? "shadow-md" : ""
          )}
        >
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow">Syntria</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white text-ltext font-semibold hover:text-dtext transition-colors duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              >
                {item.name}
              </a>
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
                menuOpen ? "rotate-45" : ""
              )}
            ></span>
            <span
              className={clsx(
                "block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out",
                menuOpen ? "opacity-0" : ""
              )}
            ></span>
            <span
              className={clsx(
                "block h-1 w-full bg-white rounded transition-all duration-300 ease-in-out origin-left",
                menuOpen ? "-rotate-45" : ""
              )}
            ></span>
          </div>
        </button>
      </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={clsx(
          "md:hidden fixed top-0 left-0 w-full bg-gradient-to-br from-light-bg to-dark-bg z-40 transition-all duration-300 ease-in-out overflow-hidden",
          menuOpen ? "max-h-96 pt-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col items-center space-y-4 px-6 pb-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-semibold hover:text-green-100 transition-colors duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
