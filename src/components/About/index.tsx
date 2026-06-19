import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2004", label: "Kuruluş Yılı", color: "text-[#0077b6]" },
  { value: "20+", label: "Yıllık Deneyim", color: "text-[#e63946]" },
  { value: "9", label: "Hizmet Alanı", color: "text-[#0077b6]" },
  { value: "Ücretsiz", label: "Servis", color: "text-[#e63946]" },
];

const About = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Sol kolon — fotoğraflar */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mb-12 lg:mb-0">
              <Image
                src="/images/about/about-main.jpg"
                alt="Başkent Dil Konuşma Merkezi"
                width={700}
                height={500}
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden overflow-hidden rounded-xl border-4 border-white shadow-lg lg:block">
                <Image
                  src="/images/slider/slider-3.webp"
                  alt="Bireysel Eğitim"
                  width={200}
                  height={150}
                  className="h-[150px] w-[200px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sağ kolon — içerik */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:pl-16">
              <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#e63946]">
                Hakkımızda
              </span>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                20 Yılı Aşkın Deneyimle Güvenilir Eğitim
              </h2>
              <p className="mb-4 text-base leading-relaxed text-gray-500">
                2004 yılından bu yana özel eğitim sektöründe hizmet vermekteyiz.
              </p>
              <p className="mb-4 text-base leading-relaxed text-gray-500">
                Uzman ve akademik kadromuzla öğrencilerimizi hayata kazandırmayı hedefliyoruz.
              </p>
              <p className="mb-4 text-base leading-relaxed text-gray-500">
                Kurumumuzda{" "}
                <strong className="text-gray-700">Fizik / Zihin / Otizm modülleri bulunmamaktadır.</strong>
              </p>
              <p className="mb-8 text-base leading-relaxed text-gray-500">
                <strong className="text-gray-700">RAM raporlu bireyler için servis hizmetimiz ücretsizdir.</strong>
              </p>

              {/* İstatistikler */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/hakkimizda"
                  className="rounded bg-[#0077b6] px-8 py-3 font-semibold text-white transition hover:bg-[#005f8e]"
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/iletisim"
                  className="rounded border-2 border-[#0077b6] px-8 py-3 font-semibold text-[#0077b6] transition hover:bg-[#0077b6] hover:text-white"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
