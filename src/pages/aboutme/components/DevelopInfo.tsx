import POBLUR2 from "@assets/figures/Polygon-blur2.svg";

const DevelopInfo = () => {
  return (
    <div className="flex flex-col pb-2 animate-text-bounce-In-Left md:items-end md:h-85 md:mt-10">
      <div className="w-80 font-eras_itc text-3xl text-text-orange mb-3 md:text-5xl md:w-104">
        <p>Soy Desarrolladora</p>
        <p>Web</p>
      </div>
      <div className="w-80 h-28 text-text-gray relative md:w-104">
        <p className="px-4 font-roboto font-medium md:text-[22px]">
          Transmutar un diseño prototipado en un sitio web, integrado
          visibilidad, alcance, aspecto, contenido y funcionalidad para que el
          usuario interactúe.
        </p>
        <img
          src={POBLUR2}
          alt="Elemento decorativo blur"
          className="absolute -bottom-3 right-0 md:-bottom-14 md:right-5"
        />
      </div>
    </div>
  );
};

export default DevelopInfo;
