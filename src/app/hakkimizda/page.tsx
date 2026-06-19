import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Başkent Dil Konuşma",
  description: "2004 yılından bu yana özel eğitim sektöründe hizmet veren Başkent Dil Konuşma Merkezi hakkında bilgi edinin.",
};

const stats = [
  { value: "2004", label: "Kuruluş Yılı" },
  { value: "20+", label: "Yıl Deneyim" },
  { value: "9", label: "Hizmet Alanı" },
  { value: "81", label: "İlden Öğrenci" },
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
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Hakkımızda</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            2004'ten bu yana uzman ve akademik kadromuzla dil, konuşma ve öğrenme güçlüklerinde güvenilir çözüm ortağınız.
          </p>
        </div>
      </div>

      {/* Ana İçerik */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

            {/* Görsel */}
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl bg-[#0077b6]/10" />
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-[#e63946]/10" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/about/about-main.jpg"
                    alt="Başkent Dil Konuşma Merkezi"
                    width={600}
                    height={450}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                {/* Yıl rozeti */}
                <div className="absolute -bottom-5 -left-5 z-10 rounded-2xl bg-white px-6 py-4 shadow-lg">
                  <p className="text-3xl font-bold text-[#0077b6]">2004</p>
                  <p className="text-sm text-gray-500">yılından bu yana</p>
                </div>
              </div>
            </div>

            {/* Metin */}
            <div className="w-full lg:w-7/12">
              <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">
                Biz Kimiz?
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-900 sm:text-4xl">
                Öğrencilerimizi Bir Yıldız Olarak<br />
                <span className="text-[#0077b6]">Hayata Kazandırıyoruz</span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  2004 yılından bu yana özel eğitim sektöründe hizmet vermekteyiz. MEB'e bağlı olarak hizmet verilen modüllerimiz; Öğrenme güçlüğü/disleksi, İşitme, Dil ve Konuşma bozukluklarıdır.
                </p>
                <p>
                  Kurumumuzda Fizik / Zihin / Otizm modülleri bulunmamaktadır. Deneyimli ve akademik kadromuzla sektörümüzün önde gelen merkezlerinden biri olarak hizmet vermekteyiz.
                </p>
                <p>
                  Kurumumuz yenilikleri yakından takip etmekte, en yeni müdahale yöntemlerini öğrencilerimiz ile buluşturmayı hedeflemektedir. Merkezimizde sadece Ankara değil Türkiye'nin birçok ilinden gelen bireylere özgü hizmetler sunulmaktadır.
                </p>
                <p>
                  Uzman ve akademik eğitim kadrosu ile öğrencilerimizin bir yıldız olarak hayata kazandırılması temel hedefimizdir.
                </p>
                <p className="font-semibold text-[#e63946]">
                  RAM raporlu bireyler için servis hizmetimiz tamamen ücretsizdir.
                </p>
              </div>

              {/* İstatistikler */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-[#0077b6]">{s.value}</p>
                    <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Misyon & Vizyon</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-[#0077b6] bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Misyonumuz</h3>
              <p className="leading-relaxed text-gray-600">
                Merkezimizin öncelikli misyonu; uzman ve akademik eğitim kadrosu ile öğrencilerimizin bir yıldız olarak hayata kazandırılmasıdır. Kurumumuz yenilikleri yakından takip etmekte, en yeni müdahale yöntemlerini öğrencilerimiz ile buluşturmayı hedeflemektedir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-[#e63946] bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <svg className="h-6 w-6 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Vizyonumuz</h3>
              <p className="leading-relaxed text-gray-600">
                Merkezimizde eğitim kalitesini ön planda tutarak, yenilikçi çözümler sunarak; bireyin hayatına kalite katmak vizyonumuzdur. Türkiye'nin dört bir yanından gelen bireyler için özel programlar geliştirerek sektörün öncüsü olmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Modülleri */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Hizmet Modüllerimiz</h2>
            <p className="mt-3 text-gray-500">MEB'e bağlı olarak sunduğumuz eğitim alanları</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { title: "Dil ve Konuşma Bozuklukları", href: "/dil-ve-konusma-bozukluklari", color: "#0077b6" },
              { title: "İşitme Engeli Eğitimi", href: "/isitme-engeli", color: "#0077b6" },
              { title: "Disleksi", href: "/disleksi", color: "#e63946" },
              { title: "Disgrafi", href: "/disgrafi", color: "#e63946" },
              { title: "Diskalkuli", href: "/diskalkuli", color: "#e63946" },
              { title: "Dispraksi", href: "/dispraksi", color: "#e63946" },
              { title: "Dikkat Eğitimi & MOXO", href: "/dikkat-egitimi-moxo-dikkat-testi", color: "#6b21a8" },
              { title: "Bireysel ve Grup Eğitimi", href: "/bireysel-ve-grup-egitimi", color: "#6b21a8" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#0077b6]">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0077b6] py-12">
        <div className="container text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Ücretsiz Değerlendirme için Bize Ulaşın</h2>
          <p className="mb-6 text-white/80">RAM raporlu bireyler için servis hizmetimiz tamamen ücretsizdir.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90"
            >
              İletişime Geç
            </Link>
            <a
              href="tel:03123449316"
              className="rounded-xl border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              0 (312) 344 93 16
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
