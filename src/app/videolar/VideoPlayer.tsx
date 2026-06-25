"use client";
import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  description: string;
}

export default function VideoPlayer({ src, poster, title, description }: VideoPlayerProps) {
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
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="group relative aspect-video bg-gray-900">
        <video
          ref={ref}
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          playsInline
          preload="none"
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
      <div className="p-5">
        <h3 className="mb-1 font-bold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </div>
  );
}
