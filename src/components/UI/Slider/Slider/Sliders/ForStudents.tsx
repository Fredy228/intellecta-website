import { FC } from "react";
import style from "./sliderStyle.module.scss";
import homeFirstImg from "assets/img/homeSlide.webp";

export const ForStudents: FC = () => {
  return (
    <div className={style.for_students}>
      <div className={style.for_students__info}>
        <h2 className={style.slider_title}>
          <span>Intellecta</span> - це ваш особистий органайзер для успішного
          навчання
        </h2>
        <p className={style.slider_description}>
          Зручне меню на головній сторінці дозволяє швидко переглядати розклад і
          отримувати посилання на онлайн уроки. Одна сторінка для новин,
          повідомлень з класних бесід, дедлайнів та рейтингу дозволяє тримати
          все під контролем.
        </p>
        <p className={style.slider_description}>
          Швидкий доступ до журналу оцінок і зручних тестів з кожного предмету
          допомагає вам відстежувати свій прогрес. А функція зв'язку із
          однокласниками та викладачами створює ефективну платформу для обміну
          інформацією та спілкування. Зробіть навчання легшим та цікавішим з
          нашим додатком!
        </p>
      </div>
      <div className={style.for_students__image}>
        <img src={homeFirstImg} alt="Laptop with web-application" />
      </div>
    </div>
  );
};
