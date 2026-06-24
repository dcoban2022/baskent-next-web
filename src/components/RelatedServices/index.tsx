import Link from "next/link";

type ServiceItem = {
  title: string;
  desc: string;
  href: string;
};

export default function RelatedServices({ items }: { items: ServiceItem[] }) {
  return (
    <section className="container py-12">
      <h2 className="mb-6 text-xl font-bold text-gray-900">İlgili Hizmetler</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0077b6]/30 hover:shadow-md"
          >
            <div>
              <p className="font-semibold text-gray-900 group-hover:text-[#0077b6] transition-colors">{item.title}</p>
              <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
            </div>
            <svg
              className="h-5 w-5 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#0077b6]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
