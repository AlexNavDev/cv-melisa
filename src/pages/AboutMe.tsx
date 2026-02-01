import MEL from "@assets/photos/principal-image.svg";

const AboutMe = () => {
  return (
    <section className=" border-2 border-text-orange border-t-0 ">
      <div className="h-64 flex flex-col justify-center">
        <div className="text-4xl font-eras_itc mb-3  text-text-orange">
          <p>Soy Diseñadora</p>
          <p className="pl-20">Ux/Ui</p>
        </div>
        <div className="w-64 pl-6  text-text-gray">
          <p>
            Empatizar y comprender la demanda del usuario como punto de partida
            para idear y diseñar elementos que satisfaga su necesidad.
          </p>
        </div>
      </div>

      <figure className="w-full h-96 flex justify-center">
        <img src={MEL} alt="" />
      </figure>

      <div className="flex flex-col items-end pb-2">
        <div className="font-eras_itc text-4xl mb-3 text-text-orange">
          <p>Soy</p>
          <p>Desarrolladora</p>
          <p>Web</p>
        </div>
        <div className="w-9/12 text-text-gray">
          <p>
            Transmutar un diseño prototipado en un sitio web, integrado
            visibilidad, alcance, aspecto, contenido y funcionalidad para que el
            usuario interactúe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
