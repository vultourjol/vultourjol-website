interface TerminalFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalFrame({
  title,
  children,
  className,
}: TerminalFrameProps) {
  return (
    <div className={`relative border border-[#3a3a3a] bg-[#0d0d0d] ${className ?? ""}`}>
      {/* Corner markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#666]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#666]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#666]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#666]" />

      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a1a1a] bg-[#080808]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#5a5a5a]" />
          <span className="w-1.5 h-1.5 bg-[#4a4a4a]" />
          <span className="w-1.5 h-1.5 bg-[#333]" />
        </div>
        <span className="label-mono text-[#6f6f6f] text-[10px] tracking-widest">
          {title}
        </span>
        <span className="inline-block w-1.5 h-3 bg-[#5a5a5a] blink" />
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}
