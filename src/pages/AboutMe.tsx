import MEL from "@assets/photos/principal-photo.svg";
import POBLUR from "@assets/figures/Polygon-blur.svg";
import POBLUR2 from "@assets/figures/Polygon-blur2.svg";
import PO1 from "@assets/figures/Polygon-1.svg";
import PO2 from "@assets/figures/Polygon-2.svg";
import PO3 from "@assets/figures/Polygon-3.svg";
import PO4 from "@assets/figures/Polygon-4.svg";
import PO5 from "@assets/figures/Polygon-5.svg";
import PO6 from "@assets/figures/Polygon-6.svg";
import PO7 from "@assets/figures/Polygon-7.svg";

const AboutMe = () => {
  return (
    <section className="w-82.5 mx-auto px-2 border-2 border-text-orange border-t-0 ">
      <div className="h-64 flex flex-col justify-center animate-text-bounce-In-Left">
        <div className="text-3xl font-eras_itc mb-3  text-text-orange">
          <p>Soy Diseñadora</p>
          <p>Ux/Ui</p>
        </div>
        <div className="w-80 h-32  text-text-gray relative">
          <img src={POBLUR} alt="" className="absolute left-0" />
          <p className="p-4">
            Empatizar y comprender la demanda del usuario como punto de partida
            para idear y diseñar elementos que satisfaga su necesidad.
          </p>
        </div>
      </div>

      <figure className="w-full h-96  flex justify-center items-center relative">
        <img
          src={MEL}
          alt="Photo-Mel"
          className="w-80 h-60  animate-photo-scale z-50"
        />
        <div className="w-80 h-80 md:w-96 md:h-96 absolute top-1/12 md:top-0 rounded-full">
          <img src={PO1} alt="" className="w-8 absolute left-11 top-0 " />
          <img
            src={PO2}
            alt=""
            className="w-8 absolute left-2/3 top-0 animate-tilt-in-fwd-tr z-10"
          />
          <img
            src={PO3}
            alt=""
            className="w-14 absolute right-0 top-1/5 animate-spin"
          />
          <img src={PO4} alt="" className="w-10 absolute right-0 top-2/4" />
          <img src={PO1} alt="" className="w-14 absolute right-10 top-4/5 " />
          <img src={PO5} alt="" className="w-10 absolute left-16 top-10/12 " />
          <img
            src={PO6}
            alt=""
            className="w-8 absolute left-3 top-3/5 animate-scale-up-left"
          />
          <img src={PO7} alt="" className="w-8 absolute left-3 top-1/5 " />
        </div>
      </figure>

      <div className="flex flex-col pb-2 animate-text-bounce-In-Left">
        <div className="w-80 font-eras_itc text-3xl mb-3 text-text-orange">
          <p>Soy Desarrolladora</p>
          <p>Web</p>
        </div>
        <div className="w-80 h-28 text-text-gray relative">
          <p className="px-4">
            Transmutar un diseño prototipado en un sitio web, integrado
            visibilidad, alcance, aspecto, contenido y funcionalidad para que el
            usuario interactúe.
          </p>
          <img src={POBLUR2} alt="" className="absolute -bottom-3 right-0" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
