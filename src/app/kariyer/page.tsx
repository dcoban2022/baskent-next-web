import { Metadata } from "next";
import KariyerForm from "@/components/KariyerForm";

export const metadata: Metadata = {
  title: "Kariyer — Başkent Dil Konuşma",
  description:
    "Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi'nde kariyer fırsatları. Dil ve konuşma terapisti, özel eğitim öğretmeni ve diğer pozisyonlar için başvurun.",
  alternates: {
    canonical: "https://www.baskentdilkonusma.com/kariyer",
  },
};

const ILANLAR = [
  {
    baslik: "Dil ve Konuşma Terapisti",
    tur: "Tam Zamanlı",
    aciklama:
      "Dil ve konuşma bozuklukları alanında bireylere yönelik değerlendirme ve terapi hizmeti yürütecek uzman arıyoruz.",
    sartlar: ["Dil ve Konuşma Terapisi lisans mezunu", "ÖSYM belgesi", "Deneyim tercih sebebi"],
  },
  {
    baslik: "Özel Eğitim Öğretmeni",
    tur: "Tam Zamanlı",
    aciklama:
      "Disleksi, disgrafi, diskalkuli ve benzeri öğrenme güçlükleri olan bireylere birebir eğitim verecek öğretmen arıyoruz.",
    sartlar: ["Özel Eğitim lisans mezunu", "MEB onaylı sertifika", "Sabırlı ve ilgili"],
  },
  {
    baslik: "Odyolog / İşitme Cihazı Uzmanı",
    tur: "Yarı Zamanlı / Tam Zamanlı",
    aciklama:
      "İşitme engeli olan danışanlara yönelik değerlendirme ve uyum süreçlerini yönetecek odyolog arıyoruz.",
    sartlar: ["Odyoloji lisans veya yüksek lisans mezunu", "İşitme cihazı uyum deneyimi"],
  },
  {
    baslik: "Stajyer",
    tur: "Staj",
    aciklama:
      "Dil ve Konuşma Terapisi, Özel Eğitim veya Çocuk Gelişimi alanlarında eğitim gören öğrencilere staj imkânı sunuyoruz.",
    sartlar: ["İlgili bölüm öğrencisi", "Staj belgesi gerekiyor"],
  },
];

const TUR_RENK: Record<string, string> = {
  "Tam Zamanlı": "bg-blue-50 text-[#0077b6]",
  "Yarı Zamanlı / Tam Zamanlı": "bg-purple-50 text-purple-700",
  "Staj": "bg-green-50 text-green-700",
};

export default function KariyerPage() {
  return (
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Kariyer
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Ekibimize Katılın</h1>
          <p className="mx-auto max-w-xl text-base text-gray-500">
            20 yılı aşkın deneyimimizle büyümeye devam ediyoruz. Çocukların hayatına dokunmak
            isteyen uzman ve öğretmenleri aramıza bekliyoruz.
          </p>
        </div>
      </div>

      {/* Neden Biz */}
      <div className="container py-14">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Neden Başkent Dil Konuşma?</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              ),
              baslik: "20+ Yıl Deneyim",
              aciklama: "2004'ten bu yana sektörde köklü bir kurumun parçası olun.",
            },
            {
              icon: (
                <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              ),
              baslik: "Güçlü Ekip",
              aciklama: "Alanında uzman, birbirine destek olan bir ekiple çalışın.",
            },
            {
              icon: (
                <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              ),
              baslik: "Sürekli Gelişim",
              aciklama: "Seminer, eğitim ve sertifika desteğiyle kendinizi geliştirin.",
            },
            {
              icon: (
                <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              ),
              baslik: "Anlamlı İş",
              aciklama: "Her gün çocukların ve ailelerin hayatına olumlu katkı sağlayın.",
            },
          ].map((kart) => (
            <div key={kart.baslik} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {kart.icon}
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{kart.baslik}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{kart.aciklama}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Açık Pozisyonlar */}
      <div className="bg-gray-50 py-14">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Açık Pozisyonlar</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {ILANLAR.map((ilan) => (
              <div key={ilan.baslik} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{ilan.baslik}</h3>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${TUR_RENK[ilan.tur] ?? "bg-gray-100 text-gray-600"}`}>
                    {ilan.tur}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{ilan.aciklama}</p>
                <ul className="space-y-1.5">
                  {ilan.sartlar.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">
            Aradığınız pozisyonu bulamadınız mı? Yine de aşağıdaki formu doldurabilirsiniz.
          </p>
        </div>
      </div>

      {/* Başvuru Formu */}
      <div className="container py-14">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Başvuru Formu</h2>
            <p className="text-sm text-gray-500">
              Formu doldurun, başvurunuzu değerlendirip sizinle iletişime geçelim.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <KariyerForm />
          </div>
        </div>
      </div>

      {/* Alt Bant */}
      <div className="bg-[#0077b6] py-8">
        <div className="container text-center text-white">
          <p className="text-base font-semibold">Sorunuz mu var?</p>
          <p className="mt-1 text-sm text-white/70">
            Kariyer fırsatları hakkında bilgi almak için bizi arayabilirsiniz.
          </p>
          <a
            href="tel:03123449316"
            className="mt-3 inline-block text-lg font-bold hover:text-white/80"
          >
            0 (312) 344 93 16
          </a>
        </div>
      </div>
    </main>
  );
}
