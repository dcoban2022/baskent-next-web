"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
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
            {menuData.map((item, index) => (
              <div key={index} className="relative group">
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
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-md transition-colors hover:text-[#0077b6]"
                    >
                      {item.title}
                      <svg className="h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div className="invisible absolute top-full left-0 z-50 mt-1 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.submenu?.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.path}
                          className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-[#0077b6]"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
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
    </header>
  );
};

export default Header;
