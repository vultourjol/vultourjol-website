import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "vultourjol — portfolio",
  description:
    "The portfolio of a student programmer who’s genuinely trying their best.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
