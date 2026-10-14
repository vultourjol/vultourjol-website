"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import GridRunners from "./GridRunners";

interface ProjectPhoto {
  src: string;
  caption: string;
}

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
  photos?: ProjectPhoto[];
}

const projects: Project[] = [
  {
    id: "proj-01",
    num: "01",
    title: "16/9 CREATIVE STUDIO",
    subtitle: "Вебсайт / Веб Приложение",
    tags: ["React Native", "Node.js", "MongoDB"],
    year: "2026",
    status: "LIVE",
    description:
      "Вебсайт шоукейс для студии видео продакшена.",
    repoUrl: "https://github.com/vultourjol/16-9-website",
    liveUrl: "https://16-9-website.vercel.app/",
    photos: [
      { src: "/images/project-2/2.1.webp", caption: "SCREENSHOT 01" },
      { src: "/images/project-2/2.2.webp", caption: "SCREENSHOT 02" },
      { src: "/images/project-2/2.3.webp", caption: "SCREENSHOT 03" },
      { src: "/images/project-2/2.4.webp", caption: "SCREENSHOT 04" },
      { src: "/images/project-2/2.5.webp", caption: "SCREENSHOT 05" },
      { src: "/images/project-2/2.6.webp", caption: "SCREENSHOT 06" },
    ],
  },
  {
    id: "proj-02",
    num: "02",
    title: "PRODBYLELYA",
    subtitle: "Вебсайт / Веб Приложение",
    tags: ["HTML", "JavaScript", "TypeScript", "TailwindCSS"],
    year: "2024",
    status: "LIVE",
    description:
      "Сайт портфолио для продюсера / режиссёра монтажа.",
    repoUrl: "https://github.com/vultourjol/film-producer-website",
    liveUrl: "https://vultourjol.github.io/film-producer-website/",
    photos: [
      { src: "/images/project-1/1.1.webp", caption: "SCREENSHOT 01" },
      { src: "/images/project-1/1.2.webp", caption: "SCREENSHOT 02" },
      { src: "/images/project-1/1.3.webp", caption: "SCREENSHOT 03" },
      { src: "/images/project-1/1.4.webp", caption: "SCREENSHOT 04" },
      { src: "/images/project-1/1.5.webp", caption: "SCREENSHOT 05" },
    ],
  },
  {
    id: "proj-03",
    num: "03",
    title: "boiler-online-store",
    subtitle: "Вебсайт / Веб Приложение",
    tags: ["HTML", "JavaScript", "TypeScript", "TailwindCSS"],
    year: "2025",
    status: "WIP",
    description:
      "Вебсайт онлайн магазина по продаже отопительных котлов.",
    repoUrl: "https://github.com/vultourjol/boiler-online-store",
    liveUrl: "https://boiler-online-store.vercel.app/",
    photos: [
      { src: "/images/project-3/3.1.webp", caption: "SCREENSHOT 01" },
      { src: "/images/project-3/3.2.webp", caption: "SCREENSHOT 02" },
      { src: "/images/project-3/3.3.webp", caption: "SCREENSHOT 03" },
      { src: "/images/project-3/3.4.webp", caption: "SCREENSHOT 04" },
      { src: "/images/project-3/3.5.webp", caption: "SCREENSHOT 05" },
    ],
  },
  {
    id: "proj-04",
    num: "04",
    title: "media-downloader",
    subtitle: "Десктоп приложение",
    tags: ["Swift", "arm64", "yt-dlp", "ffmpeg", "ffprobe", "deno"],
    year: "2026",
    status: "LIVE",
    description:
      "macOS приложение для загрузки любого медиа (видео и аудио). Только для apple silicon.",
    photos: [
      { src: "/images/project-4/4.1.webp", caption: "SCREENSHOT 01" },
      { src: "/images/project-4/4.2.webp", caption: "SCREENSHOT 02" },
      { src: "/images/project-4/4.3.webp", caption: "SCREENSHOT 03" },
    ],
  },
  {
    id: "proj-05",
    num: "05",
    title: "PROJECT_ALPHA",
    subtitle: "Open Source",
    tags: ["..//LOADING..", "..//00110100 00110000 00110100.."],
    year: "202-",
    status: "CONCEPT",
    description:
      "..//в разработке..",
  },
  {
    id: "proj-06",
    num: "06",
    title: "PROJECT_BETA",
    subtitle: "Open Source",
    tags: ["..//LOADING..", "..//00110100 00110000 00110100.."],
    year: "202-",
    status: "CONCEPT",
    description:
      "..//в разработке..",
  },
];

for (const p of projects) {
  if (!p.photos) {
    p.photos = Array.from({ length: 4 }, (_, i) => ({
      src: photoPlaceholder(p.num, i),
      caption: `SCREENSHOT 0${i + 1}`,
    }));
  }
}

