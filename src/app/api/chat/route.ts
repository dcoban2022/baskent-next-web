import { NextRequest } from "next/server";
import { Resend } from "resend";

async function sendChatEmail(messages: { role: string; content: string }[], assistantReply: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const allMessages = [...messages, { role: "assistant", content: assistantReply }];

    const rows = allMessages
      .filter((m) => m.content)
      .map((m) => {
        const isUser = m.role === "user";
        return `
          <tr>
            <td style="padding:10px 14px;vertical-align:top;width:80px">
              <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;${
                isUser
                  ? "background:#e0f0fa;color:#0077b6"
                  : "background:#f0fdf4;color:#166534"
              }">${isUser ? "Kullanıcı" : "AI"}</span>
            </td>
            <td style="padding:10px 14px;font-size:13px;color:#374151;line-height:1.6">${m.content.replace(/\n/g, "<br>")}</td>
          </tr>`;
      })
      .join("<tr><td colspan='2' style='padding:0;border-bottom:1px solid #f3f4f6'></td></tr>");

    await resend.emails.send({
      from: "Başkent Dil Konuşma AI <serdar@updates.baskentdilkonusma.com>",
      to: ["serdar@updates.baskentdilkonusma.com"],
      bcc: ["deniz@denizcoban.com", "elif@elifcoban.com", "sipahise@gmail.com", "baskentdilkonusma@gmail.com"],
      subject: `AI Sohbet — ${new Date().toLocaleString("tr-TR")}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#0077b6,#005f8e);padding:20px 28px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:18px">Başkent Dil Konuşma AI — Sohbet Kaydı</h1>
            <p style="color:#b3d9f0;margin:4px 0 0;font-size:12px">${new Date().toLocaleString("tr-TR", { dateStyle: "long", timeStyle: "short" })}</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;overflow:hidden">
            <table style="width:100%;border-collapse:collapse">${rows}</table>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Chat email error:", err);
  }
}

const SYSTEM_PROMPT = `Sen Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi'nin yapay zeka asistanısın. Türkçe yanıt veriyorsun.

Merkez hakkında bilgiler:
- 2004'ten bu yana hizmet veriyor, 20+ yıl deneyim
- Adres: Işınlar Mah. İvedik Cad. No:2, Yenimahalle / Ankara (İvedik Metro İstasyon Karşısı)
- Telefon: 0 (312) 344 93 16 (Ana Hat)
- Kurum Müdürü: 0 (505) 714 16 68
- Uzman Danışman: 0 (533) 573 45 64
- E-posta: baskentdilkonusma@gmail.com
- Instagram: @baskentdilkonusma
- Çalışma saatleri: Pzt-Cuma 09:00-18:00, Cumartesi 09:00-14:00, Pazar kapalı
- RAM raporlu bireyler için eğitim hizmeti ücretsizdir; merkezden eve ve evden merkeze servis sunulmaktadır

Hizmet alanları:
1. Dil ve Konuşma Bozuklukları: Artikülasyon bozuklukları, dil gelişim gecikmesi, kekemelik, afazi, ses bozuklukları
2. Disleksi: Okuma güçlükleri, harf karıştırma, okuduğunu anlamama
3. Disgrafi: Yazma güçlükleri, harfleri yanlış yazma, düzensiz el yazısı
4. Diskalkuli: Matematik güçlükleri, sayıları karıştırma
5. Dispraksi: Motor beceri güçlükleri, koordinasyon sorunları
6. Dikkat Eğitimi & MOXO Dikkat Testi: DEHB değerlendirmesi ve dikkat geliştirme programları
7. İşitme Engeli: İşitme engelli bireyler için özel eğitim
8. Bireysel ve Grup Eğitimi: Birebir ve küçük grup seansları

NOT: Merkezimizde Fizik / Zihin / Otizm modülleri BULUNMAMAKTADIR.

Değerlendirme süreci:
- İlk başvuru ve dosya oluşturma
- Eğitim ihtiyaç analizi
- Uzman değerlendirme randevusu
- Uygulama değerlendirme testleri
- Raporlama
- Aile görüşmesi ve bilgilendirme
- Bireysel eğitim programı hazırlama
- RAM kanalıyla yönlendirme (ücretsiz eğitim ve servis imkânı)

Kurallar:
- Kısa, net ve samimi yanıtlar ver
- Tıbbi tanı koyma, sadece yönlendir
- Randevu almak isteyenleri telefon numaralarına yönlendir
- Bilmediğin sorularda dürüst ol ve iletişime geçmelerini söyle
- Maksimum 3-4 cümle ile yanıt ver`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "API anahtarı yapılandırılmamış." },
        { status: 500 }
      );
    }

    // Gemini mesaj formatına dönüştür
    const geminiMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: geminiMessages,
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok || !res.body) {
      const err = await res.text();
      console.error("Gemini error:", err);
      return Response.json({ error: "API hatası" }, { status: 500 });
    }

    const encoder = new TextEncoder();
    let fullReply = "";
    const readable = new ReadableStream({
      async start(controller) {
        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const json = line.slice(6).trim();
            if (!json || json === "[DONE]") continue;
            try {
              const parsed = JSON.parse(json);
              const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                fullReply += text;
                controller.enqueue(encoder.encode(text));
              }
            } catch {
              // geçersiz JSON satırı atla
            }
          }
        }
        controller.close();

        // Konuşmayı e-posta olarak gönder (sadece kullanıcı en az 1 mesaj gönderdiyse)
        const userMessages = messages.filter((m: { role: string }) => m.role === "user");
        if (userMessages.length >= 1 && fullReply) {
          sendChatEmail(messages, fullReply);
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Bir hata oluştu, lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
