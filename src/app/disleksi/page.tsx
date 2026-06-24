import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Disleksi — Başkent Dil Konuşma",
  description: "Disleksi okuma güçlüğünde uzman eğitim ve terapi. Çoklu duyusal yöntemlerle bireysel program.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/disleksi" },
  openGraph: {
    title: "Disleksi — Başkent Dil Konuşma",
    description: "Disleksi okuma güçlüğünde uzman eğitim ve terapi. Çoklu duyusal yöntemlerle bireysel program.",
    url: "https://www.baskentdilkonusma.com/disleksi",
    type: "website",
    locale: "tr_TR",
  },
};

const belirtiler = [
  "Yön problemi (sol/sağ karışıklığı)",
  "Kafiyeli kelimeleri karıştırma",
  "Heceleme zorlukları",
  "Harf ve rakamları ters yazma (b/d, p/q)",
  "Okuma hızında ve doğruluğunda güçlük",
  "Yazılı metni anlamlandırmada sorun",
  "Kelimeleri parçalarına ayırmada zorluk",
  "Kelime bulmada güçlük, sözcük dağarcığı sınırlılığı",
];

const gucluyonler = [
  "Üç boyutlu düşünme ve hayal gücü",
  "Yapboz ve uzamsal zeka",
  "Sanatta ve müzikte yetenek",
  "Problem çözme ve yaratıcılık",
  "Bütüncül bakış açısı",
];

const related = [
  { title: "Disgrafi", desc: "Yazma güçlüğünde uzman destek", href: "/disgrafi" },
  { title: "Diskalkuli", desc: "Matematik güçlüğünde eğitim", href: "/diskalkuli" },
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
];

const faqs = [
  { soru: "Disleksi kaç yaşında anlaşılır?", cevap: "6 yaşından itibaren formal değerlendirme yapılabilir, ancak 3-4 yaşından itibaren erken belirtiler gözlemlenebilir." },
  { soru: "Disleksi zeka düzeyi ile ilgili midir?", cevap: "Hayır, disleksi zekayla ilişkili değildir. Zekası ortalama ve üstü olan bireylerde de görülür." },
  { soru: "Disleksi tedavi edilebilir mi?", cevap: "Tam anlamıyla 'tedavi' edilmez ancak doğru eğitimle okuma ve yazma becerileri büyük ölçüde geliştirilebilir." },
  { soru: "Eğitim ne kadar sürer?", cevap: "Bireyden bireye değişmekle birlikte ortalama 6 ay - 2 yıl arasında düzenli eğitim önerilir." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Disleksi Eğitimi"
      description="Disleksi okuma güçlüğünde uzman eğitim ve terapi. Çoklu duyusal yöntemlerle bireysel program."
      url="https://www.baskentdilkonusma.com/disleksi"
      breadcrumbLabel="Disleksi"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#fff5f5] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">Öğrenme Güçlüğü</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Disleksi</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Disleksi, okumayı etkileyen <strong>beyinde biyolojik temelli</strong> bir öğrenme bozukluğudur. Zekâsı ortalama veya üstü olan bireylerde kelime tanıma ve heceleme güçlükleri oluşturur.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Albert Einstein, Henry Ford ve Walt Disney gibi pek çok başarılı isim disleksik bireylerdir. Bu bir hastalık değil, doğru eğitimle desteklenebilecek bir farklılıktır.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#e63946] px-6 py-3 font-semibold text-white transition hover:bg-[#c1121f]">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#e63946] hover:text-[#e63946]">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/services/disleksi.webp" alt="Disleksi Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
                <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hedef Yaş</p>
                  <p className="text-sm font-bold text-gray-800">6+ Yaş</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Belirtiler</h2>
            <div className="space-y-3">
              {belirtiler.map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-[#e63946]">{i + 1}</span>
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Güçlü Yönler</h2>
            <div className="space-y-3">
              {gucluyonler.map((g, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  <span className="text-sm text-gray-700">{g}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-red-50 p-6">
              <h3 className="mb-3 font-bold text-gray-900">Eğitim Yaklaşımımız</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Disleksikler bütün düşünür; bütün kelimeler, bütün bölüm ve hikâyeler... Bu nedenle çoklu duyusal yaklaşımla (görsel, işitsel, dokunsal) yapılandırılmış, yoğun bireysel eğitim programı uygulanır. <strong>6 yaşından itibaren</strong> tanılanabilir ve eğitime başlanabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#e63946] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Disleksi Bataryası ile Formal Değerlendirme</h2>
          <p className="mb-6 text-white/80">Erken tanı ve doğru eğitim programı için uzmanlarımızla görüşün.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#e63946] transition hover:bg-white/90">Randevu Al</Link>
        </div>
      </div>
    </main>
    </>
  );
}
