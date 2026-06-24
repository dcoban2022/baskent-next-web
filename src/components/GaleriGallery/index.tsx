"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/galeri/galeri-01.jpg", alt: "Başkent Dil Konuşma - Terapi Seansı" },
  { src: "/images/galeri/galeri-02.jpg", alt: "Başkent Dil Konuşma - Eğitim Ortamı" },
  { src: "/images/galeri/galeri-03.jpg", alt: "Başkent Dil Konuşma - Bireysel Eğitim" },
  { src: "/images/galeri/galeri-04.jpg", alt: "Başkent Dil Konuşma - Uzman Kadro" },
  { src: "/images/galeri/galeri-05.jpg", alt: "Başkent Dil Konuşma - Rehabilitasyon" },
  { src: "/images/galeri/galeri-06.jpg", alt: "Başkent Dil Konuşma - Merkez" },
  { src: "/images/galeri/galeri-07.jpg", alt: "Başkent Dil Konuşma - Seans" },
  { src: "/images/galeri/galeri-08.jpg", alt: "Başkent Dil Konuşma - Eğitim" },
  { src: "/images/galeri/galeri-10.jpg", alt: "Başkent Dil Konuşma - Çalışma" },
];

export default function GaleriGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % images.length : null));

  return (
    <>
      {/* Grid */}
      <div className="container py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition hover:shadow-md focus:outline-none"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
                <svg className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            className="relative w-full max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/60">
              {selected + 1} / {images.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
