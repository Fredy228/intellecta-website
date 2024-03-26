import style from './sliderStyle.module.scss';
import { FC } from 'react';

export const ForTeachers: FC = () => {
  return (
    <div className={style.for_teachers}>
      <h2 className={style.for_teachers_header}>
        <span className={style.for_teachers_header_name}>Intellecta</span> - обʼєднує проведення онлайн уроків, надання та перевірку завдань та звʼязок із усіма учасниками навчального процесу в одному місці
      </h2>
      <p className={style.for_teachers_description}>
        Розклад, надання оцінок, автоматичний журнал відвідувань, чати із колегами та учнями доступні для кожного викладача. Автоматична розсилка новин та оголошень - це базові інструменти для полегшення дистанційного навчання у застосунку.
      </p>
      <p className={style.for_teachers_description}>
        З Intellecta викладачі можуть легко управляти всіма аспектами дистанційного навчання, зосереджуючись на наданні якісної освіти.
      </p>
    </div>);
};