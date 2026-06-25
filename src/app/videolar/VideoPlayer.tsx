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

  const handleClickPoster = () => setPlaying(true);

  const handleVideoClick = () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-video bg-gray-900">
        {!playing ? (
          <button
            onClick={handleClickPoster}
            aria-label="Oynat"
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={poster}
              alt={title}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-sm transition group-hover:scale-110">
                <svg className="h-7 w-7 translate-x-0.5 text-[#0077b6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <video
            ref={ref}
            src={src}
            autoPlay
            className="h-full w-full object-cover"
            playsInline
            onClick={handleVideoClick}
            onEnded={() => setPlaying(false)}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-1 font-bold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </div>
  );
}
