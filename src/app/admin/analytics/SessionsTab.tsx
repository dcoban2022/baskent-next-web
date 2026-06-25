"use client";
import { useState, useMemo } from "react";

export type Session = {
  session_id: string;
  started_at: string;
  duration_sec: number;
  page_count: number;
  entry_page: string;
  exit_page: string;
  ip: string;
  country: string;
  city: string;
  device_type: string;
  browser: string;
  utm_source: string;
  referrer: string;
  converted: boolean;
  events: string;
};

function fmt(seconds: number) {
  const s = Number(seconds);
  if (!s || s < 5) return "< 5 sn";
  if (s < 60) return `${s} sn`;
  return `${Math.floor(s / 60)} dk ${s % 60} sn`;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const SOURCE_COLORS: Record<string, string> = {
  instagram: "bg-pink-100 text-pink-700 border-pink-200",
  google: "bg-amber-100 text-amber-700 border-amber-200",
  facebook: "bg-blue-100 text-blue-700 border-blue-200",
  direct: "bg-gray-100 text-gray-600 border-gray-200",
};

const DEVICE_COLORS: Record<string, string> = {
  mobile: "bg-blue-100 text-blue-700",
  tablet: "bg-teal-100 text-teal-700",
  desktop: "bg-purple-100 text-purple-700",
};

function FilterChip({
  label,
  active,
  onClick,
  color,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition ${
        active
          ? "border-[#0077b6] bg-[#0077b6] text-white shadow-sm"
          : `border-gray-200 bg-white text-gray-600 hover:border-[#0077b6] hover:text-[#0077b6] ${color ?? ""}`
      }`}
    >
      {label}
    </button>
  );
}

function MiniStat({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className={`rounded-lg px-4 py-3 text-center ${highlight ? "bg-green-50" : "bg-gray-50"}`}>
      <div className={`text-2xl font-bold ${highlight ? "text-green-700" : "text-gray-900"}`}>{value}</div>
      <div className="mt-0.5 text-xs text-gray-500">{label}</div>
    </div>
  );
}

export default function SessionsTab({ sessions }: { sessions: Session[] }) {
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [deviceFilter, setDeviceFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const sources = useMemo(
    () => [...new Set(sessions.map((s) => s.utm_source || "direct"))].sort(),
    [sessions]
  );
  const devices = useMemo(
    () => [...new Set(sessions.map((s) => s.device_type || "desktop"))].sort(),
    [sessions]
  );
  const countries = useMemo(
    () => [...new Set(sessions.map((s) => s.country || "unknown"))].sort(),
    [sessions]
  );

  const filtered = useMemo(() => {
    return sessions.filter((s) => {
      if (sourceFilter && (s.utm_source || "direct") !== sourceFilter) return false;
      if (deviceFilter && (s.device_type || "desktop") !== deviceFilter) return false;
      if (countryFilter && (s.country || "unknown") !== countryFilter) return false;
      if (statusFilter === "converted" && !s.converted) return false;
      if (statusFilter === "not_converted" && s.converted) return false;
      return true;
    });
  }, [sessions, sourceFilter, deviceFilter, countryFilter, statusFilter]);

  const converted = filtered.filter((s) => s.converted).length;
  const rate = filtered.length ? Math.round((converted / filtered.length) * 100) : 0;
  const avgDuration = filtered.length
    ? Math.round(filtered.reduce((sum, s) => sum + Number(s.duration_sec), 0) / filtered.length)
    : 0;

  const hasFilters = sourceFilter || deviceFilter || countryFilter || statusFilter;

  return (
    <div>
      {/* Filter Bar */}
      <div className="space-y-3 border-b border-gray-100 bg-gray-50/50 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs font-semibold uppercase tracking-wide text-gray-400">Kaynak</span>
          <FilterChip label="Tümü" active={!sourceFilter} onClick={() => setSourceFilter(null)} />
          {sources.map((s) => (
            <FilterChip
              key={s}
              label={s}
              active={sourceFilter === s}
              onClick={() => setSourceFilter(sourceFilter === s ? null : s)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs font-semibold uppercase tracking-wide text-gray-400">Cihaz</span>
          <FilterChip label="Tümü" active={!deviceFilter} onClick={() => setDeviceFilter(null)} />
          {devices.map((d) => (
            <FilterChip
              key={d}
              label={d === "mobile" ? "Mobil" : d === "tablet" ? "Tablet" : "Masaüstü"}
              active={deviceFilter === d}
              onClick={() => setDeviceFilter(deviceFilter === d ? null : d)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs font-semibold uppercase tracking-wide text-gray-400">Ülke</span>
          <FilterChip label="Tümü" active={!countryFilter} onClick={() => setCountryFilter(null)} />
          {countries.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={countryFilter === c}
              onClick={() => setCountryFilter(countryFilter === c ? null : c)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-16 text-xs font-semibold uppercase tracking-wide text-gray-400">Durum</span>
          <FilterChip label="Tümü" active={!statusFilter} onClick={() => setStatusFilter(null)} />
          <FilterChip
            label="✓ Dönüşüm Var"
            active={statusFilter === "converted"}
            onClick={() => setStatusFilter(statusFilter === "converted" ? null : "converted")}
          />
          <FilterChip
            label="Dönüşüm Yok"
            active={statusFilter === "not_converted"}
            onClick={() => setStatusFilter(statusFilter === "not_converted" ? null : "not_converted")}
          />
          {hasFilters && (
            <button
              onClick={() => {
                setSourceFilter(null);
                setDeviceFilter(null);
                setCountryFilter(null);
                setStatusFilter(null);
              }}
              className="ml-2 text-xs text-gray-400 underline hover:text-gray-600"
            >
              Temizle
            </button>
          )}
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-3 border-b border-gray-100 px-6 py-4">
        <MiniStat label="Toplam Oturum" value={filtered.length} />
        <MiniStat label="Dönüşüm" value={converted} highlight />
        <MiniStat label="Dönüşüm Oranı" value={`%${rate}`} highlight={rate > 0} />
        <MiniStat label="Ort. Süre" value={fmt(avgDuration)} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/30 text-left">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Tarih</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Kaynak</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Cihaz</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Ülke</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">IP</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Giriş → Çıkış</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Süre</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((s) => (
              <tr key={s.session_id} className="group hover:bg-blue-50/30 transition-colors">
                <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">{fmtDate(s.started_at)}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${SOURCE_COLORS[s.utm_source?.toLowerCase()] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                    {s.utm_source || "direct"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${DEVICE_COLORS[s.device_type] ?? "bg-gray-100 text-gray-600"}`}>
                    {s.device_type === "mobile" ? "📱 Mobil" : s.device_type === "tablet" ? "📟 Tablet" : "🖥 Masaüstü"}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {s.country || "—"}
                  {s.city && <span className="ml-1 text-xs text-gray-400">{s.city}</span>}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-gray-400">{s.ip}</td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-gray-700">{s.entry_page || "/"}</span>
                  {s.exit_page && s.exit_page !== s.entry_page && (
                    <>
                      <span className="mx-1 text-gray-300">→</span>
                      <span className="font-mono text-xs text-gray-400">{s.exit_page}</span>
                    </>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">{fmt(Number(s.duration_sec))}</td>
                <td className="px-4 py-3">
                  {s.converted ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Dönüşüm
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300">—</span>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-sm text-gray-400">
                  <div className="text-2xl">🔍</div>
                  <div className="mt-1">Filtreye uygun oturum bulunamadı</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
