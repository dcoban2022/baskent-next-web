"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="tr">
      <head>
        <link rel="icon" href="/images/logo/baskent-logo.png" type="image/png" />
        <meta name="google-site-verification" content="mQI1vXXZwdhiA_KEKthEsKulcLGjCrxuPYdQu2HM8AQ" />
        <meta property="og:site_name" content="Başkent Dil Konuşma" />
        <meta property="og:image" content="https://www.baskentdilkonusma.com/images/logo/baskent-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.baskentdilkonusma.com/images/logo/baskent-logo.png" />
        <meta name="geo.region" content="TR-06" />
        <meta name="geo.placename" content="Ankara" />
        <meta name="geo.position" content="39.9886;32.7731" />
        <meta name="ICBM" content="39.9886, 32.7731" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Başkent Dil Konuşma Özel Eğitim ve Rehabilitasyon Merkezi",
              "alternateName": "Başkent Dil Konuşma",
              "url": "https://www.baskentdilkonusma.com",
              "logo": "https://www.baskentdilkonusma.com/images/logo/baskent-logo.png",
              "image": "https://www.baskentdilkonusma.com/images/logo/baskent-logo.png",
              "description": "2004'ten bu yana Ankara'da dil ve konuşma bozuklukları, disleksi, disgrafi, diskalkuli, dispraksi, dikkat eğitimi ve işitme engeli alanlarında uzman eğitim ve rehabilitasyon hizmetleri.",
              "telephone": "+903123449316",
              "email": "baskentdilkonusma@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Işınlar Mah. İvedik Cad. No:2",
                "addressLocality": "Yenimahalle",
                "addressRegion": "Ankara",
                "postalCode": "06370",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.9886,
                "longitude": 32.7731
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "medicalSpecialty": [
                "Dil ve Konuşma Terapisi",
                "Özel Eğitim",
                "Rehabilitasyon"
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/baskentdilkonusma",
                "https://www.facebook.com/baskentdilkonusma"
              ],
              "foundingDate": "2004",
              "areaServed": {
                "@type": "City",
                "name": "Ankara"
              }
            })
          }}
        />
      </head>
      <body className={`bg-white ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
          <WhatsAppButton />
          <ChatWidget />
          <CookieBanner />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
