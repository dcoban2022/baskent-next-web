"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-2xl">
      <div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          Web sitemizde deneyiminizi iyileştirmek için çerezler kullanılmaktadır. Siteyi kullanmaya devam ederek{" "}
          <Link href="/kvkk" className="font-semibold text-[#0077b6] hover:underline">
            Gizlilik Politikamızı
          </Link>{" "}
          kabul etmiş sayılırsınız.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-xl border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
          >
            Reddet
          </button>
          <button
            onClick={accept}
            className="rounded-xl bg-[#0077b6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#005f8e]"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
