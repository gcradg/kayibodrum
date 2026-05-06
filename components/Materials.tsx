"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    label: "Materials",
    title: "Chosen for light, salt, touch and time.",
    intro: "Materials are selected not only for appearance, but for how they age under light, salt, touch and time.",
    materials: [
      ["Wood", "/images/material-wood.jpg", "grain, warmth, permanence"],
      ["Metal", "/images/material-metal.jpg", "bronze, shadow, salt air"],
      ["Fabric", "/images/interior-wood.jpg", "softness, tactility, restraint"],
      ["Stone", "/images/project-03.jpg", "weight, temperature, silence"],
      ["Marine Surfaces", "/images/yacht-detail.jpg", "resistance, finish, reflection"]
    ]
  },
  tr: {
    label: "Malzemeler",
    title: "Işık, tuz, temas ve zaman için seçilir.",
    intro: "Malzemeler yalnızca görünüşleri için değil; ışık, tuz, temas ve zamanla nasıl yaşlandıkları için seçilir.",
    materials: [
      ["Ahşap", "/images/material-wood.jpg", "doku, sıcaklık, kalıcılık"],
      ["Metal", "/images/material-metal.jpg", "bronz, gölge, tuzlu hava"],
      ["Kumaş", "/images/interior-wood.jpg", "yumuşaklık, dokunsallık, sadelik"],
      ["Taş", "/images/project-03.jpg", "ağırlık, serinlik, sessizlik"],
      ["Marine Yüzeyler", "/images/yacht-detail.jpg", "dayanım, bitiş, yansıma"]
    ]
  }
};

export default function Materials() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="materials" className="bg-charcoal py-24 text-ivory md:py-32">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="label mb-7">{t.label}</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl md:text-8xl">
              {t.title}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-9 text-ivory/64">
            {t.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {t.materials.map(([name, image, note], index) => (
            <motion.article
              key={name}
              className="group relative h-[300px] overflow-hidden border border-bronze/25 bg-black sm:h-[360px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.06 }}
            >
              <Image
                src={image}
                alt={`${name} texture`}
                fill
                sizes="(min-width: 1024px) 20vw, 100vw"
                className="object-cover opacity-70 saturate-75 transition-transform duration-[1300ms] ease-luxury group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/78" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="mb-3 text-[0.58rem] uppercase tracking-label text-bronze">0{index + 1}</p>
                <h3 className="font-serif text-3xl tracking-[-0.03em]">{name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-ivory/50">{note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
