type FAQItem = { soru: string; cevap: string };

export default function ServiceFAQ({ items }: { items: FAQItem[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.soru,
              acceptedAnswer: { "@type": "Answer", text: item.cevap },
            })),
          }),
        }}
      />
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">Sık Sorulan Sorular</h2>
            <div className="space-y-3">
              {items.map((item, i) => (
                <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                    {item.soru}
                    <svg
                      className="h-5 w-5 shrink-0 text-[#0077b6] transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.cevap}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
