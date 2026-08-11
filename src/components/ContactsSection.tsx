"use client";

import { useState } from "react";

const contacts = [
  {
    id: "phone",
    label: "PHONE",
    value: "+7 (929) 631-15-04",
    display: "+7 929 631 15 04",
    icon: PhoneIcon,
    action: "tel:+79296311504",
    actionLabel: "CALL",
    hint: "Available: 10:00 – 22:00",
  },
  {
    id: "telegram",
    label: "TELEGRAM",
    value: "@vultourjol",
    display: "@vultourjol",
    icon: TelegramIcon,
    action: "https://t.me/vultourjol",
    actionLabel: "WRITE",
    hint: "I respond within an hour",
  },
  {
    id: "email",
    label: "EMAIL",
    value: "vultourjol@yandex.ru",
    display: "vultourjol@yandex.ru",
    icon: MailIcon,
    action: "mailto:vultourjol@yandex.ru",
    actionLabel: "SEND EMAIL",
    hint: "For official inquiries",
  },
];

export default function ContactsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="contacts" className="relative py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #0f0f0f 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="reveal-slide-up mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#333]" />
            <span className="label-mono text-[#444]">003 / CONTACTS</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none"
            style={{ fontFamily: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" }}
          >
            My
            <br />
            <span className="text-[#333]">Contacts</span>
          </h2>
          <p className="mt-6 text-[#444] text-sm max-w-sm label-mono leading-relaxed">
            Open to new projects,
            <br />
            internships and collaboration.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111]">
          {contacts.map((c) => (
            <ContactCard
              key={c.id}
              contact={c}
              copied={copiedId === c.id}
              onCopy={() => copy(c.id, c.value)}
            />
          ))}
        </div>

        {/* Extra info row */}
        <div className="reveal-on-scroll mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#111] pt-12">
          <InfoItem label="LOCATION" value="Moscow, Russia" />
          <InfoItem label="TIME ZONE" value="UTC+3 (MSK)" />
          <InfoItem label="STATUS" value="Student / Freelancer" />
        </div>

        {/* GitHub link */}
        <div className="reveal-on-scroll mt-16 flex items-center justify-center">
          <a
            href="https://github.com/vultourjol"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 border border-[#1a1a1a] hover:border-[#333] transition-all bg-[#0a0a0a] hover:bg-[#101010]"
          >
            <GitHubIcon />
            <div className="text-left">
              <div className="label-mono text-[#333] text-[10px]">github.com/vultourjol</div>
            </div>
            <span className="label-mono text-[#333] group-hover:text-[#555] transition-colors ml-4">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Bottom section / Footer */}
      <div className="relative z-10 max-w-7xl mx-auto mt-32 pt-8 border-t border-[#111]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="label-mono text-[#222] text-[10px]">
            © 2026 VULTOURJOL — PORTFOLIO
          </span>
          <span className="label-mono text-[#1a1a1a] text-[10px]">
            BUILT WITH NEXT.JS + REACT AND LOVE <span className="text-[#ff6b6b]">♥</span>
          </span>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  contact: (typeof contacts)[0];
  copied: boolean;
  onCopy: () => void;
}

function ContactCard({ contact, copied, onCopy }: ContactCardProps) {
  const Icon = contact.icon;
  return (
    <div className="scale-on-scroll group relative bg-[#080808] p-8 card-hover border border-transparent hover:border-[#1f1f1f]">
      {/* Icon */}
      <div className="mb-6">
        <Icon />
      </div>

      {/* Label */}
      <div className="label-mono text-[#333] mb-2">{contact.label}</div>

      {/* Value */}
      <div className="text-white text-sm font-mono mb-1 tracking-wide">
        {contact.display}
      </div>

      {/* Hint */}
      <div className="label-mono text-[#2a2a2a] text-[10px] mb-8">{contact.hint}</div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href={contact.action}
          target={contact.id === "telegram" ? "_blank" : undefined}
          rel={contact.id === "telegram" ? "noopener noreferrer" : undefined}
          className="flex-1 text-center py-2 border border-[#1f1f1f] label-mono text-[#444] text-[10px] hover:border-[#444] hover:text-[#888] transition-all"
        >
          {contact.actionLabel}
        </a>
        <button
          onClick={onCopy}
          className="px-3 py-2 border border-[#1a1a1a] transition-all hover:border-[#333] hover:text-[#666]"
          style={{ color: copied ? "#f0f0f0" : "#333" }}
          title={copied ? "Скопировано" : "Копировать"}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="label-mono text-[#2a2a2a] mb-2">{label}</div>
      <div className="text-[#555] text-sm font-mono">{value}</div>
    </div>
  );
}

/* ─── Icons ────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width="19" height="19" stroke="#222" />
      <path
        d="M7 4h6M5 4h1M14 4h1M5 6v8a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1zM9 13h2"
        stroke="#444"
        strokeWidth="0.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width="19" height="19" stroke="#222" />
      <path
        d="M4 10l2 1 1 3 2-2 3 2 2-7-10 3z"
        stroke="#444"
        strokeWidth="0.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M8 11l1 3" stroke="#444" strokeWidth="0.8" strokeLinecap="square" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 20 20" fill="none">
      <rect x="0.5" y="0.5" width="19" height="19" stroke="#222" />
      <rect x="4" y="6" width="12" height="8" stroke="#444" strokeWidth="0.8" />
      <path d="M4 6l6 5 6-5" stroke="#444" strokeWidth="0.8" strokeLinecap="square" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <rect x="6" y="6" width="10" height="10" stroke="currentColor" strokeWidth="0.9" />
      <path
        d="M4 10V4.5A1.5 1.5 0 015.5 3H11"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="#333"
      />
    </svg>
  );
}
