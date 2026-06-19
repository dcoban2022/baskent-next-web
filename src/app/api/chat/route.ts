import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: "API anahtarı yapılandırılmamış." },
        { status: 500 }
      );
    }

    const stream = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
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
