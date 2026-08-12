"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "MAIN", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SHOWROOM", href: "#showroom" },
  { label: "CONTACTS", href: "#contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Fixed Header Bar ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-[#1a1a1a]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="label-mono text-[#f0f0f0] hover:text-white transition-colors tracking-widest text-xs"
          >
            VULTOURJOL
          </button>

          {/* Desktop Nav */}
          {/* <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="label-mono text-[#666] hover:text-[#f0f0f0] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav> */}

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] w-8 h-8 items-center justify-center group"
          >
            <span
              className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen Menu Overlay ────────────────────────── */}
      <div
        className={`nav-overlay fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col items-center justify-center ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Grid overlay inside menu */}
        <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />

        {/* Corner labels */}
        <span className="absolute top-20 left-6 label-mono text-[#333]">
          NAV / 00{navItems.length}
        </span>
        <span className="absolute bottom-8 right-6 label-mono text-[#333]">
          PORTFOLIO v2.8
        </span>

        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="group flex items-center gap-4 text-[#888] hover:text-white transition-all duration-300"
            >
              <span className="label-mono text-[#333] group-hover:text-[#555] transition-colors w-6 text-right">
                0{i + 1}
              </span>
              <span
                className="text-4xl md:text-6xl font-light tracking-tight"
                style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', sans-serif" }}
              >
                {item.label}
              </span>
              <span className="label-mono text-[#222] group-hover:text-[#444] transition-colors text-xs">
                →
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
