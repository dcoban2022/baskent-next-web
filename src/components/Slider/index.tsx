"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    src: "/images/slider/slider-1.webp",
    alt: "Başkent Dil Konuşma - Terapi Seansı 1",
  },
  {
    id: 2,
    src: "/images/slider/slider-2.webp",
    alt: "Başkent Dil Konuşma - Terapi Seansı 2",
  },
  {
    id: 3,
    src: "/images/slider/slider-3.webp",
    alt: "Başkent Dil Konuşma - Terapi Seansı 3",
  },
];

const Slider = () => {
  return (
    <section className="relative mt-[70px] w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] w-full md:h-[550px] lg:h-[650px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
