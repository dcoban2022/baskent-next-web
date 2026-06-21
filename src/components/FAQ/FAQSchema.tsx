const faqs = [
  {
    q: "RAM nedir ve ücretsiz eğitim nasıl işliyor?",
    a: "RAM (Rehberlik ve Araştırma Merkezi), çocuğunuzun özel eğitim ihtiyacını belgeleyen resmi kurumdur. RAM raporu olan bireyler merkezimizden ücretsiz eğitim hizmetinden faydalanabilir; ayrıca merkezden eve, evden merkeze servis hizmeti de sunulmaktadır.",
  },
  {
    q: "Seans ne kadar sürer, haftada kaç seans gerekir?",
    a: "Bireysel seanslar genellikle 40 dakika sürer. Haftada kaç seans yapılacağı çocuğun ihtiyacına ve programına göre uzmanlarımız tarafından belirlenir.",
  },
  {
    q: "Hangi yaş grubuna hizmet veriyorsunuz?",
    a: "İşitme engeli ve dil-konuşma bozukluklarında 1 yaşından itibaren hizmet veriyoruz. Disleksi, disgrafi, diskalkuli ve dikkat eğitimi genellikle okul öncesi ve okul çağı çocuklarına (4-18 yaş) yöneliktir. Yetişkin gruba da hizmet verilmektedir.",
  },
  {
    q: "İlk değerlendirme ne kadar sürer, ücretli midir?",
    a: "İlk değerlendirme seansı yaklaşık 40 dakika sürer. Değerlendirme ücreti hakkında bilgi almak için lütfen merkezimizi arayın: 0 (312) 344 93 16.",
  },
  {
    q: "Aile olarak sürece nasıl dahil olabiliriz?",
    a: "Aile katılımı çok önemlidir. Değerlendirme sonrası aile görüşmesi yapılır, ev programı hazırlanır ve düzenli aile bilgilendirme seansları düzenlenir.",
  },
  {
    q: "Sigorta veya SGK eğitim ücretini karşılar mı?",
    a: "Merkezimiz SGK anlaşmalı bir kurumdur. Özel sağlık sigortası kapsamı poliçenize göre değişmektedir; sigorta şirketinizle iletişime geçerek rehabilitasyon özel eğitim teminatınızı öğrenebilirsiniz.",
  },
  {
    q: "Kaç seans sonra ilerleme görülür?",
    a: "Çoğu ailemiz ilk 8-12 seans içinde gözle görülür bir değişim fark etmektedir. Uzmanlarımız her 2 ayda bir ilerleme değerlendirmesi yaparak programı günceller.",
  },
  {
    q: "Online veya uzaktan seans imkânı var mı?",
    a: "Belirli durumlarda ve uzmanımızın uygun gördüğü vakalarda online seans seçeneği sunabiliyoruz. Ancak yüz yüze seans çok daha etkilidir.",
  },
  {
    q: "Rapor alırsak daha sonra karşımıza çıkar mı?",
    a: "20 engel puanı eğitim hakkı sağlar. Raporun ilerleyen süreçte herhangi bir olumsuz etkisi bulunmamakta; aksine bireye ek haklar ve destekler sunmaktadır. Rapor iptal olması için engel puanının 20 puanın altına düşmesi yeterlidir.",
  },
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
