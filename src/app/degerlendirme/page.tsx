import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Değerlendirme — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Değerlendirme">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        İlk değerlendirmede aileden gerekli bilgi, öykü ve eğitim yaşantısı alınır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Çocukla yapılan değerlendirmede formal ve informal değerlendirme yapılır.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Değerlendirme İçeriği</h2>
      <ol className="list-decimal pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Detaylı öykü alınır</li>
        <li>Oral motor muayene</li>
        <li>Formal dil değerlendirme testi (TEDİL; Türkçe Erken Dil Gelişim Testi)</li>
        <li>Formal Konuşma Sesi Bozukluğu değerlendirme testi (AAT; Ankara Artikülasyon Testi)</li>
        <li>Özel Öğrenme Güçlüğü/Disleksi Değerlendirme Bataryası</li>
        <li>Davranış Yönetimine yönelik informal değerlendirme</li>
        <li>Ek engellere yönelik formal/informal değerlendirme</li>
        <li>Uzman görüşü</li>
      </ol>
      <p className="mb-4 mt-6 leading-relaxed text-body-color dark:text-body-color-dark">
        Değerlendirme sonucu çocuğun performans düzeyi belirlenir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Engel yüzdesi ve hastane raporu hakkında bilgi sunulur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Eğitim özel ya da RAM kanallı programlanır.
      </p>
    </PageLayout>
  );
}
