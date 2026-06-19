import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diskalkuli — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Diskalkuli">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Diskalkuli, kişinin sayıları anlama ve matematik öğrenme yeteneğini etkileyen bir güçlüktür.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Çocuklar arasında %5 oranında görülmektedir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Belirtiler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Matematik işaretlerini (+, -) tanımada güçlük</li>
        <li>Kesir ve para işlemlerinde sorun</li>
        <li>Saat ve zaman kavramlarında güçlük</li>
        <li>Şekil isimlendirmesinde sorun</li>
        <li>Çarpım tablosu ezberleme güçlüğü</li>
        <li>Sayıları organize etmede güçlük</li>
      </ul>
    </PageLayout>
  );
}
