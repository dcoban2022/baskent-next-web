import Image from "next/image";
import Link from "next/link";

const makaleler = [
  {
    slug: "r-sesi-soyleyememe",
    baslik: "R Sesini Söyleyememe",
    ozet: "Çocuklarda 'r' sesinin doğru çıkarılamaması oldukça yaygın bir konuşma bozukluğudur. Erken müdahale ile kısa sürede düzeltilebilir.",
    resim: "/images/makaleler/r-sesi.jpg",
    kategori: "Artikülasyon",
  },
  {
    slug: "gecikmus-dil-konusma",
    baslik: "Gecikmeli Dil ve Konuşma Gelişimi",
    ozet: "Yaşına göre geç konuşmaya başlayan çocuklarda erken değerlendirme ve müdahale kritik öneme sahiptir.",
    resim: "/images/makaleler/gecikme.jpg",
    kategori: "Dil Gelişimi",
  },
  {
    slug: "dikkat-eksikligi-hiperaktivite",
    baslik: "Dikkat Eksikliği ve Hiperaktivite",
    ozet: "DEHB belirtileri gösteren çocuklarda dikkat eğitimi programları ve MOXO testi ile kapsamlı değerlendirme yapılmaktadır.",
    resim: "/images/makaleler/dikkat.jpg",
    kategori: "Dikkat",
  },
  {
    slug: "ogrenme-guclugu-disleksi",
    baslik: "Öğrenme Güçlüğü ve Disleksi",
    ozet: "Disleksi bir hastalık değil, doğru eğitimle desteklenebilen bir öğrenme farklılığıdır. Erken tanı hayat değiştirir.",
    resim: "/images/makaleler/disleksi.jpg",
    kategori: "Disleksi",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
              Makaleler
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Son Makaleler</h2>
          </div>
          <Link href="/makaleler" className="hidden text-sm font-semibold text-[#0077b6] hover:underline sm:block">
            Tümünü Gör →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {makaleler.map((m) => (
            <Link key={m.slug} href={`/makaleler/${m.slug}`} className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md overflow-hidden flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <Image src={m.resim} alt={m.baslik} fill className="object-cover transition group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-[#0077b6] px-3 py-1 text-xs font-semibold text-white">
                  {m.kategori}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="mb-2 font-bold text-gray-900 group-hover:text-[#0077b6] transition">{m.baslik}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{m.ozet}</p>
                <span className="mt-4 text-sm font-semibold text-[#0077b6]">Devamını Oku →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/makaleler" className="text-sm font-semibold text-[#0077b6] hover:underline">
            Tüm Makaleler →
          </Link>
        </div>
      </div>
    </section>
  );
}
