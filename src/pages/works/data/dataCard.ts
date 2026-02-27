import IMGECOTECH from "@assets/works/ecotech.png";
import IMGARTEKUALI from "@assets/works/artekuali.png";
import IMGAPPCOMENSALES from "@assets/works/appcomensales.jpg";
import IMGAPPRAPPI from "@assets/works/apprappi.jpg";
import IMGWISH from "@assets/works/wish-him.png";
import IMGMIDAS from "@assets/works/midas-data-studio.png";
import IMGSALUDABLE from "@assets/works/proyecto-saludable.png";
import IMGKERMESSE from "@assets/works/kermesse-del-libro.png";
import IMGTATETI from "@assets/works/tateti.png";
import IMGPROFUSA from "@assets/works/profusa.jpg";

export interface WorkUrls {
  git: string;
  video: string;
  behance: string;
  name: string;
}

export interface DataWork {
  id: string;
  role: string;
  work: string;
  background: string;
  url: WorkUrls;
}

const dataWork: DataWork[] = [
  {
    id: "work-1",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGECOTECH,
    url: {
      git: "https://github.com",
      video: "https://www.youtube.com/embed/zfUCkHe62Zw",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-2",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGARTEKUALI,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-3",
    role: "Ux/Ui",
    work: "Diseño app",
    background: IMGAPPCOMENSALES,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-4",
    role: "Ux/Ui",
    work: "Rediseño app",
    background: IMGAPPRAPPI,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-5",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGWISH,
    url: {
      git: "https://github.com",
      video: "https://www.youtube.com/embed/3u8LrQotSZg",
      behance: "https://behance.com",
      name: "Página Web Wish Him",
    },
  },
  {
    id: "work-6",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGMIDAS,
    url: {
      git: "https://github.com",
      video: "https://www.youtube.com/embed/zfUCkHe62Zw",
      behance: "https://behance.com",
      name: "Página Web Data Midas",
    },
  },
  {
    id: "work-7",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGSALUDABLE,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-8",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGKERMESSE,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-9",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGTATETI,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
  {
    id: "work-10",
    role: "Diseño",
    work: "Rediseño app",
    background: IMGPROFUSA,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
      name: "Página web data midas",
    },
  },
];

export { dataWork };
