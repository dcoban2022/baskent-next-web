import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `Sen Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi'nin yapay zeka asistanısın. Türkçe yanıt veriyorsun.

Merkez hakkında bilgiler:
- 2004'ten bu yana hizmet veriyor, 20+ yıl deneyim
- Adres: Işınlar Mah. İvedik Cad. No:2, Yenimahalle / Ankara (İvedik Metro İstasyon Karşısı)
- Telefon: 0 (312) 344 93 16 (Ana Hat)
- Kurum Müdürü: 0 (505) 714 16 68
- Uzman Danışman: 0 (533) 573 45 64
- E-posta: iletisimrehabilitasyonhizmetleri@hs01.kep.tr
- Instagram: @baskentdilkonusma
- Çalışma saatleri: Pzt-Cuma 08:00-18:00, Cumartesi 09:00-14:00, Pazar kapalı
- RAM raporlu bireyler için servis hizmeti ücretsizdir

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
- RAM kanalıyla yönlendirme (ücretsiz servis imkânı)

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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${process.env.GEMINI_API_KEY}`,
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
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // geçersiz JSON satırı atla
            }
          }
        }
        controller.close();
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
