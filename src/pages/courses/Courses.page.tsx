import Title from "@/components/title/Title";
import BlockStudies from "./components/BlockStudies";
import { dataCoursesCurrent } from "./data/dataCourse";
import SectionMain from "@/components/main/SectionMain";

const Courses = () => {
  return (
    <>
      <SectionMain>
        <Title title="Estudios" />
        {dataCoursesCurrent.map((data) => (
          <BlockStudies key={data.year} data={data} />
        ))}
      </SectionMain>
    </>
  );
};
export default Courses;
