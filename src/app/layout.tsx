import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexplora — Experiential Learning Partner",
  description:
    "Nexplora mengubah perjalanan menjadi pengalaman belajar bermakna melalui eksplorasi dunia nyata, pertukaran budaya, dan kolaborasi pendidikan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
