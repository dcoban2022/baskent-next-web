import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dikkat Eksikliği ve Hiperaktivite (DEHB) — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <main className="pt-[116px]">
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
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl shadow-md">
            <Image src="/images/makaleler/dikkat.jpg" alt="Dikkat Eksikliği ve Hiperaktivite" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>DEHB Nedir?</h2>
            <p>
              Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB), genetik faktörlerin yanı sıra gebelik, doğum ve doğum sonrası etkenlerden kaynaklanır. Kişinin yaşına ve sosyal çevresine bağlı olarak okul, aile, arkadaşlık ve iş yaşamında ciddi zorluklar yaratır.
            </p>

            <h2>DEHB Tipleri</h2>
            <ul>
              <li><strong>Hiperaktivite belirtilerinin baskın olduğu tip</strong></li>
              <li><strong>Dikkat eksikliği ve hiperaktivite belirtilerinin birlikte görüldüğü tip</strong> (en sık karşılaşılan)</li>
              <li><strong>Dikkat eksikliği belirtilerinin baskın olduğu tip</strong> (kızlarda daha yaygın)</li>
            </ul>

            <h2>Görülme Sıklığı</h2>
            <ul>
              <li>Okul dönemindeki çocukların <strong>%5–7</strong>&apos;sinde görülür</li>
              <li>Çocukluk döneminde başlar; <strong>%60–70</strong> oranında erişkinliğe kadar devam eder</li>
              <li>Erkeklerde kızlardan <strong>4 kat</strong> fazla görülür</li>
              <li>Yetişkinlerde <strong>%2–4</strong> oranında görülmektedir</li>
            </ul>

            <h2>Belirtiler</h2>

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

            <h2>Etkileri</h2>
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
        </div>
      </div>
    </main>
  );
}
