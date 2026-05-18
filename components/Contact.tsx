"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language";
import MagneticButton from "./MagneticButton";
import Footer from "./Footer";

/** Şimdilik gizli; tekrar açmak için `true` yap. Form JSX aynen duruyor. */
const CONTACT_FORM_ENABLED = false;

const copy = {
  en: {
    label: "Contact",
    title: "Let's craft something that belongs to the sea.",
    fields: ["Name", "Project Type"],
    message: "Message",
    cta: "Start a Conversation"
  },
  tr: {
    label: "İletişim",
    title: "Denize ait hisseden bir şey üretelim.",
    fields: ["Ad Soyad", "Proje Türü"],
    message: "Mesaj",
    cta: "Görüşme Başlat"
  }
};

export default function Contact() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="contact" className="relative overflow-hidden bg-black text-ivory">
      <Image
        src="/images/yacht-detail.jpg"
        alt="Yacht detail background"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/82" />
      <div
        className={`section-shell relative z-10 grid min-h-screen gap-12 py-24 md:items-center md:gap-16 md:py-32 ${
          CONTACT_FORM_ENABLED ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-1"
        }`}
      >
        <div>
          <p className="label mb-8">{t.label}</p>
          <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.05em] sm:text-5xl md:text-8xl">
            {t.title}
          </h2>
          <div className="mt-12 space-y-4 text-sm uppercase tracking-label text-ivory/58">
            <p>Bahçelievler Mah. Gümüşlük Cad. No:39/39 Bodrum Muğla</p>
            <a href="tel:+905393859187" className="transition-colors hover:text-bronze focus-visible:text-bronze">
              0539 385 9187
            </a>
          </div>
        </div>

        <form
          className={`space-y-8 ${CONTACT_FORM_ENABLED ? "" : "hidden"}`}
          aria-hidden={!CONTACT_FORM_ENABLED}
          inert={!CONTACT_FORM_ENABLED ? true : undefined}
        >
          {t.fields.map((label) => (
            <label key={label} className="block">
              <span className="text-[0.62rem] uppercase tracking-label text-bronze">{label}</span>
              <input
                className="mt-3 w-full border-0 border-b border-ivory/24 bg-transparent px-0 py-4 text-ivory outline-none transition-colors focus:border-bronze"
                type="text"
                disabled={!CONTACT_FORM_ENABLED}
              />
            </label>
          ))}
          <label className="block">
            <span className="text-[0.62rem] uppercase tracking-label text-bronze">{t.message}</span>
            <textarea
              className="mt-3 min-h-36 w-full resize-none border-0 border-b border-ivory/24 bg-transparent px-0 py-4 text-ivory outline-none transition-colors focus:border-bronze"
              disabled={!CONTACT_FORM_ENABLED}
            />
          </label>
          <MagneticButton type="submit" disabled={!CONTACT_FORM_ENABLED}>
            {t.cta}
          </MagneticButton>
        </form>
      </div>
      <Footer />
    </section>
  );
}