function photoPlaceholder(num: string, i: number): string {
  const shades = ["#0b0b0b", "#0d0d0d", "#101010", "#121212"];
  const bg = shades[i % shades.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<rect width="1200" height="800" fill="${bg}"/>
<defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#161616" stroke-width="1"/></pattern></defs>
<rect width="1200" height="800" fill="url(#g)"/>
<rect x="1" y="1" width="1198" height="798" fill="none" stroke="#1f1f1f" stroke-width="1"/>
<text x="60" y="80" fill="#333" font-family="monospace" font-size="24" letter-spacing="6">[ PHOTO / SCREENSHOT ]</text>
<text x="60" y="116" fill="#1c1c1c" font-family="monospace" font-size="16" letter-spacing="6">PLACEHOLDER</text>
<text x="1140" y="760" fill="#151515" font-family="monospace" font-size="200" text-anchor="end">${num}</text>
<text x="60" y="760" fill="#2a2a2a" font-family="monospace" font-size="16" letter-spacing="6">${String(i + 1).padStart(2, "0")} / 04</text>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const statusColors: Record<Project["status"], string> = {
  LIVE: "#f0f0f0",
  WIP: "#555555",
  CONCEPT: "#333333",
};

export default function ShowroomSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="showroom" className="relative py-40 px-6">
      {/* Subtle grid bg */}
      <GridRunners />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal-slide-up mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#4a4a4a]" />
            <span className="label-mono text-[#5f5f5f]">002 / ШОУРУМ</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <h2
              className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none"
              style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
            >
              Мои
              <br />
              <span className="text-[#4a4a4a]">Проекты</span>
            </h2>
            <span className="label-mono text-[#4a4a4a] text-xs hidden md:block pb-2">
              $ ls ./projects
            </span>
          </div>
          <p className="mt-6 text-[#5f5f5f] text-sm max-w-md label-mono leading-relaxed">
            Фото, ссылки и описание будут добавлены по мере доступности.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>

        {/* Bottom label */}
        <div className="reveal-on-scroll mt-16 flex items-center justify-between">
          <span className="label-mono text-[#3a3a3a]">
            {projects.length} ПРОЕКТОВ / ОБНОВЛЕНО
          </span>
          <div className="flex items-center gap-3">
            <span className="label-mono text-[#3a3a3a]">СТАТУСЫ:</span>
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

      {/* Project gallery modal */}
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="scale-on-scroll group relative bg-[#080808] p-8 card-hover cursor-pointer border border-transparent hover:border-[#4a4a4a]"
    >
      {/* Number */}
      <div className="flex items-center justify-between mb-8">
        <span className="label-mono text-[#333] text-2xl font-light">
          {project.num}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Photo / placeholder area */}
      <div className="relative mb-6 w-full aspect-8/5 bg-[#0d0d0d] border border-[#1a1a1a] overflow-hidden">
        {project.photos?.[0] ? (
          <Image
            src={project.photos[0].src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <>
            {/* Pixel art placeholder pattern */}
            <div className="absolute inset-0 pixel-grid opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="text-[#333] text-xs label-mono">[ PHOTO / SCREENSHOT ]</div>
              <div className="text-[#3a3a3a] text-[10px] label-mono">PLACEHOLDER</div>
            </div>
            {/* Corner pixels */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#333]" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#333]" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#333]" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#333]" />
          </>
        )}
      </div>

      {/* Title */}
      <h3 className="text-white text-sm tracking-widest mb-1 font-mono group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="label-mono text-[#5f5f5f] mb-4">{project.subtitle}</p>

      {/* Description */}
      <p className="text-[#6f6f6f] text-xs leading-relaxed mb-6 font-mono">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border border-[#3a3a3a] label-mono text-[#4a4a4a] text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between">
        <span className="label-mono text-[#3a3a3a]">{project.year}</span>
        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-[#3a3a3a] label-mono text-[#7a7a7a] hover:text-[#f0f0f0] hover:border-[#666] transition-all text-xs flex items-center gap-2"
            >
              REPO{" "}
              <svg
                width="14"
                height="14"
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
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-[#3a3a3a] label-mono text-[#7a7a7a] hover:text-[#f0f0f0] hover:border-[#666] transition-all text-xs flex items-center gap-2"
            >
              LIVE{" "}
              <svg
                width="14"
                height="14"
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
            <span className="px-4 py-2 label-mono text-[#333] text-xs">SOON</span>
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

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const photos = project.photos ?? [];
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    if (photos.length === 0) return;
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    if (photos.length === 0) return;
    setIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const photo = photos[index];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0a0a0a] border border-[#1a1a1a]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#111]">
          <div className="label-mono text-[#6f6f6f] text-xs tracking-widest">
            {project.num} / {project.title}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[#5f5f5f] hover:text-white transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {photos.length > 0 && photo ? (
          <>
            {/* Main image */}
            <div className="relative w-full aspect-8/5 bg-[#080808]">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#111]">
              <span className="label-mono text-[#6f6f6f] text-xs tracking-widest">
                {photo.caption}
              </span>
              <span className="label-mono text-[#4a4a4a] text-xs">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 px-6 py-4 overflow-x-auto">
              {photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`shrink-0 border transition-all ${
                    i === index
                      ? "border-[#888]"
                      : "border-transparent opacity-40 hover:opacity-80"
                  }`}
                >
                  <div className="w-24 aspect-8/5 relative">
                    <Image
                      src={p.src}
                      alt={p.caption}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center label-mono text-[#5f5f5f]">
            PHOTOS WILL BE ADDED LATER
          </div>
        )}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      {direction === "left" ? (
        <path
          d="M12 4L6 10l6 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      ) : (
        <path
          d="M8 4l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
}
