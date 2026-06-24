import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dikkat Eksikliği ve Hiperaktivite (DEHB) — Başkent Dil Konuşma",
  description: "DEHB belirtileri, tanı süreci ve dikkat eğitimi ile destek yöntemleri hakkında kapsamlı bilgi.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/makaleler/dikkat-eksikligi-hiperaktivite" },
  openGraph: {
    title: "Dikkat Eksikliği ve Hiperaktivite (DEHB) — Başkent Dil Konuşma",
    description: "DEHB belirtileri, tanı süreci ve dikkat eğitimi ile destek yöntemleri hakkında kapsamlı bilgi.",
    url: "https://www.baskentdilkonusma.com/makaleler/dikkat-eksikligi-hiperaktivite",
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
            headline: "Dikkat Eksikliği ve Hiperaktivite (DEHB)",
            description: "DEHB belirtileri, tanı süreci ve dikkat eğitimi ile destek yöntemleri hakkında kapsamlı bilgi.",
            url: "https://www.baskentdilkonusma.com/makaleler/dikkat-eksikligi-hiperaktivite",
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
          <span className="mb-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Dikkat Bozukluğu</span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Dikkat Eksikliği ve Hiperaktivite (DEHB)</h1>
          <p className="mt-2 text-sm text-gray-400">11 Mart</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="lg:grid lg:grid-cols-[1fr_290px] lg:gap-10 lg:items-start">

          {/* Makale İçeriği */}
          <article>
            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl shadow-md">
              <Image src="/images/makaleler/dikkat.jpg" alt="Dikkat Eksikliği ve Hiperaktivite" fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 id="nedir">DEHB Nedir?</h2>
              <p>
                Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB), genetik faktörlerin yanı sıra gebelik, doğum ve doğum sonrası etkenlerden kaynaklanır. Kişinin yaşına ve sosyal çevresine bağlı olarak okul, aile, arkadaşlık ve iş yaşamında ciddi zorluklar yaratır.
              </p>

              <h2 id="tipler">DEHB Tipleri</h2>
              <ul>
                <li><strong>Hiperaktivite belirtilerinin baskın olduğu tip</strong></li>
                <li><strong>Dikkat eksikliği ve hiperaktivite belirtilerinin birlikte görüldüğü tip</strong> (en sık karşılaşılan)</li>
                <li><strong>Dikkat eksikliği belirtilerinin baskın olduğu tip</strong> (kızlarda daha yaygın)</li>
              </ul>

              <h2 id="sikligi">Görülme Sıklığı</h2>
              <ul>
                <li>Okul dönemindeki çocukların <strong>%5–7</strong>&apos;sinde görülür</li>
                <li>Çocukluk döneminde başlar; <strong>%60–70</strong> oranında erişkinliğe kadar devam eder</li>
                <li>Erkeklerde kızlardan <strong>4 kat</strong> fazla görülür</li>
                <li>Yetişkinlerde <strong>%2–4</strong> oranında görülmektedir</li>
              </ul>

              <h2 id="belirtiler">Belirtiler</h2>

              <h3>Dikkat Eksikliği Belirtileri</h3>
              <ul>
                <li>Dikkatin kolayca dağılması</li>
                <li>Uzun süreli konsantrasyonda zorluk</li>
                <li>Ödev ve görevlerde isteksizlik</li>
                <li>Eşya kaybetme</li>
                <li>Yönergeleri takip edememe</li>
              </ul>

              <h3>Hiperaktivite ve Dürtüsellik Belirtileri</h3>
              <ul>
                <li>Oturduğu yerde duramama, sürekli kıpırdama</li>
                <li>Aşırı konuşma</li>
                <li>Sabırsızlık ve sıra bekleyememe</li>
                <li>Düşünmeden hareket etme</li>
                <li>Sakin aktivitelerde sorun yaşama</li>
              </ul>

              <h2 id="etkileri">Etkileri</h2>
              <p>
                Tedavi edilmediğinde akademik başarısızlık, düşük öz güven, kaygı bozuklukları, sosyal uyum problemleri, arkadaş ilişkilerinde zorluk ve depresyon riski artışına yol açabilir.
              </p>

              <div className="mt-8 rounded-2xl bg-purple-50 p-6">
                <p className="font-semibold text-purple-700">MOXO dikkat testi ve Attentioner programı hakkında bilgi almak için bize ulaşın.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href="tel:03123449316" className="inline-flex items-center gap-1 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005f8e]">
                    0 (312) 344 93 16
                  </a>
                  <Link href="/dikkat-egitimi-moxo-dikkat-testi" className="inline-flex items-center gap-1 rounded-lg border border-[#0077b6] px-4 py-2 text-sm font-semibold text-[#0077b6] hover:bg-blue-50">
                    Dikkat Eğitimi Sayfası
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
                  { id: "nedir", label: "DEHB Nedir?" },
                  { id: "tipler", label: "DEHB Tipleri" },
                  { id: "sikligi", label: "Görülme Sıklığı" },
                  { id: "belirtiler", label: "Belirtiler" },
                  { id: "etkileri", label: "Etkileri" },
                ].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="flex items-start gap-2 text-sm text-gray-600 transition-colors hover:text-[#0077b6]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
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
                  { href: "/makaleler/ogrenme-guclugu-disleksi", title: "Öğrenme Güçlüğü ve Disleksi", image: "/images/makaleler/disleksi.jpg" },
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

            <div className="rounded-2xl bg-purple-700 p-5 text-white">
              <p className="mb-1 font-bold">MOXO Dikkat Testi</p>
              <p className="mb-4 text-sm text-white/80">6–70 yaş arası bireyler için bilgisayar destekli dikkat değerlendirmesi.</p>
              <a href="tel:03123449316" className="block rounded-xl bg-white py-2.5 text-center text-sm font-bold text-purple-700 transition hover:bg-white/90">
                0 (312) 344 93 16
              </a>
              <Link href="/dikkat-egitimi-moxo-dikkat-testi" className="mt-2 block rounded-xl border border-white/30 py-2.5 text-center text-sm font-semibold text-white transition hover:border-white">
                Dikkat Eğitimi
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
