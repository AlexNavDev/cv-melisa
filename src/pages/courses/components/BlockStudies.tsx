import type { DataCourses } from "../data/dataCourse";

interface Props {
  data: DataCourses;
}

const BlockStudies = ({ data }: Props) => {
  const { year, courses, img } = data;

  return (
    <div className="w-78 mb-5 flex items-center justify-between text-text-orange">
      <div className="w-5 h-10 relative flex items-center">
        <span className="w-1/2 h-10 absolute top-0 bottom-0 -z-10 bg-text-pink"></span>
        <p className="text-3xl font-eras_itc z-10">{year}</p>
      </div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-36 h-27 bg-cover"
      ></div>
      {/*<figure className="w-36 h-25 flex items-center bg-amber-200 ">
        <img src={img} alt="" className="min-h-20" />
      </figure>*/}
      <div className="w-25 text-sm ">
        {courses.map((course, index) => (
          <div key={index} className="py-1 mb-3 animate-opacity-course">
            <p className="font-medium">{course.title}</p>
            <p className="font-light">{course.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlockStudies;
