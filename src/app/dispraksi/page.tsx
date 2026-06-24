import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Dispraksi — Başkent Dil Konuşma",
  description: "Motor koordinasyon gelişim bozukluğunda uzman eğitim ve destek programı.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/dispraksi" },
  openGraph: {
    title: "Dispraksi — Başkent Dil Konuşma",
    description: "Motor koordinasyon gelişim bozukluğunda uzman eğitim ve destek programı.",
    url: "https://www.baskentdilkonusma.com/dispraksi",
    type: "website",
    locale: "tr_TR",
  },
};

const related = [
  { title: "Disleksi", desc: "Okuma güçlüğünde uzman eğitim", href: "/disleksi" },
  { title: "Disgrafi", desc: "Yazma güçlüğünde uzman destek", href: "/disgrafi" },
  { title: "Bireysel ve Grup Eğitimi", desc: "RAM raporlu bireyler için", href: "/bireysel-ve-grup-egitimi" },
];

const faqs = [
  { soru: "Dispraksi nedir?", cevap: "Dispraksi (DCD - Gelişimsel Koordinasyon Bozukluğu), motor becerilerin planlanması ve uygulanmasında güçlük yaşanan bir gelişimsel bozukluktur." },
  { soru: "Dispraksi disleksi ile birlikte görülebilir mi?", cevap: "Evet, dispraksi sıklıkla disleksi, dikkat eksikliği ve disgrafi ile birlikte görülür." },
  { soru: "Eğitim ne kadar sürer?", cevap: "Program bireye göre tasarlanır. Çoğu çocukta 6-12 ay düzenli çalışmayla belirgin gelişim gözlemlenir." },
  { soru: "Okul hayatına etkisi nedir?", cevap: "Beden eğitimi, el yazısı, araç-gereç kullanımı ve sınıf içi geçişlerde güçlük yaşanabilir." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Dispraksi Eğitimi"
      description="Motor koordinasyon gelişim bozukluğunda uzman eğitim ve destek programı."
      url="https://www.baskentdilkonusma.com/dispraksi"
      breadcrumbLabel="Dispraksi"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#fff5f5] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">Öğrenme Güçlüğü</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Dispraksi</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Dispraksi, <strong>amaca yönelik hareketlerin yapılmasını etkileyen</strong> bir bozukluktur. Motor koordinasyon gelişimindeki güçlük nedeniyle okul konularını öğrenmeyi ve günlük yaşam aktivitelerini önemli ölçüde etkiler.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Belirtiler yaşa göre farklılık gösterir; erken tespit ve müdahale, çocuğun gelişimini olumlu yönde etkiler.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#e63946] px-6 py-3 font-semibold text-white transition hover:bg-[#c1121f]">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#e63946] hover:text-[#e63946]">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/slider/slider-1.webp" alt="Dispraksi Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <svg className="h-6 w-6 text-[#e63946]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
            </div>
            <h2 className="mb-5 text-xl font-bold text-gray-900">Küçük Çocuklarda Belirtiler</h2>
            <div className="space-y-3">
              {[
                "Sakarlık ve sık düşme/çarpma",
                "Emekleme ve yürüme gecikmesi",
                "Bağcık bağlama, düğme ilikleme güçlüğü",
                "Kalem tutmada zorluk",
                "İnce motor becerilerinde gecikme",
                "Makasla kesme güçlüğü",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#e63946]" />
                  <span className="text-sm text-gray-600">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
            </div>
            <h2 className="mb-5 text-xl font-bold text-gray-900">Büyük Çocuklarda Belirtiler</h2>
            <div className="space-y-3">
              {[
                "Top oyunlarında güçlük ve koordinasyon sorunu",
                "Yapboz ve uzamsal görevlerde zorluk",
                "El yazısı güçlüğü",
                "Dans ve ritmik aktivitelerde sorun",
                "Bisiklet ve benzeri araç kullanımında gecikme",
                "Okul ve günlük aktivitelerde yavaşlık",
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0077b6]" />
                  <span className="text-sm text-gray-600">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Tedavi Yaklaşımı</h2>
          <p className="text-gray-600 leading-relaxed">
            Dispraksi tedavisinde ergoterapi ve özel eğitim programları birlikte yürütülür. Motor koordinasyon becerilerini geliştirmeye yönelik egzersizler, oyun temelli aktiviteler ve günlük yaşam becerilerinin kazandırılması hedeflenir. Bireyin yaşı ve güçlük düzeyine göre kişiselleştirilmiş program hazırlanır.
          </p>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#e63946] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Motor Koordinasyon Değerlendirmesi</h2>
          <p className="mb-6 text-white/80">Uzmanlarımızla ücretsiz ön görüşme için bize ulaşın.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#e63946] transition hover:bg-white/90">Randevu Al</Link>
        </div>
      </div>
    </main>
    </>
  );
}
