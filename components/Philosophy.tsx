"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    label: "Philosophy",
    statement: "Luxury is not excess. It is proportion, silence and the confidence of a detail done right."
  },
  tr: {
    label: "Felsefe",
    statement: "Lüks, fazlalık değildir. Oran, sessizlik ve doğru yapılmış bir detayın özgüvenidir."
  }
};

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = copy[language];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleX = useTransform(scrollYProgress, [0.18, 0.72], [0, 1]);

  return (
    <section ref={ref} className="relative grid min-h-screen place-items-center overflow-hidden bg-ivory px-5 py-24 text-black">
      <motion.div style={{ scaleX }} className="absolute left-[8%] top-1/2 h-px w-[84%] origin-left bg-bronze/45" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="label mb-9">{t.label}</p>
        <h2 className="font-serif text-[clamp(2.55rem,11vw,8rem)] leading-[1.04] tracking-[-0.06em] text-balance">
          {t.statement}
        </h2>
        <p className="mt-10 font-serif text-xl uppercase tracking-logo text-bronze">KAYI Bodrum</p>
      </div>
    </section>
  );
}
