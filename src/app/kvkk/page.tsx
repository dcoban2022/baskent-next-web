import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK - Kişisel Verilerin Korunması — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="KVKK - Kişisel Verilerin Korunması">
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        <span className="font-semibold text-black dark:text-white">İşletmeci:</span>{" "}
        İletişim Rehabilitasyon Hizmetleri Turizm Taşımacılık Sanayi Ve Ticaret Limited Şirketi
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Kişisel veriler milli eğitim mevzuatı gereği zorunlu işlemlerin yerine getirilmesi ve öğrenci kayıt ve eğitim öğretim süreci yönetimi amacıyla işlenmektedir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">Toplanan Veriler</h2>
      <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
        <li>Kimlik bilgisi</li>
        <li>Sağlık verileri</li>
        <li>Eğitim bilgileri</li>
        <li>İletişim bilgileri</li>
      </ul>
      <p className="mb-4 mt-6 leading-relaxed text-body-color dark:text-body-color-dark">
        Bina güvenliğinin sağlanması amacıyla görüntü kaydı yapılmaktadır.
      </p>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        Fotoğraf ve videolar, açık rıza alınmak şartıyla kurum tanıtımında kullanılabilir.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">İletişim</h2>
      <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
        <a href="mailto:iletisimrehabilitasyonhizmetleri@hs01.kep.tr" className="hover:text-primary break-all">
          iletisimrehabilitasyonhizmetleri@hs01.kep.tr
        </a>
      </p>
    </PageLayout>
  );
}
