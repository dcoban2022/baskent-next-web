import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "İşitme Engeli Eğitimi — Başkent Dil Konuşma",
  description: "1 yaşından itibaren işitme engeli rehabilitasyonu, dil-konuşma terapisi ve aile rehberliği.",
};

const hizmetler = [
  { baslik: "İşitsel Algı Eğitimi", aciklama: "İşitme cihazı veya koklear implant kullanan bireylerin sesi anlamlı biçimde algılaması için yapılandırılmış eğitim" },
  { baslik: "Konuşma-Dil Terapisi", aciklama: "Sözlü iletişim becerilerinin geliştirilmesi, sözcük dağarcığı ve cümle yapısının desteklenmesi" },
  { baslik: "İletişim Stratejileri Eğitimi", aciklama: "Günlük hayatta etkili iletişim kurabilmek için pratik stratejilerin kazandırılması" },
  { baslik: "Aile Rehberliği", aciklama: "Ailenin sürece aktif katılımı için bilinçlendirme, ev programı ve destek danışmanlığı" },
  { baslik: "Psiko-Sosyal Danışmanlık", aciklama: "İşitme kaybının duygusal ve sosyal etkilerine yönelik destek" },
  { baslik: "Bilişsel / Dil Gelişimi", aciklama: "Kavram gelişimi, bellek ve dil işlemleme becerilerinin desteklenmesi" },
  { baslik: "Koklear İmplant Rehabilitasyonu", aciklama: "Ameliyat öncesi hazırlık ve sonrası yoğun işitsel-sözel terapi programı" },
  { baslik: "İşitsel-Sözel Terapi", aciklama: "Sözlü dili temel alan, dinleme ve konuşma becerilerine odaklanan terapi yaklaşımı" },
];

const related = [
  { title: "Dil ve Konuşma Bozuklukları", desc: "Konuşma terapisi hizmetleri", href: "/dil-ve-konusma-bozukluklari" },
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
  { title: "Bireysel ve Grup Eğitimi", desc: "RAM raporlu bireyler için", href: "/bireysel-ve-grup-egitimi" },
];

const faqs = [
  { soru: "İşitme cihazı takan çocuklar konuşabilir mi?", cevap: "Evet. Erken dönemde (0-3 yaş) cihazlanma ve yoğun işitsel-sözel terapi ile çocuklar normal konuşma düzeyine ulaşabilir." },
  { soru: "Koklear implant için ideal yaş nedir?", cevap: "Kalıcı derin işitme kayıplarında 12-18 ay önerilmektedir. Erken ameliyat ve rehabilitasyon dil gelişimini önemli ölçüde destekler." },
  { soru: "İşitme engelli çocuklar için terapi ne kadar sürer?", cevap: "İlk yıllarda yoğun terapi (haftada 2-3 seans) önerilir. İlerlemeye göre seans sayısı azaltılır." },
  { soru: "Aile terapiye nasıl dahil olur?", cevap: "Ebeveyn rehberliği programımızda aileler seans içinde aktif rol alır ve evde uygulanacak aktiviteler öğrenir." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="İşitme Engeli Eğitimi"
      description="1 yaşından itibaren işitme engeli rehabilitasyonu, dil-konuşma terapisi ve aile rehberliği."
      url="https://www.baskentdilkonusma.com/isitme-engeli"
      breadcrumbLabel="İşitme Engeli Eğitimi"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">Eğitim Alanlarımız</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">İşitme Engeli Eğitimi</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                İşitme, dil ve konuşma bozukluklarında <strong>1 yaşından itibaren</strong> eğitimlerimiz verilmektedir. 6 ay civarında iki taraflı işitme cihazı habilitasyonu başlanmalıdır.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Koklear implant programlarına alınan hastalara ameliyat öncesi ve sonrası kapsamlı destek sağlanmaktadır.
              </p>
              <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-green-50 px-5 py-3 text-green-700 font-semibold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                SERVİS HİZMETİ ÜCRETSİZDİR
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#0077b6] px-6 py-3 font-semibold text-white transition hover:bg-[#005f8e]">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/services/isitme.webp" alt="İşitme Engeli Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Verilen Hizmetler</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hizmetler.map((h, i) => (
            <div key={i} className="rounded-2xl border-l-4 border-[#0077b6] bg-white p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-gray-900">{h.baslik}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{h.aciklama}</p>
            </div>
          ))}
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#0077b6] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Erken Müdahale Hayat Değiştirir</h2>
          <p className="mb-6 text-white/80">RAM raporlu bireyler için servis hizmeti ücretsizdir. Hemen başvurun.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90">Randevu Al</Link>
        </div>
      </div>
    </main>
    </>
  );
}
