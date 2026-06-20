import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Video
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Merkezimizi Tanıyın</h2>
          <p className="mt-3 text-gray-500">Eğitim ortamımız ve uzman kadromuz hakkında kısa bir tanıtım.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Video placeholder — YouTube linki eklenince src="https://www.youtube.com/embed/VIDEO_ID" ile değiştirin */}
          <div className="group relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077b6]/10 to-[#0077b6]/5 shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0077b6] shadow-xl transition group-hover:scale-110">
                <svg className="h-8 w-8 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Tanıtım Videosu</p>
                <p className="mt-1 text-sm text-gray-400">Yakında eklenecek</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              Daha fazla video için Instagram ve YouTube kanalımızı takip edin.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/baskentdilkonusma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                Instagram
              </a>
              <Link
                href="/videolar"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-[#0077b6] hover:text-[#0077b6]"
              >
                Tüm Videolar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
