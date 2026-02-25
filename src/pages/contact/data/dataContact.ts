import ICONCEL from "@assets/contact/Icon-Celular.png";
import ICONEMAIL from "@assets/contact/Icon-Email.png";
import ICONLINKEDIN from "@assets/contact/Icon-Linkedin.png";
import ICONGITHUB from "@assets/contact/Icon-Github.png";
import ICONBEHANCE from "@assets/contact/Icon-Behance.png";

export interface Contact {
  id: string;
  name: string;
  url: string;
  info: string;
}

export const dataContact:Contact[] = [
  {
    id: "1",
    name: "Celular",
    url: ICONCEL,
    info: "+54 9 0351 153476526",
  },
  {
    id: "2",
    name: "Email",
    url: ICONEMAIL,
    info: "melisaoro@gmail.com",
  },
  {
    id: "3",
    name: "Linkedin",
    url: ICONLINKEDIN,
    info: "https://www.linkedin.com/melisa-s-oro",
  },
  {
    id: "4",
    name: "Github",
    url: ICONGITHUB,
    info: "https://github.com/melocotonoro",
  },
  {
    id: "5",
    name: "Behance",
    url: ICONBEHANCE,
    info: "https://www.behance.net/melisaoro",
  },
];
