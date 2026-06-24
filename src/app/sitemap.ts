import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.baskentdilkonusma.com";
  const now = new Date();

  const routes = [
    "/",
    "/hakkimizda",
    "/kadromuz",
    "/makaleler",
    "/makaleler/r-sesi-soyleyememe",
    "/makaleler/gecikmus-dil-konusma",
    "/makaleler/dikkat-eksikligi-hiperaktivite",
    "/makaleler/ogrenme-guclugu-disleksi",
    "/galeri",
    "/videolar",
    "/degerlendirme",
    "/dil-ve-konusma-bozukluklari",
    "/disleksi",
    "/disgrafi",
    "/diskalkuli",
    "/dispraksi",
    "/dikkat-egitimi-moxo-dikkat-testi",
    "/isitme-engeli",
    "/oyun-terapisi",
    "/bireysel-ve-grup-egitimi",
    "/iletisim",
    "/kariyer",
    "/kvkk",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/makaleler/") ? 0.6 : 0.8,
  }));
}
