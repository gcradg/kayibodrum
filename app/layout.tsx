import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "../styles/globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "KAYI Bodrum | Mediterranean Marine & Interior Craftsmanship",
  description:
    "Luxury Bodrum atelier for marine applications, bespoke carpentry, interior decoration and refined craftsmanship.",
  metadataBase: new URL("https://kayibodrum.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="grain">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
