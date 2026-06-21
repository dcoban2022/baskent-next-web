import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const name = body.name || body.ad;
  const email = body.email;
  const phone = body.phone || body.telefon;
  const message = body.message || body.mesaj;
  const konu = body.konu || "";

  if (!name || !message) {
    return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0077b6;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">Yeni İletişim Mesajı</h1>
        <p style="color:#b3d9f0;margin:4px 0 0;font-size:13px">Başkent Dil Konuşma — Web Sitesi İletişim Formu</p>
      </div>
      <div style="background:#f9fafb;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:13px;width:140px">Ad Soyad</td>
            <td style="padding:10px 0;font-weight:600;color:#111827">${name}</td>
          </tr>
          ${email ? `<tr style="border-top:1px solid #f3f4f6">
            <td style="padding:10px 0;color:#6b7280;font-size:13px">E-posta</td>
            <td style="padding:10px 0;color:#111827"><a href="mailto:${email}" style="color:#0077b6">${email}</a></td>
          </tr>` : ""}
          ${phone ? `<tr style="border-top:1px solid #f3f4f6">
            <td style="padding:10px 0;color:#6b7280;font-size:13px">Telefon</td>
            <td style="padding:10px 0;font-weight:600;color:#111827"><a href="tel:${phone}" style="color:#0077b6">${phone}</a></td>
          </tr>` : ""}
        </table>

        <div style="margin-top:20px">
          <p style="font-weight:600;color:#111827;margin-bottom:8px">Mesaj:</p>
          <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:14px;color:#374151;line-height:1.6">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>

        <div style="margin-top:24px;padding:16px;background:#fef3c7;border-radius:8px;border-left:4px solid #f59e0b">
          <p style="margin:0;font-size:13px;color:#92400e">
            ${phone ? `Lütfen <strong>${phone}</strong> numarasından geri arayın.` : `Lütfen <strong>${email}</strong> adresine geri dönün.`}
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: "Başkent Dil Konuşma <serdar@updates.baskentdilkonusma.com>",
      to: ["serdar@updates.baskentdilkonusma.com"],
      bcc: ["deniz@denizcoban.com", "elif@elifcoban.com", "sipahise@gmail.com", "baskentdilkonusma@gmail.com"],
      subject: `Yeni Mesaj — ${name}${konu ? ` (${konu})` : ""}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
}
