import Title from "@/components/title/Title";
import BlockStudies from "./components/BlockStudies";
import { dataCoursesCurrent } from "./data/dataCourse";
import Container from "@/components/container/Container";

const Courses = () => {
  return (
    <>
      <Container>
        <Title title="Estudios" />
        {dataCoursesCurrent.map((data) => (
          <BlockStudies key={data.year} data={data} />
        ))}
      </Container>
    </>
  );
};
export default Courses;
