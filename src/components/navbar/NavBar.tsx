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
    { to: "/", url: ICONSOBREMI },
    { to: "/habilidades_tecnicas", url: ICONHABILIDADESTEC },
    { to: "/cursos", url: ICONCURSOS },
    { to: "/trabajos", url: ICONTRABAJOS },
    { to: "/habilidades_blandas", url: ICONHABILIDADESBLA },
    { to: "/certificados", url: ICONCERTIFICADOS },
    { to: "/contacto", url: ICONCONTACTO },
  ];
  return (
    <header className="">
      <nav>
        <ul className="flex  border border-t-0 border-r-0 border-l-0 border-text-orange">
          {tabs.map((tab) => (
            <li key={tab.to} className="relative w-16 h-13">
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
                         flex items-center justify-center
                         transition-all duration-200
                         [clip-path:polygon(0_0,70%_0%,100%_100%,0%_100%)]
                       `}
                    >
                      <img src={tab.url} alt="" className="w-8" />
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
