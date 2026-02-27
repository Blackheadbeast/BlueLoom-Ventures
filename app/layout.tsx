import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BlueLoom Ventures — Enterprise IT Consulting & Software Development",
  description:
    "BlueLoom Ventures delivers enterprise-grade software development, strategic IT consulting, AI automation, and quality assurance services for mid-market and enterprise organisations.",
  keywords: [
    "IT consulting",
    "enterprise software development",
    "software architecture",
    "QA automation",
    "AI automation",
    "cloud infrastructure",
    "system integration",
    "technology consulting",
  ],
  openGraph: {
    title: "BlueLoom Ventures — Enterprise IT Consulting & Software Development",
    description:
      "Strategic technology consulting and precision software delivery for organisations that require expertise, reliability, and measurable results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
