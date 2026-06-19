import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İşitme Engeli Eğitimi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="İşitme Engeli Eğitimi">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        İşitme, Dil ve Konuşma Bozukluklarında 1 yaşından itibaren eğitimlerimiz verilmektedir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        6 ay civarında iki taraflı işitme cihazı habilitasyonu başlanmalıdır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Koklear implant programlarına alınan hastalara ameliyat öncesi ve sonrası destek sağlanır.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Verilen Hizmetler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Uygun Dinleme Cihazları</li>
        <li>Yardımcı Dinleme Cihazları</li>
        <li>İşitsel Algı Eğitimi</li>
        <li>İletişim Strateji Eğitimi</li>
        <li>Aile Rehberliği</li>
        <li>Psiko-Sosyal Danışmanlık</li>
        <li>Bilişsel/Lisan Gelişimi</li>
        <li>Konuşmayı Anlama</li>
        <li>Konuşma-Dil Terapisi</li>
        <li>İşitsel Sözel Terapi</li>
      </ul>
      <p className="mt-8 text-lg font-bold text-primary">
        SERVİS HİZMETİMİZ ÜCRETSİZDİR.
      </p>
    </PageLayout>
  );
}
