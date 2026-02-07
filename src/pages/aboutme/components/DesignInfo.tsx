import POBLUR from "@assets/figures/Polygon-blur.svg";

const DesignInfo = () => {
  return (
    <div className="h-64 flex flex-col justify-center animate-text-bounce-In-Left">
      <div className="text-3xl font-eras_itc mb-3  text-text-orange">
        <p>Soy Diseñadora</p>
        <p>Ux/Ui</p>
      </div>
      <div className="w-80 h-32  text-text-gray relative">
        <img
          src={POBLUR}
          alt="Elemento decorativo blur"
          className="absolute left-0"
        />
        <p className="p-4 font-roboto font-medium">
          Empatizar y comprender la demanda del usuario como punto de partida
          para idear y diseñar elementos que satisfaga su necesidad.
        </p>
      </div>
    </div>
  );
};
export default DesignInfo;
