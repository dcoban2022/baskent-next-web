import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, age, symptoms } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
  }

  const symptomList = (symptoms as string[])
    .map((s: string) => `<li style="margin-bottom:4px">• ${s}</li>`)
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0077b6;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">Yeni Değerlendirme Talebi</h1>
        <p style="color:#b3d9f0;margin:4px 0 0;font-size:13px">Başkent Dil Konuşma — Farkındalık Testi</p>
      </div>
      <div style="background:#f9fafb;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:13px;width:140px">Ad Soyad</td>
            <td style="padding:10px 0;font-weight:600;color:#111827">${name}</td>
          </tr>
          <tr style="border-top:1px solid #f3f4f6">
            <td style="padding:10px 0;color:#6b7280;font-size:13px">Telefon</td>
            <td style="padding:10px 0;font-weight:600;color:#111827">
              <a href="tel:${phone}" style="color:#0077b6">${phone}</a>
            </td>
          </tr>
          <tr style="border-top:1px solid #f3f4f6">
            <td style="padding:10px 0;color:#6b7280;font-size:13px">Çocuğun Yaşı</td>
            <td style="padding:10px 0;color:#111827">${age || "Belirtilmedi"}</td>
          </tr>
        </table>

        <div style="margin-top:20px">
          <p style="font-weight:600;color:#111827;margin-bottom:10px">İşaretlenen Belirtiler (${symptoms.length} adet):</p>
          <ul style="margin:0;padding:0;list-style:none;background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px">
            ${symptomList}
          </ul>
        </div>

        <div style="margin-top:24px;padding:16px;background:#fef3c7;border-radius:8px;border-left:4px solid #f59e0b">
          <p style="margin:0;font-size:13px;color:#92400e">
            Bu aile değerlendirme talep etmiştir. Lütfen <strong>${phone}</strong> numarasından en kısa sürede arayın.
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
      subject: `Yeni Değerlendirme Talebi — ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
}
