"use client";

import Image from "next/image";
import GridRunners from "./GridRunners";
import TerminalFrame from "./TerminalFrame";

const stack = [
  { cat: "FRONTEND", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { cat: "BACKEND", items: ["Node.js", "Python", "FastAPI", "PostgreSQL"] },
  { cat: "DEVOPS", items: ["Git", "Docker", "Linux", "CI/CD"] },
  { cat: "OTHER", items: ["Algorithms", "OOP", "REST API", "GraphQL"] },
];

const timeline = [
  { year: "2024", label: "The beginning", desc: "First lines of code in Python" },
  { year: "2025", label: "Web development", desc: "HTML / CSS / JavaScript / React" },
  { year: "2026", label: "Currently", desc: "CS student, active development" },
];

export default function AboutSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden" id="about">
      {/* bg */}
      <GridRunners />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal-slide-up mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#4a4a4a]" />
            <span className="label-mono text-[#5f5f5f]">001 / ABOUT</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <h2
              className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none"
              style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
            >
              About{" "}
              <span className="text-[#4a4a4a]">me</span>
            </h2>
            <span className="label-mono text-[#4a4a4a] text-xs hidden md:block pb-2">
              $ cat ./about.txt
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left — Bio */}
          <div className="reveal-slide-left space-y-12">
            {/* Photo */}
            <div className="relative inline-block">
              {/* Offset frame */}
              <div className="absolute -inset-2.5 border border-[#333] translate-x-2 translate-y-2" />
              <div className="relative w-48 h-48 border border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
                <Image
                  src="/images/whoami.webp"
                  alt="Egor Nurullin"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#555]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#555]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#555]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#555]" />
              </div>
              {/* Bottom label */}
              <div className="absolute -bottom-3 left-2 px-2 py-0.5 bg-[#080808] border border-[#1a1a1a] label-mono text-[#5f5f5f] text-[10px]">
                WHOAMI.WEBP
              </div>
              {/* Top-right tag */}
              <div className="absolute -top-3 right-2 px-2 py-0.5 bg-[#080808] border border-[#1a1a1a] label-mono text-[#333] text-[10px]">
                E.N.
              </div>
            </div>

            <TerminalFrame title="BIO.TXT">
              <div className="space-y-4">
                <p className="text-[#8a8a8a] text-sm font-mono leading-relaxed">
                  <span className="text-[#5f5f5f]">$</span> Hi, I’m{" "}
                  <span className="text-[#ccc]">Egor</span> — a student on the
                  School of Computer Science. I’m passionate about developing web
                  applications and solving algorithmic problems.
                </p>
                <p className="text-[#8a8a8a] text-sm font-mono leading-relaxed">
                  In my spare time, I take part in hackathons, learn about new
                  technologies and work on my own projects. I’m looking for
                  opportunities for internships and collaboration.
                </p>
              </div>
            </TerminalFrame>

            {/* Stats */}
            <TerminalFrame title="STATS.TXT">
              <div className="grid grid-cols-3 gap-px bg-[#1a1a1a]">
                {[
                  { n: "3+", l: "years of coding experience" },
                  { n: "5+", l: "projects" },
                  { n: "∞", l: "interests" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#0d0d0d] p-4 text-center">
                    <div className="text-2xl text-[#f0f0f0] font-mono mb-1">
                      {s.n}
                    </div>
                    <div className="label-mono text-[#5f5f5f] text-[10px]">{s.l}</div>
                  </div>
                ))}
              </div>
            </TerminalFrame>
          </div>

          {/* Right — Stack + Timeline */}
          <div className="reveal-slide-right space-y-12">
            {/* Tech Stack */}
            <TerminalFrame title="STACK.TXT">
              <div className="grid grid-cols-2 gap-px bg-[#111]">
                {stack.map((s) => (
                  <div key={s.cat} className="bg-[#080808] p-4">
                    <div className="label-mono text-[#3a3a3a] mb-3 text-[10px]">
                      {s.cat}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {s.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-[#3a3a3a] shrink-0" />
                          <span className="label-mono text-[#6f6f6f] hover:text-[#9a9a9a] transition-colors cursor-default">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TerminalFrame>

            {/* Timeline */}
            <TerminalFrame title="JOURNEY.TXT">
              <div className="relative space-y-0">
                {/* vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-[#666]" />
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-6 relative">
                    {/* dot */}
                    <div className="relative z-10 w-16 shrink-0 flex items-start pt-4">
                      <div
                        className={`w-2 h-2 border ${
                          i === timeline.length - 1
                            ? "border-[#666] bg-[#666]"
                            : "border-[#666] bg-[#080808]"
                        }`}
                      />
                    </div>
                    {/* content */}
                    <div className="pb-8 pt-3">
                      <div className="label-mono text-[#4a4a4a] text-[10px] mb-1">
                        {t.year}
                      </div>
                      <div className="text-[#9a9a9a] text-xs font-mono mb-0.5">
                        {t.label}
                      </div>
                      <div className="text-[#5f5f5f] text-xs font-mono">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
