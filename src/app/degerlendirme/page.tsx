import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Değerlendirme — Başkent Dil Konuşma",
  description: "İlk değerlendirmede TEDİL, AAT ve Disleksi Bataryası ile kapsamlı formal/informal değerlendirme. Sonuçlara göre özel veya RAM kanallı eğitim programlanır.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/degerlendirme" },
  openGraph: {
    title: "Değerlendirme — Başkent Dil Konuşma",
    description: "İlk değerlendirmede TEDİL, AAT ve Disleksi Bataryası ile kapsamlı formal/informal değerlendirme. Sonuçlara göre özel veya RAM kanallı eğitim programlanır.",
    url: "https://www.baskentdilkonusma.com/degerlendirme",
    type: "website",
    locale: "tr_TR",
  },
};

const adimlar = [
  { no: "1", baslik: "Detaylı Öykü", aciklama: "Aileden çocuğun gelişim öyküsü, eğitim yaşantısı ve güçlük alanları hakkında kapsamlı bilgi alınır." },
  { no: "2", baslik: "Oral Motor Muayene", aciklama: "Konuşma organlarının (dudak, dil, damak, çene) motor fonksiyonları değerlendirilir." },
  { no: "3", baslik: "TEDİL — Formal Dil Testi", aciklama: "Türkçe Erken Dil Gelişim Testi ile çocuğun yaşa uygun dil düzeyi ölçülür." },
  { no: "4", baslik: "AAT — Artikülasyon Testi", aciklama: "Ankara Artikülasyon Testi ile Konuşma Sesi Bozukluğu düzeyi formal olarak belirlenir." },
  { no: "5", baslik: "Disleksi Değerlendirme Bataryası", aciklama: "Özel Öğrenme Güçlüğü/Disleksi şüphesinde kapsamlı okuma, heceleme ve işlemleme bataryası uygulanır." },
  { no: "6", baslik: "Davranış Yönetimi Değerlendirmesi", aciklama: "Davranış problemleri, dikkat ve dürtü kontrolüne yönelik informal gözlem ve değerlendirme yapılır." },
  { no: "7", baslik: "Ek Engel Değerlendirmeleri", aciklama: "Varsa ek engellere yönelik (işitme, görme, motor vb.) formal ve informal testler uygulanır." },
  { no: "8", baslik: "Uzman Görüşü ve Rapor", aciklama: "Tüm bulgular doğrultusunda uzman görüşü hazırlanır; aile bilgilendirilir ve yol haritası belirlenir." },
];

const sonuclar = [
  "Çocuğun performans düzeyi belirlenir",
  "Dil konuşma güçlüğü veya Özel Öğrenme Güçlüğü/Disleksi engel yüzdesi hakkında bilgi verilir",
  "Aileler hastaneden rapor çıkartıp çıkartamayacakları konusunda bilgilendirilir",
  "Eğitim özel (ücretli) ya da RAM kanallı (destekli) olarak programlanır",
];

const related = [
  { title: "Disleksi", desc: "Okuma güçlüğünde uzman eğitim", href: "/disleksi" },
  { title: "Dil ve Konuşma Bozuklukları", desc: "Konuşma terapisi hizmetleri", href: "/dil-ve-konusma-bozukluklari" },
  { title: "Bireysel ve Grup Eğitimi", desc: "RAM raporlu bireyler için", href: "/bireysel-ve-grup-egitimi" },
];

const faqs = [
  { soru: "İlk değerlendirme ne kadar sürer?", cevap: "Kapsamlı ilk değerlendirme ortalama 60-90 dakika sürmektedir. Gerekirse 2 seansta tamamlanabilir." },
  { soru: "Değerlendirme için randevu nasıl alınır?", cevap: "0 (312) 344 93 16 numaralı telefondan ya da web sitemizdeki iletişim formundan randevu alabilirsiniz." },
  { soru: "Değerlendirme sonucunda ne olur?", cevap: "Uzmanımız bulguları ailenizle detaylı olarak paylaşır, eğitim programı önerir ve gerekirse RAM yönlendirmesi yapar." },
  { soru: "TEDİL ve AAT testleri nelerdir?", cevap: "TEDİL (Türkçe Erken Dil Gelişim Testi) 2-7 yaş dil gelişimini ölçer. AAT (Ankara Artikülasyon Testi) konuşma sesi bozukluğunu saptamak için kullanılır." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Değerlendirme"
      description="İlk değerlendirmede TEDİL, AAT ve Disleksi Bataryası ile kapsamlı formal/informal değerlendirme. Sonuçlara göre özel veya RAM kanallı eğitim programlanır."
      url="https://www.baskentdilkonusma.com/degerlendirme"
      breadcrumbLabel="Değerlendirme"
    />
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
                Eğitim Alanlarımız
              </span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">İlk Değerlendirme</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                İlk değerlendirmede aileden gerekli bilgi, öykü ve eğitim yaşantısı alınır. Çocukla yapılan seansta formal ve informal testler uygulanarak kapsamlı bir profil oluşturulur.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Değerlendirme sonuçlarına göre çocuğun performans düzeyi belirlenir ve aileye detaylı bilgi sunulur.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#0077b6] px-6 py-3 font-semibold text-white transition hover:bg-[#005f8e]">
                  Değerlendirme Randevusu Al
                </Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]">
                  0 (312) 344 93 16
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/services/degerlendirme.webp"
                  alt="Değerlendirme Seansı"
                  width={600}
                  height={400}
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Değerlendirme Adımları */}
      <section className="container py-14">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Değerlendirme Süreci</h2>
        <p className="mb-8 text-gray-500">Değerlendirmede aşağıdaki 8 bileşen sistematik biçimde uygulanır:</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adimlar.map((a) => (
            <div key={a.no} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077b6] text-sm font-bold text-white">
                {a.no}
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{a.baslik}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{a.aciklama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Bölümü */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Tanıtım Videosu</h2>
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077b6]/10 to-blue-50 p-8 text-center shadow-sm">
            <div className="mx-auto flex max-w-md flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0077b6] text-white shadow-lg">
                <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-600">
                Değerlendirme sürecimizi anlatan videomuz için{" "}
                <a
                  href="https://www.instagram.com/baskentdilkonusma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0077b6] hover:underline"
                >
                  Instagram sayfamızı
                </a>{" "}
                ziyaret edin.
              </p>
              <a
                href="https://www.instagram.com/baskentdilkonusma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                @baskentdilkonusma
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlendirme Sonuçları */}
      <section className="container py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Değerlendirme Sonrası</h2>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="space-y-4">
              {sonuclar.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-[#0077b6]">
                    {i + 1}
                  </div>
                  <p className="pt-0.5 text-gray-600 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
            <div className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>RAM kanallı program:</strong> Değerlendirme sonucunda hastane raporu alınabilecek durumdaki çocuklar için eğitim RAM (Rehberlik ve Araştırma Merkezi) kanalıyla ücretsiz olarak planlanabilir. Servis hizmeti de bu kapsamda ücretsiz sağlanmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      {/* CTA */}
      <div className="bg-[#0077b6] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Değerlendirme için Randevu Alın</h2>
          <p className="mb-6 text-white/80">
            İlk görüşme ücretsizdir. Uzmanlarımız çocuğunuzun durumunu değerlendirerek size en uygun programı önerir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90">
              İletişim Formu
            </Link>
            <a href="tel:03123449316" className="rounded-xl border-2 border-white/50 px-8 py-3 font-semibold text-white transition hover:border-white">
              0 (312) 344 93 16
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
