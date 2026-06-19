import ScrollUp from "@/components/Common/ScrollUp";
import Slider from "@/components/Slider";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başkent Dil Konuşma — İşitme, Özel Öğrenme Güçlüğü, Özel Eğitim ve Rehabilitasyon Merkezi",
  description:
    "2004'ten bu yana Ankara'da dil ve konuşma bozuklukları, disleksi, disgrafi, diskalkuli, dispraksi, dikkat eğitimi ve işitme engeli alanlarında uzman eğitim hizmetleri.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Slider />
      <Services />
      <About />
      <Contact />
    </>
  );
}
