import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videolar — Başkent Dil Konuşma",
  description: "Disleksi, öğrenme güçlükleri ve dil konuşma bozuklukları hakkında eğitici videolar.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/videolar" },
  openGraph: {
    title: "Videolar — Başkent Dil Konuşma",
    description: "Disleksi, öğrenme güçlükleri ve dil konuşma bozuklukları hakkında eğitici videolar.",
    url: "https://www.baskentdilkonusma.com/videolar",
    type: "website",
    locale: "tr_TR",
  },
};

const bilgiler = [
  {
    baslik: "Disleksi Nedir?",
    icerik:
      "Disleksi, beyinde biyolojik temelli okumayı etkileyen bir çeşit özgül öğrenme bozukluğudur. Zekâları ortalamadır ya da ortalamanın üstündedir fakat öğrenme güçlüğü nedeniyle okurken özellikle kelime seviyesinde beklenmedik bir performans farkı oluşur. Kelimeyi doğru/akıcı tanımada zorluklar ve heceleme-çözümlemede zayıf yetenek ile karakterizedir.",
    alti: "Her 5 kişiden 1 kişi disleksiktir. Albert Einstein, Henry Ford, Walt Disney, Beethoven, Mozart ve J.F. Kennedy gibi birçok başarılı isim disleksik bireylerdir. Düzgün bir eğitimle beyindeki yolları yeniden inşa etmek mümkündür.",
    renk: "border-[#0077b6]",
    badge: "Disleksi",
    badgeRenk: "bg-blue-100 text-[#0077b6]",
    href: "/disleksi",
  },
  {
    baslik: "Matematik Güçlüğü (Diskalkuli)",
    icerik:
      "Kişinin sayıları anlama ve matematik öğrenme yeteneğini etkiler. Bu tür öğrenme bozukluğu olan kişilerde; matematik sembolleri anlamada zayıflık, sayıları organize etme ve hafızada tutmada sorunlar, zamanı söylemede zorluk veya saymada zorluk yaşanabilir.",
    alti: "",
    renk: "border-[#e63946]",
    badge: "Diskalkuli",
    badgeRenk: "bg-red-100 text-[#e63946]",
    href: "/diskalkuli",
  },
  {
    baslik: "Yazma Güçlüğü (Disgrafi)",
    icerik:
      "Bireyin el yazısı ve ince motor becerilerini etkiler. Özel öğrenme güçlüğü olan bir kişide okunaksız el yazısı, tutarsız aralık, kâğıt üzerinde zayıf mekânsal planlama, kötü heceleme ve yazarken aynı anda düşünmede güçlük görülür.",
    alti: "",
    renk: "border-purple-600",
    badge: "Disgrafi",
    badgeRenk: "bg-purple-100 text-purple-700",
    href: "/disgrafi",
  },
];

const videoSayisi = 4;

export default function Page() {
  return (
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Medya
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Videolar</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            Dil konuşma bozuklukları, disleksi ve öğrenme güçlükleri hakkında uzmanlarımızdan bilgilendirici içerikler
          </p>
        </div>
      </div>

      {/* Instagram Video Bölümü */}
      <section className="container py-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Kısa Videolar</h2>
          <a
            href="https://www.instagram.com/baskentdilkonusma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
            Instagram'da Tüm Videolar
          </a>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
          <p className="text-gray-600">
            Tüm eğitici videolarımızı{" "}
            <a
              href="https://www.instagram.com/baskentdilkonusma/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0077b6] hover:underline"
            >
              @baskentdilkonusma
            </a>{" "}
            Instagram hesabımızdan izleyebilirsiniz. Kısa ve bilgilendirici Reels videolarımız her hafta güncellenmektedir.
          </p>
        </div>

        {/* Placeholder video kartları */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: videoSayisi }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/baskentdilkonusma/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077b6]/20 to-[#0077b6]/5 transition hover:shadow-lg"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0077b6] text-white shadow-lg transition group-hover:scale-110">
                  <svg className="h-7 w-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-center text-xs font-medium text-gray-500">Instagram'da İzle</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bilgi Kartları */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Öğrenme Güçlükleri Hakkında</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {bilgiler.map((b) => (
              <div
                key={b.baslik}
                className={`rounded-2xl border-l-4 bg-white p-6 shadow-sm ${b.renk}`}
              >
                <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${b.badgeRenk}`}>
                  {b.badge}
                </span>
                <h3 className="mb-3 text-lg font-bold text-gray-900">{b.baslik}</h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{b.icerik}</p>
                {b.alti && <p className="mb-4 text-sm leading-relaxed text-gray-500 italic">{b.alti}</p>}
                <Link
                  href={b.href}
                  className="text-sm font-semibold text-[#0077b6] hover:underline"
                >
                  Daha fazla bilgi →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0077b6] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Sorularınız mı var?</h2>
          <p className="mb-6 text-white/80">
            Çocuğunuzun gelişimi hakkında uzmanlarımızla ücretsiz görüşme yapın.
          </p>
          <Link
            href="/iletisim"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </main>
  );
}
