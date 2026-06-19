"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Üst bilgi barı */}
      <div className="bg-[#0077b6] py-1.5 text-white">
        <div className="container flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="tel:03123449316" className="flex items-center gap-1 transition hover:text-white/80">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
              </svg>
              <span>0312 344 93 16</span>
            </a>
            <a href="tel:05057141668" className="hidden items-center gap-1 transition hover:text-white/80 sm:flex">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
              </svg>
              <span className="hidden md:inline">Kurum Müdürü: </span>0505 714 16 68
            </a>
            <a href="tel:05335734564" className="hidden items-center gap-1 transition hover:text-white/80 lg:flex">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
              </svg>
              <span className="hidden md:inline">Uzman Danışman: </span>0533 573 45 64
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dikkat-egitimi-moxo-dikkat-testi" className="hidden items-center gap-1 font-medium transition hover:text-white/80 sm:flex whitespace-nowrap">
              Dikkat Eğitimi &amp; MOXO
            </Link>
            <a href="https://www.instagram.com/baskentdilkonusma" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white/80">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/baskentdilkonusma" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white/80">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Ana header */}
      <div className="border-b border-gray-100 bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo/baskent-logo.png"
              alt="Başkent Dil Konuşma"
              width={160}
              height={54}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
            {menuData.map((item, index) => (
              <div key={index} className="relative">
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname === item.path
                        ? "text-[#e63946]"
                        : "text-gray-700 hover:text-[#0077b6]"
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-md transition-colors hover:text-[#0077b6]"
                    >
                      {item.title}
                      <svg className={`h-4 w-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown */}
                    {openIndex === index && (
                      <div className="absolute top-full left-0 z-50 mt-1 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                        {item.submenu?.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            onClick={() => setOpenIndex(-1)}
                            className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-[#0077b6]"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden rounded-lg bg-[#e63946] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c1121f] lg:inline-flex"
            >
              Bize Ulaşın
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex flex-col gap-1.5 rounded-md p-2 lg:hidden"
              aria-label="Menü"
            >
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${navbarOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${navbarOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${navbarOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navbarOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            {menuData.map((item, index) => (
              <div key={index}>
                {item.path ? (
                  <Link
                    href={item.path}
                    onClick={() => setNavbarOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0077b6]"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-700"
                    >
                      {item.title}
                      <svg className={`h-4 w-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <div className="ml-4 border-l-2 border-blue-100 pl-4">
                        {item.submenu?.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.path}
                            onClick={() => setNavbarOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-[#0077b6]"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/iletisim"
                onClick={() => setNavbarOpen(false)}
                className="block rounded-lg bg-[#e63946] py-3 text-center text-sm font-semibold text-white"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;
