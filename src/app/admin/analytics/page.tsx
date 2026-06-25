import { sql } from "@/lib/db";
import { Suspense } from "react";
import LogoutButton from "./LogoutButton";
import DateRangePicker from "./DateRangePicker";
import DashboardClient from "./DashboardClient";
import { type Session } from "./SessionsTab";

async function getStats(from: string, to: string, prevFrom: string) {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [
    overview, prevOverview,
    topPages, devices, utmSources, countries,
    sessions, dailyTrend, heatmap, pageConv, returningStats,
    bounceStats, hourlyConversions, symptomStats,
  ] = await Promise.all([

    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND (page IS NULL OR page NOT LIKE '/admin%') AND created_at > ${yesterday}::timestamptz) AS pv_today,
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND (page IS NULL OR page NOT LIKE '/admin%') AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz) AS pv_period,
        COUNT(DISTINCT ip)                               FILTER (WHERE (page IS NULL OR page NOT LIKE '/admin%') AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz) AS uniq_visitors,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked'     AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz) AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked'  AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz) AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted'    AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz) AS form
      FROM events
    `,

    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND (page IS NULL OR page NOT LIKE '/admin%')) AS pv_period,
        COUNT(DISTINCT ip)                                                                               AS uniq_visitors,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked')    AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked') AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted')   AS form
      FROM events
      WHERE created_at > ${prevFrom}::timestamptz AND created_at <= ${from}::timestamptz
    `,

    sql`
      SELECT page, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY page ORDER BY cnt DESC LIMIT 8
    `,

    sql`
      SELECT COALESCE(device_type,'desktop') AS device, COUNT(*) AS cnt
      FROM events
      WHERE created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY device ORDER BY cnt DESC
    `,

    sql`
      SELECT
        COALESCE(
          NULLIF(utm_source, ''),
          CASE
            WHEN referrer ILIKE '%google.%'                                 THEN 'google'
            WHEN referrer ILIKE '%instagram.%'                              THEN 'instagram'
            WHEN referrer ILIKE '%facebook.%' OR referrer ILIKE '%fb.com%' THEN 'facebook'
            WHEN referrer ILIKE '%twitter.%'  OR referrer ILIKE '%t.co%' OR referrer ILIKE '%x.com%' THEN 'twitter'
            WHEN referrer ILIKE '%youtube.%'  OR referrer ILIKE '%youtu.be%' THEN 'youtube'
            WHEN referrer ILIKE '%linkedin.%'                               THEN 'linkedin'
            WHEN referrer ILIKE '%tiktok.%'                                 THEN 'tiktok'
            WHEN referrer IS NULL OR referrer = ''                          THEN 'direct'
            ELSE 'referral'
          END
        ) AS source,
        COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY source ORDER BY cnt DESC LIMIT 8
    `,

    sql`
      SELECT COALESCE(country,'unknown') AS country, COUNT(*) AS cnt
      FROM events
      WHERE created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY country ORDER BY cnt DESC LIMIT 8
    `,

    sql`
      SELECT
        session_id,
        MIN(created_at) AS started_at,
        EXTRACT(EPOCH FROM (MAX(created_at) - MIN(created_at)))::int AS duration_sec,
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
            WHEN MAX(referrer) ILIKE '%google.%'                                      THEN 'google'
            WHEN MAX(referrer) ILIKE '%instagram.%'                                   THEN 'instagram'
            WHEN MAX(referrer) ILIKE '%facebook.%' OR MAX(referrer) ILIKE '%fb.com%' THEN 'facebook'
            WHEN MAX(referrer) ILIKE '%twitter.%'  OR MAX(referrer) ILIKE '%t.co%'  OR MAX(referrer) ILIKE '%x.com%' THEN 'twitter'
            WHEN MAX(referrer) ILIKE '%youtube.%'  OR MAX(referrer) ILIKE '%youtu.be%' THEN 'youtube'
            WHEN MAX(referrer) ILIKE '%linkedin.%'                                    THEN 'linkedin'
            WHEN MAX(referrer) ILIKE '%tiktok.%'                                      THEN 'tiktok'
            WHEN MAX(referrer) IS NULL OR MAX(referrer) = ''                          THEN 'direct'
            ELSE 'referral'
          END
        ) AS effective_source,
        bool_or(event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')) AS converted,
        bool_or(event_type = 'phone_clicked')    AS had_phone,
        bool_or(event_type = 'whatsapp_clicked') AS had_whatsapp,
        bool_or(event_type = 'form_submitted')   AS had_form,
        string_agg(DISTINCT event_type, ',')     AS events
      FROM events
      WHERE session_id IS NOT NULL
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY session_id
      ORDER BY MIN(created_at) DESC
      LIMIT 300
    `,

    sql`
      SELECT
        date_trunc('day', created_at AT TIME ZONE 'Europe/Istanbul') AS day,
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND (page IS NULL OR page NOT LIKE '/admin%')) AS pv,
        COUNT(*) FILTER (WHERE event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')) AS conversions
      FROM events
      WHERE (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY 1 ORDER BY 1 ASC
    `,

    sql`
      SELECT
        EXTRACT(DOW FROM created_at AT TIME ZONE 'Europe/Istanbul')::int  AS dow,
        EXTRACT(HOUR FROM created_at AT TIME ZONE 'Europe/Istanbul')::int AS hour,
        COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY 1, 2 ORDER BY 1, 2
    `,

    sql`
      SELECT
        entry_page AS page,
        COUNT(*) AS sessions,
        COUNT(*) FILTER (WHERE converted) AS conversions,
        ROUND(COUNT(*) FILTER (WHERE converted) * 100.0 / NULLIF(COUNT(*), 0), 1) AS conv_rate
      FROM (
        SELECT
          MIN(page) AS entry_page,
          bool_or(event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')) AS converted
        FROM events
        WHERE session_id IS NOT NULL
          AND (page IS NULL OR page NOT LIKE '/admin%')
          AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
        GROUP BY session_id
      ) s
      GROUP BY entry_page
      ORDER BY sessions DESC LIMIT 8
    `,

    sql`
      SELECT
        CASE WHEN is_returning THEN 'returning' ELSE 'new' END AS visitor_type,
        COUNT(*) AS cnt
      FROM (
        SELECT session_id, bool_or(is_returning) AS is_returning
        FROM events
        WHERE session_id IS NOT NULL
          AND (page IS NULL OR page NOT LIKE '/admin%')
          AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
        GROUP BY session_id
      ) s
      GROUP BY 1
    `,

    sql`
      SELECT
        COUNT(*) FILTER (WHERE page_count = 1) AS bounced,
        COUNT(*) AS total
      FROM (
        SELECT session_id, COUNT(*) FILTER (WHERE event_type = 'page_view') AS page_count
        FROM events
        WHERE session_id IS NOT NULL
          AND (page IS NULL OR page NOT LIKE '/admin%')
          AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
        GROUP BY session_id
      ) s
    `,

    sql`
      SELECT
        EXTRACT(HOUR FROM created_at AT TIME ZONE 'Europe/Istanbul')::int AS hour,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked')    AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked') AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted')   AS form
      FROM events
      WHERE event_type IN ('phone_clicked','whatsapp_clicked','form_submitted')
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY 1 ORDER BY 1
    `,

    sql`
      SELECT
        COALESCE(
          NULLIF(extra->>'name',''),
          NULLIF(extra->>'symptom',''),
          NULLIF(extra->>'title',''),
          NULLIF(extra->>'query',''),
          'Belirtisiz'
        ) AS symptom,
        COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'symptom_checker'
        AND created_at > ${from}::timestamptz AND created_at <= ${to}::timestamptz
      GROUP BY 1 ORDER BY cnt DESC LIMIT 10
    `,
  ]);

  return {
    overview: overview[0],
    prevOverview: prevOverview[0],
    topPages, devices, utmSources, countries,
    sessions, dailyTrend, heatmap, pageConv, returningStats,
    bounceStats: bounceStats[0],
    hourlyConversions, symptomStats,
  };
}

