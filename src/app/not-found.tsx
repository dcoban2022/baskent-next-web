import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı — Başkent Dil Konuşma",
  description: "Aradığınız sayfa taşınmış, silinmiş veya mevcut değil.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <Image
        src="/images/404.svg"
        alt="404 - Sayfa Bulunamadı"
        width={320}
        height={220}
        className="mb-8 opacity-80"
        priority
      />
      <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        Sayfa Bulunamadı
      </h1>
      <p className="mb-8 max-w-md text-center text-base text-gray-500">
        Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-[#0077b6] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#005f8e]"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
