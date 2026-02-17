import IMGECOTECH from "@assets/works-img/Image-ecotech.png";
import IMGARTEKUALI from "@assets/works-img/Image-artekuali.png";
import IMGAPPCOMENSALES from "@assets/works-img/image-appcomensales.jpg";
import IMGAPPRAPPI from "@assets/works-img/image-apprappi.jpg";
import IMGWISH from "@assets/works-img/Image-wish-him.png";
import IMGMIDAS from "@assets/works-img/Image-midas-data-studio.png";
import IMGSALUDABLE from "@assets/works-img/Image-proyecto-saludable.png";
import IMGKERMESSE from "@assets/works-img/Image-la-kermesse-del-libro.png";
import IMGTATETI from "@assets/works-img/Image-tateti.png";
import IMGPROFUSA from "@assets/works-img/image-profusa.jpg";

export interface WorkUrls {
  git: string;
  video: string;
  behance: string;
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
      video: "https://youtube.com",
      behance: "https://behance.com",
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
    },
  },
  {
    id: "work-5",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGWISH,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
    },
  },
  {
    id: "work-6",
    role: "<Dev/>",
    work: "Diseño app",
    background: IMGMIDAS,
    url: {
      git: "https://github.com",
      video: "https://youtube.com",
      behance: "https://behance.com",
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
    },
  },
];

export { dataWork };
