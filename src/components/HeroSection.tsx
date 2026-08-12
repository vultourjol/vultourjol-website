"use client";

import PixelGrid from "./PixelGrid";
import TerminalFrame from "./TerminalFrame";

const skills = ["Next.js", "React", "TypeScript", "Python", "Node.js", "PostgreSQL", "Git", "Docker"];

export default function HeroSection() {
  const scrollToShowroom = () => {
    document.querySelector("#showroom")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated canvas grid */}
      <PixelGrid />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #080808 100%)",
        }}
      />

      {/* Corner decorations */}
      <CornerDecor position="top-left" />
      <CornerDecor position="top-right" />
      <CornerDecor position="bottom-left" />
      <CornerDecor position="bottom-right" />

      {/* Floating pixel nodes */}
      <div className="absolute top-1/4 left-16 w-2 h-2 bg-white drift opacity-20" />
      <div className="absolute top-1/3 right-24 w-1 h-1 bg-white drift-2 opacity-30" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white drift-3 opacity-20" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 mb-12 px-4 py-2 border border-[#333] bg-[#0f0f0f]">
          <span className="w-1.5 h-1.5 bg-white pulse-dot inline-block" />
          <span className="label-mono text-[#7a7a7a]">ONLINE</span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up delay-200 text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-2 leading-none"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
        >
          EGOR
        </h1>

        {/* Divider line with label */}
        <div className="animate-fade-in-up delay-300 flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-20 bg-linear-to-r from-transparent to-[#333]" />
          <span className="label-mono text-[#6f6f6f]">.//dnVsdG91cmpvbA==</span>
          <div className="h-px w-20 bg-linear-to-l from-transparent to-[#333]" />
        </div>

        {/* Surname */}
        <h2
          className="animate-fade-in-up delay-300 text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-[#4a4a4a] mb-16 leading-none"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
        >
          NURULLIN
        </h2>

        {/* Description */}
        <p className="animate-fade-in-up delay-400 text-[#6f6f6f] text-sm md:text-base max-w-md mx-auto mb-16 leading-relaxed label-mono">
          I create digital products with a focus<br />
          on performance and clean code
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToShowroom}
            className="group flex items-center gap-3 px-8 py-3 bg-white text-black text-xs tracking-widest uppercase font-mono hover:bg-[#e0e0e0] transition-colors"
          >
            <span>View works</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-black border border-[#4a4a4a] text-[#9a9a9a] text-xs tracking-widest uppercase font-mono hover:border-[#666] hover:text-[#ccc] transition-all"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up delay-900">
        <span className="label-mono text-[#5f5f5f] text-[10px]">SCROLL</span>
        <div className="w-px h-12 bg-linear-to-b from-[#444] to-transparent" />
      </div>
    </section>
  );
}

function CornerDecor({ position }: { position: string }) {
  const posClass = {
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  }[position];

  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");

  return (
    <div className={`absolute ${posClass} pointer-events-none`}>
      <div className="relative w-8 h-8">
        <div
          className={`absolute ${isRight ? "right-0" : "left-0"} ${isBottom ? "bottom-0" : "top-0"} w-4 h-px bg-[#4a4a4a]`}
        />
        <div
          className={`absolute ${isRight ? "right-0" : "left-0"} ${isBottom ? "bottom-0" : "top-0"} w-px h-4 bg-[#4a4a4a]`}
        />
      </div>
    </div>
  );
}
