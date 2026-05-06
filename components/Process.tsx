"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    label: "Process",
    title: "A slow sequence of decisions.",
    steps: [
      ["Discover", "We listen to the vessel, room and owner before drawing a single line."],
      ["Design", "Proportions, materials and details are reduced until the atmosphere becomes clear."],
      ["Craft", "Surfaces and objects are made with measured hands and durable finishes."],
      ["Install", "Every line is aligned on site, where light and use reveal the truth of the work."],
      ["Refine", "Small adjustments complete the piece until it feels as though it has always belonged."]
    ]
  },
  tr: {
    label: "Süreç",
    title: "Yavaş ilerleyen bir karar dizisi.",
    steps: [
      ["Keşif", "İlk çizgiyi atmadan önce tekneyi, mekanı ve sahibini dinleriz."],
      ["Tasarım", "Oranlar, malzemeler ve detaylar atmosfer netleşene kadar sadeleşir."],
      ["Üretim", "Yüzeyler ve objeler ölçülü ellerle, dayanıklı bitişlerle üretilir."],
      ["Montaj", "Her çizgi sahada hizalanır; ışık ve kullanım işin doğruluğunu gösterir."],
      ["Rafine", "Küçük ayarlar işi tamamlar, parça hep oradaymış gibi hissettirir."]
    ]
  }
};

export default function Process() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const t = copy[language];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index)
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section className="bg-black py-24 text-ivory md:py-32">
      <div ref={root} className="section-shell">
        <div className="sticky top-28 mb-12 md:float-left md:mb-0 md:w-[38%]">
          <p className="label mb-6">{t.label}</p>
          <h2 className="max-w-lg font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl md:text-7xl">
            {t.title}
          </h2>
          <div className="mt-10 hidden h-px w-3/4 bg-bronze/35 md:block" />
        </div>

        <div className="ml-auto md:w-[58%]">
          {t.steps.map(([title, text], index) => (
            <article
              key={title}
              data-process-step
              className="grid min-h-[34vh] gap-6 border-t border-bronze/25 py-10 last:border-b md:min-h-[44vh] md:grid-cols-[0.22fr_1fr] md:py-12"
            >
              <span className={`font-serif text-6xl transition-colors duration-500 ${active === index ? "text-bronze" : "text-ivory/18"}`}>
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-3xl tracking-[-0.04em] sm:text-4xl md:text-6xl">{title}</h3>
                <p className="mt-6 max-w-lg text-base leading-8 text-ivory/60">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="clear-both" />
      </div>
    </section>
  );
}
