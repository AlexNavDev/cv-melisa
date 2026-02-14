import Title from "@/components/title-component/Title";
import BlockStudiesTwo from "./components/BlockStudiesTwo";
import BlockStudiesThree from "./components/BlockStudiesThree";
import {
  dataCourses,
  dataThreeCourses,
  dataTwoCourses,
} from "./data/dataCourse";
import SectionMain from "@/components/section-main/SectionMain";

const Courses = () => {
  return (
    <>
      <SectionMain>
        <Title title="Estudios" />
        {dataTwoCourses.map((data) => (
          <BlockStudiesTwo key={data.year} data={data} />
        ))}
        {dataThreeCourses.map((data) => (
          <BlockStudiesThree key={data.year} data={data} />
        ))}
        {dataCourses.map((data) => (
          <BlockStudiesTwo key={data.year} data={data} />
        ))}
      </SectionMain>
    </>
  );
};
export default Courses;
