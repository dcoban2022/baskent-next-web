import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK - Kişisel Verilerin Korunması — Başkent Dil Konuşma",
  description: "Başkent Dil Konuşma Merkezi kişisel verilerin korunması kanunu (KVKK) kapsamında aydınlatma metni.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/kvkk" },
  openGraph: {
    title: "KVKK - Kişisel Verilerin Korunması — Başkent Dil Konuşma",
    description: "Başkent Dil Konuşma Merkezi kişisel verilerin korunması kanunu (KVKK) kapsamında aydınlatma metni.",
    url: "https://www.baskentdilkonusma.com/kvkk",
    type: "website",
    locale: "tr_TR",
  },
};

export default function Page() {
  return (
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">Kurumsal</span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">KVKK Aydınlatma Metni</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme</p>
        </div>
      </div>

      <div className="container py-14">
        <div className="mx-auto max-w-3xl space-y-8">

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Veri Sorumlusu</h2>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">İşletmeci:</span> İletişim Rehabilitasyon Hizmetleri Turizm Taşımacılık Sanayi Ve Ticaret Limited Şirketi
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, kişisel verileriniz aşağıda açıklanan amaçlar ve hukuki sebepler doğrultusunda işlenmektedir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">İşlenen Kişisel Veriler</h2>
            <ul className="space-y-3">
              {["Kimlik bilgisi", "İletişim bilgileri", "Sağlık verileri", "Eğitim bilgileri", "Fotoğraf ve video kayıtları", "Bina güvenlik kamera görüntüleri"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0077b6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Veri İşleme Amaçları</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Kişisel veriler; milli eğitim mevzuatı gereği zorunlu işlemlerin yerine getirilmesi ve öğrenci kayıt ile eğitim-öğretim süreci yönetimi amacıyla işlenmektedir. Bu kapsamda:
            </p>
            <ul className="space-y-3">
              {[
                "Kayıt işlemleri ve yönetimsel-idari-mali işlemler",
                "Bina güvenliğinin sağlanması",
                "Eğitim faaliyetlerinin yürütülmesi",
                "Ürün ve hizmet geliştirme, pazar araştırması",
                "Yasal yükümlülüklerin yerine getirilmesi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0077b6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Fotoğraf ve Video Kullanımı</h2>
            <p className="text-gray-600 leading-relaxed">
              Eğitim faaliyetleri kapsamında görevli eğitimci/yönetim tarafından uygun bulunduğu takdirde öğrencimizin ve personelin fotoğraf ve video kaydı alınmaktadır. Bu kayıtlar; kurumun tanıtımının yapılması ile ihtiyaç sahibi diğer bireylerin de eğitim hizmetlerinden faydalanmasını sağlamak amacıyla web sitesi, Instagram ve Facebook gibi platformlarda paylaşılabilir.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Söz konusu fotoğraf ve video kayıtları, <strong>açık rıza alınmak şartıyla</strong> kullanılmaktadır.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Haklarınız</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, düzeltme, silme veya yok etme talep etme gibi haklarınız bulunmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Başvurularınızı aşağıdaki iletişim kanalları aracılığıyla iletebilirsiniz:
            </p>
          </div>

          <div className="rounded-2xl border border-[#0077b6]/20 bg-blue-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">İletişim</h2>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Adres:</span> Işınlar Mah. İvedik Cad. No:2, Yenimahalle / Ankara</p>
              <p>
                <span className="font-semibold">KEP:</span>{" "}
                <a href="mailto:baskentdilkonusma@gmail.com" className="break-all text-[#0077b6] hover:underline">
                  baskentdilkonusma@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Telefon:</span>{" "}
                <a href="tel:05057141668" className="text-[#0077b6] hover:underline">0 (505) 714 16 68</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
