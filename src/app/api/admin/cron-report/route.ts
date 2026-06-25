import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const from7  = new Date(Date.now() -  7 * 24 * 60 * 60 * 1000).toISOString();
  const from14 = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString();
  const now    = new Date().toISOString();

  const [overview, prevOverview, topPages, topSources] = await Promise.all([
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view'        AND (page IS NULL OR page NOT LIKE '/admin%')) AS pv,
        COUNT(DISTINCT ip)                                      FILTER (WHERE page IS NULL OR page NOT LIKE '/admin%') AS visitors,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked')    AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked') AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted')   AS form
      FROM events
      WHERE created_at > ${from7}::timestamptz AND created_at <= ${now}::timestamptz
    `,
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_type = 'page_view'        AND (page IS NULL OR page NOT LIKE '/admin%')) AS pv,
        COUNT(*) FILTER (WHERE event_type = 'phone_clicked')    AS phone,
        COUNT(*) FILTER (WHERE event_type = 'whatsapp_clicked') AS wa,
        COUNT(*) FILTER (WHERE event_type = 'form_submitted')   AS form
      FROM events
      WHERE created_at > ${from14}::timestamptz AND created_at <= ${from7}::timestamptz
    `,
    sql`
      SELECT page, COUNT(*) AS cnt
      FROM events
      WHERE event_type = 'page_view'
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from7}::timestamptz AND created_at <= ${now}::timestamptz
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
        AND (page IS NULL OR page NOT LIKE '/admin%')
        AND created_at > ${from7}::timestamptz AND created_at <= ${now}::timestamptz
      GROUP BY source ORDER BY cnt DESC LIMIT 5
    `,
  ]);

  const o    = overview[0]    as { pv: number; visitors: number; phone: number; wa: number; form: number };
  const prev = prevOverview[0] as { pv: number; phone: number; wa: number; form: number };

  const totalConv     = Number(o.phone) + Number(o.wa) + Number(o.form);
  const prevTotalConv = Number(prev.phone) + Number(prev.wa) + Number(prev.form);
  const convRate      = Number(o.visitors) > 0 ? Math.round((totalConv / Number(o.visitors)) * 100) : 0;

  function delta(cur: number, prv: number): string {
    if (!prv) return "";
    const d = Math.round(((cur - prv) / prv) * 100);
    return d >= 0 ? ` <span style="color:#16a34a">↑${d}%</span>` : ` <span style="color:#dc2626">↓${Math.abs(d)}%</span>`;
  }

  const pageRows = (topPages as { page: string; cnt: number }[])
    .map((r) => `<tr style="border-top:1px solid #f3f4f6"><td style="padding:8px 12px;color:#374151;font-size:13px">${r.page || "/"}</td><td style="padding:8px 12px;text-align:right;font-weight:600;color:#111827">${r.cnt}</td></tr>`)
    .join("");

  const sourceRows = (topSources as { source: string; cnt: number }[])
    .map((r) => `<tr style="border-top:1px solid #f3f4f6"><td style="padding:8px 12px;color:#374151;font-size:13px">${r.source}</td><td style="padding:8px 12px;text-align:right;font-weight:600;color:#111827">${r.cnt}</td></tr>`)
    .join("");

  const weekStart = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
  const weekEnd = new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0077b6;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">Haftalık Analytics Raporu</h1>
        <p style="color:#b3d9f0;margin:4px 0 0;font-size:13px">Başkent Dil Konuşma · ${weekStart} – ${weekEnd}</p>
      </div>
      <div style="background:#f9fafb;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">

        <div style="display:flex;gap:12px;margin-bottom:24px">
          <div style="flex:1;text-align:center;padding:16px;background:#e0f2fe;border-radius:8px">
            <div style="font-size:26px;font-weight:700;color:#0077b6">${Number(o.pv).toLocaleString("tr-TR")}${delta(Number(o.pv), Number(prev.pv))}</div>
            <div style="font-size:12px;color:#64748b;margin-top:4px">Sayfa Görüntüleme</div>
          </div>
          <div style="flex:1;text-align:center;padding:16px;background:#dcfce7;border-radius:8px">
            <div style="font-size:26px;font-weight:700;color:#16a34a">${totalConv}${delta(totalConv, prevTotalConv)}</div>
            <div style="font-size:12px;color:#64748b;margin-top:4px">Toplam Dönüşüm</div>
          </div>
          <div style="flex:1;text-align:center;padding:16px;background:#fef3c7;border-radius:8px">
            <div style="font-size:26px;font-weight:700;color:#d97706">%${convRate}</div>
            <div style="font-size:12px;color:#64748b;margin-top:4px">Dönüşüm Oranı</div>
          </div>
        </div>

        <div style="margin-bottom:24px;padding:14px 16px;background:white;border:1px solid #e5e7eb;border-radius:8px;border-left:4px solid #f59e0b">
          <p style="margin:0;font-size:13px;color:#92400e">
            📞 Telefon: <strong>${o.phone}</strong>${delta(Number(o.phone), Number(prev.phone))} &nbsp;·&nbsp;
            💬 WhatsApp: <strong>${o.wa}</strong>${delta(Number(o.wa), Number(prev.wa))} &nbsp;·&nbsp;
            📝 Form: <strong>${o.form}</strong>${delta(Number(o.form), Number(prev.form))}
          </p>
        </div>

        <p style="font-weight:600;color:#111827;margin:0 0 6px;font-size:14px">En Çok Ziyaret Edilen Sayfalar</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr style="background:white"><th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase">Sayfa</th><th style="padding:8px 12px;text-align:right;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase">Görüntüleme</th></tr>
          ${pageRows}
        </table>

        <p style="font-weight:600;color:#111827;margin:0 0 6px;font-size:14px">Trafik Kaynakları</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr style="background:white"><th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase">Kaynak</th><th style="padding:8px 12px;text-align:right;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase">Ziyaret</th></tr>
          ${sourceRows}
        </table>

        <p style="margin:0;font-size:11px;color:#9ca3af;text-align:center">Otomatik haftalık rapor · ${weekEnd}</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Başkent Dil Konuşma <serdar@updates.baskentdilkonusma.com>",
      to: ["serdar@updates.baskentdilkonusma.com"],
      bcc: ["deniz@denizcoban.com", "elif@elifcoban.com", "sipahise@gmail.com", "baskentdilkonusma@gmail.com"],
      subject: `Haftalık Rapor — ${weekStart} – ${weekEnd}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
}
