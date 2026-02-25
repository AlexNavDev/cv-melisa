import SectionMain from "@/components/main/SectionMain";
import Title from "@/components/title/Title";
import { dataWork } from "./data/dataCard";
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
