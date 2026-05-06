"use client";

import { useLanguage } from "@/lib/language";
import AnimatedText from "./AnimatedText";
import RevealImage from "./RevealImage";

const copy = {
  en: {
    label: "The Atelier",
    title: "An atelier shaped by sea, wood and silence.",
    text: "KAYI Bodrum brings together marine know-how, carpentry precision and interior decoration for spaces that belong to the Mediterranean.",
    stats: ["Marine Applications", "Bespoke Woodwork", "Interior Detailing", "Bodrum Based"]
  },
  tr: {
    label: "Atölye",
    title: "Deniz, ahşap ve sessizlikle şekillenen bir atölye.",
    text: "KAYI Bodrum, Akdeniz'e ait hissettiren mekanlar için marine bilgisini, marangozluk hassasiyetini ve iç dekorasyon yaklaşımını bir araya getirir.",
    stats: ["Marine Uygulamalar", "Özel Ahşap İşleri", "İç Mekan Detayları", "Bodrum Merkezli"]
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="atelier" className="relative overflow-hidden bg-charcoal py-24 text-ivory md:min-h-screen md:py-32">
      <div className="section-shell grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="label mb-8">{t.label}</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-8xl">
            <AnimatedText text={t.title} />
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-9 text-ivory/68">
            {t.text}
          </p>
          <div className="mt-14 grid gap-6 border-t border-bronze/25 pt-8 sm:grid-cols-2">
            {t.stats.map((stat) => (
              <div key={stat} className="flex items-center gap-4">
                <span className="h-px w-10 bg-bronze" />
                <span className="text-[0.68rem] uppercase tracking-label text-ivory/68">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-[72%] w-px bg-bronze/35 lg:block" />
          <RevealImage
            src="/images/workshop.jpg"
            alt="KAYI Bodrum workshop with wood craft details"
            className="h-[54vh] min-h-[340px] sm:min-h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
