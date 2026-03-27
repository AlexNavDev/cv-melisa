import type { DataCourses } from "../data/dataCourse";

interface Props {
  data: DataCourses;
}

const BlockStudies = ({ data }: Props) => {
  const { year, courses, img } = data;

  const sizeImgCourse = courses.length === 2 ? "h-24" : "h-48";

  return (
    <div className="w-78 mb-5 flex items-center justify-between text-text-orange md:w-[768px] md:justify-start">
      <div className="w-5 h-10 relative flex items-center md:w-[112px] md:h-[68px] ">
        <span className="w-1/2 h-10 absolute top-0 bottom-0 -z-10 bg-text-pink md:w-1/4 md:h-16"></span>
        <p className="text-[19px] font-eras_itc z-10 md:text-4xl">{year}</p>
      </div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`w-32 ml-4 bg-cover md:w-[410px] md:h-[350px] md:bg-contain md:bg-center md:bg-no-repeat ${sizeImgCourse}`}
      ></div>
      <div className="w-28">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`pb-2 mb-3 animate-opacity-course md:w-57 md:text-[26px] text-balance`}
          >
            <p className="font-medium">{course.title}</p>
            <p className="font-light">{course.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlockStudies;
