"use client";
import { useState } from "react";

const faqs = [
  {
    q: "RAM nedir ve ücretsiz servis nasıl işliyor?",
    a: "RAM (Rehberlik ve Araştırma Merkezi), çocuğunuzun özel eğitim ihtiyacını belgeleyen resmi kurumdur. RAM raporu olan bireyler merkezimizden ücretsiz servis hizmetinden faydalanabilir. Süreç hakkında uzmanlarımız size detaylı bilgi verir.",
  },
  {
    q: "Seans ne kadar sürer, haftada kaç seans gerekir?",
    a: "Bireysel seanslar genellikle 45-50 dakika sürer. Haftada kaç seans yapılacağı çocuğun ihtiyacına ve programına göre uzmanlarımız tarafından belirlenir. Bazı çocuklar haftada 2-3 seans alırken bazıları daha sık seans alabilir.",
  },
  {
    q: "Hangi yaş grubuna hizmet veriyorsunuz?",
    a: "İşitme engeli ve dil-konuşma bozukluklarında 1 yaşından itibaren hizmet veriyoruz. Disleksi, disgrafi, diskalkuli ve dikkat eğitimi genellikle okul öncesi ve okul çağı çocuklarına (4-18 yaş) yöneliktir.",
  },
  {
    q: "İlk değerlendirme ne kadar sürer, ücretli midir?",
    a: "İlk değerlendirme seansı 60-90 dakika arasında sürer. Değerlendirme ücreti hakkında bilgi almak için lütfen merkezimizi arayın: 0 (312) 344 93 16.",
  },
  {
    q: "Otizm veya zihinsel engel değerlendirmesi yapıyor musunuz?",
    a: "Hayır, merkezimizde Fizik/Zihin/Otizm modülleri bulunmamaktadır. Yalnızca dil-konuşma bozuklukları, özel öğrenme güçlükleri (disleksi, disgrafi, diskalkuli, dispraksi), dikkat eğitimi ve işitme engeli alanlarında hizmet veriyoruz.",
  },
  {
    q: "Aile olarak sürece nasıl dahil olabiliriz?",
    a: "Aile katılımı çok önemlidir. Değerlendirme sonrası aile görüşmesi yapılır, ev programı hazırlanır ve düzenli aile bilgilendirme seansları düzenlenir. Ebeveynlerin sürece aktif katılımı çocuğun gelişimini önemli ölçüde hızlandırır.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">
            SSS
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
          <p className="mt-3 text-gray-500">Aklınızdaki soruların cevabını burada bulamazsanız bizi arayın.</p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-semibold text-gray-800">{faq.q}</span>
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-transform ${open === i ? "rotate-45" : ""}`}>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-gray-500">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
