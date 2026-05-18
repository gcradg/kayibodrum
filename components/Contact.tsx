"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language";
import MagneticButton from "./MagneticButton";
import Footer from "./Footer";

const PHONE_DISPLAY = "0539 385 9187";
const PHONE_HREF = "tel:+905393859187";

/** Şimdilik gizli; tekrar açmak için `true` yap. Form JSX aynen duruyor. */
const CONTACT_FORM_ENABLED = false;

const copy = {
  en: {
    label: "Contact",
    title: "Let's craft something that belongs to the sea.",
    fields: ["Name", "Project Type"],
    message: "Message",
    cta: "Start a Conversation",
    addressLabel: "Atelier",
    phoneLabel: "Telephone",
    addressLines: ["Bahçelievler Mah.", "Gümüşlük Cad. No:39/39", "Bodrum, Muğla"]
  },
  tr: {
    label: "İletişim",
    title: "Denize ait hisseden bir şey üretelim.",
    fields: ["Ad Soyad", "Proje Türü"],
    message: "Mesaj",
    cta: "Görüşme Başlat",
    addressLabel: "Atölye",
    phoneLabel: "Telefon",
    addressLines: ["Bahçelievler Mah.", "Gümüşlük Cad. No:39/39", "Bodrum, Muğla"]
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
          <motion.div
            className="mt-14 max-w-2xl border-t border-bronze/25 pt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <div className="group flex gap-4">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/35 text-bronze transition-colors duration-500 group-hover:border-bronze group-hover:bg-bronze/10">
                  <MapPin size={18} strokeWidth={1.25} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-label text-bronze">{t.addressLabel}</p>
                  <address className="mt-3 space-y-1 not-italic font-light text-base leading-relaxed tracking-[0.01em] text-ivory/78">
                    {t.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="group flex gap-4 sm:border-l sm:border-bronze/15 sm:pl-12">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/35 text-bronze transition-colors duration-500 group-hover:border-bronze group-hover:bg-bronze/10">
                  <Phone size={18} strokeWidth={1.25} aria-hidden />
                </span>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-label text-bronze">{t.phoneLabel}</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-3 inline-block font-serif text-2xl tracking-[-0.03em] text-ivory transition-colors duration-300 hover:text-bronze focus-visible:text-bronze sm:text-[1.65rem]"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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
