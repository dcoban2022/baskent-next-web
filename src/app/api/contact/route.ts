import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { ad, email, telefon, konu, mesaj } = body;

    if (!ad || !mesaj) {
      return NextResponse.json({ error: "Ad ve mesaj zorunludur." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "info@baskentdilkonusma.com";

    if (!apiKey) {
      // API key yoksa başarılı gibi dön (form UI çalışsın)
      console.log("Form submission (no email sent):", { ad, email, telefon, konu, mesaj });
      return NextResponse.json({ ok: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Başkent Dil Konuşma <noreply@baskentdilkonusma.com>",
      to: toEmail,
      subject: `Yeni İletişim Formu: ${konu || "Genel"} — ${ad}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${ad}</p>
        <p><strong>E-posta:</strong> ${email || "—"}</p>
        <p><strong>Telefon:</strong> ${telefon || "—"}</p>
        <p><strong>Konu:</strong> ${konu || "—"}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${mesaj.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Bir hata oluştu." }, { status: 500 });
  }
}
