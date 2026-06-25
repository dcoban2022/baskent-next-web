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

type EventRow = {
  id: number;
  created_at: string;
  event_type: string;
  page: string;
  browser: string;
  browser_version: string;
  os: string;
  os_version: string;
  device_type: string;
  language: string;
  timezone: string;
  screen: string;
  is_returning: boolean;
  connection: string;
  country: string;
  city: string;
  region: string;
  ip: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  referrer: string;
  extra: Record<string, unknown>;
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

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString("tr-TR", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
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

const EVENT_META: Record<string, { icon: string; color: string; label: string }> = {
  page_view: { icon: "👁", color: "bg-gray-100 text-gray-600", label: "Sayfa Görüntüleme" },
  phone_clicked: { icon: "📞", color: "bg-orange-100 text-orange-700", label: "Telefon Tıklandı" },
  whatsapp_clicked: { icon: "💬", color: "bg-green-100 text-green-700", label: "WhatsApp Tıklandı" },
  form_submitted: { icon: "✅", color: "bg-blue-100 text-blue-700", label: "Form Gönderildi" },
  symptom_checker: { icon: "🔍", color: "bg-purple-100 text-purple-700", label: "Belirti Sorgulayıcı" },
};

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
        active
          ? "border-[#0077b6] bg-[#0077b6] text-white shadow-sm"
          : "border-gray-200 bg-white text-gray-600 hover:border-[#0077b6] hover:text-[#0077b6]"
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

function DetailRow({ label, value }: { label: string; value?: string | boolean | null }) {
  if (!value && value !== false) return null;
  return (
    <div className="flex gap-2 text-xs">
      <span className="w-28 shrink-0 text-gray-400">{label}</span>
      <span className="font-medium text-gray-800">{String(value)}</span>
    </div>
  );
}

function SessionDetail({ sessionId }: { sessionId: string }) {
  const [data, setData] = useState<{ events: EventRow[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useMemo(() => {
    if (loaded) return;
    setLoading(true);
    fetch(`/api/admin/sessions?id=${sessionId}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoaded(true); })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (loading) return (
    <td colSpan={8} className="px-6 py-6 bg-blue-50/30">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Yükleniyor…
      </div>
    </td>
  );

  if (!data?.events?.length) return (
    <td colSpan={8} className="px-6 py-4 bg-blue-50/30 text-xs text-gray-400">Etkinlik bulunamadı</td>
  );

  const first = data.events[0];

  return (
    <td colSpan={8} className="bg-blue-50/20 px-6 py-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* Visitor profile */}
        <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Ziyaretçi Profili</h4>
          <div className="space-y-1.5">
            <DetailRow label="IP Adresi" value={first.ip} />
            <DetailRow label="Ülke / Şehir" value={[first.country, first.region, first.city].filter(Boolean).join(" · ")} />
            <DetailRow label="Tarayıcı" value={[first.browser, first.browser_version].filter(Boolean).join(" ")} />
            <DetailRow label="İşletim Sistemi" value={[first.os, first.os_version].filter(Boolean).join(" ")} />
            <DetailRow label="Cihaz Tipi" value={first.device_type === "mobile" ? "Mobil" : first.device_type === "tablet" ? "Tablet" : "Masaüstü"} />
            <DetailRow label="Ekran" value={first.screen} />
            <DetailRow label="Dil" value={first.language} />
            <DetailRow label="Saat Dilimi" value={first.timezone} />
            <DetailRow label="Bağlantı" value={first.connection} />
            <DetailRow label="Ziyaretçi Tipi" value={first.is_returning ? "Geri Dönen" : "Yeni Ziyaretçi"} />
            {first.referrer && <DetailRow label="Referrer" value={first.referrer} />}
          </div>
        </div>

        {/* UTM / Source */}
        <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Trafik Kaynağı</h4>
          <div className="space-y-1.5">
            <DetailRow label="Kaynak (Source)" value={first.utm_source || "direct"} />
            <DetailRow label="Mecra (Medium)" value={first.utm_medium} />
            <DetailRow label="Kampanya" value={first.utm_campaign} />
          </div>
          <div className="mt-4 rounded-lg bg-gray-50 p-3">
            <div className="mb-1 text-xs font-semibold text-gray-400">Sayfa Ziyaret Özeti</div>
            <div className="text-2xl font-bold text-gray-900">{data.events.filter(e => e.event_type === "page_view").length}</div>
            <div className="text-xs text-gray-500">sayfa görüntüleme</div>
          </div>
        </div>

        {/* Event timeline */}
        <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Etkinlik Zaman Çizelgesi ({data.events.length})
          </h4>
          <div className="max-h-52 space-y-1.5 overflow-y-auto pr-1">
            {data.events.map((ev, i) => {
              const meta = EVENT_META[ev.event_type] ?? { icon: "•", color: "bg-gray-100 text-gray-600", label: ev.event_type };
              return (
                <div key={ev.id} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px]">
                    {meta.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${meta.color}`}>
                        {meta.label}
                      </span>
                      <span className="text-[10px] text-gray-400">{fmtTime(ev.created_at)}</span>
                    </div>
                    {ev.page && (
                      <div className="mt-0.5 truncate font-mono text-[10px] text-gray-500">{ev.page}</div>
                    )}
                  </div>
                  {i === 0 && <span className="shrink-0 rounded-full bg-blue-100 px-1.5 py-0.5 text-[9px] font-semibold text-blue-600">GİRİŞ</span>}
                  {i === data.events.length - 1 && data.events.length > 1 && (
                    <span className="shrink-0 rounded-full bg-gray-100 px-1.5 py-0.5 text-[9px] font-semibold text-gray-500">ÇIKIŞ</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </td>
  );
}

export default function SessionsTab({ sessions }: { sessions: Session[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [deviceFilter, setDeviceFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const sources = useMemo(() => [...new Set(sessions.map((s) => s.utm_source || "direct"))].sort(), [sessions]);
  const devices = useMemo(() => [...new Set(sessions.map((s) => s.device_type || "desktop"))].sort(), [sessions]);
  const countries = useMemo(() => [...new Set(sessions.map((s) => s.country || "unknown"))].sort(), [sessions]);

  const filtered = useMemo(() => sessions.filter((s) => {
    if (sourceFilter && (s.utm_source || "direct") !== sourceFilter) return false;
    if (deviceFilter && (s.device_type || "desktop") !== deviceFilter) return false;
    if (countryFilter && (s.country || "unknown") !== countryFilter) return false;
    if (statusFilter === "converted" && !s.converted) return false;
    if (statusFilter === "not_converted" && s.converted) return false;
    return true;
  }), [sessions, sourceFilter, deviceFilter, countryFilter, statusFilter]);

  const converted = filtered.filter((s) => s.converted).length;
  const rate = filtered.length ? Math.round((converted / filtered.length) * 100) : 0;
  const avgDuration = filtered.length
    ? Math.round(filtered.reduce((sum, s) => sum + Number(s.duration_sec), 0) / filtered.length) : 0;
  const hasFilters = sourceFilter || deviceFilter || countryFilter || statusFilter;

  return (
    <div>
      {/* Filters */}
      <div className="space-y-2.5 border-b border-gray-100 bg-gray-50/50 px-6 py-4">
        {[
          { label: "Kaynak", items: sources, active: sourceFilter, set: setSourceFilter },
          { label: "Cihaz", items: devices, active: deviceFilter, set: setDeviceFilter, labelMap: { mobile: "📱 Mobil", tablet: "📟 Tablet", desktop: "🖥 Masaüstü" } as Record<string, string> },
          { label: "Ülke", items: countries, active: countryFilter, set: setCountryFilter },
        ].map(({ label, items, active, set, labelMap }) => (
          <div key={label} className="flex flex-wrap items-center gap-2">
            <span className="w-14 text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</span>
            <FilterChip label="Tümü" active={!active} onClick={() => set(null)} />
            {items.map((v) => (
              <FilterChip key={v} label={labelMap?.[v] ?? v} active={active === v} onClick={() => set(active === v ? null : v)} />
            ))}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-14 text-xs font-semibold uppercase tracking-wide text-gray-400">Durum</span>
          <FilterChip label="Tümü" active={!statusFilter} onClick={() => setStatusFilter(null)} />
          <FilterChip label="✓ Dönüşüm Var" active={statusFilter === "converted"} onClick={() => setStatusFilter(statusFilter === "converted" ? null : "converted")} />
          <FilterChip label="Dönüşüm Yok" active={statusFilter === "not_converted"} onClick={() => setStatusFilter(statusFilter === "not_converted" ? null : "not_converted")} />
          {hasFilters && (
            <button onClick={() => { setSourceFilter(null); setDeviceFilter(null); setCountryFilter(null); setStatusFilter(null); }} className="ml-1 text-xs text-gray-400 underline hover:text-gray-600">
              Temizle
            </button>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-3 border-b border-gray-100 px-6 py-4">
        <MiniStat label="Toplam Oturum" value={filtered.length} />
        <MiniStat label="Dönüşüm" value={converted} highlight />
        <MiniStat label="Dönüşüm Oranı" value={`%${rate}`} highlight={rate > 0} />
        <MiniStat label="Ort. Süre" value={fmt(avgDuration)} />
      </div>

      <p className="px-6 py-2 text-xs text-gray-400">Satıra tıklayarak ziyaretçi detaylarını görün</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/30 text-left">
              {["Tarih", "Kaynak", "Cihaz", "Ülke", "IP", "Giriş → Çıkış", "Süre", "Durum"].map((h) => (
                <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((s) => {
              const isOpen = expanded === s.session_id;
              return (
                <>
                  <tr
                    key={s.session_id}
                    onClick={() => setExpanded(isOpen ? null : s.session_id)}
                    className={`cursor-pointer transition-colors ${isOpen ? "bg-blue-50" : "hover:bg-blue-50/30"}`}
                  >
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
                    <td className="px-4 py-3 text-sm text-gray-700">{s.country || "—"}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{s.ip}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs text-gray-700">{s.entry_page || "/"}</span>
                      {s.exit_page && s.exit_page !== s.entry_page && (
                        <><span className="mx-1 text-gray-300">→</span><span className="font-mono text-xs text-gray-400">{s.exit_page}</span></>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-500">{fmt(Number(s.duration_sec))}</td>
                    <td className="px-4 py-3">
                      {s.converted ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          Dönüşüm
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                  {isOpen && (
                    <tr key={`${s.session_id}-detail`} className="bg-blue-50/20">
                      <SessionDetail sessionId={s.session_id} />
                    </tr>
                  )}
                </>
              );
            })}
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
