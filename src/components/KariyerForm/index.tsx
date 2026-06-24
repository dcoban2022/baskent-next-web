"use client";
import { useState } from "react";
import { track } from "@vercel/analytics";

const POZISYONLAR = [
  "Dil ve Konuşma Terapisti",
  "Özel Eğitim Öğretmeni",
  "Odyolog / İşitme Cihazı Uzmanı",
  "Çocuk Gelişim Uzmanı",
  "Oyun Terapisti",
  "Psikolog",
  "İdari Personel / Sekreter",
  "Stajyer",
  "Diğer",
];

const EGITIM_DURUMLARI = [
  "Lise",
  "Ön Lisans",
  "Lisans",
  "Yüksek Lisans",
  "Doktora",
];

const DENEYIM_SEVIYELERI = [
  "Yeni mezun / Stajyer",
  "1 – 2 yıl",
  "3 – 5 yıl",
  "6 – 10 yıl",
  "10 yıl ve üzeri",
];

type FormState = {
  ad: string;
  telefon: string;
  email: string;
  pozisyon: string;
  egitim: string;
  deneyim: string;
  mesaj: string;
};

const EMPTY: FormState = {
  ad: "", telefon: "", email: "", pozisyon: "", egitim: "", deneyim: "", mesaj: "",
};

export default function KariyerForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.ad || !form.telefon || !form.email || !form.pozisyon || !form.mesaj) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/kariyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        track("kariyer_basvuru_gonderildi", { pozisyon: form.pozisyon });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-green-100 bg-green-50 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Başvurunuz Alındı!</h3>
        <p className="text-gray-500">
          Başvurunuzu inceleyip en kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm(EMPTY); }}
          className="mt-2 rounded-xl bg-[#0077b6] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#005f8e]"
        >
          Yeni Başvuru
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kariyer-ad" className="mb-1.5 block text-sm font-medium text-gray-700">
            Ad Soyad <span className="text-red-500">*</span>
          </label>
          <input
            id="kariyer-ad" name="ad" value={form.ad} onChange={handleChange} required type="text"
            placeholder="Adınız Soyadınız"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
          />
        </div>
        <div>
          <label htmlFor="kariyer-telefon" className="mb-1.5 block text-sm font-medium text-gray-700">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            id="kariyer-telefon" name="telefon" value={form.telefon} onChange={handleChange} required type="tel"
            placeholder="0 5XX XXX XX XX" pattern="[0-9\s\(\)\+]{10,15}"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="kariyer-email" className="mb-1.5 block text-sm font-medium text-gray-700">
          E-posta <span className="text-red-500">*</span>
        </label>
        <input
          id="kariyer-email" name="email" value={form.email} onChange={handleChange} required type="email"
          placeholder="ornek@email.com"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
        />
      </div>

      <div>
        <label htmlFor="kariyer-pozisyon" className="mb-1.5 block text-sm font-medium text-gray-700">
          Başvurulan Pozisyon <span className="text-red-500">*</span>
        </label>
        <select
          id="kariyer-pozisyon" name="pozisyon" value={form.pozisyon} onChange={handleChange} required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
        >
          <option value="">Pozisyon seçiniz</option>
          {POZISYONLAR.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kariyer-egitim" className="mb-1.5 block text-sm font-medium text-gray-700">Eğitim Durumu</label>
          <select
            id="kariyer-egitim" name="egitim" value={form.egitim} onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
          >
            <option value="">Seçiniz</option>
            {EGITIM_DURUMLARI.map((e) => <option key={e}>{e}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="kariyer-deneyim" className="mb-1.5 block text-sm font-medium text-gray-700">Deneyim</label>
          <select
            id="kariyer-deneyim" name="deneyim" value={form.deneyim} onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
          >
            <option value="">Seçiniz</option>
            {DENEYIM_SEVIYELERI.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="kariyer-mesaj" className="mb-1.5 block text-sm font-medium text-gray-700">
          Kendinizden Bahsedin <span className="text-red-500">*</span>
        </label>
        <textarea
          id="kariyer-mesaj" name="mesaj" value={form.mesaj} onChange={handleChange} required rows={5}
          placeholder="Eğitim geçmişiniz, deneyimleriniz ve neden bizimle çalışmak istediğinizi kısaca anlatın..."
          className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.
        </p>
      )}

      <button
        type="submit" disabled={status === "loading"}
        className="w-full rounded-xl bg-[#0077b6] py-3.5 text-sm font-semibold text-white transition hover:bg-[#005f8e] disabled:opacity-60"
      >
        {status === "loading" ? "Gönderiliyor..." : "Başvuruyu Gönder"}
      </button>
    </form>
  );
}
