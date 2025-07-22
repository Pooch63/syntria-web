import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-emerald-200 via-green-100 to-lime-100 text-gray-700 py-8 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-2xl text-emerald-700">Syntria</div>
        <nav className="flex gap-6 text-base">
          <a href="/about" className="hover:text-emerald-600 transition">About</a>
          <a href="/try-it-now" className="hover:text-emerald-600 transition">Try It Now</a>
          <a href="/why-it-works" className="hover:text-emerald-600 transition">Why It Works</a>
        </nav>
        <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Syntria. All rights reserved.</div>
      </div>
    </footer>
  );
} 