"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    label: "Services",
    title: "Crafted for yachts, homes and objects.",
    intro: "We move between marine requirements and interior feeling, keeping each decision quiet, durable and exact.",
    services: [
      ["Marine Applications", "Yacht surfaces, deck details, signage, cabin details and marine-focused finishing.", "/images/yacht-detail.jpg"],
      ["Custom Carpentry", "Tailor-made wooden elements, furniture, wall panels, built-ins and detail production.", "/images/interior-wood.jpg"],
      ["Interior Decoration", "Material selection, styling, lighting harmony and refined Mediterranean atmosphere.", "/images/project-03.jpg"]
    ]
  },
  tr: {
    label: "Hizmetler",
    title: "Yatlar, evler ve özel objeler için üretildi.",
    intro: "Marine gereklilikleri ile iç mekan hissi arasında çalışır; her kararı sakin, dayanıklı ve net tutarız.",
    services: [
      ["Marine Uygulamalar", "Yat yüzeyleri, güverte detayları, tabela, kabin detayları ve marine odaklı bitişler.", "/images/yacht-detail.jpg"],
      ["Özel Marangozluk", "Ölçüye özel ahşap elemanlar, mobilya, duvar panelleri, gömme üretimler ve detay işleri.", "/images/interior-wood.jpg"],
      ["İç Mekan Dekorasyonu", "Malzeme seçimi, stilizasyon, ışık uyumu ve rafine Akdeniz atmosferi.", "/images/project-03.jpg"]
    ]
  }
};

export default function Services() {
  const { language } = useLanguage();
  const t = copy[language];
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const opacity = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });

  return (
    <section id="services" className="relative overflow-hidden bg-black py-24 text-ivory md:py-32">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-48 overflow-hidden border border-bronze/30 md:block"
        style={{ x, y, opacity }}
      >
        <div id="service-preview" className="relative h-full w-full" />
      </motion.div>

      <div className="section-shell">
        <p className="label mb-7">{t.label}</p>
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl md:text-8xl">
            {t.title}
          </h2>
          <p className="max-w-sm text-sm leading-7 text-ivory/58">
            {t.intro}
          </p>
        </div>

        <div className="border-t border-bronze/25">
          {t.services.map(([title, description, image], index) => (
            <motion.article
              key={title}
              className="group relative grid gap-8 border-b border-bronze/25 py-10 transition-colors duration-500 hover:bg-ivory/[0.035] md:grid-cols-[0.18fr_1fr_0.7fr] md:items-center md:py-14"
              onMouseMove={(event) => {
                x.set(event.clientX + 28);
                y.set(event.clientY - 110);
                opacity.set(1);
                const preview = document.getElementById("service-preview");
                if (preview) {
                  preview.innerHTML = "";
                  const img = document.createElement("img");
                  img.src = image;
                  img.alt = "";
                  img.className = "h-full w-full object-cover";
                  preview.appendChild(img);
                }
              }}
              onMouseLeave={() => opacity.set(0)}
            >
              <span className="font-serif text-2xl text-bronze/72">0{index + 1}</span>
              <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-4 sm:text-4xl md:text-7xl">
                {title}
              </h3>
              <p className="max-w-md text-sm leading-7 text-ivory/60">{description}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-bronze transition-all duration-700 ease-luxury group-hover:w-full" />
              <div className="relative h-56 overflow-hidden md:hidden">
                <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
