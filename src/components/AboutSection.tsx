"use client";

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pixel-grid-dense opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, #0d0d0d 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal-slide-up mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#333]" />
            <span className="label-mono text-[#444]">001 / ABOUT</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none"
            style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
          >
            About me<span className="text-[#1f1f1f]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left — Bio */}
          <div className="reveal-slide-left space-y-12">
            {/* Avatar placeholder */}
            <div className="relative w-48 h-48 border border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
              <div className="absolute inset-0 pixel-grid opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="label-mono text-[#222] text-xs text-center">
                  [ PHOTO ]<br />CLASSIFIED
                </span>
              </div>
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#333]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#333]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#333]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#333]" />
            </div>

            <div className="space-y-4">
              <p className="text-[#666] text-sm font-mono leading-relaxed">
                Hi, I’m <span className="text-[#ccc]">Egor</span> — a student on the School of Computer Science. I’m passionate about developing web applications and solving algorithmic problems.
              </p>
              <p className="text-[#444] text-sm font-mono leading-relaxed">
                In my spare time, I take part in hackathons, learn about new technologies and work on my own projects. I’m looking for opportunities for internships and collaboration.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-[#111]">
              {[
                { n: "3+", l: "years of coding experience" },
                { n: "6+", l: "projects" },
                { n: "∞", l: "interests" },
              ].map((s) => (
                <div key={s.l} className="bg-[#080808] p-4 text-center">
                  <div className="text-2xl text-white font-light mb-1">{s.n}</div>
                  <div className="label-mono text-[#333] text-[10px]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stack + Timeline */}
          <div className="reveal-slide-right space-y-12">
            {/* Tech Stack */}
            <div>
              <div className="label-mono text-[#333] mb-6">TECH STACK</div>
              <div className="grid grid-cols-2 gap-px bg-[#111]">
                {stack.map((s) => (
                  <div key={s.cat} className="bg-[#080808] p-4">
                    <div className="label-mono text-[#2a2a2a] mb-3 text-[10px]">
                      {s.cat}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {s.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-[#2a2a2a] shrink-0" />
                          <span className="label-mono text-[#555] hover:text-[#888] transition-colors cursor-default">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="label-mono text-[#333] mb-6">JOURNEY</div>
              <div className="relative space-y-0">
                {/* vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1a1a1a]" />
                {timeline.map((t, i) => (
                  <div key={t.year} className="flex gap-6 relative">
                    {/* dot */}
                    <div className="relative z-10 w-16 shrink-0 flex items-start pt-4">
                      <div
                        className={`w-2 h-2 border ${
                          i === timeline.length - 1
                            ? "border-[#555] bg-[#555]"
                            : "border-[#222] bg-[#080808]"
                        }`}
                      />
                    </div>
                    {/* content */}
                    <div className="pb-8 pt-3">
                      <div className="label-mono text-[#333] text-[10px] mb-1">
                        {t.year}
                      </div>
                      <div className="text-[#888] text-xs font-mono mb-0.5">
                        {t.label}
                      </div>
                      <div className="text-[#3a3a3a] text-xs font-mono">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
