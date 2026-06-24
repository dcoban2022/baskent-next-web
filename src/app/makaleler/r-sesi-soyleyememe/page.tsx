import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "'R' Sesini Söyleyememe — Başkent Dil Konuşma",
  description: "Çocuklarda R sesini söyleyememe nedenleri, belirtileri ve dil-konuşma terapisi ile tedavi yöntemleri.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/makaleler/r-sesi-soyleyememe" },
  openGraph: {
    title: "'R' Sesini Söyleyememe — Başkent Dil Konuşma",
    description: "Çocuklarda R sesini söyleyememe nedenleri, belirtileri ve dil-konuşma terapisi ile tedavi yöntemleri.",
    url: "https://www.baskentdilkonusma.com/makaleler/r-sesi-soyleyememe",
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
            headline: "'R' Sesini Söyleyememe",
            description: "Çocuklarda R sesini söyleyememe nedenleri, belirtileri ve dil-konuşma terapisi ile tedavi yöntemleri.",
            url: "https://www.baskentdilkonusma.com/makaleler/r-sesi-soyleyememe",
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
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0077b6]">Konuşma Bozuklukları</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">&apos;R&apos; Sesini Söyleyememe</h1>
          <p className="mt-2 text-sm text-gray-400">11 Mart</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl shadow-md">
            <Image src="/images/makaleler/r-sesi.jpg" alt="R Sesi" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>R&apos;leri Söyleyemiyorum, Söyleyebilir miyim?</h2>
            <p>
              Çocuklar ve yetişkinler /r/ sesiyle zorluk yaşayabilir. Bu durum <strong>"rotasizm"</strong> olarak adlandırılan bir konuşma bozukluğudur. Bazı ünlü sanatçılar da bu problemi yaşayan kişilerdir.
            </p>

            <h2>R Sesini Düzeltmek İçin Doğru Zaman Ne Zaman?</h2>
            <p>
              /r/ sesi çocuklarda yaklaşık okul çağına kadar en son üretilen seslerden biridir. İdeal terapi başlama yaşı <strong>4,5–5 yaşları</strong> arasındadır. Ertelenmesi öğrenmeyi zorlaştırırken, okul ortamında sosyal ve akademik sorunlara yol açabilir.
            </p>

            <h2>Rotasizmin Sebebi Nedir?</h2>
            <ul>
              <li><strong>Artikülasyon bozukluğu:</strong> /l/, /y/, /ğ/ seslerinin yanlış kullanımı</li>
              <li><strong>Dil bağı:</strong> Dil hareketlerini sınırlayabilir</li>
              <li><strong>Genetik ve işitme faktörleri</strong></li>
              <li><strong>Ağız-dudak yerleşim sorunları</strong></li>
            </ul>

            <h2>Çocuklar ve Yetişkinler R Sesini Öğrenebilir mi?</h2>
            <p>
              Evet, her yaşta /r/ sesi öğrenilebilir ve konuşmaya transfer edilebilir. Konuşma terapisti yardımıyla kelime, cümle ve okumaya aktarım yapılabilir. Erken başlanıldığında süreç çok daha hızlı ve kalıcı sonuçlar vermektedir.
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
