import { IconStatistic } from "../../Icon/Icons";

export type TCardProps = {
    id:number;
    svg:JSX.Element;
    title:string;
    subtitle:string;
    linkText:string;
    role:string;
    bg:string;
}

export const cardContent: TCardProps[] = [
    {
        id:1,
        svg: <IconStatistic />,
        title: 'Делегуйте',
        subtitle: 'Автоматичний процес створення розкладу та збір статистики навчального процесу',
        linkText: 'Детальніше',
        role: 'Для адміністрації',
        bg:"#FFF5D1FF "

    },
    {
        id:2,
        svg: <IconStatistic />,
        title: 'Відстежуйте',
        subtitle: 'Автоматизований журнал відвідування, оцінок та виконання домашніх завдань',
        linkText: 'Детальніше',
        role: 'Для викладачів',
        bg:"#D1F9FFFF"
    },
    {
        id:3,
        svg: <IconStatistic />,
        title: 'Будь в темі',
        subtitle: 'Ефективний моніторинг дедлайнів та подання домашніх завдань  у будь-який момент',
        linkText: 'Детальніше',
        role: 'Для учнів',
        bg:"#D1FFD4FF"
    },
    {
        id:4,
        svg: <IconStatistic />,
        title: 'Спілкуйтеся',
        subtitle: 'Зручна комунікація зі студентами та викладачами через чат, відео- та аудіоконференції',
        linkText: 'Детальніше',
        role: 'Для вісх',
        bg:"#FCD1FFFF"
    },
]