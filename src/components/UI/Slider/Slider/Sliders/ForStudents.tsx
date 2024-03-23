import style from "./sliderStyle.module.scss";
import { FC } from 'react';

export const ForStudents: FC = () => {
  return (
    <div className={style.for_students}>
      <h2 className={style.for_students_header}>
        <span className={style.for_students_header_name}>Intellecta</span> - це ваш особистий органайзер для успішного навчання
      </h2>
      <p className={style.for_students_description}>
        Зручне меню на головній сторінці дозволяє швидко переглядати розклад і отримувати посилання на онлайн уроки. Одна сторінка для новин, повідомлень з класних бесід, дедлайнів та рейтингу дозволяє тримати все під контролем.
      </p>
      <p className={style.for_students_description}>
        Швидкий доступ до журналу оцінок і зручних тестів з кожного предмету допомагає вам відстежувати свій прогрес. А функція зв'язку із однокласниками та викладачами створює ефективну платформу для обміну інформацією та спілкування. Зробіть навчання легшим та цікавішим з нашим додатком!
      </p>
    </div>
  );
};

