"use client";

import { useEffect, useRef } from "react";

const CELL = 20;
const SPEED = 3.5;
const COUNT = 4;
const DIRS = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
];

interface Runner {
  x: number;
  y: number;
  dir: number;
}

export default function GridRunners() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cols = 0;
    let rows = 0;
    let runners: Runner[] = [];
    let raf = 0;

    const spawn = () => {
      runners = Array.from({ length: COUNT }, () => ({
        x: Math.random() * cols,
        y: Math.random() * rows,
        dir: Math.floor(Math.random() * 4),
      }));
    };

    const resize = () => {
      const { width, height } = wrap.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      cols = Math.max(2, Math.floor(width / CELL));
      rows = Math.max(2, Math.floor(height / CELL));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawn();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      for (const r of runners) {
        const v = DIRS[r.dir];
        const prevX = r.x;
        const prevY = r.y;
        r.x += v.x * SPEED * dt;
        r.y += v.y * SPEED * dt;

        const crossed =
          v.x !== 0
            ? Math.floor(r.x) !== Math.floor(prevX)
            : Math.floor(r.y) !== Math.floor(prevY);

        if (crossed) {
          r.x = Math.round(r.x);
          r.y = Math.round(r.y);
          r.dir = pickDir(r.dir);
        }

        if (r.x >= cols) r.x -= cols;
        else if (r.x < 0) r.x += cols;
        if (r.y >= rows) r.y -= rows;
        else if (r.y < 0) r.y += rows;

        const px = r.x * CELL * dpr;
        const py = r.y * CELL * dpr;
        const s = CELL * dpr;

        ctx.fillStyle = "rgba(235, 235, 235, 0.14)";
        ctx.fillRect(px - s * 0.35, py - s * 0.35, s * 0.7, s * 0.7);
        ctx.fillStyle = "rgba(240, 240, 240, 0.7)";
        ctx.fillRect(px - s * 0.15, py - s * 0.15, s * 0.3, s * 0.3);
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 pixel-grid-dense opacity-40" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

function pickDir(dir: number): number {
  if (Math.random() < 0.6) return dir;
  return (dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
}
