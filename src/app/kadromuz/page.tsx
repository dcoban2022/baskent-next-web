import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadromuz — Başkent Dil Konuşma",
  description: "Başkent Dil Konuşma Merkezi uzman ve akademik kadrosu.",
};

const yonetim = [
  {
    name: "Hatice Ökmen",
    title: "Kurum Müdürü",
    spec: "Sosyal Bilgiler Öğretmeni",
    image: "/images/kadro/hatice-okmen.jpg",
  },
  {
    name: "Serdar Sipahi",
    title: "Kurucu / Dil ve Konuşma Terapisti",
    spec: "Odyoloji ve Ses / Konuşma Bozuklukları",
    image: "/images/kadro/serdar-sipahi.jpg",
  },
  {
    name: "Turgay Dursun",
    title: "Kurum Müdür Yardımcısı",
    spec: "",
    image: "/images/kadro/turgay-dursun.jpg",
  },
];

const uzmanlar = [
  {
    name: "Serdar Sipahi",
    title: "Dil ve Konuşma Terapisti",
    spec: "Odyoloji ve Ses / Konuşma Bozuklukları",
    image: "/images/kadro/serdar-sipahi.jpg",
  },
  {
    name: "Atiye Bütün",
    title: "Dil ve Konuşma Terapisti",
    spec: "Odyoloji ve Konuşma Bozuklukları",
    image: "/images/kadro/atiye-butun.jpg",
  },
  {
    name: "Şuayip Küçük",
    title: "Dil ve Konuşma Terapisti",
    spec: "Odyoloji ve Konuşma Bozuklukları",
    image: "/images/kadro/suayip-kucuk.jpg",
  },
  {
    name: "Hasret Özdemir",
    title: "Odyolog",
    spec: "Odyoloji",
    image: "/images/kadro/hasret-ozdemir.jpg",
  },
  {
    name: "Pelin Yıldız",
    title: "Dil ve Konuşma Terapisti",
    spec: "Dil ve Konuşma",
    image: "/images/kadro/pelin-yildiz.jpg",
  },
  {
    name: "Yaren Beyda Atakul",
    title: "Dil ve Konuşma Terapisti",
    spec: "Dil ve Konuşma",
    image: "/images/kadro/yaren-atakul.jpg",
  },
];

const ogretmenler = [
  {
    name: "Beyza Nur Bilgi",
    title: "Psikolog / Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/beyza-nur-bilgi.jpg",
  },
  {
    name: "Zişan Tuğcu",
    title: "Psikolog",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/zishan-tugcu.jpg",
  },
  {
    name: "Ayşegül Ceylan",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/aysegul-ceylan.jpg",
  },
  {
    name: "Gülcan Yalçın",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/gulcan-yalcin.jpg",
  },
  {
    name: "Gülşen Ural",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/gulsen-ural.jpg",
  },
  {
    name: "Kübra Gemalmaz",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/kubra-gemalmaz.jpg",
  },
  {
    name: "Melike Yüce",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/melike-yuce.jpg",
  },
  {
    name: "Nazan Ayhan",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/nazan-ayhan.jpg",
  },
  {
    name: "Sena Erdem",
    title: "Uzman Öğretici",
    spec: "Özel Eğitim Alanı",
    image: "/images/kadro/sena-erdem.jpg",
  },
];

const diger = [
  { name: "Yıldız Akyol", title: "Yardımcı Personel" },
  { name: "Hatun Pehlivan", title: "Yardımcı Personel" },
  { name: "Abdullah Kunduz", title: "Servis Personeli" },
  { name: "Serdar Baş", title: "Servis Personeli" },
  { name: "Sinan Köyhanoğlu", title: "Servis Personeli" },
];

type Member = { name: string; title: string; spec?: string; image?: string };

function MemberCard({ member, large = false }: { member: Member; large?: boolean }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md text-center">
      <div className={`relative mb-4 overflow-hidden rounded-2xl ${large ? "h-52 w-44" : "h-44 w-36"}`}>
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-blue-50">
            <svg className="h-16 w-16 text-[#0077b6]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="font-bold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#0077b6]">{member.title}</p>
      {member.spec && <p className="mt-0.5 text-xs text-gray-400">{member.spec}</p>}
    </div>
  );
}

export default function Page() {
  return (
    <main className="pt-[116px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Başkent Dil Konuşma Merkezi Uzman Kadrosu",
            url: "https://www.baskentdilkonusma.com/kadromuz",
            itemListElement: [
              ...yonetim.map((m, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Person",
                  name: m.name,
                  jobTitle: m.title,
                  image: `https://www.baskentdilkonusma.com${m.image}`,
                  worksFor: { "@type": "MedicalOrganization", name: "Başkent Dil Konuşma Merkezi", url: "https://www.baskentdilkonusma.com" },
                  ...(m.spec ? { knowsAbout: m.spec } : {}),
                },
              })),
              ...uzmanlar.map((m, i) => ({
                "@type": "ListItem",
                position: yonetim.length + i + 1,
                item: {
                  "@type": "Person",
                  name: m.name,
                  jobTitle: m.title,
                  image: `https://www.baskentdilkonusma.com${m.image}`,
                  worksFor: { "@type": "MedicalOrganization", name: "Başkent Dil Konuşma Merkezi", url: "https://www.baskentdilkonusma.com" },
                  ...(m.spec ? { knowsAbout: m.spec } : {}),
                },
              })),
              ...ogretmenler.map((m, i) => ({
                "@type": "ListItem",
                position: yonetim.length + uzmanlar.length + i + 1,
                item: {
                  "@type": "Person",
                  name: m.name,
                  jobTitle: m.title,
                  image: `https://www.baskentdilkonusma.com${m.image}`,
                  worksFor: { "@type": "MedicalOrganization", name: "Başkent Dil Konuşma Merkezi", url: "https://www.baskentdilkonusma.com" },
                },
              })),
            ],
          }),
        }}
      />
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Kurumsal
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Kadromuz</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            Uzman ve akademik eğitim kadromuzla öğrencilerimizin bir yıldız olarak hayata kazandırılması temel hedefimizdir.
          </p>
        </div>
      </div>

      <div className="container py-14 space-y-16">

        {/* Yönetim */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="whitespace-nowrap text-xl font-bold text-gray-800">Yönetim</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {yonetim.map((m) => (
              <div key={m.name} className="w-full sm:w-56">
                <MemberCard member={m} large />
              </div>
            ))}
          </div>
        </section>

        {/* Terapistler */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="whitespace-nowrap text-xl font-bold text-gray-800">Dil ve Konuşma Terapistleri</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {uzmanlar.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </section>

        {/* Özel Eğitim Uzmanları */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="whitespace-nowrap text-xl font-bold text-gray-800">Özel Eğitim Uzmanları</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {ogretmenler.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </section>

        {/* Diğer Personel */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="whitespace-nowrap text-xl font-bold text-gray-800">Diğer Personel</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {diger.map((m) => (
              <div key={m.name} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <svg className="h-5 w-5 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
