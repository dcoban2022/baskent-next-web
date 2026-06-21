"use client";
import { useRef, useState } from "react";

export default function VideoGallery() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-[#f8fafc] py-16 md:py-20">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Sol: Metin */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
              Tanıtım
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Dil ve Konuşma Bozuklukları
            </h2>
            <p className="mb-6 text-gray-500 leading-relaxed">
              Çocuğunuzda dil gelişim gecikmesi, artikülasyon bozukluğu veya kekemelik gibi belirtiler fark ettiyseniz erken müdahale büyük önem taşır. Uzman ekibimiz kapsamlı değerlendirme ve bireysel eğitim programlarıyla <strong>çocuğunuzu değerlendirelim</strong>.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Artikülasyon bozuklukları", "Dil gelişim gecikmesi", "Kekemelik", "Ses bozuklukları", "Afazi"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0077b6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: Video */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
            <video
              ref={ref}
              src="/videos/video-dil-konusma.mp4"
              poster="/videos/video-dil-konusma-poster.jpg"
              className="w-full"
              playsInline
              onEnded={() => setPlaying(false)}
            />

            <button
              onClick={toggle}
              aria-label={playing ? "Duraklat" : "Oynat"}
              className="absolute inset-0 flex items-center justify-center transition"
            >
              {!playing && (
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-sm transition group-hover:scale-110">
                  <svg className="h-7 w-7 translate-x-0.5 text-[#0077b6]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              )}
              {playing && (
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/30 opacity-0 shadow-xl backdrop-blur-sm transition group-hover:opacity-100">
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
