const posts = [
  { id: 1, bg: "from-blue-100 to-blue-50", label: "Disleksi" },
  { id: 2, bg: "from-purple-100 to-purple-50", label: "Dikkat Eğitimi" },
  { id: 3, bg: "from-red-100 to-red-50", label: "Konuşma Terapisi" },
  { id: 4, bg: "from-green-100 to-green-50", label: "Özel Eğitim" },
  { id: 5, bg: "from-yellow-100 to-yellow-50", label: "Aile Rehberliği" },
  { id: 6, bg: "from-blue-100 to-blue-50", label: "Değerlendirme" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="mb-1 inline-block text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
              Instagram
            </span>
            <h2 className="text-3xl font-bold text-gray-900">@baskentdilkonusma</h2>
          </div>
          <a
            href="https://www.instagram.com/baskentdilkonusma/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
            Takip Et
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/baskentdilkonusma/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${post.bg}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100 bg-black/30 rounded-2xl">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                <span className="text-xs font-semibold text-white">{post.label}</span>
              </div>
              <div className="flex h-full w-full items-center justify-center p-3">
                <span className="text-center text-xs font-semibold text-gray-500">{post.label}</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Güncel içerikler ve bilgilendirici videolar için Instagram sayfamızı takip edin.
        </p>
      </div>
    </section>
  );
}
