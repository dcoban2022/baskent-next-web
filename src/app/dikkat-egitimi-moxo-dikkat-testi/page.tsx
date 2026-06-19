import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dikkat Eğitimi & Moxo Dikkat Testi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Dikkat Eğitimi & Moxo Dikkat Testi">
      <h2 className="text-2xl font-bold mt-0 mb-4 text-black dark:text-white">
        Attentioner - Dikkatimi Topluyorum
      </h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        7-14 yaş grubundaki çocukların dikkatlerini daha iyi toplamalarını sağlamak için geliştirilmiş bir grup programıdır. Bireysel olarak da uygulanabilir.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Bremen Üniversitesi - Almanya&apos;da geliştirilmiştir.</li>
        <li>Nöropsikolojik tabanlı bir programdır.</li>
        <li>Davranışçı terapi elemanlarını içerir.</li>
      </ul>
      <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">Çalışma Düzeni</h3>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>15 oturum; her oturum 40 dk</li>
        <li>Her oturumda ortalama 4 uygulama</li>
        <li>Oturumlar haftada bir uygulanır</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">MOXO Dikkat Testi</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        6-12 yaş arası çocuklarda ve 13-70 yaş arası yetişkinlerde dikkat, zamanlama, dürtüsellik ve hiperaktivite performanslarını ölçer.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Yüz yüze, bilgisayar destekli online testtir.</li>
        <li>Görsel, işitsel ve karma çeldiricilerden oluşur.</li>
        <li>Test çocuklarda ~15 dakika, yetişkinlerde ~18 dakika sürer.</li>
      </ul>
    </PageLayout>
  );
}
