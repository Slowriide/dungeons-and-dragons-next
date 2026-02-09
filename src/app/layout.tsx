import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Toaster } from "@/components/ui/sonner";

/**
 * Primary sans-serif font used across the application UI.
 * Loaded via next/font to enable automatic optimization and CSS variables.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Decorative font used for headings and branding elements.
 * Kept separate to avoid overusing it in body text.
 */
const geistCinzel = Geist({
  variable: "--font-geist-cincel",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Global metadata applied to the entire application.
 * Page-level metadata can override or extend this.
 */
export const metadata: Metadata = {
  title: {
    default: "D&D Mini Beyond",
    template: "%s | D&D Mini Beyond",
  },
  description:
    "A modern Dungeons & Dragons 5e compendium to explore spells, classes, monsters, races and equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Setting the language helps SEO and screen readers
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistCinzel.variable} antialiased`}
      >
        {/* 
          Global providers wrapper.
          This is the single place for theme, UI state, toasts, etc.
        */}
        <Providers>{children}</Providers>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
