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
  title: "BlueLoom Ventures — IT Consulting for Small Business",
  description:
    "We help small businesses fix messy systems, improve security, and automate repetitive work. Project-based IT consulting with no contracts and no big invoices.",
  keywords: [
    "IT consulting small business",
    "Microsoft 365 setup",
    "Google Workspace consulting",
    "business process automation",
    "security backup setup",
    "small business IT support",
    "workflow automation",
    "IT system cleanup",
  ],
  openGraph: {
    title: "BlueLoom Ventures — IT Consulting for Small Business",
    description:
      "We help small businesses fix messy systems, improve security, and automate repetitive work. Project-based, flat-rate, no contracts.",
    type: "website",
    siteName: "BlueLoom Ventures",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueLoom Ventures — IT Consulting for Small Business",
    description:
      "We help small businesses fix messy systems, improve security, and automate repetitive work. Project-based, flat-rate, no contracts.",
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
