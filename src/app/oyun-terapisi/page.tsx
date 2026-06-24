import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Oyun Terapisi — Başkent Dil Konuşma",
  description: "Oyun terapisi ile çocukların duygusal, sosyal ve iletişim becerilerini güçlendiriyoruz. Ankara Yenimahalle'de uzman oyun terapisi hizmeti.",
};

const faydalar = [
  "Duygusal ifade ve öz düzenleme becerilerini geliştirir",
  "Sosyal ilişki kurma ve empati yeteneğini güçlendirir",
  "Kaygı, korku ve travma belirtilerini azaltır",
  "Dil ve iletişim becerilerini destekler",
  "Özgüven ve öz saygıyı artırır",
  "Dikkat ve konsantrasyon süresini uzatır",
  "Problem çözme ve yaratıcı düşünme becerilerini geliştirir",
];

const kimlerIcin = [
  { title: "Dil Gelişim Gecikmesi", desc: "Konuşmaya isteksiz veya gecikmeli çocuklar için oyun destekli dil gelişimi" },
  { title: "Kaygı ve Korku", desc: "Ayrılık kaygısı, okul fobisi ve sosyal kaygı yaşayan çocuklar" },
  { title: "Davranış Sorunları", desc: "Öfke kontrolü güçlüğü, uyum sorunu olan çocuklar" },
  { title: "Sosyal Beceri Eksikliği", desc: "Akranlarıyla ilişki kurmakta zorlanan çocuklar" },
  { title: "Travma Sonrası Destek", desc: "Boşanma, kayıp veya zorlu yaşam olayları yaşayan çocuklar" },
  { title: "Dikkat Güçlükleri", desc: "DEHB belirtileri gösteren ve dikkatini toplamakta zorlanan çocuklar" },
];

const related = [
  { title: "Dil ve Konuşma Bozuklukları", desc: "Konuşma terapisi hizmetleri", href: "/dil-ve-konusma-bozukluklari" },
  { title: "Değerlendirme", desc: "Kapsamlı ilk değerlendirme", href: "/degerlendirme" },
  { title: "Bireysel ve Grup Eğitimi", desc: "RAM raporlu bireyler için", href: "/bireysel-ve-grup-egitimi" },
];

const faqs = [
  { soru: "Oyun terapisi kaç yaşındaki çocuklara uygulanır?", cevap: "Genellikle 3-12 yaş arası çocuklara uygulanır. Daha büyük çocuklar için farklı terapi modelleri kullanılabilir." },
  { soru: "Oyun terapisi normal oyundan farkı nedir?", cevap: "Oyun terapisi yapılandırılmış, terapötik amaçlı bir süreçtir. Terapist, oyun sırasında çocuğun duygusal ve davranışsal örüntülerini gözlemler ve yönlendirir." },
  { soru: "Oyun terapisi kaç seans sürer?", cevap: "Sorunun türüne ve yoğunluğuna göre değişir. Ortalama 10-20 seans önerilmekle birlikte bazı durumlarda daha uzun sürebilir." },
  { soru: "Hangi durumlarda oyun terapisi önerilir?", cevap: "Kaygı, korku, öfke sorunları, sosyal uyum güçlüğü, travma yaşantısı, boşanma süreci veya kardeş kıskançlığı gibi durumlarda etkilidir." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Oyun Terapisi"
      description="Oyun terapisi ile çocukların duygusal, sosyal ve iletişim becerilerini güçlendiriyoruz. Ankara Yenimahalle'de uzman oyun terapisi hizmeti."
      url="https://www.baskentdilkonusma.com/oyun-terapisi"
      breadcrumbLabel="Oyun Terapisi"
    />
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
                Terapi
              </span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
                Oyun Terapisi
              </h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Oyun, çocuğun doğal dilidir. Oyun terapisi; çocukların duygularını, düşüncelerini ve yaşantılarını oyun aracılığıyla ifade etmesine olanak tanıyan <strong>kanıta dayalı bir terapi yöntemidir.</strong>
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Uzman terapistlerimiz eşliğinde yapılandırılmış oyun ortamında çocuklar kendilerini güvenle ifade eder, duygusal ve sosyal becerilerini geliştirirler.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-[#0077b6] px-6 py-3 font-semibold text-white transition hover:bg-[#005f8e]">
                  Ücretsiz Değerlendirme
                </Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]">
                  0 (312) 344 93 16
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-[#0077b6]/10" />
                <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-[#e63946]/10" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/images/services/oyun-terapisi.webp"
                    alt="Oyun Terapisi"
                    width={600}
                    height={400}
                    className="h-72 w-full object-cover object-bottom lg:h-80"
                  />
                  <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Yaş Aralığı</p>
                    <p className="text-sm font-bold text-gray-800">3 – 12 Yaş</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kimler İçin */}
      <section className="bg-[#f8fafc] py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Kimler İçin Uygundur?</h2>
            <p className="mt-3 text-gray-500">Oyun terapisi pek çok farklı ihtiyaca yanıt verir</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kimlerIcin.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <span className="text-sm font-bold text-[#0077b6]">{i + 1}</span>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faydalar */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Oyun Terapisinin Faydaları</h2>
            <div className="space-y-3">
              {faydalar.map((f, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-blue-50 bg-blue-50/50 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#0077b6] p-6 text-white">
              <h3 className="mb-3 text-lg font-bold">Nasıl Uygulanır?</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Oyun terapisi, özel olarak tasarlanmış oyun odasında bire bir gerçekleştirilir. Her seans yaklaşık 40 dakika sürer. Terapist çocuğu gözlemler, yönlendirir ve oyun sürecine dahil olur. Aile görüşmeleri de sürecin ayrılmaz bir parçasıdır.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900">Kaç Seans Gerekir?</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Seans sayısı çocuğun ihtiyacına ve hedeflere göre belirlenir. Genellikle haftada 1 seans önerilir. İlk değerlendirmede uzmanımız size bireysel plan sunar.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900">RAM Raporu Gerekli mi?</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Oyun terapisi için RAM raporu zorunlu değildir. Ancak RAM raporu olan bireyler ek hizmetlerden ücretsiz yararlanabilir.
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
          <h2 className="mb-2 text-2xl font-bold text-white">Çocuğunuz İçin İlk Adımı Atın</h2>
          <p className="mb-6 text-white/80">Ücretsiz ön değerlendirme için bugün bizi arayın.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-white/90">
              Randevu Al
            </Link>
            <a href="tel:03123449316" className="rounded-xl border-2 border-white/40 px-8 py-3 font-semibold text-white transition hover:border-white">
              0 (312) 344 93 16
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
