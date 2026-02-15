import SectionMain from "@/components/section-main/SectionMain";
import Title from "@/components/title-component/Title";
import { dataWork } from "./data/Data-card";
import CardWork from "./components/CardWork";
const Works = () => {
  return (
    <>
      <SectionMain>
        <Title title="Trabajos Realizados" />
        {dataWork.map((data) => (
          <CardWork key={data.id} data={data} />
        ))}

        {/*<div className="w-full flex justify-center">
          <div className="w-58 h-68 relative rounded-tr-2xl rounded-bl-4xl bg-card-bg text-text-gray ">
            <div
              style={{
                backgroundImage: `url(${IMGECOTECH})`,
              }}
              className="w-full h-68 bg-contain opacity-30"
            ></div>
            <div className="w-19 h-17 flex items-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-4xl inset-shadow-sm inset-shadow-pink-blur-top shadow-sm shadow-pink-blur-bottom bg-text-pink ">
              <p className="text-xl font-bold">Ux/Ui</p>
            </div>

            <div className="w-44 h-25 flex flex-col items-center justify-evenly  absolute bottom-0 left-0 bg-text-orange rounded-tr-2xl rounded-bl-4xl  inset-shadow-sm inset-shadow-orange-blur-top shadow-sm shadow-orange-blur-bottom">
              <p className="text-2xl font-medium">Diseño app</p>

              <div className="w-38 h-11 flex justify-between   ">
                <Link
                  to="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10"
                >
                  <img src={IMGCODE} alt="ir código" />
                </Link>
                <button className="size-10">
                  <img src={IMGEPLAY} alt="ir página" />
                </button>
                <button className="size-10">
                  <img src={IMGEBELANCE} alt="ir belance" />
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </SectionMain>
    </>
  );
};
export default Works;
