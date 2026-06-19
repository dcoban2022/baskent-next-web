import ScrollUp from "@/components/Common/ScrollUp";
import Slider from "@/components/Slider";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import LatestArticles from "@/components/LatestArticles";
import FamilyTestimonials from "@/components/FamilyTestimonials";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başkent Dil Konuşma — İşitme, Özel Öğrenme Güçlüğü, Özel Eğitim ve Rehabilitasyon Merkezi",
  description:
    "2004'ten bu yana Ankara'da dil ve konuşma bozuklukları, disleksi, disgrafi, diskalkuli, dispraksi, dikkat eğitimi ve işitme engeli alanlarında uzman eğitim hizmetleri.",
  openGraph: {
    title: "Başkent Dil Konuşma",
    description: "Ankara'da 20 yılı aşkın deneyimle dil-konuşma terapisi, disleksi ve özel eğitim merkezi.",
    url: "https://www.baskentdilkonusma.com",
    siteName: "Başkent Dil Konuşma",
    locale: "tr_TR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Slider />
      <Services />
      <WhyUs />
      <About />
      <LatestArticles />
      <FamilyTestimonials />
      <Contact />
    </>
  );
}
