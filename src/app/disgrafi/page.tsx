import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disgrafi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Disgrafi">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Disgrafi, bireyin el yazısı ve ince motor becerilerini etkileyen bir yazma güçlüğüdür.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Belirtiler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Tamamlanmamış kelime veya harfler; atlanmış sözcükler</li>
        <li>Kelimeler ve harfler arasında tutarsız boşluklar</li>
        <li>Anormal el bileği, vücut veya kağıt pozisyonu</li>
        <li>Harfleri önceden görselleştirmede güçlük</li>
        <li>Yazı kopyalama yavaş veya yorucu</li>
        <li>Kağıt üzerinde zayıf düzlem planlama</li>
        <li>Kasılmış veya alışılmadık el tutuşu</li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Stratejiler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Sözlü sınavlar kullanmak</li>
        <li>Derslerde ses kaydı izni vermek</li>
        <li>Not tutturucu görevlendirilmesi</li>
        <li>Yazılı ödev miktarını azaltmak</li>
        <li>Geniş ve grafik kağıt kullanımına izin vermek</li>
      </ul>
    </PageLayout>
  );
}
