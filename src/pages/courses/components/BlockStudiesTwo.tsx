import { useEffect, useState } from "react";
import type { DataCourses } from "../data/dataCourse";

interface Props {
  data: DataCourses;
}

const BlockStudiesTwo = ({ data }: Props) => {
  const { year, courses, img } = data;
  const [isOpacity, setisOpacity] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisOpacity(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const animation = isOpacity ? "animate-opacity-course" : "opacity-0";

  return (
    <div className="w-78 h-28 mb-10 flex items-center justify-between text-text-orange">
      <div className="w-5 h-10 relative flex items-center">
        <span className="w-1/2 h-10 absolute top-0 bottom-0 -z-10 bg-text-pink"></span>
        <p className="text-3xl font-eras_itc z-10">{year}</p>
      </div>
      <figure className="w-36 h-20 flex items-center">
        <img src={img} alt="" className="h-24" />
      </figure>
      <div className="w-25 h-28 flex flex-col justify-between">
        {courses.map((course, index) => (
          <div key={index} className={animation}>
            <p className="font-medium">{course.title}</p>
            <p className="font-light">{course.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlockStudiesTwo;
