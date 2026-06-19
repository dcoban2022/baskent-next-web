import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Başkent Dil Konuşma",
};

export default function Page() {
  return (
    <PageLayout title="İletişim">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mt-0 mb-4 text-black dark:text-white">İletişim Bilgileri</h2>
          <ul className="space-y-4 text-body-color dark:text-body-color-dark">
            <li>
              <span className="font-semibold text-black dark:text-white">Adres:</span>{" "}
              Işınlar Mah. İvedik Cad. No:2 (Yenimahalle Girişi, İvedik Metro İstasyon Karşısı), Yenimahalle / Ankara
            </li>
            <li>
              <span className="font-semibold text-black dark:text-white">Ana Hat:</span>{" "}
              <a href="tel:03123449316" className="hover:text-primary">0 312 344 93 16</a>
            </li>
            <li>
              <span className="font-semibold text-black dark:text-white">Kurum Müdürü:</span>{" "}
              <a href="tel:05057141668" className="hover:text-primary">0 (505) 714 16 68</a>
            </li>
            <li>
              <span className="font-semibold text-black dark:text-white">Uzman Danışman:</span>{" "}
              <a href="tel:05335734564" className="hover:text-primary">0 (533) 573 45 64</a>
            </li>
            <li>
              <span className="font-semibold text-black dark:text-white">E-posta:</span>{" "}
              <a href="mailto:iletisimrehabilitasyonhizmetleri@hs01.kep.tr" className="hover:text-primary break-all">
                iletisimrehabilitasyonhizmetleri@hs01.kep.tr
              </a>
            </li>
            <li>
              <span className="font-semibold text-black dark:text-white">Instagram:</span>{" "}
              <a href="https://instagram.com/baskentdilkonusma" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                @baskentdilkonusma
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-0 mb-4 text-black dark:text-white">Konum</h2>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8!2d32.8!3d39.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU4JzQ4LjAiTiAzMsKwNDgnMDAuMCJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
