import { sql } from "@/lib/db";
import { Suspense } from "react";
import LogoutButton from "./LogoutButton";
import DateRangePicker from "./DateRangePicker";
import DashboardClient from "./DashboardClient";
import { type Session } from "./SessionsTab";

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
      SELECT
        COALESCE(
          NULLIF(utm_source, ''),
          CASE
            WHEN referrer ILIKE '%google.%'                               THEN 'google'
            WHEN referrer ILIKE '%instagram.%'                            THEN 'instagram'
            WHEN referrer ILIKE '%facebook.%' OR referrer ILIKE '%fb.com%' THEN 'facebook'
            WHEN referrer ILIKE '%twitter.%'  OR referrer ILIKE '%t.co%' OR referrer ILIKE '%x.com%' THEN 'twitter'
            WHEN referrer ILIKE '%youtube.%'  OR referrer ILIKE '%youtu.be%' THEN 'youtube'
            WHEN referrer ILIKE '%linkedin.%'                             THEN 'linkedin'
            WHEN referrer ILIKE '%tiktok.%'                               THEN 'tiktok'
            WHEN referrer IS NULL OR referrer = ''                        THEN 'direct'
            ELSE 'referral'
          END
        ) AS source,
        COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view' AND created_at > ${cutoff}::timestamptz
      GROUP BY source ORDER BY cnt DESC LIMIT 8
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
        MAX(utm_source) AS utm_source,
        MAX(referrer) AS referrer,
        COALESCE(
          NULLIF(MAX(utm_source), ''),
          CASE
            WHEN MAX(referrer) ILIKE '%google.%'                                    THEN 'google'
            WHEN MAX(referrer) ILIKE '%instagram.%'                                 THEN 'instagram'
            WHEN MAX(referrer) ILIKE '%facebook.%' OR MAX(referrer) ILIKE '%fb.com%' THEN 'facebook'
            WHEN MAX(referrer) ILIKE '%twitter.%'  OR MAX(referrer) ILIKE '%t.co%' OR MAX(referrer) ILIKE '%x.com%' THEN 'twitter'
            WHEN MAX(referrer) ILIKE '%youtube.%'  OR MAX(referrer) ILIKE '%youtu.be%' THEN 'youtube'
            WHEN MAX(referrer) ILIKE '%linkedin.%'                                  THEN 'linkedin'
            WHEN MAX(referrer) ILIKE '%tiktok.%'                                    THEN 'tiktok'
            WHEN MAX(referrer) IS NULL OR MAX(referrer) = ''                        THEN 'direct'
            ELSE 'referral'
          END
        ) AS effective_source,
        bool_or(event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')) AS converted,
        bool_or(event_type = 'phone_clicked')     AS had_phone,
        bool_or(event_type = 'whatsapp_clicked')  AS had_whatsapp,
        bool_or(event_type = 'form_submitted')    AS had_form,
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function AnalyticsDashboard({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const params = await searchParams;
  const days = Math.min(Math.max(parseInt(params.days || "30", 10) || 30, 1), 90);
  const { overview, topPages, devices, utmSources, countries, sessions, hourly } = await getStats(days);

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

        <DashboardClient
          overview={{
            pv_today: Number(overview.pv_today),
            pv_period: Number(overview.pv_period),
            uniq_visitors: Number(overview.uniq_visitors),
            phone: Number(overview.phone),
            wa: Number(overview.wa),
            form: Number(overview.form),
          }}
          sessions={sessions as Session[]}
          sparkline={hourly as { day: string; pv: number }[]}
          days={days}
        />

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
