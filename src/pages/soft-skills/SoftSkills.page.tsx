import SectionMain from "@/components/section-main/SectionMain";
import Title from "@/components/title-component/Title";

const SoftSkills = () => {
  const styleCard =
    "size-21 absolute text-center flex items-center justify-center rounded-md text-text-orange,text-text-orange-dark)] border-[1.47px] bg-linear-to-tl from to-text-orange to text-text-orange-dark";
  return (
    <>
      <SectionMain>
        <Title title="Habilidades Blandas" />
        <div className="h-96">
          <div className="h-80 relative flex justify-center font-roboto rounded-full">
            <div className={`${styleCard}`}>
              <p className="w-16 text-text-gray text-xs tracking-wider ">
                Adaptable
              </p>
            </div>
            <div className={`${styleCard} top-10 right-7 `}>
              <p className="w-16 text-text-gray text-xs tracking-wider ">
                Proactiva
              </p>
            </div>

            <div className={`${styleCard} right-0 top-31`}>
              <p className="w-16 text-text-gray text-xs tracking-wider">
                Escucha Activa
              </p>
            </div>
            <div className={`${styleCard} right-7 top-52`}>
              <p className="w-16 text-text-gray text-xs tracking-wider">
                Atención al detalle
              </p>
            </div>
            <div className={`${styleCard} bottom-0 `}>
              <p className=" text-text-gray text-xs tracking-wider">
                Comunicación efectiva
              </p>
            </div>
            <div className={`${styleCard} left-7 bottom-7`}>
              <p className=" text-text-gray text-xs tracking-wider">
                Resolución de Conflictos
              </p>
            </div>
            <div className={`${styleCard} left-0 bottom-28`}>
              <p className=" text-text-gray text-xs tracking-wider">
                Creatividad
              </p>
            </div>
            <div className={`${styleCard} left-7 top-10`}>
              <p className=" text-text-gray text-xs tracking-wider">
                Responsable
              </p>
            </div>
          </div>
        </div>
      </SectionMain>
    </>
  );
};
export default SoftSkills;
