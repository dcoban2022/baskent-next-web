"use client";
import { useState } from "react";
import { track } from "@/lib/tracker";

export default function ContactForm() {
  const [form, setForm] = useState({ ad: "", telefon: "", email: "", konu: "", mesaj: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.ad || !form.mesaj) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        track("contact_form_submitted", { konu: form.konu || "belirtilmedi" });
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
        <h3 className="text-xl font-bold text-gray-900">Mesajınız İletildi!</h3>
        <p className="text-gray-500">En kısa sürede sizinle iletişime geçeceğiz.</p>
        <button onClick={() => { setStatus("idle"); setForm({ ad: "", telefon: "", email: "", konu: "", mesaj: "" }); }} className="mt-2 rounded-xl bg-[#0077b6] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#005f8e]">
          Yeni Mesaj
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-ad" className="mb-1.5 block text-sm font-medium text-gray-700">Ad Soyad <span className="text-red-500">*</span></label>
          <input id="contact-ad" name="ad" value={form.ad} onChange={handleChange} required type="text" placeholder="Adınız Soyadınız"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20" />
        </div>
        <div>
          <label htmlFor="contact-telefon" className="mb-1.5 block text-sm font-medium text-gray-700">Telefon</label>
          <input id="contact-telefon" name="telefon" value={form.telefon} onChange={handleChange} type="tel" placeholder="0 5XX XXX XX XX" pattern="[0-9\s\(\)\+]{10,15}"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">E-posta</label>
        <input id="contact-email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="ornek@email.com"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20" />
      </div>
      <div>
        <label htmlFor="contact-konu" className="mb-1.5 block text-sm font-medium text-gray-700">Konu</label>
        <select id="contact-konu" name="konu" value={form.konu} onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20">
          <option value="">Konu seçiniz</option>
          <option>Dil ve Konuşma Bozuklukları</option>
          <option>İşitme Engeli Eğitimi</option>
          <option>Disleksi</option>
          <option>Disgrafi</option>
          <option>Diskalkuli</option>
          <option>Dispraksi</option>
          <option>Dikkat Eğitimi & MOXO</option>
          <option>Bireysel ve Grup Eğitimi</option>
          <option>Değerlendirme</option>
          <option>Diğer</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-mesaj" className="mb-1.5 block text-sm font-medium text-gray-700">Mesajınız <span className="text-red-500">*</span></label>
        <textarea id="contact-mesaj" name="mesaj" value={form.mesaj} onChange={handleChange} required rows={5} placeholder="Mesajınızı buraya yazın..."
          className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20" />
      </div>
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.</p>
      )}
      <button type="submit" disabled={status === "loading"}
        className="w-full rounded-xl bg-[#e63946] py-3.5 text-sm font-semibold text-white transition hover:bg-[#c1121f] disabled:opacity-60">
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
