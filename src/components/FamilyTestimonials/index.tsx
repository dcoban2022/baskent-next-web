const yorumlar = [
  {
    ad: "Ayşe K.",
    yorum: "Oğlumun konuşma gecikmesi için başvurduğumuzda çok karamsardık. 6 ay içinde inanılmaz gelişme kaydetti. Terapistlerin ilgisi ve sabırlı yaklaşımı sayesinde artık akranlarıyla aynı seviyede.",
    hizmet: "Dil Gelişim Gecikmesi",
    yildiz: 5,
  },
  {
    ad: "Mehmet T.",
    yorum: "Kızımız disleksi tanısı aldıktan sonra Başkent Dil Konuşma'ya yönlendirildik. Hem çocuğumuza hem bize destek verdiler. Okuma sürecinde büyük ilerleme var, çok memnunuz.",
    hizmet: "Disleksi",
    yildiz: 5,
  },
  {
    ad: "Fatma Y.",
    yorum: "RAM kanalıyla ücretsiz servis hizmetinden faydalanıyoruz. Servis zamanında, personel çok ilgili. Merkezin konumu da çok uygun, metro karşısında olması büyük kolaylık.",
    hizmet: "Özel Eğitim",
    yildiz: 5,
  },
  {
    ad: "Hasan Ö.",
    yorum: "İlk değerlendirmede çocuğumuzun güçlük yaşadığı alanlar çok detaylı anlatıldı. Aile olarak sürece nasıl katkı sağlayacağımızı öğrettiler. Ev programıyla birlikte terapi çok daha etkili oldu.",
    hizmet: "Değerlendirme & Eğitim",
    yildiz: 5,
  },
];

export default function FamilyTestimonials() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">
            Referanslar
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Ailelerimizden Yorumlar</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {yorumlar.map((y, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: y.yildiz }).map((_, s) => (
                  <svg key={s} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 italic">"{y.yorum}"</p>
              <div>
                <p className="font-semibold text-gray-900">{y.ad}</p>
                <p className="text-xs text-[#0077b6]">{y.hizmet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
