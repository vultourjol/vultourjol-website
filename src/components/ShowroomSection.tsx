"use client";

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  status: "WIP" | "LIVE" | "CONCEPT";
  description: string;
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "proj-01",
    num: "01",
    title: "PROJECT_ALPHA",
    subtitle: "Web Application",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2026",
    status: "WIP",
    description:
      "Fully functional web application with authentication, database and REST API. Photo materials will be added later.",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    id: "proj-02",
    num: "02",
    title: "PROJECT_BETA",
    subtitle: "Mobile Application",
    tags: ["React Native", "Node.js", "MongoDB"],
    year: "2026",
    status: "CONCEPT",
    description:
      "Cross-platform mobile application. Repository and demo will be added after completion.",
    repoUrl: "#",
  },
  {
    id: "proj-03",
    num: "03",
    title: "PROJECT_GAMMA",
    subtitle: "CLI Utility",
    tags: ["Python", "Click", "Docker"],
    year: "2026",
    status: "LIVE",
    description:
      "Command-line tool for development task automation. Available on GitHub.",
    repoUrl: "#",
    liveUrl: "#",
  },
  {
    id: "proj-04",
    num: "04",
    title: "PROJECT_DELTA",
    subtitle: "Algorithms / DS",
    tags: ["C++", "Algorithms", "Data Structures"],
    year: "2026",
    status: "LIVE",
    description:
      "Collection of algorithm implementations and data structures for educational purposes.",
    repoUrl: "#",
  },
  {
    id: "proj-05",
    num: "05",
    title: "PROJECT_EPSILON",
    subtitle: "Machine Learning",
    tags: ["Python", "PyTorch", "NumPy"],
    year: "2026",
    status: "WIP",
    description:
      "Experiments with neural networks. Results and datasets will be published.",
    repoUrl: "#",
  },
  {
    id: "proj-06",
    num: "06",
    title: "PROJECT_ZETA",
    subtitle: "Open Source",
    tags: ["TypeScript", "OSS"],
    year: "2026",
    status: "CONCEPT",
    description:
      "Open source project in development. Ideas and concepts are being formed.",
  },
];

const statusColors: Record<Project["status"], string> = {
  LIVE: "#f0f0f0",
  WIP: "#555555",
  CONCEPT: "#333333",
};

export default function ShowroomSection() {
  return (
    <section id="showroom" className="relative py-40 px-6">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pixel-grid-dense opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal-slide-up mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#333]" />
            <span className="label-mono text-[#444]">002 / SHOWROOM</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none"
            style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
          >
            My
            <br />
            <span className="text-[#333]">Projects</span>
          </h2>
          <p className="mt-6 text-[#444] text-sm max-w-md label-mono leading-relaxed">
            Placeholders for future projects.
            <br />
            Photos, links and descriptions will be added as they become available.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#151515]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom label */}
        <div className="reveal-on-scroll mt-16 flex items-center justify-between">
          <span className="label-mono text-[#2a2a2a]">
            {projects.length} PROJECTS / UPDATED
          </span>
          <div className="flex items-center gap-3">
            <span className="label-mono text-[#2a2a2a]">STATUSES:</span>
            {(["LIVE", "WIP", "CONCEPT"] as const).map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 inline-block"
                  style={{ backgroundColor: statusColors[s] }}
                />
                <span className="label-mono" style={{ color: statusColors[s], fontSize: "0.6rem" }}>
                  {s}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="scale-on-scroll group relative bg-[#080808] p-8 card-hover cursor-default border border-transparent hover:border-[#1f1f1f]">
      {/* Number */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-mono text-[#222] text-2xl font-light">
          {project.num}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Placeholder image area */}
      <div className="relative mb-6 w-full aspect-video bg-[#0d0d0d] border border-[#1a1a1a] overflow-hidden">
        {/* Pixel art placeholder pattern */}
        <div className="absolute inset-0 pixel-grid opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="text-[#222] text-xs label-mono">[ PHOTO / SCREENSHOT ]</div>
          <div className="text-[#1a1a1a] text-[10px] label-mono">PLACEHOLDER</div>
        </div>
        {/* Corner pixels */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#222]" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#222]" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#222]" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#222]" />
      </div>

      {/* Title */}
      <h3 className="text-white text-sm tracking-widest mb-1 font-mono group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="label-mono text-[#444] mb-4">{project.subtitle}</p>

      {/* Description */}
      <p className="text-[#3a3a3a] text-xs leading-relaxed mb-6 font-mono">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border border-[#1f1f1f] label-mono text-[#333] text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between">
        <span className="label-mono text-[#2a2a2a]">{project.year}</span>
        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="label-mono text-[#333] hover:text-[#888] transition-colors text-[10px] flex items-center gap-1"
            >
              REPO{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                className="inline-block"
              >
                <rect x="7" y="7" width="9" height="9" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M3 11V5.5A1.5 1.5 0 014.5 4H10"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="label-mono text-[#333] hover:text-[#888] transition-colors text-[10px] flex items-center gap-1"
            >
              LIVE{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                className="inline-block"
              >
                <rect x="7" y="7" width="9" height="9" stroke="currentColor" strokeWidth="1" />
                <path
                  d="M3 11V5.5A1.5 1.5 0 014.5 4H10"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          )}
          {!project.repoUrl && !project.liveUrl && (
            <span className="label-mono text-[#222] text-[10px]">SOON</span>
          )}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="w-1.5 h-1.5 inline-block"
        style={{
          backgroundColor: statusColors[status],
          ...(status === "LIVE" ? { animation: "pulse-dot 2s ease-in-out infinite" } : {}),
        }}
      />
      <span
        className="label-mono text-[10px]"
        style={{ color: statusColors[status] }}
      >
        {status}
      </span>
    </div>
  );
}
