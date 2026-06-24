"use client";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const egitimAlanlari = [
  {
    title: "Dil ve Konuşma Bozuklukları",
    desc: "Artikülasyon, kekemelik, afazi, ses bozuklukları",
    path: "/dil-ve-konusma-bozukluklari",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    title: "Disleksi",
    desc: "Okuma güçlükleri, harf karıştırma, anlama sorunları",
    path: "/disleksi",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Disgrafi",
    desc: "Yazma güçlükleri, harfleri yanlış yazma",
    path: "/disgrafi",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    title: "Diskalkuli",
    desc: "Matematik güçlükleri, sayıları karıştırma",
    path: "/diskalkuli",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Dispraksi",
    desc: "Motor beceri güçlükleri, koordinasyon sorunları",
    path: "/dispraksi",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m0 0a4.49 4.49 0 0 1 1.18-3.012m-6.1 3.318H15" />
      </svg>
    ),
  },
  {
    title: "Dikkat Eğitimi & MOXO",
    desc: "DEHB değerlendirmesi ve dikkat geliştirme",
    path: "/dikkat-egitimi-moxo-dikkat-testi",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "İşitme Engeli",
    desc: "İşitme engelli bireyler için özel eğitim",
    path: "/isitme-engeli",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
  },
  {
    title: "Bireysel ve Grup Eğitimi",
    desc: "Birebir ve küçük grup seansları",
    path: "/bireysel-ve-grup-egitimi",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Değerlendirme",
    desc: "TEDİL, AAT ve Disleksi Bataryası testleri",
    path: "/degerlendirme",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const kurumsal = [
  { title: "Hakkımızda", path: "/hakkimizda" },
  { title: "Kadromuz", path: "/kadromuz" },
  { title: "Makaleler", path: "/makaleler" },
  { title: "Galeri", path: "/galeri" },
  { title: "Videolar", path: "/videolar" },
  { title: "Kariyer", path: "/kariyer" },
  { title: "KVKK", path: "/kvkk" },
  { title: "İletişim", path: "/iletisim" },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<null | "egitim" | "kurumsal">(null);
  const [mobileOpen, setMobileOpen] = useState<null | "egitim" | "kurumsal">(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = (key: "egitim" | "kurumsal") => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setMegaOpen(key);
  };

  const closeMega = () => {
    leaveTimer.current = setTimeout(() => setMegaOpen(null), 120);
  };

  const cancelClose = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(null);
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMegaOpen(null);
    setNavbarOpen(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full">
      {/* Üst bilgi barı */}
      <div className="bg-[#0077b6] py-1.5 text-white">
        <div className="container flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3 sm:gap-5">
            <a href="tel:03123449316" onClick={() => track("phone_clicked", { number: "03123449316", source: "header" })} className="flex items-center gap-1 transition hover:text-white/80">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
              </svg>
              <span>0312 344 93 16</span>
            </a>
            <a href="tel:05057141668" onClick={() => track("phone_clicked", { number: "05057141668", source: "header" })} className="hidden items-center gap-1 transition hover:text-white/80 sm:flex">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
              </svg>
              <span className="hidden md:inline">Kurum Müdürü: </span>0505 714 16 68
            </a>
            <a href="tel:05335734564" onClick={() => track("phone_clicked", { number: "05335734564", source: "header" })} className="hidden items-center gap-1 transition hover:text-white/80 lg:flex">
              <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
              </svg>
              <span className="hidden md:inline">Uzman Danışman: </span>0533 573 45 64
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dil-ve-konusma-bozukluklari" className="hidden items-center gap-1 font-medium transition hover:text-white/80 xl:flex whitespace-nowrap">
              Dil ve Konuşma Bozuklukları
            </Link>
            <Link href="/disleksi" className="hidden items-center gap-1 font-medium transition hover:text-white/80 lg:flex whitespace-nowrap">
              Disleksi
            </Link>
            <Link href="/isitme-engeli" className="hidden items-center gap-1 font-medium transition hover:text-white/80 lg:flex whitespace-nowrap">
              İşitme Engeli
            </Link>
            <Link href="/oyun-terapisi" className="hidden items-center gap-1 font-medium transition hover:text-white/80 lg:flex whitespace-nowrap">
              Oyun Terapi
            </Link>
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
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="/"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/" ? "text-[#e63946]" : "text-gray-700 hover:text-[#0077b6]"
                }`}
              >
                Anasayfa
              </Link>

              {/* Kurumsal dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openMega("kurumsal")}
                onMouseLeave={closeMega}
              >
                <button
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    megaOpen === "kurumsal" ? "text-[#0077b6]" : "text-gray-700 hover:text-[#0077b6]"
                  }`}
                >
                  Kurumsal
                  <svg className={`h-4 w-4 transition-transform ${megaOpen === "kurumsal" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                {megaOpen === "kurumsal" && (
                  <div
                    className="absolute top-full left-0 z-50 mt-1 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeMega}
                  >
                    {kurumsal.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-[#0077b6]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Eğitim Alanlarımız — mega menu */}
              <div
                className="relative"
                onMouseEnter={() => openMega("egitim")}
                onMouseLeave={closeMega}
              >
                <button
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    megaOpen === "egitim" ? "text-[#0077b6]" : "text-gray-700 hover:text-[#0077b6]"
                  }`}
                >
                  Eğitim Alanlarımız
                  <svg className={`h-4 w-4 transition-transform ${megaOpen === "egitim" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </button>

                {megaOpen === "egitim" && (
                  <div
                    className="absolute top-full left-1/2 z-50 mt-1 w-[680px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeMega}
                  >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Hizmet Alanlarımız</p>
                    <div className="grid grid-cols-3 gap-2">
                      {egitimAlanlari.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0077b6] transition-colors group-hover:bg-[#0077b6] group-hover:text-white">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-[#0077b6]">{item.title}</p>
                            <p className="mt-0.5 text-xs text-gray-400 leading-snug">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#0077b6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#005f8e]"
                      >
                        Değerlendirme Randevusu Al
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/degerlendirme"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/degerlendirme" ? "text-[#e63946]" : "text-gray-700 hover:text-[#0077b6]"
                }`}
              >
                Değerlendirme
              </Link>

              <Link
                href="/iletisim"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/iletisim" ? "text-[#e63946]" : "text-gray-700 hover:text-[#0077b6]"
                }`}
              >
                İletişim
              </Link>
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
              <Link href="/" onClick={() => setNavbarOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0077b6]">
                Anasayfa
              </Link>

              {/* Kurumsal mobile */}
              <button
                onClick={() => setMobileOpen(mobileOpen === "kurumsal" ? null : "kurumsal")}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-700"
              >
                Kurumsal
                <svg className={`h-4 w-4 transition-transform ${mobileOpen === "kurumsal" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              {mobileOpen === "kurumsal" && (
                <div className="ml-4 border-l-2 border-blue-100 pl-4">
                  {kurumsal.map((item) => (
                    <Link key={item.path} href={item.path} onClick={() => setNavbarOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-[#0077b6]">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Eğitim Alanları mobile */}
              <button
                onClick={() => setMobileOpen(mobileOpen === "egitim" ? null : "egitim")}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-700"
              >
                Eğitim Alanlarımız
                <svg className={`h-4 w-4 transition-transform ${mobileOpen === "egitim" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              {mobileOpen === "egitim" && (
                <div className="ml-4 border-l-2 border-blue-100 pl-4">
                  {egitimAlanlari.map((item) => (
                    <Link key={item.path} href={item.path} onClick={() => setNavbarOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-[#0077b6]">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/degerlendirme" onClick={() => setNavbarOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0077b6]">
                Değerlendirme
              </Link>
              <Link href="/iletisim" onClick={() => setNavbarOpen(false)} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0077b6]">
                İletişim
              </Link>

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
