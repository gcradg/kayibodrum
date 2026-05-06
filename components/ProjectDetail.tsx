"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import RevealImage from "@/components/RevealImage";
import SmoothScroll from "@/components/SmoothScroll";
import { useLanguage } from "@/lib/language";
import type { Project } from "@/lib/projects";

const copy = {
  en: {
    overview: "Overview",
    process: "Process",
    processTitle: "From proportion to final touch.",
    gallery: "Final Gallery",
    next: "Next Project",
    continue: "Continue"
  },
  tr: {
    overview: "Genel Bakış",
    process: "Süreç",
    processTitle: "Orandan son dokunuşa.",
    gallery: "Final Galeri",
    next: "Sonraki Proje",
    continue: "Devam Et"
  }
};

export default function ProjectDetail({ project, nextProject }: { project: Project; nextProject: Project }) {
  const { language } = useLanguage();
  const t = copy[language];
  const title = project.title[language];

  return (
    <SmoothScroll>
      <Header />
      <main className="bg-black text-ivory">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image src={project.cover} alt={title} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/26 to-black/88" />
          <div className="section-shell relative z-10 flex min-h-screen flex-col justify-end pb-20 pt-32">
            <p className="label mb-7">
              {project.category[language]} / {project.location} / {project.year}
            </p>
            <h1 className="max-w-6xl font-serif text-[clamp(3rem,13vw,11rem)] leading-[0.9] tracking-[-0.07em]">
              <AnimatedText text={title} />
            </h1>
          </div>
        </section>

        <section className="bg-ivory py-24 text-black md:py-32">
          <div className="section-shell grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="label mb-6">{t.overview}</p>
              <p className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-6xl">{project.summary[language]}</p>
            </div>
            <div className="space-y-10">
              <p className="text-xl leading-10 text-black/68">{project.overview[language]}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.materials[language].map((material) => (
                  <div key={material} className="border-t border-bronze/35 pt-4 text-[0.68rem] uppercase tracking-label text-black/58">
                    {material}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24 md:py-32">
          <div className="section-shell grid gap-6 md:grid-cols-2">
            <RevealImage src={project.gallery[0]} alt={`${title} detail one`} className="h-[54vh] md:h-[72vh]" priority />
            <RevealImage src={project.gallery[1]} alt={`${title} detail two`} className="h-[44vh] md:mt-28 md:h-[52vh]" />
          </div>
        </section>

        <section className="bg-charcoal py-24 md:py-32">
          <div className="section-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <p className="label">{t.process}</p>
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl md:text-8xl">{t.processTitle}</h2>
              <p className="mt-9 max-w-2xl text-lg leading-9 text-ivory/64">{project.process[language]}</p>
            </div>
          </div>
        </section>

        <section className="bg-black py-24 md:py-32">
          <div className="section-shell">
            <p className="label mb-10">{t.gallery}</p>
            <div className="grid gap-6 md:grid-cols-12">
              <RevealImage src={project.gallery[2]} alt={`${title} final material`} className="h-[380px] md:col-span-7 md:h-[520px]" />
              <RevealImage src={project.cover} alt={`${title} final view`} className="h-[420px] md:col-span-5 md:mt-24 md:h-[620px]" />
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 text-black">
          <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="label mb-4">{t.next}</p>
              <h2 className="font-serif text-4xl tracking-[-0.05em] sm:text-5xl">{nextProject.title[language]}</h2>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-5 text-[0.68rem] uppercase tracking-label text-black"
            >
              {t.continue}
              <span className="h-px w-16 bg-bronze transition-all duration-500 group-hover:w-28" />
            </Link>
          </div>
        </section>
        <Contact />
      </main>
    </SmoothScroll>
  );
}
