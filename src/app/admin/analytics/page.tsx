import { sql } from "@/lib/db";
import { Suspense } from "react";
import LogoutButton from "./LogoutButton";
import DateRangePicker from "./DateRangePicker";
import SessionsTab, { type Session } from "./SessionsTab";

async function getStats(days: number) {
  // Use JS-computed cutoff to avoid make_interval parameterization issues with Neon
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [overview, topPages, devices, utmSources, countries, sessions, hourly] = await Promise.all([
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND created_at > ${yesterday}::timestamptz) AS pv_today,
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND created_at > ${cutoff}::timestamptz) AS pv_period,
        COUNT(DISTINCT ip) FILTER (WHERE created_at > ${cutoff}::timestamptz) AS uniq_visitors,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked' AND created_at > ${cutoff}::timestamptz) AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked' AND created_at > ${cutoff}::timestamptz) AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted' AND created_at > ${cutoff}::timestamptz) AS form
      FROM events
    `,
    sql`
      SELECT page, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view' AND created_at > ${cutoff}::timestamptz
      GROUP BY page ORDER BY cnt DESC LIMIT 8
    `,
    sql`
      SELECT COALESCE(device_type,'desktop') AS device, COUNT(*) AS cnt
      FROM events
      WHERE created_at > ${cutoff}::timestamptz
      GROUP BY device ORDER BY cnt DESC
    `,
    sql`
      SELECT COALESCE(utm_source,'direct') AS source, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view' AND created_at > ${cutoff}::timestamptz
      GROUP BY utm_source ORDER BY cnt DESC LIMIT 6
    `,
    sql`
      SELECT COALESCE(country,'unknown') AS country, COUNT(*) AS cnt
      FROM events
      WHERE created_at > ${cutoff}::timestamptz
      GROUP BY country ORDER BY cnt DESC LIMIT 8
    `,
    sql`
      SELECT
        session_id,
        MIN(created_at) AS started_at,
        MAX(created_at) AS last_at,
        EXTRACT(EPOCH FROM (MAX(created_at) - MIN(created_at)))::int AS duration_sec,
        COUNT(*) AS event_count,
        COUNT(*) FILTER (WHERE event_type = 'page_view') AS page_count,
        MIN(page) AS entry_page,
        MAX(page) AS exit_page,
        MAX(ip) AS ip,
        MAX(country) AS country,
        MAX(city) AS city,
        MAX(device_type) AS device_type,
        MAX(browser) AS browser,
        COALESCE(MAX(utm_source),'direct') AS utm_source,
        MAX(referrer) AS referrer,
        bool_or(event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')) AS converted,
        string_agg(DISTINCT event_type, ',') AS events
      FROM events
      WHERE session_id IS NOT NULL AND created_at > ${cutoff}::timestamptz
      GROUP BY session_id
      ORDER BY MIN(created_at) DESC
      LIMIT 300
    `,
    sql`
      SELECT
        date_trunc('day', created_at AT TIME ZONE 'Europe/Istanbul') AS day,
        COUNT(*) FILTER (WHERE event_type = 'page_view') AS pv
      FROM events
      WHERE created_at > ${cutoff}::timestamptz
      GROUP BY 1 ORDER BY 1 ASC
    `,
  ]);

  return { overview: overview[0], topPages, devices, utmSources, countries, sessions, hourly };
}

// ── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon,
  color = "blue",
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color?: "blue" | "green" | "orange" | "pink" | "purple" | "teal";
}) {
  const bg: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    pink: "bg-pink-50 text-pink-600",
    purple: "bg-purple-50 text-purple-600",
    teal: "bg-teal-50 text-teal-600",
  };
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{label}</p>
        <span className={`rounded-lg p-2 ${bg[color]}`}>{icon}</span>
      </div>
      <p className="mt-3 text-3xl font-bold text-gray-900">{value.toLocaleString("tr-TR")}</p>
    </div>
  );
}

// ── Horizontal Bar Chart ─────────────────────────────────────────────────────
function BarChart({
  data,
  colorClass = "bg-[#0077b6]",
}: {
  data: { label: string; value: number }[];
  colorClass?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-2.5">
      {data.map((row) => (
        <div key={row.label} className="group flex items-center gap-3">
          <span className="w-36 truncate text-right text-xs text-gray-500 group-hover:text-gray-900 transition-colors">
            {row.label || "/"}
          </span>
          <div className="flex-1">
            <div className="h-5 overflow-hidden rounded-md bg-gray-100">
              <div
                className={`h-5 rounded-md transition-all ${colorClass}`}
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
          </div>
          <span className="w-10 text-right text-xs font-semibold text-gray-700">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Donut-style device chart ──────────────────────────────────────────────────
function DeviceChart({ data }: { data: { device: string; cnt: number }[] }) {
  const total = data.reduce((s, d) => s + Number(d.cnt), 0) || 1;
  const colors: Record<string, { bar: string; badge: string; label: string }> = {
    mobile: { bar: "bg-blue-500", badge: "bg-blue-100 text-blue-700", label: "📱 Mobil" },
    tablet: { bar: "bg-teal-500", badge: "bg-teal-100 text-teal-700", label: "📟 Tablet" },
    desktop: { bar: "bg-purple-500", badge: "bg-purple-100 text-purple-700", label: "🖥 Masaüstü" },
  };
  return (
    <div className="space-y-3">
      {data.map((row) => {
        const pct = Math.round((Number(row.cnt) / total) * 100);
        const c = colors[row.device] ?? { bar: "bg-gray-400", badge: "bg-gray-100 text-gray-600", label: row.device };
        return (
          <div key={row.device}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge}`}>{c.label}</span>
              <span className="text-sm font-semibold text-gray-900">
                {pct}% <span className="font-normal text-gray-400 text-xs">({Number(row.cnt).toLocaleString("tr-TR")})</span>
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className={`h-2.5 rounded-full transition-all ${c.bar}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Sparkline (CSS-based) ─────────────────────────────────────────────────────
function Sparkline({ data }: { data: { day: string; pv: number }[] }) {
  if (!data.length) return null;
  const max = Math.max(...data.map((d) => Number(d.pv)), 1);
  return (
    <div className="flex h-12 items-end gap-0.5">
      {data.map((d) => (
        <div
          key={d.day}
          title={`${new Date(d.day).toLocaleDateString("tr-TR", { month: "short", day: "numeric" })}: ${d.pv}`}
          className="flex-1 rounded-t bg-blue-200 hover:bg-blue-400 transition-colors cursor-default"
          style={{ height: `${(Number(d.pv) / max) * 100}%`, minHeight: 2 }}
        />
      ))}
    </div>
  );
}

// ── Source color badge ────────────────────────────────────────────────────────
function SourceBadge({ source }: { source: string }) {
  const map: Record<string, string> = {
    instagram: "bg-pink-100 text-pink-700",
    google: "bg-amber-100 text-amber-700",
    facebook: "bg-blue-100 text-blue-700",
    direct: "bg-gray-100 text-gray-600",
  };
  const cls = map[source?.toLowerCase()] ?? "bg-gray-100 text-gray-600";
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}>{source}</span>;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function AnalyticsDashboard({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const params = await searchParams;
  const days = Math.min(Math.max(parseInt(params.days || "30", 10) || 30, 1), 90);
  const { overview, topPages, devices, utmSources, countries, sessions, hourly } = await getStats(days);

  const totalConversions =
    Number(overview.phone) + Number(overview.wa) + Number(overview.form);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0077b6]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 leading-none">Analytics</h1>
              <p className="text-xs text-gray-400">Başkent Dil Konuşma</p>
            </div>
          </div>
          <Suspense>
            <DateRangePicker />
          </Suspense>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 p-6">

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard
            label="Sayfa Görüntüleme (Bugün)"
            value={Number(overview.pv_today)}
            color="blue"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
          />
          <StatCard
            label={`Sayfa Görüntüleme (${days} Gün)`}
            value={Number(overview.pv_period)}
            color="purple"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
          />
          <StatCard
            label="Tekil Ziyaretçi"
            value={Number(overview.uniq_visitors)}
            color="teal"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <StatCard
            label="Telefon Tıklaması"
            value={Number(overview.phone)}
            color="orange"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>}
          />
          <StatCard
            label="WhatsApp Tıklaması"
            value={Number(overview.wa)}
            color="green"
            icon={<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>}
          />
          <StatCard
            label="Form Gönderimi"
            value={Number(overview.form)}
            color="pink"
            icon={<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>

        {/* Sparkline */}
        {hourly.length > 1 && (
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Sayfa Görüntüleme Trendi</h2>
              <span className="text-xs text-gray-400">{days} günlük</span>
            </div>
            <Sparkline data={hourly as { day: string; pv: number }[]} />
          </div>
        )}

        {/* Sessions */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div>
              <h2 className="font-semibold text-gray-900">Oturumlar</h2>
              <p className="mt-0.5 text-xs text-gray-400">Son {days} gün · kaynak, cihaz ve ülkeye göre filtrele</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1.5">
              <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-green-700">{totalConversions} dönüşüm</span>
            </div>
          </div>
          <SessionsTab sessions={sessions as Session[]} />
        </div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Top Pages */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">En Çok Ziyaret Edilen Sayfalar</h2>
            <BarChart
              data={topPages.map((r: { page: string; cnt: number }) => ({ label: r.page || "/", value: Number(r.cnt) }))}
              colorClass="bg-[#0077b6]"
            />
          </div>

          {/* Sources */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Trafik Kaynakları</h2>
            <BarChart
              data={utmSources.map((r: { source: string; cnt: number }) => ({ label: r.source, value: Number(r.cnt) }))}
              colorClass="bg-pink-500"
            />
          </div>

          {/* Devices */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Cihaz Dağılımı</h2>
            <DeviceChart data={devices as { device: string; cnt: number }[]} />
          </div>

          {/* Countries */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Ülkeler</h2>
            <BarChart
              data={countries.map((r: { country: string; cnt: number }) => ({ label: r.country, value: Number(r.cnt) }))}
              colorClass="bg-teal-500"
            />
          </div>

        </div>
      </main>
    </div>
  );
}
