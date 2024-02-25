import {
  IconAlgebra,
  IconGeography,
  IconPhysicalTraining,
  IconEducation,
  IconHistory
} from "../../Icon/Icons";

type svgArr = {
  id: number;
  svgArr: React.JSX.Element;
};

export type WidgetsProps = {
  id: number;
  title: string;
  subtitle: string;
  svg?: React.JSX.Element;
  svgArray?: svgArr[];
  count?: number;
};
const svgOptions: svgArr[] = [
  {
    id: 1,
    svgArr: <IconGeography />
  },
  {
    id: 2,
    svgArr: <IconAlgebra />
  },
  {
    id: 3,
    svgArr: <IconPhysicalTraining />
  }
];
export const widgets: WidgetsProps[] = [
  {
    id: 1,
    title: "ДЗ на завтра",
    subtitle: "Дивися домашки до всіх предметів на завтра",
    svgArray: svgOptions,
    count: 3
  },
  {
    id: 2,
    title: "Информатика",
    subtitle: "Чат по предмету “Інформатика”",
    svgArray: svgOptions,
    count: 3
  }
];
export const widgetsWork: WidgetsProps[] = [
  {
    id: 1,
    title: "Алгебра",
    subtitle: "Васильєва Алла",
    svg: <IconAlgebra />
  },
  {
    id: 2,
    title: "Історія",
    subtitle: "Іванов Максим",
    svg: <IconHistory />
  },
  {
    id: 3,
    title: "Географія",
    subtitle: "Левіцька Марія",
    svg: <IconGeography />
  },
  {
    id: 4,
    title: "Правознавство",
    subtitle: "Матвієнко Артем",
    svg: <IconEducation />
  }
];
