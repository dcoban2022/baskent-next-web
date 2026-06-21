const partners = [
  {
    name: "Milli Eğitim Bakanlığı",
    short: "MEB",
    color: "#c1121f",
    bg: "#fde8ea",
    desc: "Onaylı Özel Öğretim Kurumu",
  },
  {
    name: "Rehberlik ve Araştırma Merkezi",
    short: "RAM",
    color: "#0077b6",
    bg: "#e0f0fa",
    desc: "RAM Yönlendirmeli Öğrenci Kabulü",
  },
  {
    name: "Sosyal Güvenlik Kurumu",
    short: "SGK",
    color: "#1d4ed8",
    bg: "#eff6ff",
    desc: "SGK Anlaşmalı Merkez",
  },
  {
    name: "Özel Eğitim ve Rehberlik Hizmetleri",
    short: "ÖERH",
    color: "#059669",
    bg: "#ecfdf5",
    desc: "Genel Müdürlük Onaylı",
  },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Kurumsal İşbirlikleri
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Resmî Kurum ve Kuruluşlarla Çalışıyoruz
          </h2>
          <p className="mt-3 text-gray-500">
            Devlet kurumları ve meslek kuruluşları tarafından tanınan, denetlenen bir merkeziz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {partners.map((p) => (
            <div
              key={p.short}
              className="flex w-40 flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center shadow-sm transition hover:shadow-md"
            >
              <div
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl text-xl font-black"
                style={{ background: p.bg, color: p.color }}
              >
                {p.short}
              </div>
              <p className="text-xs font-semibold leading-snug text-gray-700">{p.name}</p>
              <p className="mt-1.5 text-xs text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
