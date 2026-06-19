import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makaleler — Başkent Dil Konuşma",
  description: "Dil, konuşma ve öğrenme güçlükleri hakkında uzman makaleler.",
};

const articles = [
  {
    slug: "r-sesi-soyleyememe",
    title: "'R' Sesini Söyleyememe",
    excerpt: "Çocuklar ve yetişkinler /r/ sesiyle zorluk yaşayabilir. 'Rotasizm' olarak adlandırılan bu konuşma bozukluğu, doğru terapi ile her yaşta düzeltilebilir.",
    image: "/images/makaleler/r-sesi.jpg",
    category: "Konuşma Bozuklukları",
    date: "11 Mart",
    color: "#0077b6",
  },
  {
    slug: "gecikmus-dil-konusma",
    title: "Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir?",
    excerpt: "Dil ve konuşma gecikmesi yaşayan çocukların gelişimine aileler nasıl katkı sağlayabilir? Evde uygulayabileceğiniz pratik öneriler.",
    image: "/images/makaleler/gecikme.jpg",
    category: "Dil Gelişimi",
    date: "11 Mart",
    color: "#0096c7",
  },
  {
    slug: "dikkat-eksikligi-hiperaktivite",
    title: "Dikkat Eksikliği ve Hiperaktivite (DEHB)",
    excerpt: "DEHB okul dönemindeki çocukların %5-7'sinde görülür. Belirtileri, tipleri ve çocuğun yaşamına etkileri hakkında kapsamlı bilgi.",
    image: "/images/makaleler/dikkat.jpg",
    category: "Dikkat Bozukluğu",
    date: "11 Mart",
    color: "#6b21a8",
  },
  {
    slug: "ogrenme-guclugu-disleksi",
    title: "Öğrenme Güçlüğü ve Disleksi",
    excerpt: "Zekâsı normal olan çocukların okuma, yazma ve matematikte yaşadığı güçlüklerin nedenleri, erken belirtileri ve tedavi yöntemleri.",
    image: "/images/makaleler/disleksi.jpg",
    category: "Öğrenme Güçlüğü",
    date: "11 Mart",
    color: "#e63946",
  },
];

export default function Page() {
  return (
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Kurumsal
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Makaleler</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            Dil, konuşma ve öğrenme güçlükleri hakkında uzman kadromuzun hazırladığı güncel içerikler.
          </p>
        </div>
      </div>

      {/* Makale Grid */}
      <div className="container py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/makaleler/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Resim */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: article.color }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              {/* İçerik */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs text-gray-400">{article.date}</p>
                <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#0077b6]">
                  {article.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#0077b6]">
                  Devamını Oku
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
