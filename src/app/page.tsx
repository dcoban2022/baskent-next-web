import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Slider from "@/components/Slider";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başkent Dil Konuşma - İşitme Özel Öğrenme Güçlüğü",
  description: "Başkent Dil Konuşma - Dil ve Konuşma Bozuklukları, Disleksi, Disgrafi, Diskalkuli, Dispraksi, Dikkat Eğitimi",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Slider />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
