import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Bireysel ve Grup Eğitimi — Başkent Dil Konuşma",
  description: "RAM raporlu bireyler için ayda 8 ders bireysel ve grup eğitimi. BEP programı ve ücretsiz servis.",
};

const related = [
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
  { title: "Dil ve Konuşma Bozuklukları", desc: "Konuşma terapisi hizmetleri", href: "/dil-ve-konusma-bozukluklari" },
  { title: "İşitme Engeli Eğitimi", desc: "1 yaşından itibaren rehabilitasyon", href: "/isitme-engeli" },
];

const faqs = [
  { soru: "RAM raporu nedir ve nasıl alınır?", cevap: "RAM (Rehberlik Araştırma Merkezi), çocuğun özel eğitime ihtiyacını belgeleyen resmi devlet kurumudur. Çocuğunuzu RAM'a yönlendirmek için bize başvurabilirsiniz." },
  { soru: "RAM raporlu eğitim ücretsiz midir?", cevap: "RAM raporlu bireyler, Milli Eğitim Bakanlığı desteğiyle ayda 8 derse ücretsiz ulaşabilir. Servis hizmeti de ücretsizdir." },
  { soru: "Bireysel ve grup eğitimi farkı nedir?", cevap: "Bireysel eğitim tamamen çocuğa özel BEP programıyla yürütülür. Grup eğitimi sosyal beceri gelişimi için ek destek sağlar." },
  { soru: "BEP nedir?", cevap: "BEP, her çocuğun güçlü ve zayıf yönleri belirlenerek hazırlanan kişisel eğitim planıdır. Aileler, öğretmenler ve uzmanlar birlikte hazırlar." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Bireysel ve Grup Eğitimi"
      description="RAM raporlu bireyler için ayda 8 ders bireysel ve grup eğitimi. BEP programı ve ücretsiz servis."
      url="https://www.baskentdilkonusma.com/bireysel-ve-grup-egitimi"
      breadcrumbLabel="Bireysel ve Grup Eğitimi"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-purple-700">Eğitim Alanlarımız</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Bireysel ve Grup Eğitimi</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                RAM raporlu bireyler için <strong>ayda 8 ders</strong> (her ders 40 dakika) bireysel eğitim verilmektedir. Dil konuşma güçlüğü olan bireylerde ayrıca <strong>ayda 4 ders</strong> grup eğitimi de uygulanabilir.
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
                <Image src="/images/services/grup.webp" alt="Bireysel ve Grup Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bireysel */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            </div>
            <h2 className="mb-4 text-xl font-bold text-gray-900">Bireysel Eğitim</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>İlk derste yapılan ayrıntılı değerlendirme sonucunda bireyin performans düzeyi belirlenir. TEDİL, AAT ve gerekli diğer testler uygulanır.</p>
              <p>Eksik alanlar, aile ve eğitim yaşantısı dikkate alınarak çocuğa özgü <strong>BEP (Bireysel Eğitim Programı)</strong> hazırlanarak eğitim sürecine başlanır.</p>
              <p>Her seans sonrası aileye geri bildirim verilir; ev programı belirlenir.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-bold text-[#0077b6]">8</p>
                <p className="text-xs text-gray-500">Ders / Ay</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-bold text-[#0077b6]">40 dk</p>
                <p className="text-xs text-gray-500">Ders Süresi</p>
              </div>
            </div>
          </div>

          {/* Grup */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
              <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>
            </div>
            <h2 className="mb-4 text-xl font-bold text-gray-900">Grup Eğitimi</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>Grup eğitimlerinde çocuklar; yaş grupları ve güçlük çekilen alanlar dikkate alınarak bir araya getirilir.</p>
              <p>Hem bireysel eğitim hedefleri hem de <strong>iletişim ve sosyal alan becerileri</strong> desteklenecek şekilde program sürdürülür.</p>
              <p>Grup dinamiği sayesinde sosyal iletişim, paylaşım ve sıra bekleme gibi beceriler de pekiştirilir.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-purple-50 p-4 text-center">
                <p className="text-2xl font-bold text-purple-700">4</p>
                <p className="text-xs text-gray-500">Ders / Ay</p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4 text-center">
                <p className="text-2xl font-bold text-purple-700">40 dk</p>
                <p className="text-xs text-gray-500">Ders Süresi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">BEP — Bireysel Eğitim Programı</h2>
          <p className="text-gray-600 leading-relaxed">
            Her bireyin güçlük alanları, öğrenme hızı ve aile koşulları farklıdır. Bu nedenle merkezimizde her öğrenciye kapsamlı değerlendirme sonucunda özel olarak hazırlanmış BEP uygulanır. Aile, öğretmen ve uzmanın iş birliğiyle sürekli güncellenen bu program, bireyin potansiyelini en üst düzeye çıkarmayı hedefler.
          </p>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#0077b6] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">RAM Raporlu Bireyler İçin Servis Ücretsizdir</h2>
          <p className="mb-6 text-white/80">Bireysel değerlendirme ve BEP hazırlanması için bize ulaşın.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90">İletişime Geç</Link>
        </div>
      </div>
    </main>
    </>
  );
}
