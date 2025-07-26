import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-bg text-light-bg py-8 border-t border-ltrans">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-2xl text-ltrans">Syntria</div>
        <nav className="flex gap-6 text-base">
          <a href="/skylars-run" className="hover:text-rtrans transition">Skylar&apos;s Run</a>
          <a href="/try-it-now" className="hover:text-rtrans transition">Try It Now</a>
          <a href="/about" className="hover:text-rtrans transition">About Us</a>
        </nav>
        <div className="text-sm text-ltrans">&copy; {new Date().getFullYear()} Syntria. All rights reserved.</div>
      </div>
    </footer>
  );
}