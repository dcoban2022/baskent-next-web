const ulasim = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    label: "Ücretsiz Servis",
    desc: "RAM raporlu öğrenciler için",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    label: "Metro İstasyonu",
    desc: "İvedik Metro Karşısı",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "Merkezi Konum",
    desc: "Yenimahalle, Ankara",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    label: "Otopark",
    desc: "Yakın çevrede otopark imkânı",
  },
];

const bolgeler = [
  "Yenimahalle", "Keçiören", "Etimesgut", "Sincan",
  "Çankaya", "Mamak", "Altındağ",
];

export default function ServiceArea() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Ulaşım
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Ankara'nın Her Semtinden Gelin</h2>
          <p className="mt-3 text-gray-500">
            Kolay ulaşım imkânları ve ücretsiz servisimizle tüm Ankara'ya hizmet veriyoruz.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Ulaşım bilgileri */}
          <div className="grid grid-cols-2 gap-4">
            {ulasim.map((u) => (
              <div key={u.label} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0077b6]">
                  {u.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{u.label}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hizmet bölgeleri */}
          <div className="flex flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Hizmet Verdiğimiz İlçeler</h3>
            <div className="flex flex-wrap gap-2">
              {bolgeler.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-[#0077b6]"
                >
                  {b}
                </span>
              ))}
              <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-400">
                ve daha fazlası...
              </span>
            </div>
            <p className="mt-5 text-sm text-gray-500">
              Merkezimiz İvedik Metro İstasyonu karşısında yer almaktadır. Toplu taşıma ile kolayca ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
