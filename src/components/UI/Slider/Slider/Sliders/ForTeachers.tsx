import { FC } from "react";
import style from "./sliderStyle.module.scss";
import homeSecondImg from "assets/img/homeSLide1.webp";

export const ForTeachers: FC = () => {
  return (
    <div className={style.for_teachers}>
      <div className={style.for_teachers__info}>
        <h2 className={style.slider_title}>
          <span>Intellecta</span> - обʼєднує проведення онлайн уроків, надання
          та перевірку завдань та звʼязок із усіма учасниками навчального
          процесу в одному місці
        </h2>
        <p className={style.slider_description}>
          Розклад, надання оцінок, автоматичний журнал відвідувань, чати із
          колегами та учнями доступні для кожного викладача. Автоматична
          розсилка новин та оголошень - це базові інструменти для полегшення
          дистанційного навчання у застосунку.
        </p>
        <p className={style.slider_description}>
          З Intellecta викладачі можуть легко управляти всіма аспектами
          дистанційного навчання, зосереджуючись на наданні якісної освіти.
        </p>
      </div>
      <div className={style.for_teachers__image}>
        <img src={homeSecondImg} alt="Laptop with web-application" />
      </div>
    </div>
  );
};
