"use client";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const PRESETS = [
  { label: "Bugün", value: "1" },
  { label: "7 Gün", value: "7" },
  { label: "30 Gün", value: "30" },
  { label: "90 Gün", value: "90" },
];

export default function DateRangePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentDays = searchParams.get("days") || "30";
  const fromParam = searchParams.get("from");
  const toParam = searchParams.get("to");
  const isCustomActive = !!(fromParam && toParam);

  const today = new Date().toISOString().slice(0, 10);
  const defaultFrom = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const [showCustom, setShowCustom] = useState(isCustomActive);
  const [fromDate, setFromDate] = useState(fromParam || defaultFrom);
  const [toDate, setToDate] = useState(toParam || today);

  function selectPreset(value: string) {
    setShowCustom(false);
    const params = new URLSearchParams();
    params.set("days", value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function applyCustom() {
    if (!fromDate || !toDate) return;
    const params = new URLSearchParams();
    params.set("from", fromDate);
    params.set("to", toDate);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex rounded-lg border border-gray-200 bg-white p-1">
        {PRESETS.map((r) => (
          <button
            key={r.value}
            onClick={() => selectPreset(r.value)}
            className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:text-sm ${
              !isCustomActive && currentDays === r.value
                ? "bg-[#0077b6] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {r.label}
          </button>
        ))}
        <button
          onClick={() => setShowCustom((v) => !v)}
          className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:text-sm ${
            isCustomActive || showCustom
              ? "bg-[#0077b6] text-white shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Özel
        </button>
      </div>
      {showCustom && (
        <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          <input
            type="date"
            value={fromDate}
            max={toDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="text-xs text-gray-700 outline-none"
          />
          <span className="text-gray-300">—</span>
          <input
            type="date"
            value={toDate}
            min={fromDate}
            max={today}
            onChange={(e) => setToDate(e.target.value)}
            className="text-xs text-gray-700 outline-none"
          />
          <button
            onClick={applyCustom}
            className="ml-1 rounded-md bg-[#0077b6] px-2.5 py-1 text-xs font-medium text-white transition hover:bg-[#005f8e]"
          >
            Uygula
          </button>
        </div>
      )}
    </div>
  );
}
