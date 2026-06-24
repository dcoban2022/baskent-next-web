import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Öğrenme Güçlüğü ve Disleksi — Başkent Dil Konuşma",
  description: "Öğrenme güçlüğü ve disleksi nedir, belirtileri nelerdir? Erken tanı ve özel eğitimin önemi hakkında bilgiler.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/makaleler/ogrenme-guclugu-disleksi" },
  openGraph: {
    title: "Öğrenme Güçlüğü ve Disleksi — Başkent Dil Konuşma",
    description: "Öğrenme güçlüğü ve disleksi nedir, belirtileri nelerdir? Erken tanı ve özel eğitimin önemi hakkında bilgiler.",
    url: "https://www.baskentdilkonusma.com/makaleler/ogrenme-guclugu-disleksi",
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
            headline: "Öğrenme Güçlüğü ve Disleksi",
            description: "Öğrenme güçlüğü ve disleksi nedir, belirtileri nelerdir? Erken tanı ve özel eğitimin önemi hakkında bilgiler.",
            url: "https://www.baskentdilkonusma.com/makaleler/ogrenme-guclugu-disleksi",
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
          <span className="mb-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-[#e63946]">Öğrenme Güçlüğü</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Öğrenme Güçlüğü ve Disleksi</h1>
          <p className="mt-2 text-sm text-gray-400">11 Mart</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="lg:grid lg:grid-cols-[1fr_290px] lg:gap-10 lg:items-start">

          {/* Makale İçeriği */}
          <article>
            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl shadow-md">
              <Image src="/images/makaleler/disleksi.jpg" alt="Öğrenme Güçlüğü ve Disleksi" fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 id="nedir">Öğrenme Güçlüğü Nedir?</h2>
              <p>
                Özgül öğrenme güçlüğü (ÖÖG); çocuğun yaşı ve zekâsı normal olmasına rağmen okuma, matematik ve yazılı anlatımda yaşıtlarından belirgin şekilde geride olması durumudur. Bu çocuklar tembel ya da ilgisiz değildir; beyin bilginin işlenme biçimindeki farklılıktan kaynaklanan bir güçlük yaşamaktadırlar.
              </p>

              <h2 id="erken-belirtiler">Erken Belirtiler (Okul Öncesi Dönem)</h2>
              <ul>
                <li>Konuşma gecikmesi ve dil sorunları</li>
                <li>Kavram gelişiminde sınırlılıklar</li>
                <li>Motor gelişim problemleri</li>
                <li>Dikkat dağınıklığı</li>
              </ul>

              <h2 id="ilkokul">İlkokul Dönemindeki Belirtiler</h2>
              <ul>
                <li>Zekâsı normal olmasına karşın akademik başarısızlık</li>
                <li>Okuma ve yazma güçlüğü (disleksi)</li>
                <li>Harf ve rakamları ters yazma</li>
                <li>Sayısal beceri problemleri (diskalkuli)</li>
                <li>Mekan ve zaman kavramlarında zorlanma</li>
                <li>Motor koordinasyon problemleri (dispraksi)</li>
                <li>El yazısı güçlüğü (disgrafi)</li>
              </ul>

              <h2 id="nedenleri">Nedenleri</h2>
              <p>
                Doğum komplikasyonları, hamilelikte zararlı madde kullanımı, beslenme yetersizliği, beyin hastalıkları ve çevresel faktörler öğrenme güçlüğüne zemin hazırlayabilir. Genetik yatkınlık da önemli bir etkendir.
              </p>

              <h2 id="tedavi">Tedavi Yöntemi</h2>
              <p>
                Eğitim; görsel ve işitsel algının geliştirilmesini içermektedir. Fonetik farkındalık ve akademik beceriler özel eğitim programları ile desteklenir. Her bireyin güçlükleri farklı olduğundan, bireyselleştirilmiş eğitim programı (BEP) hazırlanması büyük önem taşır.
              </p>

              <h2 id="aileler">Aileler Ne Yapmalı?</h2>
              <ul>
                <li><strong>Erken müdahale:</strong> Belirtiler fark edildiğinde vakit kaybetmeden uzman desteği alın</li>
                <li><strong>Okulla iş birliği:</strong> Öğretmenlerle sürekli iletişim halinde olun</li>
                <li><strong>Sabırlı olun:</strong> Tedavi süreci zaman alabilir; çocuğunuzu cesaretlendirin</li>
                <li><strong>Güçlü yönleri destekleyin:</strong> Çocuğunuzun başarılı olduğu alanları öne çıkarın</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-red-50 p-6">
                <p className="font-semibold text-[#e63946]">Disleksi, disgrafi ve diskalkuli değerlendirmesi için bize ulaşın.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href="tel:03123449316" className="inline-flex items-center gap-1 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f8e]">
                    0 (312) 344 93 16
                  </a>
                  <Link href="/disleksi" className="inline-flex items-center gap-1 rounded-lg border border-[#e63946] px-4 py-2 text-sm font-semibold text-[#e63946] hover:bg-red-50">
                    Disleksi Sayfası
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-10 space-y-5 lg:mt-0 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">Bu Makalede</p>
              <nav className="space-y-2">
                {[
                  { id: "nedir", label: "Öğrenme Güçlüğü Nedir?" },
                  { id: "erken-belirtiler", label: "Erken Belirtiler" },
                  { id: "ilkokul", label: "İlkokul Dönemi Belirtileri" },
                  { id: "nedenleri", label: "Nedenleri" },
                  { id: "tedavi", label: "Tedavi Yöntemi" },
                  { id: "aileler", label: "Aileler Ne Yapmalı?" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="flex items-start gap-2 text-sm text-gray-600 transition-colors hover:text-[#0077b6]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e63946]/40" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-400">Diğer Makaleler</p>
              <div className="space-y-4">
                {[
                  { href: "/makaleler/r-sesi-soyleyememe", title: "'R' Sesini Söyleyememe", image: "/images/makaleler/r-sesi.jpg" },
                  { href: "/makaleler/gecikmus-dil-konusma", title: "Gecikmiş Dil ve Konuşma İçin Aileler Neler Yapabilir?", image: "/images/makaleler/gecikme.jpg" },
                  { href: "/makaleler/dikkat-eksikligi-hiperaktivite", title: "Dikkat Eksikliği ve Hiperaktivite (DEHB)", image: "/images/makaleler/dikkat.jpg" },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="group flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                      <Image src={a.image} alt={a.title} fill className="object-cover" />
                    </div>
                    <p className="text-sm font-medium leading-snug text-gray-700 transition-colors group-hover:text-[#0077b6]">{a.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#e63946] p-5 text-white">
              <p className="mb-1 font-bold">Disleksi Değerlendirmesi</p>
              <p className="mb-4 text-sm text-white/80">Uzman kadromuzla kapsamlı değerlendirme ve BEP programı hazırlama.</p>
              <a href="tel:03123449316" className="block rounded-xl bg-white py-2.5 text-center text-sm font-bold text-[#e63946] transition hover:bg-white/90">
                0 (312) 344 93 16
              </a>
              <Link href="/disleksi" className="mt-2 block rounded-xl border border-white/30 py-2.5 text-center text-sm font-semibold text-white transition hover:border-white">
                Disleksi Sayfası
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
