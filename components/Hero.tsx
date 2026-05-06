"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/language";
import AnimatedText from "./AnimatedText";

const copy = {
  en: {
    label: "KAYI BODRUM — MARINE / CARPENTRY / DECORATION",
    title: "Mediterranean Craftsmanship for Marine & Interior Spaces",
    subtitle: "Bespoke marine applications, carpentry and decoration crafted in Bodrum.",
    scroll: "Scroll"
  },
  tr: {
    label: "KAYI BODRUM — MARINE / MARANGOZLUK / DEKORASYON",
    title: "Marine ve İç Mekanlar için Akdeniz Zanaatkarlığı",
    subtitle: "Bodrum'da üretilen özel marine uygulamaları, marangozluk ve dekorasyon.",
    scroll: "Kaydır"
  }
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = copy[language];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black">
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image
          src="/images/hero-yacht.jpg"
          alt="Luxury yacht and Mediterranean coastline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/58 to-black/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_36%,transparent_0,rgba(15,15,15,0.28)_34%,rgba(15,15,15,0.82)_100%)]" />
      <div className="absolute inset-0 noise" />

      <motion.div
        style={{ y: textY, opacity }}
        className="section-shell relative z-10 flex min-h-screen flex-col justify-end pb-24 pt-32 md:pb-16"
      >
        <motion.p
          className="label mb-7 max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {t.label}
        </motion.p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.75rem,13vw,9.8rem)] leading-[0.92] tracking-[-0.06em] text-ivory text-balance">
          <AnimatedText text={t.title} delay={2.25} />
        </h1>
        <motion.p
          className="mt-8 max-w-xl text-base leading-7 text-ivory/72 md:ml-auto md:mr-24 md:text-lg md:leading-8"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.subtitle}
        </motion.p>

        <div className="absolute bottom-8 left-5 flex items-center gap-4 text-[0.62rem] uppercase tracking-label text-ivory/55 sm:left-8 lg:left-12">
          <span className="h-px w-14 bg-bronze" />
          {t.scroll}
        </div>
      </motion.div>
    </section>
  );
}
