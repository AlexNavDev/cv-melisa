import { NavLink } from "react-router-dom";

import ICONSOBREMI from "@assets/icon-svg-nav/Icon-SobreMi.svg";
import ICONHABILIDADESTEC from "@assets/icon-svg-nav/Icon-HabilidadesTecnicas.svg";
import ICONCURSOS from "@assets/icon-svg-nav/Icon-Cursos.svg";
import ICONTRABAJOS from "@assets/icon-svg-nav/Icon-Portafolio.svg";
import ICONHABILIDADESBLA from "@assets/icon-svg-nav/Icon-HabilidadesBlandas.svg";
import ICONCERTIFICADOS from "@assets/icon-svg-nav/Icon-Certificados.svg";
import ICONCONTACTO from "@assets/icon-svg-nav/Icon-Contacto.svg";

const Navbar = () => {
  const tabs = [
    { id: 1, name: "about-me", to: "/", url: ICONSOBREMI },
    {
      id: 2,
      name: "skills-tec",
      to: "/habilidades_tecnicas",
      url: ICONHABILIDADESTEC,
    },
    { id: 3, name: "course", to: "/cursos", url: ICONCURSOS },
    { id: 4, name: "work", to: "/trabajos", url: ICONTRABAJOS },
    {
      id: 5,
      name: "skills-soft",
      to: "/habilidades_blandas",
      url: ICONHABILIDADESBLA,
    },
    { id: 6, name: "certificate", to: "/certificados", url: ICONCERTIFICADOS },
    { id: 7, name: "contact", to: "/contacto", url: ICONCONTACTO },
  ];
  return (
    <header className="w-82.5 h-8 m-auto">
      <nav>
        <ul className="flex border border-t-0 border-r-0 border-l-0 border-text-orange">
          {tabs.map((tab) => (
            <li key={`icon-${tab.id}`} className="relative w-12 h-8">
              <NavLink to={tab.to}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute inset-0 bottom-0.5  bg-orange-400 [clip-path:polygon(0_0,70%_0%,100%_100%,0%_100%)] translate-y-0.5" />
                    )}
                    <figure
                      className={`
                         absolute
                         ${isActive ? "inset-0.5 bg-active translate-y-1" : "inset-0 bg-inactive"}
                         flex items-center
                         transition-all duration-200
                         [clip-path:polygon(0_0,70%_0%,100%_100%,0%_100%)]
                       `}
                    >
                      <img
                        src={tab.url}
                        alt={`icon-${tab.name}`}
                        className="w-6 ml-2"
                      />
                    </figure>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
