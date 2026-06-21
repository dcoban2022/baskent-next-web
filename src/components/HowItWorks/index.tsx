import Link from "next/link";
import React from "react";

const steps: { no: string; title: string; desc: React.ReactNode; icon: React.ReactNode }[] = [
  {
    no: "01",
    title: "Bizi Arayın",
    desc: "Telefon veya iletişim formu aracılığıyla merkezimize ulaşın. Uzmanlarımız sizi bilgilendirsin.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Değerlendirme",
    desc: "Uzman ekibimiz çocuğunuzu TEDİL, AAT ve Disleksi Bataryası gibi formal ve informal testlerle kapsamlı şekilde değerlendirir.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.251 2.251 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Hastane Yönlendirmesi",
    desc: <>Çözger raporu gereken durumlarda aile hastaneye yönlendirilir. <strong>Çözger raporu almak istemeyen veliler ücretli özel seanslara başlayabilir.</strong></>,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "RAM Raporu",
    desc: "Çözger belgesiyle birlikte Rehberlik ve Araştırma Merkezi'ne (RAM) başvurulur. RAM raporu alınarak ücretsiz eğitim hakkı kazanılır.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    no: "05",
    title: "Eğitim & Takip",
    desc: "Bireysel eğitim programı başlar. Düzenli seanslar ve aile görüşmeleriyle ilerleme takip edilir; merkezimizden evinize, evinizden merkezimize ücretsiz servis sağlanır.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    no: "06",
    title: "Süreç Tamamlama",
    desc: "Eğitim hedeflerine ulaşıldığında önce çözger, ardından RAM raporu iptal edilir. Birey bağımsız yaşama hazırlanmış olur.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
            Süreç
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Nasıl İşler?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            İlk aramadan eğitim tamamlanmasına kadar altı adımda yanınızdayız.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Bağlantı çizgisi */}
          <div className="absolute top-8 left-[8.33%] right-[8.33%] hidden h-px bg-gradient-to-r from-[#0077b6]/20 via-[#0077b6]/40 to-[#0077b6]/20 lg:block" />

          {steps.map((step) => (
            <div key={step.no} className="relative flex flex-col items-center text-center">
              <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0077b6] text-white shadow-lg shadow-blue-200">
                {step.icon}
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0077b6] shadow">
                  {step.no}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0077b6] px-8 py-3.5 font-semibold text-white transition hover:bg-[#005f8e]"
          >
            Hemen Başlayın
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
