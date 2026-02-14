import IMGLINE from "@assets/icons-soft-skills/Atom-Section-Line.png";
import IMGSECTION from "@assets/icons-soft-skills/Atom-Section.png";

//Diseño
import ICONWHIMSICAL from "@assets/icons-soft-skills/HardSkills-Icon-Whimsical.png";
import ICONPHOTOSHOP from "@assets/icons-soft-skills/HardSkills-Icon-Photoshop.png";
import ICONILUSTRATOR from "@assets/icons-soft-skills/HardSkills-Icon-Ilustrator.png";
import ICONFIGMA from "@assets/icons-soft-skills/HardSkills-Icon-Figma.png";
import ICONTRELLO from "@assets/icons-soft-skills/HardSkills-Icon-Trello.png";
import ICONOPTIMAL from "@assets/icons-soft-skills/HardSkills-Icon-Optimal.png";
import ICONHOTJAR from "@assets/icons-soft-skills/HardSkills-Icon-Hotjar.png";
import ICON8N from "@assets/icons-soft-skills/HardSkills-Icon-N8n.png";

//Desarrollo Web
import ICONHTML from "@assets/icons-soft-skills/HardSkills-Icon-Html.png";
import ICONCSS from "@assets/icons-soft-skills/HardSkills-Icon-Css.png";
import ICONJAVASCRIPT from "@assets/icons-soft-skills/HardSkills-Icon-Javascript.png";
import ICONJQUERY from "@assets/icons-soft-skills/HardSkills-Icon-JQuery.png";
import ICONREACT from "@assets/icons-soft-skills/HardSkills-Icon-ReactJs.png";
import ICONBOOTSTRAP from "@assets/icons-soft-skills/HardSkills-Icon-Bootstrap.png";
import ICONSASS from "@assets/icons-soft-skills/HardSkills-Icon-Sass.png";
import ICONVSC from "@assets/icons-soft-skills/HardSkills-Icon-VSC.png";
import ICONGITHUB from "@assets/icons-soft-skills/HardSkills-Icon-Github.png";
import ICONFIRESTORE from "@assets/icons-soft-skills/HardSkills-Icon-Firestore.png";
import ICONEXPRESS from "@assets/icons-soft-skills/HardSkills-Icon-ExpressJs.png";
import ICONJAVA from "@assets/icons-soft-skills/HardSkills-Icon-Java.png";
import ICONNODE from "@assets/icons-soft-skills/HardSkills-Icon-NodeJs.png";
import ICONMYSQL from "@assets/icons-soft-skills/HardSkills-Icon-Mysql.png";

interface Icons {
  id: string;
  name: string;
  url: string;
}

const iconsDesign: Icons[] = [
  {
    id: "desing-1",
    name: "Whimsical",
    url: ICONWHIMSICAL,
  },
  {
    id: "desing-2",
    name: "Photoshop",
    url: ICONPHOTOSHOP,
  },
  {
    id: "desing-3",
    name: "Ilustrator",
    url: ICONILUSTRATOR,
  },
  {
    id: "desing-4",
    name: "Figma",
    url: ICONFIGMA,
  },
  {
    id: "desing-5",
    name: "Trello",
    url: ICONTRELLO,
  },
  {
    id: "desing-6",
    name: "Optimal",
    url: ICONOPTIMAL,
  },
  {
    id: "desing-7",
    name: "HotJar",
    url: ICONHOTJAR,
  },
  {
    id: "desing-8",
    name: "N8N",
    url: ICON8N,
  },
];

const iconsDev: Icons[] = [
  {
    id: "dev-1",
    name: "Html",
    url: ICONHTML,
  },
  {
    id: "dev-2",
    name: "Css",
    url: ICONCSS,
  },
  {
    id: "dev-3",
    name: "JavaScript",
    url: ICONJAVASCRIPT,
  },
  {
    id: "dev-4",
    name: "JQuery",
    url: ICONJQUERY,
  },
  {
    id: "dev-5",
    name: "React",
    url: ICONREACT,
  },
  {
    id: "dev-6",
    name: "Bootstrap",
    url: ICONBOOTSTRAP,
  },
  {
    id: "dev-7",
    name: "Sass",
    url: ICONSASS,
  },
  {
    id: "dev-8",
    name: "VSC",
    url: ICONVSC,
  },
  {
    id: "dev-9",
    name: "Github",
    url: ICONGITHUB,
  },
];
const iconsDev2: Icons[] = [
  {
    id: "dev2-10",
    name: "Firestore",
    url: ICONFIRESTORE,
  },
  {
    id: "dev2-11",
    name: "Express Js",
    url: ICONEXPRESS,
  },
  {
    id: "dev2-12",
    name: "Java",
    url: ICONJAVA,
  },
  {
    id: "dev2-13",
    name: "Node Js",
    url: ICONNODE,
  },
  {
    id: "dev2-14",
    name: "MySQL",
    url: ICONMYSQL,
  },
];
export { IMGLINE, IMGSECTION, iconsDesign, iconsDev, iconsDev2 };
