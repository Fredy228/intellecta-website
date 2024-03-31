//Student img
import homeFirstImg from "assets/img/homeSlide.webp";

import studentSlide from "assets/img/studentSlide.png";
import studentSlide1 from "assets/img/studentSlide1.png";
import studentSlide2 from "assets/img/studentSlide2.png";
import studentSlide3 from "assets/img/studentSlide3.png";
import studentSlide4 from "assets/img/studentSlide4.png";
import studentSlide5 from "assets/img/studentSlide5.png";
//Teacher img
import teacherSlide from "assets/img/teacherSlide.png";
import teacherSlide1 from "assets/img/teacherSlide1.png";
import teacherSlide2 from "assets/img/teacherSlide2.png";
import teacherSlide3 from "assets/img/teacherSlide3.png";
import teacherSlide4 from "assets/img/teacherSlide4.png";
import teacherSlide5 from "assets/img/teacherSlide5.png";
//Admin img
import adminSlide from "assets/img/adminSlide.png";
import adminSlide1 from "assets/img/adminSlide1.png";
import adminSlide2 from "assets/img/adminSlide2.png";
import adminSlide3 from "assets/img/adminSlide3.png";
import adminSlide4 from "assets/img/adminSlide4.png";
import adminSlide5 from "assets/img/adminSlide5.png";

import { ReactElement } from "react";
import { ForStudents } from "./Slider/Sliders/ForStudents";
import { ForTeachers } from "./Slider/Sliders/ForTeachers";
import { ForAdmins } from "./Slider/Sliders/ForAdmins";

export type TSlideProps = {
  id: number;
  textElement: ReactElement;
};
export type TSlideProps2 = {
  id: number;
  image: string;
};

export const slideHome: TSlideProps[] = [
  {
    id: 1,
    textElement: <ForStudents />,
  },
  {
    id: 2,
    textElement: <ForTeachers />,
  },
  {
    id: 3,
    textElement: <ForAdmins />,
  },
];

export const slideStudents: TSlideProps2[] = [
  {
    id: 1,
    image: studentSlide,
  },
  {
    id: 2,
    image: studentSlide1,
  },
  {
    id: 3,
    image: studentSlide2,
  },
  {
    id: 4,
    image: studentSlide3,
  },
  {
    id: 5,
    image: studentSlide4,
  },
  {
    id: 6,
    image: studentSlide5,
  },
];
export const slideTeacher: TSlideProps2[] = [
  {
    id: 1,
    image: teacherSlide,
  },
  {
    id: 2,
    image: teacherSlide1,
  },
  {
    id: 3,
    image: teacherSlide2,
  },
  {
    id: 4,
    image: studentSlide3,
  },
  {
    id: 5,
    image: teacherSlide4,
  },
  {
    id: 6,
    image: teacherSlide3,
  },
];
export const slideAdmins: TSlideProps2[] = [
  {
    id: 1,
    image: adminSlide,
  },
  {
    id: 2,
    image: adminSlide1,
  },
  {
    id: 3,
    image: adminSlide2,
  },
  {
    id: 4,
    image: adminSlide3,
  },
  {
    id: 5,
    image: adminSlide4,
  },
  {
    id: 6,
    image: adminSlide5,
  },
];

export const slideContact: TSlideProps2[] = [
  {
    id: 1,
    image: homeFirstImg,
  },
  {
    id: 2,
    image: homeFirstImg,
  },
  {
    id: 3,
    image: homeFirstImg,
  },
];
