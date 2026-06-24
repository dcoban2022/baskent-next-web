import ScrollUp from "@/components/Common/ScrollUp";
import Slider from "@/components/Slider";
import StatsBar from "@/components/StatsBar";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTABand from "@/components/CTABand";
import WhyUs from "@/components/WhyUs";
import SymptomChecker from "@/components/SymptomChecker";
import TeamPreview from "@/components/TeamPreview";
import About from "@/components/About";
import PartnerLogos from "@/components/PartnerLogos";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQ/FAQSchema";
import MapSection from "@/components/MapSection";
import ServiceArea from "@/components/ServiceArea";
import LatestArticles from "@/components/LatestArticles";
import FamilyTestimonials from "@/components/FamilyTestimonials";
import VideoGallery from "@/components/VideoGallery";
import Contact from "@/components/Contact";
import WaveDivider from "@/components/WaveDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baskentdilkonusma.com"),
  title: "Başkent Dil Konuşma — İşitme, Özel Öğrenme Güçlüğü, Özel Eğitim ve Rehabilitasyon Merkezi",
  description:
    "2004'ten bu yana Ankara'da dil ve konuşma bozuklukları, disleksi, disgrafi, diskalkuli, dispraksi, dikkat eğitimi ve işitme engeli alanlarında uzman eğitim hizmetleri.",
  alternates: {
    canonical: "https://www.baskentdilkonusma.com",
  },
  openGraph: {
    title: "Başkent Dil Konuşma",
    description: "Ankara'da 20 yılı aşkın deneyimle dil-konuşma terapisi, disleksi ve özel eğitim merkezi.",
    url: "https://www.baskentdilkonusma.com",
    siteName: "Başkent Dil Konuşma",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.baskentdilkonusma.com/images/logo/baskent-logo.png",
        width: 800,
        height: 600,
        alt: "Başkent Dil Konuşma",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Slider />
      <StatsBar />
      <WaveDivider from="#0077b6" to="#f9fafb" />
      <TrustBand />
      <Services />
      <HowItWorks />
      <WaveDivider from="#ffffff" to="#e63946" />
      <CTABand />
      <WaveDivider from="#e63946" to="#ffffff" />
      <WhyUs />
      <SymptomChecker />
      <TeamPreview />
      <About />
      <PartnerLogos />
      <FAQSchema />
      <FAQ />
      <MapSection />
      <ServiceArea />
      <LatestArticles />
      <FamilyTestimonials />
      <VideoGallery />
      <Contact />
    </>
  );
}
