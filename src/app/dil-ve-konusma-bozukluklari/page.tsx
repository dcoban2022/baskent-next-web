import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Dil ve Konuşma Bozuklukları — Başkent Dil Konuşma",
  description: "Artikülasyon bozuklukları, kekemelik, dil gelişim gecikmesi ve ses bozukluklarında uzman terapi hizmetleri. 1 yaşından itibaren erken müdahale.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/dil-ve-konusma-bozukluklari" },
  openGraph: {
    title: "Dil ve Konuşma Bozuklukları — Başkent Dil Konuşma",
    description: "Artikülasyon bozuklukları, kekemelik, dil gelişim gecikmesi ve ses bozukluklarında uzman terapi hizmetleri. 1 yaşından itibaren erken müdahale.",
    url: "https://www.baskentdilkonusma.com/dil-ve-konusma-bozukluklari",
    type: "website",
    locale: "tr_TR",
  },
};

const hizmetler = [
  { baslik: "Artikülasyon Bozuklukları", aciklama: "Seslerin yanlış üretimi, eksik veya fazla sesler, ses yerine başka ses kullanımı" },
  { baslik: "Ses Bozuklukları", aciklama: "Ses kalitesi, perdesi veya şiddetindeki anormallikler; disfoni ve afoni" },
  { baslik: "Akıcılık Bozuklukları", aciklama: "Kekemelik (Lidcombe yöntemi dahil) ve hızlı-anlaşılmaz konuşma (küme)" },
  { baslik: "Dil Gelişim Gecikmesi", aciklama: "Yaşa göre geç başlayan konuşma, sınırlı kelime dağarcığı, cümle kuramama" },
  { baslik: "Motor Konuşma Bozuklukları", aciklama: "Dizartri, apraksi; kas koordinasyon sorunlarından kaynaklanan konuşma güçlükleri" },
  { baslik: "Edinsel Dil Bozuklukları", aciklama: "Beyin hasarı sonucu oluşan afazi; anlama ve ifade etme güçlükleri" },
  { baslik: "Damak Yarığı / Velofaringeal Yetmezlik", aciklama: "Damak yapısından kaynaklanan ses ve konuşma bozukluklarında özel terapi" },
  { baslik: "Yutma Bozuklukları", aciklama: "Disfaji; yutma mekanizmasındaki güçlüklerin değerlendirilmesi ve tedavisi" },
];

const related = [
  { title: "İşitme Engeli Eğitimi", desc: "1 yaşından itibaren rehabilitasyon", href: "/isitme-engeli" },
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
  { title: "Oyun Terapisi", desc: "3–12 yaş için terapi", href: "/oyun-terapisi" },
];

const faqs = [
  { soru: "Çocuğum kaç yaşında konuşmaya başlamalıdır?", cevap: "Genellikle 12-18. ayda ilk kelimeler, 2 yaşında 2-3 kelimeli cümleler beklenir. Bu tarihlerde konuşma yoksa uzman değerlendirmesi önerilir." },
  { soru: "Kekemelik tedavi edilebilir mi?", cevap: "Evet. Özellikle 2-6 yaş arasında başlanan Lidcombe yöntemi ve diğer akıcılık terapileri çok etkilidir." },
  { soru: "Dil terapisi kaç seans sürer?", cevap: "Bozukluğun türü ve şiddetine göre değişir. Hafif vakalarda 3-6 ay, daha karmaşık durumlarda 1-2 yıl sürebilir." },
  { soru: "Erken müdahale neden önemlidir?", cevap: "Beyin, küçük yaşlarda çok daha plastiktir. Erken başlanan terapi dil gelişimini hızlandırır ve okul başarısını olumlu etkiler." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Dil ve Konuşma Bozuklukları"
      description="Artikülasyon bozuklukları, kekemelik, dil gelişim gecikmesi ve ses bozukluklarında uzman terapi hizmetleri. 1 yaşından itibaren erken müdahale."
      url="https://www.baskentdilkonusma.com/dil-ve-konusma-bozukluklari"
      breadcrumbLabel="Dil ve Konuşma Bozuklukları"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">Eğitim Alanlarımız</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Dil ve Konuşma Bozuklukları</h1>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Artikülasyon bozuklukları, ses sorunları, kekemelik ve dil gelişim gecikmelerinde uzman terapistlerimizle bireysel terapi hizmetleri sunulmaktadır. <strong>1 yaşından itibaren</strong> erken müdahale programları uygulanmaktadır.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#e63946] px-6 py-3 font-semibold text-white transition hover:bg-[#c1121f]">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/services/konusma.webp" alt="Dil ve Konuşma Terapisi" width={600} height={400} className="h-72 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Hizmet Alanlarımız</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hizmetler.map((h, i) => (
            <div key={i} className="rounded-2xl border-l-4 border-[#0077b6] bg-white p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-gray-900">{h.baslik}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{h.aciklama}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Terapi Süreci</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>İlk seansta bireyin dil ve konuşma düzeyi kapsamlı biçimde değerlendirilir; TEDİL ve AAT gibi standart testler uygulanabilir.</p>
              <p>Değerlendirme sonucuna göre kişiye özel terapi programı hazırlanır. Terapi süreci bireyin ihtiyacına, yaşına ve güçlük alanına göre şekillenir.</p>
              <p>Aile eğitimi ve ev programı terapi sürecinin ayrılmaz bir parçasıdır; ebeveynlerin sürece aktif katılımı sonuçları önemli ölçüde iyileştirir.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#0077b6] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">RAM Raporlu Bireyler İçin Servis Ücretsizdir</h2>
          <p className="mb-6 text-white/80">Ücretsiz değerlendirme ve randevu için bize ulaşın.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90">İletişime Geç</Link>
        </div>
      </div>
    </main>
    </>
  );
}
