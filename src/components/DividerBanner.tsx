export default function DividerBanner({ text }: { text: string }) {
  const repeated = Array(8).fill(text).join(" · ");
  return (
    <div className="relative py-6 overflow-hidden border-y border-[#111]">
      <div className="flex gap-0">
        <div className="marquee-track flex gap-0 shrink-0 items-center">
          {Array(2)
            .fill(repeated)
            .map((t, i) => (
              <span key={i} className="shrink-0 label-mono text-[#1f1f1f] px-8 text-xs">
                {t}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
