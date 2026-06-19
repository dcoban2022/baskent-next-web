"use client";
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "İşitme Engeli Eğitimi",
    description: "1 yaşından itibaren işitme engelli bireylere işitsel algı eğitimi, konuşma-dil terapisi ve aile rehberliği.",
    href: "/isitme-engeli",
    category: "Konuşma & Dil",
    color: "#0096c7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Disleksi",
    description: "Okuma ve heceleme güçlüklerinde bilimsel temelli, çoklu duyusal yaklaşımla bireysel eğitim programları.",
    href: "/disleksi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Disgrafi",
    description: "El yazısı ve ince motor becerileri etkileyen yazma güçlüklerinde özel stratejiler ve bireysel eğitim.",
    href: "/disgrafi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Diskalkuli",
    description: "Sayı ve sembol algılamada güçlük yaşayan bireylere yönelik matematik öğrenme desteği.",
    href: "/diskalkuli",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.598 4.5 4.698V18a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V4.698c0-1.1-.807-1.998-1.907-2.126A48.507 48.507 0 0 0 12 2.25Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Dispraksi",
    description: "Amaca yönelik hareket bozukluğunda motor koordinasyon gelişimi için özel eğitim desteği.",
    href: "/dispraksi",
    category: "Öğrenme Güçlüğü",
    color: "#e63946",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Dikkat Eğitimi & MOXO",
    description: "7–14 yaş grubu için nöropsikolojik temelli Attentioner programı ve bilgisayar destekli MOXO dikkat testi.",
    href: "/dikkat-egitimi-moxo-dikkat-testi",
    category: "Diğer",
    color: "#6b21a8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Bireysel ve Grup Eğitimi",
    description: "RAM raporlu bireyler için ayda 8 ders (40 dk), BEP programı ve ücretsiz servis hizmeti.",
    href: "/bireysel-ve-grup-egitimi",
    category: "Diğer",
    color: "#6b21a8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Değerlendirme",
    description: "TEDİL, AAT ve disleksi bataryası ile formal/informal değerlendirme. Kişiye özel eğitim planı oluşturma.",
    href: "/degerlendirme",
    category: "Diğer",
    color: "#6b21a8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const categoryColors: Record<string, { border: string; bg: string; text: string }> = {
  "Konuşma & Dil": { border: "#0077b6", bg: "#e8f4fd", text: "#0077b6" },
  "Öğrenme Güçlüğü": { border: "#e63946", bg: "#fde8ea", text: "#c1121f" },
  "Diğer": { border: "#6b21a8", bg: "#f3e8ff", text: "#6b21a8" },
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
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                style={{ borderLeft: `4px solid ${colors.border}` }}
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Kategori badge + ikon */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {service.category}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors group-hover:opacity-80"
                      style={{ background: colors.bg, color: colors.border }}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Başlık */}
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-[#0077b6] transition-colors">
                    {service.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  {/* Alt link */}
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: colors.border }}>
                    Detaylı Bilgi
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
