"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["Tümü", "Konuşma & Dil", "Öğrenme Güçlüğü", "Diğer"];

const services = [
  {
    id: 1,
    title: "Dil ve Konuşma Bozuklukları",
    description: "Artikülasyon bozuklukları, ses sorunları ve dil gelişim gecikmelerinde uzman terapi desteği. 1 yaşından itibaren müdahale.",
    href: "/dil-ve-konusma-bozukluklari",
    category: "Konuşma & Dil",
    color: "#0077b6",
    image: "/images/services/konusma.webp",
  },
  {
    id: 2,
    title: "İşitme Engeli Eğitimi",
    description: "1 yaşından itibaren işitme engelli bireylere işitsel algı eğitimi, konuşma-dil terapisi ve aile rehberliği.",
    href: "/isitme-engeli",
    category: "Konuşma & Dil",
    color: "#0096c7",
    image: "/images/services/isitme.webp",
  },
  {
    id: 3,
    title: "Disleksi",
    description: "Okuma ve heceleme güçlüklerinde bilimsel temelli, çoklu duyusal yaklaşımla bireysel eğitim programları.",
    href: "/disleksi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    image: "/images/services/disleksi.webp",
  },
  {
    id: 4,
    title: "Disgrafi",
    description: "El yazısı ve ince motor becerileri etkileyen yazma güçlüklerinde özel stratejiler ve bireysel eğitim.",
    href: "/disgrafi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    image: "/images/slider/slider-2.webp",
  },
  {
    id: 5,
    title: "Diskalkuli",
    description: "Sayı ve sembol algılamada güçlük yaşayan bireylere yönelik matematik öğrenme desteği.",
    href: "/diskalkuli",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    image: "/images/services/bireysel.webp",
  },
  {
    id: 6,
    title: "Dispraksi",
    description: "Amaca yönelik hareket bozukluğunda motor koordinasyon gelişimi için özel eğitim desteği.",
    href: "/dispraksi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    image: "/images/slider/slider-1.webp",
  },
  {
    id: 7,
    title: "Dikkat Eğitimi & MOXO",
    description: "7–14 yaş grubu için nöropsikolojik temelli Attentioner programı ve bilgisayar destekli MOXO dikkat testi.",
    href: "/dikkat-egitimi-moxo-dikkat-testi",
    category: "Diğer",
    color: "#6b21a8",
    image: "/images/services/dikkat.webp",
  },
  {
    id: 8,
    title: "Bireysel ve Grup Eğitimi",
    description: "RAM raporlu bireyler için ayda 8 ders (40 dk), BEP programı ve ücretsiz servis hizmeti.",
    href: "/bireysel-ve-grup-egitimi",
    category: "Diğer",
    color: "#6b21a8",
    image: "/images/services/oyun-terapisi.jpg",
  },
  {
    id: 9,
    title: "Değerlendirme",
    description: "TEDİL, AAT ve disleksi bataryası ile formal/informal değerlendirme. Kişiye özel eğitim planı oluşturma.",
    href: "/degerlendirme",
    category: "Diğer",
    color: "#6b21a8",
    image: "/images/services/degerlendirme.webp",
  },
];

const categoryColors: Record<string, { border: string; bg: string; text: string }> = {
  "Konuşma & Dil":     { border: "#0077b6", bg: "#e8f4fd", text: "#0077b6" },
  "Öğrenme Güçlüğü":  { border: "#e63946", bg: "#fde8ea", text: "#c1121f" },
  "Diğer":             { border: "#6b21a8", bg: "#f3e8ff", text: "#6b21a8" },
};

const Services = () => {
  const [active, setActive] = useState("Tümü");
  const filtered = active === "Tümü" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Başlık */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Eğitim Alanlarımız
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            2004 yılından bu yana uzman ve akademik eğitim kadromuzla bireyleri hayata kazandırıyoruz.
          </p>
        </div>

        {/* Filtre etiketleri */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "border-[#0077b6] bg-[#0077b6] text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[#0077b6] hover:text-[#0077b6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Kart grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => {
            const colors = categoryColors[service.category];
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderLeft: `4px solid ${colors.border}` }}
              >
                {/* Resim */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Kategori rozeti resim üzerinde */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                      style={{ background: colors.bg + "dd", color: colors.text }}
                    >
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* İçerik */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-[#0077b6]">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all"
                    style={{ color: colors.border }}
                  >
                    Detaylı Bilgi
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
