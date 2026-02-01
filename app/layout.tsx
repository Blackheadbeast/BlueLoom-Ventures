import type { Metadata } from "next";
import "./globals.css";  // ← CRITICAL: This line imports Tailwind

export const metadata: Metadata = {
  title: "Blueloom Ventures - Automation. Simplified.",
  description: "Software that works while you don't.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}