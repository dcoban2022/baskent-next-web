import Image from "next/image";
import Link from "next/link";

const kurumsal = [
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "Kadromuz", href: "/kadromuz" },
  { title: "Galeri", href: "/galeri" },
  { title: "Makaleler", href: "/makaleler" },
  { title: "KVKK", href: "/kvkk" },
  { title: "İletişim", href: "/iletisim" },
];

const egitim = [
  { title: "Dil ve Konuşma", href: "/dil-ve-konusma-bozukluklari" },
  { title: "Disleksi", href: "/disleksi" },
  { title: "Disgrafi", href: "/disgrafi" },
  { title: "Diskalkuli", href: "/diskalkuli" },
  { title: "Dispraksi", href: "/dispraksi" },
  { title: "Dikkat & MOXO", href: "/dikkat-egitimi-moxo-dikkat-testi" },
  { title: "İşitme Engeli", href: "/isitme-engeli" },
  { title: "Değerlendirme", href: "/degerlendirme" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0077b6] text-white">
      {/* Ana içerik */}
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* Logo + iletişim */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo/baskent-logo.png"
                alt="Başkent Dil Konuşma"
                width={120}
                height={42}
                className="mb-3 h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-3 text-xs leading-relaxed text-white/65">
              2004'ten bu yana Ankara'da uzman kadromuzla hizmet veriyoruz.
            </p>
            <div className="space-y-1 text-xs text-white/70">
              <p><a href="tel:03123449316" className="hover:text-white">0 (312) 344 93 16</a></p>
              <p><a href="tel:05057141668" className="hover:text-white">0 (505) 714 16 68</a></p>
              <p className="text-white/50">Pzt–Cum 09:00–18:00</p>
            </div>
            <div className="mt-3 flex gap-3">
              <a href="https://www.instagram.com/baskentdilkonusma" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>
              </a>
              <a href="https://www.facebook.com/baskentdilkonusma" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Kurumsal</h3>
            <ul className="space-y-1.5">
              {kurumsal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-white/70 hover:text-white">{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eğitim */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Eğitim Alanları</h3>
            <ul className="space-y-1.5">
              {egitim.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-white/70 hover:text-white">{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adres */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Adres</h3>
            <p className="mb-3 text-xs leading-relaxed text-white/70">
              Işınlar Mah. İvedik Cad. No:2<br />
              Yenimahalle / Ankara<br />
              <span className="text-white/50">(İvedik Metro Karşısı)</span>
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Yol tarifi al
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-1 py-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Başkent Dil Konuşma — Tüm hakları saklıdır.</p>
          <Link href="/kvkk" className="hover:text-white/70">Gizlilik Politikası</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
