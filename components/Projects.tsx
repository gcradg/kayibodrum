"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/language";
import { projects } from "@/lib/projects";

const layouts = [
  "md:col-span-7 md:h-[680px]",
  "md:col-span-5 md:h-[420px] md:mt-28",
  "md:col-span-4 md:h-[520px]",
  "md:col-span-4 md:h-[360px] md:mt-24",
  "md:col-span-8 md:h-[560px]",
  "md:col-span-5 md:h-[460px] md:col-start-7"
];

export default function Projects() {
  const { language } = useLanguage();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const opacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const copy = {
    en: {
      cursor: "View",
      label: "Project Universe",
      title: "A portfolio of surfaces, vessels and rooms composed with restraint.",
      quoteLabel: "Bodrum Light",
      quote: "The work is never loud. It waits for light, salt, shadow and hand to complete it."
    },
    tr: {
      cursor: "İncele",
      label: "Proje Evreni",
      title: "Yüzeyler, tekneler ve odalardan oluşan ölçülü bir portfolyo.",
      quoteLabel: "Bodrum Işığı",
      quote: "İş hiçbir zaman yüksek sesli değildir. Işık, tuz, gölge ve el onu tamamlar."
    }
  }[language];

  return (
    <section id="work" className="relative overflow-hidden bg-ivory py-24 text-black md:py-32">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-20 w-20 place-items-center rounded-full border border-bronze/60 bg-black/80 text-[0.58rem] uppercase tracking-label text-ivory backdrop-blur-md md:grid"
        style={{ x, y, opacity }}
      >
        {copy.cursor}
      </motion.div>

      <div className="section-shell">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="label">{copy.label}</p>
          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.06em] sm:text-5xl md:text-8xl">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-12 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={`${layouts[index]} h-[360px] sm:h-[440px]`}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block h-full overflow-hidden bg-black text-ivory"
                onMouseMove={(event) => {
                  x.set(event.clientX - 40);
                  y.set(event.clientY - 40);
                  opacity.set(1);
                }}
                onMouseLeave={() => opacity.set(0)}
              >
                <Image
                  src={project.cover}
                  alt={project.title[language]}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-[1600ms] ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-black/25 to-black/82" />
                <div className="absolute left-5 top-5 flex gap-3 text-[0.58rem] uppercase tracking-label text-ivory/72">
                  <span>{project.category[language]}</span>
                  <span className="text-bronze">/</span>
                  <span>{project.year}</span>
                </div>
                {index === 3 ? (
                  <div className="absolute right-5 top-5 vertical-title font-serif text-3xl text-bronze/75">
                    KAYI
                  </div>
                ) : null}
                <div className="absolute inset-x-5 bottom-5">
                  <div className="mb-5 h-px w-full origin-left scale-x-50 bg-bronze/55 transition-transform duration-700 group-hover:scale-x-100" />
                  <h3 className="max-w-lg font-serif text-3xl leading-none tracking-[-0.04em] transition-transform duration-700 group-hover:-translate-y-2 sm:text-4xl md:text-6xl">
                    {project.title[language]}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}

          <div className="border border-bronze/35 bg-ivory p-8 md:col-span-5 md:col-start-2 md:-mt-24">
            <p className="label mb-8">{copy.quoteLabel}</p>
            <p className="font-serif text-2xl leading-tight tracking-[-0.03em] text-black/78 sm:text-3xl md:text-5xl">
              {copy.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