// ── Horizontal Bar Chart ─────────────────────────────────────────────────────
function BarChart({ data, colorClass = "bg-[#0077b6]" }: { data: { label: string; value: number }[]; colorClass?: string }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-2.5">
      {data.map((row) => (
        <div key={row.label} className="group flex items-center gap-3">
          <span className="w-36 shrink-0 truncate text-right text-xs text-gray-500 transition-colors group-hover:text-gray-900">{row.label || "/"}</span>
          <div className="flex-1">
            <div className="h-5 overflow-hidden rounded-md bg-gray-100">
              <div className={`h-5 rounded-md transition-all ${colorClass}`} style={{ width: `${(row.value / max) * 100}%` }} />
            </div>
          </div>
          <span className="w-10 text-right text-xs font-semibold text-gray-700">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Device chart ──────────────────────────────────────────────────────────────
function DeviceChart({ data }: { data: { device: string; cnt: number }[] }) {
  const total = data.reduce((s, d) => s + Number(d.cnt), 0) || 1;
  const colors: Record<string, { bar: string; badge: string; label: string }> = {
    mobile:  { bar: "bg-blue-500",   badge: "bg-blue-100 text-blue-700",   label: "📱 Mobil" },
    tablet:  { bar: "bg-teal-500",   badge: "bg-teal-100 text-teal-700",   label: "📟 Tablet" },
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
                {pct}% <span className="text-xs font-normal text-gray-400">({Number(row.cnt).toLocaleString("tr-TR")})</span>
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

// ── Heatmap ───────────────────────────────────────────────────────────────────
function HeatmapChart({ data }: { data: { dow: number; hour: number; cnt: number }[] }) {
  const matrix: number[][] = Array.from({ length: 7 }, () => Array(24).fill(0));
  for (const { dow, hour, cnt } of data) matrix[dow][hour] = Number(cnt);
  const max = Math.max(...matrix.flat(), 1);
  const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[480px]">
        <div className="mb-1 flex gap-0.5 pl-9">
          {Array.from({ length: 24 }, (_, h) => (
            <div key={h} className="flex-1 text-center text-[9px] text-gray-400">{h % 3 === 0 ? h : ""}</div>
          ))}
        </div>
        {days.map((day, d) => (
          <div key={d} className="mb-0.5 flex items-center gap-0.5">
            <span className="w-8 shrink-0 pr-1 text-right text-[10px] text-gray-500">{day}</span>
            {Array.from({ length: 24 }, (_, h) => {
              const val = matrix[d][h];
              const intensity = val / max;
              return (
                <div
                  key={h}
                  title={`${day} ${h}:00 — ${val} görüntüleme`}
                  className="h-5 flex-1 rounded-sm"
                  style={{ backgroundColor: intensity > 0 ? `rgba(0,119,182,${0.1 + intensity * 0.9})` : "#f3f4f6" }}
                />
              );
            })}
          </div>
        ))}
        <div className="mt-2 flex items-center justify-end gap-1.5">
          <span className="text-[10px] text-gray-400">Az</span>
          {[0.15, 0.35, 0.55, 0.75, 0.95].map((v) => (
            <div key={v} className="h-3 w-3 rounded-sm" style={{ backgroundColor: `rgba(0,119,182,${v})` }} />
          ))}
          <span className="text-[10px] text-gray-400">Çok</span>
        </div>
      </div>
    </div>
  );
}

// ── Page conversion rate ──────────────────────────────────────────────────────
function PageConvChart({ data }: { data: { page: string; sessions: number; conversions: number; conv_rate: number }[] }) {
  const max = Math.max(...data.map((r) => Number(r.sessions)), 1);
  return (
    <div className="space-y-2.5">
      {data.map((r) => (
        <div key={r.page} className="group flex items-center gap-3">
          <span className="w-36 shrink-0 truncate text-right text-xs text-gray-500 transition-colors group-hover:text-gray-900">{r.page || "/"}</span>
          <div className="flex-1">
            <div className="h-5 overflow-hidden rounded-md bg-gray-100">
              <div className="h-5 rounded-md bg-[#0077b6] transition-all" style={{ width: `${(Number(r.sessions) / max) * 100}%` }} />
            </div>
          </div>
          <span className="w-8 text-right text-xs font-semibold text-gray-700">{r.sessions}</span>
          <span className={`w-12 text-right text-xs font-semibold ${Number(r.conv_rate) > 0 ? "text-green-600" : "text-gray-300"}`}>
            %{r.conv_rate ?? 0}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Returning vs new ──────────────────────────────────────────────────────────
function ReturningChart({ data }: { data: { visitor_type: string; cnt: number }[] }) {
  const total = data.reduce((s, r) => s + Number(r.cnt), 0) || 1;
  const map: Record<string, { label: string; bar: string; badge: string }> = {
    returning: { label: "Geri Dönen",     bar: "bg-[#0077b6]", badge: "bg-blue-100 text-blue-700" },
    new:       { label: "Yeni Ziyaretçi", bar: "bg-teal-500",  badge: "bg-teal-100 text-teal-700" },
  };
  return (
    <div className="space-y-3">
      {data.map((row) => {
        const pct = Math.round((Number(row.cnt) / total) * 100);
        const c = map[row.visitor_type] ?? { label: row.visitor_type, bar: "bg-gray-400", badge: "bg-gray-100 text-gray-600" };
        return (
          <div key={row.visitor_type}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.badge}`}>{c.label}</span>
              <span className="text-sm font-semibold text-gray-900">
                {pct}% <span className="text-xs font-normal text-gray-400">({Number(row.cnt).toLocaleString("tr-TR")})</span>
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className={`h-2.5 rounded-full transition-all ${c.bar}`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
      {data.length === 0 && <p className="text-xs text-gray-400">Yeterli veri yok</p>}
    </div>
  );
}

// ── Hourly conversion chart ───────────────────────────────────────────────────
function HourlyConvChart({ data }: { data: { hour: number; phone: number; wa: number; form: number }[] }) {
  const byHour: Record<number, { phone: number; wa: number; form: number }> = {};
  for (const r of data) byHour[Number(r.hour)] = { phone: Number(r.phone), wa: Number(r.wa), form: Number(r.form) };
  const max = Math.max(...Object.values(byHour).map((v) => v.phone + v.wa + v.form), 1);
  return (
    <div className="flex h-24 items-end gap-px">
      {Array.from({ length: 24 }, (_, h) => {
        const v = byHour[h] ?? { phone: 0, wa: 0, form: 0 };
        const total = v.phone + v.wa + v.form;
        const pct = (total / max) * 100;
        return (
          <div
            key={h}
            title={`${h}:00 — Telefon: ${v.phone}, WA: ${v.wa}, Form: ${v.form}`}
            className="group relative flex-1 cursor-default"
            style={{ height: `${Math.max(pct, total > 0 ? 4 : 0)}%` }}
          >
            <div className="absolute inset-0 flex flex-col-reverse overflow-hidden rounded-t">
              {v.form > 0  && <div className="bg-pink-400"   style={{ height: `${(v.form  / total) * 100}%` }} />}
              {v.wa > 0    && <div className="bg-green-400"  style={{ height: `${(v.wa    / total) * 100}%` }} />}
              {v.phone > 0 && <div className="bg-orange-400" style={{ height: `${(v.phone / total) * 100}%` }} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Symptom chart ─────────────────────────────────────────────────────────────
function SymptomChart({ data }: { data: { symptom: string; cnt: number }[] }) {
  if (!data.length) return <p className="py-4 text-center text-xs text-gray-400">Belirti sorgulayıcı henüz kullanılmadı</p>;
  const max = Math.max(...data.map((r) => Number(r.cnt)), 1);
  return (
    <div className="space-y-2.5">
      {data.map((r) => (
        <div key={r.symptom} className="flex items-center gap-3">
          <span className="w-40 shrink-0 truncate text-right text-xs text-gray-600">{r.symptom}</span>
          <div className="flex-1">
            <div className="h-5 overflow-hidden rounded-md bg-gray-100">
              <div className="h-5 rounded-md bg-purple-400 transition-all" style={{ width: `${(Number(r.cnt) / max) * 100}%` }} />
            </div>
          </div>
          <span className="w-8 text-right text-xs font-semibold text-gray-700">{r.cnt}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function AnalyticsDashboard({
  searchParams,
}: {
  searchParams: Promise<{ days?: string; from?: string; to?: string }>;
}) {
  const params = await searchParams;

  let from: string;
  let to: string;
  let prevFrom: string;
  let days: number;
  let dateLabel: string;

  if (params.from && params.to) {
    from     = new Date(params.from + "T00:00:00+03:00").toISOString();
    to       = new Date(params.to   + "T23:59:59+03:00").toISOString();
    days     = Math.max(1, Math.ceil((new Date(to).getTime() - new Date(from).getTime()) / (24 * 60 * 60 * 1000)));
    prevFrom = new Date(new Date(from).getTime() - days * 24 * 60 * 60 * 1000).toISOString();
    dateLabel = `${new Date(from).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })} – ${new Date(to).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}`;
  } else {
    days     = Math.min(Math.max(parseInt(params.days || "30", 10) || 30, 1), 90);
    to       = new Date().toISOString();
    from     = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
    prevFrom = new Date(Date.now() - 2 * days * 24 * 60 * 60 * 1000).toISOString();
    dateLabel = `Son ${days} Gün`;
  }

  const {
    overview, prevOverview,
    topPages, devices, utmSources, countries,
    sessions, dailyTrend, heatmap, pageConv, returningStats,
    bounceStats, hourlyConversions, symptomStats,
  } = await getStats(from, to, prevFrom);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0077b6]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-sm font-bold text-gray-900 sm:text-base">Analytics</h1>
              <p className="hidden text-xs text-gray-400 sm:block">Başkent Dil Konuşma</p>
            </div>
          </div>
          <div className="order-last w-full sm:order-none sm:w-auto">
            <Suspense>
              <DateRangePicker />
            </Suspense>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">

        <DashboardClient
          overview={{
            pv_today:      Number(overview.pv_today),
            pv_period:     Number(overview.pv_period),
            uniq_visitors: Number(overview.uniq_visitors),
            phone:         Number(overview.phone),
            wa:            Number(overview.wa),
            form:          Number(overview.form),
          }}
          prevOverview={{
            pv_today:      0,
            pv_period:     Number(prevOverview.pv_period),
            uniq_visitors: Number(prevOverview.uniq_visitors),
            phone:         Number(prevOverview.phone),
            wa:            Number(prevOverview.wa),
            form:          Number(prevOverview.form),
          }}
          bounceStats={{ bounced: Number(bounceStats.bounced), total: Number(bounceStats.total) }}
          sessions={sessions as Session[]}
          dailyTrend={dailyTrend as { day: string; pv: number; conversions: number }[]}
          dateLabel={dateLabel}
          days={days}
        />

        {/* Charts grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">En Çok Ziyaret Edilen Sayfalar</h2>
            <BarChart data={topPages.map((r: { page: string; cnt: number }) => ({ label: r.page || "/", value: Number(r.cnt) }))} colorClass="bg-[#0077b6]" />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Trafik Kaynakları</h2>
            <BarChart data={utmSources.map((r: { source: string; cnt: number }) => ({ label: r.source, value: Number(r.cnt) }))} colorClass="bg-pink-500" />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Cihaz Dağılımı</h2>
            <DeviceChart data={devices as { device: string; cnt: number }[]} />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Ülkeler</h2>
            <BarChart data={countries.map((r: { country: string; cnt: number }) => ({ label: r.country, value: Number(r.cnt) }))} colorClass="bg-teal-500" />
          </div>
        </div>

        {/* Heatmap */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-semibold text-gray-900">Trafik Isı Haritası</h2>
            <span className="text-xs text-gray-400">Türkiye saati · saate ve güne göre</span>
          </div>
          <HeatmapChart data={heatmap as { dow: number; hour: number; cnt: number }[]} />
        </div>

        {/* Hourly conversions + Symptom checker */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-1 flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Saatlik Dönüşüm Dağılımı</h2>
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-400" />Telefon</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-400" />WA</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-pink-400" />Form</span>
              </div>
            </div>
            <p className="mb-4 text-xs text-gray-400">Türkiye saatiyle hangi saatte dönüşüm oluyor</p>
            <div className="mb-1 flex justify-between text-[9px] text-gray-400">
              {[0, 3, 6, 9, 12, 15, 18, 21].map((h) => (
                <span key={h}>{h}:00</span>
              ))}
            </div>
            <HourlyConvChart data={hourlyConversions as { hour: number; phone: number; wa: number; form: number }[]} />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Belirti Sorgulayıcı Analizi</h2>
            <SymptomChart data={symptomStats as { symptom: string; cnt: number }[]} />
          </div>
        </div>

        {/* Page conv + Returning */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-semibold text-gray-900">Sayfaya Göre Dönüşüm</h2>
              <div className="flex gap-3 text-xs text-gray-400">
                <span>Oturum</span><span className="text-green-600">%Oran</span>
              </div>
            </div>
            <p className="mb-4 text-xs text-gray-400">Giriş sayfası bazında dönüşüm oranı</p>
            <PageConvChart data={pageConv as { page: string; sessions: number; conversions: number; conv_rate: number }[]} />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 font-semibold text-gray-900">Yeni vs Geri Dönen Ziyaretçi</h2>
            <ReturningChart data={returningStats as { visitor_type: string; cnt: number }[]} />
          </div>
        </div>

      </main>
    </div>
  );
}
