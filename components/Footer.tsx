"use client";

import { useLanguage } from "@/lib/language";
import KayiLogo from "./KayiLogo";

export default function Footer() {
  const { language } = useLanguage();
  const disciplines =
    language === "en"
      ? ["Marine", "Carpentry", "Decoration", "Craftsmanship"]
      : ["Marine", "Marangozluk", "Dekorasyon", "Zanaatkarlık"];

  return (
    <footer className="border-t border-bronze/20 bg-black py-10 text-ivory">
      <div className="section-shell flex flex-col gap-8 text-[0.62rem] uppercase tracking-label text-ivory/52 md:flex-row md:items-center md:justify-between">
        <KayiLogo size="footer" tone="bronze" />
        <div className="flex flex-wrap gap-4">
          {disciplines.map((discipline, index) => (
            <span key={discipline} className="flex gap-4">
              <span>{discipline}</span>
              {index < disciplines.length - 1 ? <span>/</span> : null}
            </span>
          ))}
        </div>
        <div className="flex gap-6">
          <a href="https://instagram.com" className="transition-colors hover:text-bronze">
            Instagram
          </a>
          <a href="https://linkedin.com" className="transition-colors hover:text-bronze">
            LinkedIn
          </a>
        </div>
        <p>© {new Date().getFullYear()} KAYI Bodrum</p>
      </div>
    </footer>
  );
}
