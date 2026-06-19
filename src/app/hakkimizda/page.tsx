import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Hakkımızda">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        2004 yılından bu yana özel eğitim sektöründe hizmet vermekteyiz.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Kurumumuzun temel hizmet modülleri; öğrenme güçlüğü / disleksi, işitme eğitimi ve dil - konuşma bozukluklarıdır. Kurumumuzda Fizik / Zihin / Otizm modülleri yoktur.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Kurumumuz yenilikleri yakından takip etmekte, en yeni müdahale yöntemlerini öğrencilerimiz ile buluşturmayı hedeflemektedir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Uzman ve akademik eğitim kadrosu ile öğrencilerimizin bir yıldız olarak hayata kazandırılması temel hedefimizdir.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Merkezimizde sadece Ankara değil Türkiye&apos;nin birçok ilinden gelen bireylere özgü hizmetler sunulmaktadır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark font-semibold">
        RAM raporlu bireyler için servis hizmetimiz ücretsizdir.
      </p>
    </PageLayout>
  );
}
