"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const RANGES = [
  { label: "Bugün", value: "1" },
  { label: "7 Gün", value: "7" },
  { label: "30 Gün", value: "30" },
  { label: "90 Gün", value: "90" },
];

export default function DateRangePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("days") || "30";

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("days", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex rounded-lg border border-gray-200 bg-white p-1">
      {RANGES.map((r) => (
        <button
          key={r.value}
          onClick={() => select(r.value)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
            current === r.value
              ? "bg-[#0077b6] text-white shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
