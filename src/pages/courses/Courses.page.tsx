import Title from "@/components/title-component/Title";
import BlockStudies from "./components/BlockStudies";
import { dataCoursesCurrent } from "./data/dataCourse";
import SectionMain from "@/components/section-main/SectionMain";

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
