"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
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
        <meta property="og:site_name" content="Başkent Dil Konuşma" />
        <meta property="og:image" content="/images/logo/baskent-logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
