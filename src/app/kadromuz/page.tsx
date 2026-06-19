import PageLayout from "@/components/Common/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadromuz — Başkent Dil Konuşma",
};

const staff = [
  { name: "Hatice Ökmen", role: "Kurum Müdürü, Sosyal Bilgiler Öğretmeni" },
  { name: "Serdar Sipahi", role: "Odyoloji Ses ve Konuşma Bozuklukları Uzmanı" },
  { name: "Turgay Dursun", role: "Müdür" },
  { name: "Beyza Nur Bilgi", role: "Psikolog, Özel Eğitim Alanı Uzman Öğretici" },
  { name: "Zişan Tuğcu", role: "Psikolog" },
  { name: "Yıldız Akyol", role: "Yardımcı Personel" },
  { name: "Abdullah Kunduz", role: "Servis Personeli" },
  { name: "Mücahit Çınar", role: "Servis Personeli" },
];

export default function Page() {
  return (
    <PageLayout title="Kadromuz">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {staff.map((member) => (
          <div
            key={member.name}
            className="rounded-lg border border-stroke bg-white p-6 shadow-sm dark:border-dark-3 dark:bg-dark-2"
          >
            <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">{member.role}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
