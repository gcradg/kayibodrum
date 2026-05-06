"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import KayiLogo from "./KayiLogo";

const nav = {
  en: [
    { label: "Work", href: "/#work" },
    { label: "Atelier", href: "/#atelier" },
    { label: "Marine", href: "/#services" },
    { label: "Interiors", href: "/#materials" },
    { label: "Contact", href: "/#contact" }
  ],
  tr: [
    { label: "İşler", href: "/#work" },
    { label: "Atölye", href: "/#atelier" },
    { label: "Marine", href: "/#services" },
    { label: "İç Mekan", href: "/#materials" },
    { label: "İletişim", href: "/#contact" }
  ]
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 160], ["rgba(15,15,15,0)", "rgba(15,15,15,0.72)"]);
  const borderColor = useTransform(scrollY, [0, 160], ["rgba(194,164,118,0)", "rgba(194,164,118,0.18)"]);
  const activeNav = nav[language];

  return (
    <>
      <motion.header
        style={{ backgroundColor, borderColor }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <Link href="/" className="group flex min-w-0 items-center">
            <KayiLogo size="header" tone="bronze" />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {activeNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[0.66rem] uppercase tracking-label text-ivory/78"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-bronze transition-all duration-500 ease-luxury group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {(["en", "tr"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLanguage(item)}
                className={`text-[0.62rem] uppercase tracking-label transition-colors ${
                  language === item ? "text-bronze" : "text-ivory/48 hover:text-ivory"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="relative z-[70] flex h-9 w-10 flex-col items-end justify-center gap-2 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span className={`h-px bg-bronze transition-all ${open ? "w-8 translate-y-[4.5px] rotate-45" : "w-8"}`} />
            <span className={`h-px bg-bronze transition-all ${open ? "w-8 -translate-y-[4.5px] -rotate-45" : "w-5"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] overflow-y-auto bg-black px-6 pt-28 text-ivory md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="label">{language === "en" ? "Navigation" : "Navigasyon"}</div>
              <div className="flex gap-3">
                {(["en", "tr"] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => setLanguage(item)}
                    className={`text-xs uppercase tracking-label ${language === item ? "text-bronze" : "text-ivory/45"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {activeNav.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12 + index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[clamp(2.6rem,14vw,4.5rem)] uppercase tracking-tight text-ivory"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
