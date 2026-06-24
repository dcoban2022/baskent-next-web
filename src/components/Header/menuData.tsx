import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Anasayfa",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Kurumsal",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Hakkımızda",
        path: "/hakkimizda",
        newTab: false,
      },
      {
        id: 22,
        title: "Kadromuz",
        path: "/kadromuz",
        newTab: false,
      },
      {
        id: 23,
        title: "Makaleler",
        path: "/makaleler",
        newTab: false,
      },
      {
        id: 24,
        title: "Galeri",
        path: "/galeri",
        newTab: false,
      },
      {
        id: 25,
        title: "Videolar",
        path: "/videolar",
        newTab: false,
      },
      {
        id: 26,
        title: "KVKK",
        path: "/kvkk",
        newTab: false,
      },
      {
        id: 27,
        title: "Kariyer",
        path: "/kariyer",
        newTab: false,
      },
      {
        id: 28,
        title: "İletişim",
        path: "/iletisim",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Eğitim Alanlarımız",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Dil ve Konuşma Bozuklukları",
        path: "/dil-ve-konusma-bozukluklari",
        newTab: false,
      },
      {
        id: 32,
        title: "Disleksi",
        path: "/disleksi",
        newTab: false,
      },
      {
        id: 33,
        title: "Disgrafi",
        path: "/disgrafi",
        newTab: false,
      },
      {
        id: 34,
        title: "Diskalkuli",
        path: "/diskalkuli",
        newTab: false,
      },
      {
        id: 35,
        title: "Dispraksi",
        path: "/dispraksi",
        newTab: false,
      },
      {
        id: 36,
        title: "Dikkat Eğitimi & Moxo Dikkat Testi",
        path: "/dikkat-egitimi-moxo-dikkat-testi",
        newTab: false,
      },
      {
        id: 37,
        title: "İşitme Engeli",
        path: "/isitme-engeli",
        newTab: false,
      },
      {
        id: 38,
        title: "Bireysel ve Grup Eğitimi",
        path: "/bireysel-ve-grup-egitimi",
        newTab: false,
      },
      {
        id: 39,
        title: "Değerlendirme",
        path: "/degerlendirme",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Değerlendirme",
    path: "/degerlendirme",
    newTab: false,
  },
  {
    id: 5,
    title: "İletişim",
    path: "/iletisim",
    newTab: false,
  },
];

export default menuData;
