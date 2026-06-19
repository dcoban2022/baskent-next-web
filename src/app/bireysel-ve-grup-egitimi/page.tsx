import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bireysel ve Grup Eğitimi — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Bireysel ve Grup Eğitimi">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        RAM raporlu bireylerde bir ders saati 40 dakika olmak üzere ayda 8 ders verilir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Özellikle dil konuşma güçlüğü olan bireylerde ayda 4 ders saati grup eğitimi de verilebilmektedir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Bireysel Eğitim</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Bireysel eğitimde ilk derste yapılan ayrıntılı değerlendirme sonucunda bireyin performans düzeyi belirlenir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Eksik alanlar, aile ve eğitim yaşantısı dikkate alınarak çocuğa özgü BEP (Bireysel Eğitim Programı) hazırlanarak eğitim sürecine devam edilir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Grup Eğitimi</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Grup eğitimlerinde çocuklar yaş grupları ve güçlük çekilen alanlar dikkate alınarak, hem bireysel eğitimleri hem de iletişim/sosyal alan desteklenecek şekilde sürdürülmektedir.
      </p>
    </PageLayout>
  );
}
