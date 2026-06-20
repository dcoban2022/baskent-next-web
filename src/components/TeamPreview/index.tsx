import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Hatice Ökmen", title: "Kurum Müdürü", spec: "Sosyal Bilgiler Öğretmeni", image: "/images/kadro/hatice-okmen.jpg" },
  { name: "Serdar Sipahi", title: "Dil ve Konuşma Terapisti", spec: "Odyoloji ve Ses / Konuşma Bozuklukları", image: "/images/kadro/serdar-sipahi.jpg" },
  { name: "Hasret Özdemir", title: "Odyolog", spec: "Odyoloji", image: "/images/kadro/hasret-ozdemir.jpg" },
  { name: "Beyza Nur Bilgi", title: "Psikolog / Uzman Öğretici", spec: "Özel Eğitim Alanı", image: "/images/kadro/beyza-nur-bilgi.jpg" },
];

export default function TeamPreview() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Ekibimiz
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Uzman Kadromuzla Tanışın</h2>
          <p className="mt-3 text-gray-500">Alanında uzman ve deneyimli ekibimiz çocuğunuzun yanında.</p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mx-auto mb-4 h-36 w-36 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-[#0077b6]">{member.title}</p>
              <p className="mt-0.5 text-xs text-gray-400">{member.spec}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/kadromuz"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0077b6] px-7 py-3 font-semibold text-[#0077b6] transition hover:bg-[#0077b6] hover:text-white"
          >
            Tüm Ekibimizi Görün
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
