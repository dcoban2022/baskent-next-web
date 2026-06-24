import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Diskalkuli — Başkent Dil Konuşma",
  description: "Sayı ve matematik öğrenmede güçlük yaşayan bireylere yönelik uzman eğitim desteği.",
};

const belirtiler = [
  "Matematik işaretlerini (+, −, ×, ÷) tanımada güçlük",
  "Sayıları organize etme ve hafızada tutma sorunu",
  "Kesir ve para işlemlerinde güçlük",
  "Zamanı söylemede ve saati okumada zorluk",
  "Şekil isimlendirmesinde sorun",
  "Çarpım tablosunu ezberleme güçlüğü",
  "Sayıları sıralamada ve karşılaştırmada hata",
  "Zihinsel matematik hesaplamada yetersizlik",
];

const stratejiler = [
  "Parmak sayma ve karalama kâğıdı kullanımına izin vermek",
  "Şema ve grafik kâğıdı kullanımı",
  "Akran yardımı sağlamak",
  "Renkli kalemlerle problem türlerini ayırt etmek",
  "Anımsatıcı cihazları ve müzik kullanmak",
  "Somut materyallerle (sayı blokları vb.) öğretim",
  "Hesap makinesi kullanımına izin vermek",
  "Adım adım görsel algoritmalar oluşturmak",
];

const related = [
  { title: "Disleksi", desc: "Okuma güçlüğünde uzman eğitim", href: "/disleksi" },
  { title: "Disgrafi", desc: "Yazma güçlüğünde uzman destek", href: "/disgrafi" },
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
];

const faqs = [
  { soru: "Diskalkuli nedir, disleksi ile farkı nedir?", cevap: "Disleksi okuma güçlüğü, diskalkuli ise sayı ve matematikte güçlüktür. Birlikte görülebilirler ancak farklı bozukluklardır." },
  { soru: "Diskalkuli kalıcı mıdır?", cevap: "Erken tanı ve doğru eğitimle matematikte ciddi ilerleme sağlanabilir; eğitim süresi kısa tutulmamalıdır." },
  { soru: "Kaç yaşından itibaren eğitime başlanabilir?", cevap: "Okul öncesi dönemden (5-6 yaş) itibaren sayı kavramı çalışmaları başlatılabilir." },
  { soru: "Diskalkuli hangi testlerle teşhis edilir?", cevap: "20 maddelik Diskalkuli Değerlendirme Testi ve çeşitli sayı işleme testleri kullanılır." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Diskalkuli Eğitimi"
      description="Sayı ve matematik öğrenmede güçlük yaşayan bireylere yönelik uzman eğitim desteği."
      url="https://www.baskentdilkonusma.com/diskalkuli"
      breadcrumbLabel="Diskalkuli"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#fff5f5] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">Öğrenme Güçlüğü</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Diskalkuli</h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Diskalkuli, kişinin <strong>sayıları anlama ve matematik öğrenme yeteneğini</strong> etkileyen bir güçlüktür. Çocuklarda yaklaşık <strong>%5</strong> oranında görülmektedir.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Diskalkuli yaşayan bireyler genellikle zekâ açısından normalin üzerinde olabilir; güçlük yalnızca sayısal bilginin işlenmesindeki farklılıktan kaynaklanmaktadır.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#e63946] px-6 py-3 font-semibold text-white transition hover:bg-[#c1121f]">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#e63946] hover:text-[#e63946]">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/services/bireysel.webp" alt="Diskalkuli Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Destekleyici Stratejiler</h2>
            <div className="space-y-3">
              {stratejiler.map((s, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                  <span className="text-sm text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices items={related} />

      <ServiceFAQ items={faqs} />

      <div className="bg-[#e63946] py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">20 Maddelik Diskalkuli Değerlendirme Testi</h2>
          <p className="mb-6 text-white/80">Uzmanlarımız çeşitli matematik becerilerini kapsamlı biçimde değerlendirir.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#e63946] transition hover:bg-white/90">Randevu Al</Link>
        </div>
      </div>
    </main>
    </>
  );
}
