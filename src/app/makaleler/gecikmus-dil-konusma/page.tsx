import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir? — Başkent Dil Konuşma",
  description: "Dil ve konuşma gecikmesi yaşayan çocuklar için ailelerin evde yapabileceği destekleyici etkinlikler ve uzman önerileri.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/makaleler/gecikmus-dil-konusma" },
  openGraph: {
    title: "Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir? — Başkent Dil Konuşma",
    description: "Dil ve konuşma gecikmesi yaşayan çocuklar için ailelerin evde yapabileceği destekleyici etkinlikler ve uzman önerileri.",
    url: "https://www.baskentdilkonusma.com/makaleler/gecikmus-dil-konusma",
    type: "article",
    locale: "tr_TR",
  },
};

export default function Page() {
  return (
    <main className="pt-[116px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir?",
            description: "Dil ve konuşma gecikmesi yaşayan çocuklar için ailelerin evde yapabileceği destekleyici etkinlikler ve uzman önerileri.",
            url: "https://www.baskentdilkonusma.com/makaleler/gecikmus-dil-konusma",
            datePublished: "2024-03-11",
            author: { "@type": "Organization", name: "Başkent Dil Konuşma Merkezi" },
            publisher: { "@type": "Organization", name: "Başkent Dil Konuşma Merkezi", url: "https://www.baskentdilkonusma.com" },
          }),
        }}
      />
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-10">
        <div className="container">
          <Link href="/makaleler" className="mb-6 inline-flex items-center gap-2 text-sm text-[#0077b6] hover:underline">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            Makalelere Dön
          </Link>
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0077b6]">Dil Gelişimi</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir?</h1>
          <p className="mt-2 text-sm text-gray-400">11 Mart</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl shadow-md">
            <Image src="/images/makaleler/gecikme.jpg" alt="Gecikmiş Dil ve Konuşma" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Dil ve konuşma gecikmesi yaşayan çocukların gelişimine aileler çok önemli katkılar sağlayabilir. Çocuğun dil gelişiminde ebeveynler kritik bir rol oynamaktadır.
            </p>

            <h2>Aileler Ne Yapabilir?</h2>

            <h3>1. İletişim Ortamı Oluşturun</h3>
            <p>
              Evde bol konuşulan bir ortam hazırlayın. Çocuğunuzla sürekli konuşun; yaptığınız işleri, gördüğünüz nesneleri anlatın. Çocuğunuz ne kadar çok dil duyarsa gelişimi o kadar hızlanır.
            </p>

            <h3>2. Etkileşimli Oyun Oynayın</h3>
            <p>
              Eylemleri kullanın, şarkı söyleyin ve hayvan sesleri gibi ses oyunlarıyla dikkati çekin. Ortak dikkat gerektiren oyunlar dil gelişimini destekler.
            </p>

            <h3>3. Sabırlı Olun ve Zaman Tanıyın</h3>
            <p>
              Çocuğunuza yanıt vermeleri için yeterli bekleme süresi verin. Cümleyi onun yerine tamamlamaktan kaçının; kendi kelimeleriyle ifade etmesini bekleyin.
            </p>

            <h3>4. Kelimeleri Genişletin</h3>
            <p>
              Çocuğun söylediği basit kelimeleri daha uzun cümlelere dönüştürün. Çocuk "su" dediğinde siz "Evet, soğuk su istedin" diyerek cümleyi genişletin.
            </p>

            <h3>5. Ekran Süresini Sınırlandırın</h3>
            <p>
              İlk üç yaş döneminde telefon, tablet ve televizyondan uzak durulması son derece önemlidir. Ekran başında geçirilen süre, çocuğun ebeveynle etkileşimini azaltmakta ve dil gelişimini olumsuz etkilemektedir.
            </p>

            <h3>6. Profesyonel Destek Alın</h3>
            <p>
              Dil ve konuşma gecikmesi uzadıkça riskler artmaktadır. Erken müdahale her zaman daha olumlu sonuçlar vermektedir. Çocuğunuzda gecikme fark ettiğinizde vakit kaybetmeden bir konuşma ve dil terapistine başvurun.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <p className="font-semibold text-[#0077b6]">Merkezimizde ücretsiz değerlendirme için bize ulaşabilirsiniz.</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="tel:03123449316" className="inline-flex items-center gap-1 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f8e]">
                  0 (312) 344 93 16
                </a>
                <Link href="/iletisim" className="inline-flex items-center gap-1 rounded-lg border border-[#0077b6] px-4 py-2 text-sm font-semibold text-[#0077b6] hover:bg-blue-50">
                  İletişim Formu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
