import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2004", label: "Kuruluş Yılı" },
  { value: "20+", label: "Yıllık Deneyim" },
  { value: "9", label: "Uzman Hizmet Alanı" },
  { value: "Ücretsiz", label: "Servis Hizmeti" },
];

const About = () => {
  return (
    <section className="bg-gray-1 py-16 dark:bg-dark-2 md:py-20 lg:py-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mb-12 lg:mb-0">
              <Image
                src="/images/slider/slider-1.webp"
                alt="Başkent Dil Konuşma Merkezi"
                width={700}
                height={500}
                className="w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-[#e63946] px-8 py-6 text-white shadow-xl lg:block">
                <p className="text-4xl font-bold">20+</p>
                <p className="text-sm font-medium">Yıllık Deneyim</p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="lg:pl-12">
              <span className="mb-4 inline-block rounded bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Hakkımızda
              </span>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                Başkent Dil Konuşma — İşitme, Özel Öğrenme Güçlüğü, Özel
                Eğitim ve Rehabilitasyon Merkezi
              </h2>
              <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                2004 yılından bu yana özel eğitim sektöründe faaliyet gösteren
                merkezimiz; uzman ve akademik eğitim kadrosuyla öğrencilerimizi
                birer yıldız olarak hayata kazandırmayı hedeflemektedir.
              </p>
              <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Öğrenme güçlüğü / disleksi, işitme eğitimi ve dil-konuşma
                bozuklukları alanlarında hizmet veren merkezimizde{" "}
                <strong>Fizik / Zihin / Otizm modülleri bulunmamaktadır.</strong>
              </p>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Merkezimizde sadece Ankara değil, Türkiye&apos;nin birçok
                ilinden gelen bireylere özgü hizmetler sunulmaktadır.{" "}
                <strong>RAM raporlu bireyler için servis hizmetimiz ücretsizdir.</strong>
              </p>

              <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-[#e63946]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-body-color dark:text-body-color-dark">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/hakkimizda"
                className="inline-block rounded bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary/80"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
