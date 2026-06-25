"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import SessionsTab, { type Session } from "./SessionsTab";

type ConversionFilter = "phone" | "whatsapp" | "form" | null;

type Overview = {
  pv_today: number;
  pv_period: number;
  uniq_visitors: number;
  phone: number;
  wa: number;
  form: number;
};

type TrendPoint = { day: string; pv: number; conversions: number };

function calcDelta(cur: number, prev: number): number | null {
  if (!prev) return null;
  return Math.round(((cur - prev) / prev) * 100);
}

function formatDuration(sec: number): string {
  if (!sec || sec < 1) return "—";
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return s > 0 ? `${m}dk ${s}s` : `${m}dk`;
}

function StatCard({
  label,
  value,
  displayValue,
  icon,
  color = "blue",
  filterKey,
  active,
  onClick,
  delta,
  suffix,
  invertDelta,
}: {
  label: string;
  value: number;
  displayValue?: string;
  icon: React.ReactNode;
  color?: "blue" | "green" | "orange" | "pink" | "purple" | "teal" | "red";
  filterKey?: ConversionFilter;
  active?: boolean;
  onClick?: () => void;
  delta?: number | null;
  suffix?: string;
  invertDelta?: boolean;
}) {
  const bg: Record<string, string> = {
    blue:   "bg-blue-50 text-blue-600",
    green:  "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    pink:   "bg-pink-50 text-pink-600",
    purple: "bg-purple-50 text-purple-600",
    teal:   "bg-teal-50 text-teal-600",
    red:    "bg-red-50 text-red-600",
  };
  const ring: Record<string, string> = {
    orange: "ring-orange-400",
    green:  "ring-green-400",
    pink:   "ring-pink-400",
    red:    "ring-red-400",
  };

  const isGood = delta == null
    ? true
    : invertDelta
    ? delta <= 0
    : delta >= 0;

  return (
    <button
      onClick={onClick}
      disabled={!filterKey}
      className={[
        "w-full rounded-xl border bg-white p-5 text-left shadow-sm transition",
        filterKey ? "cursor-pointer hover:shadow-md" : "cursor-default",
        active ? `ring-2 ${ring[color] ?? "ring-blue-400"}` : "border-gray-100",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{label}</p>
        <span className={`rounded-lg p-2 ${bg[color]}`}>{icon}</span>
      </div>
      <p className="mt-3 text-3xl font-bold text-gray-900">
        {displayValue ?? (Number(value).toLocaleString("tr-TR") + (suffix ?? ""))}
      </p>
      <div className="mt-1 flex min-h-[1rem] items-center justify-between gap-1">
        {delta != null ? (
          <span className={`text-xs font-semibold ${isGood ? "text-green-600" : "text-red-500"}`}>
            {delta >= 0 ? "↑" : "↓"}{Math.abs(delta)}% önceki dönem
          </span>
        ) : (
          <span />
        )}
        {filterKey && (
          <span className={`text-xs ${active ? "font-semibold text-[#0077b6]" : "text-gray-400"}`}>
            {active ? "✓ Filtre aktif" : "Filtrele →"}
          </span>
        )}
      </div>
    </button>
  );
}

function DualTrend({ data, label }: { data: TrendPoint[]; label: string }) {
  if (!data.length) return null;
  const maxPv   = Math.max(...data.map((d) => Number(d.pv)), 1);
  const maxConv = Math.max(...data.map((d) => Number(d.conversions)), 1);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold text-gray-900">Görüntüleme & Dönüşüm Trendi</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2.5 w-2.5 rounded-sm bg-blue-200" />Görüntüleme
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2.5 w-2.5 rounded-sm bg-green-300" />Dönüşüm
          </div>
          <span className="text-xs text-gray-400">{label}</span>
        </div>
      </div>
      <div className="flex h-20 items-end gap-px">
        {data.map((d) => (
          <div key={d.day} className="flex flex-1 items-end gap-px">
            <div
              title={`${new Date(d.day).toLocaleDateString("tr-TR", { month: "short", day: "numeric" })}: ${d.pv} görüntüleme`}
              className="flex-1 cursor-default rounded-t bg-blue-200 transition-colors hover:bg-blue-400"
              style={{ height: `${(Number(d.pv) / maxPv) * 100}%`, minHeight: 2 }}
            />
            <div
              title={`${new Date(d.day).toLocaleDateString("tr-TR", { month: "short", day: "numeric" })}: ${d.conversions} dönüşüm`}
              className="flex-1 cursor-default rounded-t bg-green-300 transition-colors hover:bg-green-500"
              style={{ height: `${(Number(d.conversions) / maxConv) * 100}%`, minHeight: Number(d.conversions) > 0 ? 2 : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ConversionGoal({ totalConversions }: { totalConversions: number }) {
  const [goal, setGoal]     = useState<number>(0);
  const [editing, setEditing] = useState(false);
  const [input, setInput]   = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("conv_monthly_goal");
    if (stored) setGoal(Number(stored));
  }, []);

  function saveGoal() {
    const n = parseInt(input, 10);
    if (!n || n <= 0) return;
    localStorage.setItem("conv_monthly_goal", String(n));
    setGoal(n);
    setEditing(false);
  }

  const pct      = goal > 0 ? Math.min(Math.round((totalConversions / goal) * 100), 100) : 0;
  const barColor = pct >= 100 ? "bg-green-500" : pct >= 75 ? "bg-[#0077b6]" : pct >= 50 ? "bg-yellow-400" : "bg-red-400";

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Dönüşüm Hedefi</h2>
        <button
          onClick={() => { setEditing(true); setInput(String(goal || "")); }}
          className="text-xs text-[#0077b6] hover:underline"
        >
          {goal ? "Değiştir" : "Hedef belirle"}
        </button>
      </div>
      {editing ? (
        <div className="flex gap-2">
          <input
            type="number"
            min={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Aylık hedef (örn: 50)"
            className="flex-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm outline-none focus:border-[#0077b6]"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") saveGoal();
              if (e.key === "Escape") setEditing(false);
            }}
          />
          <button
            onClick={saveGoal}
            className="rounded-lg bg-[#0077b6] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#005f8e]"
          >
            Kaydet
          </button>
          <button
            onClick={() => setEditing(false)}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            İptal
          </button>
        </div>
      ) : goal > 0 ? (
        <>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold text-gray-900">{totalConversions}</span>
            <span className="text-sm text-gray-400">/ {goal} hedef</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className={`h-3 rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {pct >= 100
              ? "Hedef aşıldı!"
              : `%${pct} tamamlandı · ${Math.max(0, goal - totalConversions)} dönüşüm kaldı`}
          </p>
        </>
      ) : (
        <p className="py-2 text-sm text-gray-400">Aylık dönüşüm hedefi belirlenmedi.</p>
      )}
    </div>
  );
}

function Funnel({ sessions }: { sessions: Session[] }) {
  const steps = [
    { label: "Tüm Ziyaretler",  value: sessions.length,                                                   color: "bg-[#0077b6]" },
    { label: "2+ Sayfa Gezdi",  value: sessions.filter((s) => Number(s.page_count) >= 2).length,           color: "bg-blue-500" },
    { label: "Dönüşüm Yaptı",  value: sessions.filter((s) => s.converted).length,                        color: "bg-green-500" },
  ];
  const max = steps[0].value || 1;
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 font-semibold text-gray-900">Dönüşüm Hunisi</h2>
      <div className="space-y-4">
        {steps.map((step, i) => {
          const pct = Math.round((step.value / max) * 100);
          return (
            <div key={i}>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="font-medium text-gray-700">{step.label}</span>
                <span className="text-gray-500">
                  {step.value.toLocaleString("tr-TR")}
                  <span className="ml-1.5 text-gray-400">(%{pct})</span>
                </span>
              </div>
              <div className="h-7 overflow-hidden rounded-lg bg-gray-100">
                <div className={`h-7 rounded-lg transition-all ${step.color}`} style={{ width: `${pct}%` }} />
              </div>
              {i < steps.length - 1 && step.value > 0 && steps[i + 1].value > 0 && (
                <p className="mt-1 text-right text-[11px] text-gray-400">
                  ↓ %{Math.round((steps[i + 1].value / step.value) * 100)} sonraki adıma geçti
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SourceConvTable({ sessions }: { sessions: Session[] }) {
  const rows = useMemo(() => {
    const map = new Map<string, { total: number; converted: number }>();
    for (const s of sessions) {
      const src = s.effective_source || s.utm_source || "direct";
      const cur = map.get(src) ?? { total: 0, converted: 0 };
      map.set(src, { total: cur.total + 1, converted: cur.converted + (s.converted ? 1 : 0) });
    }
    return [...map.entries()]
      .map(([src, d]) => ({ src, ...d, rate: d.total ? Math.round((d.converted / d.total) * 100) : 0 }))
      .sort((a, b) => b.total - a.total);
  }, [sessions]);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 font-semibold text-gray-900">Kaynak × Dönüşüm</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-400">
            <th className="pb-3">Kaynak</th>
            <th className="pb-3 text-right">Oturum</th>
            <th className="pb-3 text-right">Dönüşüm</th>
            <th className="pb-3 text-right">Oran</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((r) => (
            <tr key={r.src} className="hover:bg-gray-50/50">
              <td className="py-2.5 font-medium text-gray-700">{r.src}</td>
              <td className="py-2.5 text-right text-gray-600">{r.total}</td>
              <td className="py-2.5 text-right text-gray-600">{r.converted}</td>
              <td className="py-2.5 text-right">
                <span className={`font-semibold ${r.rate > 0 ? "text-green-600" : "text-gray-300"}`}>
                  %{r.rate}
                </span>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={4} className="py-6 text-center text-xs text-gray-400">Veri yok</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function DashboardClient({
  overview,
  prevOverview,
  bounceStats,
  sessions,
  dailyTrend,
  dateLabel,
  days,
  activeNow,
  avgDuration,
  formAbandonment,
}: {
  overview: Overview;
  prevOverview: Overview;
  bounceStats: { bounced: number; total: number };
  sessions: Session[];
  dailyTrend: TrendPoint[];
  dateLabel: string;
  days: number;
  activeNow: number;
  avgDuration: number;
  formAbandonment: { visited: number; converted: number; abandonment_rate: number };
}) {
  const router = useRouter();
  const [conversionFilter, setConversionFilter] = useState<ConversionFilter>(null);
  const [autoRefresh, setAutoRefresh]           = useState(false);
  const [lastRefresh, setLastRefresh]           = useState<Date | null>(null);
  const [sendingReport, setSendingReport]       = useState(false);
  const [reportMsg, setReportMsg]               = useState<string | null>(null);

  useEffect(() => {
    if (!autoRefresh) return;
    const id = setInterval(() => {
      router.refresh();
      setLastRefresh(new Date());
    }, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [autoRefresh, router]);

  function toggle(key: ConversionFilter) {
    setConversionFilter((prev) => (prev === key ? null : key));
  }

  async function sendReport() {
    setSendingReport(true);
    setReportMsg(null);
    try {
      const res = await fetch("/api/admin/send-report", { method: "POST" });
      const json = await res.json() as { ok?: boolean; error?: string };
      setReportMsg(json.ok ? "Rapor gönderildi!" : (json.error ?? "Hata oluştu"));
    } catch {
      setReportMsg("Bağlantı hatası");
    } finally {
      setSendingReport(false);
      setTimeout(() => setReportMsg(null), 4000);
    }
  }

  const bounceRate = bounceStats.total > 0
    ? Math.round((bounceStats.bounced / bounceStats.total) * 100)
    : 0;

  const totalConversions = Number(overview.phone) + Number(overview.wa) + Number(overview.form);

  return (
    <>
      {/* Auto-refresh bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">
            {lastRefresh
              ? `Son güncelleme: ${lastRefresh.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`
              : "Canlı veri"}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${activeNow > 0 ? "animate-pulse bg-green-500" : "bg-gray-300"}`} />
            <span className="text-xs font-medium text-gray-700">
              {activeNow > 0 ? `${activeNow} kişi şu an sitede` : "Şu an ziyaretçi yok"}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {reportMsg && (
            <span className="text-xs font-medium text-green-600">{reportMsg}</span>
          )}
          <button
            onClick={sendReport}
            disabled={sendingReport}
            className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            {sendingReport ? "Gönderiliyor…" : "✉ Rapor Gönder"}
          </button>
          <span className="text-xs text-gray-500">Otomatik yenileme (5 dk)</span>
          <button
            onClick={() => { setAutoRefresh((v) => !v); if (!autoRefresh) setLastRefresh(new Date()); }}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${autoRefresh ? "bg-[#0077b6]" : "bg-gray-200"}`}
          >
            <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${autoRefresh ? "translate-x-4" : "translate-x-0.5"}`} />
          </button>
          <button
            onClick={() => { router.refresh(); setLastRefresh(new Date()); }}
            className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
          >
            ↻ Yenile
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Genel Bakış — {dateLabel}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard
            label="Sayfa Görüntüleme (Bugün)"
            value={Number(overview.pv_today)}
            color="blue"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
          />
          <StatCard
            label={`Sayfa Görüntüleme (${dateLabel})`}
            value={Number(overview.pv_period)}
            color="purple"
            delta={calcDelta(Number(overview.pv_period), Number(prevOverview.pv_period))}
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
          />
          <StatCard
            label="Tekil Ziyaretçi"
            value={Number(overview.uniq_visitors)}
            color="teal"
            delta={calcDelta(Number(overview.uniq_visitors), Number(prevOverview.uniq_visitors))}
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <StatCard
            label="Hemen Çıkma Oranı"
            value={bounceRate}
            suffix="%"
            color="red"
            invertDelta
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>}
          />
          <StatCard
            label="Telefon Tıklaması"
            value={Number(overview.phone)}
            color="orange"
            delta={calcDelta(Number(overview.phone), Number(prevOverview.phone))}
            filterKey="phone"
            active={conversionFilter === "phone"}
            onClick={() => toggle("phone")}
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>}
          />
          <StatCard
            label="WhatsApp Tıklaması"
            value={Number(overview.wa)}
            color="green"
            delta={calcDelta(Number(overview.wa), Number(prevOverview.wa))}
            filterKey="whatsapp"
            active={conversionFilter === "whatsapp"}
            onClick={() => toggle("whatsapp")}
            icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>}
          />
          <StatCard
            label="Form Gönderimi"
            value={Number(overview.form)}
            color="pink"
            delta={calcDelta(Number(overview.form), Number(prevOverview.form))}
            filterKey="form"
            active={conversionFilter === "form"}
            onClick={() => toggle("form")}
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard
            label="Ort. Oturum Süresi"
            value={avgDuration}
            displayValue={formatDuration(avgDuration)}
            color="blue"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
      </section>

      {/* Dual trend + Conversion goal */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DualTrend data={dailyTrend} label={dateLabel} />
        </div>
        <ConversionGoal totalConversions={totalConversions} />
      </div>

      {/* Funnel + Source×Conv */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Funnel sessions={sessions} />
        <SourceConvTable sessions={sessions} />
      </div>

      {/* Form abandonment */}
      {formAbandonment.visited > 0 && (
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-semibold text-gray-900">İletişim Sayfası Terk Analizi</h2>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <div className="text-2xl font-bold text-blue-700">{formAbandonment.visited}</div>
              <div className="mt-1 text-xs text-blue-600">İletişim sayfasını açtı</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center">
              <div className="text-2xl font-bold text-green-700">{formAbandonment.converted}</div>
              <div className="mt-1 text-xs text-green-600">Dönüşüm yaptı</div>
            </div>
            <div className="rounded-lg bg-red-50 p-4 text-center">
              <div className="text-2xl font-bold text-red-700">%{formAbandonment.abandonment_rate}</div>
              <div className="mt-1 text-xs text-red-600">Terk oranı</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-xs text-gray-400">
              <span>Dönüşüm</span>
              <span>Terk</span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-red-100">
              <div
                className="h-3 rounded-full bg-green-500 transition-all"
                style={{ width: `${formAbandonment.visited > 0 ? Math.round((formAbandonment.converted / formAbandonment.visited) * 100) : 0}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Sessions */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h2 className="font-semibold text-gray-900">Oturumlar</h2>
            <p className="mt-0.5 text-xs text-gray-400">{dateLabel} · kaynak, cihaz ve ülkeye göre filtrele</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1.5">
            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-green-700">
              {sessions.filter((s) => s.converted).length} dönüşüm
            </span>
          </div>
        </div>
        <SessionsTab sessions={sessions} conversionFilter={conversionFilter} />
      </div>
    </>
  );
}
