import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispraksi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Dispraksi">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Dispraksi, amaca yönelik hareketlerin yapılmasını etkileyen bir bozukluktur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Motor koordinasyon gelişimindeki güçlük nedeniyle okul konularını öğrenmeyi ve günlük yaşam aktivitelerini önemli derecede etkiler.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Küçük Çocuklarda</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Küçük çocuklarda sakarlık ve motor gelişim aşamalarında gecikmeler gözlenebilir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Büyük Çocuklarda</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Büyük çocuklarda aktivite gerçekleştirme, yapbozlar, top oyunları, el yazısı konularında güçlük görülebilir.
      </p>
    </PageLayout>
  );
}
