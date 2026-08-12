"use client";

import PixelGrid from "@/components/PixelGrid";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
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
          <span className="w-1.5 h-1.5 bg-[#ff6b6b] pulse-dot inline-block" />
          <span className="label-mono text-[#7a7a7a]">ERROR // 404</span>
        </div>

        {/* 404 */}
        <h1
          className="animate-fade-in-up delay-200 text-7xl md:text-9xl font-light tracking-tighter text-white mb-2 leading-none"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
        >
          404
        </h1>

        {/* Divider line with label */}
        <div className="animate-fade-in-up delay-300 flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-linear-to-r from-transparent to-[#333]" />
          <span className="label-mono text-[#6f6f6f]">.//not.found.</span>
          <div className="h-px w-20 bg-linear-to-l from-transparent to-[#333]" />
        </div>

        {/* Message */}
        <h2
          className="animate-fade-in-up delay-300 text-2xl md:text-4xl font-light tracking-tighter text-[#6f6f6f] mb-8 leading-none"
          style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
        >
          PAGE NOT FOUND
        </h2>

        {/* Description */}
        <p className="animate-fade-in-up delay-400 text-[#6f6f6f] text-sm md:text-base max-w-md mx-auto mb-16 leading-relaxed label-mono">
          Segmentation fault. The page you are
          <br />
          looking for does not exist.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-3 bg-white text-black text-xs tracking-widest uppercase font-mono hover:bg-[#e0e0e0] transition-colors"
          >
            <span>Back home</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/#showroom"
            className="px-8 py-3 border border-[#4a4a4a] text-[#9a9a9a] text-xs tracking-widest uppercase font-mono hover:border-[#666] hover:text-[#ccc] transition-all"
          >
            Showroom
          </Link>
        </div>
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
