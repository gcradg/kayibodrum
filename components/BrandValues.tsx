"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    label: "Four Disciplines",
    title: "A quiet language of sea, wood and detail.",
    intro: "Each discipline is treated as part of one atmosphere: precise, tactile and made to live beautifully in Bodrum light.",
    values: [
      ["Marine", "Refined applications for yachts, decks and sea-facing spaces."],
      ["Carpentry", "Custom woodwork shaped with precision, warmth and permanence."],
      ["Decoration", "Interior details that balance Mediterranean softness with modern restraint."],
      ["Craftsmanship", "Every surface, joint and material finished with quiet confidence."]
    ]
  },
  tr: {
    label: "Dört Disiplin",
    title: "Deniz, ahşap ve detayın sakin dili.",
    intro: "Her disiplin tek bir atmosferin parçası gibi ele alınır: hassas, dokunsal ve Bodrum ışığında zarifçe yaşayacak şekilde.",
    values: [
      ["Marine", "Yatlar, güverteler ve denize bakan alanlar için rafine uygulamalar."],
      ["Marangozluk", "Hassasiyet, sıcaklık ve kalıcılıkla şekillenen özel ahşap işleri."],
      ["Dekorasyon", "Akdeniz yumuşaklığını modern sadelikle dengeleyen iç mekan detayları."],
      ["Zanaatkarlık", "Her yüzey, birleşim ve malzeme sessiz bir özgüvenle tamamlanır."]
    ]
  }
};

function LineIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 86 86" className="h-16 w-16 overflow-visible stroke-black/70" fill="none" strokeWidth="1">
      <motion.circle
        cx="43"
        cy="43"
        r={24 + index * 2}
        className="stroke-bronze"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.08 }}
      />
      <motion.path
        d={`M16 ${56 - index * 4} C32 ${24 + index * 5}, 52 ${24 - index * 2}, 70 ${54 + index * 2}`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.18 + index * 0.08 }}
      />
    </svg>
  );
}

export default function BrandValues() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="bg-ivory py-24 text-black md:min-h-screen md:py-32">
      <div className="section-shell">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label mb-5">{t.label}</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl md:text-7xl">
              {t.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-black/58">
            {t.intro}
          </p>
        </div>

        <div className="grid border-y border-bronze/30 md:grid-cols-4">
          {t.values.map(([title, text], index) => (
            <motion.article
              key={title}
              className="group min-h-[330px] border-bronze/30 py-10 md:border-r md:px-8 md:last:border-r-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            >
              <motion.div className="mb-14 origin-left transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                <LineIcon index={index} />
              </motion.div>
              <p className="mb-4 text-[0.62rem] uppercase tracking-label text-taupe">0{index + 1}</p>
              <h3 className="font-serif text-3xl tracking-[-0.03em]">{title}</h3>
              <div className="my-6 h-px w-12 bg-bronze transition-all duration-500 group-hover:w-full" />
              <p className="max-w-xs text-sm leading-7 text-black/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
