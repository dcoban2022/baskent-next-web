import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dil ve Konuşma Bozuklukları — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="Dil ve Konuşma Bozuklukları">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Dil ve konuşma bozuklukları; artikülasyon bozuklukları, ses bozuklukları, akıcılık sorunları (kekemelik vb.) ve dil gelişim gecikmelerini kapsar.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Uzman dil ve konuşma terapistlerimiz tarafından bireysel değerlendirme ve terapi hizmetleri sunulmaktadır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        1 yaşından itibaren erken müdahale programları uygulanmaktadır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        İletişim için:{" "}
        <a href="tel:05057141668" className="font-semibold hover:text-primary">
          0 (505) 714 16 68
        </a>
      </p>
    </PageLayout>
  );
}
