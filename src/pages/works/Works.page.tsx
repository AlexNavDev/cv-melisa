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
      </SectionMain>
    </>
  );
};
export default Works;
