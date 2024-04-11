import {
  IconAggregator,
  IconChat,
  IconIncubator,
  IconNuoy,
  IconStatistic,
  IconTests,
  IconZhurnal,
} from "../../Icon/Icons";

export type TCardProps = {
  id: number;
  svg: JSX.Element;
  title: string;
  subtitle: string;
  linkText: string;
  role: string;
  bg: string;
  link: string;
};
export type TCardContactProps = {
  id: number;
  svg: JSX.Element;
  title: string;
  role: string;
  url: string;
  bg: string;
};
export const cardContent: TCardProps[] = [
  {
    id: 1,
    svg: <IconStatistic />,
    title: "Делегуйте",
    subtitle:
      "Автоматичний процес створення розкладу та збір статистики навчального процесу",
    linkText: "Детальніше",
    role: "Для адміністрації",
    bg: "#FFF5D1FF ",
    link: "/administration",
  },
  {
    id: 2,
    svg: <IconZhurnal />,
    title: "Відстежуйте",
    subtitle:
      "Автоматизований журнал відвідування, оцінок та виконання домашніх завдань",
    linkText: "Детальніше",
    role: "Для викладачів",
    bg: "#D1F9FFFF",
    link: "/teacher",
  },
  {
    id: 3,
    svg: <IconTests />,
    title: "Будь в темі",
    subtitle:
      "Ефективний моніторинг дедлайнів та подання домашніх завдань  у будь-який момент",
    linkText: "Детальніше",
    role: "Для учнів",
    bg: "#D1FFD4FF",
    link: "/students",
  },
  {
    id: 4,
    svg: <IconChat />,
    title: "Спілкуйтеся",
    subtitle:
      "Зручна комунікація зі студентами та викладачами через чат, відео- та аудіоконференції",
    linkText: "Детальніше",
    role: "Для вісх",
    bg: "#FCD1FFFF",
    link: "/contacts",
  },
];

export const cardContact: TCardContactProps[] = [
  {
    id: 1,
    svg: <IconAggregator />,
    title: "G*AGGREGATOR",
    role: "Детальніше",
    url: "https://g-aggregator.com/",
    bg: "#FFFF",
  },
  {
    id: 2,
    svg: <IconNuoy />,
    title: 'НУ "ОЮА"',
    role: "Детальніше",
    url: "https://www.onua.edu.ua/ua/",
    bg: "#FFFF",
  },
  {
    id: 3,
    svg: <IconIncubator />,
    title: "G*INCUBATOR",
    role: "Детальніше",
    url: "https://g-aggregator.com/g-incubator",
    bg: "#FFFF",
  },
];
