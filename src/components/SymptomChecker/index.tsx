"use client";
import { useState } from "react";
import { track } from "@vercel/analytics";

const categories = [
  {
    label: "Dil ve Konuşma",
    color: "#0077b6",
    bg: "#e0f0fa",
    symptoms: [
      "2 yaşında hâlâ anlamlı kelime söylemiyor",
      "Konuşurken sesleri atlıyor veya değiştiriyor",
      "Kekemelik ya da akıcılık sorunu yaşıyor",
      "Yaşıtlarına göre geç konuşmaya başladı",
    ],
  },
  {
    label: "Öğrenme Güçlüğü",
    color: "#e63946",
    bg: "#fde8ea",
    symptoms: [
      "Okurken harf veya hece atlıyor, karıştırıyor",
      "El yazısı yaşıtlarına kıyasla çok düzensiz",
      "Matematik sembollerini ve sayıları kavramakta zorlanıyor",
      "Harfleri tersine yazıyor (b/d, p/q karışıklığı)",
    ],
  },
  {
    label: "Dikkat ve Davranış",
    color: "#6b21a8",
    bg: "#f3e8ff",
    symptoms: [
      "Derse veya göreve odaklanmakta çok zorlanıyor",
      "Oturup beklemek yerine sürekli hareket ediyor",
      "Dürtüsel davranıyor, sırasını beklemiyor",
      "Ödevleri yarıda bırakıyor, çabuk sıkılıyor",
    ],
  },
  {
    label: "İşitme ve Algı",
    color: "#0096c7",
    bg: "#e0f7fa",
    symptoms: [
      "Sesi zayıf duyuyor ya da anlamakta güçlük çekiyor",
      "Söylenenleri sık sık tekrar ettiriyor",
      "Gürültülü ortamda iletişim kurmakta zorlanıyor",
      "Sesi taklit etmekte ya da tekrar etmekte güçlük yaşıyor",
    ],
  },
];

type Step = "check" | "form" | "done";

export default function SymptomChecker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [step, setStep] = useState<Step>("check");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = Object.values(checked).filter(Boolean).length;
  const selectedSymptoms = Object.entries(checked)
    .filter(([, v]) => v)
    .map(([k]) => k.split("::")[1]);

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/symptom-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, age, symptoms: selectedSymptoms }),
      });
      if (!res.ok) throw new Error();
      track("symptom_checker_submitted", { symptom_count: selectedSymptoms.length });
      setStep("done");
    } catch {
      setError("Gönderim sırasında bir hata oluştu. Lütfen bizi doğrudan arayın.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Farkındalık Testi
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Çocuğunuzda Bunları Fark Ettiniz mi?
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-gray-500">
            Aşağıdaki belirtilerden size tanıdık gelenleri işaretleyin. Bu test tıbbi tanı değildir; uzman görüşü almanız için bir rehberdir.
          </p>
        </div>

        {step === "check" && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((cat) => (
                <div key={cat.label} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: cat.color }} />
                    {cat.label}
                  </div>
                  <ul className="space-y-3">
                    {cat.symptoms.map((s) => {
                      const key = `${cat.label}::${s}`;
                      return (
                        <li key={key}>
                          <label className="flex cursor-pointer items-start gap-3">
                            <div
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all"
                              style={{
                                borderColor: checked[key] ? cat.color : "#d1d5db",
                                background: checked[key] ? cat.color : "white",
                              }}
                              onClick={() => toggle(key)}
                            >
                              {checked[key] && (
                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                            <span
                              className="text-sm leading-snug text-gray-700 transition-colors"
                              onClick={() => toggle(key)}
                              style={{ color: checked[key] ? cat.color : undefined, fontWeight: checked[key] ? 500 : undefined }}
                            >
                              {s}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {total > 0 && (
              <div className="mt-8 flex flex-col items-center gap-4">
                <p className="text-center text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">{total} belirti</span> işaretlediniz.
                  {total >= 3
                    ? " Uzman değerlendirmesi almanızı öneririz."
                    : " Bir uzmanla paylaşmak faydalı olabilir."}
                </p>
                <button
                  onClick={() => setStep("form")}
                  className="rounded-xl bg-[#e63946] px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#c1121f]"
                >
                  Ücretsiz Değerlendirme Talep Et →
                </button>
              </div>
            )}
          </>
        )}

        {step === "form" && (
          <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-md">
            <button
              onClick={() => setStep("check")}
              className="mb-5 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Geri dön
            </button>

            <div className="mb-5 rounded-xl bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-700">
                {total} belirti işaretlediniz
              </p>
              <ul className="mt-2 space-y-1">
                {selectedSymptoms.slice(0, 3).map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-orange-600">
                    <span className="mt-0.5 shrink-0">•</span> {s}
                  </li>
                ))}
                {selectedSymptoms.length > 3 && (
                  <li className="text-xs text-orange-400">+{selectedSymptoms.length - 3} belirti daha</li>
                )}
              </ul>
            </div>

            <h3 className="mb-1 text-lg font-bold text-gray-900">İletişim Bilgileriniz</h3>
            <p className="mb-6 text-sm text-gray-500">Uzmanımız en kısa sürede sizi arayarak bilgi verecektir.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız ve soyadınız"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Telefon Numarası *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Çocuğunuzun Yaşı</label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20"
                >
                  <option value="">Seçiniz</option>
                  <option>0–2 yaş</option>
                  <option>3–5 yaş</option>
                  <option>6–9 yaş</option>
                  <option>10–14 yaş</option>
                  <option>15 yaş ve üzeri</option>
                </select>
              </div>
              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#e63946] py-3.5 font-semibold text-white shadow-md transition hover:bg-[#c1121f] disabled:opacity-60"
              >
                {loading ? "Gönderiliyor..." : "Değerlendirme Talep Et"}
              </button>
              <p className="text-center text-xs text-gray-400">
                Bilgileriniz yalnızca uzmanımızla iletişim için kullanılır.
              </p>
            </form>
          </div>
        )}

        {step === "done" && (
          <div className="mx-auto max-w-lg rounded-2xl bg-white p-10 text-center shadow-md">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Talebiniz Alındı!</h3>
            <p className="mb-2 text-gray-500">
              <span className="font-semibold text-gray-700">{name}</span>, uzmanımız en kısa sürede{" "}
              <span className="font-semibold text-gray-700">{phone}</span> numaralı hattınızı arayacak.
            </p>
            <p className="mb-6 text-sm text-gray-400">Hemen görüşmek isterseniz bizi arayabilirsiniz.</p>
            <a
              href="tel:+903123449316"
              onClick={() => track("phone_clicked", { number: "03123449316", source: "symptom_checker" })}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0077b6] px-7 py-3 font-semibold text-white transition hover:bg-[#005f8e]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
              </svg>
              0 (312) 344 93 16
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
