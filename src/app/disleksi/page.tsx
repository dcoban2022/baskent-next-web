import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disleksi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Disleksi">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Disleksi, okumayı etkileyen beyinde biyolojik temelli bir öğrenme bozukluğudur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Zekası ortalama veya ortalamanın üstü olan kişilerde kelime tanıma ve heceleme güçlükleri oluşturur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Bu bir hastalık değil, eğitimle düzeltilebilir bir durumdur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Albert Einstein, Henry Ford ve Walt Disney gibi ünlü kişiler disleksiktir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Belirtiler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Yön problemi (sol/sağ karışıklığı)</li>
        <li>Kafiyeli kelimeleri karıştırma</li>
        <li>Heceleme zorlukları</li>
        <li>Yazma güçlükleri</li>
        <li>Okuma sorunları</li>
        <li>Yapbozda başarı</li>
        <li>Sanatta yetenek</li>
      </ul>
    </PageLayout>
  );
}
