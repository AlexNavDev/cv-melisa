import MEL from "@assets/photos/foto-perfil.png";
import PO1 from "@assets/figures/Polygon-1.svg";
import PO2 from "@assets/figures/Polygon-2.svg";
import PO3 from "@assets/figures/Polygon-3.svg";
import PO4 from "@assets/figures/Polygon-4.svg";
import PO5 from "@assets/figures/Polygon-5.svg";
import PO6 from "@assets/figures/Polygon-6.svg";
import PO7 from "@assets/figures/Polygon-7.svg";

const ProfileHero = () => {
  return (
    <div className="lg:w-136 lg:h-111 lg:mt-30">
      <figure className="w-full h-96 flex justify-center items-center relative">
        <img
          src={MEL}
          alt="Foto de Melisa - Diseñadora UX/UI y Frontend Developer"
          className="w-80 h-60 animate-photo-scale z-50 md:w-100 md:h-75 lg:w-132.5 lg:h-100"
        />
        <div className="w-80 h-80 absolute top-1/12 rounded-full md:w-96 md:h-96 md:top-0">
          <img
            src={PO1}
            alt="Elemento decorativo animado"
            className="w-8 absolute left-11 top-0 animate-rotate-center lg:w-10"
          />
          <img
            src={PO2}
            alt="Elemento decorativo animado"
            className="w-8 absolute left-2/4 top-0 animate-scale-up lg:-top-10"
          />
          <img
            src={PO3}
            alt="Elemento decorativo animado"
            className="w-14 absolute right-0 top-1/5 animate-rotate-center  lg:top-[5%]"
          />
          <img
            src={PO4}
            alt="Elemento decorativo animado"
            className="w-10 absolute right-3 top-2/4 animate-rotate-center lg:-right-10"
          />
          <img
            src={PO1}
            alt="Elemento decorativo animado"
            className="w-14 absolute right-10 top-4/5 animate-rotate-center lg:top-[95%] "
          />
          <img
            src={PO5}
            alt="Elemento decorativo animado"
            className="w-10 absolute left-16 top-10/12 animate-scale-down-up lg:top-[98%]"
          />
          <img
            src={PO6}
            alt="Elemento decorativo animado"
            className="w-8 absolute left-3 top-3/5 animate-scale-up-left lg:-left-9"
          />
          <img
            src={PO7}
            alt="Elemento decorativo animado"
            className="w-8 absolute left-3 top-1/5 animate-rotate-center lg:w-10 lg:top-1/4 lg:-left-6 "
          />
        </div>
      </figure>
    </div>
  );
};

export default ProfileHero;
