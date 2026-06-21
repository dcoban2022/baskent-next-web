import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — Başkent Dil Konuşma",
  description: "Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi iletişim bilgileri, adres ve konum.",
};

export default function Page() {
  return (
    <main className="pt-[116px]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0f7ff] to-white py-12">
        <div className="container text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            İletişim
          </span>
          <h1 className="mb-3 text-4xl font-bold text-gray-900">Bize Ulaşın</h1>
          <p className="text-base text-gray-500">
            Sorularınız ve randevu talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>

      {/* İletişim Kartları */}
      <div className="container py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Adres */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-gray-900">Adres</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Işınlar Mah. İvedik Cad. No:2<br />
              (İvedik Metro İstasyon Karşısı)<br />
              Yenimahalle / Ankara
            </p>
          </div>

          {/* Telefon */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-gray-900">Telefon</h3>
            <div className="space-y-1.5 text-sm text-gray-500">
              <div>
                <span className="text-xs text-gray-400">Ana Hat</span>
                <a href="tel:03123449316" className="block font-medium text-[#0077b6] hover:underline">0 (312) 344 93 16</a>
              </div>
              <div>
                <span className="text-xs text-gray-400">Kurum Müdürü</span>
                <a href="tel:05057141668" className="block font-medium text-[#0077b6] hover:underline">0 (505) 714 16 68</a>
              </div>
              <div>
                <span className="text-xs text-gray-400">Uzman Danışman</span>
                <a href="tel:05335734564" className="block font-medium text-[#0077b6] hover:underline">0 (533) 573 45 64</a>
              </div>
            </div>
          </div>

          {/* E-posta */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-gray-900">E-posta</h3>
            <a
              href="mailto:baskentdilkonusma@gmail.com"
              className="break-all text-sm text-[#0077b6] hover:underline"
            >
              baskentdilkonusma@gmail.com
            </a>
          </div>

          {/* Sosyal Medya */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
            </div>
            <h3 className="mb-2 font-bold text-gray-900">Sosyal Medya</h3>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/baskentdilkonusma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#0077b6]"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                @baskentdilkonusma
              </a>
              <a
                href="https://www.facebook.com/baskentdilkonusma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#0077b6]"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Başkent Dil Konuşma
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Harita + Form */}
      <div className="container pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Harita */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">Konumumuz</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Ba%C5%9Fkent+Dil+Konu%C5%9Fma+%C3%96zel+E%C4%9Fitim+ve+Rehabilitasyon+Merkezi+%C4%B0vedik+Cad+Yenimahalle+Ankara&output=embed&z=16"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-blue-50 p-4">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-gray-800">Işınlar Mah. İvedik Cad. No:2</p>
                <p className="text-sm text-gray-500">Yenimahalle Girişi, İvedik Metro İstasyon Karşısı, Yenimahalle / Ankara</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">Mesaj Gönderin</h2>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Çalışma Saatleri Bandı */}
      <div className="bg-[#0077b6] py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Pazartesi – Cuma</p>
              <p className="text-lg font-bold">09:00 – 18:00</p>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Cumartesi</p>
              <p className="text-lg font-bold">09:00 – 18:00</p>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Pazar</p>
              <p className="text-lg font-bold">Kapalı</p>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Ücretsiz Değerlendirme</p>
              <a href="tel:03123449316" className="text-lg font-bold hover:text-white/80">0 (312) 344 93 16</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
