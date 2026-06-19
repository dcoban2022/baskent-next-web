import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & Açıklama & Sosyal Medya */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/baskent-logo.png"
                  alt="Başkent Dil Konuşma"
                  width={160}
                  height={55}
                  className="w-auto brightness-0 invert"
                />
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                2004 yılından bu yana dil, konuşma ve öğrenme güçlüklerinde uzman ve akademik kadromuzla hizmet veriyoruz.
              </p>
              <div className="mb-4 flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="text-sm text-white/60">
                  Işınlar Mah. İvedik Cad. No:2 (Yenimahalle Girişi, İvedik Metro İstasyon Karşısı), Yenimahalle / Ankara
                </p>
              </div>
              <div className="mb-2 flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                </svg>
                <p className="text-sm text-white/60">
                  Kurum Müdürü:{" "}
                  <a href="tel:05057141668" className="transition hover:text-[#0077b6]">
                    0 (505) 714 16 68
                  </a>
                </p>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                </svg>
                <p className="text-sm text-white/60">
                  Uzman Danışman:{" "}
                  <a href="tel:05335734564" className="transition hover:text-[#0077b6]">
                    0 (533) 573 45 64
                  </a>
                </p>
              </div>
              {/* Sosyal Medya */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/baskentdilkonusma"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition hover:text-[#0077b6]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/baskentdilkonusma"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition hover:text-[#0077b6]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Kurumsal Linkler */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-lg font-bold text-white">
                Kurumsal
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Hakkımızda", href: "/hakkimizda" },
                  { title: "Kadromuz", href: "/kadromuz" },
                  { title: "Makaleler", href: "/makaleler" },
                  { title: "Galeri", href: "/galeri" },
                  { title: "Videolar", href: "/videolar" },
                  { title: "KVKK", href: "/kvkk" },
                  { title: "İletişim", href: "/iletisim" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-[#0077b6]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Eğitim Alanları */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-lg font-bold text-white">
                Eğitim Alanlarımız
              </h2>
              <ul className="space-y-3">
                {[
                  { title: "Dil ve Konuşma Bozuklukları", href: "/dil-ve-konusma-bozukluklari" },
                  { title: "Disleksi", href: "/disleksi" },
                  { title: "Disgrafi", href: "/disgrafi" },
                  { title: "Diskalkuli", href: "/diskalkuli" },
                  { title: "Dispraksi", href: "/dispraksi" },
                  { title: "Dikkat Eğitimi & MOXO", href: "/dikkat-egitimi-moxo-dikkat-testi" },
                  { title: "İşitme Engeli", href: "/isitme-engeli" },
                  { title: "Bireysel ve Grup Eğitimi", href: "/bireysel-ve-grup-egitimi" },
                  { title: "Değerlendirme", href: "/degerlendirme" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-[#0077b6]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />
        <div className="py-8 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Başkent Dil Konuşma — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
