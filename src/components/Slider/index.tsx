"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  { src: "/images/slider/slider-1.webp", alt: "Terapi Seansı" },
  { src: "/images/slider/slider-2.webp", alt: "Bireysel Eğitim" },
  { src: "/images/slider/slider-3.webp", alt: "Grup Eğitimi" },
  { src: "/images/slider/slider-4.webp", alt: "Eğitim Seansı" },
  { src: "/images/slider/slider-5.webp", alt: "Rehabilitasyon" },
];

const stats = [
  { value: "2004", label: "Kuruluş" },
  { value: "20+", label: "Yıl Deneyim" },
  { value: "9", label: "Hizmet Alanı" },
];

const Hero = () => {
  return (
    <section className="mt-[116px] bg-gradient-to-br from-[#f0f7ff] to-white">
      <div className="container">
        <div className="flex min-h-[520px] flex-col items-center gap-8 py-12 lg:flex-row lg:gap-16 lg:py-16">

          {/* Sol: Metin */}
          <div className="w-full lg:w-1/2">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-[#0077b6]">
              <span className="h-2 w-2 rounded-full bg-[#0077b6]" />
              Özel Eğitim ve Rehabilitasyon Merkezi
            </span>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Çocuğunuzun{" "}
              <span className="text-[#0077b6]">Potansiyelini</span>{" "}
              Birlikte Keşfedelim
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              2004'ten bu yana dil, konuşma ve öğrenme güçlüklerinde uzman
              kadromuzla yanınızdayız. RAM raporlu bireylere ücretsiz servis
              hizmeti sunuyoruz.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="rounded-xl bg-[#e63946] px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#c1121f] hover:shadow-lg"
              >
                Ücretsiz Değerlendirme
              </Link>
              <Link
                href="/hakkimizda"
                className="rounded-xl border-2 border-gray-200 bg-white px-8 py-3.5 font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]"
              >
                Hakkımızda
              </Link>
            </div>

            {/* İstatistikler */}
            <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-[#0077b6]">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Küçük slider */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Dekoratif arka plan kutusu */}
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl bg-[#0077b6]/10" />
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-[#e63946]/10" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop
                  className="h-[340px] w-full lg:h-[400px]"
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ankara Yenimahalle</p>
                  <p className="text-sm font-bold text-gray-800">İvedik Cad. No:2</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
