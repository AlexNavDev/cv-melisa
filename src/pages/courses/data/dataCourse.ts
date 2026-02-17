// import RAMIFICACION2 from "@/assets/course-img/giphy.gif";
import RAMIFICACION2 from "@/assets/course-img/ramificaciones-2.gif";
import RAMIFICACION3 from "@/assets/course-img/ramificaciones-3.gif";

interface Courses {
  title: string;
  institution: string;
}

export interface DataCourses {
  year: number;
  courses: Courses[];
  img?: string;
}

const dataCoursesCurrent: DataCourses[] = [
  {
    year: 20,
    courses: [
      { title: "Photoshop", institution: "Coderhouse" },
      { title: "Illustrator", institution: "Coderhouse" },
    ],
    img: RAMIFICACION2,
  },
  {
    year: 21,
    courses: [
      { title: "Diseño UX/UI", institution: "Coderhouse" },
      { title: "Desarrollo Web", institution: "Coderhouse" },
      { title: "Diseño UX/UI Avanzado", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 22,
    courses: [
      { title: "JavaScript", institution: "Coderhouse" },
      {
        title: "Fundamentos de la programación",
        institution: "Egg Educación",
      },
      { title: "React", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 24,
    courses: [
      { title: "Front-End Back-End", institution: "Codo a codo" },
      { title: "MySql", institution: "Pildoras informáticas" },
      { title: "Java-MySql", institution: "Mujeres informáticas" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 26,
    courses: [
      {
        title: "IA automatización de flujos de trabajo",
        institution: "Campus UNC",
      },
      {
        title: "Inglés It",
        institution: "En proceso",
      },
    ],
    img: RAMIFICACION2,
  },
];

const dataTwoCourses: DataCourses[] = [
  {
    year: 20,
    courses: [
      { title: "Photoshop", institution: "Coderhouse" },
      { title: "Illustrator", institution: "Coderhouse" },
    ],
    img: RAMIFICACION2,
  },
];

const dataThreeCourses: DataCourses[] = [
  {
    year: 21,
    courses: [
      { title: "Diseño UX/UI", institution: "Coderhouse" },
      { title: "Desarrollo Web", institution: "Coderhouse" },
      { title: "Diseño UX/UI Avanzado", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 22,
    courses: [
      { title: "JavaScript", institution: "Coderhouse" },
      {
        title: "Fundamentos de la programación",
        institution: "Egg Educación",
      },
      { title: "React", institution: "Coderhouse" },
    ],
    img: RAMIFICACION3,
  },
  {
    year: 24,
    courses: [
      { title: "Front-End Back-End", institution: "Codo a codo" },
      { title: "MySql", institution: "Pildoras informáticas" },
      { title: "Java-MySql", institution: "Mujeres informáticas" },
    ],
    img: RAMIFICACION3,
  },
];

export { dataCoursesCurrent, dataTwoCourses, dataThreeCourses };
