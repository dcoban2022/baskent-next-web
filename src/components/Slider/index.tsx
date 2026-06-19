"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    src: "/images/slider/slider-1.webp",
    alt: "Başkent Dil Konuşma Terapi Seansı",
    title: "Uzman Kadromuzla\nYanınızdayız",
    subtitle:
      "2004'ten bu yana dil, konuşma ve öğrenme güçlüklerinde profesyonel destek",
  },
  {
    id: 2,
    src: "/images/slider/slider-2.webp",
    alt: "Başkent Dil Konuşma Bireysel Eğitim",
    title: "Bireysel & Grup\nEğitimleri",
    subtitle: "RAM raporlu bireylere ücretsiz eğitim ve servis hizmeti",
  },
  {
    id: 3,
    src: "/images/slider/slider-3.webp",
    alt: "Başkent Dil Konuşma Değerlendirme",
    title: "Özel Eğitim ve\nRehabilitasyon",
    subtitle: "Türkiye'nin dört bir yanından bireylere özel hizmet",
  },
];

const Slider = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[480px] w-full lg:h-[560px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="mb-4 whitespace-pre-line text-3xl font-bold leading-tight drop-shadow-lg md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-8 max-w-2xl text-base drop-shadow md:text-lg lg:text-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/iletisim"
                    className="rounded bg-[#e63946] px-8 py-3 font-semibold text-white transition hover:bg-[#c1121f]"
                  >
                    Bize Ulaşın
                  </Link>
                  <Link
                    href="#services"
                    className="rounded border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
