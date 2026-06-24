import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceFAQ from "@/components/ServiceFAQ";

export const metadata: Metadata = {
  title: "Dikkat Eğitimi & MOXO Dikkat Testi — Başkent Dil Konuşma",
  description: "7-14 yaş için Attentioner dikkat programı ve 6-70 yaş için MOXO bilgisayar destekli dikkat testi.",
};

const faqs = [
  { soru: "MOXO testi nedir?", cevap: "MOXO, 6-70 yaş arası bireylerde dikkat, zamanlama, dürtüsellik ve hiperaktiviteyi ölçen bilgisayar destekli standart bir dikkat testidir." },
  { soru: "MOXO testi DEHB teşhisi için yeterli midir?", cevap: "MOXO tek başına teşhis koymaz; psikiyatrist veya çocuk psikologu değerlendirmesiyle birlikte kullanılır." },
  { soru: "Attentioner programı kimler için uygundur?", cevap: "7-14 yaş arası, dikkat eksikliği ve DEHB belirtileri olan çocuklar için tasarlanmış bilgisayar destekli bireysel eğitim programıdır." },
  { soru: "İlaç kullanmadan dikkat eğitimi işe yarar mı?", cevap: "Evet. Dikkat eğitimi programları ilaçsız süreçte ya da ilaç tedavisiyle birlikte etkili bir destek sağlamaktadır." },
];

export default function Page() {
  return (
    <>
    <ServiceSchema
      name="Dikkat Eğitimi & MOXO Dikkat Testi"
      description="7-14 yaş için Attentioner dikkat programı ve 6-70 yaş için MOXO bilgisayar destekli dikkat testi."
      url="https://www.baskentdilkonusma.com/dikkat-egitimi-moxo-dikkat-testi"
      breadcrumbLabel="Dikkat Eğitimi & MOXO"
    />
    <main className="pt-[116px]">
      <div className="bg-gradient-to-br from-[#f5f0ff] to-white py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-purple-700">Dikkat & Odaklanma</span>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Dikkat Eğitimi & MOXO Dikkat Testi</h1>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Nöropsikolojik temelli <strong>Attentioner</strong> programı ve bilgisayar destekli <strong>MOXO Dikkat Testi</strong> ile dikkat, odaklanma ve dürtü kontrolü sorunlarına kapsamlı yaklaşım sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="rounded-xl bg-purple-700 px-6 py-3 font-semibold text-white transition hover:bg-purple-800">Ücretsiz Değerlendirme</Link>
                <a href="tel:03123449316" className="rounded-xl border-2 border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-purple-600 hover:text-purple-700">0 (312) 344 93 16</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image src="/images/services/dikkat.webp" alt="Dikkat Eğitimi" width={600} height={400} className="h-72 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Attentioner */}
          <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
              <svg className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Attentioner — Dikkatimi Topluyorum</h2>
            <p className="mb-5 text-sm text-purple-600 font-medium">7–14 yaş grubu için geliştirilmiş grup programı</p>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Bremen Üniversitesi (Almanya) tarafından geliştirilen bu program; nöropsikolojik temelli ve davranışçı terapi elemanlarını içermektedir.</p>
              <p>Beyin, artan düzeyde çoklu uyaranlara maruz bırakılarak kognitif fonksiyonlar geliştirilir. Grup ortamında rekabet teşvik edilir ve ödül sistemi kullanılır.</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { val: "15", label: "Oturum" },
                { val: "40 dk", label: "Süre" },
                { val: "Haftalık", label: "Sıklık" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-purple-50 py-3">
                  <p className="text-lg font-bold text-purple-700">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MOXO */}
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <svg className="h-6 w-6 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" /></svg>
            </div>
            <h2 className="mb-2 text-xl font-bold text-gray-900">MOXO Dikkat Testi</h2>
            <p className="mb-5 text-sm text-[#0077b6] font-medium">6–70 yaş için bilgisayar destekli online test</p>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Dikkat, zamanlama, dürtüsellik ve hiperaktivite performanslarını ölçmek amacıyla uygulanan yüz yüze, bilgisayar destekli bir testtir.</p>
              <p>Görsel, işitsel ve karma çeldiricilerden oluşur. Test sonucunda her parametre için yaşa göre norm karşılaştırması yapılır.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              {[
                { val: "~15 dk", label: "Çocuklar" },
                { val: "~18 dk", label: "Yetişkinler" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-blue-50 py-3">
                  <p className="text-lg font-bold text-[#0077b6]">{s.val}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500 font-medium mb-2">Ölçülen Parametreler</p>
              <div className="flex flex-wrap gap-2">
                {["Dikkat", "Zamanlama", "Dürtüsellik", "Hiperaktivite"].map((p) => (
                  <span key={p} className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs text-gray-600">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ items={faqs} />

      <div className="bg-purple-700 py-10">
        <div className="container text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">MOXO Testi veya Attentioner Programı İçin Randevu Alın</h2>
          <p className="mb-6 text-white/80">7–14 yaş arası çocuklar için ücretsiz ön görüşme.</p>
          <Link href="/iletisim" className="rounded-xl bg-white px-8 py-3 font-semibold text-purple-700 transition hover:bg-white/90">Randevu Al</Link>
        </div>
      </div>
    </main>
    </>
  );
}
