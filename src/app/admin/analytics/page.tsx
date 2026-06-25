import { sql } from "@/lib/db";
import { Suspense } from "react";
import LogoutButton from "./LogoutButton";

async function getStats() {
  const [overview, topPages, devices, utmSources, countries, recent] = await Promise.all([
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND created_at > NOW() - INTERVAL '1 day') AS pv_today,
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND created_at > NOW() - INTERVAL '7 days') AS pv_week,
        COUNT(*) FILTER (WHERE event_type = 'page_view' AND created_at > NOW() - INTERVAL '30 days') AS pv_month,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked' AND created_at > NOW() - INTERVAL '30 days') AS phone_month,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked' AND created_at > NOW() - INTERVAL '30 days') AS wa_month,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted' AND created_at > NOW() - INTERVAL '30 days') AS form_month
      FROM events
    `,
    sql`
      SELECT page, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view' AND created_at > NOW() - INTERVAL '30 days'
      GROUP BY page
      ORDER BY cnt DESC
      LIMIT 10
    `,
    sql`
      SELECT COALESCE(device_type, 'unknown') AS device, COUNT(*) AS cnt
      FROM events
      WHERE created_at > NOW() - INTERVAL '30 days'
      GROUP BY device
      ORDER BY cnt DESC
    `,
    sql`
      SELECT COALESCE(utm_source, 'direct') AS source, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view' AND created_at > NOW() - INTERVAL '30 days'
      GROUP BY utm_source
      ORDER BY cnt DESC
      LIMIT 8
    `,
    sql`
      SELECT COALESCE(country, 'unknown') AS country, COUNT(*) AS cnt
      FROM events
      WHERE created_at > NOW() - INTERVAL '30 days'
      GROUP BY country
      ORDER BY cnt DESC
      LIMIT 10
    `,
    sql`
      SELECT event_type, page, country, device_type, browser, utm_source, created_at
      FROM events
      ORDER BY created_at DESC
      LIMIT 50
    `,
  ]);

  return { overview: overview[0], topPages, devices, utmSources, countries, recent };
}

function StatCard({ label, value, sub }: { label: string; value: number | string; sub?: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-gray-400">{sub}</p>}
    </div>
  );
}

function Badge({ value }: { value: string }) {
  const colors: Record<string, string> = {
    mobile: "bg-blue-100 text-blue-700",
    desktop: "bg-purple-100 text-purple-700",
    tablet: "bg-green-100 text-green-700",
    unknown: "bg-gray-100 text-gray-500",
    page_view: "bg-gray-100 text-gray-600",
    phone_clicked: "bg-orange-100 text-orange-700",
    whatsapp_clicked: "bg-green-100 text-green-700",
    form_submitted: "bg-blue-100 text-blue-700",
    symptom_checker: "bg-pink-100 text-pink-700",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors[value] ?? "bg-gray-100 text-gray-600"}`}>
      {value}
    </span>
  );
}

export default async function AnalyticsDashboard() {
  const { overview, topPages, devices, utmSources, countries, recent } = await getStats();

  const totalDevices = devices.reduce((s: number, d: { cnt: number }) => s + Number(d.cnt), 0) || 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Analytics</h1>
            <p className="text-sm text-gray-500">Başkent Dil Konuşma</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 p-6">
        {/* Overview */}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">Genel Bakış</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <StatCard label="Sayfa Görüntüleme (Bugün)" value={Number(overview.pv_today)} />
            <StatCard label="Sayfa Görüntüleme (7 Gün)" value={Number(overview.pv_week)} />
            <StatCard label="Sayfa Görüntüleme (30 Gün)" value={Number(overview.pv_month)} />
            <StatCard label="Telefon Tıklaması (30 Gün)" value={Number(overview.phone_month)} />
            <StatCard label="WhatsApp Tıklaması (30 Gün)" value={Number(overview.wa_month)} />
            <StatCard label="Form Gönderimi (30 Gün)" value={Number(overview.form_month)} />
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Top Pages */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">En Çok Ziyaret Edilen Sayfalar (30 Gün)</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-400">
                  <th className="pb-2 font-medium">Sayfa</th>
                  <th className="pb-2 text-right font-medium">Görüntüleme</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((row: { page: string; cnt: number }) => (
                  <tr key={row.page} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-2 font-mono text-xs text-gray-700">{row.page || "/"}</td>
                    <td className="py-2 text-right font-semibold text-gray-900">{Number(row.cnt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* UTM Sources */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Trafik Kaynakları (30 Gün)</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-400">
                  <th className="pb-2 font-medium">Kaynak</th>
                  <th className="pb-2 text-right font-medium">Ziyaret</th>
                </tr>
              </thead>
              <tbody>
                {utmSources.map((row: { source: string; cnt: number }) => (
                  <tr key={row.source} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-2 text-gray-700">{row.source}</td>
                    <td className="py-2 text-right font-semibold text-gray-900">{Number(row.cnt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Devices */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Cihaz Dağılımı (30 Gün)</h2>
            <div className="space-y-3">
              {devices.map((row: { device: string; cnt: number }) => {
                const pct = Math.round((Number(row.cnt) / totalDevices) * 100);
                return (
                  <div key={row.device}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <Badge value={row.device} />
                      <span className="font-semibold text-gray-900">{pct}% <span className="font-normal text-gray-400">({Number(row.cnt)})</span></span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-[#0077b6]" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Countries */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-semibold text-gray-900">Ülkeler (30 Gün)</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-400">
                  <th className="pb-2 font-medium">Ülke</th>
                  <th className="pb-2 text-right font-medium">Ziyaret</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((row: { country: string; cnt: number }) => (
                  <tr key={row.country} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-2 text-gray-700">{row.country}</td>
                    <td className="py-2 text-right font-semibold text-gray-900">{Number(row.cnt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Recent Events */}
        <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-semibold text-gray-900">Son Etkinlikler</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left text-gray-400">
                  <th className="pb-2 pr-4 font-medium">Zaman</th>
                  <th className="pb-2 pr-4 font-medium">Etkinlik</th>
                  <th className="pb-2 pr-4 font-medium">Sayfa</th>
                  <th className="pb-2 pr-4 font-medium">Ülke</th>
                  <th className="pb-2 pr-4 font-medium">Cihaz</th>
                  <th className="pb-2 font-medium">Kaynak</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((row: {
                  event_type: string;
                  page: string;
                  country: string;
                  device_type: string;
                  browser: string;
                  utm_source: string;
                  created_at: string;
                }, i: number) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-1.5 pr-4 font-mono text-xs text-gray-400">
                      {new Date(row.created_at).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="py-1.5 pr-4"><Badge value={row.event_type} /></td>
                    <td className="py-1.5 pr-4 font-mono text-xs text-gray-600">{row.page || "/"}</td>
                    <td className="py-1.5 pr-4 text-gray-600">{row.country || "—"}</td>
                    <td className="py-1.5 pr-4"><Badge value={row.device_type || "unknown"} /></td>
                    <td className="py-1.5 text-gray-600">{row.utm_source || "direct"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
