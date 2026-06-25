"use client";
import { useState, useMemo } from "react";

type Session = {
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
  if (!seconds || seconds < 5) return "< 5 sn";
  if (seconds < 60) return `${seconds} sn`;
  return `${Math.floor(seconds / 60)} dk ${seconds % 60} sn`;
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
  instagram: "bg-pink-100 text-pink-700",
  google: "bg-yellow-100 text-yellow-700",
  facebook: "bg-blue-100 text-blue-700",
  direct: "bg-gray-100 text-gray-600",
};

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
        active
          ? "border-[#0077b6] bg-[#0077b6] text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}

export default function SessionsTab({ sessions }: { sessions: Session[] }) {
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [deviceFilter, setDeviceFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const sources = useMemo(() => [...new Set(sessions.map((s) => s.utm_source || "direct"))], [sessions]);
  const devices = useMemo(() => [...new Set(sessions.map((s) => s.device_type || "unknown"))], [sessions]);
  const countries = useMemo(() => [...new Set(sessions.map((s) => s.country || "unknown"))], [sessions]);

  const filtered = useMemo(() => {
    return sessions.filter((s) => {
      if (sourceFilter && (s.utm_source || "direct") !== sourceFilter) return false;
      if (deviceFilter && (s.device_type || "unknown") !== deviceFilter) return false;
      if (countryFilter && (s.country || "unknown") !== countryFilter) return false;
      if (statusFilter === "converted" && !s.converted) return false;
      if (statusFilter === "not_converted" && s.converted) return false;
      return true;
    });
  }, [sessions, sourceFilter, deviceFilter, countryFilter, statusFilter]);

  const conversionRate = sessions.length
    ? Math.round((sessions.filter((s) => s.converted).length / sessions.length) * 100)
    : 0;

  return (
    <div>
      {/* Filters */}
      <div className="space-y-3 border-b border-gray-100 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase text-gray-400">Kaynak</span>
          <Chip label="Tümü" active={!sourceFilter} onClick={() => setSourceFilter(null)} />
          {sources.map((s) => (
            <Chip key={s} label={s} active={sourceFilter === s} onClick={() => setSourceFilter(sourceFilter === s ? null : s)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase text-gray-400">Cihaz</span>
          <Chip label="Tümü" active={!deviceFilter} onClick={() => setDeviceFilter(null)} />
          {devices.map((d) => (
            <Chip key={d} label={d} active={deviceFilter === d} onClick={() => setDeviceFilter(deviceFilter === d ? null : d)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase text-gray-400">Ülke</span>
          <Chip label="Tümü" active={!countryFilter} onClick={() => setCountryFilter(null)} />
          {countries.map((c) => (
            <Chip key={c} label={c} active={countryFilter === c} onClick={() => setCountryFilter(countryFilter === c ? null : c)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase text-gray-400">Durum</span>
          <Chip label="Tümü" active={!statusFilter} onClick={() => setStatusFilter(null)} />
          <Chip label="Dönüşüm Var" active={statusFilter === "converted"} onClick={() => setStatusFilter(statusFilter === "converted" ? null : "converted")} />
          <Chip label="Dönüşüm Yok" active={statusFilter === "not_converted"} onClick={() => setStatusFilter(statusFilter === "not_converted" ? null : "not_converted")} />
        </div>
      </div>

      {/* Summary row */}
      <div className="flex items-center gap-6 border-b border-gray-100 bg-gray-50 px-6 py-3 text-sm text-gray-500">
        <span><strong className="text-gray-900">{filtered.length}</strong> oturum</span>
        <span><strong className="text-gray-900">{filtered.filter((s) => s.converted).length}</strong> dönüşüm</span>
        <span>Dönüşüm oranı <strong className="text-gray-900">%{conversionRate}</strong></span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs font-medium uppercase text-gray-400">
              <th className="px-4 py-3">Tarih</th>
              <th className="px-4 py-3">Kaynak</th>
              <th className="px-4 py-3">Cihaz</th>
              <th className="px-4 py-3">Ülke</th>
              <th className="px-4 py-3">IP</th>
              <th className="px-4 py-3">Giriş → Çıkış</th>
              <th className="px-4 py-3">Süre</th>
              <th className="px-4 py-3">Durum</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.session_id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-2.5 text-xs text-gray-500">{fmtDate(s.started_at)}</td>
                <td className="px-4 py-2.5">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${SOURCE_COLORS[s.utm_source?.toLowerCase()] ?? "bg-gray-100 text-gray-600"}`}>
                    {s.utm_source || "direct"}
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    s.device_type === "mobile" ? "bg-blue-100 text-blue-700" :
                    s.device_type === "tablet" ? "bg-green-100 text-green-700" :
                    "bg-purple-100 text-purple-700"
                  }`}>
                    {s.device_type || "desktop"}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-gray-700">{s.country || "—"}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-gray-400">{s.ip}</td>
                <td className="px-4 py-2.5">
                  <span className="font-mono text-xs text-gray-600">{s.entry_page || "/"}</span>
                  {s.exit_page && s.exit_page !== s.entry_page && (
                    <span className="font-mono text-xs text-gray-400"> → {s.exit_page}</span>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5 text-xs text-gray-500">{fmt(Number(s.duration_sec))}</td>
                <td className="px-4 py-2.5">
                  {s.converted ? (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Dönüşüm</span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">Filtreye uygun oturum bulunamadı</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
