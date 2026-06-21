interface Props {
  name: string;
  description: string;
  url: string;
  breadcrumbLabel: string;
}

export default function ServiceSchema({ name, description, url, breadcrumbLabel }: Props) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": name,
      "description": description,
      "url": url,
      "isPartOf": {
        "@type": "MedicalBusiness",
        "name": "Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi",
        "url": "https://www.baskentdilkonusma.com",
      },
      "specialty": "Dil ve Konuşma Terapisi",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://www.baskentdilkonusma.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": breadcrumbLabel,
          "item": url,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
