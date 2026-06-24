export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi",
    url: "https://www.baskentdilkonusma.com",
    logo: "https://www.baskentdilkonusma.com/images/logo/baskent-logo.png",
    image: "https://www.baskentdilkonusma.com/images/logo/baskent-logo.png",
    description:
      "2004'ten bu yana Ankara'da dil ve konuşma bozuklukları, disleksi, disgrafi, diskalkuli, dispraksi, dikkat eğitimi ve işitme engeli alanlarında uzman eğitim ve rehabilitasyon hizmetleri.",
    foundingDate: "2004",
    telephone: ["+903123449316", "+905057141668"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Işınlar Mah. İvedik Cad. No:2",
      addressLocality: "Yenimahalle",
      addressRegion: "Ankara",
      postalCode: "06378",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/baskentdilkonusma",
      "https://www.facebook.com/baskentdilkonusma",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
