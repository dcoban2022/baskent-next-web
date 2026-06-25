import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";

export async function POST() {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_auth")?.value !== process.env.ANALYTICS_SECRET) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to     = process.env.ANALYTICS_REPORT_TO;
  if (!apiKey || !to) {
    return NextResponse.json({ error: "RESEND_API_KEY veya ANALYTICS_REPORT_TO eksik" }, { status: 500 });
  }

  const from30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const now    = new Date().toISOString();

  const [overview, topPages, topSources] = await Promise.all([
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view')        AS pv,
        COUNT(DISTINCT ip)                                       AS visitors,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked')    AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked') AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted')   AS form
      FROM events
      WHERE created_at > ${from30}::timestamptz AND created_at <= ${now}::timestamptz
    `,
    sql`
      SELECT page, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND created_at > ${from30}::timestamptz AND created_at <= ${now}::timestamptz
      GROUP BY page ORDER BY cnt DESC LIMIT 5
    `,
    sql`
      SELECT
        COALESCE(
          NULLIF(utm_source,''),
          CASE
            WHEN referrer ILIKE '%google.%'    THEN 'google'
            WHEN referrer ILIKE '%instagram.%' THEN 'instagram'
            WHEN referrer ILIKE '%facebook.%'  THEN 'facebook'
            WHEN referrer IS NULL OR referrer = '' THEN 'direct'
            ELSE 'referral'
          END
        ) AS source,
        COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND created_at > ${from30}::timestamptz AND created_at <= ${now}::timestamptz
      GROUP BY source ORDER BY cnt DESC LIMIT 5
    `,
  ]);

  const o = overview[0] as { pv: number; visitors: number; phone: number; wa: number; form: number };
  const totalConv = Number(o.phone) + Number(o.wa) + Number(o.form);
  const convRate  = Number(o.visitors) > 0
    ? Math.round((totalConv / Number(o.visitors)) * 100)
    : 0;

  const pageRows = (topPages as { page: string; cnt: number }[])
    .map((r) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #f3f4f6">${r.page || "/"}</td><td style="padding:6px 12px;border-bottom:1px solid #f3f4f6;text-align:right">${r.cnt}</td></tr>`)
    .join("");

  const sourceRows = (topSources as { source: string; cnt: number }[])
    .map((r) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #f3f4f6">${r.source}</td><td style="padding:6px 12px;border-bottom:1px solid #f3f4f6;text-align:right">${r.cnt}</td></tr>`)
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui,sans-serif;background:#f9fafb;margin:0;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
    <div style="background:#0077b6;padding:24px 32px">
      <h1 style="margin:0;color:#fff;font-size:20px">Başkent Dil Konuşma</h1>
      <p style="margin:4px 0 0;color:#90caf9;font-size:13px">Analytics Raporu — Son 30 Gün</p>
    </div>
    <div style="padding:32px">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px">
        <div style="text-align:center;padding:16px;background:#f0f9ff;border-radius:8px">
          <div style="font-size:28px;font-weight:700;color:#0077b6">${Number(o.pv).toLocaleString("tr-TR")}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Sayfa Görüntüleme</div>
        </div>
        <div style="text-align:center;padding:16px;background:#f0fdf4;border-radius:8px">
          <div style="font-size:28px;font-weight:700;color:#16a34a">${totalConv}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Toplam Dönüşüm</div>
        </div>
        <div style="text-align:center;padding:16px;background:#fef3c7;border-radius:8px">
          <div style="font-size:28px;font-weight:700;color:#d97706">%${convRate}</div>
          <div style="font-size:12px;color:#64748b;margin-top:4px">Dönüşüm Oranı</div>
        </div>
      </div>
      <div style="margin-bottom:8px;padding:12px 16px;background:#fff7ed;border-radius:8px;font-size:13px;color:#92400e">
        📞 Telefon: <strong>${o.phone}</strong> &nbsp;|&nbsp;
        💬 WhatsApp: <strong>${o.wa}</strong> &nbsp;|&nbsp;
        📝 Form: <strong>${o.form}</strong>
      </div>
      <h2 style="font-size:14px;font-weight:600;color:#374151;margin:24px 0 8px">En Çok Ziyaret Edilen Sayfalar</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr style="background:#f9fafb"><th style="padding:8px 12px;text-align:left;color:#6b7280;font-weight:500">Sayfa</th><th style="padding:8px 12px;text-align:right;color:#6b7280;font-weight:500">Görüntüleme</th></tr></thead>
        <tbody>${pageRows}</tbody>
      </table>
      <h2 style="font-size:14px;font-weight:600;color:#374151;margin:24px 0 8px">Trafik Kaynakları</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr style="background:#f9fafb"><th style="padding:8px 12px;text-align:left;color:#6b7280;font-weight:500">Kaynak</th><th style="padding:8px 12px;text-align:right;color:#6b7280;font-weight:500">Ziyaret</th></tr></thead>
        <tbody>${sourceRows}</tbody>
      </table>
      <p style="margin-top:32px;font-size:11px;color:#9ca3af;text-align:center">
        ${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })} tarihinde oluşturuldu
      </p>
    </div>
  </div>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Başkent Analytics <analytics@baskentdilkonusma.com>",
      to: [to],
      subject: `Analytics Raporu — Son 30 Gün (${new Date().toLocaleDateString("tr-TR")})`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
