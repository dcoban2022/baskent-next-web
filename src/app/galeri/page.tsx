import { Metadata } from "next";
import GaleriGallery from "@/components/GaleriGallery";

export const metadata: Metadata = {
  title: "Galeri — Başkent Dil Konuşma",
  description: "Başkent Dil Konuşma Merkezi'nden fotoğraflar — terapi seansları, eğitim ortamları ve uzman kadromuz.",
  alternates: { canonical: "https://www.baskentdilkonusma.com/galeri" },
  openGraph: {
    title: "Galeri — Başkent Dil Konuşma",
    description: "Başkent Dil Konuşma Merkezi'nden fotoğraflar — terapi seansları, eğitim ortamları ve uzman kadromuz.",
    url: "https://www.baskentdilkonusma.com/galeri",
    type: "website",
    locale: "tr_TR",
  },
};

export default function Page() {
  return (
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Kurumsal
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Galeri</h1>
          <p className="mx-auto max-w-2xl text-base text-gray-500">
            Merkezimizden kareler — terapi seansları, eğitim ortamları ve uzman kadromuz.
          </p>
        </div>
      </div>

      <GaleriGallery />
    </main>
  );
}
